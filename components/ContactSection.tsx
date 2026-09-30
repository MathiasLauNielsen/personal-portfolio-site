import { Check, Mail, Phone } from 'lucide-react'
import { getCopy, site, type Locale } from '@/content'
import ContactForm from './ContactForm'

// Closes every page: the pitch on the left, the enquiry form on the right.
export default function ContactSection({ locale, topic }: { locale: Locale; topic?: string }) {
  const t = getCopy(locale).home.contactSection

  return (
    <section id="contact" className="scroll-mt-16 bg-accent text-white">
      <div className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <h2 className="display text-4xl sm:text-5xl">{t.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/85">{t.body}</p>
          <ul className="mt-8 flex flex-col gap-3">
            {t.points.map((p) => (
              <li key={p} className="flex gap-3">
                <Check size={20} className="mt-0.5 shrink-0" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/25 pt-8 text-lg font-semibold">
            <a href={site.phoneHref} className="inline-flex items-center gap-3 hover:underline">
              <Phone size={18} aria-hidden /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 hover:underline">
              <Mail size={18} aria-hidden /> {site.email}
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-paper p-6 text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] sm:p-8">
          <ContactForm locale={locale} defaultTopic={topic} />
        </div>
      </div>
    </section>
  )
}
