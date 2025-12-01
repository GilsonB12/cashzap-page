import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const benefits = [
  "Acesso ilimitado ao agente de IA",
  "Análise automática de gastos",
  "Relatórios textuais resumidos pelo WhatsApp",
  "Suporte prioritário via WhatsApp",
  "Atualizações e novos recursos",
  "Segurança e privacidade garantidas",
]

export function Pricing() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            Invista no seu <span className="text-primary">futuro financeiro</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Menos de R$ 4,20 por mês para ter controle total das suas finanças
          </p>
        </div>

        <div className="mx-auto max-w-lg">
          <Card className="p-8 shadow-2xl border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Plano Anual</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-primary">R$ 49,99</span>
                <span className="text-muted-foreground">/ano</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Ou apenas R$ 4,16 por mês</p>
            </div>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="w-full text-base h-12">
              <Link href="https://pay.kiwify.com.br/7OlPiMx" target="_blank" rel="noopener noreferrer">
                Garantir Minha Vaga Agora
              </Link>
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Pagamento seguro via Kiwify • Garantia de 7 dias
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
