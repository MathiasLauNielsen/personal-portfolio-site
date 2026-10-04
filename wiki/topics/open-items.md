---
title: Open items
type: topic
summary: Everything unfinished for the company's IT and website, ordered by importance, with who acts next
confidence: high
sources: [raw/2026-09-30-brand-and-quick-wins.md, raw/2026-09-30-domain-live.md, raw/2026-09-30-launch-checks.md, raw/2026-09-30-accounts-inventory.md, raw/2026-09-30-positioning.md, raw/2026-09-30-seo-audit.md, raw/2026-09-30-visit-statistics.md, raw/2026-10-02-cases-section.md, raw/2026-10-02-linkedin-audit.md, raw/2026-10-04-blog-theory-to-business.md, raw/2026-10-04-blog-figures.md, raw/2026-10-04-blog-figures-written.md, raw/2026-10-04-blog-removed.md, raw/2026-10-04-blog-restored-one-article.md]
updated: 2026-10-04
---

# Open items

Ordered by importance. Remove an item when done and note it in the relevant article's history.

| # | Item | Next action | Who |
|---|---|---|---|
| 1 | Leads are not emailed | Resend account, domain and API key, see [Lead handling](lead-handling.md) | Mathias, then Claude |
| 2 | No DKIM for outgoing mail | Generate the record in the Google Admin console (Apps → Google Workspace → Gmail → Authenticate email) | Mathias, then Claude verifies |
| 3 | Product durations are estimates | Replace with real numbers after the first engagements, see [Offers](../concepts/offers.md) | Mathias |
| 4 | "Taking on new engagements" badge unconfirmed | Confirm availability wording in `content/*.ts`, including "part-time or full-time" under Hours | Mathias |
| 5 | Repository is public | Stays public for now: the AI coding case published on 2026-10-02 tells readers to check it. If it is ever made private, rewrite or remove that case first, see [IT operating model](../concepts/it-operating-model.md) | Mathias |
| 6 | Leftover services | Delete the Render service behind the old `www` record and the inactive `planning-site` Supabase project if unused, see [Services and accounts](../references/services.md) | Mathias |
| 7 | Portrait photo | Send or commit one photo (head and shoulders, plain background, at least 1200 px wide). Claude crops it and places it on the About page (marked spot in `components/pages/AboutPage.tsx`) and on the case pages | Mathias, then Claude |
| 8 | Career details | The About page tells the story from 2020 (done 2026-09-30). Still missing: exact years and titles per role, from a LinkedIn PDF export; and LinkedIn itself should tell the same story | Mathias |
| 9 | Management dashboard prototype | Port the local branch `prototype/management-app` into `/admin` | Claude, when asked |
| 10 | Full cases for the three figures | The figures have a before/after chart each on `/cases` since 2026-10-02. A full write-up per figure needs Mathias's answers to [the case questions](../references/case-questions.md) and the client's agreement (item 18). Start with the nightly job | Mathias answers, then Claude writes |
| 11 | Buyer testimonials and references | Ask a client contact at Copyright Agent and a manager at Ase for a short quote that confirms the scope (responsible for the whole platform) and a result, with permission to publish, or to be a reference a buyer can call | Mathias |
| 12 | Proof for the AI coding offer | This repository is published as a written case since 2026-10-02 (`/cases/company-it-run-by-a-coding-agent`); Mathias should read it once, as it speaks in his voice and describes the DNS failure on launch day. Still missing: a written case of restructuring a production data platform so coding agents can work in it, see [the case questions](../references/case-questions.md) | Mathias reads and answers, then Claude writes |
| 13 | Prices on the fixed-scope products | Decide on "from €X" and whether the review fee is credited toward follow-on work | Mathias |
| 14 | First call | Name the free first call and the output it promises | Mathias |
| 15 | Calendar booking | Decide whether to offer booking after the form; needs a booking account | Mathias |
| 16 | Privacy policy promises deletion after 2 years | Automate: a scheduled job that deletes enquiries and visit rows (`site_besoeg`) older than 2 years, see [Database](database.md) | Claude |
| 17 | Site accent colour vs logo | Decide whether the site's bright cobalt accent should become the logo navy `#00398D`, see [Company facts](../references/company.md) | Mathias |
| 18 | Permission to publish results and descriptions | A message to send is in [the case questions](../references/case-questions.md). Ask Copyright Agent and Ase whether the work described on the About page is fine to publish as written, and whether results in money may be published (named, anonymised or as percentages). Until then no money figures go on the site, see [Company facts](../references/company.md) | Mathias |
| 19 | Machine learning and forecasting on the data platform page | Confirmed by Mathias on 2026-09-30 as a strength inside the data platform offer; the six model types are now named. Remaining: a written case for one of them, see [Offers](../concepts/offers.md) | Mathias |
| 20 | Google Search Console and Bing Webmaster Tools | Verify mlnanalytics.com in Search Console (DNS TXT record at Namecheap, see [Runbook for DNS changes](../references/runbook-dns-changes.md)), submit the sitemap, then import the site into Bing Webmaster Tools. Gives the baseline for every later title change | Mathias creates the accounts; Claude adds the DNS record and checks |
| 21 | LinkedIn profile | As of 2026-10-02 the profile presents an Ase employee: no company, no website, a 2019 photo, no post since 2021. The text to paste, the banner, the links and the first post are ready in [LinkedIn profile](../references/linkedin-profile.md); Mathias follows the ten steps there. Also from him: a PDF export of the profile (titles and dates), and whether Ase is current and as employer or client | Mathias |
| 22 | Google Business Profile | Create one as a service-area business with hidden address (he works on-site in Copenhagen); the cheapest way to appear for searches on the name | Mathias |
| 23 | Broker and directory profiles | Register with the Danish brokers and directories that rank today: Right People Group, 7N, emagine, Worksome, findITconsultants.com, giig.dk, freelancit.dk. Link each to the site | Mathias |
| 24 | Keyword volumes | Only Google Keyword Planner (needs a Google Ads account) gives Danish search volumes; decide whether it is worth an account | Mathias |
| 25 | Which tools may be named | The AI coding page names Claude Code; decide whether GitHub Copilot, Cursor and dbt may be named too, since buyers search for tool names | Mathias |
| 26 | Visitor-key salt | Optionally `vercel env add BESOEG_SALT production` with a random value, then redeploy; until then the key is salted with the secret key, see [Hosting](hosting.md) | Mathias |
| 27 | Visuals for cases | For each client case, either an anonymised screenshot or an OK for Claude to redraw it as a diagram | Mathias |
| 28 | ~~Blog posts waiting to be published~~ | Withdrawn 2026-10-04: the three quick posts seemed random and wrong to Mathias; they stay unpublished in the database ([source](../raw/2026-10-04-blog-restored-one-article.md)) | Done |
| 29 | ~~Add the figure lines to the three draft posts~~ | Done 2026-10-04, then moot: the posts were withdrawn the same day ([source](../raw/2026-10-04-blog-restored-one-article.md)) | Done |
| 30 | Read and publish the article on exploration under a budget | "What it costs to find out: exploration under a budget" is a draft in `/admin/blog` since 2026-10-04, researched and sourced, with figures. Mathias reads it, edits if needed, and publishes with the toggle, or asks Claude to. Next articles: his choice of concept, one at a time ([source](../raw/2026-10-04-blog-restored-one-article.md)) | Mathias |
