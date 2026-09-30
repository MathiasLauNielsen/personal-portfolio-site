'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { track } from '@vercel/analytics'
import { AlertCircle, CheckCircle, Send } from 'lucide-react'
import clsx from 'clsx'
import { getCopy, routes, type Locale } from '@/content'

const empty = { navn: '', email: '', virksomhed: '', besked: '', website: '' }

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

// Short on purpose: every extra field costs enquiries. The topic can be preset by the page
// or by a ?topic= link, and is stored as a prefix on the message.
export default function ContactForm({ locale, defaultTopic }: { locale: Locale; defaultTopic?: string }) {
  const t = getCopy(locale).contact.form
  const [values, setValues] = useState(empty)
  const [topic, setTopic] = useState(defaultTopic ?? '')
  const [state, setState] = useState<SubmitState>('idle')

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('topic')
    if (fromUrl && t.topics.some((x) => x.value === fromUrl)) setTopic(fromUrl)
  }, [t.topics])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('loading')
    const topicLabel = t.topics.find((x) => x.value === topic)?.label
    try {
      const response = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          besked: topicLabel ? `[${topicLabel}] ${values.besked}` : values.besked,
        }),
      })
      if (!response.ok) throw new Error()
      track('enquiry_sent', { topic: topic || 'none', locale })
      setState('success')
      setValues(empty)
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-start py-6" role="status">
        <CheckCircle size={40} className="text-accent" aria-hidden />
        <h3 className="display mt-5 text-3xl">{t.successTitle}</h3>
        <p className="mt-3 text-lg text-muted">{t.successBody}</p>
        <button type="button" onClick={() => setState('idle')} className="link-underline mt-6 text-sm font-semibold">
          {t.again}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <fieldset>
        <legend className="form-label">{t.topicLabel}</legend>
        <div className="flex flex-wrap gap-2">
          {t.topics.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={topic === option.value}
              onClick={() => setTopic(topic === option.value ? '' : option.value)}
              className={clsx(
                'rounded-lg border px-3 py-1.5 text-sm transition-colors',
                topic === option.value
                  ? 'border-accent bg-accent text-white'
                  : 'border-paper-line bg-paper-card text-ink hover:border-ink'
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="besked" className="form-label">{t.message}</label>
        <textarea
          id="besked"
          name="besked"
          required
          rows={4}
          placeholder={t.placeholder}
          value={values.besked}
          onChange={onChange}
          className="form-input resize-y"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="navn" className="form-label">{t.name}</label>
          <input id="navn" name="navn" required autoComplete="name" value={values.navn} onChange={onChange} className="form-input" />
        </div>
        <div>
          <label htmlFor="email" className="form-label">{t.email}</label>
          <input id="email" name="email" type="email" required autoComplete="email" value={values.email} onChange={onChange} className="form-input" />
        </div>
      </div>

      <div>
        <label htmlFor="virksomhed" className="form-label">
          {t.company} <span className="font-normal text-muted">({t.optional})</span>
        </label>
        <input id="virksomhed" name="virksomhed" autoComplete="organization" value={values.virksomhed} onChange={onChange} className="form-input" />
      </div>

      <input
        type="text"
        name="website"
        value={values.website}
        onChange={onChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      {state === 'error' && (
        <p role="alert" className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden />
          {t.error}
        </p>
      )}

      <div className="flex flex-col gap-3">
        <button type="submit" disabled={state === 'loading'} className="btn-accent w-full !py-3.5 disabled:opacity-60">
          {state === 'loading' ? t.sending : t.submit}
          <Send size={15} aria-hidden />
        </button>
        <p className="text-xs leading-relaxed text-muted">
          {t.consent}{' '}
          <Link href={routes[locale].privacy} className="link-underline">{t.privacy}</Link>
        </p>
      </div>
    </form>
  )
}
