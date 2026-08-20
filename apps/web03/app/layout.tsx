import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  isLocale,
  type Locale,
} from '@/src/i18n/translations'
import {
  THEME_COOKIE,
  DEFAULT_THEME,
  isTheme,
  type Theme,
} from '@/src/theme/constants'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Substrate — Cloud infrastructure for ML & DevOps',
  description:
    'Substrate is the control plane for ML and DevOps teams — provision GPU compute, orchestrate pipelines, and ship deployments from one place.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0d12',
}

export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const cookieStore = await cookies()
  const localeValue = cookieStore.get(LOCALE_COOKIE)?.value
  const themeValue = cookieStore.get(THEME_COOKIE)?.value

  const locale: Locale = isLocale(localeValue) ? localeValue : DEFAULT_LOCALE
  const theme: Theme = isTheme(themeValue) ? themeValue : DEFAULT_THEME

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${
        theme === 'dark' ? 'dark bg-background' : 'bg-background'
      }`}
      suppressHydrationWarning
    >
      <body>
        <Providers locale={locale} theme={theme}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
