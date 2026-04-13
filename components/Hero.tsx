import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { HeroProps } from '@/types'
import clsx from 'clsx'

export default function Hero({
  title,
  subtitle,
  cta1,
  cta2,
  centered = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 sm:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-cyan-500 opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-blue-400 opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-600 opacity-20 blur-3xl" />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={clsx(
            'max-w-3xl',
            centered ? 'mx-auto text-center' : ''
          )}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-blue-100 leading-relaxed sm:text-xl">
            {subtitle}
          </p>

          {(cta1 || cta2) && (
            <div
              className={clsx(
                'mt-8 flex flex-wrap gap-4',
                centered ? 'justify-center' : ''
              )}
            >
              {cta1 && (
                <Link
                  href={cta1.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-cyan-400 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-blue-800"
                >
                  {cta1.label}
                  <ArrowRight size={16} />
                </Link>
              )}
              {cta2 && (
                <Link
                  href={cta2.href}
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                >
                  {cta2.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
