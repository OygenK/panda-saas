'use client'

import { Languages } from 'lucide-react'
import { useI18n } from '@/src/i18n/context'
import { LOCALES } from '@/src/i18n/translations'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n()

  return (
    <div
      className={cn(
        'inline-flex items-center gap-0.5 rounded-md border border-border bg-card/60 p-0.5',
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <Languages className="ml-1 size-3.5 text-muted-foreground" aria-hidden="true" />
      {LOCALES.map((l) => {
        const active = l.code === locale
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLocale(l.code)}
            aria-pressed={active}
            className={cn(
              'rounded px-2 py-1 font-mono text-xs font-medium transition-colors',
              active
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {l.short}
          </button>
        )
      })}
    </div>
  )
}
