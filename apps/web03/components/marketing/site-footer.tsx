'use client'

import Link from 'next/link'
import { Logo } from '@/components/logo'
import { useI18n } from '@/src/i18n/context'

export function SiteFooter() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="size-6 text-primary" />
              <span className="text-[0.95rem] font-semibold tracking-tight">Substrate</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          {t.footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="/#"
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="/#" className="transition-colors hover:text-foreground">{t.footer.privacy}</a>
            <a href="/#" className="transition-colors hover:text-foreground">{t.footer.terms}</a>
            <a href="/#" className="transition-colors hover:text-foreground">{t.footer.soc2}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
