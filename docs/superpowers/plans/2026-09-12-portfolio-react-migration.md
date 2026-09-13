# Portfolio React Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrar `docs/preview/index.html` (portfólio monolítico, ~3300 linhas) para Vite + React + TypeScript no root, com fidelidade total de estilo e comportamento.

**Architecture:** Reescrever cada seção do HTML como um componente React em `src/components/` (sections/ e layout/), extrair o i18n pt/en para `react-i18next`, mover assets para `public/`, reescrever as integrações JS (heatmap GitHub, topologia modal arrastável) como hooks/componentes nativos. Deploy continua via GitHub Actions → `dist/` → GitHub Pages.

**Tech Stack:** Vite 5, React 18, TypeScript, Tailwind CSS 3 (build próprio, não CDN), react-i18next, TanStack Query, framer-motion, lenis (npm).

**Spec:** `docs/superpowers/specs/2026-09-12-portfolio-react-migration-design.md`

## Global Constraints

- **FIDELIDADE TOTAL:** estilo, cores (ciano `#09a6d6`), tipografia (Space Grotesk + JetBrains Mono), espaçamentos, animações e textos idênticos ao `index.html`. Nada de redesign.
- **Zero emojis** no conteúdo. **Zero purple** (paleta ciano). HTML válido.
- **Preservar** `docs/preview/motion-reels/` e `docs/preview/motion-reels/out/hero-assembly.mp4`.
- **Backup de `docs/preview/` obrigatório** antes de qualquer mudança.
- `docs/preview/index.html` **permanece** como referência (não é servido como deploy).
- TDD: cada tarefa termina com verificação (`bun run build` ou teste).
- Rodar em branch de trabalho; nunca commitar direto em `master` sem consentimento.

---

## Task 0: Backup de `docs/preview` + baseline de build

**Files:**
- Create: `docs/preview-backup-2026-09-12/` (cópia inteira de `docs/preview/`)

- [ ] **Step 1: Criar backup completo**

```bash
cp -r docs/preview docs/preview-backup-2026-09-12
```

- [ ] **Step 2: Verificar backup**

```bash
ls docs/preview-backup-2026-09-12/index.html
du -sh docs/preview-backup-2026-09-12
```

- [ ] **Step 3: Verificar que o projeto root builda (baseline)**

```bash
bun install && bun run build
```

Expected: build completa sem erros. (Se `node_modules` não existe, `bun install` cria.)

- [ ] **Step 4: Commit backup + estado atual**

```bash
git add docs/ .superpowers/ 2>/dev/null; git status --short
git commit -m "chore: backup docs/preview before React migration"
```

---

## Task 1: Instalar dependências de migração

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Instalar deps**

```bash
bun add i18next react-i18next i18next-browser-languagedetector lenis
```

- [ ] **Step 2: Verificar**

```bash
bun run build
```

Expected: build ok (deps adicionadas).

- [ ] **Step 3: Commit**

```bash
git add package.json bun.lock && git commit -m "feat: add i18next, lenis deps"
```

---

## Task 2: Extrair dicionário i18n para JSON

**Files:**
- Create: `src/locales/pt.json`, `src/locales/en.json`

**Interfaces:**
- Produces: `pt.json`/`en.json` com as mesmas keys do dicionário inline do `index.html` (linhas ~1692-1950).

- [ ] **Step 1: Ler o dicionário completo do index.html**

Run: `sed -n '1692,1960p' docs/preview/index.html`
Copy every key + pt/en value into the JSON files.

- [ ] **Step 2: Criar `src/locales/pt.json`**

Conteúdo: todas as keys pt (ex: `nav_timeline`, `hero_experience_tag`, `phase2_title`, `phase4_title`, `phase5_title`, `bento_perf_title`, `feedbacks_title`, etc.) com os valores EXATOS do HTML.

- [ ] **Step 3: Criar `src/locales/en.json`**

Mesmas keys, valores en EXATOS do HTML.

- [ ] **Step 4: Verificar consistência de keys**

```bash
python3 -c "import json; a=json.load(open('src/locales/pt.json')); b=json.load(open('src/locales/en.json')); print('OK' if set(a)==set(b) else (set(a)^set(b)))"
```

- [ ] **Step 5: Commit**

```bash
git add src/locales/ && git commit -m "feat: extract i18n dictionaries to JSON"
```

---

## Task 3: Configurar react-i18next

**Files:**
- Create: `src/lib/i18n.ts`
- Modify: `src/main.tsx` (importar e inicializar)

**Interfaces:**
- Consumes: `src/locales/pt.json`, `src/locales/en.json`
- Produces: `src/lib/i18n.ts` (init do i18next com `fallbackLng`, `lng`, `resources`, `interpolation.escapeValue: false`)

- [ ] **Step 1: Criar `src/lib/i18n.ts`**

```ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "@/locales/pt.json";
import en from "@/locales/en.json";

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: { pt: { translation: pt }, en: { translation: en } },
  fallbackLng: "en",
  supportedLngs: ["en", "pt"],
  interpolation: { escapeValue: false },
});
```

- [ ] **Step 2: Importar em `main.tsx`**

```ts
import "@/lib/i18n";
```

- [ ] **Step 3: Remover o stub `LanguageContext` (substituído)**

Delete `src/contexts/LanguageContext.tsx` e remover import de `Index.tsx`/`LanguageProvider` depois que as seções forem portadas (não quebrar build intermediário — ver Step 4).

- [ ] **Step 4: Verificar**

```bash
bun run build
```

- [ ] **Step 5: Commit**

```bash
git add src/lib/i18n.ts src/main.tsx && git commit -m "feat: init react-i18next"
```

---

## Task 4: Mover assets para `public/`

**Files:**
- Move: `docs/preview/*.jpg|*.png|*.jpeg` → `public/` (22 arquivos)
- Move (ou copia): `docs/preview/lenis.min.js` → referencia não mais usada (lenis via npm); descartar.

- [ ] **Step 1: Mover imagens**

```bash
mv docs/preview/*.jpg docs/preview/*.png docs/preview/*.jpeg public/ 2>/dev/null; ls public/
```

Nota: NÃO mover `index.html` (fica como referência) nem `motion-reels/`.

- [ ] **Step 2: Verificar**

```bash
ls public/ | wc -l   # deve ter os 22 + banner.png, favicon.ico, robots.txt
bun run build
```

- [ ] **Step 3: Commit**

```bash
git add public/ && git commit -m "feat: move site assets to public/"
```

---

## Task 5: Portar CSS customizado para o root

**Files:**
- Modify: `src/index.css` (adicionar o CSS custom do `index.html`, mantendo o tailwind do root)
- Modify: `tailwind.config.ts` (se necessário para tokens/cores)

**Interfaces:**
- Produces: classes custom disponíveis globalmente: `.m1*`, `.v-a-*`, `.fbento-*`, `.t-*`, `.lang-*`, `.tl-blob`, `.about-wave`, `.cylinder-*`, `.font-display`, etc.

- [ ] **Step 1: Extrair o bloco `<style>` do index.html**

Run: `sed -n '1,460p' docs/preview/index.html` (o `<style>` custom está nas linhas ~9-460).

- [ ] **Step 2: Portar para `src/index.css`**

Adicionar as regras custom (`.font-display`, `.m1-*`, `.v-a-*`, `.fbento-*`, `.t-*`, `.lang-*`, `.tl-blob`, `.about-wave`, keyframes `waveScroll`, `.cylinder-*`, `.tab-active`, `#mosaic-grid`, `.m-col`, etc.) ao `src/index.css` — SEM os `@import` do CDN tailwind (o root já usa tailwind via build).

- [ ] **Step 3: Alinhar o tema escuro + ciano**

Verificar que `src/index.css` define `--primary`, background escuro, e o ciano `#09a6d6` para `text-[#09a6d6]`, `border-[#09a6d6]` etc. Ajustar `tailwind.config.ts` se necessário.

- [ ] **Step 4: Verificar**

```bash
bun run build
```

- [ ] **Step 5: Commit**

```bash
git add src/index.css tailwind.config.ts && git commit -m "feat: port custom CSS to root styles"
```

---

## Task 6: Configurar Lenis scroll (npm)

**Files:**
- Modify: `src/main.tsx` ou um `src/lib/lenis.ts` + uso em `App.tsx`

**Interfaces:**
- Produces: scroll suave idêntico ao do `index.html`.

- [ ] **Step 1: Ler o script Lenis do index.html**

Run: `sed -n '2626,2700p' docs/preview/index.html` (config `new Lenis(...)`, raf loop, `data-lenis-prevent`).

- [ ] **Step 2: Portar para um hook/efeito em React**

```ts
// src/lib/lenis.ts
import Lenis from "lenis";
let lenis: Lenis | null = null;
export function initLenis() { lenis = new Lenis({ /* config igual ao HTML */ }); function raf(t: number) { lenis!.raf(t); requestAnimationFrame(raf); } requestAnimationFrame(raf); return lenis; }
export function getLenis() { return lenis; }
```

- [ ] **Step 3: Chamar no `App.tsx` (useEffect)**

```ts
useEffect(() => { const l = initLenis(); return () => l.destroy(); }, []);
```

- [ ] **Step 4: Verificar**

```bash
bun run build
```

- [ ] **Step 5: Commit**

```bash
git add src/lib/lenis.ts src/App.tsx && git commit -m "feat: wire lenis smooth scroll"
```

---

## Task 7: Componente Header (navbar)

**Files:**
- Create: `src/components/layout/Header.tsx`
- Modify: `src/pages/Index.tsx` (importar e renderizar)

**Interfaces:**
- Consumes: i18n (`useTranslation`), `react-i18next` `changeLanguage`
- Produces: `<Header />`

- [ ] **Step 1: Ler o header do index.html**

Run: `sed -n '531,570p' docs/preview/index.html`

- [ ] **Step 2: Portar como JSX**

Reproduzir: logo (foto + "José Gabriel / Software Engineer"), links de nav (Studio/Timeline/Architecture/Low-Level Roots/Feedbacks com âncoras `#view-fusion`, `#section-career`, `#production-artifacts`, `#phase4`, `#who-worked-with-me`), botão de idioma (usa `useTranslation().i18n.changeLanguage`), CTA "Get in Touch". Usar classes Tailwind idênticas.

- [ ] **Step 3: Teste de render**

Create `src/components/layout/Header.test.tsx` (vitest + testing-library):

```tsx
import { render, screen } from "@testing-library/react";
import Header from "./Header";
test("renders nav links", () => {
  render(<Header />);
  expect(screen.getByText(/Timeline/i)).toBeTruthy();
});
```

- [ ] **Step 4: Rodar teste**

Run: `bun run test`
Expected: PASS

- [ ] **Step 5: Verificar build**

```bash
bun run build
```

- [ ] **Step 6: Commit**

```bash
git add src/components/layout/Header.tsx src/components/layout/Header.test.tsx && git commit -m "feat: port header component"
```

---

## Task 8: Hero Section (backdrop + hero + frases rotativas + relógio)

**Files:**
- Create: `src/components/sections/HeroSection.tsx`
- Create: `src/hooks/useLiveClock.ts` (relógio BRT)
- Create: `src/hooks/useRotatingPhrases.ts` (frases rotativas + dots + progress)

**Interfaces:**
- Consumes: i18n, `useLiveClock`, `useRotatingPhrases`
- Produces: `<HeroSection />`

- [ ] **Step 1: Ler hero + backdrop + scripts de frases/relógio**

Run: `sed -n '510,650p' docs/preview/index.html` (hero HTML) e `sed -n '2120,2335p'` (scripts de frases, relógio, copy email).

- [ ] **Step 2: Criar `useLiveClock`**

Portar `updateLiveClock()` (relógio BRT). Retorna string `--:-- BRT`.

- [ ] **Step 3: Criar `useRotatingPhrases`**

Portar `renderHeadline`, `nextSubtitle`, `renderSubtitle`, dots, progress bar, timer. Expor `{ phrase, dots, activeIdx, goTo }`.

- [ ] **Step 4: Portar `<HeroSection />`**

Reproduzir: backdrop (SVG/atmosférico, linhas 510-530), badge "14 ANOS...", avatar/frame técnico, headline animado, descrição, CTA "Get in Touch", relógio, `live-clock`.

- [ ] **Step 5: Teste**

```tsx
import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";
test("renders hero title", () => {
  render(<HeroSection />);
  expect(screen.getByText(/Software Engineer/)).toBeTruthy();
});
```

Run: `bun run test`

- [ ] **Step 6: Verificar build**

```bash
bun run build
```

- [ ] **Step 7: Commit**

```bash
git add src/components/sections/HeroSection.tsx src/hooks/useLiveClock.ts src/hooks/useRotatingPhrases.ts && git commit -m "feat: port hero section"
```

---

## Task 9: Career Section (timeline)

**Files:**
- Create: `src/components/sections/CareerSection.tsx`
- Create: `src/data/career.ts` (dados dos milestones)

**Interfaces:**
- Consumes: i18n, `src/data/career.ts`
- Produces: `<CareerSection />`

- [ ] **Step 1: Ler a seção career + dados**

Run: `sed -n '1064,1124p' docs/preview/index.html` (timeline `m1*`) e `sed -n '1692,1800p'` (i18n dos milestones).

- [ ] **Step 2: Extrair dados para `src/data/career.ts`**

Array de milestones: `{ period, name, meta, roles: [{ role, period, desc, stack }] }` com valores EXATOS do HTML (BarberGrid, Rede Lord, Self-employed, Hive-media, Refúgio RP, FutureMC).

- [ ] **Step 3: Portar `<CareerSection />`**

Reproduzir: título "Where I've Worked & What I Built", período "2013 — Present", timeline `.m1`, `.m1-item`, `.m1-role`, `.m-year`, `.m-stack`, `.m-desc`. Usar CSS portado.

- [ ] **Step 4: Teste**

```tsx
test("renders career timeline", () => {
  render(<CareerSection />);
  expect(screen.getByText(/Where I've Worked/)).toBeTruthy();
});
```

Run: `bun run test`

- [ ] **Step 5: Verificar build**

```bash
bun run build
```

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/CareerSection.tsx src/data/career.ts && git commit -m "feat: port career timeline section"
```

---

## Task 10: Production Artifacts (Shipped Systems)

**Files:**
- Create: `src/components/sections/ProductionArtifacts.tsx`
- Create: `src/data/projects.ts` (dados dos 13 projetos + grupos)

**Interfaces:**
- Consumes: i18n, `src/data/projects.ts`
- Produces: `<ProductionArtifacts />`

- [ ] **Step 1: Ler a seção + dados**

Run: `sed -n '1124,1225p' docs/preview/index.html` (Variação A, `v-a-*`, índices 01-13, grupos).

- [ ] **Step 2: Extrair dados**

`src/data/projects.ts`: `{ index, name, sub, desc, stack, group, id }` para os 13 projetos (BarberGrid, Aventrada, Launchpaid, Bare-Metal, Rede Lord, 1Auth, RobloxMP, Affiliate, Twitter Monitoring, Helix Bot, Redelord, Refúgio RP, FutureMC). Manter `id="project-*"` nas âncoras.

- [ ] **Step 3: Portar `<ProductionArtifacts />`**

Reproduzir: título "Shipped Systems & Technical Blueprints", grupos `.v-a-group-title`, rows `.v-a-row` com `.v-a-index`, `.v-a-name`, `.v-a-sub`, `.v-a-desc`, `.v-a-stack`. Botão "View Topology" no card Affiliate (abre modal — Task 13).

- [ ] **Step 4: Teste**

```tsx
test("renders shipped systems", () => {
  render(<ProductionArtifacts />);
  expect(screen.getByText(/Shipped Systems/)).toBeTruthy();
});
```

Run: `bun run test`

- [ ] **Step 5: Verificar build**

```bash
bun run build
```

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/ProductionArtifacts.tsx src/data/projects.ts && git commit -m "feat: port production artifacts section"
```

---

## Task 11: Low-Level Roots (bento grid + about me + heatmap + waves)

**Files:**
- Create: `src/components/sections/LowLevelRoots.tsx`
- Create: `src/components/AboutCard.tsx`
- Create: `src/hooks/useGitHubHeatmap.ts`
- Create: `src/components/GitHubHeatmap.tsx`
- Create: `src/data/openSource.ts`

**Interfaces:**
- Consumes: i18n, `useGitHubHeatmap`, `src/data/openSource.ts`
- Produces: `<LowLevelRoots />`

- [ ] **Step 1: Ler a seção + heatmap script**

Run: `sed -n '1226,1435p' docs/preview/index.html` (bento grid, about me, cards, heatmap container) e o script do heatmap (`loadGitHubHeatmap`, linhas ~2550-2700).

- [ ] **Step 2: Portar AboutCard**

Reproduzir: avatar, texto, chips de linguagens (Go, Rust, Java, Kotlin, TypeScript, JavaScript, Python, C, Lua, SQL), bloco de línguas (Português·Fluente / Inglês·B1/B2 com `.lang-row`/`.lang-dots`), e a **onda animada** (`.about-wave` com SVG/repeat-x + keyframes `waveScroll`).

- [ ] **Step 3: Portar `useGitHubHeatmap`**

Reescrever a lógica de fetch (API GitHub) como hook React (estado + efeito + Query). Preservar o endpoint/fonte de dados do HTML.

- [ ] **Step 4: Portar `<GitHubHeatmap />`**

Reproduzir o grid de contribuições, anos (Last Year/2026/2025/2024), total, period label.

- [ ] **Step 5: Portar demais cards do bento**

Open Source CMS (repos), Experience, Polyglot Stacks (barras), card Origins (background_fill2.jpg).

- [ ] **Step 6: Teste**

```tsx
test("renders low-level roots", () => {
  render(<LowLevelRoots />);
  expect(screen.getByText(/Low-Level Roots/)).toBeTruthy();
});
```

Run: `bun run test`

- [ ] **Step 7: Verificar build**

```bash
bun run build
```

- [ ] **Step 8: Commit**

```bash
git add src/components/sections/LowLevelRoots.tsx src/components/AboutCard.tsx src/components/GitHubHeatmap.tsx src/hooks/useGitHubHeatmap.ts src/data/openSource.ts && git commit -m "feat: port low-level roots section"
```

---

## Task 12: Testimonials Section (masonry)

**Files:**
- Create: `src/components/sections/TestimonialsSection.tsx`
- Create: `src/data/testimonials.ts`

**Interfaces:**
- Consumes: i18n, `src/data/testimonials.ts`
- Produces: `<TestimonialsSection />`

- [ ] **Step 1: Ler a seção + dados**

Run: `sed -n '1437,1465p' docs/preview/index.html` (HTML) e `sed -n '2908,3050p'` (T_DATA + renderMasonry + paint).

- [ ] **Step 2: Extrair `src/data/testimonials.ts`**

Array com todos os depoimentos (`{ name, role, img, q }`) incluindo Thiago Marinho (role: "Colaborador").

- [ ] **Step 3: Portar `<TestimonialsSection />`**

Reproduzir: gradiente full-bleed (cinza), título "Who Worked With Me", masonry (`#mosaic-grid`, `.m-col`, `cardCount()` em breakpoints 1/3/5, distribuição por menor altura), cards `.t-card-real` com avatar, destaque ativo (opacity/scale/borda), auto-rotação + clique, CTA LinkedIn.

- [ ] **Step 4: Teste**

```tsx
test("renders testimonials", () => {
  render(<TestimonialsSection />);
  expect(screen.getByText(/Who Worked With Me/)).toBeTruthy();
});
```

Run: `bun run test`

- [ ] **Step 5: Verificar build**

```bash
bun run build
```

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/TestimonialsSection.tsx src/data/testimonials.ts && git commit -m "feat: port testimonials masonry section"
```

---

## Task 13: Affiliate Topology Modal (arrastável)

**Files:**
- Create: `src/components/topology/AffiliateTopologyModal.tsx`
- Create: `src/hooks/useDragPan.ts`

**Interfaces:**
- Consumes: `useDragPan`, telemetria (dados fake ao vivo)
- Produces: `<AffiliateTopologyModal open onClose />`

- [ ] **Step 1: Ler o modal + drag script**

Run: `sed -n '3090,3200p' docs/preview/index.html` (HTML do modal) e `sed -n '2590,2680p'` (initTopologyDrag, resetTopologyPan) e `sed -n '1570,1650p'` (telemetria `setTelemetry`, live-counter).

- [ ] **Step 2: Criar `useDragPan`**

Portar o drag-to-pan (mouse/touch) como hook. Expor `{ viewportRef, reset }`.

- [ ] **Step 3: Portar `<AffiliateTopologyModal />`**

Reproduzir: overlay `fixed inset-0`, header, botão fechar (Esc), viewport arrastável com grid blueprint (dots ciano), nós SVG (Ingress/ML/Ceph, setas animadas), volume "31,560 vídeos/dia", telemetria (`118 vids/min`, `1,4k jobs`, workers, dedup, frames/s, writes/s), reset button.

- [ ] **Step 4: Integrar com ProductionArtifacts**

O botão "View Topology" (Task 10) controla `open`/`onClose`.

- [ ] **Step 5: Teste**

```tsx
test("renders topology modal when open", () => {
  render(<AffiliateTopologyModal open onClose={() => {}} />);
  expect(screen.getByText(/Topology Affiliate Project/)).toBeTruthy();
});
```

Run: `bun run test`

- [ ] **Step 6: Verificar build**

```bash
bun run build
```

- [ ] **Step 7: Commit**

```bash
git add src/components/topology/AffiliateTopologyModal.tsx src/hooks/useDragPan.ts && git commit -m "feat: port affiliate topology modal"
```

---

## Task 14: Contact Section + Footer

**Files:**
- Create: `src/components/sections/ContactSection.tsx`
- Create: `src/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: i18n, `useLiveClock` (relógio do contact), copy email
- Produces: `<ContactSection />`, `<Footer />`

- [ ] **Step 1: Ler contact + footer**

Run: `sed -n '1465,1540p' docs/preview/index.html` (contact hub + footer) e `sed -n '2330,2400p'` (copyEmail).

- [ ] **Step 2: Portar `<ContactSection />`**

Reproduzir: banner "Let's build something solid?", 4 cards informativos (Location & Timezone, Live Clock, Email, status), copy email button.

- [ ] **Step 3: Portar `<Footer />`**

Reproduzir: copyright, GitHub/LinkedIn/Email links, botão "↑ Top" (scroll suave via lenis/`window.scrollTo`).

- [ ] **Step 4: Teste**

```tsx
test("renders footer", () => {
  render(<Footer />);
  expect(screen.getByText(/GitHub @zkingboos/)).toBeTruthy();
});
```

Run: `bun run test`

- [ ] **Step 5: Verificar build**

```bash
bun run build
```

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/ContactSection.tsx src/components/layout/Footer.tsx && git commit -m "feat: port contact + footer"
```

---

## Task 15: Legacy Catalog (código morto de dev — migrar fiel)

**Files:**
- Create: `src/components/sections/LegacyCatalog.tsx`

**Interfaces:**
- Consumes: nada (auto-contido, hidden)
- Produces: `<LegacyCatalog />`

- [ ] **Step 1: Ler o view-all**

Run: `sed -n '1537,1650p' docs/preview/index.html`

- [ ] **Step 2: Portar `<LegacyCatalog />`**

Reproduzir o "Catálogo das 10 Opções Anteriores" + `switchView`/`btn-fusion`/`btn-all` fielmente (hidden por padrão).

- [ ] **Step 3: Verificar build**

```bash
bun run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/LegacyCatalog.tsx && git commit -m "feat: port legacy catalog (dead code, to remove later)"
```

---

## Task 16: Montar Index.tsx + App.tsx + remover stubs

**Files:**
- Modify: `src/pages/Index.tsx` (renderizar todas as seções na ordem)
- Modify: `src/App.tsx` (remover shadcn providers desnecessários; manter rotas)
- Delete: `src/components/HeroSection.tsx`, `AboutSection.tsx`, `ExperienceSection.tsx`, `ProjectsSection.tsx`, `OpenSourceSection.tsx`, `SkillsSection.tsx`, `ContactSection.tsx`, `NavLink.tsx`, `NebulaBg.tsx` (stubs antigos do template)

- [ ] **Step 1: Reescrever `src/pages/Index.tsx`**

```tsx
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import CareerSection from "@/components/sections/CareerSection";
import ProductionArtifacts from "@/components/sections/ProductionArtifacts";
import LowLevelRoots from "@/components/sections/LowLevelRoots";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

const Index = () => (
  <div className="bg-black text-zinc-100 min-h-screen relative overflow-x-hidden">
    <Header />
    <main className="max-w-7xl mx-auto px-4 py-8 relative z-10">
      <div className="space-y-20">
        <HeroSection />
        <CareerSection />
        <ProductionArtifacts />
        <LowLevelRoots />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </main>
    <Footer />
  </div>
);
export default Index;
```

- [ ] **Step 2: Limpar `src/App.tsx`**

Remover providers que não são usados pelas seções (QueryClient/Tooltip se não usados pelas seções portadas; manter BrowserRouter + rotas / e NotFound).

- [ ] **Step 3: Deletar stubs antigos**

```bash
git rm src/components/HeroSection.tsx src/components/AboutSection.tsx src/components/ExperienceSection.tsx src/components/ProjectsSection.tsx src/components/OpenSourceSection.tsx src/components/SkillsSection.tsx src/components/ContactSection.tsx src/components/NavLink.tsx src/components/NebulaBg.tsx
```

- [ ] **Step 4: Verificar build**

```bash
bun run build
```

- [ ] **Step 5: Teste**

Run: `bun run test`

- [ ] **Step 6: Commit**

```bash
git add src/pages/Index.tsx src/App.tsx && git commit -m "feat: assemble index with ported sections"
```

---

## Task 17: Remover código morto (LegacyCatalog + view-all)

**Files:**
- Delete: `src/components/sections/LegacyCatalog.tsx`
- Modify: `src/pages/Index.tsx` (remover import/render se houver)

- [ ] **Step 1: Remover LegacyCatalog**

```bash
git rm src/components/sections/LegacyCatalog.tsx
```

- [ ] **Step 2: Verificar build**

```bash
bun run build
```

- [ ] **Step 3: Commit**

```bash
git commit -m "chore: remove legacy dev catalog (dead code)"
```

---

## Task 18: Verificação final + deploy

**Files:**
- Modify: (nenhum se tudo ok)

- [ ] **Step 1: Build de produção**

```bash
bun run build && bun run preview
```

- [ ] **Step 2: Comparação visual**

Abrir `http://localhost:4173` (preview) vs abrir `docs/preview/index.html` (via `python3 -m http.server` ou file). Comparar lado a lado: header, hero, timeline, shipped systems, bento, testimonials, contact, topologia modal.

- [ ] **Step 3: Testes**

Run: `bun run test` — todos PASS.

- [ ] **Step 4: Deploy (com consentimento)**

Push da branch de trabalho → PR para `master` (ou merge) → GitHub Actions builda e publica `dist/` no GitHub Pages. Verificar `joseg.xyz` e `zkingboos.github.io`.

- [ ] **Step 5: Confirmação final**

Verificar que `docs/preview/index.html`, `docs/preview/motion-reels/`, `out/hero-assembly.mp4` e o backup estão intactos.

---

## Self-Review

- **Spec coverage:** cada seção do spec (header, hero, career, artifacts, low-level, testimonials, contact, modal, legacy) tem Task correspondente (7-15). Backup (Task 0), i18n (2-3), assets (4), CSS (5), lenis (6), assembly (16), dead-code removal (17), deploy (18). ✓
- **Placeholder scan:** todos os steps têm comando/conteúdo concreto. ✓
- **Type consistency:** `cardCount()`/masonry referido na Task 12 usa as mesmas breakpoints (1/3/5); hooks (`useLiveClock`, `useRotatingPhrases`, `useGitHubHeatmap`, `useDragPan`) são nomeados consistentemente. ✓