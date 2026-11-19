#!/usr/bin/env node
// The provisioner: carries out the CEO's orders in ops/actions.json after the CEO's
// session ends. Deterministic and allowlisted, so the credentials (ADMIN_GH_TOKEN etc.)
// stay out of the model's reach. Results go to ops/actions-done.md; actions.json is emptied.
//
// Env: GH_TOKEN (browsertools-oss, repo + workflow), CLAUDE_CODE_OAUTH_TOKEN,
//      CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID, OPENROUTER_API_KEY.
// Usage: node scripts/provision.mjs [--dry-run]
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";

const OWNER = "browsertools-oss";
const CRON_REPO = `${OWNER}/subfixer`; // hosts cron/schedule.json, read by the venture-cron Worker
const ROLE_HOURS = [0, 2, 8, 10, 12, 14, 16, 20, 22]; // clear of 4am Sunday, 6am, 6pm and each other
const VARS = ["AGENT_MINUTES", "AGENT_REQUESTS", "BOSS_MAX_QUESTIONS"];
const SECRETS = ["CLAUDE_CODE_OAUTH_TOKEN", "CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID", "OPENROUTER_API_KEY"];
const dry = process.argv.includes("--dry-run");
const HQ = process.cwd();
const ACTIONS = path.join(HQ, "ops/actions.json");
const DONE = path.join(HQ, "ops/actions-done.md");

const today = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", month: "2-digit", day: "2-digit", year: "numeric" }).format(new Date()).replace(/\//g, "-");
const results = [];
const say = (line) => { console.log(line); results.push(line); };

const sh = (cmd, args, opts = {}) => execFileSync(cmd, args, { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"], ...opts }).trim();
const run = (cmd, args, opts) => (dry ? (console.log("[dry]", cmd, args.join(" ")), "") : sh(cmd, args, opts));
const exists = (repo) => { try { sh("gh", ["repo", "view", repo, "--json", "name"]); return true; } catch { return false; } };
const fileInRepo = (repo, p) => { try { sh("gh", ["api", `repos/${repo}/contents/${p}`, "--jq", ".name"]); return true; } catch { return false; } };
const slugOk = (s) => typeof s === "string" && /^[a-z0-9][a-z0-9-]{1,28}[a-z0-9]$/.test(s);
const nameOk = (s) => typeof s === "string" && /^[a-z][a-z0-9-]{1,30}$/.test(s) && !["morning", "evening"].includes(s);

function copyDir(src, dst, skip = () => false) {
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (skip(e.name, s)) continue;
    if (e.isDirectory()) { fs.mkdirSync(d, { recursive: true }); copyDir(s, d, skip); }
    else fs.copyFileSync(s, d);
  }
}

// --- the shared schedule (cron/schedule.json in the cron repo), edited once per night ---
let sched = null, schedDir = null;
function schedule() {
  if (sched) return sched;
  schedDir = fs.mkdtempSync(path.join(os.tmpdir(), "sched-"));
  sh("git", ["clone", "-q", "--depth", "1", `https://github.com/${CRON_REPO}.git`, schedDir]);
  sched = JSON.parse(fs.readFileSync(path.join(schedDir, "cron/schedule.json"), "utf8"));
  sched.roles ??= {};
  sched.paused ??= {};
  return sched;
}
function saveSchedule(why) {
  if (!sched) return;
  const file = path.join(schedDir, "cron/schedule.json");
  const next = JSON.stringify(sched, null, 2) + "\n";
  if (fs.readFileSync(file, "utf8") === next) return;
  fs.writeFileSync(file, next);
  if (dry) return console.log("[dry] schedule.json ->\n" + next);
  sh("git", ["-C", schedDir, "-c", "user.name=hq-provisioner", "-c", "user.email=hq-provisioner@users.noreply.github.com", "commit", "-qam", `Schedule: ${why}`]);
  sh("git", ["-C", schedDir, "pull", "--rebase", "-q"]);
  sh("git", ["-C", schedDir, "push", "-q"]);
}
const repoOf = (name) => `${OWNER}/${name}`;
const minuteFor = () => {
  const s = schedule();
  const used = Object.values(s.repos);
  return used.filter((m) => m === 17).length <= used.filter((m) => m === 47).length ? 17 : 47;
};

// --- orders ---
function launch(o) {
  const { slug, title, pitch } = o;
  if (!slugOk(slug)) throw new Error(`bad slug "${slug}"`);
  if (!title || !pitch) throw new Error("launch needs title and pitch");
  const src = path.join(HQ, "ventures", slug);
  if (!fs.existsSync(path.join(src, "package.json"))) throw new Error(`ventures/${slug}/package.json is missing; build the site first`);
  const repo = repoOf(slug);
  if (exists(repo)) throw new Error(`${repo} already exists`);
  const domain = `${slug}.pages.dev`;

  const dir = fs.mkdtempSync(path.join(os.tmpdir(), `${slug}-`));
  const render = (t) => t.replaceAll("{{SLUG}}", slug).replaceAll("{{TITLE}}", title).replaceAll("{{DOMAIN}}", domain).replaceAll("{{PITCH}}", pitch);
  // Crew from the template, then the CEO's site on top (the CEO may not supply .github or scripts).
  copyDir(path.join(HQ, "template"), dir);
  for (const f of walk(dir)) if (/\.(md|mjs|js|json|ya?ml|txt|csv)$/.test(f) || path.basename(f) === ".gitignore") fs.writeFileSync(f, render(fs.readFileSync(f, "utf8")));
  copyDir(src, dir, (n, s) => s === path.join(src, ".github") || s === path.join(src, "scripts") || n === "node_modules" || n === "dist");

  run("gh", ["repo", "create", repo, "--public", "--description", pitch.slice(0, 300), "--homepage", `https://${domain}`]);
  run("gh", ["repo", "edit", repo, "--add-topic", "side-venture"]);
  for (const s of SECRETS) if (process.env[s]) run("gh", ["secret", "set", s, "-R", repo, "--body", process.env[s]]);
  for (const [k, v] of Object.entries({ AGENT_MINUTES: "55", JOB_TIMEOUT: "75", AGENT_MAX_TURNS: "400" })) run("gh", ["variable", "set", k, "-R", repo, "--body", v]);
  const g = (...a) => run("git", ["-C", dir, ...a]);
  g("init", "-q", "-b", "main");
  g("-c", "user.name=hq-provisioner", "-c", "user.email=hq-provisioner@users.noreply.github.com", "add", "-A");
  g("-c", "user.name=hq-provisioner", "-c", "user.email=hq-provisioner@users.noreply.github.com", "commit", "-qm", `Launch ${title}: ${pitch}`);
  g("remote", "add", "origin", `https://github.com/${repo}.git`);
  g("push", "-q", "-u", "origin", "main"); // starts the first deploy

  schedule().repos[repo] = minuteFor();
  if (!dry) {
    // Workflows register a few seconds after the first push.
    for (let i = 0; i < 10; i++) { try { sh("gh", ["workflow", "run", "weekly-plan.yml", "-R", repo]); break; } catch { sh("sleep", ["6"]); } }
  }
  if (!dry) fs.rmSync(src, { recursive: true, force: true });
  say(`launched ${repo}: https://${domain}, crew at minute ${sched.repos[repo]} of 6am/6pm, first weekly plan started`);
}

function hire(o) {
  const repo = repoOf(o.repo), role = o.role, hour = Number(o.hour);
  if (!nameOk(role)) throw new Error(`bad role "${role}"`);
  if (!ROLE_HOURS.includes(hour)) throw new Error(`hour ${o.hour} not allowed; use one of ${ROLE_HOURS.join(", ")}`);
  const s = schedule();
  if (s.repos[repo] === undefined) throw new Error(`${repo} has no crew in the schedule (paused or not a venture)`);
  if (!fileInRepo(repo, `ops/roles/${role}.md`)) throw new Error(`${repo} has no ops/roles/${role}.md`);
  const roles = (s.roles[repo] ??= {});
  if (roles[String(hour)] && roles[String(hour)] !== role) throw new Error(`${repo} already has ${roles[String(hour)]} at ${hour}:00`);
  for (const [h, r] of Object.entries(roles)) if (r === role) delete roles[h];
  roles[String(hour)] = role;
  say(`hired ${role} at ${repo}, daily at ${hour}:00 Pacific`);
}

function fire(o) {
  const repo = repoOf(o.repo);
  const roles = schedule().roles[repo] ?? {};
  const hit = Object.entries(roles).filter(([, r]) => r === o.role);
  if (!hit.length) throw new Error(`${repo} has no ${o.role}`);
  for (const [h] of hit) delete roles[h];
  if (!Object.keys(roles).length) delete sched.roles[repo];
  say(`let go ${o.role} at ${repo}`);
}

function pause(o) {
  const repo = repoOf(o.repo), s = schedule();
  if (s.repos[repo] === undefined) throw new Error(`${repo} is not running`);
  s.paused[repo] = s.repos[repo];
  delete s.repos[repo];
  say(`paused ${repo}'s crew`);
}

function resume(o) {
  const repo = repoOf(o.repo), s = schedule();
  if (s.paused[repo] === undefined) throw new Error(`${repo} is not paused`);
  s.repos[repo] = s.paused[repo];
  delete s.paused[repo];
  say(`resumed ${repo}'s crew`);
}

function setVar(o) {
  if (!VARS.includes(o.name)) throw new Error(`${o.name} is not an allowed variable`);
  const v = String(o.value);
  if (!/^\d{1,4}$/.test(v)) throw new Error(`value must be a whole number`);
  run("gh", ["variable", "set", o.name, "-R", repoOf(o.repo), "--body", v]);
  say(`set ${o.name}=${v} on ${repoOf(o.repo)}`);
}

function ownerAsk(o) {
  if (!o.title || !o.body) throw new Error("owner_ask needs title and body");
  const open = JSON.parse(sh("gh", ["issue", "list", "-R", `${OWNER}/hq`, "--label", "decision", "--state", "open", "--json", "title", "--limit", "100"]) || "[]");
  if (open.some((i) => i.title.trim().toLowerCase() === o.title.trim().toLowerCase())) return say(`owner ask "${o.title}" is already open`);
  const f = path.join(os.tmpdir(), "ask.md");
  fs.writeFileSync(f, o.body);
  const url = run("gh", ["issue", "create", "-R", `${OWNER}/hq`, "--label", "decision", "--title", o.title, "--body-file", f]);
  say(`asked the owner: ${o.title} ${url}`);
}

function* walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (e.name !== ".git" && e.name !== "node_modules") yield* walk(p); } else yield p;
  }
}

// --- main ---
let orders = [];
try { orders = JSON.parse(fs.readFileSync(ACTIONS, "utf8") || "[]"); } catch (e) { say(`ops/actions.json is not valid JSON (${e.message}); nothing done`); }
if (!Array.isArray(orders)) { say("ops/actions.json must be an array; nothing done"); orders = []; }
const handlers = { launch, hire, fire, pause, resume, set_var: setVar, owner_ask: ownerAsk };
let launches = 0;
const changed = [];
for (const o of orders) {
  try {
    if (!handlers[o?.type]) throw new Error(`unknown order type "${o?.type}"`);
    if (o.type === "launch" && ++launches > 1) throw new Error("one launch a night; try again tomorrow");
    handlers[o.type](o);
    if (["launch", "hire", "fire", "pause", "resume"].includes(o.type)) changed.push(`${o.type} ${o.slug || o.repo}${o.role ? " " + o.role : ""}`);
  } catch (e) {
    say(`FAILED ${o?.type ?? "?"} ${JSON.stringify(o).slice(0, 200)}: ${String(e.message).split("\n")[0]}`);
  }
}
try { saveSchedule(changed.join(", ")); } catch (e) { say(`FAILED saving the schedule: ${e.message.split("\n")[0]}`); }

if (results.length && !dry) {
  if (!fs.existsSync(DONE)) fs.writeFileSync(DONE, "# What the provisioner did with the CEO's orders\n");
  fs.appendFileSync(DONE, `\n## ${today}\n\n${results.map((r) => `- ${r}`).join("\n")}\n`);
}
if (!dry) fs.writeFileSync(ACTIONS, "[]\n");
