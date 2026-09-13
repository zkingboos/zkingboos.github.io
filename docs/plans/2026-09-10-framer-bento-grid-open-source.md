# Framer-Fidelity Bento Grid (EST. 2013 / Low-Level Roots) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-implement the section under `EST. 2013 // Low-Level Roots` in `docs/preview/index.html` replacing the old terminal block with an exact 1:1 structural and aesthetic adaptation of the Framer "Not just vibes, a full platform" Bento Grid component provided by the user.

**Architecture:** A unified master Bento Grid container (`rounded-3xl border border-white/10 bg-[#08080a]`) with 9 specialized sub-cards matching Framer's DOM hierarchy (`.framer-ka9z19`, `.framer-79b956`, etc.). Each card contains an authentic UI preview (mini CMS table, settings panel, branches tree, 99.99% uptime wave, security URL bar, telemetry analytics with dual-line SVG chart and tooltip, and A/B testing benchmark table) with a clean footer link (`Performance ➔`, `CMS ➔`, etc.).

**Tech Stack:** Vanilla ES6+ HTML/CSS/JS, Tailwind CSS CDN, SVG data-uri iconography, inline SVGs with linear gradients, Inter font tokens, Lenis smooth scrolling.

---

## 1. Structural Comparison: Framer Original vs. Portfolio Adaptation

| Framer Original Component | Portfolio Adaptation | Content & Engineering Scope |
| :--- | :--- | :--- |
| **`#bento-performance`** (Core Web Vitals) | **Low-Level Packet Vitals** | Sub-0.02ms tick loop, 4.2ms Kafka P99, 0.10ms packet jitter. Green `GOOD` pill and 3 horizontal progress bars. |
| **`#bento-cms`** (Collections & Data Table) | **Open Source Ecosystem (CMS)** | Full mini CMS table with Collections sidebar (Minecraft Core, DevOps, Guides) and real rows: `spigot-mcp`, `UniversalWrapper`, `king-core`, `portainer-action`, `dontasktoask` with `Live` status, stack icons, and tags. |
| **`#bento-seo`** (Site Settings & Social Preview) | **Origins & Systems Manifest** | Settings form with fields (`Handle: zkingboos`, `Origin: EST. 2013 · Age 8`, `Manifest: Self-taught...`) and terminal social preview. |
| **`#bento-collaboration`** (Branches Tree) | **Distributed Topology Branches** | Branch tree: `main-baremetal` (Proxmox + Ceph), `kafka-mesh`, `bullmq-ingest` (30k vids/day), `tailscale-vpn`. |
| **`#bento-localization`** (Locales & Percentages) | **Core Polyglot Stacks** | Stacks list: `GO (Golang)` 98%, `JV (Java & Kotlin)` 100% (14 yrs), `RS (Rust & C++)` 85%, `PY (Python & TS)` 92%. |
| **`#bento-hosting`** (99.99% uptime) | **Bare-Metal Sovereignty** | Wave gradient backdrop + massive **`99.99%`** `uptime` gradient typography for the sovereign on-premise Proxmox+Ceph cluster. |
| **`#bento-security`** (URL Bar with Padlock) | **1Auth Zero-Knowledge Security** | Browser URL bar with navigation arrows, cyan padlock, `https://joseg.xyz/auth`, and E2E encrypted RBAC tags. |
| **`#bento-analytics`** (Dashboard & Dual Chart) | **Production Throughput & Scale** | 4 stat boxes (`30k+ Videos/Day`, `300+ Players`, `12 Systems`, `14 Years`) + dual-line glowing SVG chart with floating tooltip (`Sep 10, 2026: 135,535 processed`). |
| **`#bento-ab-testing`** (A/B Test Winner Table) | **Local Inference vs. Cloud Benchmark** | Benchmarking card with `Local MCP Node` marked as `WINNER` ($0/mo, 0.4ms latency) vs Cloud API. |

---

## 2. File Modifications

- **`docs/preview/index.html`**:
  1. Add Framer-fidelity CSS rules in `<style>`:
     - Hairline borders (`border: 1px solid rgba(255, 255, 255, 0.08)`)
     - Frosted surface backgrounds (`background: #09090d`)
     - Metric bar tracks and fill animations
     - Glowing SVG chart gradient masks
     - Custom scrollbar and table typography
  2. Replace lines 1775-1845 (the old VT-100 console block) with the new Bento Grid container.
  3. Update `i18nData` in `<script>` with translations for all 9 cards in `pt` and `en`.

---

## 3. Tasks Breakdown

### Task 1: Add Framer Bento Grid CSS Styles in `docs/preview/index.html`

**Files:**
- Modify: `docs/preview/index.html:330-380`

- [ ] **Step 1: Check existing style block in `docs/preview/index.html`**

Run: `sed -n '330,370p' docs/preview/index.html`

- [ ] **Step 2: Add `.fbento-*` CSS rules**

```css
/* Framer-Fidelity Bento Grid Design System */
.fbento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 12px;
  background: #07070a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 16px;
  box-shadow: 0 30px 100px -20px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.08);
}
@media (max-width: 1024px) {
  .fbento-grid { grid-template-columns: 1fr; gap: 16px; padding: 12px; }
}
.fbento-card {
  background: #0b0b10;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.fbento-card:hover {
  border-color: rgba(9, 166, 214, 0.35);
  box-shadow: 0 0 30px rgba(9, 166, 214, 0.06);
}
.fbento-visual {
  padding: 20px;
  flex: 1;
}
.fbento-footer {
  padding: 14px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.015);
  transition: all 0.2s ease;
}
.fbento-footer:hover {
  background: rgba(9, 166, 214, 0.06);
}
.fbento-footer h3 {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
  color: #fff;
  transition: color 0.2s ease;
}
.fbento-footer:hover h3 {
  color: #09a6d6;
}
.fbento-bar-bg {
  height: 4px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
}
.fbento-bar-fill {
  height: 100%;
  border-radius: 100px;
  background: #09a6d6;
}
```

- [ ] **Step 3: Verify CSS integrity**

Run: `python3 -c 'with open("docs/preview/index.html") as f: assert "fbento-grid" in f.read()'`

---

### Task 2: Implement Complete 9-Card Bento Grid Markup in `docs/preview/index.html`

**Files:**
- Modify: `docs/preview/index.html:1775-1845`

- [ ] **Step 1: Inspect replacement target**

Run: `sed -n '1775,1845p' docs/preview/index.html`

- [ ] **Step 2: Replace VT-100 block with Framer Bento Grid**

Insert the full HTML structure containing:
1. `#bento-performance` (col-span-4):
   - Header with "Low-Level Packet Vitals" + "GOOD" pill
   - 3 rows: TICK (<0.02ms), KAFKA P99 (4.2ms), JITTER (0.10ms)
   - Footer: `Performance ➔`
2. `#bento-cms` (col-span-8):
   - Full mini CMS UI with Collections sidebar + Repositories table (`spigot-mcp`, `UniversalWrapper`, `king-core`, `portainer-action`, `dontasktoask`)
   - Footer: `Open Source CMS ➔`
3. `#bento-settings` (col-span-4):
   - Site settings panel with input fields + manifest quote
   - Footer: `Origins Manifest ➔`
4. `#bento-collaboration` (col-span-4):
   - Branches tree with avatars and microservice cluster nodes
   - Footer: `Topology Mesh ➔`
5. `#bento-localization` (col-span-4):
   - Locales list with Go, Java, Rust, Python progress percentages
   - Footer: `Polyglot Stacks ➔`
6. `#bento-hosting` (col-span-4):
   - Atmospheric gradient backdrop + 99.99% uptime typography
   - Footer: `Hosting Sovereignty ➔`
7. `#bento-security` (col-span-4):
   - Browser URL bar with padlock + `https://joseg.xyz/auth`
   - Footer: `Security Engineering ➔`
8. `#bento-analytics` (col-span-8):
   - 4 stat boxes (30k+, 300+, 12, 14) + dual-line glowing SVG chart with tooltip pill
   - Footer: `Throughput Analytics ➔`
9. `#bento-ab-testing` (col-span-4):
   - Benchmark comparison table: Local MCP Node (WINNER) vs Cloud API
   - Footer: `Edge AI Benchmarks ➔`

- [ ] **Step 3: Verify all 5 open source links point to active GitHub repositories**

Check URLs:
- `https://github.com/zkingboos/spigot-mcp`
- `https://github.com/zkingboos/UniversalWrapper`
- `https://github.com/zkingboos/king-core`
- `https://github.com/zkingboos/portainer-action`
- `https://github.com/zkingboos/dontasktoask`

---

### Task 3: Update Bilingual i18n Dictionary in `docs/preview/index.html`

**Files:**
- Modify: `docs/preview/index.html:2370-2440`

- [ ] **Step 1: Check existing `i18nData` keys**

Run: `grep -n -C 5 "phase4_desc" docs/preview/index.html`

- [ ] **Step 2: Add keys for all cards in both languages**

Ensure keys for `bento_perf_title`, `bento_cms_title`, `bento_manifest_title`, `bento_topo_title`, `bento_stacks_title`, `bento_hosting_title`, `bento_sec_title`, `bento_analytics_title`, and `bento_ab_title` exist in both `i18nData.en` and `i18nData.pt`.

---

### Task 4: Strict Verification & Health Checks

**Files:**
- Test: `docs/preview/index.html`

- [ ] **Step 1: Zero-Emoji rule verification**
```bash
python3 -c '
import re
with open("docs/preview/index.html") as f: text = f.read()
emojis = re.findall(r"[\U0001F600-\U0001F64F]|[\U0001F300-\U0001F5FF]|[\U0001F680-\U0001F6FF]|[\U0001F1E0-\U0001F1FF]", text)
assert len(emojis) == 0, f"Found emojis: {emojis}"
print("Zero emojis verified!")
'
```

- [ ] **Step 2: Zero-Purple rule verification**
```bash
python3 -c '
import re
with open("docs/preview/index.html") as f: text = f.read()
purples = re.findall(r"(?:#a855f7|#8b5cf6|violet|fuchsia)", text, re.I)
assert len(purples) == 0, f"Found purples: {purples}"
print("Zero purple verified! Palette is Electric Cyan.")
'
```

- [ ] **Step 3: Strict HTML Syntax Validator**
```bash
python3 -c '
from html.parser import HTMLParser
class P(HTMLParser):
    def __init__(self): super().__init__(); self.s = []
    def handle_starttag(self, t, a):
        if t not in {"meta","link","img","br","hr","input","source","area","path","circle","rect","line","polygon","use","defs","stop","linearGradient","g"}: self.s.append(t)
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

- [ ] **Step 4: HTTP Server Health Check**
Run: `curl -sI http://localhost:3000`
Expected: `HTTP/1.0 200 OK`
