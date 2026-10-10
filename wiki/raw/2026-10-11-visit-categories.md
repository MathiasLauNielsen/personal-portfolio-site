---
title: Visit statistics sorted into categories; own visits hidden; time, city, link labels and the visit behind an enquiry
date: 2026-10-11
kind: decision
---

Mathias asked in a Claude Code session on 2026-10-11: "Now in terms of the admin page I'd like to sort out irrelevant information. Or rather categorize it. Such as my own checks that i need to be able to remove and should b removed by default. Can I see who visited without breaking a lot of rules? And if not, then track it more accurately".

## What the data showed (107 rows, 2026-09-30 to 2026-10-10)

- Most rows were one Danish desktop key a day with 8 to 30 page views across all pages, often at night: almost certainly Mathias checking the site.
- Four single views from the US, Canada and Germany had no referrer, which suggests automated visitors that run scripts.
- No enquiry had been sent through the site yet.

## Who visited: the answer

- **Not as a person.** The site cannot name a visitor without storing an identifier or looking the IP address up against a company database.
  - That means consent or a third-party processor, a rewritten privacy policy, and the site's promise of no cookies and no stored IP broken.
  - It would also yield little: most visitors from a one-person firm's links come from home and mobile networks, which resolve to an internet provider, not a company.
- **What can tell him:**
  - the source;
  - a label in a link he sent himself (`?via=`);
  - an enquiry, which links to the visit it came from.

  All three are now in the admin area.

## Built

- **Migration 007:** `site_besoeg` gets five new columns:
  - `eget` (own visit);
  - `visning_id` (a random id per page view, never stored in the browser);
  - `sekunder` (visible time);
  - `bynavn` (city, from Vercel's location headers);
  - `via` (link label).

  It also adds an update policy for admins, so visits can be marked, and `kontakt_henvendelser` gets `besoegende`.
- **Own visits:**
  - Every browser the admin is opened in is marked as Mathias's (`localStorage`, set only on his devices), and visits from it are stored as own.
  - "Det er mig" on a visit marks that visitor key; "Ikke mig" undoes it. The key changes daily, so one click covers one day from one browser and network.
  - Older visits from before this change are not marked automatically; he marks them in the list.
- **Categories on `/admin/statistik`:**
  - real visits (always shown);
  - under 3 seconds (one page, visible under 3 seconds, no enquiry);
  - his own.

  The last two are counted but hidden until switched on. Visits from before time tracking can't be told apart by time and count as real.
- **More accurate:**
  - visible time per page and per visit;
  - city;
  - each visit's pages in order, with source and whether it led to an enquiry;
  - a "typical time" column.
- **Link labels:** a link builder in the admin makes `https://mlnanalytics.com/<page>?via=<label>`. The site records the label and removes it from the address bar, so a forwarded link doesn't carry it on.
- **Enquiries:** new enquiries store the same daily key, and `/admin/henvendelser` shows the visit before each one: source, place, device, pages and time.
- **Removed as noise:** the language table (the path already shows the language).
- **Privacy policy (Danish), updated:** it now covers city, visible time, link labels and the link from an enquiry to that day's visit.
