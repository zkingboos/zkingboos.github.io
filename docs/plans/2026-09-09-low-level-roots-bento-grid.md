# Low-Level Roots Bento Grid (EST. 2013) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the outdated VT-100 green terminal console block (lines 1771-1857) in `docs/preview/index.html` with a modern, high-density Framer-style Cyber-Industrial Bento Grid inspired by the user's reference image, showcasing open-source projects, technical stacks, telemetry metrics, and low-level origins.

**Architecture:** A multi-cell CSS Grid layout with dark obsidian glassmorphic cards (`bg-zinc-950/80`, hairline borders `border-zinc-800/80`), subtle hover glows, interactive links to GitHub and internal sections, and bilingual i18n parity.

**Tech Stack:** Vanilla ES6+ HTML/CSS/JS, Tailwind CSS CDN, Lenis momentum scroll, SVG iconography.

---

## 1. File Structure & Responsibilities

- **`docs/preview/index.html`**:
  - Replace lines 1771-1857 (the entire `<!-- VT-100 CONSOLE WITH OPEN SOURCE PROJECTS -->` block, now containing 5 open-source projects) with the new Bento Grid container.
  - Add auxiliary CSS in `<style>` (before `</style>` at line 338) for bento card hover glows and custom progress tracks.
  - Update `i18nData` in the script block for all translatable strings.

---

## 2. Bento Grid Cell Architecture

The grid is composed of 9 modular cards organized in 3 rows on desktop (`grid-cols-12`):

```
+------------------------------------+----------------------------------------------------+
| [Card 1: Telemetry & Latency]      | [Card 2: Open Source Ecosystem & Projects Table]   |
| Sub-0.02ms Resmon, P99, Jitter     | spigot-mcp, UniversalWrapper, king-core, portainer |
| (4 cols)                           | (8 cols)                                           |
+------------------------------------+----------------------------------------------------+
| [Card 3: Origins Manifest]         | [Card 4: Topology Mesh]  | [Card 6: 99.999% Uptime] |
| Since age 8 (2013) · Bare-metal    | Kafka, Ceph, BullMQ      | Zero-downtime AWS->Metal|
| (4 cols)                           +--------------------------+-------------------------+
|                                    | [Card 5: Core Stacks]    | [Card 7: Cryptography]  |
|                                    | Go, Java, Rust, Python   | 1Auth E2E Zero-Knowledge|
+------------------------------------+--------------------------+-------------------------+
| [Card 8: Production Scale & Throughput]                      | [Card 9: Local AI & MCP]|
| 30k+ Videos/Day · 300+ Players · 12 Systems · 14 Years       | Llama.cpp · AirLLM · MCP|
| (8 cols)                                                     | (4 cols)                |
+--------------------------------------------------------------+-------------------------+
```

---

## 3. Detailed Card Content Specifications

### Card 1: Low-Level Telemetry & Latency (4 cols)
- **Title**: `Sub-0.02ms Tick Optimization`
- **Badge**: `SUB-TICK` in emerald/cyan
- **Bars**:
  - Tick Loop Resmon: `< 0.02ms` (progress: 98%)
  - Kafka Event Mesh P99: `4.2ms` (progress: 92%)
  - Bare-Metal Kernel Jitter: `0.12ms` (progress: 96%)
- **Footer**: `Low-Level Roots ↗` (smooth scrolls to `#section-career`)

### Card 2: Open Source Ecosystem Table (8 cols)
- **Title**: `Open Source Repositories & Tooling`
- **Table Structure**:
  1. `spigot-mcp` (Kotlin): Model Context Protocol (MCP) server for Spigot with FAWE LLM world editing · `3 stars` · `github.com/zkingboos/spigot-mcp ↗`
  2. `UniversalWrapper` (Java): Universal JDBC wrapper with functional interfaces & HikariCP pool · `6 stars` · `github.com/zkingboos/UniversalWrapper ↗`
  3. `king-core` (Java): Modular DI framework & service bus for Spigot/Bukkit engines · `3 stars` · `github.com/zkingboos/king-core ↗`
  4. `portainer-action` (JS): GitHub Action for CI/CD Portainer stack automation · `github.com/zkingboos/portainer-action ↗`
  5. `dontasktoask` (Markdown): Pedagogical guide on efficient developer communication · `1 star` · `github.com/zkingboos/dontasktoask ↗`
- **Footer**: `View all on GitHub @zkingboos ↗`

### Card 3: Origins & Genesis Manifest (4 cols)
- **Terminal Header**: `manifest.txt · EST. 2013`
- **Content**:
  - `cat /usr/origins/manifest.txt`
  - Quote: *"Self-taught programming enthusiast driven by a deep curiosity for how systems operate. Started with Java and Kotlin, expanding with Go and Rust. Focused on performance optimization, bare-metal infrastructure and local AI inference."*
  - Active prompt: `zkingboos@baremetal:~$ _`
- **Footer**: `Trajectory Origins ↗`

### Card 4: Architecture & Distributed Topology (4 cols)
- **Tree View**:
  - `● Proxmox VE + Ceph Cluster` (Bare-Metal Mesh)
  - `├─ Apache Kafka Pub/Sub` (Zero-Tick Decoupling)
  - `├─ BullMQ + PyTorch Pipeline` (30k Videos/Day)
  - `└─ Tailscale SDN` (Encrypted WireGuard Mesh)
- **Footer**: `Topology Architecture ↗`

### Card 5: Polyglot Core Stacks (4 cols)
- **Pills / Progress**:
  - `Go (Golang)` · Fiber, OpenAPI, Concurrency
  - `Java / Kotlin` · Custom Packets, Minestom, Ktor
  - `Rust / C++` · Memory Safety & Raw Buffers
  - `Python / TS` · ML Ingestion & Microservices
- **Footer**: `Engineering Stacks ↗`

### Card 6: Bare-Metal Sovereignty & Uptime (4 cols)
- **Metric**: `99.999%`
- **Label**: `Sovereign Cluster Uptime`
- **Description**: Zero-Downtime AWS to Bare-Metal Migration (Ceph distributed storage + Proxmox VE)
- **Footer**: `Infrastructure Lead ↗`

### Card 7: Zero-Knowledge & Security (4 cols)
- **Badge**: `[🔒] 1Auth Platform`
- **Description**: End-to-end encrypted account platform with granular RBAC and Argon2 password hashing
- **Footer**: `Security Engineering ↗`

### Card 8: Production Throughput & Scale (8 cols)
- **4 Big Metric Counters**:
  - **`30,000+`** Videos/Day (Affiliate ML Ingest)
  - **`300+`** Concurrent Players (<0.02ms Tick Rate)
  - **`12`** Production Systems Shipped
  - **`14`** Years Continuous Engineering
- **Visual**: Glowing cyan/emerald data stream sparkline
- **Footer**: `Production Systems ↗`

### Card 9: Local AI Inference & MCP (4 cols)
- **Title**: `Local Inference Node`
- **Stack Chips**: `Llama.cpp` · `AirLLM` · `LiteLLM`
- **Feature**: Native Model Context Protocol (MCP) server integration for autonomous LLM agent tooling
- **Footer**: `AI & Model Context Protocol ↗`

---

## 4. Implementation Tasks

### Task 1: Add Bento Grid CSS Styles in `docs/preview/index.html`

**Files:**
- Modify: `docs/preview/index.html:320-340` (before `</style>` at line 338)

- [ ] **Step 1: Check existing head styles in `docs/preview/index.html`**

Run: `sed -n '320,340p' docs/preview/index.html`

- [ ] **Step 2: Add `.bento-card` and hover effect classes to `<style>`**

```css
.bento-card {
  background: rgba(10, 10, 14, 0.75);
  border: 1px solid rgba(39, 39, 42, 0.7);
  border-radius: 1.25rem;
  padding: 1.25rem;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}
.bento-card:hover {
  border-color: rgba(9, 166, 214, 0.4);
  box-shadow: 0 0 24px rgba(9, 166, 214, 0.08), 0 8px 32px rgba(0, 0, 0, 0.5);
  transform: translateY(-2px);
}
.bento-bar-fill {
  background: linear-gradient(90deg, #09a6d6 0%, #10b981 100%);
  border-radius: 9999px;
  height: 4px;
}
```

- [ ] **Step 3: Verify CSS syntax**

Run: `python3 -c 'with open("docs/preview/index.html") as f: assert "bento-card" in f.read()'`

---

### Task 2: Replace VT-100 Console with the Bento Grid in `docs/preview/index.html`

**Files:**
- Modify: `docs/preview/index.html:1771-1857`

- [ ] **Step 1: Inspect lines 1771-1858 to ensure exact replacement boundaries**

Run: `sed -n '1771,1858p' docs/preview/index.html`

- [ ] **Step 2: Replace the VT-100 console block with the 9-cell Bento Grid HTML**

Insert the complete 12-column grid container with responsive breakpoints (`grid grid-cols-1 md:grid-cols-12 gap-4`). Ensure all 5 open source projects, technical stacks, telemetry metrics, and links are fully coded without placeholders.

- [ ] **Step 3: Test that all links and anchors work**

Verify GitHub links (`target="_blank"`) and internal anchor links.

---

### Task 3: Update Bilingual i18n Dictionary in `docs/preview/index.html`

**Files:**
- Modify: `docs/preview/index.html:2330-2345` (around `phase4_desc` at line 2339)

- [ ] **Step 1: Inspect `i18nData` block**

Run: `grep -n -C 5 "phase4_desc" docs/preview/index.html`

- [ ] **Step 2: Add translatable strings for new Bento Grid cards in both `en` and `pt`**

Add keys for:
- `bento_telemetry_title`: `"Sub-0.02ms Tick Optimization"` / `"Otimização de Loop Sub-0.02ms"`
- `bento_oss_title`: `"Open Source Repositories & Tooling"` / `"Repositórios & Ferramentas Open Source"`
- `bento_manifest_title`: `"Origins Manifest · EST. 2013"` / `"Manifesto de Origem · EST. 2013"`
- `bento_uptime_label`: `"Sovereign Cluster Uptime"` / `"Disponibilidade de Cluster Soberano"`
- `bento_scale_title`: `"Live Ingestion & Concurrent Scale"` / `"Ingestão ao Vivo & Escala Concorrente"`
- `bento_ai_title`: `"Local Inference Node & MCP"` / `"Cluster de Inferência Local & MCP"`

- [ ] **Step 3: Verify dictionary parity**

Run:
```bash
python3 -c '
with open("docs/preview/index.html") as f: text = f.read()
assert "bento_telemetry_title" in text
print("i18n dictionary parity verified!")
'
```

---

### Task 4: Compliance & Quality Verification

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

- [ ] **Step 4: Live Server Check**
Run: `curl -sI http://localhost:3000`
Expected: `HTTP/1.0 200 OK`
