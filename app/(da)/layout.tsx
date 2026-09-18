import type { Metadata } from 'next'
import '../globals.css'
import { fontVariables } from '../fonts'
import SiteShell from '@/components/SiteShell'
import { getCopy, site } from '@/content'

const t = getCopy('da').home.meta

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: t.title, template: `%s | ${site.person}` },
  description: t.description,
  authors: [{ name: site.person }],
  openGraph: { type: 'website', locale: 'da_DK', siteName: site.company, title: t.title, description: t.description },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={fontVariables}>
      <body className="flex min-h-screen flex-col font-sans"><SiteShell locale="da">{children}</SiteShell></body>
    </html>
  )
}
