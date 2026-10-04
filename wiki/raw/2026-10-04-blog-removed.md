---
title: The blog is removed from the site
date: 2026-10-04
kind: decision
---

Claude Code session on 2026-10-04, late evening.

## What Mathias said

"Please remove anything blog related."

## What was removed (PR "Remove the blog")

- The public blog pages in both languages, the post pages, the blog section of the admin, the figure components, the Markdown renderer, the blog copy in both language files, the nav and footer links, the blog entries in the sitemap, the link-preview route's blog case, the blog metadata helper and the post type.
- The two Markdown packages used only by the blog. The typography plugin stays because the privacy page uses it.
- `/blog`, `/blog/*`, `/da/blog` and `/da/blog/*` now redirect permanently to the home page of their language. One post ("Why the nightly report costs more than it should") had been live from about 00:41 UTC on 2026-10-04 until the removal.

## What was kept

- The `blog_posts` table and migrations 002 and 006 in Supabase, with the three posts in it. Dropping a table is irreversible and was not asked for explicitly; the site no longer reads the table. Dropping it needs a new migration and Mathias's go-ahead, see [Open items](../topics/open-items.md).
- The earlier raw sources about the blog, as history.
