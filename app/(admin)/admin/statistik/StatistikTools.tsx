'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Copy } from 'lucide-react'
import clsx from 'clsx'
import { supabase } from '@/lib/supabase'
import { isOwnDevice, setOwnDevice } from '@/lib/besoeg'

// Marks every row of one visitor key as Mathias's own, or removes the mark. The key changes daily,
// so this covers one visit day (and any other visit that day from the same browser and network).
export function MarkOwnButton({ besoegende, eget }: { besoegende: string; eget: boolean }) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)

  const toggle = async () => {
    setBusy(true)
    const { error } = await supabase.from('site_besoeg').update({ eget: !eget }).eq('besoegende', besoegende)
    setBusy(false)
    if (!error) router.refresh()
  }

  return (
    <button
      onClick={toggle}
      disabled={busy}
      className="shrink-0 rounded-md px-2.5 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800 disabled:opacity-50"
    >
      {eget ? 'Ikke mig' : 'Det er mig'}
    </button>
  )
}

// Whether this browser's visits to the site are marked as Mathias's own. Set automatically when the admin is opened.
export function OwnDeviceToggle() {
  const [own, setOwn] = useState<boolean | null>(null)
  useEffect(() => setOwn(isOwnDevice()), [])
  if (own === null) return null

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-slate-600">
        {own ? 'Denne browser er markeret som din: dine besøg herfra skjules i statistikken.' : 'Denne browser tælles som en almindelig besøgende.'}
      </p>
      <button
        onClick={() => {
          setOwnDevice(!own)
          setOwn(!own)
        }}
        className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200"
      >
        {own ? 'Tæl mig med herfra' : 'Markér som min'}
      </button>
    </div>
  )
}

// Builds a link with a ?via= label, for links Mathias sends to a person, a broker or a post.
// The label is shown under "Delte links" and on each visit; the site removes it from the address bar on arrival.
export function LinkBuilder({ base, pages }: { base: string; pages: { label: string; path: string }[] }) {
  const [path, setPath] = useState(pages[0]?.path ?? '/')
  const [label, setLabel] = useState('')
  const [copied, setCopied] = useState(false)
  const slug = label.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9æøå_-]/g, '').slice(0, 60)
  const link = `${base}${path === '/' ? '' : path}${slug ? `?via=${slug}` : ''}`

  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-[1fr_1fr]">
        <label className="flex flex-col gap-1 text-xs font-medium text-slate-500">
          Side
          <select value={path} onChange={(e) => setPath(e.target.value)} className="rounded-md border border-slate-200 px-2.5 py-2 text-sm text-slate-800">
            {pages.map((p) => (
              <option key={p.path} value={p.path}>
                {p.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-slate-500">
          Mærkat (fx 7n, linkedin-okt, firmanavn)
          <input value={label} onChange={(e) => setLabel(e.target.value)} className="rounded-md border border-slate-200 px-2.5 py-2 text-sm text-slate-800" />
        </label>
      </div>
      <div className="flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2">
        <code className="flex-1 truncate text-sm text-slate-700">{link}</code>
        <button
          onClick={async () => {
            await navigator.clipboard.writeText(link)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
          }}
          disabled={!slug}
          className={clsx('inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium', slug ? 'text-blue-800 hover:bg-blue-50' : 'text-slate-300')}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Kopieret' : 'Kopiér'}
        </button>
      </div>
    </div>
  )
}
