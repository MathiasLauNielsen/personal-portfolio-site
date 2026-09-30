---
title: Lead handling
type: topic
summary: What happens when someone sends an enquiry, where it is stored and how Mathias finds out
confidence: high
sources: [raw/2026-09-30-launch-checks.md, ../app/api/kontakt/route.ts]
updated: 2026-09-30
---

# Lead handling

## Flow

1. A visitor fills in the short form that closes every page (name, email, message, optional company, phone and topic).
2. The site's enquiry endpoint checks the fields (required fields, email format, length limits) and drops anything that fills the hidden spam field.
3. The enquiry is stored in `kontakt_henvendelser`, see [Database](database.md).
4. If Resend is configured, the enquiry is emailed to Mathias with the sender as reply-to. **Not configured as of 2026-09-30:** leads only show up in `/admin/henvendelser`.
5. The page sends an `enquiry_sent` analytics event with the topic.

Verified end to end on production on 2026-09-30 (enquiry stored, oversized message rejected).

## Turning on lead emails

1. Mathias creates a Resend account and adds the domain `mlnanalytics.com`. Resend lists DNS records to add at Namecheap, see [Runbook for DNS changes](../references/runbook-dns-changes.md).
2. Mathias creates an API key and runs `vercel env add RESEND_API_KEY production`.
3. Set `LEAD_EMAIL_FROM` (an address on the verified domain) and `LEAD_EMAIL_TO`, redeploy, send a test enquiry and delete the test row.

With little traffic expected, each lead matters, so this is the top open item after the domain; see [Open items](open-items.md).
