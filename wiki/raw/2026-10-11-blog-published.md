---
title: Four blog posts published; the list lagged behind, fixed
date: 2026-10-11
kind: observation
---

Mathias published four English posts from `/admin/blog` on 2026-10-11 between 01:35 and 01:36 Copenhagen time (`blog_posts.publiceret_at` 23:35 UTC on 10 October), then said: "I just published all four articles to the blog but nothing appeared".

The posts:
- "What it costs to find out: exploration under a budget" (`what-it-costs-to-find-out`)
- "Why the nightly report costs more than it should" (`why-the-nightly-report-costs-more-than-it-should`)
- "A forecast is a promise. Here is how to read one." (`a-forecast-is-a-promise`)
- "You only learn from the choices you make" (`you-only-learn-from-the-choices-you-make`)

## What was wrong

- Each post page worked at once (23:36 UTC).
- `/blog` still showed "No posts yet" (served from the cache, `Age: 47`).
  - The page revalidates every 60 seconds and the post list is cached for another 60 seconds, so a change could take about two minutes to appear.
  - All four were listed at the next check, about 75 seconds later.
- The sitemap was static: it was built once per deploy, so posts published later were never listed in it.

## Fixed (PR "Blog: publishing shows at once, sitemap lists new posts")

- After every save or delete, the admin editor calls `/api/blog-opdateret` (signed-in only). That clears the `blog` cache tag and the blog pages, so a change shows at once.
- The sitemap revalidates hourly and on every save.
