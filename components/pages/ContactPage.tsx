import { Linkedin, Mail, Phone } from 'lucide-react'
import { getCopy, site, type Locale } from '@/content'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = getCopy(locale).contact

  const direct = [
    { icon: Mail, label: site.email, href: `mailto:${site.email}`, external: false },
    { icon: Phone, label: site.phone, href: site.phoneHref, external: false },
    { icon: Linkedin, label: 'LinkedIn', href: site.linkedin, external: true },
  ]

  return (
    <>
      <PageHero {...t.hero} />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-paper-line bg-paper-card p-7 sm:p-10">
            <ContactForm locale={locale} />
          </div>

          <aside className="flex flex-col gap-10">
            <div>
              <h2 className="eyebrow text-muted">{t.expectTitle}</h2>
              <ol className="mt-5 flex flex-col">
                {t.expect.map((step, i) => (
                  <li key={step} className="grid grid-cols-[2.5rem_1fr] border-t border-paper-line py-4 leading-relaxed">
                    <span className="font-mono text-sm text-muted">0{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="eyebrow text-muted">{t.direct}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {direct.map(({ icon: Icon, label, href, external }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="group inline-flex items-center gap-3 text-lg font-medium"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper transition-colors group-hover:bg-lime group-hover:text-ink">
                        <Icon size={16} aria-hidden />
                      </span>
                      <span className="link-underline">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">
                {site.company} · CVR {site.cvr}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
