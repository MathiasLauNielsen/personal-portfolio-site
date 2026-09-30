---
title: Open items
type: topic
summary: Everything unfinished for the company's IT and website, ordered by importance, with who acts next
confidence: high
sources: [raw/2026-09-30-domain-live.md, raw/2026-09-30-launch-checks.md, raw/2026-09-30-accounts-inventory.md]
updated: 2026-09-30
---

# Open items

Ordered by importance. Remove an item when done and note it in the relevant article's history.

| # | Item | Next action | Who |
|---|---|---|---|
| 1 | Leads are not emailed | Resend account, domain and API key, see [Lead handling](lead-handling.md) | Mathias, then Claude |
| 2 | No DKIM for outgoing mail | Generate the record in the Google Admin console (Apps → Google Workspace → Gmail → Authenticate email) | Mathias, then Claude verifies |
| 3 | Product durations are estimates | Replace with real numbers after the first engagements, see [Offers](../concepts/offers.md) | Mathias |
| 4 | "Taking on new engagements" badge unconfirmed | Confirm availability wording in `content/*.ts` | Mathias |
| 5 | Repository is public | Decide whether to make it private, see [IT operating model](../concepts/it-operating-model.md) | Mathias |
| 6 | Leftover services | Delete the Render service behind the old `www` record and the inactive `planning-site` Supabase project if unused, see [Services and accounts](../references/services.md) | Mathias |
| 7 | Portrait photo | Marked spot in `components/pages/AboutPage.tsx` | Mathias |
| 8 | Career details | Refine from a LinkedIn PDF export | Mathias |
| 9 | Management dashboard prototype | Port the local branch `prototype/management-app` into `/admin` | Claude, when asked |
