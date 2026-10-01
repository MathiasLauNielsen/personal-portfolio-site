---
title: Outside feedback on the site, and the cases section built from it
date: 2026-10-02
kind: decision
---

Mathias brought feedback on the site from a person in his network who sells similar services, in a Claude Code session on 2026-10-02. The feedback is summarised here, not quoted.

## The feedback

- One or two pages per offer give search engines little to work with; more quality content performs better. Without it, visibility needs paid ads.
- If there is an About page, put a photo of yourself on it.
- Cases help in any case, and should be shown, not only told.
- BigQuery, Google Cloud, AI implementation, AI coding setup, data platforms, machine learning, forecasting, PostgreSQL, data modelling, Python and SQL are what every provider lists now, including people who build a simple site in minutes and sell the same services at a fraction of the price. The technology list does not set him apart.
- Do not use the site as a CV. Present the cases, use the person behind the personal brand, and add concrete services and details that show he can do more than an average coder or "AI specialist".
- The aim: when someone he has spoken to at a networking event looks at the site, they should think he is the real thing.

## Claude's reading, which Mathias let stand

- The positioning (owned the whole platform, measures the result) can stay; what is missing is evidence, not a new claim.
- More pages will not bring enquiries from search to a new one-person domain within 6–12 months, see the [search audit](2026-09-30-seo-audit.md). The cases are worth building for the visitor who already has the link and is checking him out. No paid ads for now.

## Decision

Mathias: "Fix what you can. And then give me a list for what I need to do." Claude had listed a write-up of this repository as an AI coding case among the things it could do without new facts, needing only his yes; this was taken as that yes. He can still have it changed or removed.

## Shipped (PR "Cases: the work shown, not described")

- A Cases section in both languages: `/cases` and `/da/cases`, in the navigation and the footer. The earlier permanent redirect from `/cases` to the home page was removed.
- The three data platform results now have a before/after chart each, on the cases page and the data platform page. The charts redraw only the numbers the labels already state: 25% and 72% of valuable cases; 46 million and 683,000 rows; 1× needed against 2–4.5× done.
- One written case: "My company's IT is run by a coding agent" (`/cases/company-it-run-by-a-coding-agent`, `/da/cases/firmaets-it-drevet-af-en-kodeagent`). Every statement is taken from this repository:
  - 11 pull requests (#4 to #14) merged on 2026-09-30, each with a successful Vercel preview build (`gh pr view <n> --json statusCheckRollup`); merge times are the merge commits in Copenhagen time;
  - 13 wiki articles existed after that day (3 concepts, 6 topics, 4 references);
  - the nameservers pointed at Vercel from 13:59 to 14:27 UTC (15:59 to 16:27 Copenhagen time), 28 minutes, see [DNS observations](2026-09-30-dns-observations.md) and [domain live](2026-09-30-domain-live.md);
  - who decides what follows the IT operating model article;
  - four excerpts are quoted word for word from `CLAUDE.md`, the [quick wins source](2026-09-30-brand-and-quick-wins.md) and the DNS runbook.
- The case is linked from the home page (under the two offers), the AI coding page (as its proof, which it lacked) and the About page.
- The About page now starts with the work that can be shown and puts the career story below it under "Background".
- The technology lists on the offer pages went from a row of boxes to one line of small text at the bottom of the page. They stay because buyers search for tool names and the structured data uses them.
- Link preview image and metadata per case; the cases pages are in the sitemap with language alternates.

## Not done, and why

- No full write-up of the three client results. The site knows one sentence per result; the rest (what was wrong, what was tried, how it was measured, what happened since) has to come from Mathias, and the client has to agree to what is published.
- No photo: there is no file yet.
- The career story itself was not rewritten; it was only moved below the work.

## What the agent case depends on

The case tells readers to check the repository, so the repository has to stay public for as long as the case is published. That settles the open question about making it private for now; if it is made private, the case has to be rewritten or removed first.
