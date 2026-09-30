---
title: Visit statistics built into the site and its admin area
date: 2026-09-30
kind: observation
---

Mathias, late on 2026-09-30: "I need to know whether people are actually seeing the site and so need site tracking and statistics. Implement this in a way where I can login and see the stats. Or alternatively if there's a better way then do that."

## What was found

- Vercel Web Analytics was enabled and its script served (`/_vercel/insights/script.js` answered 200 on the live site).
- The Vercel team is on the Hobby plan. Per Vercel's pricing page (last updated 2026-08-25): 50,000 events a month included, a reporting window of one month, no custom events, no UTM parameters. So the form's `enquiry_sent` event was never recorded, and nothing older than a month can be seen.

## What was built (PR "Visit statistics in the admin area")

- Table `site_besoeg` (migration 005, applied to the linked project the same evening): one row per page view or enquiry event with time, path, language, external referrer host, UTM source/medium/campaign, country (Vercel's `x-vercel-ip-country` header), device type and a daily visitor key. No IP address is stored: the key is SHA-256 of date, a secret salt, IP and browser string, so a visitor counts once per day and cannot be followed across days.
- Rows are inserted only by `/api/besoeg` with the secret key; the table has no insert policy for the public key, and only admins can read it.
- Bots are filtered on the user-agent string; requests for `/admin` and `/api` paths and non-production hostnames (localhost, `*.vercel.app`) are not counted.
- `/admin/statistik`, behind the existing admin login: views, visitors, enquiries (from `kontakt_henvendelser`), enquiries per 100 visitors, a daily chart, and tables for pages, sources (referrer or UTM, first view per visitor per day), campaigns, countries, devices, languages and enquiries by topic, for 7, 30, 90 or 365 days.
- Privacy policy updated: what is logged, that no IP is stored, Supabase named as processor for the statistics, retention up to 2 years.

## Verified

- Local production build against the live database: a normal visit stored with referrer host, UTM, country and device; a second view by the same visitor got the same daily key; an internal referrer was stored as none; a Googlebot request, an `/admin` path and a malformed body were dropped; an enquiry event stored its topic. Test rows deleted afterwards.
- `set local role anon`: reads zero rows, and an insert fails on the row-level security policy.
- `/admin/statistik` without a session redirects to `/admin/login`.

## Not done

- No scheduled deletion after 2 years yet, same as for enquiries (open item 16).
- `BESOEG_SALT` is not set; the visitor key falls back to salting with the secret key, which works but ties the key to that value.
