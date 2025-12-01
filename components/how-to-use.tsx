import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const WHATSAPP_LINK = "https://wa.me/5585992760103?text=Ol%C3%A1!%20Quero%20conhecer%20o%20Cashzap"
const CHECKOUT_LINK = "https://pay.kiwify.com.br/7OlPiMx"

export function HowToUse() {
  return (
    <section className="container px-4 py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-balance">
          Como começar a usar o Cashzap
        </h2>
        <p className="text-lg text-muted-foreground mt-3 text-pretty">
          Escolha o caminho que preferir para ativar sua assinatura e receber as instruções iniciais.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6 space-y-4">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">Via WhatsApp</p>
            <h3 className="text-xl font-bold mt-2">Fale direto com o Cashzap</h3>
          </div>
          <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
            <li>Abra o WhatsApp pelo número ou botão abaixo.</li>
            <li>Envie uma mensagem de oi para o Cashzap.</li>
            <li>Ele responde com a instrução inicial e o link para comprar a assinatura.</li>
            <li>Conclua a compra e siga os passos enviados para começar a usar.</li>
          </ol>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button asChild>
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer">
                Link de pagamento
              </Link>
            </Button>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">Via e-mail</p>
            <h3 className="text-xl font-bold mt-2">Compre e siga o passo a passo</h3>
          </div>
          <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
            <li>Clique no link de compra abaixo e finalize o pagamento.</li>
            <li>Confira seu e-mail de compra: lá terá a mensagem do Cashzap.</li>
            <li>Siga a instrução que chegou por e-mail.</li>
            <li>Fale com o número do Cashzap indicado no e-mail para ativar e usar.</li>
          </ol>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button asChild>
              <Link href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer">
                Comprar agora
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Número do Cashzap
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
