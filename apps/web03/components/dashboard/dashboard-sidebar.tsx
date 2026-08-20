'use client'

import Link from 'next/link'
import {
  LayoutDashboard,
  Cpu,
  Workflow,
  Rocket,
  Activity,
  Settings,
} from 'lucide-react'
import { Logo } from '@/components/logo'
import { useI18n } from '@/src/i18n/context'
import { cn } from '@/lib/utils'

export function DashboardSidebar() {
  const { t } = useI18n()
  const nav = t.dashboard.nav

  const items = [
    { icon: LayoutDashboard, label: nav.overview, active: true },
    { icon: Cpu, label: nav.compute, active: false },
    { icon: Workflow, label: nav.pipelines, active: false },
    { icon: Rocket, label: nav.deployments, active: false },
    { icon: Activity, label: nav.observability, active: false },
    { icon: Settings, label: nav.settings, active: false },
  ]

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-card/40 lg:flex">
      <div className="flex h-16 items-center gap-2 border-b border-border px-5">
        <Link href="/" className="inline-flex items-center gap-2">
          <Logo className="size-6 text-primary" />
          <span className="text-sm font-semibold tracking-tight">Substrate</span>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Dashboard">
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            aria-current={item.active ? 'page' : undefined}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              item.active
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
          >
            <item.icon className="size-4 shrink-0" aria-hidden="true" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="border-t border-border p-3">
        <div className="flex items-center gap-3 rounded-lg px-2 py-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
            AM
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{t.dashboard.org}</p>
            <p className="truncate text-xs text-muted-foreground">{t.dashboard.plan}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
