'use client'

import { Boxes, GitBranch, Gauge, ShieldCheck, Server, Workflow } from 'lucide-react'
import { useI18n } from '@/src/i18n/context'

const icons = [Server, Workflow, GitBranch, Gauge, Boxes, ShieldCheck]

export function Features() {
  const { t } = useI18n()

  return (
    <section id="product" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">
            {t.features.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.features.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.features.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((f, i) => {
            const Icon = icons[i]
            if (!Icon) return null
            return (
              <div
                key={f.title}
                className="group bg-card p-6 transition-colors hover:bg-secondary/40"
              >
                <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-medium">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
