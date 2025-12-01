import { Card } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    image: "/conversa-cashzap-reserva-gasto-01.jpg",
    alt: "Registro de depósito na reserva financeira e gasto no almoço",
  },
  {
    image: "/conversa-cashzap-status.jpg",
    alt: "Status da assinatura do Cashzap no WhatsApp",
  },
  {
    image: "/conversa-cashzap-emergencia.jpg",
    alt: "Dicas de onde guardar a reserva de emergência",
  },
  {
    image: "/conversa-cashzap-gastos-diarios.jpg",
    alt: "Registro de gastos com gasolina e jantar pelo Cashzap",
  },
]

export function Testimonials() {
  return (
    <section className="container px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
          Conversas reais com o <span className="text-primary">Cashzap</span>
        </h2>
        <p className="text-lg text-muted-foreground">Veja como nossos usuários interagem com o assistente financeiro</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative aspect-[9/16] w-full bg-muted">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.alt}
                fill
                className="object-contain"
              />
            </div>
          </Card>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-8">Capturas reais de conversas com o Cashzap</p>
    </section>
  )
}
