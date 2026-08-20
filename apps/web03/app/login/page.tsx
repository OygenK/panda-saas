'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import { AuthShell } from '@/components/auth/auth-shell'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useI18n } from '@/src/i18n/context'

export default function LoginPage() {
  const { t } = useI18n()
  const router = useRouter()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!email || !password) {
      setError(t.login.errorEmpty)
      return
    }
    setLoading(true)
    // TODO: replace with Better Auth signIn.email({ email, password })
    await new Promise((r) => setTimeout(r, 700))
    setLoading(false)
    router.push('/dashboard')
  }

  return (
    <AuthShell title={t.login.title} subtitle={t.login.subtitle}>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {t.login.emailLabel}
          </label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder={t.login.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium">
              {t.login.passwordLabel}
            </label>
            <a href="#" className="text-xs text-primary hover:underline">
              {t.login.forgot}
            </a>
          </div>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder={t.login.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {error}
          </p>
        )}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" /> {t.login.submitting}
            </>
          ) : (
            <>
              {t.login.submit} <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {t.login.noAccount}
        <Link href="/signup" className="font-medium text-primary hover:underline">
          {t.login.createOne}
        </Link>
      </p>
    </AuthShell>
  )
}
