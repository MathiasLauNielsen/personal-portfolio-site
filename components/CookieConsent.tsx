'use client'

import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Link from 'next/link'
import { X } from 'lucide-react'

type ConsentStatus = 'accepted' | 'rejected' | null

const CONSENT_KEY = 'cookie_consent'

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentStatus
    setConsent(stored)
    if (!stored) {
      // Short delay so page renders first
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setConsent('accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setConsent('rejected')
    setVisible(false)
  }

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-xl">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-700 leading-relaxed">
                Vi bruger anonymiserede analysedata til at forbedre vores hjemmeside. Ingen persondata videregives til tredjeparter.{' '}
                <Link href="/privatlivspolitik" className="text-blue-700 underline hover:text-blue-900">
                  Læs mere
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={reject}
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100"
              >
                Afvis
              </button>
              <button
                onClick={accept}
                className="text-sm font-semibold bg-blue-800 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Accepter
              </button>
              <button
                onClick={reject}
                aria-label="Luk"
                className="text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
