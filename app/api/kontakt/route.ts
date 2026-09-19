import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import type { KontaktHenvendelse } from '@/types'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<KontaktHenvendelse>

    const { navn, email, besked, virksomhed, telefon } = body

    // Spam trap: the hidden "website" field is only ever filled in by bots. Pretend it worked.
    if ((body as { website?: string }).website) {
      return NextResponse.json({ success: true }, { status: 201 })
    }

    if (!navn?.trim() || !email?.trim() || !besked?.trim()) {
      return NextResponse.json(
        { error: 'Navn, e-mail og besked er påkrævet.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ugyldig e-mailadresse.' },
        { status: 400 }
      )
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase environment variables are not set')
      return NextResponse.json(
        { error: 'Server-konfigurationsfejl. Prøv igen senere.' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { error } = await supabase.from('kontakt_henvendelser').insert({
      navn: navn.trim(),
      email: email.trim().toLowerCase(),
      besked: besked.trim(),
      virksomhed: virksomhed?.trim() || null,
      telefon: telefon?.trim() || null,
      laest: false,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Kunne ikke gemme henvendelsen. Prøv igen.' },
        { status: 500 }
      )
    }

    await notifyByEmail({
      navn: navn.trim(),
      email: email.trim().toLowerCase(),
      virksomhed: virksomhed?.trim(),
      besked: besked.trim(),
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Unexpected error in /api/kontakt:', err)
    return NextResponse.json(
      { error: 'Der opstod en uventet fejl. Prøv igen.' },
      { status: 500 }
    )
  }
}

// Emails each new enquiry to Mathias through Resend, so a lead is never left unseen in the database.
// Inactive until RESEND_API_KEY is set; a failure here never fails the enquiry itself.
async function notifyByEmail(lead: { navn: string; email: string; virksomhed?: string; besked: string }) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.LEAD_EMAIL_FROM ?? 'Website <onboarding@resend.dev>',
        to: process.env.LEAD_EMAIL_TO ?? 'mathias@mlnanalytics.com',
        reply_to: lead.email,
        subject: `New enquiry from ${lead.navn}${lead.virksomhed ? ` (${lead.virksomhed})` : ''}`,
        text: `${lead.besked}\n\n${lead.navn}\n${lead.email}${lead.virksomhed ? `\n${lead.virksomhed}` : ''}`,
      }),
    })
    if (!response.ok) console.error('Lead email failed:', response.status, await response.text())
  } catch (err) {
    console.error('Lead email failed:', err)
  }
}
