import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Ydelser',
  description:
    'Specialiseret konsulentbistand inden for Data Engineering, Data Science, Analytics & BI og AI/ML. Skræddersyede løsninger til din forretning.',
}

const services = [
  {
    icon: Database,
    title: 'Data Engineering',
    accentColor: 'bg-blue-50 text-blue-800',
    description:
      'Robuste datapipelines og -infrastruktur der sikrer pålidelig dataflow fra kilde til destination — i skyen eller on-premise.',
    deliverables: [
      'Design og implementering af ELT/ETL-pipelines',
      'Data warehouse og lakehouse arkitektur',
      'Datakvalitet, validering og observabilitet',
      'Migration fra legacy-systemer til moderne platforme',
      'Realtids-streaming med Kafka eller Kinesis',
    ],
    technologies: ['dbt', 'Apache Airflow', 'Spark', 'Snowflake', 'BigQuery', 'AWS', 'GCP', 'Fivetran'],
  },
  {
    icon: Brain,
    title: 'Data Science',
    accentColor: 'bg-violet-50 text-violet-800',
    description:
      'Statistisk modellering og machine learning der omdanner rå data til præcise forudsigelser og handlingsbare indsigter.',
    deliverables: [
      'Predictive modelling og forecasting',
      'Kundesegmentering og churn prediction',
      'Anomali-detektion og risikoscoring',
      'Eksperimentdesign og A/B-test analyse',
      'Feature engineering og model deployment',
    ],
    technologies: ['Python', 'scikit-learn', 'PyTorch', 'MLflow', 'Hugging Face', 'SQL', 'R'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & BI',
    accentColor: 'bg-emerald-50 text-emerald-800',
    description:
      'Interaktive dashboards og KPI-rapporter der giver ledelse og teams et klart overblik over forretningens performance.',
    deliverables: [
      'Semantisk lag og metrics-definitioner',
      'Selvbetjenings-BI til slutbrugere',
      'KPI-dashboards til C-niveau og teams',
      'Automatiserede rapporteringsflows',
      'Datakatalog og governance',
    ],
    technologies: ['Power BI', 'Looker', 'Tableau', 'Metabase', 'dbt Semantic Layer', 'SQL'],
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    accentColor: 'bg-orange-50 text-orange-800',
    description:
      'Integration af LLM-teknologi, NLP og avancerede ML-modeller der automatiserer processer og skaber konkurrencefordele.',
    deliverables: [
      'LLM-integration og RAG-arkitektur',
      'NLP til dokumentforståelse og klassifikation',
      'AI-assistenter og chatbots til intern brug',
      'Automatisering af manuelle dataprocesser',
      'MLOps og CI/CD for ML-pipelines',
    ],
    technologies: ['OpenAI', 'Hugging Face', 'LangChain', 'Python', 'FastAPI', 'Pinecone', 'MLflow'],
  },
]

const process = [
  {
    step: '01',
    title: 'Behovsafdækning',
    description:
      'Vi starter med en grundig samtale om jeres nuværende datasituation, mål og udfordringer. Jeg kortlægger eksisterende infrastruktur og identificerer de største forretningsmæssige gevinster.',
  },
  {
    step: '02',
    title: 'Løsningsdesign',
    description:
      'På baggrund af behovsafdækningen udarbejder jeg en konkret løsningsarkitektur med teknologianbefalinger, tidsplan og budget. Alt tilpasset jeres teknologistak og modenhedsniveau.',
  },
  {
    step: '03',
    title: 'Implementering',
    description:
      'Jeg implementerer løsningen iterativt med løbende leverancer og tæt dialog. Kode, tests og dokumentation leveres løbende — ingen overraskelser ved slutleverance.',
  },
  {
    step: '04',
    title: 'Overdragelse & support',
    description:
      'Efter levering sikrer jeg en grundig overdragelse til jeres team med dokumentation og eventuel oplæring. Jeg er tilgængelig for opfølgende support og videreudvikling.',
  },
]

export default function Services() {
  return (
    <>
      <Hero
        title="Ydelser"
        subtitle="Specialiseret konsulentbistand inden for hele data-stacken — fra infrastruktur og ingeniørarbejde til avanceret analyse og AI-integration."
        cta1={{ label: 'Kontakt mig', href: '/kontakt' }}
        cta2={{ label: 'Se cases', href: '/cases' }}
      />

      {/* Services grid */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 mb-4">
              Hvad jeg tilbyder
            </span>
            <h2 className="section-heading">Fire kernekompetencer</h2>
            <p className="section-subheading">
              Fra datainfrastruktur og predictive modelling til BI-dashboards og
              AI-løsninger — jeg dækker hele datakæden.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${service.accentColor}`}
                  >
                    <service.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">
                    Leverancer
                  </p>
                  <ul className="flex flex-col gap-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle
                          size={15}
                          className="text-cyan-500 shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 mb-4">
              Arbejdsproces
            </span>
            <h2 className="section-heading">Sådan arbejder jeg</h2>
            <p className="section-subheading">
              En struktureret tilgang der sikrer forudsigelige leverancer og tæt
              samarbejde gennem hele projektet.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.step}
                className="rounded-xl bg-white border border-slate-100 p-6 shadow-sm"
              >
                <div className="text-4xl font-black text-blue-100 mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Har du et dataprojekt?
          </h2>
          <p className="mt-4 text-lg text-blue-200 max-w-xl mx-auto">
            Lad os tage en uforpligtende samtale om, hvilken løsning der passer
            bedst til dine behov og budget.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-cyan-400 transition-colors"
            >
              Kontakt mig
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Se mine cases
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
