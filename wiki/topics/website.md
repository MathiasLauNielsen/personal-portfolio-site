---
title: Website
type: topic
summary: What the site is for, what is live, and where its parts are described
confidence: high
sources: [raw/2026-09-30-launch-checks.md, raw/2026-09-30-domain-live.md, raw/2026-09-30-decisions.md, raw/2026-09-30-seo-audit.md, raw/2026-10-02-cases-section.md, raw/2026-10-04-blog-theory-to-business.md, raw/2026-10-04-blog-figures.md, raw/2026-10-04-blog-figures-written.md, ../CLAUDE.md, raw/2026-10-04-blog-removed.md, raw/2026-10-04-blog-restored-one-article.md, raw/2026-10-11-site-pass-and-client-cases.md, raw/2026-10-11-pages-filled-out.md]
updated: 2026-10-11
---

# Website

The site exists to win enquiries from companies that don't know Mathias yet. Everything on it moves a visitor toward the enquiry form. English is the default; Danish lives under `/da`.

## Status (as of 2026-09-30)

- The redesign is live in production since PR #4 (13:52 UTC): two offers, ways to buy, FAQ, an enquiry form on every page.
- Served at https://mlnanalytics.com since 2026-09-30, about 14:40 UTC, see [Domain and email](domain-and-email.md).
- Since 2026-10-02 the site has a Cases section, and since 2026-10-11 it has three written cases ([source](../raw/2026-10-11-site-pass-and-client-cases.md)):
  - two anonymised client cases from a data platform: the extra work and the nightly rewrite in one, and the ranking model;
  - one case about this repository, as the proof for the AI coding offer.

  Each figure on the home page links to its case, and the charts are on the case pages. What is still missing for more cases is in [Questions for writing a client case](../references/case-questions.md).
- Each page has one job since 2026-10-11 ([source](../raw/2026-10-11-pages-filled-out.md)). The offer pages describe their fixed-scope product step by step and answer the buyer's questions about that kind of work. The home page FAQ keeps the buying questions.
- No testimonials since 2026-10-11. A quote goes on the site only with the person's explicit permission.
- Traffic is expected to be low for a while, which is why there is no rate limiting beyond field limits and a spam trap.
- The blog (since 2026-10-04): `/blog` (English) and `/da/blog` (Danish), one language per post, managed in `/admin/blog`. Articles are about concepts from Mathias's fields, technical and business oriented, never about his own work; one researched article at a time, with figures that carry the argument (rules in `CLAUDE.md`). The blog was removed and restored the same evening after three quick posts seemed "random and wrong"; those three are withdrawn and stay unpublished. One researched article, "What it costs to find out: exploration under a budget", is a draft waiting for Mathias to read it, see [Open items](open-items.md) ([built](../raw/2026-10-04-blog-theory-to-business.md), [figures](../raw/2026-10-04-blog-figures.md), [removed](../raw/2026-10-04-blog-removed.md), [restored](../raw/2026-10-04-blog-restored-one-article.md)).

## Where things are described

- Code, architecture and copy rules: `CLAUDE.md` in the repo root.
- What is sold: [Offers](../concepts/offers.md). What to improve: [Site improvement plan](../concepts/site-improvement-plan.md).
- Enquiries: [Lead handling](lead-handling.md).
- Data: [Database](database.md). Hosting and deploys: [Hosting](hosting.md).

## Search visibility (as of 2026-09-30)

- Not yet indexed by Google, and the name has no search footprint; expected for a domain that went live the same day. Technical basics are in place, see the [audit](../raw/2026-09-30-seo-audit.md).
- What will actually bring visitors: referrals, LinkedIn, brokers and directories. Search can deliver name rankings and correct link previews within months, not enquiry volume. The accounts this needs are open items 20–25 in [Open items](open-items.md).
- Titles carry the words buyers search for ("freelance data engineer", "København", "konsulent", tool names); the positioning stays in the page text.

## Measuring whether anyone sees it (as of 2026-09-30)

Visits, sources and enquiries are logged by the site itself and shown at `/admin/statistik`; see [Hosting](hosting.md). The Vercel dashboard only keeps a month and drops the enquiry event on the Hobby plan.

## Privacy

The privacy policy (Danish only, `/privatlivspolitik`) names the company, CVR and contact email, lists Vercel and Supabase (EU) as data processors, describes the cookie-free visit statistics (no IP stored, daily anonymous key, kept up to 2 years) and states that no cookies are set. Update it whenever a service that handles visitor or enquiry data is added or removed; Mathias should read it through once, as it has not had a legal review.
