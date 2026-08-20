'use client'

import Link from 'next/link'
import { ArrowRight, Cpu, Terminal, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/src/i18n/context'

export function Hero() {
  const { t } = useI18n()

  const consoleLines = [
    { prompt: '$', text: 'substrate deploy --model llama-3-70b --gpu a100:4', tone: 'cmd' as const },
    { prompt: '→', text: t.hero.console[0], tone: 'muted' as const },
    { check: true, text: t.hero.console[1], tone: 'success' as const },
    { prompt: '→', text: t.hero.console[2], tone: 'muted' as const },
    { check: true, text: t.hero.console[3], tone: 'success' as const },
  ]

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.5]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-success" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.titleLead}
            <span className="text-primary">{t.hero.titleAccent}</span>
            {t.hero.titleTail}
          </h1>

          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" nativeButton={false} render={<Link href="/signup" />}>
              {t.hero.ctaPrimary}
              <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/dashboard" />}>
              <Terminal />
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-6">
            {t.hero.stats.map((s) => (
              <div key={s.l}>
                <dt className="font-mono text-xl font-semibold text-foreground">{s.v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Console visual */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-border/60 bg-secondary/40 px-4 py-3">
              <Cpu className="size-4 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">{t.hero.consoleTitle}</span>
              <span className="ml-auto flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                <span className="size-2.5 rounded-full bg-success/70" />
              </span>
            </div>
            <div className="space-y-2 p-5 font-mono text-[0.8rem] leading-relaxed">
              {consoleLines.map((line, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  {line.check ? (
                    <Check className="size-3.5 shrink-0 translate-y-0.5 text-success" />
                  ) : (
                    <span className="text-primary">{line.prompt}</span>
                  )}
                  <span
                    className={
                      line.tone === 'success'
                        ? 'text-success'
                        : line.tone === 'muted'
                          ? 'text-muted-foreground'
                          : 'text-foreground'
                    }
                  >
                    {line.text}
                  </span>
                </div>
              ))}
              <div className="flex gap-2">
                <span className="text-primary">$</span>
                <span className="inline-block h-4 w-2 animate-pulse bg-primary/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
