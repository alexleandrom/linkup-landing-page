import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Home,
  Users,
  Heart,
  Bookmark,
  BarChart3,
  Filter,
  Globe,
  MapPin,
  Gamepad2,
  Smartphone,
  Shirt,
  Dumbbell,
  Plane,
  Leaf,
  Coffee,
  TrendingUp,
  DollarSign,
} from "lucide-react"

const categories = [
  { name: "Saúde", icon: Heart, count: 234 },
  { name: "Bem-estar", icon: Dumbbell, count: 189 },
  { name: "Moda", icon: Shirt, count: 456 },
  { name: "Tecnologia", icon: Smartphone, count: 123 },
  { name: "Games", icon: Gamepad2, count: 89 },
  { name: "Viagens", icon: Plane, count: 167 },
  { name: "Ecologia", icon: Leaf, count: 78 },
  { name: "Bebidas", icon: Coffee, count: 145 },
  { name: "Empreendedorismo", icon: TrendingUp, count: 234 },
  { name: "Finanças", icon: DollarSign, count: 156 },
]

const regions = [
  { name: "Global", icon: Globe, count: 1234 },
  { name: "Brasil", icon: MapPin, count: 890 },
  { name: "São Paulo", icon: MapPin, count: 345 },
  { name: "Rio de Janeiro", icon: MapPin, count: 234 },
]

export function DashboardSidebar() {
  return (
    <aside className="w-80 border-r border-border bg-card p-6">
      <nav className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4 font-sans">Menu</h2>
          <div className="space-y-2">
            <Button variant="default" className="w-full justify-start font-serif">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start font-serif">
              <Users className="mr-2 h-4 w-4" />
              Influenciadores
            </Button>
            <Button variant="ghost" className="w-full justify-start font-serif">
              <Bookmark className="mr-2 h-4 w-4" />
              Salvos
            </Button>
            <Button variant="ghost" className="w-full justify-start font-serif">
              <BarChart3 className="mr-2 h-4 w-4" />
              Relatórios
            </Button>
          </div>
        </div>

        <Separator />

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground font-sans">Visão Geral</h3>
            <Filter className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-sm text-muted-foreground font-serif mb-4">
            Use os filtros avançados na área principal para refinar sua busca por influenciadores.
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Categorias Populares</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {categories.slice(0, 6).map((category) => (
              <div key={category.name} className="flex items-center justify-between text-sm font-serif">
                <div className="flex items-center">
                  <category.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                  {category.name}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Regiões Ativas</h3>
          <div className="space-y-2">
            {regions.map((region) => (
              <div key={region.name} className="flex items-center justify-between text-sm font-serif">
                <div className="flex items-center">
                  <region.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                  {region.name}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {region.count}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  )
}
