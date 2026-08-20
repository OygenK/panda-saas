'use client'

import type { ReactNode } from 'react'
import { I18nProvider } from '@/src/i18n/context'
import { ThemeProvider } from '@/src/theme/context'
import type { Locale } from '@/src/i18n/translations'
import type { Theme } from '@/src/theme/context'

export function Providers({
  locale,
  theme,
  children,
}: {
  locale: Locale
  theme: Theme
  children: ReactNode
}) {
  return (
    <ThemeProvider initialTheme={theme}>
      <I18nProvider initialLocale={locale}>{children}</I18nProvider>
    </ThemeProvider>
  )
}
