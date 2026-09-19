import { Linkedin, MapPin } from 'lucide-react'
import { getCopy, site, type Locale } from '@/content'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

export default function AboutPage({ locale }: { locale: Locale }) {
  const t = getCopy(locale).about

  return (
    <>
      <PageHero {...t.hero} />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            {/* Swap this monogram for a portrait: <Image src="/images/mathias.jpg" … /> */}
            <div className="flex aspect-[4/5] w-full max-w-sm items-end rounded-3xl bg-ink p-8 text-paper">
              <div>
                <p className="display text-7xl text-lime">MLN</p>
                <p className="mt-4 font-medium">{site.person}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-dark">
                  <MapPin size={14} aria-hidden /> {site.location[locale]}
                </p>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-dark hover:text-lime"
                >
                  <Linkedin size={14} aria-hidden /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
          <div className="flex flex-col gap-6">
            {t.story.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className={i === 0 ? 'text-2xl leading-relaxed' : 'text-lg leading-relaxed text-muted'}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-paper-line bg-paper-card py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <h2 className="display text-5xl sm:text-6xl">{t.principlesTitle}</h2>
          </Reveal>
          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-3">
            {t.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="border-t border-ink pt-5">
                  <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <h2 className="display text-5xl sm:text-6xl">{t.timelineTitle}</h2>
          </Reveal>
          <ol className="flex flex-col">
            {t.timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 40}>
                <li className="grid gap-1 border-t border-paper-line py-5 sm:grid-cols-[14rem_1fr]">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="leading-relaxed text-muted">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  )
}
