# hq

Headquarters for the browsertools-oss ventures. A CEO agent (Claude Opus) runs here every night at 10pm Pacific: it reviews every venture, researches new ones, writes direction for the crews, and gives orders that `scripts/provision.mjs` carries out (launching ventures, hiring workers, tuning crews, asking the owner).

- `.github/agent/ceo.md`: the CEO's standing instructions.
- `.github/workflows/nightly.yml`: the nightly session, started by the venture-cron Worker (browsertools-oss/subfixer, `cron/`).
- `scripts/provision.mjs`: carries out `ops/actions.json`. Holds the credentials; the model never sees them.
- `template/`: the crew every new venture gets (daily agent, weekly planner, boss, report, deploy).
- `ventures/<slug>/`: a venture the CEO is building before launch.
- `ops/`: portfolio, idea pipeline, org chart, log, and the provisioner's results.

Owner asks are issues labeled `decision`.
