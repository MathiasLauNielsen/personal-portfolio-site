---
title: Domain and email
type: topic
summary: mlnanalytics.com at Namecheap, email on Google Workspace, the records the site and mail need, and the 2026-09-30 outage
confidence: high
sources: [raw/2026-09-30-dns-observations.md, raw/2026-09-30-decisions.md]
updated: 2026-09-30
---

# Domain and email

## Current state (as of 2026-09-30, afternoon)

- **Outage:** the nameservers point to Vercel, but Vercel has no DNS zone for the domain and refuses queries. The website and incoming email do not resolve. **Fix:** Mathias switches the nameservers back to Namecheap BasicDNS, which still holds the records.
- Registrar: Namecheap. Registered 2025-06-28, expires 2027-06-28, auto-renew and WHOIS privacy on.
- Email: Google Workspace, MX `1 smtp.google.com`.
- The domain is attached to the Vercel project for both `mlnanalytics.com` and `www.mlnanalytics.com`; it serves the site once the records below resolve.

## Target records (DNS at Namecheap)

| Type | Host | Value | Purpose |
|---|---|---|---|
| MX | @ | `smtp.google.com` priority 1 | Incoming mail (Mail Settings, Custom MX) |
| A | @ | 216.198.79.1 | Site, Vercel's recommended address |
| A | @ | 64.29.17.1 | Site, Vercel's recommended address |
| CNAME | www | `a0f03acadef3168d.vercel-dns-017.com.` | Site on www |
| TXT | @ | `v=spf1 include:_spf.google.com ~all` | SPF: only Google may send as the domain |
| TXT | _dmarc | `v=DMARC1; p=none; rua=mailto:mathias@mlnanalytics.com` | DMARC in report-only mode |
| TXT | google._domainkey | Generated in the Google Admin console | DKIM (not yet generated) |

Remove the old `www` ALIAS to `mlnanalytics.onrender.com`. When Resend is set up it adds its own records, see [Lead handling](lead-handling.md).

Once the site resolves: set `NEXT_PUBLIC_SITE_URL=https://mlnanalytics.com` in Vercel and redeploy, see [Hosting](hosting.md).

## Why email authentication matters

Before 2026-09-30 the domain had no SPF, DKIM or DMARC. Receiving mail servers then have no way to tell Mathias's sales email from spoofing, which pushes it towards spam. SPF and DMARC fix most of that; DKIM completes it. After a few weeks of clean DMARC reports, DMARC can move from `p=none` to `p=quarantine`.

## History

- 2025-06-28: domain registered.
- Before 2026-09-30: `www` pointed to a Render service that redirected to the bare domain, which had no address, so nothing was served.
- 2026-09-30: nameservers switched to Vercel at 13:59 UTC. Vercel never created a zone, so resolution failed. See [Runbook for DNS changes](../references/runbook-dns-changes.md) for the lesson.
