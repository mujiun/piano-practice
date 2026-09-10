# Piano Practice — sheet-music library

Folder for the app's score data. One subfolder per composer.

```
library/
  ravel/
    catalog.json      ← metadata + IMSLP links (app-ready, matches PIECES schema)
    scores/           ← score files go here once downloaded (pdf / midi / xml)
```

## Where the data comes from

| Composer | Primary source | Files auto-downloadable? |
|----------|----------------|--------------------------|
| Ravel    | **IMSLP** (Petrucci) | ❌ No — see below |
| Chopin   | IMSLP + a few on Mutopia | Chopin: partial (Mutopia has ~16) |
| Debussy  | IMSLP + a few on Mutopia | Debussy: partial (Mutopia has ~3) |

## ⚠️ Why the score files aren't here yet

IMSLP — which is the only source with Ravel's *complete* solo-piano output —
now puts every file behind a **JavaScript redirect gate** (`"JavaScript is
required to continue"`) plus a disclaimer/wait-timer. A plain download can't get
through it; it requires a real browser running JS, and bulk-scraping IMSLP
violates their terms and risks an IP ban. Mutopia (the clean, legally
bulk-downloadable source) has **no Ravel at all**.

So `catalog.json` ships the **metadata + direct IMSLP page links** (reliable),
and the `files` field for each piece is `null` until a score is added.

## How to fill `scores/` (three options)

1. **Manual (recommended, legal, free):** open each `imslp` link, click through
   the disclaimer, download the PDF/MIDI, drop it in `ravel/scores/`, then set
   the path in `catalog.json` → `files.pdf` / `files.midi` / `files.xml`.
2. **Playable formats first:** for the app's *play* + *% practiced* features you
   want **MIDI** or **MusicXML**, not PDF. Grab MIDI from the IMSLP page where
   available; render XML in-browser with OpenSheetMusicDisplay.
3. **Headless-browser fetch:** possible but fragile and against IMSLP ToS —
   only if you accept the risk.

## Wiring into the app

`catalog.json` matches `index.html`'s `PIECES` schema
(`{id, c, title, sub, key, level, year, dur, story}`) plus extras
(`imslp`, `movements`, `files`, `hands`). To show Ravel in the Library:
add the `composer` block to `COMPOSERS` and concat `pieces` into `PIECES`,
or `fetch()` this JSON at runtime.
