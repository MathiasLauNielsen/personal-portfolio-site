---
title: Site pass, two client cases published anonymised, testimonial removed
date: 2026-10-11
kind: decision
---

Mathias asked in a Claude Code session on 2026-10-11: "I want you to do a parse of the website. I want to minimize repetitiveness and make the best possible website where every part is significant and/or reinforcing a sale as well as the user experience. SEO is of course a major factor. Get the cases to release instead of holding them back if you are confident in them."

## Decisions

- **Client cases are published anonymised.** Mathias chose this over naming the client or holding the cases back. That means no client name, no money, no partner or vendor names, and nothing about the client's business beyond what the engineering needs. Naming the client and publishing money still need the client's permission (open item 18).
- **The testimonial is removed.** Mathias: "And remove the Hannah quote. I haven't asked her and it feels super uncomfortable even though it's on LinkedIn." From now on, a quote goes on the site only with the person's explicit permission (rule added to `CLAUDE.md`).

## What the fact check found

Before writing, Claude re-read the three results in the client's own records. Those records are kept outside this repository and are not quoted here.

- **−98.5% (nightly job):** confirmed and live since 2026-09-16. The job rewrote 46.2 million rows to change 683,000. It was fixed with one extra condition, and the end state is unchanged. No row count after the fix is recorded; "now touches only what changed" follows from the condition.
- **2–4.5× (extra work): the site's wording was wrong.** It said "a single fault". In fact it was a chain:
  - a lookup with no suitable index took up to 503 s;
  - jobs ran past the queue's 600 s limit and were handed out again;
  - each new attempt picked a fresh batch.

  The volume measured was ~540,000 a day against ~250,000 scheduled (1–14 September 2026), and up to 4.5× for single customers. The fixes were an index and the removal of a sort order based on frozen values. The client then chose to keep the higher volume on purpose. How long the lookup takes after the fix has not been measured. The label was corrected and the case says all of this.
- **72% from 25% (ranking model): solid as a test on past data, not live.**
  - The test ranked July–August 2026 using only data from before 1 July.
  - The old order caught 24.6% at a quarter of the budget, against 25.6% for random picking.
  - An untuned first model caught 54%. The final blend caught 72% at 25% and 88% at 50%, and it was tuned against the same test.
  - Scores have been computed daily since 2026-09-17 but don't decide anything yet.
  - A three-week simulation showed that fixed commitments took about 95% of the budget of the time, which shrank the gain to about +16%.
- Left out because they aren't checked or aren't finished: a revenue forecast fix, results from the models at Ase, and an hourly warehouse job that went from timing out at 6 hours to 2 minutes 41 seconds. The last is a possible fourth result once it has been checked.

## Shipped (PR "Site pass: client cases, less repetition, structured data")

- **Two new cases in both languages:**
  - "The platform did up to 4.5× the work it was scheduled for" (`/cases/data-platform-hidden-workload`), closing on the Data platform review;
  - "72% of the valuable cases, with a quarter of the budget" (`/cases/ranking-model-quarter-of-the-budget`), closing on Hours.
- **Each result links to its case.** Each proof result names its case (`study`). The home page figures link there, and the before/after charts moved from the cases page and the data platform page onto the case pages.
- **Repetition removed:**
  - The same chart section is no longer on two pages. The cases page and both offer pages list their cases instead.
  - "Why me" went from six points to four ("How I work"). The two that repeated the hero and the AI coding page are gone.
  - The AI coding offer card and the AI coding setup product no longer say the same sentence.
  - The AI coding note no longer repeats the case card below it.
  - The About page lists the three cases instead of repeating the cases page.
  - Unused copy (`home.cta`) is removed.
- **Search:**
  - Article and breadcrumb markup on case pages; Service and breadcrumb markup on the offer pages.
  - Case titles shortened for search results, and all meta descriptions now 160 characters or fewer.
  - Link-preview text shrinks for long titles.
