---
title: Hosting
type: topic
summary: The Vercel project, how deploys happen, environment variables by name, and analytics
confidence: high
sources: [raw/2026-09-30-launch-checks.md, raw/2026-09-30-accounts-inventory.md, raw/2026-09-30-domain-live.md]
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
| `SUPABASE_SECRET_KEY` | Yes | Not used by the code |
| `NEXT_PUBLIC_SITE_URL` | Production: `https://mlnanalytics.com` | Canonical URLs, sitemap, link previews; falls back to the vercel.app URL elsewhere |
| `RESEND_API_KEY` | No | Lead emails, see [Lead handling](lead-handling.md) |
| `LEAD_EMAIL_FROM`, `LEAD_EMAIL_TO` | No | Sender and recipient of lead emails |

Secrets are added by Mathias with `vercel env add NAME production`, never pasted into chat or files.

## Analytics

Vercel Web Analytics and Speed Insights on every page. Neither sets cookies, so there is no consent banner; the privacy policy says so. The form sends an `enquiry_sent` event with the topic, so the offers can be compared.
