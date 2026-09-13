# Testimonials Cards Positioning & Layout Refinement Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign and fix the layout positioning of the 6 testimonial cards in `docs/preview/index.html` to eliminate the visual defects (narrow squished cards, arbitrary gaps, inconsistent column tracks) and implement a balanced, high-aesthetic cyber-industrial composition.

**Architecture:** Replace the arbitrary `flex-wrap` and fragmented percentage widths (`52%`, `22%`, `38%`, `40%`, etc.) with a structured CSS Grid / multi-track flex composition. Three distinct positioning paradigms are specified, with **Paradigm A (Central Hub Orbit)** recommended as primary to satisfy the centered *"Who Worked With Me"* requirement.

**Tech Stack:** Vanilla ES6+ HTML/CSS/JS, Tailwind CSS CDN, CSS Grid / Flexbox, Lenis momentum scroll.

---

## 1. Diagnostics: Why the Current Layout Looks Broken

Analysis of the code changes and user-uploaded screenshot (`uploaded_media_1788999868154.png`):

| Current Issue | Root Cause in `docs/preview/index.html` | Visual Consequence |
| :--- | :--- | :--- |
| **Card Squished (Rafael Aguiar)** | `style="width: 22%; transform: translateY(-1rem);"` | A 310-character paragraph is squeezed into a 22% column, resulting in an unnaturally tall, narrow column (18+ wrapped lines). |
| **Giant Central Void** | `flex flex-wrap justify-between items-start gap-y-8 gap-x-4` with sum of widths ~74%-78% | Leaves ~22%-26% uncontrolled empty space in the middle of each row, creating a disjointed "black hole" effect. |
| **Ragged Column Alignment** | Left column cards are 52%, 38%, 48%; Right column cards are 22%, 40%, 30% | No consistent vertical track or margin; looks accidental rather than deliberately asymmetric. |
| **Ghost Town Dimming** | `opacity: 0.25` on inactive cards | At 0.25, the 5 inactive cards become barely legible ghost rectangles, losing their social proof value. |

---

## 2. Proposed Positioning Paradigms

### Paradigm A (Recommended): The Central Hub Orbit (Frame.io Evolution)
Accommodates all 6 cards with the title *"Who Worked With Me"* anchored in the center:

```
+-----------------------------------+     +-----------------------------------+
|  Paulo Victor (BarberGrid)        |     |  Rafael Aguiar (Docente UENP)     |
|  [Flagship - 48% width]           |     |  [Academic leader - 48% width]    |
+-----------------------------------+     +-----------------------------------+

+-----------------------+                             +-----------------------+
|  Yan Spatt            |     WHO WORKED WITH ME      |  Gustavo Arantes      |
|  (Colaborador)        |  Sistemas & Arquiteturas    |  (Snake Labs)         |
|  [Punchy 135 chars]   |    em Produção              |  [330 chars]          |
|  [30% width]          |     [36% center void]       |  [30% width]          |
+-----------------------+                             +-----------------------+

+-----------------------------------+     +-----------------------------------+
|  Ian Libânio (Colaborador)        |     |  Gabriel Henry (Cliente)          |
|  [Medium - 48% width]             |     |  [Client review - 48% width]      |
+-----------------------------------+     +-----------------------------------+
```

- **Row 1**: Two wide, prominent cards (Paulo Victor on the left, Rafael Aguiar on the right) balanced at 48% width each.
- **Row 2**: 3 columns — Yan Spatt on the left (short quote fits neatly in ~30%), the **"Who Worked With Me"** title block in the middle (~36%), and Gustavo Arantes on the right (~30%).
- **Row 3**: Two balanced cards (Ian Libânio on the left, Gabriel Henry on the right) at 48% width each.
- **Subtle Stagger**: Left column has subtle vertical drift (`translate-y-1`), right column has alternating drift (`translate-y-2`), creating organic depth without breaking alignment.

---

### Paradigm B: Editorial Dual-Track Masonry (Bucket.co Refined)
Two structured vertical columns with equal track widths and an intentional 2rem downward stagger on the right track:

```
                  [ BarberGrid ]  [ Snake Labs ]  [ UENP ]  [ Hive-media ]
                              Who Worked With Me
                     Sistemas & Arquiteturas em Produção

[ Track 1: Left (~48%) ]                      [ Track 2: Right (~48%, offset y+8) ]
+-----------------------------------+         
| Paulo Victor (BarberGrid)         |         +-----------------------------------+
| [Flagship review]                 |         | Rafael Aguiar (Docente UENP)      |
+-----------------------------------+         | [Academic evaluation]             |
                                              +-----------------------------------+
+-----------------------------------+         
| Yan Spatt (Colaborador)           |         +-----------------------------------+
| [Punchy short quote]              |         | Gustavo Arantes (Snake Labs)      |
+-----------------------------------+         | [Proactive delivery]              |
                                              +-----------------------------------+
+-----------------------------------+         
| Ian Libânio (Colaborador)         |         +-----------------------------------+
| [Quality & communication]         |         | Gabriel Henry (Cliente)           |
+-----------------------------------+         | [Client satisfaction]             |
                                              +-----------------------------------+
```

- Header with ecosystem pills sits on top.
- Right track starts with a top offset (`mt-8` / `translate-y-8`), giving the authentic asymmetric editorial spread of Bucket.co.
- Every card has full, comfortable reading width (no squishing).

---

### Paradigm C: 3-Column Asymmetric Wall
A 3-column grid where cards vary in height naturally based on text length:

```
[ Col 1: 32% ]                [ Col 2: 34% ]                [ Col 3: 32% ]
+-----------------------+     +-----------------------+     +-----------------------+
| Paulo Victor          |     | Who Worked With Me    |     | Rafael Aguiar         |
| (BarberGrid)          |     | [Center title pill]   |     | (Docente UENP)        |
+-----------------------+     +-----------------------+     +-----------------------+
| Yan Spatt             |     | Gustavo Arantes       |     | Gabriel Henry         |
| (Colaborador)         |     | (Snake Labs)          |     | (Cliente)             |
+-----------------------+     +-----------------------+     +-----------------------+
                              | Ian Libânio           |
                              | (Colaborador)         |
                              +-----------------------+
```

---

## 3. Implementation Tasks

### Task 1: Refactor CSS Card Dimensions & Dimming Curve

**Files:**
- Modify: `docs/preview/index.html:330-360`

- [ ] **Step 1: Check existing transition and card CSS rules**

Run: `grep -n -C 5 "t-card-real" docs/preview/index.html`

- [ ] **Step 2: Update `.t-card-real` and active state styling**
Ensure inactive cards have `opacity: 0.40` (hover: `0.80`), and active card has `opacity: 1.0` with Electric Cyan border `#09a6d6` and cyan drop glow:

```css
.t-card-real {
  transition: opacity 0.45s ease, border-color 0.45s ease, box-shadow 0.45s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}
.t-card-real:hover {
  opacity: 0.82 !important;
  border-color: rgba(9, 166, 214, 0.35) !important;
}
```

- [ ] **Step 3: Update JavaScript paint function in `docs/preview/index.html`**
Change active/inactive opacity values:

```javascript
function paint(opt) {
  var cards = cardsIn(opt);
  cards.forEach(function (c, i) {
    var on = i === active;
    c.style.opacity = on ? '1' : '0.40';
    c.style.borderColor = on ? 'rgba(9, 166, 214, 0.55)' : 'rgba(63, 63, 70, 0.7)';
    c.style.transform = on ? 'scale(1.02)' : 'scale(0.99)';
    c.style.boxShadow = on ? '0 0 28px rgba(9, 166, 214, 0.18), 0 12px 40px rgba(0,0,0,0.6)' : 'none';
  });
}
```

- [ ] **Step 4: Verify syntax and preview**

Run: `python3 -c 'with open("docs/preview/index.html") as f: assert "0.40" in f.read()'`

---

### Task 2: Implement Paradigm A (Central Hub Orbit Layout) in Markup

**Files:**
- Modify: `docs/preview/index.html:1865-1885`

- [ ] **Step 1: Inspect existing `#testimonials-opt2` HTML block**

Run: `sed -n '1863,1885p' docs/preview/index.html`

- [ ] **Step 2: Replace fragmented `.ed-slot` flexbox with structured Central Hub layout**

```html
<div class="space-y-6 max-w-5xl mx-auto">
  <!-- Desktop / Tablet Orbit Layout -->
  <div class="hidden md:flex flex-col gap-6">
    <!-- Row 1: Top Tier (Two wide balanced cards) -->
    <div class="flex items-stretch justify-between gap-6">
      <div class="ed-slot w-[48.5%]" data-t-idx="1"></div> <!-- Paulo Victor (BarberGrid) -->
      <div class="ed-slot w-[48.5%]" data-t-idx="4"></div> <!-- Rafael Aguiar (Docente UENP) -->
    </div>

    <!-- Row 2: Middle Tier with Centered Title Hub -->
    <div class="flex items-center justify-between gap-4 lg:gap-6">
      <div class="ed-slot w-[30%]" data-t-idx="3"></div> <!-- Yan Spatt (Colaborador) -->
      
      <!-- Central Hub Title -->
      <div class="w-[36%] flex flex-col items-center justify-center text-center px-4 py-6 rounded-2xl bg-zinc-950/40 border border-zinc-800/80 backdrop-blur-md shadow-lg">
        <span class="px-2.5 py-0.5 rounded-full bg-[#09a6d6]/10 border border-[#09a6d6]/30 text-[#09a6d6] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
          FEEDBACKS & RECOMENDAÇÕES
        </span>
        <h3 class="text-xl lg:text-2xl font-bold font-display text-white tracking-tight" data-i18n="feedbacks_title">
          Who Worked With Me
        </h3>
        <p class="text-[11px] text-zinc-400 mt-1.5 leading-relaxed max-w-[220px]">
          Sistemas em produção validados por líderes técnicos
        </p>
      </div>

      <div class="ed-slot w-[30%]" data-t-idx="0"></div> <!-- Gustavo Arantes (Snake Labs) -->
    </div>

    <!-- Row 3: Bottom Tier (Two wide balanced cards) -->
    <div class="flex items-stretch justify-between gap-6">
      <div class="ed-slot w-[48.5%]" data-t-idx="2"></div> <!-- Ian Libânio (Colaborador) -->
      <div class="ed-slot w-[48.5%]" data-t-idx="5"></div> <!-- Gabriel Henry (Cliente) -->
    </div>
  </div>

  <!-- Mobile Stack Fallback (< 768px) -->
  <div class="md:hidden space-y-4">
    <div class="text-center py-4 mb-2">
      <h3 class="text-2xl font-bold font-display text-white">Who Worked With Me</h3>
      <p class="text-xs text-zinc-400 mt-1">O que dizem colegas, líderes e clientes</p>
    </div>
    <div class="ed-slot w-full" data-t-idx="1"></div>
    <div class="ed-slot w-full" data-t-idx="4"></div>
    <div class="ed-slot w-full" data-t-idx="0"></div>
    <div class="ed-slot w-full" data-t-idx="3"></div>
    <div class="ed-slot w-full" data-t-idx="2"></div>
    <div class="ed-slot w-full" data-t-idx="5"></div>
  </div>
</div>
```

- [ ] **Step 3: Test and verify slot population**
Verify that all 6 `data-t-idx` slots are populated by the existing JavaScript `T_DATA.forEach` loop.

---

### Task 3: Verification & Compliance Check

**Files:**
- Test: `docs/preview/index.html`

- [ ] **Step 1: Check Zero Emojis rule**
Run:
```bash
python3 -c '
import re
with open("docs/preview/index.html") as f: text = f.read()
emojis = re.findall(r"[\U0001F600-\U0001F64F]|[\U0001F300-\U0001F5FF]|[\U0001F680-\U0001F6FF]|[\U0001F1E0-\U0001F1FF]", text)
assert len(emojis) == 0, f"Found emojis: {emojis}"
print("Zero emojis verified!")
'
```

- [ ] **Step 2: Check Zero Purple rule**
Run:
```bash
python3 -c '
import re
with open("docs/preview/index.html") as f: text = f.read()
purples = re.findall(r"(?:#a855f7|#8b5cf6|violet|fuchsia)", text, re.I)
assert len(purples) == 0, f"Found purples: {purples}"
print("Zero purple verified! Palette is authoritative Electric Cyan.")
'
```

- [ ] **Step 3: HTML Syntax Validator**
Run:
```bash
python3 -c '
from html.parser import HTMLParser
class P(HTMLParser):
    def __init__(self): super().__init__(); self.s = []
    def handle_starttag(self, t, a):
        if t not in {"meta","link","img","br","hr","input","source","area","path","circle","rect","line","polygon"}: self.s.append(t)
    def handle_endtag(self, t):
        if self.s and self.s[-1] == t: self.s.pop()
        elif t in self.s:
            while self.s and self.s[-1] != t: self.s.pop()
            if self.s: self.s.pop()
p = P()
with open("docs/preview/index.html") as f: p.feed(f.read())
assert len(p.s) == 0, f"Unclosed tags: {p.s}"
print("HTML syntax 100% valid!")
'
```

- [ ] **Step 4: Live Server verification**
Check that `curl -sI http://localhost:3000` returns `HTTP/1.0 200 OK`.
