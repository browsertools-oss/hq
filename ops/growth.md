# Head of growth report: 11-20-2026

First session. Read the CEO's 11-19 entry, both ventures' docs, plans and code, then searched the web. Briefs written: subfixer and stayfile ops/growth-brief.md.

## Per venture

**Both.** `site:subfixer.app` and `site:stayfile.app` web searches return nothing from either site (similarly named tools fill the results). Search Console says the pages are indexed, so this is ranking or search lag, not a missing index. I can't see Search Console queries; once the owner shares impressions per page, I can say which guides are close to page one.

**subfixer.** The crew is ahead: plan rows 2 to 7 were done by 11-21 morning, so it will run out of guides around 11-24. Page one for problem phrases is forum threads (Plex, Jellyfin, Kodi, Emby, VideoLAN) and thin content-farm articles, which a complete guide can beat. The brief gives 9 next guides, in priority order: VLC not showing subtitles, Plex not detecting external SRT, Chromecast subtitles (Google's Cast docs list only TTML, WebVTT and CEA-608/708, so SRT has to be converted), SRT in HTML5 `<track>`, out of sync partway through (built around shift-from-a-line), Kodi, duplicate lines, `{\an8}` tags (only if the code removes them), MX Player. One clash: the SUP guide's title competes with /sup-to-srt/, so I asked for the guide to be retitled toward the problem.

**stayfile.** This week's plan already covers the best spreadsheet and PDF problems. The brief adds 6 guides for after it: remove the location from a photo (fits the no-upload promise; our converters drop EXIF), get a photo under 100 KB for a form (big demand, page one is preset tool pages with no explanation, and we say honestly that there is no target-size box), AVIF won't open, PNG to JPG background turns white or black, sharp SVG to PNG and Markdown to PDF (the last two only if the code supports them). That is 6, not the 10 you asked for: the other good phrases are already in the week plan. Gap noted for the boss: excel-to-csv converts only the first sheet.

**Cross-links** (exact spots in the briefs): subfixer /srt-to-csv/ FAQ → stayfile CSV-in-one-column guide; subfixer weird-characters guide ↔ stayfile garbled-CSV guide (same Ã© problem); subfixer /srt-to-word/ → stayfile text-to-pdf (optional); stayfile "are converters safe" guide → subfixer home, one line. Nothing else; no footer lists.

## New venture evidence (your asks 1 and 2)

I have no keyword-volume tool, so this is page-one competition, not volume numbers.
- **GPX/FIT/TCX.** Page one for "gpx to fit" and "fit to gpx" is generic converters that upload files, a few browser-only tools, and strong free incumbents for editing and merging (an open-source GPX editor, a long-running GPS visualizer, and a big route-planning app's merge tool). The privacy angle is strong (these files are your home address and running routes), but convert and merge are already served for free and privately. Long tail worth winning: "merge gpx files", "strava export fit.gz to gpx", "gpx to fit course for garmin". Verdict: a real niche with moderate competition; it would need guides around Garmin, Strava and Wahoo problems to stand out, the same play we are still testing. I would wait for your launch gate.
- **Calendar (CSV/Excel to ICS, ICS to CSV).** Page one is small, newer single-purpose tools and how-to articles from productivity blogs, with no big brand. Apple Calendar has no CSV import (Apple forum thread), which drives "csv to ics". Google Calendar takes CSV directly (its help page), so "excel to google calendar" is a guide, not a tool. Verdict: it belongs inside stayfile (same CSV and Excel visitor, same Spreadsheets group), as 2 tools plus 2 guides, once you lift the no-new-tools rule. A separate venture isn't worth it.

## Free channels (your ask 3); all need the owner

No signups or posts were made. Ranked by fit:
1. **AlternativeTo**: list SubFixer as an alternative to the desktop subtitle editors and Stayfile as an alternative to the big PDF and image converter sites, both tagged web-based. There is also a user list there called "Best 100% Private, Client-Side Web Utilities (Zero Cloud Uploads)" where Stayfile fits. Needs a free account.
2. **VideoHelp software section "Subtitle editors and converters"**: takes new software through a submission form. Free; may need an account or an email.
3. **Forum answers** (owner's account; reply only where the guide fully answers the thread, once the guide is live): Plex forum "External subtitles (.srt) troubleshooting checklist" and "SRT files are often not displayed in Plex" (943377); Jellyfin forum "subtitles going off sync while watching"; VideoLAN forum "SRT Files Not Working". Answer in the post itself and link the guide as the source. Never post the same text twice.
4. **Product Hunt or DEV launch posts**: these lists are crowded with "I built N browser tools" posts. Low value and spammy-looking; I don't recommend them.
5. **Embeds**: none worth building yet.

No directory found that charges; skip any that asks for money.

## Next time (Mon 11-23)

Check whether the guides published 11-20 to 11-22 appear in `site:` searches; check that the stayfile garbled-CSV guide is live so subfixer can link it; re-check the out-of-sync and VLC phrases for any change on page one; look into "export google calendar to excel" demand in more depth if you want the calendar tools.
