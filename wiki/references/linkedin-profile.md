---
title: LinkedIn profile
type: reference
summary: What the profile shows today, the text and banner to put on it, the links to use, and the first posts
confidence: medium
sources: [raw/2026-10-02-linkedin-audit.md, raw/2026-09-30-positioning.md, raw/2026-09-30-seo-audit.md, ../content/en.ts]
updated: 2026-10-02
---

# LinkedIn profile

https://www.linkedin.com/in/mathlau. Claude has no access to LinkedIn: Mathias pastes and posts, Claude writes. Everything below uses only facts that are already on the website, so the two tell the same story. When the site's positioning or figures change, change this page too.

## State (as of 2026-10-02, logged-out view)

The profile presents an employee of Ase: no mention of MLN Data Consulting or the website, a generic About, a photo from 2019, a course list from university, and no own post since 2021. Details in the [audit](../raw/2026-10-02-linkedin-audit.md). Nothing has been changed yet.

## Steps for Mathias, in order

1. **Headline and About:** paste the two texts below (Edit intro → Headline; About → edit).
2. **Current position:** add MLN Data Consulting with the title and text below, so the top of the profile stops saying only Ase. If Ase is still current, keep it and put MLN Data Consulting first.
3. **Website:** Edit intro → Contact info → Website: `https://mlnanalytics.com`.
4. **Banner:** upload https://mlnanalytics.com/brand/linkedin-banner.png (Edit intro → background photo). The left third is empty on purpose; the profile photo covers it.
5. **Photo:** the same portrait as on the website, see [Open items](../topics/open-items.md).
6. **Featured:** add the two links under "Featured".
7. **Remove:** the Courses section and the personal web project from 2019–2020. Keep the bachelor project; it matches the story on the About page.
8. **Experience texts:** paste the descriptions below under each role. Titles and dates stay as they are.
9. **"Open to":** if the account offers "Providing services", turn it on and pick the services closest to data engineering and AI.
10. **First post:** the one below, after steps 1–6, so people who click through land on a profile that matches.

## Headline

```text
Freelance data and AI engineer · I build and fix data platforms and set up AI coding agents for development teams · Copenhagen
```

## About

```text
I build and fix data platforms, and I set up AI coding agents for development teams. Freelance in Copenhagen, through my own company, MLN Data Consulting.

At two companies I have had technical responsibility for the whole data platform, from raw data to the reports the business runs on. Three results from recent client work on a platform with more than 60 million records:
– A ranking model found 72% of the valuable cases with a quarter of the processing budget. The old selection found 25%. Tested on two months of historical data.
– A nightly job rewrote 46 million rows to change 683,000. Now it touches only what changed. Measured in production.
– Duplicate work of 2–4.5×, traced to a single fault nobody had noticed. Measured in production.

The other half of my work is AI coding. I do most of my own engineering with coding agents, and I have restructured a production data platform so agents can work in it. My own company's IT is run by an agent inside rules I wrote; the repository is public and the case is on my site.

Two ways to hire me: hours as an embedded senior engineer, or a fixed-scope product (data platform review, AI coding setup).

mlnanalytics.com · mathias@mlnanalytics.com
```

## Experience

**MLN Data Consulting** (new entry, current). Title: `Freelance data and AI engineer`. Start date: Mathias fills in.

```text
I build and fix data platforms and set up AI coding agents for development teams.

– Hours: a senior engineer in your team, part-time or full-time.
– Data platform review: what the platform costs, where it is fragile and what to fix first, as a written report.
– AI coding setup: coding agents set up in one team or codebase, with conventions, guardrails and training.

mlnanalytics.com
```

**Ase**

```text
Technical responsibility for the data platform and its architecture at a large Danish membership organisation.

– Planned the move from SQL Server to Microsoft Fabric.
– Restructured the code into Python packages that AI coding agents can work in.
– Put models into production that predict incoming calls, membership movements, churn and unemployment.
– Mentored the data and analytics team, including its technical priorities.
```

**Copyright Agent**

```text
Designed and built the data platform: the warehouse in BigQuery, the pipelines from the main source systems and all reporting.

– Put machine learning models into production on top of it.
– Built the revenue forecasts used in the company's budgeting.

Started as an employee and still work with them as a consultant.
```

**Viteco**

```text
Built software that automated data warehouse work: it read the structure of the source systems, loaded and transformed the data, and handled master data. My bachelor project, written with Viteco, used machine learning to work out how source data is structured and derive the warehouse model from it.
```

**Retail management role**

```text
Managed a team of 12–18 people, with responsibility for budget and sales targets.
```

The three results in the About text are not repeated under a client's name: the site publishes them without naming the client, and that stays so until the client agrees ([Open items](../topics/open-items.md)).

## Links to use

Links from LinkedIn carry a tag, so `/admin/statistik` can tell profile visits from post visits, see [Hosting](../topics/hosting.md).

| Where | Link |
|---|---|
| Featured 1 | `https://mlnanalytics.com/cases?utm_source=linkedin&utm_medium=profile` |
| Featured 2 | `https://mlnanalytics.com/cases/company-it-run-by-a-coding-agent?utm_source=linkedin&utm_medium=profile` |
| A post | the page's address plus `?utm_source=linkedin&utm_medium=post&utm_campaign=<short-name>` |

## Posts

Written in Danish, because his network and the brokers who will see them are Danish; the profile stays in English like the website. One post per case, when the case is on the site. No post about availability until the wording is confirmed ([Open items](../topics/open-items.md)).

### Post 1: the agent case

```text
Mit firmas IT bliver drevet af en kodeagent.

Website, database, hosting og dokumentation. Jeg beder om en ændring i almindeligt sprog. Agenten læser reglerne, bygger ændringen, kører tjek og lægger den i drift.

På lanceringsdagen kom 11 ændringer i drift på den måde. Der gik også noget galt: en DNS-flytning slog fejl, og domænet kunne ikke slås op i 28 minutter. Samme dag blev fejlen til en regel, som agenten læser før næste ændring.

Det hviler på fire ting i repositoriet:
– instruktioner, agenten læser hver gang
– en nedskrevet grænse mellem det, den må selv, og det, der kræver mig
– tjek, der kan afvise en ændring
– en wiki, hvor beslutninger og fejl bliver skrevet ned

Repositoriet er offentligt, så det hele kan efterprøves. Det er den samme opsætning, jeg laver for udviklingsteams.

Casen: https://mlnanalytics.com/da/cases/firmaets-it-drevet-af-en-kodeagent?utm_source=linkedin&utm_medium=post&utm_campaign=agent-case
```

### Post 2: the nightly job (draft, better once the full case is written)

```text
Et natligt job omskrev 46 millioner rækker for at ændre 683.000. Det er cirka 67 gange mere arbejde end nødvendigt.

Nu rører det kun de rækker, der er ændret: 98,5 % mindre, målt i drift.

Min erfaring er, at det meste spild i en dataplatform ligger en håndfuld steder. Jeg finder dem og retter dem.

Før og efter: https://mlnanalytics.com/da/cases?utm_source=linkedin&utm_medium=post&utm_campaign=nightly-job
```

## Banner

`public/brand/linkedin-banner.png` (1584×396), rendered from `scripts/linkedin-banner.html`; the command is in that file. It carries the home page headline, so re-render it when the headline changes.

## Related

- [Company facts](company.md)
- [Site improvement plan](../concepts/site-improvement-plan.md)
- [Questions for writing a client case](case-questions.md)
