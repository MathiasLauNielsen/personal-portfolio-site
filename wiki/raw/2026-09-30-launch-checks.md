---
title: Launch checks on the website and database
date: 2026-09-30
kind: observation
---

Results of checks run by Claude on 2026-09-30.

## Supabase

- Auth settings endpoint: `disable_signup: true` after Mathias switched sign-ups off (it was `false` earlier the same day).
- Before the wipe: tables `kontakt_henvendelser` (1 row, created 2026-04-13, the day the project was set up) and `blog_posts` (0 rows), function `update_opdateret_at`, 1 auth user, no `supabase_migrations.schema_migrations` table.
- Wipe: dropped both tables and the function. `supabase db push --linked` then applied `001` to `004`; `schema_migrations` holds 4 rows and `admins` 1 row.
- Policies after rebuild: blog_posts "Alle kan læse publicerede indlæg" (SELECT) and "Kun admins kan administrere indlæg" (ALL); kontakt_henvendelser "Alle kan indsætte henvendelser" (INSERT), "Kun admins kan læse henvendelser" (SELECT), "Kun admins kan opdatere henvendelser" (UPDATE).
- Access test in a rolled-back transaction: the admin saw 1 seeded row, a random authenticated user saw 0, an anonymous insert succeeded.

## Production website (personal-portfolio-site-tau.vercel.app)

- PR #4 merged 13:52 UTC; the production deployment was Ready about a minute later.
- `/`, `/data-platform`, `/da`, `/privatlivspolitik`, `/admin/login` returned 200. The home page showed the new product durations.
- `POST /api/kontakt` with a valid enquiry returned 201; the test row was deleted afterwards. A message of 10,001 characters returned 400.

## Vercel project

- Environment variables present: `SUPABASE_SECRET_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Not present: `RESEND_API_KEY`, `LEAD_EMAIL_FROM`, `LEAD_EMAIL_TO`, `NEXT_PUBLIC_SITE_URL`.
- The code does not read `SUPABASE_SECRET_KEY`.
