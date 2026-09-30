---
title: Domain and email
type: topic
summary: mlnanalytics.com at Namecheap, email on Google Workspace, the DNS records in place, and the 2026-09-30 outage
confidence: high
sources: [raw/2026-09-30-dns-observations.md, raw/2026-09-30-domain-live.md, raw/2026-09-30-decisions.md, raw/2026-09-30-negative-dns-cache.md]
updated: 2026-09-30
---

# Domain and email

## Current state (as of 2026-09-30, 14:40 UTC)

- DNS is hosted by Namecheap (BasicDNS); Mathias edits records in Advanced DNS, see [Runbook for DNS changes](../references/runbook-dns-changes.md).
- The site is live at https://mlnanalytics.com. `www.mlnanalytics.com` forwards to the bare domain (308, from `next.config.mjs`, live since PR #6).
- https: Let's Encrypt certificate issued by Vercel, valid until 2026-12-29; Vercel renews it automatically.
- Email: Google Workspace, MX `1 smtp.google.com`. SPF and DMARC are in place; DKIM is not yet.
- Registrar: Namecheap. Registered 2025-06-28, expires 2027-06-28, auto-renew and WHOIS privacy on.

## Records (DNS at Namecheap)

All of these are live except DKIM.

| Type | Host | Value | Purpose |
|---|---|---|---|
| MX | @ | `smtp.google.com` priority 1 | Incoming mail (Mail Settings, Custom MX) |
| A | @ | 216.198.79.1 | Site, Vercel's recommended address |
| A | @ | 64.29.17.1 | Site, Vercel's recommended address |
| CNAME | www | `a0f03acadef3168d.vercel-dns-017.com.` | Site on www |
| TXT | @ | `v=spf1 include:_spf.google.com ~all` | SPF: only Google may send as the domain |
| TXT | _dmarc | `v=DMARC1; p=none; rua=mailto:mathias@mlnanalytics.com` | DMARC in report-only mode |
| TXT | google._domainkey | Generated in the Google Admin console | DKIM (not yet generated) |

When Resend is set up it adds its own records, see [Lead handling](lead-handling.md). The site address the code uses is set in Vercel, see [Hosting](hosting.md).

## Why email authentication matters

Before 2026-09-30 the domain had no SPF, DKIM or DMARC. Receiving mail servers then have no way to tell Mathias's sales email from spoofing, which pushes it towards spam. SPF and DMARC fix most of that; DKIM completes it. After a few weeks of clean DMARC reports, DMARC can move from `p=none` to `p=quarantine`.

## History

- 2025-06-28: domain registered.
- Before 2026-09-30: `www` pointed to a Render service that redirected to the bare domain, which had no address, so nothing was served.
- 2026-09-30, 13:59–14:27 UTC: nameservers switched to Vercel, which never created a DNS zone. The site and incoming email did not resolve for resolvers without a cached answer; mail was delayed, not lost, as senders retry. Switched back to Namecheap at 14:27. See [Runbook for DNS changes](../references/runbook-dns-changes.md) for the lesson.
- 2026-09-30, about 14:30 UTC: site records, SPF and DMARC added at Namecheap; the old Render ALIAS removed. Certificate issued and the site served on the domain.
- 2026-09-30, until about 15:34 UTC: the site looked down from Mathias's own network. A resolver there had cached "no such record" for the bare domain during the 14:27–14:33 edits, and kept it for up to an hour. Public resolvers and the site were fine throughout; it cleared by itself. See [Runbook for DNS changes](../references/runbook-dns-changes.md) for how to recognise this.
