---
title: Runbook for DNS changes
type: reference
summary: How to change DNS for mlnanalytics.com without breaking email, learned from the failed switch on 2026-09-30
confidence: high
sources: [raw/2026-09-30-dns-observations.md, raw/2026-09-30-negative-dns-cache.md]
updated: 2026-09-30
---

# Runbook for DNS changes

Email for the domain depends on the MX record, so every DNS change is also an email change.

## Adding or changing a record (DNS at Namecheap)

1. Mathias edits Namecheap → Domain List → mlnanalytics.com → Advanced DNS. Mail records are under Mail Settings (Custom MX).
2. Check the result against Namecheap directly, then publicly:
   - `Resolve-DnsName mlnanalytics.com -Type MX -Server dns1.registrar-servers.com`
   - `curl -s "https://dns.google/resolve?name=mlnanalytics.com&type=MX"`
3. Record the change in [Domain and email](../topics/domain-and-email.md) and the [log](../log.md).

Never leave the site's A records missing, even briefly: add the new record before deleting the old one. Namecheap's zone tells resolvers to remember "no such record" for up to an hour (SOA minimum 3601 s). Anyone whose resolver asks during a gap then sees the site as down for that hour, even after the record is back.

## When the site is reported down

Check from outside before changing anything:

1. `curl -sI https://mlnanalytics.com` and `vercel ls --prod`: is the site served, and is the latest deploy Ready?
2. Compare resolvers: `nslookup mlnanalytics.com 1.1.1.1`, `nslookup mlnanalytics.com 8.8.8.8`, `nslookup mlnanalytics.com dns1.registrar-servers.com`, and the local one (`nslookup mlnanalytics.com`).
3. If only the local resolver has no answer and it shows the SOA with a falling TTL, it is a cached "no such record". It clears by itself when that TTL reaches zero. Restarting the router may clear it sooner, if the router is the one caching. Nothing on the site or in DNS needs to change. This happened on 2026-09-30, see [Domain and email](../topics/domain-and-email.md).

## Moving DNS to another provider

Only when the new provider answers correctly for the domain before the switch:

1. Create every record at the new provider: MX, SPF, DMARC, DKIM, the site's A and CNAME records.
2. Query the new provider's nameserver directly and compare with the old one, record by record. A "refused" answer or an empty answer means stop.
3. Switch the nameservers at Namecheap (Domain tab → NAMESERVERS).
4. Watch the registry (`https://rdap.verisign.com/com/v1/domain/mlnanalytics.com`) and public resolvers for an hour. If any resolver fails, switch back: Namecheap keeps its records while the domain points elsewhere.

On 2026-09-30, Vercel did not create a DNS zone for this domain (no intended nameservers, "is not a DNS zone" on every record), so step 2 would have caught the problem. Do not retry Vercel DNS without first seeing Vercel list intended nameservers for the domain.
