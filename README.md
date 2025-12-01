# Cashzap Landing Page

Landing page em Next.js 16 + Tailwind (v4) para o Cashzap, assistente financeiro via WhatsApp. Inclui CTAs para pagamento na Kiwify e contato direto pelo número do Cashzap, prints reais das conversas e instruções de onboarding.

## Requisitos
- Node 18+ (recomendado)
- pnpm (ou npm/yarn)

## Instalação
```bash
pnpm install
```

## Desenvolvimento
```bash
pnpm dev
# abre em http://localhost:3000
```

## Build e produção
```bash
pnpm build
pnpm start
```

## Estrutura destacada
- `app/page.tsx`: monta a landing com Hero, Features, conversas reais (Testimonials), Pricing, seção “Como usar” e CTA final.
- `components/hero.tsx`, `components/cta.tsx`, `components/pricing.tsx`: CTAs já configurados com o link de pagamento e o número do WhatsApp.
- `components/how-to-use.tsx`: passo a passo para ativar via WhatsApp ou via compra/e-mail.
- `components/testimonials.tsx`: mostra os prints reais salvos em `public/` (conversa-cashzap-*.jpg).
- `app/globals.css`: tema e ajustes globais.

## Personalização rápida
- Links de pagamento/WhatsApp: atualize em `components/hero.tsx`, `components/cta.tsx`, `components/pricing.tsx` e `components/how-to-use.tsx` se mudarem.
- Prints de conversas: substitua os arquivos `public/conversa-cashzap-*.jpg`.
- Vídeo: a seção de vídeo está comentada em `app/page.tsx`; descomente quando tiver URL válido no `components/video-section.tsx`.

## Deploy sugerido (Vercel)
1. Faça push para um repositório (GitHub/GitLab).
2. Conecte na Vercel, selecione o projeto Next.js (build padrão `next build`).
3. Ao terminar, compartilhe a URL gerada (ex.: `https://seusubdominio.vercel.app`).
