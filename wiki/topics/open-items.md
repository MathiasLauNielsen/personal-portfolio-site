---
title: Open items
type: topic
summary: Everything unfinished for the company's IT and website, ordered by importance, with who acts next
confidence: high
sources: [raw/2026-09-30-dns-observations.md, raw/2026-09-30-launch-checks.md, raw/2026-09-30-accounts-inventory.md]
updated: 2026-09-30
---

# Open items

Ordered by importance. Remove an item when done and note it in the relevant article's history.

| # | Item | Next action | Who |
|---|---|---|---|
| 1 | Domain does not resolve; email delayed | Switch nameservers back to Namecheap BasicDNS, add the site and email records, see [Domain and email](domain-and-email.md) | Mathias, then Claude verifies |
| 2 | Site on the vercel.app address | After 1: set `NEXT_PUBLIC_SITE_URL`, redeploy, check HTTPS, see [Hosting](hosting.md) | Claude |
| 3 | Leads are not emailed | Resend account, domain and API key, see [Lead handling](lead-handling.md) | Mathias, then Claude |
| 4 | No DKIM for outgoing mail | Generate the record in the Google Admin console (Apps → Google Workspace → Gmail → Authenticate email) | Mathias, then Claude verifies |
| 5 | Product durations are estimates | Replace with real numbers after the first engagements, see [Offers](../concepts/offers.md) | Mathias |
| 6 | "Taking on new engagements" badge unconfirmed | Confirm availability wording in `content/*.ts` | Mathias |
| 7 | Repository is public | Decide whether to make it private, see [IT operating model](../concepts/it-operating-model.md) | Mathias |
| 8 | Leftover services | Delete the Render service behind the old `www` record and the inactive `planning-site` Supabase project if unused, see [Services and accounts](../references/services.md) | Mathias |
| 9 | Portrait photo | Marked spot in `components/pages/AboutPage.tsx` | Mathias |
| 10 | Career details | Refine from a LinkedIn PDF export | Mathias |
| 11 | Management dashboard prototype | Port the local branch `prototype/management-app` into `/admin` | Claude, when asked |
