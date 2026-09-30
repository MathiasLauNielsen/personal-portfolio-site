---
title: DNS observations when moving nameservers to Vercel
date: 2026-09-30
kind: observation
---

All times UTC, 2026-09-30. Queries via dns.google DNS-over-HTTPS, `Resolve-DnsName` against named servers, the Verisign RDAP service and the Vercel CLI.

## Before the change (about 13:00)

- Nameservers: `dns1.registrar-servers.com`, `dns2.registrar-servers.com` (Namecheap BasicDNS).
- MX: `1 smtp.google.com.` (Google Workspace).
- No TXT records at the apex, no `_dmarc`, no `google._domainkey`: no SPF, DMARC or DKIM.
- No A record at the apex.
- `www`: ALIAS to `mlnanalytics.onrender.com.` (TTL 5 min), resolving to 216.24.57.16/.18, which answered `301` to `https://mlnanalytics.com/`, which did not resolve. Nothing was served.
- Registration 2025-06-28, expires 2027-06-28, auto-renew on, WHOIS privacy on (Namecheap screenshots).

## Vercel setup

- `vercel domains add mlnanalytics.com` added the domain to the team. It was later attached to project `personal-portfolio-site` together with `www.mlnanalytics.com`.
- `vercel domains inspect`: "Intended Nameservers: -". `vercel domains verify` returned `"nameservers": []` in its recommendations.
- Recommended records for the project: A `@` 216.198.79.1 and 64.29.17.1 (rank 1) or 76.76.21.21 (rank 2); CNAME `www` `a0f03acadef3168d.vercel-dns-017.com.` (rank 1) or `cname.vercel-dns.com.` (rank 2).

## After switching nameservers to Vercel

- Registry (RDAP) showed `NS1.VERCEL-DNS.COM`, `NS2.VERCEL-DNS.COM`, last changed 13:59:23.
- `vercel dns add` and `vercel dns import`: `mlnanalytics.com is not a DNS zone. (400)`, repeated for at least 45 minutes.
- `ns1.vercel-dns.com` answered REFUSED for A and MX.
- Namecheap's `dns1.registrar-servers.com` still answered MX `smtp.google.com`.
- 8.8.8.8, 1.1.1.1 and 9.9.9.9 returned SERVFAIL for MX; dns.google returned status 2 (SERVFAIL) for A, CNAME, MX and TXT. The site and incoming email were unreachable for resolvers without a cached answer.
- Later that day the nameservers were still on Vercel and Mathias reported the site unreachable with a "not secure" warning.
