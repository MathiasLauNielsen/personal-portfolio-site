---
title: The blog rebuilt in English, and three posts drafted in the shape theory → practice → business
date: 2026-10-04
kind: decision
---

Claude Code session on 2026-10-04.

## What Mathias asked

- First, three essays on general theory in his fields, to read and learn from, at a level between a master's course and a PhD reading group. They are a private Claude Doc ("Three essays to read"), not part of the site: bandits and exploration; what a probabilistic forecast means; incremental view maintenance.
- Then: "convert this information to business speak as blog posts on the site. Show me that you can mix heavy theory to the simple algorithmic of theory → practice → business. For every three parts, make a blog post about how it relates to business objectives in terms a CEO would understand. Or even better, a salesperson, as the lowest common denominator."

## What was found

- The blog was Danish only (`/blog` in the Danish layout), used the legacy page wrapper, and had no posts. The site's default language is English and the site improvement plan already said "blog refocused on the two offers, English first".
- Posts live in Supabase (`blog_posts`) and are managed in `/admin/blog`. The table had no language column.

## What was done (PR "Blog: English first, three posts from theory to business")

- Migration 006 adds `blog_posts.sprog` (`en` or `da`, default `da`), applied to the linked project with `supabase db push --linked` on 2026-10-04.
- English posts render at `/blog`, Danish at `/da/blog`, through shared page components in the site's design. A post exists in one language only; the language switch on a post goes to the other language's list. Blog list pages are in the sitemap with language alternates; published posts are added per language without alternates.
- Public reads go through a cached client (60 seconds), so a post published in the admin shows within a minute.
- The admin form has a language field (default English). The footer links to the blog in both languages.
- Three English posts were inserted as drafts (`publiceret = false`), one per essay, each in the shape: the theory in plain words, what it looks like in practice, what it means for the business, three questions to ask the data team. Facts in them are limited to what the site already publishes (the 72%/25% ranking result tested on two months of historical data; the 46 million / 683,000 nightly job, measured in production; revenue forecasting for budgeting, top-down and bottom-up). No new client facts.
  - "You only learn from the choices you make" (bandits, exploration, keeping a random slice so a new rule can be evaluated later)
  - "A forecast is a promise. Here is how to read one." (which point in the range, calibration, averaging, trustworthy ranges, forecasts that add up)
  - "Why the nightly report costs more than it should" (changing only what changed, which questions are expensive by nature, corrections, the one test)

## Decisions

- Posts stay drafts until Mathias has read them; he publishes with the toggle in `/admin/blog`, or asks Claude to. They speak in his voice on a public site, and he said he would "read, confirm and validate".
- Blog posts are not translated unless written twice. The Danish list stays empty until a Danish post exists.
- The shape theory → practice → business is the house style for posts from now on; it is recorded in `CLAUDE.md`.
