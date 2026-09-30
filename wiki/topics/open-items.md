---
title: Open items
type: topic
summary: Everything unfinished for the company's IT and website, ordered by importance, with who acts next
confidence: high
sources: [raw/2026-09-30-brand-and-quick-wins.md, raw/2026-09-30-domain-live.md, raw/2026-09-30-launch-checks.md, raw/2026-09-30-accounts-inventory.md]
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
| 10 | Case cards for the three figures | Approve a public, anonymised description per figure, see [Site improvement plan](../concepts/site-improvement-plan.md) | Mathias |
| 11 | Buyer testimonials | Ask 2–3 former managers or client contacts for a short quote about a result, with permission to publish | Mathias |
| 12 | Proof for the AI coding offer | Decide whether to present this repository as a worked example | Mathias |
| 13 | Prices on the fixed-scope products | Decide on "from €X" and whether the review fee is credited toward follow-on work | Mathias |
| 14 | First call | Name the free first call and the output it promises | Mathias |
| 15 | Calendar booking | Decide whether to offer booking after the form; needs a booking account | Mathias |
| 16 | Privacy policy promises deletion after 2 years | Automate: a scheduled job that deletes enquiries older than 2 years, see [Database](database.md) | Claude |
| 17 | Site accent colour vs logo | Decide whether the site's bright cobalt accent should become the logo navy `#00398D`, see [Company facts](../references/company.md) | Mathias |
