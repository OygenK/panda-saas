'use client'

import Link from 'next/link'
import { Activity, GitBranch, ShieldCheck } from 'lucide-react'
import { Logo } from '@/components/logo'
import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { useI18n } from '@/src/i18n/context'

const panelIcons = [Activity, GitBranch, ShieldCheck]

export function AuthShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode
  title: string
  subtitle: string
}) {
  const { t } = useI18n()

  return (
    <main className="flex min-h-screen bg-background">
      {/* Form side */}
      <div className="flex w-full flex-col px-6 py-8 lg:w-1/2 lg:px-16">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex w-fit items-center gap-2">
            <Logo className="size-6 text-primary" />
            <span className="text-sm font-semibold tracking-tight">Substrate</span>
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm py-12">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold tracking-tight text-balance">{title}</h1>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>

      {/* Brand panel */}
      <aside className="relative hidden w-1/2 overflow-hidden border-l border-border bg-card lg:block">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(120% 80% at 80% 0%, color-mix(in oklch, var(--primary) 22%, transparent), transparent 60%)',
          }}
        />
        <div className="relative flex h-full flex-col justify-between p-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-success" />
            {t.auth.badge}
          </div>
          <div>
            <p className="max-w-md text-2xl font-medium leading-relaxed text-balance">
              {t.auth.headline}
            </p>
            <ul className="mt-10 space-y-6">
              {t.auth.points.map((p, i) => {
                const Icon = panelIcons[i]
                if (!Icon) return null
                return (
                  <li key={p.title} className="flex gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background/60">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{p.title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground text-pretty">{p.desc}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            {t.auth.footnote}
          </p>
        </div>
      </aside>
    </main>
  )
}
