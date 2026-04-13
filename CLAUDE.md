# Mathias Nielsen — Personal Portfolio Site

## Projektbeskrivelse

Personlig portfolio-site for en data-konsulent, der tilbyder ydelser inden for Data Engineering, Data Science, Analytics & BI samt AI/ML. Siden er på dansk og er bygget til at præsentere kompetencer, cases og gøre det nemt for potentielle kunder at komme i kontakt.

## Tech Stack

| Teknologi | Version | Formål |
|-----------|---------|--------|
| Next.js | 14.2.29 | React framework (App Router) |
| TypeScript | ^5 | Type-sikkerhed |
| Tailwind CSS | ^3.4.15 | Styling |
| Supabase | ^2.47.0 | Database (kontaktformular) |
| Lucide React | ^0.460.0 | Ikoner |
| Vercel | — | Deployment |

## Filstruktur

```
├── app/
│   ├── layout.tsx          # Root layout med Header og Footer
│   ├── page.tsx            # Forside
│   ├── globals.css         # Globale styles (Tailwind directives)
│   ├── om-mig/page.tsx     # Om mig-side
│   ├── services/page.tsx   # Ydelser-side
│   ├── cases/page.tsx      # Cases/portfolio-side
│   ├── kontakt/page.tsx    # Kontaktside
│   └── api/
│       └── kontakt/route.ts  # API-rute til kontaktformular
├── components/
│   ├── Header.tsx          # Navigationsheader (sticky, responsive)
│   ├── Footer.tsx          # Footer med links og info
│   ├── Hero.tsx            # Genbrugelig hero-komponent
│   ├── ServiceCard.tsx     # Kort til ydelser
│   ├── CaseCard.tsx        # Kort til cases
│   └── ContactForm.tsx     # Kontaktformular (client component)
├── lib/
│   ├── supabase.ts         # Browser Supabase-klient
│   └── supabase-server.ts  # Server-side Supabase-klient
├── types/
│   └── index.ts            # TypeScript-interfaces
└── supabase/
    └── migrations/
        └── 001_create_kontakt.sql  # Database-migration
```

## Supabase Opsætning

### 1. Opret Supabase-projekt

Gå til [supabase.com](https://supabase.com) og opret et nyt projekt.

### 2. Kør migration

Kør SQL-migrationen i Supabase SQL Editor:

```sql
-- Indhold fra supabase/migrations/001_create_kontakt.sql
```

Eller brug Supabase CLI:

```bash
supabase db push
```

### 3. Miljøvariabler

Kopiér `.env.example` til `.env.local` og udfyld:

```bash
cp .env.example .env.local
```

Hent `NEXT_PUBLIC_SUPABASE_URL` og `NEXT_PUBLIC_SUPABASE_ANON_KEY` fra Supabase Dashboard under Settings → API.

### 4. Tabellen `kontakt_henvendelser`

| Kolonne | Type | Beskrivelse |
|---------|------|-------------|
| `id` | UUID | Primærnøgle (auto-genereret) |
| `navn` | TEXT | Kontaktpersonens navn |
| `email` | TEXT | E-mailadresse |
| `virksomhed` | TEXT | Virksomhedsnavn (valgfrit) |
| `telefon` | TEXT | Telefonnummer (valgfrit) |
| `besked` | TEXT | Beskeden |
| `laest` | BOOLEAN | Om henvendelsen er læst |
| `oprettet_at` | TIMESTAMPTZ | Tidsstempel for oprettelse |

## Deployment til Vercel

1. Push kode til GitHub
2. Importér projekt i [vercel.com](https://vercel.com)
3. Tilføj miljøvariabler i Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

## Konventioner

- **Sprog**: Al tekst på siden er på dansk
- **Routing**: Next.js App Router med danske URL-stier (`/om-mig`, `/services`, `/cases`, `/kontakt`)
- **Styling**: Udelukkende Tailwind CSS-klasser (ingen custom CSS-filer udover globals.css)
- **Farver**: 
  - Brand primary: `blue-800` (#1E40AF)
  - Brand accent: `cyan-500` (#06B6D4)
  - Baggrund: `slate-50` (#F8FAFC)
  - Tekst: `slate-900` (#0F172A)
- **Komponenter**: Alle genbrugelige UI-elementer i `/components`
- **Server vs. Client**: Brug `"use client"` kun hvor nødvendigt (f.eks. formularer med state)

## Lokalt udviklingsmiljø

```bash
npm install
cp .env.example .env.local
# Udfyld .env.local med Supabase-nøgler
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000).
