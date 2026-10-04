---
title: Database
type: topic
summary: The Supabase project behind the site, its tables and access rules, and how it was rebuilt on 2026-09-30
confidence: high
sources: [raw/2026-09-30-launch-checks.md, raw/2026-09-30-decisions.md, raw/2026-09-30-visit-statistics.md, raw/2026-10-04-blog-theory-to-business.md, ../supabase/migrations/004_admin_allow_list.sql, ../supabase/migrations/005_site_besoeg.sql, ../supabase/migrations/006_blog_sprog.sql]
updated: 2026-10-04
---

# Database

Supabase project `personal-portfolio-site` in eu-central-1 (Frankfurt), linked to this repo. It holds the site's enquiries and blog posts and the login for `/admin`.

## Tables

| Table | Holds | Who can read | Who can write |
|---|---|---|---|
| `kontakt_henvendelser` | Enquiries from the contact form | Admins | Anyone may insert; admins may update |
| `blog_posts` | Blog posts, one language each (`sprog`: `en` or `da`) | Anyone, published posts only; admins, all | Admins |
| `admins` | User ids allowed to administer | Nobody through the API | SQL only |
| `site_besoeg` | Visit statistics: one row per page view or enquiry event, no IP addresses | Admins | Only the server (`/api/besoeg`) with the secret key; no public insert policy |

Column names are Danish. "Admins" means `is_admin()`: the signed-in user's id is in `admins`. Public sign-ups are off in Supabase Auth, and even an account that gets created cannot read anything unless it is added to `admins`.

## How changes are made

Through migration files, see [Runbook for database changes](../references/runbook-database-changes.md).

## History

- 2026-04-13: tables created by hand in the SQL editor; one test enquiry.
- 2026-10-04: migration 006 adds `blog_posts.sprog` so the blog can be English first, see [Website](website.md).
- 2026-09-30, late: migration 005 adds `site_besoeg`, see [Hosting](hosting.md) for how it is filled and read.
- 2026-09-30: found public sign-ups open while any signed-in user could read enquiries. Only Mathias's account existed, so nothing was exposed. Sign-ups turned off, then the database wiped and rebuilt from migrations 001–004 with the admin allow-list, at Mathias's request. The migration history now matches the repo.
