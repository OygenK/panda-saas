'use client'

import { useI18n } from '@/src/i18n/context'
import { cn } from '@/lib/utils'

const STATUS_STYLES: Record<string, string> = {
  healthy: 'bg-success/10 text-success',
  idle: 'bg-muted text-muted-foreground',
  degraded: 'bg-destructive/15 text-destructive',
}

const DOT_STYLES: Record<string, string> = {
  healthy: 'bg-success',
  idle: 'bg-muted-foreground',
  degraded: 'bg-destructive',
}

export function ClustersTable() {
  const { t } = useI18n()
  const c = t.dashboard.clusters
  const labels = t.dashboard.statusLabels

  return (
    <section className="rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h2 className="text-sm font-semibold">{c.title}</h2>
        <button
          type="button"
          className="text-xs font-medium text-primary hover:underline"
        >
          {c.viewAll}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th className="px-5 py-2.5 font-medium">{c.headers.name}</th>
              <th className="px-5 py-2.5 font-medium">{c.headers.region}</th>
              <th className="px-5 py-2.5 font-medium">{c.headers.gpus}</th>
              <th className="px-5 py-2.5 font-medium">{c.headers.util}</th>
              <th className="px-5 py-2.5 font-medium">{c.headers.status}</th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map((row) => (
              <tr
                key={row.name}
                className="border-b border-border/60 last:border-0 hover:bg-muted/40"
              >
                <td className="px-5 py-3 font-mono text-[0.8rem] font-medium">
                  {row.name}
                </td>
                <td className="px-5 py-3 text-muted-foreground">{row.region}</td>
                <td className="px-5 py-3 font-mono text-[0.8rem]">{row.gpus}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${row.util}%` }}
                      />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {row.util}%
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium',
                      STATUS_STYLES[row.status],
                    )}
                  >
                    <span
                      className={cn('size-1.5 rounded-full', DOT_STYLES[row.status])}
                      aria-hidden="true"
                    />
                    {labels[row.status as keyof typeof labels]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
