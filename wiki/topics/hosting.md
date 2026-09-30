---
title: Hosting
type: topic
summary: The Vercel project, how deploys happen, environment variables by name, and analytics
confidence: high
sources: [raw/2026-09-30-launch-checks.md, raw/2026-09-30-accounts-inventory.md, raw/2026-09-30-domain-live.md, raw/2026-09-30-visit-statistics.md]
updated: 2026-09-30
---

# Hosting

Vercel project `personal-portfolio-site` in team scope `mathiaslaunielsen-2902s-projects`.

## Deploys

- Every pull request gets a preview deployment, and the PR shows it as a check.
- Merging to `main` deploys production, in about a minute.
- Production: https://mlnanalytics.com (also still reachable at `personal-portfolio-site-tau.vercel.app`), see [Domain and email](domain-and-email.md).
- Redeploy production without a code change: `vercel redeploy <latest production URL> --target production`. Needed after changing an environment variable.
- The https certificate is issued and renewed by Vercel. If a new domain has no certificate after verification passes, `vercel certs issue <domain>` issues one.

## Environment variables (names only)

| Variable | Set | Used for |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Database connection, see [Database](database.md) |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Yes | Database connection (public key) |
| `SUPABASE_SECRET_KEY` | Yes | Inserting visit rows from `/api/besoeg` (bypasses row-level security; never sent to the browser) |
| `BESOEG_SALT` | No | Secret salt for the daily visitor key; falls back to the secret key |
| `NEXT_PUBLIC_SITE_URL` | Production: `https://mlnanalytics.com` | Canonical URLs, sitemap, link previews; falls back to the vercel.app URL elsewhere |
| `RESEND_API_KEY` | No | Lead emails, see [Lead handling](lead-handling.md) |
| `LEAD_EMAIL_FROM`, `LEAD_EMAIL_TO` | No | Sender and recipient of lead emails |

Secrets are added by Mathias with `vercel env add NAME production`, never pasted into chat or files.

## Visit statistics

- **Own statistics (primary, since 2026-09-30):** every page view and every sent enquiry is logged by the site itself into the `site_besoeg` table, without cookies and without storing IP addresses (a daily hash instead). Mathias reads them at https://mlnanalytics.com/admin/statistik after logging in: views, visitors, enquiries, sources (referrer or UTM), pages, countries, devices, languages, for 7 to 365 days. Bots and non-production hostnames are not counted. Links shared on LinkedIn or elsewhere can carry `?utm_source=linkedin&utm_medium=post&utm_campaign=...` to be told apart.
- **Vercel Web Analytics and Speed Insights** stay on every page as a cross-check, at vercel.com → project → Analytics. The team is on the Hobby plan: 50,000 events a month, one month of history, and custom events such as the form's `enquiry_sent` are dropped. That is why the statistics were built in.
- Neither sets cookies, so there is no consent banner; the privacy policy describes both.
