import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Eye, Heart, TrendingUp } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium font-sans">Total de Influenciadores</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-sans">2,847</div>
          <p className="text-xs text-muted-foreground font-serif">+12% em relação ao mês passado</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium font-sans">Visualizações</CardTitle>
          <Eye className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-sans">1.2M</div>
          <p className="text-xs text-muted-foreground font-serif">+8% em relação ao mês passado</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium font-sans">Engajamento Médio</CardTitle>
          <Heart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-sans">4.8%</div>
          <p className="text-xs text-muted-foreground font-serif">+0.3% em relação ao mês passado</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium font-sans">Conexões Ativas</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-sans">156</div>
          <p className="text-xs text-muted-foreground font-serif">+23 novas conexões este mês</p>
        </CardContent>
      </Card>
    </div>
  )
}
