import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { HowToUse } from "@/components/how-to-use"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      {/* <VideoSection /> Temporariamente desativado enquanto não há vídeo */}
      <Testimonials />
      <Pricing />
      <HowToUse />
      <CTA />
      <Footer />
    </main>
  )
}
