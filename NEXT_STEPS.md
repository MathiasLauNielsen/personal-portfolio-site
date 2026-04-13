# Næste skridt — implementeringsplan

En oversigt over anbefalede næste skridt for at bringe portfolio-sitet fra scaffold til et fuldt produktionsklar website.

---

## Hurtige setup-opgaver (skal gøres nu)

### 1. Supabase opsætning
- [ ] Opret projekt på [supabase.com](https://supabase.com)
- [ ] Kør `supabase/migrations/001_create_kontakt.sql` i Supabase SQL Editor
- [ ] Kopiér `.env.example` til `.env.local` og udfyld med Supabase URL + anon key

### 2. Vercel deployment
- [ ] Push kode til GitHub
- [ ] Importér projekt på [vercel.com](https://vercel.com)
- [ ] Tilføj environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Sæt custom domæne

### 3. Personlige oplysninger (udskift placeholder-data)
- [ ] `app/kontakt/page.tsx` → ret e-mail og telefonnummer
- [ ] `app/om-mig/page.tsx` → opdater bio, uddannelse, lokation og erhvervserfaring
- [ ] `app/page.tsx` → justér tal i stats-boksen (projekter, kunder, år, industrier)
- [ ] `components/Header.tsx` og `components/Footer.tsx` → ret navn/kontaktoplysninger
- [ ] `app/layout.tsx` → opdater metadata (description, keywords, OpenGraph)

---

## Fase 1 — Indhold og polish (høj prioritet)

### Profilfoto
Tilføj et professionelt foto på Om mig-siden. Erstat den nuværende gradient-placeholder (`MN`-initialer) med et `<Image>` fra Next.js.

**Fil:** `app/om-mig/page.tsx` — erstat `div` med gradient med `<Image src="/images/mathias.jpg" ... />`

### Cases — reelle projekter
De nuværende cases er eksempler. Opdatér med egne, anonymiserede cases. Hold strukturen:
- Branche, titel, udfordring, løsning, resultat, nøgletal, teknologier

**Fil:** `app/cases/page.tsx` — redigér `cases`-arrayet øverst i filen

### Footer — LinkedIn og CVR
Tilføj LinkedIn-profillink og evt. CVR-nummer.

**Fil:** `components/Footer.tsx`

### Favicon og OpenGraph-billede
- Tilføj `app/favicon.ico`
- Tilføj `public/og-image.png` (1200×630px) til social sharing
- Opdatér `app/layout.tsx` med `openGraph.images`

---

## Fase 2 — Funktionalitet (medium prioritet)

### E-mail notifikation ved ny henvendelse
Når nogen udfylder kontaktformularen, bør du modtage en e-mail automatisk. To muligheder:

**Option A: Supabase + Resend (anbefalet)**
- Opret konto på [resend.com](https://resend.com) (gratis tier: 3.000 mails/md)
- Tilføj `RESEND_API_KEY` til `.env.local` og Vercel
- Udvid `app/api/kontakt/route.ts` med en `fetch` til Resend API efter Supabase-insert

**Option B: Supabase Database Webhooks**
- Opsæt webhook på `kontakt_henvendelser`-tabellen i Supabase Dashboard
- Send til en Vercel serverless function der trigger e-mail

### Kalender/booking-integration
Erstat "ring til mig"-opfordringen med en booking-widget.
- [Cal.com](https://cal.com) — open source, gratis, let at embedde
- Tilføj en "Book et møde"-knap i Header og på Kontakt-siden

### Blog/indsigter-sektion
Et blogformat er godt for SEO og positionering.
- Brug Next.js App Router med MDX (`@next/mdx` eller `contentlayer`)
- URL: `/blog` med undersider `/blog/[slug]`
- Kategorier: Data Engineering, AI/ML, Analytics, Karriere

### Cookie-samtykke
Påkrævet for GDPR ved brug af analytics.
- Let løsning: [cookie-consent](https://github.com/osano/cookieconsent) eller [React Cookie Consent](https://github.com/Masterminds/react-cookie-consent)
- Placér i `app/layout.tsx`

---

## Fase 3 — SEO og performance (løbende)

### Struktureret data (JSON-LD)
Tilføj `Person`-schema på Om mig-siden og `Service`-schema på Ydelser-siden for bedre søgemaskinindeksering.

**Fil:** `app/om-mig/page.tsx` og `app/services/page.tsx` — tilføj `<script type="application/ld+json">` i en Server Component

### Sitemap og robots.txt
Next.js 14 understøtter automatisk generering:
- Opret `app/sitemap.ts` (returnerer `MetadataRoute.Sitemap`)
- Opret `app/robots.ts` (returnerer `MetadataRoute.Robots`)

### Google Analytics / Plausible
- [Plausible](https://plausible.io) — GDPR-venlig, let at sætte op, ingen cookie-banner nødvendig
- Alternativt: Google Analytics 4 via `@next/third-parties`

### Core Web Vitals
- Kør `npm run build` og tjek bundle-størrelser
- Tilføj `loading="lazy"` på billeder og brug Next.js `<Image>` konsekvent
- Overvej `next/font` til alle fonte (allerede brugt til Inter)

---

## Fase 4 — Avancerede features (lav prioritet / fremtidigt)

| Feature | Beskrivelse | Teknologi |
|---|---|---|
| Admin-panel | Se og markér kontakthenvendelser som læst | Supabase + Next.js server actions |
| Testimonials-sektion | Kundecitater på forsiden og cases-siden | Statisk data eller Supabase |
| Case-filtrer | Filtrer cases efter branche eller teknologi | React state (client component) |
| CV-download | PDF-download-knap på Om mig-siden | Statisk fil i `/public` |
| Flersproget | Engelsk version af sitet | `next-intl` |
| Dark mode | Mørkt tema | Tailwind `dark:` + `next-themes` |

---

## Teknisk gæld / kendte forbedringer

- `lib/supabase-server.ts` bruger `@supabase/ssr` men er endnu ikke taget i brug — overvej at skifte API-ruten til server-side klient for bedre sikkerhed (service role key serverside)
- Kontaktformularens validering er kun basic — overvej `zod` for mere robust server-side validering
- Ingen rate limiting på `/api/kontakt` — tilføj Vercel's Edge Middleware eller `upstash/ratelimit` før lancering

---

*Opdateret: April 2026*
