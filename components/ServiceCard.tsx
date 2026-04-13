import { type LucideIcon } from 'lucide-react'
import clsx from 'clsx'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  accentColor?: string
  className?: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  accentColor = 'bg-blue-50 text-blue-800',
  className,
}: ServiceCardProps) {
  return (
    <div
      className={clsx(
        'card group cursor-default hover:-translate-y-1',
        className
      )}
    >
      <div
        className={clsx(
          'mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors',
          accentColor
        )}
      >
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}
