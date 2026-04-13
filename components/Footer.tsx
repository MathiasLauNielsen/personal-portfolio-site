import Link from 'next/link'
import { Database, Mail, Linkedin, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Forside', href: '/' },
  { label: 'Om mig', href: '/om-mig' },
  { label: 'Ydelser', href: '/services' },
  { label: 'Cases', href: '/cases' },
  { label: 'Kontakt', href: '/kontakt' },
]

const serviceLinks = [
  { label: 'Data Engineering', href: '/services#data-engineering' },
  { label: 'Data Science', href: '/services#data-science' },
  { label: 'Analytics & BI', href: '/services#analytics-bi' },
  { label: 'AI & Machine Learning', href: '/services#ai-ml' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500 text-white">
                <Database size={18} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-white tracking-tight">
                  Mathias Nielsen
                </span>
                <span className="text-xs text-blue-300 font-medium">
                  Data Konsulent
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Freelance data-konsulent med speciale i at hjælpe virksomheder med at
              omsætte data til værdiskabende indsigter og beslutninger.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Ydelser
            </h3>
            <ul className="flex flex-col gap-2 mb-6">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Kontakt
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:mathias@example.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-cyan-500" />
                mathias@example.com
              </a>
              <a
                href="https://linkedin.com/in/mathiasnielsen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={14} className="text-cyan-500" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-blue-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Mathias Nielsen. Alle rettigheder forbeholdes.
          </p>
          <p className="text-xs text-slate-500">
            Bygget med Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
