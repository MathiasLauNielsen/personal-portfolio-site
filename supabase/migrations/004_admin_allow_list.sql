-- Kun konti i admins må læse og ændre henvendelser og blogindlæg.
-- Før dette kunne enhver indlogget bruger det, og alle kunne oprette en konto.
CREATE TABLE IF NOT EXISTS admins (
  user_id UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  oprettet_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Ingen policies: tabellen kan ikke læses eller ændres via API'et, kun fra SQL.
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION is_admin() RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = ''
AS $$ SELECT EXISTS (SELECT 1 FROM public.admins WHERE user_id = auth.uid()) $$;

-- Første admin: projektets eneste konto. Stopper hvis der findes andre konti,
-- så en fremmed konto aldrig bliver admin. Tilføj senere admins med:
--   INSERT INTO admins (user_id) SELECT id FROM auth.users WHERE email = '...';
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM admins) THEN
    IF (SELECT count(*) FROM auth.users) <> 1 THEN
      RAISE EXCEPTION 'Forventede præcis én konto i auth.users. Indsæt admin manuelt efter e-mail.';
    END IF;
    INSERT INTO admins (user_id) SELECT id FROM auth.users;
  END IF;
END $$;

DROP POLICY IF EXISTS "Kun authenticated kan læse henvendelser" ON kontakt_henvendelser;
DROP POLICY IF EXISTS "Kun authenticated kan opdatere henvendelser" ON kontakt_henvendelser;
DROP POLICY IF EXISTS "Kun authenticated kan administrere indlæg" ON blog_posts;

CREATE POLICY "Kun admins kan læse henvendelser"
  ON kontakt_henvendelser FOR SELECT TO authenticated
  USING (is_admin());

CREATE POLICY "Kun admins kan opdatere henvendelser"
  ON kontakt_henvendelser FOR UPDATE TO authenticated
  USING (is_admin()) WITH CHECK (is_admin());

CREATE POLICY "Kun admins kan administrere indlæg"
  ON blog_posts FOR ALL TO authenticated
  USING (is_admin()) WITH CHECK (is_admin());
