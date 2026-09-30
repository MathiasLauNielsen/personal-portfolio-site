---
title: Site reported down from Mathias's network after the DNS restore
date: 2026-09-30
kind: observation
---

All times UTC, 2026-09-30. Mathias reported "the site is down" at about 15:15.

- From outside, everything worked: https://mlnanalytics.com returned 200 on `/`, `/data-platform`, `/ai-coding`, `/about`, `/contact`, `/da`, `/da/kontakt`, `/blog`, `/privatlivspolitik`, `/admin/login`, `/sitemap.xml`, `/robots.txt` and the share image. `www` returned 308 to the bare domain. The latest production deploy was Ready.
- 1.1.1.1, 8.8.8.8, 9.9.9.9 and `dns1.registrar-servers.com` all returned A 216.198.79.1 and 64.29.17.1 for `mlnanalytics.com`. MX, SPF and DMARC were unchanged.
- The local network's resolver (home router at 192.168.0.1, forwarding upstream) returned no A record for `mlnanalytics.com`, only an SOA in the authority section: serial 1790778620 (14:30:20), TTL 1103 s and falling. `www.mlnanalytics.com` resolved normally. After `ipconfig /flushdns` the PC got the same empty answer again from the router, so the stale answer is held upstream of the PC.
- Namecheap's current SOA: serial 1790778808 (14:33:28), minimum (negative-caching) TTL 3601 s.
- Reading: while the site records were being added in Advanced DNS (14:27–14:33), a resolver on this path asked for the bare domain, got "no such record" and cached it for up to 3601 s. It expires by about 15:34 without any change. Resolvers that asked in the same window would show the same for their users; nobody else can be affected after about 15:34.
- No change to the site, Vercel or DNS was needed.
