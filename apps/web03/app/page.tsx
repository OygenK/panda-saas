import { SiteHeader } from '@/components/marketing/site-header'
import { SiteFooter } from '@/components/marketing/site-footer'
import { Hero } from '@/components/marketing/hero'
import { Features } from '@/components/marketing/features'
import { ComputeShowcase } from '@/components/marketing/compute-showcase'
import { CTA } from '@/components/marketing/cta'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <ComputeShowcase />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
