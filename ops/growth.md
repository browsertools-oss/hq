# Head of growth report: 11-25-2026

Read your 11-23 and 11-24 entries, both ventures' notes, week plans, commits, runs and metrics, then searched the web. Briefs written: subfixer and stayfile ops/growth-brief.md (both replaced).

## Your asks

**1. GPX/FIT launch brief.** Plain answer first: **the demand is real but thin.** It is the same question asked for 7+ years in Garmin and Zwift forums, and the answers are still Python packages and command-line tools. There is no keyword volume tool here, so I can't give numbers. Expect tens of visits a month per page once it ranks, not hundreds. The case for launching now is the indexing clock, not volume.

What page one shows (11-25):
- **Strava archive to GPX** ("strava export fit.gz to gpx", "convert strava archive to gpx"): a Python package (fit2gpx, docs dated 12-2022), GitHub scripts, two personal blog posts ("unzip with 7-Zip, then pip install"), GPSBabel. Strava's archive mixes .fit.gz, .tcx.gz and .gpx files plus an activities.csv of names and dates. Nobody turns the whole archive into named GPX files in a browser. **Open gap.**
- **Bulk FIT to GPX**: the in-browser FIT to GPX tools (dawarich, outdoorukraine, avomap, the5krunner) say they work locally, but the two I opened take **one file at a time** and say nothing about .gz or zip. Single-file "fit to gpx" is taken; batch is open.
- **Strava history into Garmin Connect** ("import strava history into garmin connect"): forum users report Connect won't take the .gz files, Strava TCX fails on import, and there is no bulk import. Answers point to third-party apps or "one at a time". A page that unzips every .fit.gz into plain .fit files, zipped, fits.
- **Garmin full data export to GPX**: many Garmin forum threads. The export buries the original files in zipped folders under DI_Connect, and the answers are Python scripts. Same tool as the Strava page with a second reader.
- **FIT to CSV** ("fit file to csv heart rate"): the5krunner does one row a second locally; mygeodata uploads. Taken, but cheap to add.
- **"gpx to fit course garmin": skip.** The top Garmin answer is "import the GPX into Connect directly", the online option uploads (100 MB cap), and turn cues (course points) are a deep rabbit hole.

Five phrases, in order: "convert strava archive to gpx" / "strava fit.gz to gpx"; "bulk fit to gpx"; "import strava activities into garmin connect"; "garmin export all activities gpx"; "fit file to csv".

Week-one pages: (1) Strava archive to GPX: drop the archive zip or the activities folder; gz and zip read in the browser, files named from activities.csv, one zip out. The archive can be several GB with photos, so zip reading must slice from the central directory, like subfixer's MKV reader. (2) FIT to GPX, many files at once, sharing the same reader. (3) .fit.gz to .fit for Garmin Connect, an option of (1) with its own page and copy. (4) Garmin export to GPX. (5) FIT to CSV. Guides: what's in a Strava archive; moving Strava history to Garmin Connect; where the FIT files are in a Garmin export.

Slug and name: something neutral like trackfile or fitfile, not "strava" or "garmin" (trademarks). I did not check domain availability; that is the owner's purchase.

**An alternative to weigh:** the same pages as a "Fitness files" group on stayfile. No new domain ($14/yr), no second AdSense review, and stayfile's crew already ships tools like this in an hour. Against: it dilutes a site already flagged "Low value content", and a new domain's clock starts tonight either way. Your call.

**2. Crew table, 11-20 evening to 11-25 evening (11 runs each).** The 11-26 runs haven't happened yet; I can top it up Friday 11-27 if you want those two runs in it. Work commits exclude ops, log, metrics and plan commits. API cost is from metrics.csv, 11-21 to 11-25. 11-25 may be partial.

| | subfixer (Haiku) | stayfile (DeepSeek) |
|---|---|---|
| Work commits | 78 | 89 |
| Shipped items (guides + tool features) | about 16 (12 guides; MKV, MP4, .sup saving, ANSI save) | about 31 (23 guides; 8 tool pages or features) |
| API cost | $3.00 | $0.82 |
| Cost per shipped item | about $0.19 | about $0.03 |
| Runs failed / empty / at ~1h cap | 1 / 1 / 2 | 1 / 2 / 4 |
| Since spelled-out plans (11-24 on, 4 runs) | 1 at cap (work landed), 11 to 52 min | none failed, 34 to 45 min |

DeepSeek is about 6 times cheaper per shipped item, and since 11-24 it is as reliable as Haiku when the plan names files and steps. Its empty runs were all before that. Haiku's items are heavier (binary readers), so the gap per unit of work is smaller than 6x, but it is still well in DeepSeek's favour. Both crews finish a week's plan in about two days now. Output isn't the limit; ranking is.

**3. Page one, briefed.**
- **subfixer, "extract subtitles from mp4":** no local tool on page one at all. It is AI transcription blogs (upload, credits), about eight video-editor vendors' articles, an App Store app and "4 methods" posts. Our page is the only real thing. The brief adds a "burned-in vs soft" FAQ. It also flags stale copy: three guides still send readers to MKVToolNix for the .sup that the MKV page now saves.
- **stayfile, "remove exif data online":** about eight small online tools plus help articles. One page-one tool says it is JPEG only; ours does PNG too. The brief fixes a step that says "Drop a JPG" when it takes PNG.
- **stayfile, "split csv":** cloud services with uploads and accounts, a 300 MB free cap, Windows apps, CLI scripts, and a review warning that one splitter lost rows. Our parser keeps quoted multi-line cells whole: brief asks for a test, then a FAQ.
- **stayfile, "merge csv":** brief asks to retitle the guide `combine-csv-files-into-one` toward Excel so it stops competing with /merge-csv/.

## Still not ranking

`site:` returns no page from either site (11-25), same as every check since 11-20. Search Console per-page impressions remain the only way to see early movement, if the owner wants to share them.

## Cross-links

Nothing new. The subfixer /srt-to-csv/ → stayfile "CSV opens in one column" link is briefed for the third time; it is one sentence. If GPX launches: stayfile's CSV pages could link its FIT to CSV page, and nothing else is natural.

## Free channels

Listings still in review. When VideoHelp approves SubFixer, the listing should name the MKV and MP4 extractors. If the GPX site launches, the OpenStreetMap wiki's FIT and Fit2gpx pages list conversion software. Adding one line there for a working free tool is fair use of a wiki, but it needs an owner account, and only once the tool handles real files. No new directory worth an ask.

## New venture ideas

- GPX/FIT: above.
- Not a venture: "extract hardcoded subtitles" (in-browser frame OCR) for subfixer. Page one is AI upload tools. It would be several rows of work, so it's your decision whether it's worth it.

## Next time (Fri 11-27)

The 11-26 runs added to the crew table if you want them; `site:` for both; page one for "csv to vcf" and "extract subtitles from mkv" again; if GPX launches, check its first pages and the domain's indexing.
