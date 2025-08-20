import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Zap, ArrowLeft, Building2 } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-serif">Voltar ao início</span>
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground font-sans">LINKUP</h1>
          </div>
          <p className="text-muted-foreground font-serif">Cadastre sua empresa e comece a descobrir influenciadores</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Building2 className="h-5 w-5 text-primary" />
              <CardTitle className="font-sans">Cadastro de Empresa</CardTitle>
            </div>
            <CardDescription className="font-serif">
              Preencha os dados da sua empresa para começar a usar o LINKUP
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Dados da Empresa */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground font-sans">Dados da Empresa</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name" className="font-serif">
                    Nome da Empresa *
                  </Label>
                  <Input id="company-name" placeholder="Sua Empresa Ltda" className="font-serif" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cnpj" className="font-serif">
                    CNPJ *
                  </Label>
                  <Input id="cnpj" placeholder="00.000.000/0000-00" className="font-serif" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="segment" className="font-serif">
                    Segmento *
                  </Label>
                  <Select>
                    <SelectTrigger className="font-serif">
                      <SelectValue placeholder="Selecione o segmento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saude">Saúde e Bem-estar</SelectItem>
                      <SelectItem value="moda">Moda</SelectItem>
                      <SelectItem value="tecnologia">Tecnologia</SelectItem>
                      <SelectItem value="games">Games</SelectItem>
                      <SelectItem value="alimentacao">Alimentação</SelectItem>
                      <SelectItem value="beleza">Beleza</SelectItem>
                      <SelectItem value="fitness">Fitness</SelectItem>
                      <SelectItem value="viagens">Viagens</SelectItem>
                      <SelectItem value="educacao">Educação</SelectItem>
                      <SelectItem value="financas">Finanças</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-size" className="font-serif">
                    Tamanho da Empresa *
                  </Label>
                  <Select>
                    <SelectTrigger className="font-serif">
                      <SelectValue placeholder="Selecione o tamanho" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-10 funcionários)</SelectItem>
                      <SelectItem value="pequena">Pequena (11-50 funcionários)</SelectItem>
                      <SelectItem value="media">Média (51-200 funcionários)</SelectItem>
                      <SelectItem value="grande">Grande (200+ funcionários)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="font-serif">
                  Descrição da Empresa
                </Label>
                <Textarea
                  id="description"
                  placeholder="Conte um pouco sobre sua empresa, produtos e objetivos..."
                  className="font-serif"
                  rows={3}
                />
              </div>
            </div>

            <Separator />

            {/* Dados do Responsável */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground font-sans">Dados do Responsável</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="font-serif">
                    Nome Completo *
                  </Label>
                  <Input id="contact-name" placeholder="João Silva" className="font-serif" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position" className="font-serif">
                    Cargo *
                  </Label>
                  <Input id="position" placeholder="Gerente de Marketing" className="font-serif" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-serif">
                    Email *
                  </Label>
                  <Input id="email" type="email" placeholder="joao@empresa.com" className="font-serif" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-serif">
                    Telefone *
                  </Label>
                  <Input id="phone" placeholder="(11) 99999-9999" className="font-serif" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-serif">
                  Senha *
                </Label>
                <Input id="password" type="password" placeholder="••••••••" className="font-serif" />
              </div>
            </div>

            <Button className="w-full font-serif" size="lg">
              Cadastrar Empresa
            </Button>

            <Separator />

            <div className="text-center">
              <p className="text-sm text-muted-foreground font-serif">
                Já tem uma conta?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Fazer login
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
