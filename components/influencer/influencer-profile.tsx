import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AIStrategyGenerator } from "@/components/ai-strategy/ai-strategy-generator"
import {
  Heart,
  MessageCircle,
  Share2,
  MapPin,
  Users,
  TrendingUp,
  Calendar,
  Target,
  AlertCircle,
  CheckCircle,
  Lightbulb,
  ArrowLeft,
  Bookmark,
  ExternalLink,
  Eye,
  ThumbsUp,
} from "lucide-react"
import Link from "next/link"

interface Influencer {
  id: string
  name: string
  username: string
  category: string
  followers: string
  followersCount: number
  engagement: string
  engagementRate: number
  region: string
  profileImage: string
  portfolioImages: string[]
  description: string
  objectives: string
  painPoints: string
  needs: string
  howLinkupHelps: string
  bio: string
  location: string
  joinedDate: string
  avgLikes: string
  avgComments: string
  avgShares: string
  topCategories: string[]
  recentPosts: Array<{
    id: string
    image: string
    caption: string
    likes: string
    comments: string
    date: string
  }>
}

interface InfluencerProfileProps {
  influencer: Influencer
}

export function InfluencerProfile({ influencer }: InfluencerProfileProps) {
  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="ghost" asChild className="font-serif">
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Dashboard
          </Link>
        </Button>
      </div>

      {/* Profile Header */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <Avatar className="h-32 w-32">
                <AvatarImage src={influencer.profileImage || "/placeholder.svg"} alt={influencer.name} />
                <AvatarFallback className="text-2xl">
                  {influencer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-foreground font-sans">{influencer.name}</h1>
                  <Badge variant="secondary" className="font-serif">
                    {influencer.category}
                  </Badge>
                </div>
                <p className="text-xl text-muted-foreground font-serif">{influencer.username}</p>
                <p className="text-foreground font-serif mt-2">{influencer.bio}</p>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground font-serif">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {influencer.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Desde {influencer.joinedDate}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {influencer.topCategories.map((cat) => (
                  <Badge key={cat} variant="outline" className="font-serif">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <AIStrategyGenerator influencer={influencer} />
              <Button className="font-serif">
                <Heart className="mr-2 h-4 w-4" />
                Conectar
              </Button>
              <Button variant="outline" className="font-serif bg-transparent">
                <Bookmark className="mr-2 h-4 w-4" />
                Salvar
              </Button>
              <Button variant="outline" className="font-serif bg-transparent">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div className="text-2xl font-bold font-sans">{influencer.followers}</div>
            <p className="text-sm text-muted-foreground font-serif">Seguidores</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-5 w-5 text-secondary" />
            </div>
            <div className="text-2xl font-bold font-sans">{influencer.engagement}</div>
            <p className="text-sm text-muted-foreground font-serif">Engajamento</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <ThumbsUp className="h-5 w-5 text-accent" />
            </div>
            <div className="text-2xl font-bold font-sans">{influencer.avgLikes}</div>
            <p className="text-sm text-muted-foreground font-serif">Likes Médios</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div className="text-2xl font-bold font-sans">{influencer.avgComments}</div>
            <p className="text-sm text-muted-foreground font-serif">Comentários</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="font-serif">
            Visão Geral
          </TabsTrigger>
          <TabsTrigger value="portfolio" className="font-serif">
            Portfólio
          </TabsTrigger>
          <TabsTrigger value="insights" className="font-serif">
            Insights
          </TabsTrigger>
          <TabsTrigger value="posts" className="font-serif">
            Posts Recentes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Profile Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-sans">
                  <Target className="h-5 w-5 text-primary" />
                  Objetivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-serif">{influencer.objectives}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-sans">
                  <AlertCircle className="h-5 w-5 text-secondary" />
                  Dores e Desafios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-serif">{influencer.painPoints}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-sans">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  Necessidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-serif">{influencer.needs}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-sans">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Como a LINKUP Ajuda
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-serif">{influencer.howLinkupHelps}</p>
              </CardContent>
            </Card>
          </div>

          {/* Region Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-sans">
                <MapPin className="h-5 w-5 text-primary" />
                Região de Influência
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-lg font-semibold font-sans">Global</div>
                  <p className="text-sm text-muted-foreground font-serif">15%</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-lg font-semibold font-sans">Brasil</div>
                  <p className="text-sm text-muted-foreground font-serif">70%</p>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="text-lg font-semibold font-sans">{influencer.region}</div>
                  <p className="text-sm text-muted-foreground font-serif">45%</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-lg font-semibold font-sans">Outros</div>
                  <p className="text-sm text-muted-foreground font-serif">15%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-sans">Portfólio de Trabalhos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {influencer.portfolioImages.map((image, index) => (
                  <div key={index} className="group relative">
                    <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-serif"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-sans">Métricas de Engajamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-serif">Taxa de Curtidas</span>
                  <span className="font-semibold font-sans">4.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-serif">Taxa de Comentários</span>
                  <span className="font-semibold font-sans">0.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-serif">Taxa de Compartilhamentos</span>
                  <span className="font-semibold font-sans">0.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-serif">Alcance Médio</span>
                  <span className="font-semibold font-sans">89K</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans">Demografia da Audiência</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-serif">18-24 anos</span>
                  <span className="font-semibold font-sans">35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-serif">25-34 anos</span>
                  <span className="font-semibold font-sans">45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-serif">35-44 anos</span>
                  <span className="font-semibold font-sans">15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-serif">45+ anos</span>
                  <span className="font-semibold font-sans">5%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="posts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-sans">Posts Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {influencer.recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4 p-4 border border-border rounded-lg">
                    <div className="flex-shrink-0">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt="Post"
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-serif mb-2">{post.caption}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground font-serif">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {post.comments}
                        </span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="font-serif">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
