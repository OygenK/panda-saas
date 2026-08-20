'use client'

import { Search, Plus, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { useI18n } from '@/src/i18n/context'

export function DashboardTopbar() {
  const { t } = useI18n()

  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur sm:px-6">
      <div className="relative flex-1 max-w-md">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder={t.dashboard.searchPlaceholder}
          aria-label={t.dashboard.searchPlaceholder}
          className="h-9 w-full rounded-lg border border-border bg-card/60 pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <LanguageSwitcher className="hidden sm:inline-flex" />
        <ThemeToggle />
        <Button variant="ghost" size="icon-sm" aria-label="Notifications">
          <Bell />
        </Button>
        <Button size="sm">
          <Plus />
          <span className="hidden sm:inline">{t.dashboard.newCluster}</span>
        </Button>
      </div>
    </header>
  )
}
