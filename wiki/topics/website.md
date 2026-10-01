---
title: Website
type: topic
summary: What the site is for, what is live, and where its parts are described
confidence: high
sources: [raw/2026-09-30-launch-checks.md, raw/2026-09-30-domain-live.md, raw/2026-09-30-decisions.md, raw/2026-09-30-seo-audit.md, raw/2026-10-02-cases-section.md, ../CLAUDE.md]
updated: 2026-10-02
---

# Website

The site exists to win enquiries from companies that don't know Mathias yet. Everything on it moves a visitor toward the enquiry form. English is the default; Danish lives under `/da`.

## Status (as of 2026-09-30)

- The redesign is live in production since PR #4 (13:52 UTC): two offers, ways to buy, FAQ, an enquiry form on every page.
- Served at https://mlnanalytics.com since 2026-09-30, about 14:40 UTC, see [Domain and email](domain-and-email.md).
- Since 2026-10-02 the site has a Cases section: the three data platform results with a before/after chart each, and one written case about this repository as the proof for the AI coding offer. What is still missing for more cases is in [Questions for writing a client case](../references/case-questions.md).
- Traffic is expected to be low for a while, which is why there is no rate limiting beyond field limits and a spam trap.

## Where things are described

- Code, architecture and copy rules: `CLAUDE.md` in the repo root.
- What is sold: [Offers](../concepts/offers.md). What to improve: [Site improvement plan](../concepts/site-improvement-plan.md).
- Enquiries: [Lead handling](lead-handling.md).
- Data: [Database](database.md). Hosting and deploys: [Hosting](hosting.md).

## Search visibility (as of 2026-09-30)

- Not yet indexed by Google, and the name has no search footprint; expected for a domain that went live the same day. Technical basics are in place, see the [audit](../raw/2026-09-30-seo-audit.md).
- What will actually bring visitors: referrals, LinkedIn, brokers and directories. Search can deliver name rankings and correct link previews within months, not enquiry volume. The accounts this needs are open items 20–25 in [Open items](open-items.md).
- Titles carry the words buyers search for ("freelance data engineer", "København", "konsulent", tool names); the positioning stays in the page text.

## Measuring whether anyone sees it (as of 2026-09-30)

Visits, sources and enquiries are logged by the site itself and shown at `/admin/statistik`; see [Hosting](hosting.md). The Vercel dashboard only keeps a month and drops the enquiry event on the Hobby plan.

## Privacy

The privacy policy (Danish only, `/privatlivspolitik`) names the company, CVR and contact email, lists Vercel and Supabase (EU) as data processors, describes the cookie-free visit statistics (no IP stored, daily anonymous key, kept up to 2 years) and states that no cookies are set. Update it whenever a service that handles visitor or enquiry data is added or removed; Mathias should read it through once, as it has not had a legal review.
