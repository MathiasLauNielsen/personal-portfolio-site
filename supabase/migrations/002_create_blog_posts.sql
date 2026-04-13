-- Blog posts tabel
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titel TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  ingress TEXT,
  indhold TEXT NOT NULL,
  kategori TEXT,
  tags TEXT[] DEFAULT '{}',
  publiceret BOOLEAN DEFAULT FALSE,
  publiceret_at TIMESTAMPTZ,
  oprettet_at TIMESTAMPTZ DEFAULT NOW(),
  opdateret_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts (slug);
CREATE INDEX IF NOT EXISTS blog_posts_publiceret_at_idx ON blog_posts (publiceret_at DESC);
CREATE INDEX IF NOT EXISTS blog_posts_publiceret_idx ON blog_posts (publiceret);

-- Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Alle kan læse publicerede indlæg
CREATE POLICY "Alle kan læse publicerede indlæg" ON blog_posts
  FOR SELECT
  USING (publiceret = TRUE);

-- Kun authenticated brugere kan administrere alle indlæg (inkl. upublicerede)
CREATE POLICY "Kun authenticated kan administrere indlæg" ON blog_posts
  FOR ALL
  USING (auth.role() = 'authenticated');

-- Automatisk opdatering af opdateret_at
CREATE OR REPLACE FUNCTION update_opdateret_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.opdateret_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_opdateret_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_opdateret_at();
