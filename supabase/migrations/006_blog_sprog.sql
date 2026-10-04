-- Blogindlæg får et sprog. Engelsk er sitets standardsprog, så bloggen findes nu på /blog (en) og /da/blog (da).
-- Eksisterende rækker (der er ingen i produktion) regnes som danske.
ALTER TABLE blog_posts
  ADD COLUMN IF NOT EXISTS sprog TEXT NOT NULL DEFAULT 'da'
  CHECK (sprog IN ('da', 'en'));

CREATE INDEX IF NOT EXISTS blog_posts_sprog_publiceret_idx ON blog_posts (sprog, publiceret, publiceret_at DESC);
