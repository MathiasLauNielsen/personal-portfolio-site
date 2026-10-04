# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The website for Mathias Lau Nielsen / MLN Data Consulting (CVR 45700577), a freelance data and AI engineer. Its job is to sell him to **companies that do not know him or his clients**, and who want to buy one of two things: **data platform expertise** or **AI coding expertise**. It is target-group agnostic: no industry or role is singled out. Client names (Ase, Copyright Agent, Viteco) only appear as supporting experience, and results are phrased so they make sense without knowing the client. Next.js 14 (App Router), TypeScript, Tailwind 3, Supabase, deployed on Vercel (every PR gets a preview; merging to `main` deploys production).

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build    # production build, also type-checks
npm run wiki     # rebuild wiki/_index.md and lint the wiki (wiki:check = no writes)
```

`.env.local` needs `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (`vercel env pull`). `gh`, `vercel` and `supabase` CLIs are linked to this project. There are no tests.

## Architecture

- **Three root layouts via route groups:** `app/(en)` (English, the default, at `/`), `app/(da)` (Danish under `/da/*`, plus the Danish-only `/privatlivspolitik`) and `app/(admin)/admin` (no site chrome, `noindex`). Each sets its own `<html lang>`. `app/api/kontakt` is shared. URLs from earlier versions redirect in `next.config.mjs`.
- **Pages:** home, one page per offer (`/data-platform`, `/ai-coding`, both rendered by `components/pages/OfferingPage.tsx` with an `offer` prop), cases (`/cases` plus one page per written case), about and contact. Route files are thin: metadata plus a component from `components/pages/*` with a `locale` prop.
- **Copy lives in `content/`, not in pages.** `content/en.ts` defines the shape, `content/da.ts` must match it (`Copy` type), `content/site.ts` holds company facts, the route map for both languages and `switchLocalePath()`. To change text, edit both language files.
- **Cases show the work instead of describing it.** The three data platform results carry a before/after chart (`chart` on each `home.proof.items` entry, drawn by `components/BarCompare.tsx`); it may only redraw numbers the label already states. A written case is one entry in `cases.studies` in both language files (shape in `content/types.ts`: figures plus a list of blocks) and one slug pair in `caseSlugs` in `content/site.ts`; `CaseStudyPage` renders it and `CaseCard` links to it from the home, offer and About pages. A client case needs the client's permission and facts from Mathias before it is written. The agent case (`agent`) is about this repository: every statement in it must stay checkable in the repository, and its excerpts quote this file and the wiki word for word, so change the excerpt when the quoted line changes.
- **The site exists to sell.** Every page should move a visitor toward sending an enquiry: hours (embedded engineer) or a fixed-scope product (platform review, AI coding setup). Home page order follows the buyer: pitch, proof, the two offers (with the AI coding case under them), how to buy, why me, FAQ, enquiry form. `ContactSection` (pitch + short form, `id="contact"`) closes every page; `MobileCtaBar` keeps call/contact on screen on phones. Links like `/contact?topic=review` preselect the form topic. Keep the form short: each added field costs enquiries.
- **Lead handling:** `/api/kontakt` stores the enquiry in Supabase and, when `RESEND_API_KEY` is set, emails it to `LEAD_EMAIL_TO`. A hidden `website` field is a spam trap. A successful send logs a `henvendelse_sendt` event with the topic (see below) so offers can be compared; the Vercel `enquiry_sent` event is also sent but is dropped on the Hobby plan.
- **Visit statistics without a cookie banner:** `SiteTracker` (in `SiteShell`) posts each page view to `/api/besoeg`, which filters bots, derives country, device type and a daily visitor key (hash of IP, browser and `BESOEG_SALT` or the secret key; no IP stored) and inserts into `site_besoeg` with `SUPABASE_SECRET_KEY` (the table has no public insert policy). Only production hostnames are counted (`lib/besoeg.ts`). `/admin/statistik` aggregates it. Vercel Web Analytics and Speed Insights stay loaded as a cross-check; nothing sets cookies, and the privacy policy describes all of it. Adding anything that sets cookies means adding consent first.
- **Search and sharing:** `app/sitemap.ts`, `app/robots.ts`, organisation JSON-LD in `components/StructuredData.tsx` (FAQ JSON-LD on the home page). Every page takes its metadata from `lib/page-metadata.ts` (title, description, canonical, hreflang incl. `x-default`, per-page link preview); preview images come from `app/api/og` (layout in `components/OgCard.tsx`), one per page or case and language.
- **Brand:** the MLN Data Consulting logo (navy `#00398D`) lives in `public/brand/` (`logo.png`, `logo-mark.png`, `logo-white.png`); `app/icon.png`, `app/apple-icon.png` and `app/favicon.ico` are cut from it. Regenerate them from the source logo rather than editing by hand.
- **Offer names are fixed:** Hours, Data platform review, AI coding setup (Danish: Timer, Gennemgang af dataplatform, Opsætning af AI-kodning), identical on every page and in the form topics. Offer-page engagement cards tagged with a `topic` reuse the home page's duration and enquiry link.
- **Tone and honesty:** short, plain, factual. No hype and no invented facts, clients, numbers or job titles; leave things out rather than guess. Every figure comes from real work and says whether it was measured in production or tested on historical data.
- **Positioning is scope, not title:** the site leads with what he has been responsible for (the whole data platform at two companies, in data since 2020) and with measured results. No "Principal" or other seniority title as the headline; "senior" only describes the embedded-engineer offer. Career claims are limited to the facts in `wiki/raw/2026-09-30-positioning.md`; money figures from client work need the client's permission first.
- **Design system:** light, warm `paper` base, `ink` for text and the few dark sections, one cobalt `accent` (tokens in `tailwind.config.ts`; component classes such as `container-page`, `eyebrow`, `display`, `btn-*` in `app/globals.css`). Fonts: Bricolage Grotesque (display), Hanken Grotesk (body), JetBrains Mono (labels). `Reveal` handles scroll-in animation and respects reduced motion.
- **Blog:** posts come from the Supabase `blog_posts` table and are managed in `/admin/blog`. Each post has one language (`sprog`): English posts render at `/blog`, Danish at `/da/blog`, both through `components/pages/BlogListPage.tsx` and `BlogPostPage.tsx`; `lib/blog.ts` reads published posts with a 60-second cache. A post is not translated unless written twice. Posts follow the shape theory → practice → business, one idea each, written so a non-technical reader can act on them, with the same honesty rules as the rest of the site. The privacy page is Danish only and still uses the legacy `Hero` wrapper.
- **Blog posts are visual first.** The figures carry the argument for a non-technical reader; the text is for the patient technical one. Every post has a lead figure before its first heading and a figure for each point that can be drawn, so a reader who looks only at the figures and their titles gets why it matters. A figure is a React component in `components/blog/figures/` (one file per post, registered by key in `index.ts`), shown in the frame `components/blog/Figure.tsx` and placed in Markdown with `![one-line summary](figure:key)` on a line of its own; `components/blog/PostBody.tsx` renders both the public page and the admin preview, and the admin editor lists the keys. Per figure: the title is the takeaway in one sentence, the caption says what is drawn in plain words, and the basis line is honest: `measured` (in production) and `tested` (on past data) figures may only draw numbers the post already states; everything else is `illustration`, with small round made-up numbers so it cannot be mistaken for data. Draw with the site tokens only: one accent for the point and grey for context, a value or label on every mark so it reads without colour, a legend for two or more series, one scale per figure, no pies and no dual axes, and layouts that hold at phone width (HTML for bars, lists and cards; SVG with a 360-wide viewBox for curves).
- **Supabase:** tables `kontakt_henvendelser` (contact form, inserted through `/api/kontakt`) and `blog_posts`. Column names are Danish. Reading and changing enquiries and blog posts is limited to accounts in the `admins` table (`is_admin()`, migration 004); public sign-ups are disabled in the Supabase project and should stay so. Schema changes go through a new file in `supabase/migrations` and `supabase db push --linked`; the database was rebuilt from these files on 2026-09-30, so the remote migration history matches them. New admins: `INSERT INTO admins (user_id) SELECT id FROM auth.users WHERE email = '...'`.
- `middleware.ts` guards `/admin/*` (except `/admin/login`) with a Supabase session check.

## Pull requests

Claude owns the PR lifecycle in this repo; Mathias does not review before merging. When a task is done: branch, commit, open a PR, wait for the checks (Vercel preview, wiki check), merge to `main` with a merge commit and delete the branch, then verify the production deploy. Stop before `main` only when Mathias has to do something specific first, and say what.

## Company wiki

`wiki/` is the company's knowledge base, kept by Claude in the llm-wiki pattern: what exists, how it is set up, what was decided and why, and what is open. This file covers the code; the wiki covers everything around it (domain and email, database, hosting, services, offers, runbooks). Rules and formats: `wiki/schema.md`.

- **Read before acting:** for any question or task about the company's IT, accounts or operations, read `wiki/_index.md` first, then the articles it points to. Open items: `wiki/topics/open-items.md`.
- **Update in the same piece of work, not later**, whenever something changes that the wiki describes or should describe:
  - infrastructure or configuration: DNS, email, database schema or access rules, Vercel settings and environment variable names, deploys;
  - a service or account is added, removed or found;
  - Mathias states a decision, a fact or a preference about the company;
  - an incident or a lesson, including what went wrong;
  - an open item is done or a new one appears.
- **How:** save the evidence as a new file in `wiki/raw/` (never edit existing raw files), update or create the affected articles, append a line to `wiki/log.md`, then run `npm run wiki`. It must report 0 problems before committing.
- **Not for:** code structure (it lives here and in the code), and one-off chat answers.
- **The repository is public:** never write secrets, personal data, client-confidential material, prices, rates or finances into the wiki.
