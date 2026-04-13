import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import CaseCard from '@/components/CaseCard'
import { ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cases',
  description:
    'Se eksempler på projekter inden for Data Engineering, Data Science, Analytics & BI og AI/ML — leveret til kunder på tværs af brancher.',
}

const featuredCase = {
  industry: 'Media & Rettigheder',
  title: 'Data platform til rettighedsforvaltning og royaltyberegning',
  challenge:
    'Copyright Agent håndterer rettigheder og royalties for tusindvis af rettighedshavere på tværs af platforme. Manuelle processer og spredte datakilder gjorde det svært at sikre korrekte og rettidige udbetalinger.',
  solution:
    'Designede og implementerede en samlet dataplatform der automatisk henter brugsdata fra streaming- og distributionsplatforme, transformerer det via dbt og beregner royalties til den månedlige udbetaling.',
  result:
    'Reducerede behandlingstid for månedlig royaltyberegning med 80 % og eliminerede manuelle fejl i udbetalingsprocessen. Rettighedshavere har nu realtids-adgang til egne data via selvbetjeningsportal.',
  metric: '−80% behandlingstid',
  technologies: ['Python', 'dbt', 'PostgreSQL', 'Airflow', 'Power BI', 'FastAPI'],
}

const previousCases = [
  {
    industry: 'Retail',
    title: 'Realtids lagerstyring med predictive analytics',
    challenge:
      'En detailkæde med 80+ butikker manglede overblik over lagerstatus på tværs af lokationer og oplevede hyppige stockouts i topperioder.',
    solution:
      'Byggede en realtids data-pipeline fra POS-systemer og ERP til Snowflake og implementerede en forecast-model (Prophet + XGBoost) til efterspørgselsforudsigelse.',
    result:
      'Reducerede stockouts med 34 % og overlagring med 19 % i de første tre måneder efter udrulning.',
    metric: '−34% stockouts',
    technologies: ['Snowflake', 'dbt', 'Airflow', 'Python', 'Power BI'],
  },
  {
    industry: 'Finans',
    title: 'Churn prediction og proaktiv kundebevaring',
    challenge:
      'Et fintech-selskab oplevede stigende churn men havde ingen tidlig-advarsel-system og reagerede kun reaktivt på opsigelser.',
    solution:
      'Udviklede en ML-model (gradient boosting) til at score kunders churnrisiko ugentligt, integreret med CRM så kundeservice proaktivt kan handle.',
    result:
      'Reducerede månedlig churn med 22 % over 6 måneder og øgede engagement i risikogruppen med 41 %.',
    metric: '−22% churn',
    technologies: ['Python', 'scikit-learn', 'MLflow', 'BigQuery', 'Looker'],
  },
  {
    industry: 'Logistik',
    title: 'Modernisering af datainfrastruktur',
    challenge:
      'Et logistikfirma kørte kritiske rapporter på et forældet on-premise SQL Server setup med 24 timers dataforsinkelse og manglende datakvalitet.',
    solution:
      'Migrerede til GCP BigQuery med dbt-transformationslag, Airflow-orkestrering og automatiserede datakvalitets-checks. Ny rapportering via Looker.',
    result:
      'Dataforsinkelse reduceret fra 24 timer til under 15 minutter. Rapporteringstid fra 4 timer til 5 minutter.',
    metric: '24t → 15min',
    technologies: ['GCP', 'BigQuery', 'dbt', 'Airflow', 'Looker', 'Terraform'],
  },
  {
    industry: 'Sundhed',
    title: 'NLP til automatisk journalklassificering',
    challenge:
      'En sundhedsvirksomhed brugte mange mandetimer på manuelt at klassificere og route indkomne patienthenvendelser til rette fagperson.',
    solution:
      'Implementerede en NLP-pipeline baseret på fine-tunet dansk sprogmodel til automatisk klassificering og prioritering af henvendelser.',
    result:
      'Automatiserede 78 % af klassificeringerne med >92 % nøjagtighed. Sparet ca. 15 mandetimer pr. uge.',
    metric: '78% automatiseret',
    technologies: ['Python', 'Hugging Face', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    industry: 'E-commerce',
    title: 'Unified customer data platform',
    challenge:
      'En e-handelsvirksomhed havde kundedata spredt over 6 systemer (CRM, ESP, Analytics, ERP, CS-tool, ads) uden et samlet kundebillede.',
    solution:
      'Designede og implementerede en Customer Data Platform med identity resolution, unified customer profiles og aktivering til marketing-kanaler.',
    result:
      'Samlet kundesynlighed på tværs af touchpoints. ROAS på betalte kanaler forbedret 28 % via bedre segmentering.',
    metric: '+28% ROAS',
    technologies: ['dbt', 'Snowflake', 'Fivetran', 'Python', 'Tableau'],
  },
]

export default function Cases() {
  return (
    <>
      <Hero
        title="Cases"
        subtitle="Dokumenterede resultater fra dataprojekter på tværs af brancher — fra datainfrastruktur og machine learning til AI-automatisering og BI-løsninger."
        cta1={{ label: 'Kontakt mig', href: '/kontakt' }}
        cta2={{ label: 'Se ydelser', href: '/services' }}
      />

      {/* Featured current client */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block rounded-full bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-700 mb-4">
              Nuværende samarbejde
            </span>
            <h2 className="section-heading">Copyright Agent</h2>
            <p className="section-subheading">
              Et løbende samarbejde om at modernisere og automatisere datainfrastrukturen bag
              forvaltning af digitale rettigheder og royaltyberegning.
            </p>
          </div>

          <div className="relative rounded-2xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 sm:p-10">
            <div className="absolute -top-3.5 left-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                <Star size={11} fill="white" />
                Aktiv kunde
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-2">
              <div className="lg:col-span-2 flex flex-col gap-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1 block">
                    {featuredCase.industry}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {featuredCase.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Udfordring', text: featuredCase.challenge },
                    { label: 'Løsning', text: featuredCase.solution },
                    { label: 'Resultat', text: featuredCase.result },
                  ].map(({ label, text }) => (
                    <div key={label}>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 block mb-1">
                        {label}
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-1">
                  {featuredCase.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="rounded-2xl bg-white border border-cyan-200 shadow-sm p-8 text-center w-full">
                  <div className="text-4xl font-black text-cyan-600 mb-1">
                    {featuredCase.metric}
                  </div>
                  <div className="text-sm text-slate-500">Nøgleresultat</div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-400">Branche</div>
                    <div className="text-sm font-semibold text-slate-700 mt-0.5">
                      {featuredCase.industry}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous cases grid */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 mb-4">
              Tidligere projekter
            </span>
            <h2 className="section-heading">Erfaring på tværs af brancher</h2>
            <p className="section-subheading">
              Projekter fra tidligere ansættelser og samarbejder. Navne og detaljer er
              anonymiseret af hensyn til fortrolighed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {previousCases.map((c) => (
              <CaseCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-blue-800 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            {[
              { value: '40+', label: 'Projekter leveret' },
              { value: '25+', label: 'Tilfredse kunder' },
              { value: '8+', label: 'Industrier' },
              { value: '5+', label: 'Års erfaring' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-cyan-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Skal dit projekt være det næste?</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Tag kontakt for en uforpligtende samtale om dine dataudfordringer og
            hvad vi kan opnå sammen.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-800 px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Kontakt mig
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
