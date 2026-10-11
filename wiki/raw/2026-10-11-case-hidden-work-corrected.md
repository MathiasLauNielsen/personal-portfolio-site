---
title: Data platform case corrected against the client's records
date: 2026-10-11
kind: decision
---

Mathias asked in a Claude Code session on 2026-10-11: "We need to work through the cases carefully to correct facts. The theory is amazing, but the concrete is lacking. Lets start with 1. List up all the assumptions and what I need to work with", then: "Fix everything that's obviously wrong so we can have a real discussion after".

Claude re-read the case "The platform did up to 4.5× the work it was scheduled for" (`/cases/data-platform-hidden-workload`) sentence by sentence against the client's own records. Those records are kept outside this repository and are not quoted here.

## Corrected (contradicted by the records)

- **"Every run reported success" (title, home result, steps): wrong.** Some attempts were turned away or crashed, and they were handed out again too, up to five attempts. Replaced by what the records say: the schedules did not set the volume; slow selection and the retry path did.
- **"Nothing had failed, so nobody had looked", "work nobody asked for", "an accident became a decision": wrong.** The client used the retry path on purpose to process more than the schedules asked for, and kept it after the fix. The case now says that, without claiming the volume was unwanted.
- **"Several times a day, per customer": wrong.** Most schedules ran once a day.
- **"None of the changes altered what the platform produces": wrong.** Removing the sort changed which records are picked first; only the nightly job's end state is unchanged.
- **The slow lookup was blamed on the missing index alone.** The records say the sort was most of the cost; the lookup both sorted every candidate and read the whole table. Both are now named.
- **"A manual run across all customers": it was 147 customers.**
- **"Every slow job was done twice or more": not counted.** Replaced by the mechanism: one scheduled job could process two batches or more.
- **"No alert fired", "the data was correct", "a comparison nobody had made", "no new tooling": not in the records.** Removed.
- **2–4.5× now says what it is:** about 2× overall (540,000 against 250,000 a day) and 4.5× for one customer. It is not a range across customers.
- **−98.5% is now labelled as measured before the fix.** No row count after the fix exists; "touches only what changed" follows from the change.
- **"In production on 16 and 18 September"** now reads "merged on 16 and 18 September and put in production": the records give the merge date and that it was deployed, not the deploy time.
- **Still open, added:** how often jobs still run past the time limit since the change.

## Open for discussion with Mathias

- **Framing:** did the client know the volume ran at about 2× the schedules before the investigation, or only that retries happened? That decides the story the case tells.
- **How concrete about the domain:** the case says "records", "a paid processing step" and "customers". More concrete words would say more about the client's business than the anonymisation rule allows.
- **After figures:** lookup time, runs past the time limit and rows written per night since the change. Measuring them needs read access to the client's production systems.
- **Whether the processing bill's overrun against budget may be stated.**
