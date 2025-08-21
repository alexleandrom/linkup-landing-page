import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
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
          <p className="text-muted-foreground font-serif">Entre na sua conta</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-sans">Fazer Login</CardTitle>
            <CardDescription className="font-serif">Entre com suas credenciais para acessar sua conta</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-serif">
                Email
              </Label>
              <Input id="email" type="email" placeholder="seu@email.com" className="font-serif" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="font-serif">
                Senha
              </Label>
              <Input id="password" type="password" placeholder="••••••••" className="font-serif" />
            </div>
            <Button asChild className="w-full font-serif">
              <Link href="/dashboard">Entrar</Link>
            </Button>

            <Separator />

            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground font-serif">
                Não tem uma conta?{" "}
                <Link href="/register" className="text-primary hover:underline font-medium">
                  Cadastre sua empresa
                </Link>
              </p>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-serif"
              >
                Esqueceu sua senha?
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
