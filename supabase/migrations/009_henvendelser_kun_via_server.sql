-- Henvendelser oprettes kun af serveren (/api/kontakt) med den hemmelige nøgle, som omgår RLS,
-- ligesom site_besoeg. Den offentlige nøgle ligger i browseren, så med insert-policyen kunne alle
-- skrive direkte i tabellen og springe spamfælden, længdegrænserne og e-mailtjekket i /api/kontakt over.
DROP POLICY IF EXISTS "Alle kan indsætte henvendelser" ON kontakt_henvendelser;
