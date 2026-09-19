# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The website for Mathias Lau Nielsen / MLN Data Consulting (CVR 45700577): a freelance consultant positioned on **optimization with data and AI, proven in numbers**. Next.js 14 (App Router), TypeScript, Tailwind 3, Supabase, deployed on Vercel (every PR gets a preview; merging to `main` deploys production).

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build    # production build, also type-checks
```

`.env.local` needs `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (`vercel env pull`). `gh`, `vercel` and `supabase` CLIs are linked to this project. There are no tests.

## Architecture

- **Three root layouts via route groups:** `app/(en)` (English, the default, at `/`), `app/(da)` (Danish under `/da/*`, plus the Danish-only `/blog` and `/privatlivspolitik`) and `app/(admin)/admin` (no site chrome, `noindex`). Each sets its own `<html lang>`. `app/api/kontakt` is shared. Old URLs (`/om-mig`, `/kontakt`, `/en/*`) redirect in `next.config.mjs`.
- **Audience and tone:** CTOs and CEOs of mid-sized companies, international. Entry problems are reporting and reporting strategy; proof is cost reduction and revenue from automated systems. Copy is short, dry and factual. No hype, no invented facts; leave things out rather than guess.
- **Copy lives in `content/`, not in pages.** `content/en.ts` defines the shape, `content/da.ts` must match it (`Copy` type), `content/site.ts` holds company facts, the route map for both languages and `switchLocalePath()` for the language switch. Route files are thin: they set metadata/`alternates` and render a component from `components/pages/*` with a `locale` prop. To change text, edit both language files.
- **Honesty rule for numbers.** Every figure on the site comes from real client work and carries a `ProofStatus` (`measured` | `tested` | `pending`) rendered by `StatusBadge`. Never add a number without a source, never round up, and update the status when something goes live. No invented clients, stats or testimonials.
- **Design system:** tokens in `tailwind.config.ts` (`ink`, `paper`, `lime`, `muted`), component classes in `app/globals.css` (`container-page`, `eyebrow`, `display`, `btn-*`). Fonts: Instrument Serif (display), Inter (body), JetBrains Mono (numbers and labels). Dark `ink` heroes, `paper` content sections, `lime` reserved for emphasis and primary actions. `Reveal` handles scroll-in animation and respects reduced motion.
- **Blog and privacy pages are Danish only** and still use the legacy `Hero` wrapper. Blog posts come from the Supabase `blog_posts` table and are managed in `/admin/blog`.
- **Supabase:** tables `kontakt_henvendelser` (contact form, inserted through `/api/kontakt`) and `blog_posts`. Column names are Danish. RLS currently grants access to any authenticated user, so public sign-ups must stay disabled in the Supabase project until a team allow-list exists. The live tables were created by hand; the files in `supabase/migrations` are not recorded in the remote migration history.
- `middleware.ts` guards `/admin/*` (except `/admin/login`) with a Supabase session check.

## Open items

- Portrait photo: replace the monogram block in `components/pages/AboutPage.tsx`.
- Real domain: set `NEXT_PUBLIC_SITE_URL`; it feeds `metadataBase` and canonicals.
- Job titles and dates in the About timeline are limited to what is publicly verifiable; fill in from a LinkedIn PDF export when available.
- Cookie banner is Danish only.
- The earlier management-dashboard prototype (CRM, pipeline, finance) lives on the local branch `prototype/management-app` and is meant to be ported into `/admin`.
