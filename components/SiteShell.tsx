import Header from './Header'
import Footer from './Footer'
import CookieConsent from './CookieConsent'
import type { Locale } from '@/content'

export default function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
      <CookieConsent />
    </>
  )
}
