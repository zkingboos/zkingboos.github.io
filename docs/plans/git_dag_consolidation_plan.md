# Plano de Implementação: FASE 02 Exclusiva no Git DAG Visualizer (`git log --graph`)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidar a Fase 02 (Carreira & Linha do Tempo) exclusivamente no design **Git DAG Visualizer (`git log --graph`)**, removendo a barra de navegação dos 5 paradigmas e eliminando os layouts alternativos (Bento Grid, Dual-Track Rail, Command Center e Chrono Matrix) para um design limpo, de alto impacto técnico e código enxuto.

**Architecture:** A seção de carreira exibirá diretamente a janela de terminal do Git DAG, contendo os 6 commits e tags históricas (2018—2026), conexões visuais de branches paralelas (Futuremc e Refúgio RP convergindo para os microsserviços da Hive-media e os produtos modernos), além de links rápidos com scroll inercial do Lenis para a seção Shipped Systems. Todo o código JavaScript e estilos auxiliares dos layouts removidos serão expurgados do preview.

**Tech Stack:** HTML5 semântico, Tailwind CSS v4, Vanilla JavaScript, Lenis Smooth Scroll.

---

## User Review Required

> [!IMPORTANT]
> **Decisão de Foco e Simplicidade (Ponytail & Menos Código):**
> * Ao remover os 4 layouts secundários (Bento Grid, Dual-Track Rail, Command Center e Chrono Matrix), removemos mais de 1.200 linhas de código redundante de `scratch/preview/index.html`.
> * A Fase 02 se torna direta, sem abas nem botões de alternância: o visitante já se depara diretamente com o terminal interativo do **Git DAG**, onde cada commit representa um papel de liderança ou engenharia de sistemas com link direto para sua respectiva ficha técnica.

---

## Proposed Changes

### `scratch/preview/index.html`

#### 1. Header da Seção de Carreira (`#section-career`)
- Atualizar a badge de `Interactive Multi-Design` para **`Git DAG // git log --graph`**.
- Manter o período **`2018 — Present`** e a introdução da trajetória.
- **[DELETE]** Remover todo o bloco `<div id="phase2-tabs">` e os controles do switcher de paradigmas (linhas 528 a 565).

```html
<!-- ANTES -->
<span class="px-2 py-0.5 rounded-full bg-[#09a6d6]/10 border border-[#09a6d6]/40 text-[#cbe6eb] text-[10px] font-mono font-medium">Interactive Multi-Design</span>
...
<div class="p-3 sm:p-4 rounded-2xl bg-[#070c16]/95 border border-[#09a6d6]/35 ...">
  <!-- 5 buttons -->
</div>

<!-- DEPOIS -->
<span class="px-2.5 py-0.5 rounded-full bg-[#09a6d6]/10 border border-[#09a6d6]/40 text-[#cbe6eb] text-[10px] font-mono font-medium">Git DAG // git log --graph</span>
```

---

#### 2. Remoção dos 4 Layouts Secundários
- **[DELETE]** Paradigma 1: Bento Grid (`#phase2-view-bento`, ~300 linhas)
- **[DELETE]** Paradigma 2: Dual-Track Rail (`#phase2-view-dual-rail`, ~265 linhas)
- **[DELETE]** Paradigma 4: Command Center (`#phase2-view-command-center`, ~395 linhas)
- **[DELETE]** Paradigma 5: Chrono Matrix (`#phase2-view-chrono-stream`, ~230 linhas)

---

#### 3. Promoção do Git DAG a Contêiner Principal da Seção
- O `#phase2-view-git-dag` deixa de ser uma aba oculta (`hidden`) e passa a ser o bloco direto de apresentação:
  - Janela de terminal estilizada estilo macOS/Linux terminal (`jose@archlinux: ~/career-engine $ git log --graph --all --decorate --stat`).
  - 6 commits completos e estruturados:
    1. `b19e71d` — **BarberGrid** (`feat/barbergrid-saas`, `tag: v2.0-saas`, 2026 — Present)
    2. `f412a0c` — **Rede Lord** (`feat/redelord-minestom-kafka`, `tag: v2.1-kafka-broker`, 2026 — Present)
    3. `8e2024b` — **Hive-media** (`infra/sovereign-bare-metal`, `tag: v1.5-baremetal-cloud`, 2024 — Present)
    4. `c48a19f` — **Hive-media** (`init/microservices-fleet`, `tag: v0.9-affiliate-ml`, 2023 — 2024)
    5. `3b42019` — **Refúgio RP** (`feat/refugio-rp-fivem`, `tag: v0.5-refugio-engine`, 2019 — 2022)
    6. `1a02018` — **Futuremc** (`init/futuremc-genesis`, `tag: v0.1-futuremc-core`, 2018 — 2022)
  - Botões de navegação rápida com scroll inercial suave até os 12 cards em *Shipped Systems*.

---

#### 4. Limpeza do Controlador JavaScript & i18n
- **Remover:**
  - Funções de alternância de abas: `switchPhase2View(viewName)`.
  - Funções de seleção do Command Center: `switchCmdRole(roleKey)`.
  - Funções de realce do Dual-Track: `highlightDualItem(key)`.
  - Chaves de tradução obsoletas: `phase2_switcher_title`, `phase2_switcher_sub`, `phase2_tab_bento`, etc.

---

## Verification Plan

### Automated Tests
```bash
# 1. Validar sintaxe HTML sem tags abertas ou corrompidas
python3 -c "import html.parser; p = html.parser.HTMLParser(); p.feed(open('/home/jose/.gemini/antigravity-cli/brain/8e217752-9320-4fe7-8dcf-fc009f4d0c47/scratch/preview/index.html').read()); print('HTML Syntax: OK!')"

# 2. Testar resposta HTTP do servidor na porta 3000
curl -sI http://localhost:3000 | head -n 5
```

### Manual Verification
1. Abrir `http://localhost:3000`.
2. Verificar que a barra de seleção dos 5 paradigmas não existe mais e que a Fase 02 exibe imediatamente a janela de terminal do **Git DAG**.
3. Checar a renderização dos 6 commits, suas tags, datas e stacks.
4. Clicar em botões como `[👾 Abrir Futuremc Core ↗]` e `[🛡️ Abrir Refúgio RP Engine ↗]` para confirmar o scroll inercial Lenis até os cards detalhados.
5. Testar a alternância de idioma (EN / PT) para confirmar que todos os textos permanecem funcionais.
