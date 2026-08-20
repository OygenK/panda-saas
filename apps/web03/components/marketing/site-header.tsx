'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { useI18n } from '@/src/i18n/context'

export function SiteHeader() {
  const { t } = useI18n()
  const pathname = usePathname()
  const router = useRouter()

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // On the home route the pathname is already "/", so a plain <Link href="/">
    // only mutates the hash and leaves the scroll position stuck at the section
    // (e.g. #product). Reset it explicitly and clear the hash from the URL.
    if (pathname === '/') {
      e.preventDefault()
      window.history.replaceState(null, '', '/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  const navLinks = [
    { label: t.nav.product, href: '/#product' },
    { label: t.nav.compute, href: '/#product' },
    { label: t.nav.pipelines, href: '/#pipelines' },
    { label: t.nav.pricing, href: '/#pricing' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5">
          <Logo className="size-6 text-primary" />
          <span className="text-[0.95rem] font-semibold tracking-tight">Substrate</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <ThemeToggle className="mr-1" />
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={<Link href="/login">{t.nav.signIn}</Link>}
          />
          <Button
            size="sm"
            nativeButton={false}
            render={<Link href="/signup">{t.nav.startFree}</Link>}
          />
        </div>
      </div>
    </header>
  )
}
