import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privatlivspolitik',
  description: 'Læs om hvordan Mathias Nielsen behandler persondata og bruger cookies.',
}

export default function Privatlivspolitik() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Tilbage til forsiden
        </Link>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privatlivspolitik</h1>
        <p className="text-sm text-slate-400 mb-10">Sidst opdateret: april 2026</p>

        <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700">

          <h2>1. Dataansvarlig</h2>
          <p>
            Mathias Nielsen er dataansvarlig for de personoplysninger, der indsamles via denne hjemmeside.
            Kontakt: <a href="mailto:mathias@example.com" className="text-blue-700">mathias@example.com</a>
          </p>

          <h2>2. Hvilke data indsamler vi?</h2>
          <p>Vi indsamler følgende data:</p>
          <ul>
            <li>
              <strong>Kontaktformular:</strong> Navn, email, virksomhed (valgfrit), telefon (valgfrit) og besked. Disse oplysninger bruges udelukkende til at besvare din henvendelse.
            </li>
            <li>
              <strong>Analysedata:</strong> Anonymiserede besøgsdata (sider besøgt, enhedstype, land) via Vercel Analytics — kun hvis du har givet samtykke. Ingen personhenførbare data videregives.
            </li>
          </ul>

          <h2>3. Formål og retsgrundlag</h2>
          <p>
            Kontaktoplysninger behandles på baggrund af dit samtykke (GDPR art. 6(1)(a)) og for at besvare din henvendelse (GDPR art. 6(1)(b)). Analysedata behandles udelukkende med dit forudgående samtykke.
          </p>

          <h2>4. Cookies og sporing</h2>
          <p>
            Hjemmesiden bruger ikke marketing- eller tredjeparts-tracking-cookies. Hvis du accepterer analyse-cookies, bruger vi Vercel Analytics, som er cookie-fri og GDPR-venlig. Ingen data sælges eller videregives til annoncører.
          </p>
          <p>
            Du kan til enhver tid trække dit samtykke tilbage ved at rydde din lokale browserdata.
          </p>

          <h2>5. Opbevaring og sletning</h2>
          <p>
            Kontakthenvendelser opbevares i op til 2 år og slettes herefter. Du kan anmode om sletning til enhver tid ved at kontakte os.
          </p>

          <h2>6. Dine rettigheder</h2>
          <p>
            Du har ret til indsigt, berigtigelse, sletning, begrænsning af behandling og dataportabilitet. Du kan klage til Datatilsynet (datatilsynet.dk).
          </p>

          <h2>7. Kontakt</h2>
          <p>
            Spørgsmål til denne politik: <a href="mailto:mathias@example.com" className="text-blue-700">mathias@example.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
