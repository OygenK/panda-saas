'use client'

import { Check } from 'lucide-react'
import { useI18n } from '@/src/i18n/context'

const statuses = ['done', 'done', 'running', 'queued'] as const

export function ComputeShowcase() {
  const { t } = useI18n()
  const pipeline = t.pipelines.stages.map((s, i) => ({ ...s, status: statuses[i] }))

  return (
    <section id="pipelines" className="border-b border-border/60 bg-secondary/20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-primary">
            {t.pipelines.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.pipelines.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.pipelines.subtitle}
          </p>
          <ul className="mt-8 space-y-3">
            {t.pipelines.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3" />
                </span>
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pipeline visual */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <span className="font-mono text-xs text-muted-foreground">{t.pipelines.caption}</span>
            <span className="flex items-center gap-1.5 font-mono text-xs text-success">
              <span className="size-1.5 animate-pulse rounded-full bg-success" />
              {t.pipelines.running}
            </span>
          </div>
          <div className="mt-4 space-y-2">
            {pipeline.map((step, i) => (
              <div key={step.stage} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span
                    className={`flex size-7 items-center justify-center rounded-md border text-xs ${
                      step.status === 'done'
                        ? 'border-success/40 bg-success/15 text-success'
                        : step.status === 'running'
                          ? 'border-primary/50 bg-primary/15 text-primary'
                          : 'border-border bg-secondary/40 text-muted-foreground'
                    }`}
                  >
                    {step.status === 'done' ? <Check className="size-3.5" /> : i + 1}
                  </span>
                  {i < pipeline.length - 1 && (
                    <span className="my-0.5 h-4 w-px bg-border" />
                  )}
                </div>
                <div className="flex flex-1 items-center justify-between rounded-lg border border-border/60 bg-secondary/30 px-3 py-2">
                  <span className="text-sm font-medium">{step.stage}</span>
                  <span className="font-mono text-xs text-muted-foreground">{step.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
