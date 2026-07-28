# WCB Manitoba — Form Prototypes (Assignment 2)

Pug-templated, print-ready recreations of two WCB Manitoba forms:
**Worker Progress Report** and **Medical & Travel Expense Request**.

## How to run it

Just open `index.html` in a browser. No Node, no npm install, no server,
no build step required to view or demo it.

- **Form** dropdown switches between the two forms.
- **Simulated data** dropdown switches between two backend-style datasets
  (A/B) per form — nothing is typed on screen, everything is bound from
  `js/data.js`, standing in for data "coming from the backend."
- **Print / Save as PDF** prints the current form onto real A4 pages.

## Why Pug, but no Node needed to run it

Pug's own template engine normally needs Node to compile. To satisfy both
"use Pug" and "don't use Node" for the deliverable itself, the `.pug`
files in `templates/` are the real source of truth, and `build.js`
(a small Node script, **build-time only**) precompiles them into
`build/templates.compiled.js` — plain, dependency-free JS functions with
zero runtime dependency on Node or the Pug library. `index.html` loads
that compiled file directly with a `<script>` tag.

If you edit any `.pug` file, re-run:

```
node build.js
```

(only needed if you have Node installed and want to change the templates —
not needed to just view or demo the project).

## Structure

```
index.html                 entry point
templates/
  mixins.pug                shared building blocks (checkboxes, boxed
                             sections, fill-in lines, rating scale, data
                             table, header) — reused by BOTH forms
  worker-progress-report.pug
  medical-travel-expense.pug   *placeholder — see note below*
  footer.pug                 footer, rendered per computed page
build.js                     Node build script (dev-time only)
build/templates.compiled.js  compiled output actually used by the browser
css/
  styles.css                 shared visual styling for both forms
  print.css                  A4 pagination / print-only rules
js/
  data.js                    two simulated datasets per form
  app.js                     form/dataset switching + dynamic pagination
assets/
  wcb-logo.png                logo used in the form header
```

## Pagination / footer placement

`js/app.js` renders the full form off-screen, measures the real height of
every section (and, for the expense table, every row), and only then
splits the content into A4-sized page `<div>`s — inserting the footer
(via `footer.pug`) at wherever the content actually ends on each page.
This is why a short dataset produces fewer pages than a long one, and why
a 2-row expense table vs. a 12-row expense table land the footer in
different places, automatically.

## Known gap

`medical-travel-expense.pug` is a **placeholder** built from the general
WCB expense-claim pattern (traveller info, a line-item expense table,
totals, payment method, certification) — I don't yet have the actual
Medical & Travel Expense Request PDF to replicate exactly. Swap in the
real field list once that PDF is available; the mixins/header/footer/
pagination plumbing underneath won't need to change.
