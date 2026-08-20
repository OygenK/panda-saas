'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'
import { useI18n } from '@/src/i18n/context'
import { cn } from '@/lib/utils'

export function StatCards() {
  const { t } = useI18n()

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {t.dashboard.stats.map((stat) => {
        const negative = stat.delta.startsWith('-')
        return (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card p-5"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <div className="mt-3 flex items-end justify-between gap-2">
              <span className="font-mono text-3xl font-semibold tracking-tight">
                {stat.value}
              </span>
              <span
                className={cn(
                  'inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium',
                  negative
                    ? 'bg-success/10 text-success'
                    : 'bg-primary/10 text-primary',
                )}
              >
                {negative ? (
                  <TrendingDown className="size-3" aria-hidden="true" />
                ) : (
                  <TrendingUp className="size-3" aria-hidden="true" />
                )}
                {stat.delta}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
          </div>
        )
      })}
    </div>
  )
}
