---
title: The four blog posts reviewed, corrected and cut to three; posts are written buyer first
date: 2026-10-11
kind: decision
---

Claude Code session on 2026-10-11.

## What Mathias asked and decided

- "I need you to sanity check and optimize my blog posts one by one. Through multiple rounds: First adversarial review, then cross comparison (no reason to make the same points twice), then correction. If you're in doubt about the purpose of the blog then ask."
- Asked who a post is for, he chose **buyer first, depth below**: the reader is a data or IT leader who might hire him. The top of a post (lead figure, takeaway, what it means for the business, what to do) stands on its own for a non-technical reader; theory and literature sit below.
- The two posts on exploration repeated each other. He chose to **merge** them: "You only learn from the choices you make" is unpublished and its address redirects to "What it costs to find out".
- Corrections to the live posts are written directly by Claude, not read by him first.

## How the review was done

- Round 1: an independent adversarial review per topic, each checking every factual and literature claim against the sources, the real-work facts against the cases (`content/en.ts`, already corrected against the client's records), the buyer-first bar and every figure.
- Round 2: cross comparison of the remaining three posts for points made twice.
- Round 3: rewrite, then a second independent review of the rewritten posts.
- The posts as they were before the change are kept in the git-ignored `reports/blog-backup-2026-10-11/`.

## What was wrong (selection)

- **Nightly jobs post:** the real example contradicted the corrected case. It was told as a report rebuilt from scratch and "measured in production" after the fix; the records say a job re-marked records that were already marked, one extra condition fixed it, and the count after the fix was never measured. The cost was framed as warehouse billing, although the table was in an operational database (and in BigQuery an update is billed on the whole table anyway). The theory said "top ten" and "biggest" need re-reading the group; they need storing it.
- **Forecast post:** the lead idea anchored on the most likely outcome; the point to move from is the midpoint, and no scoring rule rewards the most likely outcome. The conformal paragraph promised nine in ten and then said 95%. Overclaims on calibration, averaging ("closer than either") and reconciliation ("better at every level"). The example went beyond the recorded career facts.
- **Exploration posts:** the Thompson figure named the wrong option as best on average; the Optimizely numbers came from simulations, and the sequential figure was 3%, not under 5%; the direction of the best-arm argument was reversed; UCB1 was said to pay the floor; the short post said an adaptive test "reaches the same conclusion for less" and implied the ranking model runs in production.
- **Home page:** the nightly job's chart drew an "after" bar that was never measured; it now shows rows written against rows that changed, both measured before the fix.

## What changed

- Three posts, each in the new shape, with a Sources list on all three. Titles: "What it costs to find out: exploration under a budget", "A forecast is a range. Which number goes in the budget?", "Why nightly jobs cost more than they should" (addresses unchanged).
- Figures corrected; one new illustration as the nightly post's lead figure (round made-up numbers, so the real result is a brief example, not the frame); the regret-curves figure removed (same point as another, and it drew the naive strategies wrongly); the Optimizely figure placed.
- `CLAUDE.md` records the buyer-first shape.
