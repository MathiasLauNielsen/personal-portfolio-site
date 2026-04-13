'use client'

import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import clsx from 'clsx'

interface FormData {
  navn: string
  email: string
  virksomhed: string
  telefon: string
  besked: string
}

const initialFormData: FormData = {
  navn: '',
  email: '',
  virksomhed: '',
  telefon: '',
  besked: '',
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitState('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error ?? 'Der opstod en fejl. Prøv igen.')
      }

      setSubmitState('success')
      setFormData(initialFormData)
    } catch (err) {
      setSubmitState('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Der opstod en uventet fejl. Prøv igen.'
      )
    }
  }

  if (submitState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-12 text-center">
        <CheckCircle size={48} className="text-emerald-500" />
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Tak for din henvendelse!
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Jeg vender tilbage til dig hurtigst muligt — typisk inden for 1-2
            hverdage.
          </p>
        </div>
        <button
          onClick={() => setSubmitState('idle')}
          className="text-sm font-medium text-blue-800 hover:underline"
        >
          Send en ny besked
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Navn + Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="navn" className="form-label">
            Navn <span className="text-red-500">*</span>
          </label>
          <input
            id="navn"
            name="navn"
            type="text"
            required
            autoComplete="name"
            placeholder="Dit navn"
            value={formData.navn}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="din@email.dk"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>

      {/* Virksomhed + Telefon */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="virksomhed" className="form-label">
            Virksomhed
          </label>
          <input
            id="virksomhed"
            name="virksomhed"
            type="text"
            autoComplete="organization"
            placeholder="Virksomhedens navn (valgfrit)"
            value={formData.virksomhed}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="form-label">
            Telefon
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            placeholder="+45 00 00 00 00 (valgfrit)"
            value={formData.telefon}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>

      {/* Besked */}
      <div>
        <label htmlFor="besked" className="form-label">
          Besked <span className="text-red-500">*</span>
        </label>
        <textarea
          id="besked"
          name="besked"
          required
          rows={5}
          placeholder="Beskriv dit projekt eller spørgsmål..."
          value={formData.besked}
          onChange={handleChange}
          className={clsx('form-input resize-y min-h-[120px]')}
        />
      </div>

      {/* Error message */}
      {submitState === 'error' && (
        <div className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle
            size={18}
            className="text-red-500 shrink-0 mt-0.5"
          />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitState === 'loading'}
        className={clsx(
          'btn-primary justify-center',
          submitState === 'loading' && 'opacity-70 cursor-not-allowed'
        )}
      >
        {submitState === 'loading' ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Sender...
          </>
        ) : (
          <>
            <Send size={16} />
            Send besked
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Felter markeret med * er obligatoriske. Dine oplysninger behandles
        fortroligt.
      </p>
    </form>
  )
}
