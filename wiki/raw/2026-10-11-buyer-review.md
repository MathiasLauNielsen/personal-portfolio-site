---
title: Adversarial review of the site, then read as the two buyers it is for
date: 2026-10-11
kind: document
---

Mathias asked in a Claude Code session on 2026-10-11: "Do an adversarial and critical view of the website. After that, assume the role of a customer in the target group and be critical about whether you would choose this site as the consultant that implements." Then: "Implement what you think are useful strategies for the repo in the future. And before you do anything, review this comment, iterate on it and make the best possible version that you can."

This is the iterated version. The first draft had three errors, corrected here: it said the blog was empty (a stale response; four posts were live), it quoted the data platform case before PR #29 corrected it, and it judged the AI coding setup against a 40-developer rollout although the product is sold for one team.

Reviewed: every page's copy in `content/en.ts`, the page components, the live site over HTTP, and the open items. Not reviewed: the blog posts (reviewed separately the same day), the Danish copy, rendering on a phone, accessibility and load time.

## Part 1: adversarial

1. **The reply promise is not backed by the system.** Every page says "I reply within one working day" and the primary button says "Get a reply within a day". Enquiries are stored in a database table and are not emailed (open item 1). The promise holds only as long as Mathias remembers to open the admin page. This is the one finding that can lose an enquiry that was already won.
2. **All external proof is one platform.** The three result figures and both client cases come from the same anonymised platform; the home band says so ("a platform handling more than 60 million records"). "Responsible for the whole data platform at two companies" is the site's central claim, and the second company has no evidence on the site.
3. **Nothing a stranger can verify.** No photo, no quote, no reference, no logo. "Experience from" is three names a reader outside Denmark cannot place. The public repository proves the agent can run a website, not that Mathias can run a data platform. LinkedIn, the next place a buyer looks, still presents an Ase employee with no company and no posts since 2021 (open item 21).
4. **The AI coding offer is proven by a brochure site.** The agent case is honest and precise, but its evidence is eleven pull requests on a marketing site with no users, no team and no legacy code. The buyer's fear is an old codebase with a release train; the answer is one FAQ sentence. A third of the case is a DNS outage, which the buyer who is nervous about autonomy will read as the thing they feared. The hero's terminal mock-up ("wrote pipeline and tests") showed a scene no case backs; it now mirrors the steps the agent case describes.
5. **The strongest case leaves the obvious question open.** The platform ran at about 2× its schedules with 10.7 billion wasted updates. The About page says Mathias designed and built a data platform at a software company. A careful reader asks what his relation to this platform was. The case does not say; the ambiguity costs more than either answer would.
6. **The headline oversells what the case then takes back.** The home page prints "72% from 25%"; the case explains that the blend was tuned on the same test, the data is biased by the old order, and in a three-week simulation the gain was about 16% because commitments took 95% of the budget. The honesty is right; the headline should carry its own caveat ("tested on past data" is there, "before commitments" is not).
7. **Price is behind a call, twice.** "You get a number after a short first call" plus "fixed price" with no range. A buyer comparing three providers cannot shortlist without writing first. Note the constraint: this repository is public, so a price floor on the site is a public price; that is a decision for Mathias (open item 13), not a copy fix.
8. **Unconfirmed signals.** "Taking on new engagements" with a pulsing dot (open item 4). Product durations are estimates made by Claude ([offers](../concepts/offers.md)), shown as fact. The "Rollout" engagement on the AI coding page has no duration and no proof.
9. **Minor.** The privacy policy is Danish only while the default language is English, and the English form links to it. "Does not work with: weapons, explosives, fossil fuel extraction" sits among logistics facts on the About page; it is a values line and will puzzle some buyers (his call). The target-group-agnostic hero asks the reader to pick a lane before either lane has earned trust; a decided trade-off, but it is a cost.

## Part 2: as the two buyers

### Head of Engineering, 150 people, BigQuery, cloud bill climbing, one person who understands the platform

Would shortlist for the review. The "When companies call me" list describes the week exactly; the data platform case is the most convincing thing on the site: a concrete method (compare what was asked for with what was done), numbers, fixed the same week, and an honest "still open". The review's step list and "a list your own team can act on, with or without me" lower the risk.

What stops the enquiry:

- Nobody to call. No name, no reference. LinkedIn is the next check, and it fails it.
- No number for the review. "5–8 days" plus "fixed price" is enough to guess, but the CFO wants a figure before a call is spent.
- Who built the platform in the case. Left open, the buyer assumes the worst.
- Everything is one client. One measured figure from the second company would double the credibility of the central claim.

Would choose him over an agency for the review, if the first call confirms he does the work himself. For hours, only with a reference; nothing on the site proves the hours offer specifically.

### CTO, 40 developers, paying for Copilot and Cursor, output unchanged, board asking

Less likely to shortlist. The headline is right and the signs list is accurate, but the only case is a one-person website. The buyer's risk is a large codebase with compliance review, and the case cannot speak to it. The DNS outage in the middle of it shows what happens when the agent is wrong, framed more kindly than that company would.

What would convince:

- "I have restructured a production data platform into Python packages so coding agents can work in it" is the strongest sentence for this buyer and sits in the last FAQ answer. It belongs at the top of the page, with a case behind it (open item 12).
- An outcome from a team, not from Mathias. "I do not promise a percentage" is fair; one team's before and after, however small, is what the board wants.
- The product is well defined ("left in your repository" is the best list on the site). The "Rollout" engagement for several teams has no duration and no proof, and that is the engagement this buyer needs.

Would take the free call because the setup is more concrete than most. Would not buy without a reference from a team it was done in.

## What to fix, in order of expected enquiries

1. Lead emails on, so the reply promise holds (open item 1). Needs Mathias for the Resend account.
2. A quote or reference from each of the two companies, with permission (open items 11 and 18). Nothing else substitutes.
3. A photo and a LinkedIn profile that tell the same story as the site (open items 7 and 21).
4. One sentence in the data platform case on Mathias's relation to the platform and why the volume had not been compared before (open item 33).
5. A price floor on the products, or a decision not to show one (open item 13).
6. A measured figure from the second company, so "two companies" has two sources (open item 19).
7. For AI coding, lead with the production restructuring and write that case (open item 12). Give "Rollout" a duration or remove it (open item 34).
8. An English privacy policy (open item 35).

Done in the same piece of work, needing no new facts: the home page's "Experience from" line says what each company is, in words already on the About page; the hero terminal mock-up mirrors the real flow; the review checklist is written down in [Reviewing the site as a buyer](../references/buyer-review.md) so this is repeated after every content change.
