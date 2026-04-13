import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Tag kontakt til Mathias Nielsen for en uforpligtende samtale om dit dataprojekt. Jeg svarer typisk inden for 1-2 hverdage.',
}

const contactInfo = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'mathias@example.dk',
    href: 'mailto:mathias@example.dk',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '+45 00 00 00 00',
    href: 'tel:+4500000000',
  },
  {
    icon: MapPin,
    label: 'Lokation',
    value: 'København, Danmark',
    href: null,
  },
  {
    icon: Clock,
    label: 'Svartid',
    value: 'Typisk inden for 1-2 hverdage',
    href: null,
  },
]

export default function Kontakt() {
  return (
    <>
      <Hero
        title="Kontakt"
        subtitle="Har du et dataprojekt eller blot et spørgsmål? Udfyld formularen nedenfor eller skriv direkte til mig — jeg vender tilbage hurtigst muligt."
        centered
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Left: contact info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 mb-4">
                  Kontaktoplysninger
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Lad os tage en snak
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Uanset om du har et konkret projekt klar, er i researches-fasen
                  eller bare ønsker at høre hvad der er muligt — er du altid
                  velkommen til at række ud.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium text-slate-900 hover:text-blue-800 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-900">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-slate-900">
                    Åben for nye projekter
                  </span>
                </div>
                <p className="text-sm text-slate-500">
                  Jeg har kapacitet til nye opgaver og samarbejder. Kontakt mig
                  for at høre om tilgængelighed og estimater.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  Send en besked
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
