'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { ArrowRight, Loader2, Check } from 'lucide-react'
import { AuthShell } from '@/components/auth/auth-shell'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useI18n } from '@/src/i18n/context'

export default function SignupPage() {
  const { t } = useI18n()
  const router = useRouter()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!name || !email || !password) {
      setError(t.signup.errorEmpty)
      return
    }
    if (password.length < 8) {
      setError(t.signup.errorShort)
      return
    }
    setLoading(true)
    // TODO: replace with Better Auth signUp.email({ name, email, password })
    await new Promise((r) => setTimeout(r, 700))
    setLoading(false)
    router.push('/dashboard')
  }

  return (
    <AuthShell title={t.signup.title} subtitle={t.signup.subtitle}>
      <ul className="mb-6 flex flex-wrap gap-x-4 gap-y-2">
        {t.signup.perks.map((perk) => (
          <li key={perk} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Check className="size-3.5 text-success" />
            {perk}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            {t.signup.nameLabel}
          </label>
          <Input
            id="name"
            autoComplete="name"
            placeholder={t.signup.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {t.signup.emailLabel}
          </label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder={t.signup.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            {t.signup.passwordLabel}
          </label>
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder={t.signup.passwordPlaceholder}
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
              <Loader2 className="size-4 animate-spin" /> {t.signup.submitting}
            </>
          ) : (
            <>
              {t.signup.submit} <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {t.signup.haveAccount}
        <Link href="/login" className="font-medium text-primary hover:underline">
          {t.signup.signIn}
        </Link>
      </p>
    </AuthShell>
  )
}
