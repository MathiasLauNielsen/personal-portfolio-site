# Log: #37 Site review 2026-10-22: fix what needs no new facts

## 2026-10-22 02:49 — Mathias Nielsen

- **Started:** folder created; branch `fix/37-site-review-fixes`.
- Run `build`: `npm run build` → exit 0, 36 s (runs/20261022-025110-build.log).
- Run `wiki`: `npm run wiki` → exit 0, 0.3 s (runs/20261022-025347-wiki.log).

## 2026-10-22 02:54 — Mathias Nielsen

- **Review:** adversarial pass over the copy, the live site, the Vercel variable names, the migrations, the public repository and an emulated phone. Recorded in `wiki/raw/2026-10-22-adversarial-review.md`; the client finding is kept out of the repository.
- **Copy (en and da):** removed "Often both", "the most common way companies work with me" and the AI coding "When companies call me" heading; durations read "Estimated …"; products label "price agreed up front"; hero terminal ends "merged, then verified the live site"; the data platform case's lesson no longer repeats the nightly-job post; blog list title, description and lead describe the theory-only shape.
- **Blog lists:** a language's list with no posts is left out of the sitemap and is `noindex` (`generateMetadata` in both list routes, `hasPublishedPosts`).
- **Enquiries:** `/api/kontakt` inserts with `SUPABASE_SECRET_KEY`; migration 009 drops the public insert policy on `kontakt_henvendelser`.
- **Checked locally:** build passes; on `next start` the sitemap has no `/da/blog`, `/da/blog` is `noindex, follow`, `/blog` is `index, follow`, and the new copy renders in both languages. The local database is not in the same state as production (it lists a post production has merged away), so the blog checks are repeated in production.
- **Wiki:** open items 1, 3, 10, 18, 20 updated and 36 added; database, hosting, lead handling, offers, website and buyer review updated; `npm run wiki` 0 problems.
- **Next:** pull request, checks, merge, verify production; then `supabase db push --linked` for migration 009 (after the deploy, so production never runs the old code without the policy), test that a direct insert with the publishable key is refused and that the form still stores an enquiry, and delete the test row. Results go in the issue comment.
