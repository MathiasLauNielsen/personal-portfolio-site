-- Tillad authenticated brugere at opdatere henvendelser (f.eks. markere som læst)
CREATE POLICY "Kun authenticated kan opdatere henvendelser"
  ON kontakt_henvendelser
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
