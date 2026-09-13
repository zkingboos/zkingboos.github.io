# 🤖 AI Agent Master Handoff Guide — zkingboos.github.io

> **MANDATORY READING FOR ANY AI AGENT WORKING ON THIS REPOSITORY**  
> *This document was created specifically to onboard future AI agents (Cursor, Claude, Copilot, Antigravity, etc.) into the codebase with complete context, historical decisions, and inviolable constraints.*

---

## 1. Executive Context & User Profile

- **Owner**: José Gabriel (Online handle: `zkingboos`)
- **Domain**: [`https://joseg.xyz`](https://joseg.xyz)
- **Role**: Software Engineer & Co-Founder specializing in Distributed Systems, Low-Level Concurrency, Bare-Metal Infrastructure, and High-Throughput APIs.
- **Trajectory**: Programming self-taught since **age 8** (14 years of software engineering experience, spanning 2012/2013 to 2026).
- **User Demands & Communication Style**:
  - The user operates with high velocity ("mete marcha", "vamo vamo").
  - Prefers direct, concrete execution over long theoretical monologues.
  - Values **rigorous visual precision**, **clean code**, and **strict adherence to constraints**.
  - Rejects fluff, placeholder text, and unnecessary complexity.

---

## 2. Inviolable Operational Rules (Non-Negotiable)

When executing any task on this project, the AI agent **MUST** enforce the following rules:

### Rule 1: Absolute Zero Emojis Policy
- **Directive**: Emojis are strictly banned across the entire repository (HTML, JS, CSS, and i18n dictionaries).
- **Rationale**: The user explicitly stated: *"EU quero que você remova TODOS os emojis do site, não gosto deles."*
- **Allowed**: Clean vector SVGs (stroke 2, round caps) or technical monospace ASCII (`->`, `·`, `[ ]`, `//`).

### Rule 2: Electric Cyan Palette Only (No Purple / Violet)
- **Directive**: The authoritative primary color is **Electric Cyan (`#09a6d6`)** with cosmic obsidian surfaces (`#06070b`, `#070c16`).
- **Rationale**: A purple palette was tested during a previous session from an uploaded photo reference, but the user explicitly commanded: *"aqui você não deve colocar a cor como roxo, deixe do jeito que estava antes"* (Do NOT use purple, leave it as it was before).
- **Prohibited**: Do NOT use `#a855f7`, `purple-500`, `violet-600`, or related purple shades.

### Rule 3: Mobile Avatar Top-Right Alignment
- **Directive**: On mobile devices (`< 640px`), the avatar is rendered on the **top-right** next to the user's Name ("José Gabriel") and Title ("Software Engineer"). On desktop (`sm:` and above), the avatar is rendered on the left.
- **Structure**:
  - Desktop avatar: `<div class="hidden sm:block ...">`
  - Mobile avatar: `<div class="sm:hidden relative group shrink-0 mt-0.5">` inside `<div class="flex items-start justify-between gap-3 w-full">`.

### Rule 4: Clean Career Milestone Headers
- **Directive**: The header of each of the 6 Career Milestone cards must show **ONLY** the role badge and the company name on the left, and the period on the right.
- **Example**: `[Co-Founder] BarberGrid` | `Jun 2026 — Present`.
- **Prohibited**: Do NOT add category pills (such as `SaaS Platform`, `High-Concurrency Core`, `Bare-Metal Infrastructure`).

### Rule 5: Seamless Section Transition (No "PHASE 02" Badge or Intro Break)
- **Directive**: The transition between the Hero section and the Career section is seamless.
- **Prohibited**: Do NOT reintroduce the badge `PHASE 02 // CAREER & TIMELINE` or the heavy horizontal divider line (`border-b border-zinc-800/80 pb-16`), or the awkward introductory paragraph that breaks visual rhythm.

### Rule 6: Reactive i18n Dictionary Parity
- **Directive**: Any user-facing text modified or added in the HTML must be annotated with `data-i18n="<key>"` and mirrored in **both** `i18nData.pt` and `i18nData.en` in the JavaScript script block.

---

## 3. Key File Locations & Repository Architecture

| Path | Purpose |
| :--- | :--- |
| `scratch/preview/index.html` | The primary single-file production HTML application. |
| `scratch/preview/lenis.min.js` | Lenis smooth momentum scrolling engine. |
| `scratch/preview/pawel_backdrop.jpg` | High-resolution cosmic backdrop asset by Paweł Czerwiński. |
| `docs/README.md` | General overview and documentation index. |
| `docs/ARCHITECTURE.md` | Deep technical architecture and runtime engine specifications. |
| `docs/DESIGN_SYSTEM.md` | Authoritative tokens, typography, and component styling rules. |
| `docs/CAREER_AND_PROJECTS.md` | Comprehensive dossiers of the 6 career milestones and 12 projects. |
| `docs/AI_AGENT_HANDOFF.md` | This master handoff guide. |

---

## 4. Automated Verification Scripts

Before finishing any task or making assertions, run these verification scripts to prove compliance:

### 1. Zero-Emoji Check
```bash
python3 -c '
import re
with open("scratch/preview/index.html") as f:
    text = f.read()
emojis = re.findall(r"[\U0001F600-\U0001F64F]|[\U0001F300-\U0001F5FF]|[\U0001F680-\U0001F6FF]|[\U0001F1E0-\U0001F1FF]", text)
assert len(emojis) == 0, f"Found emojis: {emojis}"
print("Zero emojis verified!")
'
```

### 2. Zero-Purple Check
```bash
python3 -c '
import re
with open("scratch/preview/index.html") as f:
    text = f.read()
purples = re.findall(r"(?:purple|violet|fuchsia|#a855f7|#8b5cf6)", text, re.I)
assert len(purples) == 0, f"Found purples: {purples}"
print("Zero purple verified! Palette is authoritative Electric Cyan.")
'
```

### 3. Strict HTML Syntax Validator
```bash
python3 -c '
from html.parser import HTMLParser
class StrictHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.self_closing = {"meta", "link", "img", "br", "hr", "input", "source", "area", "base", "col", "embed", "param", "wbr", "track", "path", "line", "polygon", "polyline", "rect", "circle", "ellipse"}
    def handle_starttag(self, tag, attrs):
        if tag.lower() not in self.self_closing:
            self.stack.append(tag.lower())
    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag in self.self_closing: return
        if self.stack and self.stack[-1] == tag: self.stack.pop()
        elif tag in self.stack:
            while self.stack and self.stack[-1] != tag: self.stack.pop()
            if self.stack: self.stack.pop()

parser = StrictHTMLParser()
with open("scratch/preview/index.html") as f: parser.feed(f.read())
assert len(parser.stack) == 0, f"Unclosed tags: {parser.stack}"
print("HTML syntax 100% valid! Zero unclosed tags.")
'
```

### 4. HTTP Server Health Check
```bash
curl -sI http://localhost:3000
```
Expected output: `HTTP/1.0 200 OK` (Content-Length > 200,000 bytes).

---

## 5. Summary of Recent Milestones & Changes

- **14 Anos de Experiência**: Replaced generic "PHASE 01" tag with the authentic engineering milestone: `14 ANOS DE EXPERIÊNCIA EM ENGENHARIA DE SOFTWARE` (bilingual `14 YEARS OF SOFTWARE ENGINEERING EXPERIENCE`).
- **Avatar Cyber-Industrial Integration**: Removed green status dots from avatar photos (hero and navbar) and wrapped the avatar in an obsidian architectural card frame with Electric Cyan backglow, CAD crosshairs (`+`), and inner dark vignette.
- **FutureMC & 2013 Origin**: Updated genesis milestone to `FutureMC`, operating period `2013 — 2018`, expanding the career timeline to `2013 — Present`.
- **Draggable Architecture Canvas**: Integrated mouse and touch drag-to-pan physics into the Affiliate Microservices Topology with a cyber blueprint dot grid and glowing radial energy pools.
- **Documentation Suite**: Built 5 comprehensive technical documents in `docs/` ready for any future AI agent.
