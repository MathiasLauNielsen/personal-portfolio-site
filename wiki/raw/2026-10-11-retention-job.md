---
title: Nightly deletion of enquiries and visit rows older than 2 years
date: 2026-10-11
kind: observation
---

Section 6 of the privacy policy promises that enquiries and visit statistics are kept for up to 2 years and then deleted. Mathias approved building the job on 2026-10-11 (work item #35).

Migration `supabase/migrations/008_slet_efter_2_aar.sql`, applied with `supabase db push --linked` on 2026-10-11, installs `pg_cron` 1.6.4 and schedules the job `slet-data-efter-2-aar` at `15 3 * * *` (03:15 UTC daily). It deletes rows from `kontakt_henvendelser` with `oprettet_at` and from `site_besoeg` with `tidspunkt` older than `now() - interval '2 years'`.

Checked after the push: the job is in `cron.job`, active, owned by `postgres`; the roles `anon` and `authenticated` have no usage on the `cron` schema. Before the push the conditions matched 0 rows in both tables (the oldest visit row is from 2026-09-30), so the first rows go in late September 2028.

Each run is recorded in `cron.job_run_details`.
