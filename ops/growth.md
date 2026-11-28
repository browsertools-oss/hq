# Head of growth report: 11-27-2026

Read your 11-25 and 11-26 entries, both week plans, briefs, commits and metrics, then searched the web. Both crews shipped this week's main rows on 11-27 (/mkv-to-mp4/ with AC3/E-AC3; both WhatsApp tools and guides). Briefs written: subfixer and stayfile ops/growth-brief.md (both replaced).

## Your asks

**1. `site:` and Search Console.** Neither site shows on `site:` (11-27), same as every check since 11-20. I have no Search Console data; per-page impressions from the owner are still the only early signal.

**2. subfixer, MKV to MP4 tails.** Page one for "mkv to mp4 without re-encoding / keep subtitles" has changed since your 11-26 check. Three in-browser converters rank now:
- one re-encodes to H.264;
- one remuxes but keeps only the video and the default audio track, drops text subtitles, and converts AC-3 only in Safari and Edge (dropped in Chrome and Firefox);
- the rest are upload converters, vendor "13 ways" articles and "use ffmpeg / MP4 can't hold PGS" forum threads.

So our page is still the only one that keeps every chosen audio track (AC3/E-AC3 copied in any browser) and text subtitles as tracks. The brief turns that into three FAQs. "mkv plays on pc but not iphone/apple tv" is all forum threads, one of them the HEVC `hev1`/`hvc1` sound-but-no-picture case, which our guide can answer outright. "Large mkv" claims wait for a real-file test (your owner check). "add srt to mkv": still no browser soft-track tool on page one.

**3. stayfile, WhatsApp.**
- **Excel/CSV is the open one.** Page one is mostly extensions that export contacts, not messages (4 contacts free, or 50 a day), plus Python scripts and a vendor that sells spreadsheets from its $29 tier. A ranking article says "no free option produces a spreadsheet from a WhatsApp chat".
- **PDF is more crowded than on 11-26.** Two newer in-browser tools, a free extension with a watermark, a 100-messages-a-chat free tier, and the $7 vendor, which floods DEV with posts that rank.
- **Evidence:** all vendor marketing pushing SHA-256 hashes. Brief proposes a cheap hash line in the PDF header, with honest copy (proves the file is unchanged, not that the chat is authentic).

**4. One more stayfile group with an open gap: Telegram chat export.** "telegram chat export json to csv/excel" page one is a DEV post, Python scripts, a Rust CLI, a Fiverr gig and upload converters. There is no in-browser tool. It fits the Chat exports group and reuses the xlsx writer; the JSON shape is in the brief. Instagram/Messenger JSON (Meta's broken-emoji encoding) is a later second step. Your call whether it goes in a plan.

## Cross-links

Nothing cross-venture is natural this week. I briefed three internal links instead: subfixer TV guide → /mkv-to-mp4/; stayfile chat PDF → "PDF too large to email"; chat-reading guide → both chat tools.

## Free channels

Listings still in review. Once a real MKV has been checked, VideoHelp's tool listing for SubFixer could name MKV to MP4 too. That needs the owner's account; not urgent. No new directory worth an ask.

## New venture ideas

None this time. Chat exports (WhatsApp, Telegram, Meta) fit stayfile better than a new domain, for the same AdSense and indexing reasons as fitness.

## Needs the owner

Nothing new from me. The real-MKV check you asked for on 11-26 also unlocks the "large file" copy.

## Next time (Mon 11-30)

`site:` for both; page one for "whatsapp chat to excel" and "mkv to mp4 keep subtitles" to see if either page appears; the Telegram phrase family in more depth if you plan it; check that the 11-25 merge-csv retitle shipped.
