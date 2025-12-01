import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="container px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6 text-balance">
          Pronto para transformar sua <span className="text-primary">vida financeira?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-pretty">
          Comece hoje mesmo a ter controle total sobre seu dinheiro com a ajuda da inteligência artificial
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
    </section>
  )
}
