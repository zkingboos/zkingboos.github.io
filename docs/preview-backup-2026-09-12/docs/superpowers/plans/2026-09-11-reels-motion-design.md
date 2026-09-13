# Reels Motion Design Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir e renderizar programaticamente 3 variações de vídeos para Reels verticais (1080x1920 a 30fps) em MP4 com Remotion e Tailwind CSS, utilizando os assets e identidade visual de `docs/preview/index.html` sem alterar o arquivo original.

**Architecture:** Projeto isolado em `motion-reels/` com Remotion e Tailwind CSS. Componentes compartilhados (`Background`, `AvatarCard`, `TechGrid`, `TerminalBox`, `CrtOverlay`) compõem 3 composições de vídeo independentes registradas no `Root.tsx` e renderizadas via CLI com Chromium headless e FFmpeg local.

**Tech Stack:** React 19 / 18, Remotion, @remotion/tailwind, Tailwind CSS, Lucide React, FFmpeg.

---

### Task 1: Setup Remotion Project & Configuration

**Files:**
- Create: `motion-reels/package.json`
- Create: `motion-reels/remotion.config.ts`
- Create: `motion-reels/tailwind.config.js`
- Create: `motion-reels/postcss.config.js`
- Create: `motion-reels/src/index.css`
- Create: `motion-reels/src/index.ts`

- [ ] **Step 1: Criar o package.json em `motion-reels/`**
- [ ] **Step 2: Criar as configurações do Remotion e Tailwind CSS com a paleta cósmica**
- [ ] **Step 3: Instalar as dependências via npm**
- [ ] **Step 4: Verificar instalação executando `npx remotion versions`**

---

### Task 2: Shared Visual Components

**Files:**
- Create: `motion-reels/src/shared/Background.tsx`
- Create: `motion-reels/src/shared/CrtOverlay.tsx`
- Create: `motion-reels/src/shared/AvatarCard.tsx`
- Create: `motion-reels/src/shared/TechGrid.tsx`
- Create: `motion-reels/src/shared/TerminalBox.tsx`

- [ ] **Step 1: Implementar `Background.tsx` com radial glow cósmico e grid sutil**
- [ ] **Step 2: Implementar `CrtOverlay.tsx` com scanlines cibernéticas**
- [ ] **Step 3: Implementar `AvatarCard.tsx` com a foto do GitHub e badge de zkingboos**
- [ ] **Step 4: Implementar `TechGrid.tsx` com ícones vetoriais (Go, Java, Kotlin, TS, Docker, K8s)**
- [ ] **Step 5: Implementar `TerminalBox.tsx` com animação de digitação e status `Available Globally`**

---

### Task 3: Composition 1 — Autoridade & Engenheiro Sênior (`Reel1Authority`)

**Files:**
- Create: `motion-reels/src/compositions/Reel1Authority.tsx`

- [ ] **Step 1: Implementar a Cena 1 (0-4s): Gancho com 14 Anos de Experiência e entrada do Avatar**
- [ ] **Step 2: Implementar a Cena 2 (4-11s): Pilares de alta performance e grid de tecnologias com spring physics**
- [ ] **Step 3: Implementar a Cena 3 (11-18s): Terminal interativo, status global e botão CTA `Get in Touch`**

---

### Task 4: Composition 2 — Showcase Visual & Cosmic UI (`Reel2Visual`)

**Files:**
- Create: `motion-reels/src/compositions/Reel2Visual.tsx`

- [ ] **Step 1: Implementar a Cena 1 (0-4s): System Boot e entrada com optical blur**
- [ ] **Step 2: Implementar a Cena 2 (4-10s): Tilt 3D, carrossel dinâmico e streaming arrows**
- [ ] **Step 3: Implementar a Cena 3 (10-16s): Cartela de encerramento da marca José Gabriel**

---

### Task 5: Composition 3 — Teaser Rápido & CTA Direto (`Reel3Teaser`)

**Files:**
- Create: `motion-reels/src/compositions/Reel3Teaser.tsx`

- [ ] **Step 1: Implementar a Cena 1 (0-3s): Tipografia gigante de alto impacto**
- [ ] **Step 2: Implementar a Cena 2 (3-8s): Sequência rápida com pop-up das stacks**
- [ ] **Step 3: Implementar a Cena 3 (8-12s): Chamada direta para contratação/contato**

---

### Task 6: Root Composition & Render Script

**Files:**
- Create: `motion-reels/src/Root.tsx`
- Create: `motion-reels/render.sh`

- [ ] **Step 1: Registrar as 3 composições verticais (1080x1920) no `Root.tsx`**
- [ ] **Step 2: Criar o script `render.sh` com permissão de execução para renderizar os 3 vídeos em MP4**

---

### Task 7: Renderização e Verificação Final

**Files:**
- Output: `motion-reels/out/reel1-autoridade.mp4`
- Output: `motion-reels/out/reel2-visual.mp4`
- Output: `motion-reels/out/reel3-teaser.mp4`

- [ ] **Step 1: Executar a renderização das 3 composições via Remotion CLI**
- [ ] **Step 2: Verificar a integridade dos arquivos gerados com `ffprobe` (resolução 1080x1920 e codec h264)**
- [ ] **Step 3: Confirmar que `docs/preview/index.html` não sofreu nenhuma alteração**
