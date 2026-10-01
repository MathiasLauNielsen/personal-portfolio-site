---
title: Questions for writing a client case
type: reference
summary: What Mathias has to answer and what the client has to approve before a client result becomes a written case on the site
confidence: medium
sources: [raw/2026-10-02-cases-section.md, raw/2026-09-30-positioning.md]
updated: 2026-10-02
---

# Questions for writing a client case

A written case is one entry in `cases.studies` (see `CLAUDE.md`). Claude writes it from Mathias's answers; nothing is invented, and nothing the client has not agreed to is published. Answer in chat, in bullets. Do not put the answers in this repository: it is public ([schema](../schema.md)).

## For every case

1. **The problem, in the client's words.** What was going wrong for the business, who noticed, and how?
2. **Before.** What did the setup look like, as far as it may be told?
3. **What you tried first.** Including what did not work. This is the part an average provider cannot write.
4. **What you built or changed.** Three to five steps, in plain words.
5. **How it was measured.** Period, method, and whether it was measured in production or tested on historical data.
6. **What happened since.** Is it still running, and has the number held?
7. **What you saw that others had missed.** One or two details.
8. **What may be shown.** Client named or anonymised, industry, which numbers, percentages instead of money, screenshots or a redrawn diagram.

## The three results already on the site

All three are on the cases page as one sentence and a chart. To become full cases:

| Result | Extra questions |
|---|---|
| 72% from 25% (ranking model) | What may be said about what the model ranks? It was left out on purpose on 2026-09-30. Has the model gone into production since the test on historical data, and is there a measured figure? |
| −98.5% (nightly job) | How long did the job take before and after? What did that mean for cost, as a percentage if money may not be published? |
| 2–4.5× (duplicate workload) | How was the fault found when nothing looked broken? The site does not say it was fixed: was it, and what is the figure now? |

The nightly job is the easiest to anonymise, since it is engineering with no business detail, so it is the suggested first one.

## Other cases worth writing

- **A production data platform restructured so coding agents can work in it** (Ase): the second AI coding case, and the one about a real team rather than his own company.
- **One machine learning model in production**, measured against what it replaced.
- **Revenue forecasts used in budgeting.**

## Related

- [Open items](../topics/open-items.md)
- [Site improvement plan](../concepts/site-improvement-plan.md)
