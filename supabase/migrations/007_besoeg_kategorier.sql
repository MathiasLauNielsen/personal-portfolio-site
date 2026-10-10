-- Besøgsstatistik der kan sorteres: egne besøg, synlig tid pr. sidevisning, by og mærkat fra delte links.
-- Henvendelser får dagens besøgsnøgle, så admin kan se, hvilke sider der blev set før henvendelsen.
-- Stadig ingen IP-adresser og ingen identifikator på den besøgendes enhed.

ALTER TABLE site_besoeg
  -- Sat af browsere, hvor admin har været åbnet, eller markeret bagefter i admin. Skjules som standard.
  ADD COLUMN IF NOT EXISTS eget BOOLEAN NOT NULL DEFAULT FALSE,
  -- Tilfældigt id pr. sidevisning, så den synlige tid kan skrives på den rigtige række. Gemmes ikke i browseren.
  ADD COLUMN IF NOT EXISTS visning_id UUID,
  ADD COLUMN IF NOT EXISTS sekunder INTEGER CHECK (sekunder BETWEEN 0 AND 3600),
  ADD COLUMN IF NOT EXISTS bynavn TEXT CHECK (length(bynavn) <= 100),
  -- ?via=... fra et link, Mathias selv har delt.
  ADD COLUMN IF NOT EXISTS via TEXT CHECK (length(via) <= 60);

CREATE UNIQUE INDEX IF NOT EXISTS idx_site_besoeg_visning ON site_besoeg (visning_id) WHERE visning_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_site_besoeg_besoegende ON site_besoeg (besoegende);

-- Admin kan markere besøg som egne (og fjerne markeringen igen).
DROP POLICY IF EXISTS "Kun admins kan markere besøg" ON site_besoeg;
CREATE POLICY "Kun admins kan markere besøg"
  ON site_besoeg FOR UPDATE TO authenticated
  USING (is_admin()) WITH CHECK (is_admin());

ALTER TABLE kontakt_henvendelser
  ADD COLUMN IF NOT EXISTS besoegende TEXT CHECK (length(besoegende) <= 64);
