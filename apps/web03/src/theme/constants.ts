export const THEME_COOKIE = 'theme'
export type Theme = 'light' | 'dark'
export const DEFAULT_THEME: Theme = 'light'

export function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark'
}
