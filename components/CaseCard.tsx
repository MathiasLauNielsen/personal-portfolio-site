import clsx from 'clsx'

interface CaseCardProps {
  industry: string
  title: string
  challenge: string
  solution: string
  result: string
  metric: string
  technologies?: string[]
  className?: string
}

const industryColors: Record<string, string> = {
  Retail: 'bg-violet-100 text-violet-700',
  Finans: 'bg-emerald-100 text-emerald-700',
  Logistik: 'bg-orange-100 text-orange-700',
  default: 'bg-blue-100 text-blue-700',
}

export default function CaseCard({
  industry,
  title,
  challenge,
  solution,
  result,
  metric,
  technologies = [],
  className,
}: CaseCardProps) {
  const badgeColor = industryColors[industry] ?? industryColors.default

  return (
    <div
      className={clsx(
        'card group flex flex-col hover:-translate-y-1',
        className
      )}
    >
      {/* Industry badge + metric */}
      <div className="flex items-start justify-between mb-4">
        <span
          className={clsx(
            'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
            badgeColor
          )}
        >
          {industry}
        </span>
        <div className="text-right">
          <span className="text-2xl font-bold text-cyan-500">{metric}</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>

      <div className="flex flex-col gap-3 flex-1">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
            Udfordring
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">{challenge}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
            Løsning
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">{solution}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
            Resultat
          </p>
          <p className="text-sm font-medium text-slate-700 leading-relaxed">
            {result}
          </p>
        </div>
      </div>

      {technologies.length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
