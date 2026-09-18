'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Mail, MailOpen, Building2, Phone, ChevronDown, ChevronUp } from 'lucide-react'
import type { KontaktHenvendelse } from '@/types'

function formatDate(iso?: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('da-DK', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function HenvendelserClient({
  henvendelser: initial,
}: {
  henvendelser: KontaktHenvendelse[]
}) {
  const [henvendelser, setHenvendelser] = useState(initial)
  const [expanded, setExpanded] = useState<string | null>(null)
  const router = useRouter()

  const toggleLæst = async (id: string, laest: boolean) => {
    const { error } = await supabase
      .from('kontakt_henvendelser')
      .update({ laest: !laest })
      .eq('id', id)

    if (!error) {
      setHenvendelser((prev) =>
        prev.map((h) => (h.id === id ? { ...h, laest: !laest } : h))
      )
      router.refresh()
    }
  }

  if (henvendelser.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
        <Mail size={32} className="mx-auto text-slate-300 mb-3" />
        <p className="text-slate-500 text-sm">Ingen henvendelser endnu.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {henvendelser.map((h) => (
        <div
          key={h.id}
          className={`rounded-xl border bg-white transition-all ${
            h.laest ? 'border-slate-200' : 'border-blue-200 shadow-sm'
          }`}
        >
          {/* Header row */}
          <button
            className="w-full flex items-start gap-4 px-5 py-4 text-left"
            onClick={() => setExpanded(expanded === h.id ? null : (h.id ?? null))}
          >
            <div className="mt-0.5 shrink-0">
              {h.laest ? (
                <MailOpen size={18} className="text-slate-400" />
              ) : (
                <Mail size={18} className="text-blue-600" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-slate-900 text-sm">{h.navn}</span>
                {!h.laest && (
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                    Ny
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">{h.email}</div>
            </div>
            <div className="text-xs text-slate-400 shrink-0">
              {formatDate(h.oprettet_at)}
            </div>
            <div className="shrink-0 text-slate-400">
              {expanded === h.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>

          {/* Expanded details */}
          {expanded === h.id && (
            <div className="border-t border-slate-100 px-5 py-4">
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                {h.virksomhed && (
                  <div className="flex items-center gap-1.5 text-sm text-slate-600">
                    <Building2 size={14} className="text-slate-400" />
                    {h.virksomhed}
                  </div>
                )}
                {h.telefon && (
                  <div className="flex items-center gap-1.5 text-sm text-slate-600">
                    <Phone size={14} className="text-slate-400" />
                    {h.telefon}
                  </div>
                )}
              </div>
              <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                {h.besked}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <a
                  href={`mailto:${h.email}`}
                  className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Svar på {h.email}
                </a>
                <button
                  onClick={() => toggleLæst(h.id!, h.laest ?? false)}
                  className="text-xs text-slate-500 hover:text-slate-700 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-100"
                >
                  {h.laest ? 'Markér som ulæst' : 'Markér som læst'}
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
