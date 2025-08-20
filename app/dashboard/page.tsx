import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { InfluencerGrid } from "@/components/dashboard/influencer-grid"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground font-sans">Dashboard</h1>
              <p className="text-muted-foreground font-serif">
                Descubra e conecte-se com influenciadores que podem potencializar sua marca
              </p>
            </div>

            <DashboardStats />
            <InfluencerGrid />
          </div>
        </main>
      </div>
    </div>
  )
}
