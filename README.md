# WCB Medical & Travel Expense Request — Pug/HTML/CSS/JS

<!-- Simple client-side expense form demo -->
Assignment 2 build. Pure client side: **HTML, CSS, JS and Pug — no Node.js
and no build tooling.** Pug is compiled at runtime in the browser using the
`pug.js` browser bundle (loaded from CDN in `index.html`); there is no
`npm install`, no `pug-cli`, and no server-side rendering step.

## Project structure

```
wcb-expense-report/
├── index.html              Entry point — loads pug.js, then app scripts
├── css/
│   └── style.css           Screen UI + A4 print rules
├── js/
│   ├── data.js              Two simulated "backend" datasets
│   ├── pug-renderer.js       Fetches + compiles the .pug template
│   └── app.js                 Wires up dataset switcher & print button
├── templates/
│   └── expense-form.pug    Single template, built from reusable mixins
└── assets/
    └── wcb-logo.jpeg        Letterhead logo
```

## Why a local server is needed (not Node — just static file serving)

`pug-renderer.js` uses `fetch()` to load `templates/expense-form.pug` as
text before compiling it. Browsers block `fetch()` against `file://` paths
for security (CORS), so double-clicking `index.html` won't load the
template. Serve the folder with any static file server, e.g.:

```bash
# Python (already on most systems, not Node)
cd wcb-expense-report
python3 -m http.server 8080
```

Then open `http://localhost:8080`. Any other static server (VS Code "Live
Server" extension, `php -S`, etc.) works identically — none of these are
Node/npm build steps, they're just serving static files.

## Requirement checklist

1. **Pug template rendering** — `templates/expense-form.pug`, compiled
   client-side via `pug.compile()`.
2. **Mimics the supplied PDF** — same sections, field labels, and order
   (Prescription Drugs, OTC Drugs, Medical Supplies, Parking, Mileage,
   Bus/Taxi Fare), styled to match the WCB letterhead and blue branding.
3. **Simulated backend data, no on-screen entry** — `js/data.js` exports
   `DATASET_1` (mirrors the sample PDF, Claim 20042047) and `DATASET_2` (a
   second claim with different row counts, including an intentionally
   empty section). The toolbar dropdown switches between them live,
   re-rendering through the same Pug template/mixins — nothing is typed in.
4. **Print to A4 PDF with correct footer placement regardless of data
   size** — the whole document is wrapped in one outer `<table>`
   (`.doc-table`) whose `<thead>` is the letterhead and `<tfoot>` is the
   page footer. Browsers natively repeat a table's `thead`/`tfoot` on
   *every physical page* the table's rows spill onto when printed. That
   means the footer always sits at the bottom of each page, and the
   letterhead always repeats at the top, however many rows either dataset
   produces — no manual page-height math needed. `@page { size: A4; }`
   plus `break-inside: avoid-page` on each section keeps tables from
   splitting mid-row where possible.
   Use the **Print / Save as PDF** button (or Ctrl/Cmd+P) → destination
   "Save as PDF".

## Code modularity / reuse

- `+sectionTable(title, columns, rows, note)` is one generic mixin reused
  for all six tables in the form (and by any future form — column
  definitions live in `data.js` per section, not hardcoded in the
  template).
- `+letterhead(...)` and `+pageFooter(...)` are standalone mixins, so a
  second form (e.g. a different WCB document) can reuse the same
  letterhead/footer chrome by importing this template and calling the
  mixins with different data.
- `PugRenderer` is a tiny, template-agnostic module — pass it any `.pug`
  file path and it will compile/cache it, so it isn't tied to this one
  form.
