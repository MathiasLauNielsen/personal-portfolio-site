---
title: Runbook for database changes
type: reference
summary: How schema changes and admin changes are made in Supabase, and how to verify them
confidence: high
sources: [raw/2026-09-30-launch-checks.md, ../supabase/migrations/004_admin_allow_list.sql]
updated: 2026-09-30
---

# Runbook for database changes

The remote migration history matches `supabase/migrations` since the rebuild on 2026-09-30, so all schema changes go through migration files.

## Schema change

1. Add `supabase/migrations/NNN_short_name.sql`, next number in sequence. No explicit `BEGIN`/`COMMIT`: `db push` wraps each file.
2. `supabase migration list --linked` shows it as local only.
3. `supabase db push --linked`.
4. Verify with `supabase db query --linked` (policies in `pg_policies`, row counts), and for access rules simulate each role in a rolled-back transaction: `set local role anon|authenticated` plus `request.jwt.claims`.
5. Update [Database](../topics/database.md) and the [log](../log.md).

## Add an admin

Admins are rows in `public.admins`. After the person has an account in Supabase Auth (sign-ups are off, so create the user in the Supabase dashboard):

```sql
INSERT INTO admins (user_id) SELECT id FROM auth.users WHERE email = '...';
```

Do not write the email address into a migration file or this wiki: the repository is public.

## Rules

- Never paste rows from the production tables into the wiki, commits or PRs.
- A wipe or destructive change needs Mathias's explicit approval each time; back up affected rows to the local scratchpad first.
