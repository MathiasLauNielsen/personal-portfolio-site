import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import { ArrowRight, MapPin, GraduationCap, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Om mig',
  description:
    'Lær mere om Mathias Nielsen — freelance data-konsulent med baggrund i Data Engineering, Data Science og Analytics.',
}

const skills = {
  Programmeringssprog: ['Python', 'SQL', 'R', 'TypeScript', 'Scala'],
  'Cloud & Platforme': ['AWS', 'GCP', 'Azure', 'Databricks', 'Snowflake'],
  'Data Engineering': ['Apache Airflow', 'dbt', 'Kafka', 'Spark', 'Fivetran'],
  'Analytics & BI': ['Power BI', 'Looker', 'Tableau', 'Metabase', 'Grafana'],
  'Machine Learning': ['scikit-learn', 'TensorFlow', 'PyTorch', 'MLflow', 'Hugging Face'],
  'Databaser': ['PostgreSQL', 'BigQuery', 'Redshift', 'MongoDB', 'Redis'],
}

const experiences = [
  {
    title: 'Freelance Data Konsulent',
    company: 'Selvstændig',
    period: '2022 – nu',
    description:
      'Hjælper virksomheder på tværs af brancher med datapipelines, analytiske modeller og BI-løsninger. Projekter inden for retail, finans, sundhed og logistik.',
    highlights: [
      'Bygget og optimeret data warehouses i Snowflake og BigQuery',
      'Implementeret ML-modeller til kundesegmentering og churn prediction',
      'Leveret Power BI og Looker dashboards til C-niveau beslutningstagere',
    ],
  },
  {
    title: 'Senior Data Engineer',
    company: 'TechCorp A/S',
    period: '2020 – 2022',
    description:
      'Ansvarlig for design og implementering af datainfrastruktur til virksomhedens kernesystemer. Led en lille dataingeniørteam på 3 personer.',
    highlights: [
      'Migreret legacy ETL-pipelines til moderne ELT med dbt og Airflow',
      'Reduceret dataforsinkelse fra 24 timer til under 15 minutter',
      'Etableret DataOps-kultur med CI/CD for datapipelines',
    ],
  },
  {
    title: 'Data Analyst',
    company: 'Analyse & Indsigt ApS',
    period: '2018 – 2020',
    description:
      'Udarbejdede analytiske rapporter og dashboards til klienter inden for detailhandel og e-commerce. Tæt samarbejde med forretningssiden.',
    highlights: [
      'Bygget interaktive Power BI dashboards for 10+ kunder',
      'Udført avancerede segmenteringsanalyser i Python og R',
      'Automatiseret ugentlige rapporteringsprocesser med Python',
    ],
  },
]

export default function OmMig() {
  return (
    <>
      <Hero
        title="Mathias Nielsen"
        subtitle="Freelance Data Konsulent med passion for at hjælpe virksomheder med at udnytte deres data fuldt ud — fra infrastruktur til indsigt."
        cta1={{ label: 'Tag kontakt', href: '/kontakt' }}
        cta2={{ label: 'Se mine ydelser', href: '/services' }}
      />

      {/* Bio Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6 sticky top-24">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-800 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold mb-5">
                  MN
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Mathias Nielsen
                </h2>
                <p className="text-sm text-slate-500 mt-1">Data Konsulent</p>

                <div className="mt-4 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin size={14} className="text-blue-800" />
                    København, Danmark
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <GraduationCap size={14} className="text-blue-800" />
                    MSc. Computer Science
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Briefcase size={14} className="text-blue-800" />
                    5+ års erhvervserfaring
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">
                    Tilgængelighed
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-medium text-slate-700">
                      Åben for nye projekter
                    </span>
                  </div>
                </div>

                <Link href="/kontakt" className="btn-primary w-full justify-center mt-6">
                  Kontakt mig
                </Link>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 mb-4">
                  Baggrund
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Passion for data og teknologi
                </h2>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                  <p>
                    Jeg er en erfaren freelance data-konsulent baseret i
                    København med over 5 års erfaring i at hjælpe virksomheder
                    med at opbygge solide datafundamenter og omsætte komplekse
                    datasæt til klare, handlingsbare indsigter.
                  </p>
                  <p>
                    Min baggrund kombinerer en solid teknisk forståelse for
                    datainfrastruktur og engineering med evnen til at
                    kommunikere resultater til ikke-tekniske interessenter. Jeg
                    trives med opgaver, der spænder fra lavniveau pipeline-design
                    til high-level strategisk rådgivning om datastrategi.
                  </p>
                  <p>
                    Jeg har arbejdet med virksomheder i alle størrelser — fra
                    ambitiøse startups der bygger deres første dataplatform til
                    større etablerede virksomheder der ønsker at modernisere
                    deres datainfrastruktur. Fælles for alle projekter er mit
                    fokus på at levere løsninger der faktisk virker i
                    produktionsmiljøer og skaber reel forretningsværdi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 mb-4">
              Kompetencer
            </span>
            <h2 className="section-heading">Teknisk ekspertise</h2>
            <p className="section-subheading">
              Et bredt teknologisk repertoire med dybde inden for de mest
              efterspurgte dataplatforme og -teknologier.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, techs]) => (
              <div
                key={category}
                className="rounded-xl bg-white border border-slate-100 p-6 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-lg bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
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

      {/* Experience Timeline */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 mb-4">
              Erfaring
            </span>
            <h2 className="section-heading">Karriereforløb</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />

            <div className="flex flex-col gap-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative flex gap-6 sm:gap-8">
                  {/* Dot */}
                  <div className="hidden sm:flex shrink-0 items-center justify-center h-12 w-12 rounded-full bg-blue-800 text-white font-bold text-sm z-10">
                    {exp.period.split('–')[0].trim().slice(-2)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl bg-slate-50 border border-slate-100 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-blue-800 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-full px-3 py-1">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-cyan-500 font-bold shrink-0">›</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Lad os samarbejde
          </h2>
          <p className="mt-3 text-blue-200 max-w-lg mx-auto">
            Har du et dataprojekt du ønsker hjælp til? Kontakt mig for en
            uforpligtende samtale.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white hover:bg-cyan-400 transition-colors"
          >
            Kontakt mig
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
