-- The privacy policy (section 6) promises that enquiries and visit statistics are kept for up to
-- 2 years and then deleted. pg_cron runs the deletion inside the database every night.
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA pg_catalog;

-- cron.schedule replaces a job with the same name, so running this again is harmless.
SELECT cron.schedule(
  'slet-data-efter-2-aar',
  '15 3 * * *',
  $$
    DELETE FROM public.kontakt_henvendelser WHERE oprettet_at < now() - interval '2 years';
    DELETE FROM public.site_besoeg WHERE tidspunkt < now() - interval '2 years';
  $$
);
