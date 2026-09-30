---
title: Domain restored to Namecheap DNS and the site live on mlnanalytics.com
date: 2026-09-30
kind: observation
---

All times UTC, 2026-09-30.

- 14:27:11: registry (RDAP) "last changed"; nameservers back to `DNS1/DNS2.REGISTRAR-SERVERS.COM`.
- Mathias added in Namecheap Advanced DNS: A `@` 216.198.79.1, A `@` 64.29.17.1, CNAME `www` `a0f03acadef3168d.vercel-dns-017.com.`, TXT `@` `v=spf1 include:_spf.google.com ~all`, TXT `_dmarc` `v=DMARC1; p=none; rua=mailto:mathias@mlnanalytics.com`; deleted the ALIAS `www` to `mlnanalytics.onrender.com.`; kept MX `@` `SMTP.GOOGLE.COM.` priority 1.
- About 14:30: `dns1.registrar-servers.com`, 8.8.8.8 and 1.1.1.1 all returned exactly those A, CNAME, MX and TXT values.
- `vercel domains verify mlnanalytics.com`: `status: ok`, `domainStatus: configured-correctly`. `vercel domains inspect` still listed Vercel as current nameservers (stale on Vercel's side).
- Before a certificate existed: http on port 80 returned 200; https failed the TLS handshake. `vercel certs ls` showed no certificates.
- `vercel certs issue mlnanalytics.com www.mlnanalytics.com`: success in 14 s. Certificate CN=mlnanalytics.com, issuer Let's Encrypt (YR2), valid until 2026-12-29. After that https returned 200 for both hosts and http returned 308 to https.
- `NEXT_PUBLIC_SITE_URL=https://mlnanalytics.com` added for Production; production redeployed and aliased to https://mlnanalytics.com. Canonical, og:image, sitemap and robots then used https://mlnanalytics.com. `/data-platform`, `/ai-coding`, `/about`, `/contact`, `/da`, `/privatlivspolitik` returned 200.
- `www.mlnanalytics.com` served the site with 200 instead of redirecting; a redirect to the bare domain was added in `next.config.mjs`.
