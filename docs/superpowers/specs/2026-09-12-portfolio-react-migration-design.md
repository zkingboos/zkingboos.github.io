# Portfolio Migration: Static HTML → Vite + React (Design Spec)

> **Status:** Approved for planning.
> **Date:** 2026-09-12

## Goal

Migrar o portfólio monolítico (`docs/preview/index.html`, ~3300 linhas) para um
aplicativo **Vite + React + TypeScript** no root do repositório, reproduzindo
**fielmente** todo o conteúdo, estilo e comportamento existentes. Nada de
redesign: é uma tradução de markup/estilo/lógica para componentes React.

## Background / Estado atual do repo

- **Root** já é um projeto Vite + React + TS (`vite_react_shadcn_ts`) com
  shadcn/ui, Tailwind, React Router, TanStack Query, framer-motion, recharts.
  O deploy roda via `.github/workflows/deploy.yml` → `bun run build` → publica
  `./dist` no GitHub Pages (`CNAME = joseg.xyz`, site root `zkingboos.github.io`).
- O root atualmente renderiza um **placeholder genérico** (`src/pages/Index.tsx`
  + seções stub em `src/components/*`). NÃO é o site real.
- O **site real** está em `docs/preview/index.html` + 22 assets de imagem +
  `lenis.min.js`.
- `docs/preview/motion-reels/` é um projeto Remotion separado com o renderizado
  em `docs/preview/motion-reels/out/hero-assembly.mp4`. **Deve permanecer
  intocado.**
- `docs/` inteiro está **untracked no git** (`git status` → `?? docs/`). O root
  React está versionado em `master`.

## Decisões alinhadas com o usuário

1. **Framework:** manter **Vite + React** (não Next.js). GitHub Pages serve
   build estático `dist/`; Vite é a escolha certa (SSR/rotas dinâmicas do Next
   seriam desnecessárias).
2. **Não deletar** `docs/preview/motion-reels/` nem `docs/preview/motion-reels/out/`.
3. **Backup obrigatório** de `docs/preview/` antes de qualquer mudança.
4. **Estratégia:** migração **A** — fiel e completa, seção por seção, em
   componentes React organizados (um componente por seção).
5. **Assets:** mover os 22 arquivos de imagem para **`public/` do root**.
   `lenis` vira **dependência npm** (`lenis`), substituindo o `lenis.min.js`
   local (opção padrão fixada).
6. **i18n:** usar **`react-i18next`** (padrão da indústria), extraindo o
   dicionário `pt`/`en` inline atual para `src/locales/pt.json` e
   `src/locales/en.json`, com `useTranslation()` nos componentes.
7. **Integrações JS complexas:** reescrever como componentes React nativos
   (A) — heatmap do GitHub (via `@tanstack/react-query`) e topologia modal
   arrastável (via hooks / framer-motion). Manter fidelidade total.
8. **Código morto (`view-all` / "Catálogo das 10 Opções Anteriores"):**
   migrar fielmente **também** (opção B), e incluir uma **tarefa posterior
   explícita de remoção** dele, após a migração estar validada.
9. **Destino do `index.html` original:** **permanece** em `docs/preview/` como
   referência/registro (não é servido como deploy; o deploy passa a vir do
   `dist/` do root).

## Princípio-guia da migração

**FIDELIDADE TOTAL.** Cores (cyano elétrico `#09a6d6`, paleta escura), tipografia
(`Space Grotesk` para display, `JetBrains Mono` para dados), espaçamentos,
animações (Lenis scroll, ondas do About Me, masonry, hover states), textos e
comportamentos devem permanecer **idênticos** ao `index.html` atual. Regras
permanentes do projeto: zero emojis no conteúdo, zero purple, paleta cyano.

## Arquitetura alvo (decomposição em componentes)

Cada unidade tem responsabilidade única e interface clara. Estrutura proposta
(de acordo com as seções reais do `index.html`):

```
src/
  locales/
    pt.json          # traduções pt
    en.json          # traduções en
  config/
    site.ts          # nav links, metadados, constantes (já existe, revisar)
  contexts/
    LanguageContext? # substituído por react-i18next (remover o stub atual)
  lib/
    i18n.ts          # inicialização do react-i18next (resources, idioma default)
  hooks/
    useGitHubHeatmap.ts   # fetch/estado do heatmap
    useLiveClock.ts       # relógio BRT (se reutilizável)
  components/
    sections/
      HeroSection.tsx          # hero + frases rotativas + relógio
      CareerSection.tsx        # timeline ("Where I've Worked")
      ProductionArtifacts.tsx  # "Shipped Systems" (Variação A)
      LowLevelRoots.tsx        # bento grid + about me + ondas + heatmap
      TestimonialsSection.tsx  # masonry "Who Worked With Me"
      ContactSection.tsx       # footer + contact hub
    layout/
      Header.tsx       # navbar
      Footer.tsx       # footer (botão voltar ao topo)
    topology/
      AffiliateTopologyModal.tsx  # modal arrastável
    ui/               # componentes shadcn (já existem no root)
  pages/
    Index.tsx         # monta as seções na ordem correta
  App.tsx             # rotas (já existe)
  main.tsx            # entry (já existe)
```

### Mapeamento de seções do `index.html` → componentes

- `<header>` (navbar + toggle idioma) → `layout/Header.tsx`
- Backdrop atmosférico + hero (frases rotativas, `hero-headline`,
  `live-clock`) → `sections/HeroSection.tsx`
- `#section-career` (milestones/timeline `m1*`) → `sections/CareerSection.tsx`
- `#production-artifacts` ("Shipped Systems", Variação A `v-a-*`) →
  `sections/ProductionArtifacts.tsx`
- `#phase4` ("Low-Level Roots", bento grid `fbento-*`, about waves, GitHub
  heatmap) → `sections/LowLevelRoots.tsx`
- `#who-worked-with-me` (masonry testimonials `t-card-real`, render JS) →
  `sections/TestimonialsSection.tsx`
- `#contact-hub` (banner + cards + footer) → `sections/ContactSection.tsx`
- Modal de topologia (`#affiliate-modal`, `initTopologyDrag`, telemetria) →
  `topology/AffiliateTopologyModal.tsx`
- `#view-all` (código morto de dev) → migrado fielmente para
  `sections/LegacyCatalog.tsx` (a ser removido em tarefa posterior)

## Riscos / pontos de atenção

- **Fidelidade de CSS:** o `index.html` mistura CSS custom (classes `.m1`,
  `.v-a-*`, `.fbento-*`, `.t-*`, `.lang-*`, `.tl-blob`, `.about-wave`) com
  Tailwind via CDN. Na migração, esses estilos custom devem virar CSS scoped
  (arquivo `*.css` por seção/componente ou Tailwind), preservando valores exatos.
  O Tailwind CDN (play) será **substituído** pelo Tailwind do build (o root já
  tem `tailwind.config.ts`); é necessário conferir que tokens/cores existem ou
  portar as classes custom para CSS puro.
- **Lenis:** `lenis.min.js` deve ser integrado (dependência npm) sem mudar o
  feel do scroll.
- **react-i18next:** extrair TODAS as strings pt/en do dicionário inline atual
  para os JSONs, sem perder nenhuma key.
- **Heatmap:** o endpoint/fonte de dados atual deve ser preservado.
- **Backup primeiro:** nada é alterado até `docs/preview/` estar copiado com
  segurança.

## Fora de escopo (não fazer agora)

- Redesign, nova paleta, novas funcionalidades, novas seções.
- Migrar o projeto Remotion (`motion-reels`).
- Publicar/commitar sem validação visual.

## Critérios de sucesso

- `bun run dev` renderiza o portfólio idêntico ao `index.html` atual
  (comparação lado a lado).
- `bun run build` gera `dist/` e o deploy GitHub Pages continua funcionando
  (CNAME `joseg.xyz` preservado).
- Idioma toggle (pt/en) funciona via react-i18next.
- Heatmap e topologia modal funcionam como hoje.
- `docs/preview/motion-reels/` e `out/` intactos.
- `docs/preview/index.html` intacto como referência.
- Backup de `docs/preview/` criado e confirmado.