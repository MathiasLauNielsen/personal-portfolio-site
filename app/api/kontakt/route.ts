import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import type { KontaktHenvendelse } from '@/types'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<KontaktHenvendelse>

    const { navn, email, besked, virksomhed, telefon } = body

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
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

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

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Unexpected error in /api/kontakt:', err)
    return NextResponse.json(
      { error: 'Der opstod en uventet fejl. Prøv igen.' },
      { status: 500 }
    )
  }
}
