---
title: Reviewing the site as a buyer
type: reference
summary: The checklist Claude runs on the site after any content change: an adversarial pass, then a read as each of the two buyers, with what to record and how to measure the effect
confidence: medium
sources: [raw/2026-10-11-buyer-review.md, raw/2026-09-30-site-research.md, raw/2026-10-02-cases-section.md]
updated: 2026-10-11
---

# Reviewing the site as a buyer

The site exists to win enquiries from companies that do not know Mathias ([Website](../topics/website.md)). Outside feedback and the research both said the same thing: the structure is right, the trust is missing ([Site improvement plan](../concepts/site-improvement-plan.md)). This checklist keeps that lens on every change. First run: 2026-10-11 ([source](../raw/2026-10-11-buyer-review.md)).

## When to run it

- Before merging a pull request that changes copy, a case, a page's structure or the enquiry form. The result goes in the pull request description in a few lines: what each buyer can now verify, and what still stops the enquiry.
- After a change outside the repository that a buyer sees: the LinkedIn profile, a broker profile, a published post.
- Once a quarter in full, with the result saved as a raw source and the fix list in [Open items](../topics/open-items.md).

## Part 1: adversarial pass

Read every page as someone looking for a reason not to write. Check, in this order:

1. **Promises the system cannot keep.** Reply times, availability, "fixed price", "within a day". Each one has a mechanism behind it or comes off.
2. **Proof against claims.** For each claim on the home page, where is the evidence, and how many independent sources does it have? One platform told three ways is one source.
3. **What a stranger can verify.** Photo, named references, quotes with permission, a public repository, a profile that tells the same story. List what is missing.
4. **Numbers.** Every figure says measured or tested, and the headline does not claim more than the case it links to. Read the case's caveats and ask whether the headline survives them.
5. **The obvious question.** For each case: what will a careful reader ask that the case does not answer? (Who built it, why was it not seen earlier, what has changed since.)
6. **Unconfirmed signals.** Badges, durations, "most common", anything Claude estimated and the site shows as fact.
7. **Empty or unfinished surfaces.** Pages with nothing on them, Danish-only pages linked from English, engagements with no duration, links that lead nowhere useful.
8. **Only one language checked?** Say so. Only the copy checked and not the rendered page? Say so.

## Part 2: read as each buyer

The site is target-group agnostic, so read it as the two buyers it sells to. Each reads in the buyer's order: is this my problem, has he done it, who else says so, what does it cost, what do I get, what is my risk, how do I start.

| Buyer | Situation | Decides on |
|---|---|---|
| Head of Engineering or Head of Data, 50–300 people | A platform that has outgrown its setup: cost rising, one person who understands it, numbers that disagree | A reference, a number for the review, proof from more than one place, that he does the work himself |
| CTO or VP Engineering, 20–100 developers | AI coding tools bought, output unchanged, the board asking | Proof from a real team and a real codebase, a measurable outcome, what the agent may touch, scale beyond one team |

For each buyer write three things: would they shortlist (yes, maybe, no), what stops the enquiry, and what would convince them. Be as blunt as the outside feedback was on 2026-10-02 ([source](../raw/2026-10-02-cases-section.md)).

## Part 3: record and measure

- **Fix list** in order of expected enquiries, not ease. Mark what needs Mathias (facts, permissions, money) and what Claude can do now. Do the second group in the same piece of work.
- **New open items** for the first group, in [Open items](../topics/open-items.md).
- **Baseline before, measurement after.** Visits and enquiries per topic are in `/admin/statistik` and `/admin/henvendelser` ([Lead handling](../topics/lead-handling.md)). Note the enquiry count and the visit count for the four weeks before a change, and compare the four weeks after. Traffic is low, so most changes will not show a difference for months; say so rather than claim an effect.

## Rules that bind the review

- A finding may not be fixed by inventing a fact, a client, a number or a quote ([CLAUDE.md](../../CLAUDE.md)). Where proof is missing, the fix is to ask Mathias or the client, and the gap is written down.
- Prices, rates and client-confidential detail stay out of this repository ([schema](../schema.md)). A price on the site is a public price; that is Mathias's decision.
- The review names what it did not check.

## Related

- [Site improvement plan](../concepts/site-improvement-plan.md)
- [Questions for writing a client case](case-questions.md)
- [Open items](../topics/open-items.md)
