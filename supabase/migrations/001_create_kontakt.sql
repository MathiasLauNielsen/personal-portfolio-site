-- Opret tabel til kontakthenvendelser
CREATE TABLE IF NOT EXISTS kontakt_henvendelser (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  navn TEXT NOT NULL,
  email TEXT NOT NULL,
  virksomhed TEXT,
  telefon TEXT,
  besked TEXT NOT NULL,
  laest BOOLEAN NOT NULL DEFAULT FALSE,
  oprettet_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indeks til sortering/filtrering i admin-visning
CREATE INDEX IF NOT EXISTS idx_kontakt_oprettet ON kontakt_henvendelser (oprettet_at DESC);
CREATE INDEX IF NOT EXISTS idx_kontakt_laest ON kontakt_henvendelser (laest);

-- Row Level Security: kun service role kan læse (anon kan kun indsætte)
ALTER TABLE kontakt_henvendelser ENABLE ROW LEVEL SECURITY;

-- Policy: alle (inkl. anon) kan indsætte
CREATE POLICY "Alle kan indsætte henvendelser"
  ON kontakt_henvendelser
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: kun authenticated (service role / din admin) kan læse
CREATE POLICY "Kun authenticated kan læse henvendelser"
  ON kontakt_henvendelser
  FOR SELECT
  TO authenticated
  USING (true);
