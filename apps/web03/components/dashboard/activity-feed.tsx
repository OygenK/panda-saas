'use client'

import { Rocket, Cpu, CircleCheck, TriangleAlert, KeyRound } from 'lucide-react'
import { useI18n } from '@/src/i18n/context'
import { cn } from '@/lib/utils'

const ICONS = {
  deploy: { icon: Rocket, tone: 'text-primary bg-primary/10' },
  scale: { icon: Cpu, tone: 'text-foreground bg-muted' },
  pass: { icon: CircleCheck, tone: 'text-success bg-success/10' },
  warn: { icon: TriangleAlert, tone: 'text-destructive bg-destructive/10' },
  token: { icon: KeyRound, tone: 'text-foreground bg-muted' },
} as const

export function ActivityFeed() {
  const { t } = useI18n()
  const a = t.dashboard.activity

  return (
    <section className="rounded-xl border border-border bg-card">
      <div className="border-b border-border px-5 py-4">
        <h2 className="text-sm font-semibold">{a.title}</h2>
      </div>
      <ul className="p-2">
        {a.items.map((item, i) => {
          const meta = ICONS[item.kind as keyof typeof ICONS] ?? ICONS.scale
          const Icon = meta.icon
          return (
            <li
              key={i}
              className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-muted/40"
            >
              <span
                className={cn(
                  'mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full',
                  meta.tone,
                )}
              >
                <Icon className="size-3.5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm leading-snug text-pretty">{item.text}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{item.time}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
