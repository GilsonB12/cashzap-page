import { Card } from "@/components/ui/card"
import { Brain, TrendingUp, MessageSquare, Lock, Zap, FileText } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "IA Inteligente",
    description: "Agente de IA treinado para entender suas finanças e dar conselhos personalizados",
  },
  {
    icon: TrendingUp,
    title: "Análise Automática",
    description: "Categorização automática de gastos e receitas para você entender para onde vai seu dinheiro",
  },
  {
    icon: MessageSquare,
    title: "Organização pelo WhatsApp",
    description: "Converse com a IA para registrar e consultar seus gastos diretamente no app",
  },
  {
    icon: Lock,
    title: "Segurança Total",
    description: "Seus dados financeiros protegidos com criptografia de ponta a ponta",
  },
  {
    icon: Zap,
    title: "Respostas Instantâneas",
    description: "Tire dúvidas e consulte seus dados a qualquer momento pelo WhatsApp",
  },
  {
    icon: FileText,
    title: "Relatórios",
    description: "Receba resumos claros sobre sua situação financeira",
  },
]

export function Features() {
  return (
    <section className="container px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
          Tudo que você precisa para <span className="text-primary">controlar seu dinheiro</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Funcionalidades poderosas acessíveis diretamente do seu WhatsApp
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
            <feature.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
