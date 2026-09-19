'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { AlertCircle, CheckCircle, Send } from 'lucide-react'
import { getCopy, routes, type Locale } from '@/content'

const empty = { navn: '', email: '', virksomhed: '', telefon: '', besked: '' }

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = getCopy(locale).contact.form
  const [values, setValues] = useState(empty)
  const [state, setState] = useState<SubmitState>('idle')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('loading')
    try {
      const response = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error()
      setState('success')
      setValues(empty)
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-start py-8" role="status">
        <CheckCircle size={40} className="text-accent" aria-hidden />
        <h2 className="display mt-5 text-4xl">{t.successTitle}</h2>
        <p className="mt-3 text-lg text-muted">{t.successBody}</p>
        <button type="button" onClick={() => setState('idle')} className="link-underline mt-6 text-sm font-semibold">
          {t.again}
        </button>
      </div>
    )
  }

  const optional = <span className="font-normal text-muted"> ({t.optional})</span>

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="navn" className="form-label">{t.name}</label>
          <input id="navn" name="navn" required autoComplete="name" value={values.navn} onChange={onChange} className="form-input" />
        </div>
        <div>
          <label htmlFor="email" className="form-label">{t.email}</label>
          <input id="email" name="email" type="email" required autoComplete="email" value={values.email} onChange={onChange} className="form-input" />
        </div>
        <div>
          <label htmlFor="virksomhed" className="form-label">{t.company}{optional}</label>
          <input id="virksomhed" name="virksomhed" autoComplete="organization" value={values.virksomhed} onChange={onChange} className="form-input" />
        </div>
        <div>
          <label htmlFor="telefon" className="form-label">{t.phone}{optional}</label>
          <input id="telefon" name="telefon" type="tel" autoComplete="tel" value={values.telefon} onChange={onChange} className="form-input" />
        </div>
      </div>

      <div>
        <label htmlFor="besked" className="form-label">{t.message}</label>
        <textarea
          id="besked"
          name="besked"
          required
          rows={6}
          placeholder={t.placeholder}
          value={values.besked}
          onChange={onChange}
          className="form-input resize-y"
        />
      </div>

      {state === 'error' && (
        <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden />
          {t.error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="submit" disabled={state === 'loading'} className="btn-ink disabled:opacity-60">
          {state === 'loading' ? t.sending : t.submit}
          <Send size={15} aria-hidden />
        </button>
        <p className="max-w-xs text-xs leading-relaxed text-muted">
          {t.consent}{' '}
          <Link href={routes[locale].privacy} className="link-underline">{t.privacy}</Link>
        </p>
      </div>
    </form>
  )
}
