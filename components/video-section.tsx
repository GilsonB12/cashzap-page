export function VideoSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">Veja o Cashzap em ação</h2>
          <p className="text-lg text-muted-foreground">
            Descubra como é fácil controlar suas finanças com nosso agente de IA
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-card shadow-2xl">
            {/* Substitua o src abaixo pelo URL do seu vídeo */}
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/SEU_VIDEO_ID"
              title="Vídeo de demonstração do Cashzap"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            *Adicione o link do seu vídeo do YouTube ou outro serviço
          </p>
        </div>
      </div>
    </section>
  )
}
