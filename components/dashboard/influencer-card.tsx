import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AIStrategyGenerator } from "@/components/ai-strategy/ai-strategy-generator"
import { Heart, MessageCircle, Share2, MapPin, Users, TrendingUp, Eye } from "lucide-react"
import Link from "next/link"

interface Influencer {
  id: string
  name: string
  username: string
  category: string
  followers: string
  engagement: string
  region: string
  profileImage: string
  portfolioImages: string[]
  description: string
  objectives: string
  painPoints: string
  needs: string
  howLinkupHelps: string
}

interface InfluencerCardProps {
  influencer: Influencer
}

export function InfluencerCard({ influencer }: InfluencerCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={influencer.profileImage || "/placeholder.svg"} alt={influencer.name} />
              <AvatarFallback>
                {influencer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-foreground font-sans">{influencer.name}</h3>
              <p className="text-sm text-muted-foreground font-serif">{influencer.username}</p>
            </div>
          </div>
          <Badge variant="secondary" className="font-serif">
            {influencer.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Portfolio Images */}
        <div className="grid grid-cols-3 gap-2">
          {influencer.portfolioImages.map((image, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={image || "/placeholder.svg"}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground font-serif line-clamp-2">{influencer.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="flex items-center justify-center space-x-1">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold font-sans">{influencer.followers}</span>
            </div>
            <p className="text-xs text-muted-foreground font-serif">Seguidores</p>
          </div>
          <div>
            <div className="flex items-center justify-center space-x-1">
              <TrendingUp className="h-4 w-4 text-secondary" />
              <span className="text-sm font-semibold font-sans">{influencer.engagement}</span>
            </div>
            <p className="text-xs text-muted-foreground font-serif">Engajamento</p>
          </div>
          <div>
            <div className="flex items-center justify-center space-x-1">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold font-sans">{influencer.region}</span>
            </div>
            <p className="text-xs text-muted-foreground font-serif">Região</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <AIStrategyGenerator influencer={influencer} />
          <Button variant="outline" size="sm" asChild>
            <Link href={`/influencer/${influencer.id}`}>
              <Eye className="h-4 w-4 mr-1" />
              Ver Perfil
            </Link>
          </Button>
          <Button size="sm">Conectar</Button>
        </div>
      </CardFooter>
    </Card>
  )
}
