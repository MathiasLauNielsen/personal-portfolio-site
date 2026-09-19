# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The website for Mathias Lau Nielsen / MLN Data Consulting (CVR 45700577), a freelance senior data engineer. Its job is to sell him to **companies that do not know him or his clients**, and who want to buy one of two things: **data platform expertise** or **AI coding expertise**. It is target-group agnostic: no industry or role is singled out. Client names (Ase, Copyright Agent, Viteco) only appear as supporting experience, and results are phrased so they make sense without knowing the client. Next.js 14 (App Router), TypeScript, Tailwind 3, Supabase, deployed on Vercel (every PR gets a preview; merging to `main` deploys production).

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build    # production build, also type-checks
```

`.env.local` needs `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (`vercel env pull`). `gh`, `vercel` and `supabase` CLIs are linked to this project. There are no tests.

## Architecture

- **Three root layouts via route groups:** `app/(en)` (English, the default, at `/`), `app/(da)` (Danish under `/da/*`, plus the Danish-only `/blog` and `/privatlivspolitik`) and `app/(admin)/admin` (no site chrome, `noindex`). Each sets its own `<html lang>`. `app/api/kontakt` is shared. URLs from earlier versions redirect in `next.config.mjs`.
- **Pages:** home, one page per offer (`/data-platform`, `/ai-coding`, both rendered by `components/pages/OfferingPage.tsx` with an `offer` prop), about and contact. Route files are thin: metadata plus a component from `components/pages/*` with a `locale` prop.
- **Copy lives in `content/`, not in pages.** `content/en.ts` defines the shape, `content/da.ts` must match it (`Copy` type), `content/site.ts` holds company facts, the route map for both languages and `switchLocalePath()`. To change text, edit both language files.
- **Tone and honesty:** short, plain, factual. No hype and no invented facts, clients, numbers or job titles; leave things out rather than guess. Every figure comes from real work and says whether it was measured in production or tested on historical data.
- **Design system:** light, warm `paper` base, `ink` for text and the few dark sections, one cobalt `accent` (tokens in `tailwind.config.ts`; component classes such as `container-page`, `eyebrow`, `display`, `btn-*` in `app/globals.css`). Fonts: Bricolage Grotesque (display), Hanken Grotesk (body), JetBrains Mono (labels). `Reveal` handles scroll-in animation and respects reduced motion.
- **Blog and privacy pages are Danish only** and still use the legacy `Hero` wrapper. Blog posts come from the Supabase `blog_posts` table and are managed in `/admin/blog`.
- **Supabase:** tables `kontakt_henvendelser` (contact form, inserted through `/api/kontakt`) and `blog_posts`. Column names are Danish. RLS currently grants access to any authenticated user, so public sign-ups must stay disabled in the Supabase project until a team allow-list exists. The live tables were created by hand; the files in `supabase/migrations` are not recorded in the remote migration history.
- `middleware.ts` guards `/admin/*` (except `/admin/login`) with a Supabase session check.

## Open items

- Portrait photo: there is a marked spot for it in `components/pages/AboutPage.tsx`.
- Real domain: set `NEXT_PUBLIC_SITE_URL`; it feeds `metadataBase` and canonicals.
- Career details are limited to what is publicly verifiable; refine from a LinkedIn PDF export when available.
- Cookie banner is Danish only.
- The earlier management-dashboard prototype (CRM, pipeline, finance) lives on the local branch `prototype/management-app` and is meant to be ported into `/admin`.
