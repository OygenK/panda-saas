'use client'

import * as React from 'react'
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  translations,
  type Dict,
  type Locale,
} from './translations'

export { LOCALE_COOKIE } from './translations'

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dict
}

const I18nContext = React.createContext<I18nContextValue | null>(null)

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale
  children: React.ReactNode
}) {
  const [locale, setLocaleState] = React.useState<Locale>(initialLocale)

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next)
    if (typeof document !== 'undefined') {
      // 1 year, site-wide. Read back on the server for SSR-consistent renders.
      document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`
      document.documentElement.lang = next
    }
  }, [])

  const value = React.useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = React.useContext(I18nContext)
  if (!ctx) {
    // Safe fallback so components never crash outside a provider.
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: translations[DEFAULT_LOCALE],
    } satisfies I18nContextValue
  }
  return ctx
}
