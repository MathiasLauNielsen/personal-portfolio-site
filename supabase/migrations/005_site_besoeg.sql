-- Besøgsstatistik uden cookies: én række pr. sidevisning eller hændelse.
-- Ingen IP-adresser gemmes; "besoegende" er en daglig hash af IP, browser og en hemmelig salt,
-- så en besøgende kan tælles én gang pr. dag, men ikke genkendes på tværs af dage.
CREATE TABLE IF NOT EXISTS site_besoeg (
  id BIGSERIAL PRIMARY KEY,
  tidspunkt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  haendelse TEXT NOT NULL DEFAULT 'sidevisning' CHECK (haendelse IN ('sidevisning', 'henvendelse_sendt')),
  sti TEXT NOT NULL CHECK (length(sti) <= 200),
  sprog TEXT CHECK (sprog IN ('da', 'en')),
  besoegende TEXT NOT NULL CHECK (length(besoegende) <= 64),
  henviser TEXT CHECK (length(henviser) <= 200),
  utm_kilde TEXT CHECK (length(utm_kilde) <= 100),
  utm_medium TEXT CHECK (length(utm_medium) <= 100),
  utm_kampagne TEXT CHECK (length(utm_kampagne) <= 100),
  land TEXT CHECK (length(land) <= 2),
  enhed TEXT CHECK (enhed IN ('mobil', 'tablet', 'desktop')),
  emne TEXT CHECK (length(emne) <= 50)
);

CREATE INDEX IF NOT EXISTS idx_site_besoeg_tidspunkt ON site_besoeg (tidspunkt DESC);

ALTER TABLE site_besoeg ENABLE ROW LEVEL SECURITY;

-- Ingen insert-policy: rækker oprettes kun af serveren (/api/besoeg) med den hemmelige nøgle,
-- som omgår RLS. Den offentlige nøgle kan hverken læse eller skrive.
CREATE POLICY "Kun admins kan læse besøg"
  ON site_besoeg FOR SELECT TO authenticated
  USING (is_admin());
