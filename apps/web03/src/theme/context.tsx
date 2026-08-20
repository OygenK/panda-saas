'use client'

import * as React from 'react'
import { THEME_COOKIE, DEFAULT_THEME, type Theme } from './constants'

export { THEME_COOKIE, DEFAULT_THEME, isTheme, type Theme } from './constants'

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

export function ThemeProvider({
  initialTheme,
  children,
}: {
  initialTheme: Theme
  children: React.ReactNode
}) {
  const [theme, setThemeState] = React.useState<Theme>(initialTheme)

  const setTheme = React.useCallback((next: Theme) => {
    setThemeState(next)
    if (typeof document !== 'undefined') {
      // 1 year, site-wide. Read back on the server for SSR-consistent renders.
      document.cookie = `${THEME_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`
      const root = document.documentElement
      root.classList.toggle('dark', next === 'dark')
      root.style.colorScheme = next
    }
  }, [])

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  const value = React.useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) {
    return {
      theme: DEFAULT_THEME,
      setTheme: () => {},
      toggleTheme: () => {},
    } satisfies ThemeContextValue
  }
  return ctx
}
