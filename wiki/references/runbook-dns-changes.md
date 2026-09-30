---
title: Runbook for DNS changes
type: reference
summary: How to change DNS for mlnanalytics.com without breaking email, learned from the failed switch on 2026-09-30
confidence: high
sources: [raw/2026-09-30-dns-observations.md]
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

## Moving DNS to another provider

Only when the new provider answers correctly for the domain before the switch:

1. Create every record at the new provider: MX, SPF, DMARC, DKIM, the site's A and CNAME records.
2. Query the new provider's nameserver directly and compare with the old one, record by record. A "refused" answer or an empty answer means stop.
3. Switch the nameservers at Namecheap (Domain tab → NAMESERVERS).
4. Watch the registry (`https://rdap.verisign.com/com/v1/domain/mlnanalytics.com`) and public resolvers for an hour. If any resolver fails, switch back: Namecheap keeps its records while the domain points elsewhere.

On 2026-09-30, Vercel did not create a DNS zone for this domain (no intended nameservers, "is not a DNS zone" on every record), so step 2 would have caught the problem. Do not retry Vercel DNS without first seeing Vercel list intended nameservers for the domain.
