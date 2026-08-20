'use client'

import { useI18n } from '@/src/i18n/context'
import { cn } from '@/lib/utils'

export function PipelinesPanel() {
  const { t } = useI18n()
  const p = t.dashboard.pipelines

  return (
    <section className="rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h2 className="text-sm font-semibold">{p.title}</h2>
        <button
          type="button"
          className="text-xs font-medium text-primary hover:underline"
        >
          {p.viewAll}
        </button>
      </div>

      <ul className="divide-y divide-border/60">
        {p.rows.map((row) => {
          const done = row.progress >= 100
          return (
            <li key={row.name} className="px-5 py-3.5">
              <div className="flex items-center justify-between gap-3">
                <span className="truncate font-mono text-[0.8rem] font-medium">
                  {row.name}
                </span>
                <span className="shrink-0 rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  {row.stage}
                </span>
              </div>
              <div className="mt-2.5 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      'h-full rounded-full',
                      done ? 'bg-success' : 'bg-primary',
                    )}
                    style={{ width: `${row.progress}%` }}
                  />
                </div>
                <span className="w-20 shrink-0 text-right font-mono text-xs text-muted-foreground">
                  {p.eta} {row.eta}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
