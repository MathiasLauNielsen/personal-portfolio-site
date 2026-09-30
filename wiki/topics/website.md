---
title: Website
type: topic
summary: What the site is for, what is live, and where its parts are described
confidence: high
sources: [raw/2026-09-30-launch-checks.md, raw/2026-09-30-domain-live.md, raw/2026-09-30-decisions.md, raw/2026-09-30-seo-audit.md, ../CLAUDE.md]
updated: 2026-09-30
---

# Website

The site exists to win enquiries from companies that don't know Mathias yet. Everything on it moves a visitor toward the enquiry form. English is the default; Danish lives under `/da`.

## Status (as of 2026-09-30)

- The redesign is live in production since PR #4 (13:52 UTC): two offers, ways to buy, FAQ, an enquiry form on every page.
- Served at https://mlnanalytics.com since 2026-09-30, about 14:40 UTC, see [Domain and email](domain-and-email.md).
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

## Privacy

The privacy policy (Danish only, `/privatlivspolitik`) names the company, CVR and contact email, lists Vercel, Supabase (EU) and Resend as data processors, and states that no cookies are set. Update it whenever a service that handles visitor or enquiry data is added or removed; Mathias should read it through once, as it has not had a legal review.
