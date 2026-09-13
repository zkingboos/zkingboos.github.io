# Especificação de Design: Reels Motion Design (Remotion)

**Data:** 2026-09-11  
**Status:** Validado pelo Usuário  
**Objetivo:** Criar 3 variações de vídeos para Reels/TikTok/Shorts (1080x1920, 9:16) com motion design profissional gerados programaticamente via terminal usando Remotion, baseando-se estritamente na identidade visual, textos e assets de `docs/preview/index.html` (sem alterar o arquivo original).

---

## 1. Regras e Restrições Críticas

1. **`index.html` Intacto:** O arquivo `docs/preview/index.html` é estritamente **somente leitura**. Nenhuma modificação será realizada nele.
2. **Isolamento do Projeto:** Todo o código do projeto de motion ficará contido dentro do diretório `motion-reels/`.
3. **Resolução e Formato:** 1080 × 1920 pixels (9:16 vertical), 30 fps, saída em arquivo `.mp4` codificado em H.264.

---

## 2. Identidade Visual e Assets (Extraídos de `index.html`)

* **Paleta de Cores Cósmica:**
  * Base de fundo: `--cosmic-base` (`#06070b`)
  * Superfície cards: `--cosmic-surface` (`#070c16`) e vidro translúcido (`rgba(7, 12, 22, 0.85)`)
  * Destaque Neon Ciano: `--primary-cyan` (`#09a6d6`)
  * Acentos Retro: `--retro-green` (`#00ff66`) e `--retro-amber` (`#ffb000`)
  * Borda de cards: `#27272a` (zinc-800) e `rgba(9, 166, 214, 0.35)`
* **Tipografia:**
  * Display / Títulos: *Space Grotesk*
  * Impacto / Números: *Archivo*
  * Terminal / Código / Badges: *JetBrains Mono*
  * Corpo de texto: *Inter*
* **Assets de Mídia:**
  * Foto de perfil (Avatar): `https://avatars.githubusercontent.com/u/42500187?v=4`
  * Ícones das Tecnologias: SVGs oficiais de Go, Java, Kotlin, TypeScript, JavaScript, Docker, Kubernetes, etc.
* **Metadados do Profissional:**
  * Nome: José Gabriel
  * Tag: AKA zkingboos
  * Cargo: Software Engineer (14 Anos de Experiência)
  * Áreas: Low-level performance, otimização de custos de nuvem, sistemas resilientes on-premise, microsserviços.
  * Localização / Status: Brazil · Available Globally
  * Contato: `josegmelo.dev@gmail.com`

---

## 3. Arquitetura do Projeto `motion-reels/`

```
motion-reels/
├── package.json              # remotion, @remotion/tailwind, react, react-dom
├── tailwind.config.js        # Configurado com a paleta cósmica e fontes
├── remotion.config.ts        # Render config (1080x1920, H.264, Chromium headless)
├── src/
│   ├── Root.tsx              # Registro das 3 Composições Remotion
│   ├── shared/
│   │   ├── Background.tsx    # Fundo cósmico dinâmico, grid sutil e ambient glow
│   │   ├── AvatarCard.tsx    # Card do perfil com borda ciano e glow pulsante
│   │   ├── TechGrid.tsx      # Exibição das stacks e badges flutuantes
│   │   ├── TerminalBox.tsx   # Caixa de terminal retrô com cursor piscante
│   │   └── CrtOverlay.tsx    # Efeito sutil de scanlines e reflexo CRT
│   └── compositions/
│       ├── Reel1Authority.tsx # Variação 1: Portfólio & Engenheiro Sênior (18s / 540 frames)
│       ├── Reel2Visual.tsx    # Variação 2: Showcase Visual Cosmic UI (16s / 480 frames)
│       └── Reel3Teaser.tsx    # Variação 3: Teaser Dinâmico / CTA Rápido (12s / 360 frames)
├── render.sh                 # Script shell para renderizar todos os vídeos
└── out/                      # Diretório de saída dos vídeos .mp4
    ├── reel1-autoridade.mp4
    ├── reel2-visual.mp4
    └── reel3-teaser.mp4
```

---

## 4. Detalhamento das 3 Variações de Reels

### 🎬 Variação 1: Autoridade & Engenheiro Sênior (`Reel1Authority`)
* **Duração:** 18 segundos (540 frames a 30fps)
* **Objetivo:** Estabelecer autoridade técnica, destacar a bagagem de 14 anos e as principais stacks de alta performance.
* **Estrutura de Cenas:**
  1. *Cena 1 (0s - 4s / frames 0-120):* O gancho. Entrada de impacto com spring physics: Badge `"14 ANOS DE EXPERIÊNCIA EM ENGENHARIA DE SOFTWARE"` + Revelação do Avatar e `"José Gabriel (AKA zkingboos)"`.
  2. *Cena 2 (4s - 11s / frames 120-330):* Os pilares técnicos. Entram cards flutuantes:
     * Card 1: Baixa latência e otimização de sistemas
     * Card 2: Arquitetura de microsserviços e resiliência
     * Grid de Stacks: Ícones em movimento (Go, Java, Kotlin, Docker, Kubernetes).
  3. *Cena 3 (11s - 18s / frames 330-540):* Fechamento & CTA. Caixa de terminal com digitação automática:
     `> status: Available Globally`  
     Botão com brilho pulsante ciano: `"Get in Touch: josegmelo.dev@gmail.com"`.

### 🎨 Variação 2: Showcase Visual & Estética Cosmic UI (`Reel2Visual`)
* **Duração:** 16 segundos (480 frames a 30fps)
* **Objetivo:** Foco estético cinematográfico no design escuro, luzes neon e elementos visuais da interface.
* **Estrutura de Cenas:**
  1. *Cena 1 (0s - 4s / frames 0-120):* System Boot com CRT Scanlines. Logo e textos surgindo com optical blur staggered glide.
  2. *Cena 2 (4s - 10s / frames 120-300):* Perspectiva 3D tilt sutil. Desfile dinâmico dos componentes de interface, streaming arrows animados e badges de tecnologias.
  3. *Cena 3 (10s - 16s / frames 300-480):* Cartela final elegante: *"Engenharia de Software de Alta Performance"* com link para o portfólio.

### ⚡ Variação 3: Teaser Rápido & CTA Direto (`Reel3Teaser`)
* **Duração:** 12 segundos (360 frames a 30fps)
* **Objetivo:** Vídeo rápido de alta energia no estilo TikTok/Reels focado em conversão e contato.
* **Estrutura de Cenas:**
  1. *Cena 1 (0s - 3s / frames 0-90):* Texto de gancho de alto contraste: *"PRECISA DE UM ENGENHEIRO DE SISTEMAS SÊNIOR?"*.
  2. *Cena 2 (3s - 8s / frames 90-240):* Pop-ups em efeito bounce acelerado das stacks (`Go`, `Java`, `Infra`, `14 Anos de Exp`).
  3. *Cena 3 (8s - 12s / frames 240-360):* CTA imediato: `"Vamos conversar? Acesso ao GitHub e Contato"` com dados diretos na tela.

---

## 5. Sistema de Motion & Física

* **Spring Parameters:**
  * Entradas de cards: `{ mass: 0.6, damping: 14, stiffness: 120 }`
  * Efeito pop em badges: `{ mass: 0.4, damping: 10, stiffness: 180 }`
* **Transições de Texto:**
  * Optical blur interpolado de `12px` para `0px` concomitante com `translateY(28px -> 0px)` e `opacity(0 -> 1)`.
* **Renderização:**
  * Utiliza Chromium headless via Remotion CLI integrado com FFmpeg local (`/usr/bin/ffmpeg`).
  * Pipeline automatizado via script `render.sh`.

---

## 6. Verificação e Critérios de Sucesso

1. Todos os 3 vídeos (`out/reel1-autoridade.mp4`, `out/reel2-visual.mp4`, `out/reel3-teaser.mp4`) gerados com sucesso na resolução 1080x1920.
2. Formato MP4 válido e reproduzível.
3. Arquivo `docs/preview/index.html` permanece inalterado.
