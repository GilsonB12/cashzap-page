import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>IA Financeira Direto no WhatsApp</span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Suas finanças organizadas com <span className="text-primary">inteligência artificial</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            O Cashzap é seu assistente financeiro pessoal que funciona 24/7 no WhatsApp. Controle gastos, receba
            insights e tome decisões melhores sobre seu dinheiro.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto text-base h-12 px-8">
              <Link href="https://pay.kiwify.com.br/7OlPiMx" target="_blank" rel="noopener noreferrer">
                Começar Agora - R$ 49,99/ano
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 bg-transparent">
              <Link
                href="https://wa.me/5585992760103?text=Ol%C3%A1!%20Quero%20conhecer%20o%20Cashzap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com a IA
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(oklch(0.38_0.18_152)_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
    </section>
  )
}
