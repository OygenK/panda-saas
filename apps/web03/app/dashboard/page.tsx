'use client'

import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'
import { DashboardTopbar } from '@/components/dashboard/dashboard-topbar'
import { StatCards } from '@/components/dashboard/stat-cards'
import { UtilizationChart } from '@/components/dashboard/utilization-chart'
import { ClustersTable } from '@/components/dashboard/clusters-table'
import { PipelinesPanel } from '@/components/dashboard/pipelines-panel'
import { ActivityFeed } from '@/components/dashboard/activity-feed'
import { useI18n } from '@/src/i18n/context'

export default function DashboardPage() {
  const { t } = useI18n()

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="mx-auto max-w-6xl space-y-6">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-balance">
                {t.dashboard.greeting}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground text-pretty">
                {t.dashboard.greetingSub}
              </p>
            </div>

            <StatCards />

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="space-y-6 xl:col-span-2">
                <UtilizationChart />
                <ClustersTable />
              </div>
              <div className="space-y-6">
                <PipelinesPanel />
                <ActivityFeed />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
