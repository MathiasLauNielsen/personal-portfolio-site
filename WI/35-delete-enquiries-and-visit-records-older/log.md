# Log: #35 Delete enquiries and visit records older than 2 years

## 2026-10-11 03:11 — Mathias Nielsen

- **Started:** folder created; branch `feat/35-delete-enquiries-and-visit-records-older`.

## 2026-10-11 03:12 — Mathias Nielsen

- **Inspected:** the privacy policy promises deletion after 2 years (section 6); timestamps are `kontakt_henvendelser.oprettet_at` and `site_besoeg.tidspunkt`. `pg_cron` 1.6.4 is available in the Supabase project but not installed.
- **Changed:** `supabase/migrations/008_slet_efter_2_aar.sql` installs `pg_cron` and schedules `slet-data-efter-2-aar` nightly at 03:15 UTC with the two deletes. No function, so nothing new is callable through the API.
- **Decision (Claude):** nightly instead of the monthly job named in the question to Mathias, so "up to 2 years" holds to the day; the cost is two indexed deletes a night.
- **Dry check:** the delete conditions match 0 rows today in both tables (oldest visit 2026-09-30, no enquiries), so the first deletion happens in late September 2028.
- **Next:** `supabase db push --linked`, confirm the job in `cron.job`, update the wiki, PR.
- Run `db-push-dry-run`: `supabase db push --linked --dry-run` → exit 0, 1.6 s (runs/20261011-031246-db-push-dry-run.log).
- Run `db-push`: `supabase db push --linked --yes` → exit 0, 2.0 s (runs/20261011-031306-db-push.log).
- Run `verify-cron`: `supabase db query --linked "select j.jobname, j.schedule, j.active, j.username, (select installed_version from pg_available_extensions where name='pg_cron') as pg_cron, has_schema_privilege('anon','cron','USAGE') as anon_cron, has_schema_privilege('authenticated','cron','USAGE') as auth_cron from cron.job j;"` → exit 0, 1.6 s (runs/20261011-031316-verify-cron.log).
- Run `wiki`: `npm run -s wiki` → exit 0, 0.3 s (runs/20261011-031346-wiki.log).

## 2026-10-11 03:13 — Mathias Nielsen

- **Applied:** `supabase db push --linked` after a dry run that listed only 008 (the first push attempt was blocked by auto mode for skipping the preview). Migration history now matches the repo through 008.
- **Verified:** `slet-data-efter-2-aar` is in `cron.job`, active, schedule `15 3 * * *`, owned by `postgres`; `anon` and `authenticated` have no usage on the `cron` schema.
- **Docs:** wiki database article (new "Deletion after 2 years" section with the check command), open item 16 marked done, raw source `2026-10-11-retention-job.md`; one sentence in CLAUDE.md's Supabase notes.
- **Next:** after the first night, `cron.job_run_details` should show a `succeeded` run deleting nothing; then close the loop on #35. No blockers.
