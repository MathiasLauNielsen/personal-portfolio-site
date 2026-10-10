---
title: Questions for writing a client case
type: reference
summary: What Mathias has to answer and what the client has to approve before a client result becomes a written case on the site
confidence: medium
sources: [raw/2026-10-02-cases-section.md, raw/2026-09-30-positioning.md, raw/2026-10-11-site-pass-and-client-cases.md]
updated: 2026-10-11
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

Since 2026-10-11 all three are written out as anonymised cases, from the client's own records ([source](../raw/2026-10-11-site-pass-and-client-cases.md)). The extra work and the nightly job are one case; the ranking model is the other. Each case can still be improved:

| Result | What would make it stronger |
|---|---|
| 72% from 25% (ranking model) | A production figure once the model decides what is processed, and the result of the check on a later period. Update the case's status paragraphs when either exists |
| −98.5% (nightly job) | How long the job took before and after, and a row count after the fix |
| 2–4.5× (extra work) | How long the lookup takes since the index; the case says this was not measured |

Naming the client, or saying what the model ranks, needs the client's agreement.

## Asking the client

A message Mathias can send to his contact at the client, in Danish. Fill in the brackets.

```text
Hej [navn]

Jeg er ved at lave cases til mit website og vil gerne bruge noget af det arbejde, jeg har lavet hos jer. Inden jeg skriver noget, vil jeg høre, hvad I er ok med.

Konkret vil jeg gerne beskrive [én linje, fx: det natlige job, der gik fra 46 mio. til 683.000 rækker].

Tre spørgsmål:
1. Må I nævnes ved navn, eller skal det være anonymt, fx "en dansk softwarevirksomhed"?
2. Må jeg bruge tal? Det kan være procenter eller mængder i stedet for kroner, hvis I foretrækker det.
3. Må jeg vise et skærmbillede eller en tegning af opsætningen, hvis intet forretningskritisk fremgår?

I får teksten til gennemsyn, før den går online, og I kan til enhver tid bede mig tage den ned.

Og hvis du har lyst: to sætninger fra dig om, hvad arbejdet betød for jer, vil jeg meget gerne citere.

Mvh. Mathias
```

## Other cases worth writing

- **A production data platform restructured so coding agents can work in it** (Ase): the second AI coding case, and the one about a real team rather than his own company.
- **One machine learning model in production**, measured against what it replaced.
- **Revenue forecasts used in budgeting.**

## Related

- [Open items](../topics/open-items.md)
- [Site improvement plan](../concepts/site-improvement-plan.md)
