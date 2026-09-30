---
title: Website
type: topic
summary: What the site is for, what is live, and where its parts are described
confidence: high
sources: [raw/2026-09-30-launch-checks.md, raw/2026-09-30-decisions.md, ../CLAUDE.md]
updated: 2026-09-30
---

# Website

The site exists to win enquiries from companies that don't know Mathias yet. Everything on it moves a visitor toward the enquiry form. English is the default; Danish lives under `/da`.

## Status (as of 2026-09-30)

- The redesign is live in production since PR #4 (13:52 UTC): two offers, ways to buy, FAQ, an enquiry form on every page.
- Served on the vercel.app address; `mlnanalytics.com` waits on DNS, see [Domain and email](domain-and-email.md).
- Traffic is expected to be low for a while, which is why there is no rate limiting beyond field limits and a spam trap.

## Where things are described

- Code, architecture and copy rules: `CLAUDE.md` in the repo root.
- What is sold: [Offers](../concepts/offers.md).
- Enquiries: [Lead handling](lead-handling.md).
- Data: [Database](database.md). Hosting and deploys: [Hosting](hosting.md).

## Privacy

The privacy policy (Danish only, `/privatlivspolitik`) names the company, CVR and contact email, lists Vercel, Supabase (EU) and Resend as data processors, and states that no cookies are set. Update it whenever a service that handles visitor or enquiry data is added or removed; Mathias should read it through once, as it has not had a legal review.
