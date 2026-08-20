'use client'

import { useI18n } from '@/src/i18n/context'

// Deterministic 24-hour utilization series (percent). Fixed values keep SSR and
// client renders identical (no hydration mismatch) and mimic a daily curve.
const SERIES = [
  38, 34, 30, 28, 26, 31, 42, 55, 63, 71, 78, 82, 85, 88, 84, 79, 83, 90, 94,
  87, 72, 61, 52, 45,
]

export function UtilizationChart() {
  const { t } = useI18n()
  const u = t.dashboard.utilization
  const peak = Math.max(...SERIES)
  const current = SERIES[SERIES.length - 1]

  return (
    <section className="rounded-xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold">{u.title}</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">{u.subtitle}</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span className="size-2 rounded-sm bg-primary" aria-hidden="true" />
            {u.legendUsed}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span className="size-2 rounded-sm bg-primary/25" aria-hidden="true" />
            {u.legendPeak} {peak}%
          </span>
        </div>
      </div>

      <div
        className="mt-6 flex h-40 items-end gap-1"
        role="img"
        aria-label={`${u.title}: ${current}% ${u.current}, ${u.legendPeak} ${peak}%`}
      >
        {SERIES.map((value, i) => {
          const isCurrent = i === SERIES.length - 1
          return (
            <div
              key={i}
              className={
                isCurrent
                  ? 'flex-1 rounded-t-sm bg-primary'
                  : 'flex-1 rounded-t-sm bg-primary/55 transition-colors hover:bg-primary'
              }
              style={{ height: `${value}%` }}
              aria-hidden="true"
            />
          )
        })}
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-mono">-24h</span>
        <span className="font-mono text-foreground">
          {current}% <span className="text-muted-foreground">{u.current}</span>
        </span>
        <span className="font-mono">0h</span>
      </div>
    </section>
  )
}
