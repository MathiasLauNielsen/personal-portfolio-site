---
title: Open items
type: topic
summary: Everything unfinished for the company's IT and website, ordered by importance, with who acts next
confidence: high
sources: [raw/2026-09-30-brand-and-quick-wins.md, raw/2026-09-30-domain-live.md, raw/2026-09-30-launch-checks.md, raw/2026-09-30-accounts-inventory.md, raw/2026-09-30-positioning.md]
updated: 2026-09-30
---

# Open items

Ordered by importance. Remove an item when done and note it in the relevant article's history.

| # | Item | Next action | Who |
|---|---|---|---|
| 1 | Leads are not emailed | Resend account, domain and API key, see [Lead handling](lead-handling.md) | Mathias, then Claude |
| 2 | No DKIM for outgoing mail | Generate the record in the Google Admin console (Apps → Google Workspace → Gmail → Authenticate email) | Mathias, then Claude verifies |
| 3 | Product durations are estimates | Replace with real numbers after the first engagements, see [Offers](../concepts/offers.md) | Mathias |
| 4 | "Taking on new engagements" badge unconfirmed | Confirm availability wording in `content/*.ts`, including "part-time or full-time" under Hours | Mathias |
| 5 | Repository is public | Decide whether to make it private, see [IT operating model](../concepts/it-operating-model.md) | Mathias |
| 6 | Leftover services | Delete the Render service behind the old `www` record and the inactive `planning-site` Supabase project if unused, see [Services and accounts](../references/services.md) | Mathias |
| 7 | Portrait photo | Marked spot in `components/pages/AboutPage.tsx` | Mathias |
| 8 | Career details | The About page tells the story from 2020 (done 2026-09-30). Still missing: exact years and titles per role, from a LinkedIn PDF export; and LinkedIn itself should tell the same story | Mathias |
| 9 | Management dashboard prototype | Port the local branch `prototype/management-app` into `/admin` | Claude, when asked |
| 10 | Case cards for the three figures | Approve a public, anonymised description per figure, see [Site improvement plan](../concepts/site-improvement-plan.md) | Mathias |
| 11 | Buyer testimonials and references | Ask a client contact at Copyright Agent and a manager at Ase for a short quote that confirms the scope (responsible for the whole platform) and a result, with permission to publish, or to be a reference a buyer can call | Mathias |
| 12 | Proof for the AI coding offer | Decide whether to present this repository as a worked example, and approve a short written case of restructuring a production data platform so coding agents can work in it | Mathias, then Claude writes |
| 13 | Prices on the fixed-scope products | Decide on "from €X" and whether the review fee is credited toward follow-on work | Mathias |
| 14 | First call | Name the free first call and the output it promises | Mathias |
| 15 | Calendar booking | Decide whether to offer booking after the form; needs a booking account | Mathias |
| 16 | Privacy policy promises deletion after 2 years | Automate: a scheduled job that deletes enquiries older than 2 years, see [Database](database.md) | Claude |
| 17 | Site accent colour vs logo | Decide whether the site's bright cobalt accent should become the logo navy `#00398D`, see [Company facts](../references/company.md) | Mathias |
| 18 | Permission to publish results and descriptions | Ask Copyright Agent and Ase whether the work described on the About page is fine to publish as written, and whether results in money may be published (named, anonymised or as percentages). Until then no money figures go on the site, see [Company facts](../references/company.md) | Mathias |
| 19 | Machine learning and forecasting on the data platform page | Added by Claude on 2026-09-30 to show the breadth; confirm they are things he wants to sell, or remove them, see [Offers](../concepts/offers.md) | Mathias |
