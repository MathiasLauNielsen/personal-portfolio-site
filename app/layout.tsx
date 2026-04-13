import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Mathias Nielsen | Data Konsulent',
    template: '%s | Mathias Nielsen',
  },
  description:
    'Freelance data-konsulent med speciale i Data Engineering, Data Science, Analytics & BI og AI/ML. Hjælper virksomheder med at omsætte data til værdiskabende beslutninger.',
  keywords: [
    'data konsulent',
    'data engineering',
    'data science',
    'analytics',
    'business intelligence',
    'AI',
    'machine learning',
    'freelance',
    'Danmark',
  ],
  authors: [{ name: 'Mathias Nielsen' }],
  creator: 'Mathias Nielsen',
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    siteName: 'Mathias Nielsen | Data Konsulent',
    title: 'Mathias Nielsen | Data Konsulent',
    description:
      'Freelance data-konsulent med speciale i Data Engineering, Data Science, Analytics & BI og AI/ML.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
