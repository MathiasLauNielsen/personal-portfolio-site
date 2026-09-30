import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { site } from '@/content'

export const metadata: Metadata = {
  title: 'Privatlivspolitik',
  description: `Læs om hvordan ${site.company} behandler persondata.`,
}

export default function Privatlivspolitik() {
  return (
    <div className="bg-paper-card min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Tilbage til forsiden
        </Link>

        <h1 className="text-3xl font-bold text-ink mb-2">Privatlivspolitik</h1>
        <p className="text-sm text-muted mb-10">Sidst opdateret: september 2026</p>

        <div className="prose prose-neutral max-w-none prose-headings:font-bold prose-headings:text-ink prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-p:text-ink prose-p:leading-relaxed prose-li:text-ink">

          <h2>1. Dataansvarlig</h2>
          <p>
            {site.company} v/ {site.person}, CVR {site.cvr}, er dataansvarlig for de personoplysninger, der indsamles via denne hjemmeside.
            Kontakt: <a href={`mailto:${site.email}`} className="text-ink">{site.email}</a>
          </p>

          <h2>2. Hvilke data indsamler vi?</h2>
          <ul>
            <li>
              <strong>Kontaktformular:</strong> Navn, e-mail, virksomhed (valgfrit), telefon (valgfrit) og besked. Oplysningerne bruges udelukkende til at besvare din henvendelse.
            </li>
            <li>
              <strong>Besøgsstatistik:</strong> Samlede, anonyme tal for sidevisninger, henvisende side, land og enhedstype via Vercel Web Analytics, samt sidens indlæsningstid via Vercel Speed Insights. Der gemmes ikke cookies eller andre identifikatorer på din enhed, og du kan ikke genkendes på tværs af dage eller hjemmesider.
            </li>
          </ul>

          <h2>3. Formål og retsgrundlag</h2>
          <p>
            Kontaktoplysninger behandles for at besvare din henvendelse og eventuelt indgå aftale med dig (GDPR art. 6(1)(b)) og ud fra min legitime interesse i at følge op på henvendelser (art. 6(1)(f)). Besøgsstatistik behandles ud fra min legitime interesse i at vide, hvilke sider der bliver brugt (art. 6(1)(f)).
          </p>

          <h2>4. Cookies</h2>
          <p>
            Hjemmesiden sætter ingen cookies for besøgende og bruger ingen marketing- eller tredjeparts-tracking. Derfor er der ingen cookie-banner. Data sælges eller videregives ikke til annoncører.
          </p>

          <h2>5. Databehandlere</h2>
          <ul>
            <li><strong>Vercel</strong> driver hjemmesiden og leverer besøgsstatistikken.</li>
            <li><strong>Supabase</strong> opbevarer kontakthenvendelser på servere i EU (Frankfurt).</li>
            <li><strong>Resend</strong> sender mig en e-mail, når der kommer en ny henvendelse.</li>
          </ul>

          <h2>6. Opbevaring og sletning</h2>
          <p>
            Kontakthenvendelser opbevares i op til 2 år og slettes herefter. Du kan anmode om sletning til enhver tid ved at kontakte os.
          </p>

          <h2>7. Dine rettigheder</h2>
          <p>
            Du har ret til indsigt, berigtigelse, sletning, begrænsning af behandling, dataportabilitet og til at gøre indsigelse mod behandling baseret på legitim interesse. Du kan klage til Datatilsynet (datatilsynet.dk).
          </p>

          <h2>8. Kontakt</h2>
          <p>
            Spørgsmål til denne politik: <a href={`mailto:${site.email}`} className="text-ink">{site.email}</a>
          </p>
        </div>
      </div>
    </div>
  )
}
