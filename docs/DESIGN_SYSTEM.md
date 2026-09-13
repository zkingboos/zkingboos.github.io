# 🎨 Design System & Visual Specification — zkingboos.github.io

This document defines the visual grammar, authoritative color tokens, typography rules, component patterns, and strict stylistic policies of the portfolio.

---

## 1. Design Philosophy: Cyber-Industrial Cosmic Obsidian

The design aesthetic is anchored in **deep space obsidian**, **cyber-industrial precision**, and **tactile feedback**:
- **Information Density**: High-signal, low-fluff engineering layout. Real technical metrics over vague buzzwords.
- **Glassmorphism & Depth**: Multi-layer frosted glass panels (`backdrop-blur-xl`, `bg-[#06070b]/90`, `bg-[#070c16]/80`) floating above the cosmic backdrop.
- **Subtle Glow & Tactile Response**: Hover states illuminate borders in Electric Cyan with soft ambient drop-shadows.

---

## 2. Color Palette & Design Tokens

### 2.1. Authoritative Tokens
The site palette is strictly defined in `:root` and mirrored in Tailwind configurations:

| Token Name | Hex / RGBA | Role / Usage |
| :--- | :--- | :--- |
| `--primary-cyan` | `#09a6d6` | **Primary Brand Accent**: Active badges, links, LED pings, buttons, highlighted code. |
| `--primary-glow` | `rgba(9, 166, 214, 0.38)` | Ambient hover glow and `:target` navigation pulse. |
| `--secondary-azure` | `#0177b1` | Secondary gradient stops, subtle borders, interactive states. |
| `--secondary-cobalt`| `#00539c` | Deep azure backdrop accents. |
| `--cosmic-base` | `#06070b` | **Universal Background (Void)**: Body background and card interiors. |
| `--cosmic-surface` | `#070c16` | **Elevated Surface**: Sticky navigation bar, dropdown menus, modals. |
| `--status-online` | `#10b981` | Emerald LED for live system health and contribution squares. |
| `--status-busy` | `#f59e0b` | Amber warning badges. |
| `--zinc-terminal` | `#18181b` / `#27272a` | Structural borders, neutral chip backgrounds, subtle dividers. |

```css
:root {
  --primary-cyan: #09a6d6;
  --primary-glow: rgba(9, 166, 214, 0.38);
  --secondary-azure: #0177b1;
  --secondary-cobalt: #00539c;
  --cosmic-base: #06070b;
  --cosmic-surface: #070c16;
}
```

### 2.2. Explicit Anti-Purple Mandate
> [!CAUTION]
> **STRICT BAN ON PURPLE / VIOLET PALETTES**  
> The authoritative primary color is **Electric Cyan (`#09a6d6`)**. **Never** introduce `#a855f7`, `purple-500`, `violet-600`, or related purple hues into this design system.

---

## 3. Strict Zero-Emoji Policy

> [!IMPORTANT]
> **ABSOLUTE ZERO EMOJIS RULE**  
> Under NO circumstances may standard Unicode emojis (e.g. 🚀, 🔥, ⚡, 💻, 📌, 🇧🇷, 🇺🇸) be inserted into HTML, JS, CSS, or i18n dictionaries. Use clean vector SVGs or technical monospace ASCII symbols (`->`, `·`, `[ ]`, `//`, `↓`).

---

## 4. Component Patterns & Rules

### 4.1. Clean Natural Avatar Specification
- The user's photo must be rendered cleanly with its natural border:
  ```html
  <img src="..." class="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-zinc-700/80 bg-zinc-950/80 backdrop-blur-md shadow-2xl group-hover:border-[#09a6d6] transition-colors">
  ```
- **Prohibited Artificial Overlays**: Do NOT add corner crosshairs (`+`), artificial dark bottom vignettes, text overlays (`SYS_ENG`), or outer glow blur layers. Keep the photo natural and unpolluted.

### 4.2. Top Experience Tag (Zero-Dot Typography)
- The top bar displays pure typography without pulsing dots:
  ```html
  <span class="text-zinc-200 font-bold tracking-wide font-mono" data-i18n="hero_experience_tag">
    14 ANOS DE EXPERIÊNCIA EM ENGENHARIA DE SOFTWARE
  </span>
  ```

### 4.3. Direct Link to Contact Hub
- The "Links & Profiles" button acts as an anchor that triggers a smooth Lenis scroll to `#contact-hub` at the bottom of the page:
  ```html
  <a href="#contact-hub" class="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#070c16]/90 hover:bg-[#0b1626] border border-[rgba(9,166,214,0.35)] hover:border-[#09a6d6] text-zinc-100 font-mono text-xs font-semibold backdrop-blur-xl shadow-xl transition-all">
    <svg class="w-3.5 h-3.5 text-[#09a6d6] ...">...</svg>
    <span data-i18n="hero_links_btn">Links & Profiles</span>
    <span class="text-zinc-500 group-hover:text-[#09a6d6] text-xs">↓</span>
  </a>
  ```

### 4.4. Full-Width 3D Cylindrical Tools Marquee
- Positioned immediately above the Career Timeline.
- Employs double-edge gradient masks (`mask-image`) and deep horizon shadows to simulate tools wrapping around a 3D cylinder.
- Features 20 core tools in an endless marquee that pauses on hover.

### 4.5. Career Milestone Card Headers
- Header must strictly display `[Role] Company Name` + `Period`:
  ```html
  <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-zinc-800/70">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-0.5 rounded-md bg-[#09a6d6]/10 border border-[#09a6d6]/30 text-[#09a6d6] text-xs font-mono font-bold" data-i18n="<role_key>">
        Co-Founder
      </span>
      <span class="text-white font-bold text-sm sm:text-base">BarberGrid</span>
    </div>
    <span class="text-xs font-mono text-zinc-400" data-i18n="<period_key>">Jun 2026 — Present</span>
  </div>
  ```
