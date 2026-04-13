import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import {
  Database,
  Brain,
  BarChart3,
  Cpu,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

const services = [
  {
    icon: Database,
    title: 'Data Engineering',
    description:
      'Robuste datapipelines og -infrastruktur der sikrer pålidelig dataflow fra kilde til destination — i skyen eller on-premise.',
    accentColor: 'bg-blue-50 text-blue-800',
  },
  {
    icon: Brain,
    title: 'Data Science',
    description:
      'Statistisk modellering og machine learning der omdanner rå data til præcise forudsigelser og handlingsbare indsigter.',
    accentColor: 'bg-violet-50 text-violet-800',
  },
  {
    icon: BarChart3,
    title: 'Analytics & BI',
    description:
      'Interaktive dashboards og KPI-rapporter der giver ledelse og teams et klart overblik over forretningens performance.',
    accentColor: 'bg-emerald-50 text-emerald-800',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description:
      'Integration af LLM-teknologi, NLP og avancerede ML-modeller der automatiserer processer og skaber konkurrencefordele.',
    accentColor: 'bg-orange-50 text-orange-800',
  },
]

const benefits = [
  'Fri for lange opstartsperioder — hurtig onboarding og levering',
  'Skræddersyede løsninger tilpasset din teknologistak',
  'Transparent kommunikation og løbende statusopdateringer',
  'Dokumenteret erfaring på tværs af brancher',
]

export default function Forside() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Omsæt data til beslutninger"
        subtitle="Jeg hjælper virksomheder med at bygge den datainfrastruktur, de analytiske modeller og de AI-løsninger, der skaber reel forretningsværdi. Fra rå data til handlingsbare indsigter."
        cta1={{ label: 'Se mine ydelser', href: '/services' }}
        cta2={{ label: 'Kontakt mig', href: '/kontakt' }}
      />

      {/* Services teaser */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 mb-4">
              Ydelser
            </span>
            <h2 className="section-heading">
              Hvad kan jeg hjælpe med?
            </h2>
            <p className="section-subheading">
              Specialiseret konsulentbistand inden for hele data-stacken — fra
              infrastruktur og ingeniørarbejde til avanceret analyse og AI.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                accentColor={service.accentColor}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-primary">
              Se alle ydelser
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Text left */}
            <div>
              <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 mb-4">
                Om mig
              </span>
              <h2 className="section-heading">
                Erfaren data-konsulent med fokus på resultater
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Med over 5 års erfaring inden for data og teknologi har jeg
                hjulpet virksomheder på tværs af brancher med at opbygge
                skalerbare dataplatforme og omsætte komplekse datasæt til klar
                forretningsforståelse.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Jeg arbejder tæt sammen med mine kunder — fra den første
                kortlægning af behov til færdig implementering og overdragelse.
                Effektivitet, kvalitet og gennemsigtighed er kernen i min
                tilgang.
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={18}
                      className="text-cyan-500 shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/om-mig" className="btn-primary">
                  Læs mere om mig
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Visual right */}
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-blue-800 to-blue-900 p-8 text-white shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Projekter leveret', value: '40+' },
                    { label: 'Tilfredse kunder', value: '25+' },
                    { label: 'Års erfaring', value: '5+' },
                    { label: 'Industrier', value: '8+' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-white/10 p-5 backdrop-blur-sm"
                    >
                      <div className="text-3xl font-bold text-cyan-400">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs text-blue-200">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-white/10 p-5">
                  <p className="text-sm text-blue-100 italic leading-relaxed">
                    &ldquo;Data er ikke blot tal — det er historien om din
                    forretning. Min opgave er at hjælpe dig med at læse den
                    rigtigt.&rdquo;
                  </p>
                  <p className="mt-2 text-xs text-cyan-400 font-semibold">
                    — Mathias Nielsen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-900 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Klar til at løfte dit datapotentiale?
          </h2>
          <p className="mt-4 text-lg text-blue-200 max-w-xl mx-auto">
            Lad os tage en uforpligtende samtale om, hvordan jeg kan hjælpe dig
            og din virksomhed med at nå jeres datamål.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-cyan-400"
            >
              Tag kontakt
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Se mine cases
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
