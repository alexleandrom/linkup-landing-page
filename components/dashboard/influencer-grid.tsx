"use client"

import { useState, useMemo } from "react"
import { InfluencerCard } from "./influencer-card"
import { AdvancedFilters } from "./advanced-filters"

interface FilterState {
  search: string
  categories: string[]
  regions: string[]
  followersRange: [number, number]
  engagementRange: [number, number]
  sortBy: string
  sortOrder: "asc" | "desc"
}

// Mock data for influencers
const influencers = [
  {
    id: "1",
    name: "Ana Silva",
    username: "@anasilva_fit",
    category: "Saúde",
    followers: "125K",
    followersCount: 125,
    engagement: "4.8%",
    engagementRate: 4.8,
    region: "São Paulo",
    profileImage: "/fitness-woman-determined.png",
    portfolioImages: ["/fitness-workout.png", "/healthy-food-still-life.png", "/woman-in-warrior-two.png"],
    description: "Especialista em fitness e nutrição, ajudando pessoas a alcançarem seus objetivos de saúde.",
    objectives: "Promover um estilo de vida saudável e equilibrado",
    painPoints: "Falta de tempo para exercícios e alimentação saudável",
    needs: "Produtos de qualidade que facilitem a rotina fitness",
    howLinkupHelps: "Conecta com marcas de suplementos, equipamentos e roupas fitness",
  },
  {
    id: "2",
    name: "Carlos Tech",
    username: "@carlostech",
    category: "Tecnologia",
    followers: "89K",
    followersCount: 89,
    engagement: "6.2%",
    engagementRate: 6.2,
    region: "Rio de Janeiro",
    profileImage: "/tech-man.png",
    portfolioImages: ["/placeholder-96d9l.png", "/cozy-laptop-setup.png", "/diverse-tech-gadgets.png"],
    description: "Reviewer de tecnologia com foco em smartphones, laptops e gadgets inovadores.",
    objectives: "Educar sobre tecnologia e ajudar na escolha de produtos",
    painPoints: "Produtos de baixa qualidade no mercado",
    needs: "Acesso antecipado a lançamentos tecnológicos",
    howLinkupHelps: "Facilita parcerias com marcas de tecnologia e startups",
  },
  {
    id: "3",
    name: "Mariana Style",
    username: "@marianastyle",
    category: "Moda",
    followers: "234K",
    followersCount: 234,
    engagement: "5.4%",
    engagementRate: 5.4,
    region: "São Paulo",
    profileImage: "/stylish-woman.png",
    portfolioImages: ["/stylish-streetwear-outfit.png", "/placeholder-w9u6i.png", "/stylish-footwear.png"],
    description: "Influenciadora de moda com foco em looks acessíveis e tendências atuais.",
    objectives: "Inspirar mulheres a se sentirem confiantes através da moda",
    painPoints: "Dificuldade em encontrar peças de qualidade com preço justo",
    needs: "Parcerias com marcas que valorizem diversidade e inclusão",
    howLinkupHelps: "Conecta com marcas de moda que compartilham valores similares",
  },
  {
    id: "4",
    name: "João Gamer",
    username: "@joaogamer_br",
    category: "Games",
    followers: "156K",
    followersCount: 156,
    engagement: "7.1%",
    engagementRate: 7.1,
    region: "Minas Gerais",
    profileImage: "/gamer-man.png",
    portfolioImages: ["/immersive-gaming-setup.png", "/classic-game-controller.png", "/vibrant-gaming-tournament.png"],
    description: "Streamer e criador de conteúdo focado em jogos competitivos e reviews.",
    objectives: "Entreter e educar a comunidade gamer brasileira",
    painPoints: "Equipamentos caros e falta de suporte para criadores",
    needs: "Hardware de qualidade e jogos para review",
    howLinkupHelps: "Facilita parcerias com desenvolvedoras e marcas de hardware",
  },
  {
    id: "5",
    name: "Lucia Viagens",
    username: "@luciaviagens",
    category: "Viagens",
    followers: "98K",
    followersCount: 98,
    engagement: "4.9%",
    engagementRate: 4.9,
    region: "Global",
    profileImage: "/travel-woman.png",
    portfolioImages: [
      "/placeholder.svg?height=120&width=120",
      "/placeholder.svg?height=120&width=120",
      "/placeholder.svg?height=120&width=120",
    ],
    description: "Viajante profissional compartilhando destinos incríveis ao redor do mundo.",
    objectives: "Inspirar pessoas a explorarem novos destinos",
    painPoints: "Custos altos de viagem e planejamento complexo",
    needs: "Parcerias com hotéis, companhias aéreas e agências",
    howLinkupHelps: "Conecta com empresas do setor turístico para colaborações",
  },
  {
    id: "6",
    name: "Pedro Eco",
    username: "@pedroeco_verde",
    category: "Ecologia",
    followers: "67K",
    followersCount: 67,
    engagement: "5.8%",
    engagementRate: 5.8,
    region: "Brasília",
    profileImage: "/placeholder.svg?height=80&width=80",
    portfolioImages: [
      "/placeholder.svg?height=120&width=120",
      "/placeholder.svg?height=120&width=120",
      "/placeholder.svg?height=120&width=120",
    ],
    description: "Ativista ambiental promovendo sustentabilidade e consumo consciente.",
    objectives: "Educar sobre práticas sustentáveis e preservação ambiental",
    painPoints: "Falta de consciência ambiental e produtos não sustentáveis",
    needs: "Produtos eco-friendly e marcas comprometidas com sustentabilidade",
    howLinkupHelps: "Conecta com empresas sustentáveis e projetos ambientais",
  },
  {
    id: "7",
    name: "Sofia Bem-estar",
    username: "@sofiabemestar",
    category: "Bem-estar",
    followers: "178K",
    followersCount: 178,
    engagement: "6.5%",
    engagementRate: 6.5,
    region: "São Paulo",
    profileImage: "/placeholder.svg?height=80&width=80",
    portfolioImages: [
      "/placeholder.svg?height=120&width=120",
      "/placeholder.svg?height=120&width=120",
      "/placeholder.svg?height=120&width=120",
    ],
    description: "Coach de bem-estar focada em mindfulness, meditação e equilíbrio emocional.",
    objectives: "Ajudar pessoas a encontrarem paz interior e equilíbrio",
    painPoints: "Estresse e ansiedade da vida moderna",
    needs: "Produtos e serviços que promovam bem-estar mental",
    howLinkupHelps: "Conecta com marcas de wellness e produtos naturais",
  },
  {
    id: "8",
    name: "Ricardo Finanças",
    username: "@ricardofinancas",
    category: "Finanças",
    followers: "312K",
    followersCount: 312,
    engagement: "3.9%",
    engagementRate: 3.9,
    region: "Brasil",
    profileImage: "/placeholder.svg?height=80&width=80",
    portfolioImages: [
      "/placeholder.svg?height=120&width=120",
      "/placeholder.svg?height=120&width=120",
      "/placeholder.svg?height=120&width=120",
    ],
    description: "Educador financeiro ajudando pessoas a organizarem suas finanças pessoais.",
    objectives: "Democratizar a educação financeira no Brasil",
    painPoints: "Falta de conhecimento financeiro da população",
    needs: "Ferramentas e produtos financeiros acessíveis",
    howLinkupHelps: "Conecta com fintechs e instituições financeiras",
  },
]

export function InfluencerGrid() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    categories: [],
    regions: [],
    followersRange: [0, 1000],
    engagementRange: [0, 10],
    sortBy: "followers",
    sortOrder: "desc",
  })

  const filteredAndSortedInfluencers = useMemo(() => {
    const filtered = influencers.filter((influencer) => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        const matchesSearch =
          influencer.name.toLowerCase().includes(searchTerm) ||
          influencer.username.toLowerCase().includes(searchTerm) ||
          influencer.description.toLowerCase().includes(searchTerm) ||
          influencer.category.toLowerCase().includes(searchTerm)
        if (!matchesSearch) return false
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(influencer.category)) {
        return false
      }

      // Region filter
      if (filters.regions.length > 0 && !filters.regions.includes(influencer.region)) {
        return false
      }

      // Followers range filter
      if (
        influencer.followersCount < filters.followersRange[0] ||
        influencer.followersCount > filters.followersRange[1]
      ) {
        return false
      }

      // Engagement range filter
      if (
        influencer.engagementRate < filters.engagementRange[0] ||
        influencer.engagementRate > filters.engagementRange[1]
      ) {
        return false
      }

      return true
    })

    // Sort
    filtered.sort((a, b) => {
      let aValue: any
      let bValue: any

      switch (filters.sortBy) {
        case "followers":
          aValue = a.followersCount
          bValue = b.followersCount
          break
        case "engagement":
          aValue = a.engagementRate
          bValue = b.engagementRate
          break
        case "name":
          aValue = a.name
          bValue = b.name
          break
        case "category":
          aValue = a.category
          bValue = b.category
          break
        case "region":
          aValue = a.region
          bValue = b.region
          break
        default:
          aValue = a.followersCount
          bValue = b.followersCount
      }

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (filters.sortOrder === "asc") {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    return filtered
  }, [filters])

  const clearFilters = () => {
    setFilters({
      search: "",
      categories: [],
      regions: [],
      followersRange: [0, 1000],
      engagementRange: [0, 10],
      sortBy: "followers",
      sortOrder: "desc",
    })
  }

  return (
    <div>
      <AdvancedFilters filters={filters} onFiltersChange={setFilters} onClearFilters={clearFilters} />

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground font-sans">
          {filters.search || filters.categories.length > 0 || filters.regions.length > 0
            ? "Resultados da Busca"
            : "Influenciadores Recomendados"}
        </h2>
        <p className="text-muted-foreground font-serif">
          {filteredAndSortedInfluencers.length} influenciador{filteredAndSortedInfluencers.length !== 1 ? "es" : ""}{" "}
          encontrado{filteredAndSortedInfluencers.length !== 1 ? "s" : ""}
        </p>
      </div>

      {filteredAndSortedInfluencers.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-muted-foreground font-serif">
            <p className="text-lg mb-2">Nenhum influenciador encontrado</p>
            <p>Tente ajustar os filtros para ver mais resultados</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedInfluencers.map((influencer) => (
            <InfluencerCard key={influencer.id} influencer={influencer} />
          ))}
        </div>
      )}
    </div>
  )
}
