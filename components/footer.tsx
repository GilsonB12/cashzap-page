export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Cashzap</h3>
          <p className="text-sm text-muted-foreground mb-4">Seu assistente financeiro inteligente via WhatsApp</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cashzap. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
