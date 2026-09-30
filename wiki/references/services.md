---
title: Services and accounts
type: reference
summary: Every external service the company uses, what it does, how it is reached from here, and what is unknown
confidence: medium
sources: [raw/2026-09-30-accounts-inventory.md, raw/2026-09-30-launch-checks.md]
updated: 2026-09-30
---

# Services and accounts

As of 2026-09-30. No credentials are stored in this wiki; the "Access from here" column says how Claude reaches each service.

| Service | Used for | Access from here | Plan and cost | Article |
|---|---|---|---|---|
| Namecheap | Registrar for mlnanalytics.com, WHOIS privacy, auto-renew (expires 2027-06-28) | None: Mathias edits in the web UI | Unknown | [Domain and email](../topics/domain-and-email.md) |
| Google Workspace | Email for mlnanalytics.com | None | Unknown | [Domain and email](../topics/domain-and-email.md) |
| Vercel | Hosting, preview and production deploys, Web Analytics, Speed Insights | `vercel` CLI, linked | Unknown | [Hosting](../topics/hosting.md) |
| Supabase | Database and login for the site's admin (project `personal-portfolio-site`, eu-central-1) | `supabase` CLI, linked | Unknown | [Database](../topics/database.md) |
| GitHub | Code, pull requests (`MathiasLauNielsen/personal-portfolio-site`, public) | `gh` CLI | Unknown | [Website](../topics/website.md) |
| Resend | Emailing new enquiries to Mathias | Not set up | Not set up | [Lead handling](../topics/lead-handling.md) |
| Render | Old target of `www` (`mlnanalytics.onrender.com`) | None | Unknown whether it still exists | [Domain and email](../topics/domain-and-email.md) |

Also seen: a second Supabase project, `planning-site` (eu-west-1), inactive and not linked to this repo.

## To fill in

- Plans and monthly costs of each service, in EUR (Mathias to provide; never invoices themselves, see [schema](../schema.md)).
- Whether the Render service and the `planning-site` Supabase project should be deleted.
