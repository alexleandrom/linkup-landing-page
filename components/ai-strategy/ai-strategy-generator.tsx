"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sparkles,
  Target,
  Calendar,
  TrendingUp,
  Camera,
  Video,
  FileText,
  Clock,
  CheckCircle,
  Lightbulb,
  BarChart3,
} from "lucide-react"

interface CompanyInfo {
  companyName: string
  industry: string
  targetAudience: string
  campaignGoals: string
  budget: string
  timeline: string
  productService: string
  keyMessage: string
}

interface StrategyResult {
  overview: string
  contentPillars: Array<{
    title: string
    description: string
    posts: number
  }>
  contentCalendar: Array<{
    week: number
    posts: Array<{
      type: string
      title: string
      description: string
      timing: string
      expectedEngagement: string
    }>
  }>
  kpis: Array<{
    metric: string
    target: string
    description: string
  }>
  recommendations: string[]
}

interface AIStrategyGeneratorProps {
  influencer: {
    id: string
    name: string
    username: string
    category: string
    followers: string
    engagement: string
    region: string
    objectives: string
    topCategories: string[]
  }
}

export function AIStrategyGenerator({ influencer }: AIStrategyGeneratorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    companyName: "",
    industry: "",
    targetAudience: "",
    campaignGoals: "",
    budget: "",
    timeline: "",
    productService: "",
    keyMessage: "",
  })
  const [strategy, setStrategy] = useState<StrategyResult | null>(null)

  const generateStrategy = async () => {
    setIsGenerating(true)
    setProgress(0)

    // Simulate AI processing with progress updates
    const steps = [
      "Analisando perfil do influenciador...",
      "Processando objetivos da empresa...",
      "Gerando pilares de conteúdo...",
      "Criando calendário editorial...",
      "Definindo KPIs e métricas...",
      "Finalizando estratégia...",
    ]

    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setProgress(((i + 1) / steps.length) * 100)
    }

    // Generate strategy based on influencer and company data
    const generatedStrategy: StrategyResult = {
      overview: `Estratégia personalizada para ${companyInfo.companyName} em parceria com ${influencer.name}. Esta campanha aproveitará a expertise de ${influencer.name} em ${influencer.category} para alcançar ${companyInfo.targetAudience} através de conteúdo autêntico e engajador. O foco será em ${companyInfo.campaignGoals} utilizando a forte presença do influenciador na região ${influencer.region}.`,

      contentPillars: [
        {
          title: "Educação e Valor",
          description: `Conteúdo educativo sobre ${companyInfo.productService} alinhado com a expertise de ${influencer.name}`,
          posts: 8,
        },
        {
          title: "Experiência Pessoal",
          description: "Demonstrações autênticas e reviews honestos do produto/serviço",
          posts: 6,
        },
        {
          title: "Engajamento da Comunidade",
          description: "Conteúdo interativo para aumentar participação e construir relacionamento",
          posts: 4,
        },
        {
          title: "Behind the Scenes",
          description: "Bastidores da parceria e processo criativo para humanizar a marca",
          posts: 3,
        },
      ],

      contentCalendar: [
        {
          week: 1,
          posts: [
            {
              type: "Post",
              title: "Apresentação da Parceria",
              description: `${influencer.name} apresenta ${companyInfo.companyName} para sua audiência`,
              timing: "Segunda-feira, 18h",
              expectedEngagement: "6.2K likes, 340 comentários",
            },
            {
              type: "Stories",
              title: "Primeira Impressão",
              description: "Unboxing ou primeira experiência com o produto/serviço",
              timing: "Quarta-feira, 20h",
              expectedEngagement: "12K visualizações",
            },
            {
              type: "Reels",
              title: "Tutorial Rápido",
              description: "Como usar/aproveitar o produto de forma prática",
              timing: "Sexta-feira, 19h",
              expectedEngagement: "8.5K likes, 180 shares",
            },
          ],
        },
        {
          week: 2,
          posts: [
            {
              type: "Post",
              title: "Benefícios Detalhados",
              description: "Post educativo sobre as vantagens do produto/serviço",
              timing: "Terça-feira, 17h",
              expectedEngagement: "5.8K likes, 290 comentários",
            },
            {
              type: "IGTV",
              title: "Review Completo",
              description: "Análise detalhada após uma semana de uso",
              timing: "Quinta-feira, 18h30",
              expectedEngagement: "15K visualizações, 420 likes",
            },
          ],
        },
      ],

      kpis: [
        {
          metric: "Alcance Total",
          target: "150K pessoas",
          description: "Número total de pessoas únicas alcançadas pela campanha",
        },
        {
          metric: "Taxa de Engajamento",
          target: "5.5%",
          description: "Média de engajamento nos posts da campanha",
        },
        {
          metric: "Conversões",
          target: "2.8%",
          description: "Taxa de conversão através do link/código do influenciador",
        },
        {
          metric: "Brand Awareness",
          target: "+35%",
          description: "Aumento no reconhecimento da marca na audiência do influenciador",
        },
      ],

      recommendations: [
        `Aproveitar a expertise de ${influencer.name} em ${influencer.category} para criar conteúdo educativo`,
        "Manter autenticidade nas postagens para preservar a confiança da audiência",
        `Focar na região ${influencer.region} onde o influenciador tem maior penetração`,
        "Criar conteúdo interativo para aumentar engajamento e feedback",
        "Monitorar métricas semanalmente e ajustar estratégia conforme necessário",
        "Considerar extensão da parceria baseada nos resultados iniciais",
      ],
    }

    setStrategy(generatedStrategy)
    setIsGenerating(false)
  }

  const resetForm = () => {
    setCompanyInfo({
      companyName: "",
      industry: "",
      targetAudience: "",
      campaignGoals: "",
      budget: "",
      timeline: "",
      productService: "",
      keyMessage: "",
    })
    setStrategy(null)
    setProgress(0)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="font-serif">
          <Sparkles className="mr-2 h-4 w-4" />
          Gerar Estratégia com IA
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-sans">
            <Sparkles className="h-5 w-5 text-primary" />
            Estratégia Personalizada com IA
          </DialogTitle>
          <DialogDescription className="font-serif">
            Nossa IA analisará o perfil de {influencer.name} e os objetivos da sua empresa para criar uma estratégia de
            marketing personalizada.
          </DialogDescription>
        </DialogHeader>

        {!strategy ? (
          <div className="space-y-6">
            {/* Company Information Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-sans">Informações da Empresa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name" className="font-serif">
                      Nome da Empresa *
                    </Label>
                    <Input
                      id="company-name"
                      value={companyInfo.companyName}
                      onChange={(e) => setCompanyInfo({ ...companyInfo, companyName: e.target.value })}
                      placeholder="Sua Empresa Ltda"
                      className="font-serif"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="font-serif">
                      Setor *
                    </Label>
                    <Select
                      value={companyInfo.industry}
                      onValueChange={(value) => setCompanyInfo({ ...companyInfo, industry: value })}
                    >
                      <SelectTrigger className="font-serif">
                        <SelectValue placeholder="Selecione o setor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="saude">Saúde e Bem-estar</SelectItem>
                        <SelectItem value="tecnologia">Tecnologia</SelectItem>
                        <SelectItem value="moda">Moda e Beleza</SelectItem>
                        <SelectItem value="alimentacao">Alimentação</SelectItem>
                        <SelectItem value="educacao">Educação</SelectItem>
                        <SelectItem value="financas">Finanças</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product-service" className="font-serif">
                    Produto/Serviço *
                  </Label>
                  <Input
                    id="product-service"
                    value={companyInfo.productService}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, productService: e.target.value })}
                    placeholder="Descreva seu produto ou serviço"
                    className="font-serif"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="target-audience" className="font-serif">
                    Público-Alvo *
                  </Label>
                  <Textarea
                    id="target-audience"
                    value={companyInfo.targetAudience}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, targetAudience: e.target.value })}
                    placeholder="Descreva seu público-alvo (idade, interesses, comportamento...)"
                    className="font-serif"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campaign-goals" className="font-serif">
                    Objetivos da Campanha *
                  </Label>
                  <Textarea
                    id="campaign-goals"
                    value={companyInfo.campaignGoals}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, campaignGoals: e.target.value })}
                    placeholder="O que você espera alcançar com esta parceria?"
                    className="font-serif"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="font-serif">
                      Orçamento
                    </Label>
                    <Select
                      value={companyInfo.budget}
                      onValueChange={(value) => setCompanyInfo({ ...companyInfo, budget: value })}
                    >
                      <SelectTrigger className="font-serif">
                        <SelectValue placeholder="Faixa de orçamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-10k">R$ 5.000 - R$ 10.000</SelectItem>
                        <SelectItem value="10k-25k">R$ 10.000 - R$ 25.000</SelectItem>
                        <SelectItem value="25k-50k">R$ 25.000 - R$ 50.000</SelectItem>
                        <SelectItem value="50k+">R$ 50.000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="font-serif">
                      Prazo da Campanha
                    </Label>
                    <Select
                      value={companyInfo.timeline}
                      onValueChange={(value) => setCompanyInfo({ ...companyInfo, timeline: value })}
                    >
                      <SelectTrigger className="font-serif">
                        <SelectValue placeholder="Duração desejada" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-month">1 mês</SelectItem>
                        <SelectItem value="2-months">2 meses</SelectItem>
                        <SelectItem value="3-months">3 meses</SelectItem>
                        <SelectItem value="6-months">6 meses</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="key-message" className="font-serif">
                    Mensagem Principal
                  </Label>
                  <Textarea
                    id="key-message"
                    value={companyInfo.keyMessage}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, keyMessage: e.target.value })}
                    placeholder="Qual a mensagem principal que você quer transmitir?"
                    className="font-serif"
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Influencer Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="font-sans">Resumo do Influenciador</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold font-sans">{influencer.name}</h3>
                    <p className="text-sm text-muted-foreground font-serif">{influencer.username}</p>
                  </div>
                  <Badge variant="secondary" className="font-serif">
                    {influencer.category}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground font-serif">Seguidores:</span>
                    <div className="font-semibold font-sans">{influencer.followers}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-serif">Engajamento:</span>
                    <div className="font-semibold font-sans">{influencer.engagement}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-serif">Região:</span>
                    <div className="font-semibold font-sans">{influencer.region}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Generate Button */}
            <div className="flex justify-between">
              <Button variant="outline" onClick={resetForm} className="font-serif bg-transparent">
                Limpar Formulário
              </Button>
              <Button
                onClick={generateStrategy}
                disabled={!companyInfo.companyName || !companyInfo.targetAudience || !companyInfo.campaignGoals}
                className="font-serif"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Gerar Estratégia
              </Button>
            </div>

            {/* Progress Bar */}
            {isGenerating && (
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary animate-spin" />
                      <span className="font-semibold font-sans">Gerando estratégia personalizada...</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                    <p className="text-sm text-muted-foreground font-serif">
                      Nossa IA está analisando todos os dados para criar a melhor estratégia para sua empresa.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          /* Strategy Results */
          <div className="space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-sans">
                  <Target className="h-5 w-5 text-primary" />
                  Visão Geral da Estratégia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-serif">{strategy.overview}</p>
              </CardContent>
            </Card>

            {/* Content Pillars */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-sans">
                  <Lightbulb className="h-5 w-5 text-secondary" />
                  Pilares de Conteúdo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {strategy.contentPillars.map((pillar, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold font-sans">{pillar.title}</h4>
                        <Badge variant="outline" className="font-serif">
                          {pillar.posts} posts
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground font-serif">{pillar.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Content Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-sans">
                  <Calendar className="h-5 w-5 text-accent" />
                  Calendário Editorial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {strategy.contentCalendar.map((week) => (
                    <div key={week.week}>
                      <h4 className="font-semibold mb-4 font-sans">Semana {week.week}</h4>
                      <div className="space-y-3">
                        {week.posts.map((post, index) => (
                          <div key={index} className="flex items-start gap-4 p-3 bg-muted rounded-lg">
                            <div className="flex-shrink-0">
                              {post.type === "Post" && <FileText className="h-5 w-5 text-primary" />}
                              {post.type === "Stories" && <Camera className="h-5 w-5 text-secondary" />}
                              {post.type === "Reels" && <Video className="h-5 w-5 text-accent" />}
                              {post.type === "IGTV" && <Video className="h-5 w-5 text-primary" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h5 className="font-semibold font-sans">{post.title}</h5>
                                <Badge variant="outline" className="text-xs font-serif">
                                  {post.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground font-serif mb-2">{post.description}</p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground font-serif">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {post.timing}
                                </span>
                                <span className="flex items-center gap-1">
                                  <TrendingUp className="h-3 w-3" />
                                  {post.expectedEngagement}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* KPIs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-sans">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  KPIs e Métricas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {strategy.kpis.map((kpi, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold font-sans">{kpi.metric}</h4>
                        <span className="text-lg font-bold text-primary font-sans">{kpi.target}</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-serif">{kpi.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-sans">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  Recomendações Estratégicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {strategy.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-serif">{rec}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <Button variant="outline" onClick={resetForm} className="font-serif bg-transparent">
                Gerar Nova Estratégia
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" className="font-serif bg-transparent">
                  Exportar PDF
                </Button>
                <Button className="font-serif">Iniciar Campanha</Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
