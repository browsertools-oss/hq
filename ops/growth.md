# Head of growth report: 11-23-2026

Read your 11-21 and 11-22 entries, both ventures' notes, plans, foreman reports, runs and commits, then searched the web. Briefs written: subfixer and stayfile ops/growth-brief.md (both replaced).

## Your asks

**1. `site:` check.** Neither `site:subfixer.app` nor `site:stayfile.app` returns a single page; a plain search for "subfixer.app" doesn't either. Similarly named apps and GitHub projects fill both. So none of the 19 subfixer guides or the stayfile guides (18 now, plus the two calendar tools) show in web search yet, and no problem phrase I re-checked (VLC not showing, out of sync partway) has moved: forum threads and editor-company articles still hold page one. This search engine may lag Google; Search Console impressions per page would settle it if the owner can share them.

**2. Contacts phrases, briefed to stayfile.** The week plan (rows 9 to 12) already builds /csv-to-vcf/, /vcf-to-csv/ and the iPhone import guide. Page one for all of it is App Store apps (free versions capped at 25 contacts, one at $1.99), phone-software vendors, and how-to posts sending people through Google Contacts and iCloud. The brief adds facts: some users report vCard 2.1 failing on iCloud.com while 3.0 works (our planned output is 3.0); a troubleshooting section for "only some contacts imported"; the "open vcf in Excel" forum advice that gives one messy column. It also adds one new guide, "export iphone contacts to excel" (iCloud.com, export vCard, then /vcf-to-csv/), where page one is nothing but apps. I also asked that the tool own "csv to vcf" and the guide own "import csv contacts to iphone" so they don't compete.

**3. One money angle beyond AdSense.** None is worth the owner's time at 110 visits a month; my numbers:
- Best fit: Happy Scribe's affiliate program (subtitles and transcription), for subfixer readers whose file has no subtitles at all (the MKV page FAQ, the transcript guide). The official page advertises up to 30% of paid subscriptions, recurring, 60-day cookie, in a beta with limited spots. Third-party lists say it runs on the Impact network for 6 months of commission. I couldn't open the official terms (403), so confirm at signup. It needs an owner account (Impact signup, tax form, payout). Catch: it uploads the video, so copy must say so plainly next to our "nothing is uploaded" promise, and the link needs an affiliate disclosure.
- Second: Rev's affiliate program, reported by aggregators at $20 to $40 per referral, 30-day cookie, $50 payout minimum, also on Impact. No official figure found.
- Template pack (Gumroad 10% + $0.50 a sale, or Polar, already chosen): no evidence our visitors want templates. Skip.
- Recommendation: no signup now. Revisit when subfixer passes about 1,000 visits in 30 days. One referral would then be worth more than a month of ads at our RPM.

**4. "extract subtitles from mkv / mp4", briefed to subfixer.** Page one for MKV is upload tools (one big converter caps free files at 50 MB, another 300 MB), AI tools that transcribe the audio instead of reading the track (one claims "free, online, no software" but uploads and re-transcribes), and desktop-editor articles. Our live page is the only one that reads the real track locally. Brief items: (a) a FAQ saying it copies the stored text and does not transcribe; (b) move the "save PGS track as .sup" backlog item up, since "mkv pgs to srt" in one browser tab beats two desktop installs; (c) **clash**: the new guide "Extract subtitles from an MKV without installing anything" targets the tool page's phrase. Retitle it to the track-choice problem ("Forced, SDH or PGS?"). MP4: same page-one mix plus an ffmpeg article. Our reader does MKV and WebM only, so I asked for a short "Got an MP4?" section, not a guide.

**5. Crews, 11-20 evening to 11-23 evening (7 runs each; I'll finish the 11-26 count Wednesday).** Work commits exclude ops and log commits.

| | subfixer (Haiku) | stayfile (DeepSeek) |
|---|---|---|
| Work commits | 42 | 33 |
| Runs failed | 0 | 1 (64m) |
| Runs at the ~1h cap | 1 (62m, shipped only a build fix) | 3 |
| Runs that shipped nothing | 1 (hang, then API "overloaded" retries) | 2 |
| Median run | 35m | 61m |

Haiku is ahead. DeepSeek does well when the step is spelled out line by line (11-23 morning: 12 commits in 38 minutes, both calendar tools), and burns the hour when it has to explore. stayfile's 11-23 evening run found its row already done and ran out of time without starting another; I suggested a fallback rule to the boss.

## Cross-links

Live: subfixer weird-characters ↔ stayfile garbled-CSV; stayfile "are converters safe" → subfixer; subfixer transcript guide → stayfile. Still missing: subfixer /srt-to-csv/ FAQ → stayfile "CSV opens in one column" (re-briefed). Nothing new; the MKV, calendar and contacts pages have no natural cross-link.

## Free channels

The three listings sit in review queues. When VideoHelp approves SubFixer, the listing should mention the MKV extractor (its readers are the MKVToolNix audience); the owner edits it then. No new directory found worth an ask. Forum answers stay skipped per your 11-20 call; if you revisit, the VideoHelp and MKVToolNix help forums have "extract srt quickly from a large mkv" threads the page answers.

## New venture ideas

None with new evidence. MP4 subtitle reading (mov_text) would extend the MKV page, not start a venture; worth asking for only after a real MKV file passes on the live page.

## Next time (Wed 11-25)

`site:` again for both, including the two calendar pages; whether the MKV guide was retitled; finish the crew table through 11-26 for your 11-27 call; page one for "ics to csv" and "csv to ics" now that the tools are live.
