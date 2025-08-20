import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Target, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground font-sans">LINKUP</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/discover" className="text-muted-foreground hover:text-foreground transition-colors">
                Descobrir
              </Link>
              <Link href="/influencers" className="text-muted-foreground hover:text-foreground transition-colors">
                Influenciadores
              </Link>
              <Link href="/companies" className="text-muted-foreground hover:text-foreground transition-colors">
                Empresas
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <Link href="/login">Entrar</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Cadastrar Empresa</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-sans">
            Conecte sua marca com os
            <span className="text-primary"> melhores influenciadores</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-serif">
            Plataforma inteligente que conecta empresas com influenciadores digitais, potencializando marcas através de
            parcerias estratégicas e autênticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/register">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
              <Link href="/discover">Explorar Influenciadores</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 font-sans">Por que escolher o LINKUP?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Rede Qualificada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-serif">
                  Acesso a milhares de influenciadores verificados em diversas categorias: saúde, moda, tecnologia,
                  games e muito mais.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-sans">Filtros Inteligentes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-serif">
                  Encontre o influenciador perfeito com filtros por categoria, região, engajamento e audiência
                  específica.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-sans">IA Estratégica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-serif">
                  Nossa IA gera estratégias personalizadas de publicação baseadas no perfil do influenciador e objetivos
                  da sua empresa.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6 font-sans">Pronto para potencializar sua marca?</h3>
          <p className="text-xl text-muted-foreground mb-8 font-serif">
            Cadastre sua empresa e comece a descobrir influenciadores hoje mesmo.
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <Link href="/register">
              Cadastrar Empresa Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-6 w-6 bg-primary rounded flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground font-sans">LINKUP</span>
          </div>
          <p className="text-muted-foreground font-serif">
            © 2024 LINKUP. Conectando marcas com influenciadores digitais.
          </p>
        </div>
      </footer>
    </div>
  )
}
