# Real-Time GitHub, Clean UI & Production Artifacts FX Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminate visual artifacts (empty container above Production Artifacts, icon repetition in slider on wide displays, hero photo hover effect, and header borders), implement real-time client-side GitHub contribution data fetching, and create a distinctive architectural blueprint HUD effect for the "PRODUCTION ARTIFACTS" section.

**Architecture:** 
1. **Empty Container & Section Hierarchy**: Refactor `#project-affiliate` so the interactive CAD viewport is the single self-contained diagram component; remove the redundant outer nested card wrapper and the orphan `border-t` line above `PRODUCTION ARTIFACTS`.
2. **Cylindrical Slider Expansion**: Scale the marquee array from 20 to 38+ distinct technologies (Go, Java, Kotlin, TypeScript, JavaScript, Python, Lua, C, C++, Rust, Bun, Node.js, Docker, Podman, Proxmox, Ceph, Kubernetes, Terraform, Tailscale, WireGuard, Linux, Debian, Ubuntu, Bash, Apache Kafka, Redis, PostgreSQL, MySQL, SQLite, ClickHouse, RabbitMQ, Nginx, Cloudflare, Grafana, Prometheus, Git, Vite, Next.js) with 80px item width, creating a ~3,200px track that prevents any duplicate icon from being simultaneously visible on wide (2012px+) displays.
3. **Hero & Header Cleanliness**: Strip hover transitions and border hover changes from hero avatar (`rounded-3xl border-2 border-zinc-800/90 static`); remove `border-b` from header and remove borders from the header profile photo.
4. **Live GitHub Contributions API**: Add an asynchronous fetch to `https://github-contributions-api.jogruber.de/v4/zkingboos?y=last` (with multi-year support for 2026/2025/2024), dynamically generating the 52-week SVG grid and updating total contributions in real-time, with instantaneous fallback to static SVG if offline.
5. **Production Artifacts Visual Effect**: Implement a distinctive technical blueprint / HUD container styling for `PRODUCTION ARTIFACTS` featuring a cyan scanning beam, blueprint micro-grid background, corner CAD registration crosshairs, metric chips, and luminous cyan ambient back-glow.

**Tech Stack:** Tailwind CSS (utility classes), Vanilla JS (DOM manipulation, Fetch API), HTML5, SVG (vector icons & dynamic charts), Python (preview server & validation).

---

### Task 1: Fix Empty Container Above Production Artifacts & Consolidate Phase 3

**Files:**
- Modify: `scratch/preview/index.html:800-1015`
- Mirror: `docs/preview/index.html:800-1015`

- [ ] **Step 1: Inspect Section 3 nesting and remove double card container**
Eliminate the outer card padding and border on `section#project-affiliate` (`bg-zinc-950/95 border border-zinc-800/90 rounded-3xl p-6 md:p-8`), matching the clean layout of Phase 1 where section titles sit naturally in the layout and `#topology-viewport` is the CAD blueprint card itself.

- [ ] **Step 2: Remove orphan `border-t` divider on Production Artifacts section**
Remove `border-t border-zinc-800/80` from `<section class="space-y-8 pt-6 border-t border-zinc-800/80">` at line 1010 to eliminate the awkward hanging divider between sections.

- [ ] **Step 3: Verify no empty gaps or misplaced borders exist between Phase 3 and Production Artifacts**
Run Python validation script to confirm layout continuity and ensure zero empty containers exist.

---

### Task 2: Remove Hero Photo Hover Effect & Header Navbar Borders

**Files:**
- Modify: `scratch/preview/index.html:240-375`
- Mirror: `docs/preview/index.html:240-375`

- [ ] **Step 1: Remove border from `<header>` navbar**
Change `<header class="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-zinc-800/80 px-4 py-3 shadow-2xl transition-all">` to remove `border-b border-zinc-800/80`.

- [ ] **Step 2: Remove border from header avatar photo**
Change `<img ... class="... border border-zinc-700/80 group-hover:border-[#09a6d6] transition-colors">` to remove all borders and hover color transitions on the header avatar.

- [ ] **Step 3: Remove hover effect and border transitions from hero photo**
On the hero photo (line 365-373):
- Remove `group` from parent wrapper.
- Change photo classes from `border-2 border-zinc-700/80 bg-zinc-950/80 backdrop-blur-md shadow-2xl group-hover:border-[#09a6d6] transition-all duration-300` to a clean, static, elegant `border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-md shadow-2xl`. No hover changes, no scale, completely static.

---

### Task 3: Expand Cylindrical Slider to 38+ Unique Technologies (Zero Visible Duplicates)

**Files:**
- Modify: `scratch/preview/index.html:380-600`
- Mirror: `docs/preview/index.html:380-600`

- [ ] **Step 1: Curate 38+ authentic SVG icons for Jose's engineering stack**
Include:
1. Go
2. Java
3. Kotlin
4. TypeScript
5. JavaScript
6. Python
7. Lua
8. C
9. C++
10. Rust
11. Bun
12. Node.js
13. Docker
14. Podman
15. Proxmox VE
16. Ceph
17. Kubernetes
18. Terraform
19. Tailscale
20. WireGuard
21. Linux
22. Debian
23. Ubuntu
24. Bash
25. Apache Kafka
26. Redis
27. PostgreSQL
28. MySQL
29. SQLite
30. ClickHouse
31. RabbitMQ
32. Nginx
33. Cloudflare
34. Grafana
35. Prometheus
36. Git
37. Vite
38. Next.js

- [ ] **Step 2: Ensure total cycle width exceeds 3,000px**
With 38 icons × (64px card + 16px gap = 80px) = 3,040px per block. On 1080p (1920px) and 1440p (2012px) screens, an entire block easily spans beyond the viewport width. As a result, not a single icon will be repeated within the visible screen area at the same time.

- [ ] **Step 3: Verify Marquee smoothness and zero text labels**
Ensure all icons render pure SVG with `title` and `aria-label` attributes for accessibility and tooltips, without any text underneath.

---

### Task 4: Real-Time GitHub Contributions Fetcher & Interactive Heatmap

**Files:**
- Modify: `scratch/preview/index.html:1410-1500, 2700-2820`
- Mirror: `docs/preview/index.html:1410-1500, 2700-2820`

- [ ] **Step 1: Add dynamic container and stats elements**
Update the GitHub section with an identifiable container `#github-heatmap-container` and live counter `#github-total-contributions`.

- [ ] **Step 2: Write resilient client-side GitHub fetch & SVG generator script**
In `initGitHubHeatmap()`:
- Fetch `https://github-contributions-api.jogruber.de/v4/zkingboos?y=last`.
- On success:
  - Update `#github-total-contributions` with live count formatted (e.g. `1,395 contributions`).
  - Calculate 52 columns × 7 rows grid.
  - Apply authentic GitHub dark theme color scale:
    - Level 0: `#161b22`
    - Level 1: `#0e4429`
    - Level 2: `#006d32`
    - Level 3: `#26a641`
    - Level 4: `#39d353`
  - Position month labels accurately based on first days.
  - Add native SVG `<title>${count} contributions on ${date}</title>` for hover tooltips.
- On failure/offline: Keep the pre-rendered static SVG intact seamlessly.
- Add click handlers for Year selector pills (2026, 2025, 2024) to fetch specific years dynamically (`?y=2025`).

- [ ] **Step 3: Verify API fetching in headless environment**
Execute curl/python fetch check and verify SVG DOM injection.

---

### Task 5: Distinctive Architectural Blueprint Effect on "PRODUCTION ARTIFACTS"

**Files:**
- Modify: `scratch/preview/index.html:1010-1050`
- Mirror: `docs/preview/index.html:1010-1050`

- [ ] **Step 1: Design technical HUD header container**
Wrap the "PRODUCTION ARTIFACTS" section header in a futuristic architectural blueprint aesthetic:
- Subtle CAD schematic background grid (`radial-gradient(circle, rgba(9,166,214,0.08) 1px, transparent 1px)` with 20px pitch).
- Cyan laser scanning beam divider with pulse glow (`bg-gradient-to-r from-transparent via-[#09a6d6] to-transparent h-[2px]`).
- Glowing status chip: `[ ARCHIVE // 12 PRODUCTION SYSTEMS SHIPPED ]` with active radar cyan indicator.
- Metric indicators: `100% On-Premise & Cloud Native`, `Sub-Millisecond P99 Loops`, `Zero Single Point of Failure`.
- Technical corner coordinates: `CAD-REF // 2013-2026-SYS-PROD`.
- Ambient cyan backlight behind the title heading.

- [ ] **Step 2: Refine project cards within Production Artifacts**
Add precision CAD registration accents (`+` in corners on hover) and cyan edge-glow to make each production blueprint card feel like an authentic architectural spec sheet.

---

### Task 6: Verification, Multi-Language Audit & Documentation Sync

**Files:**
- Validate: `scratch/preview/index.html`
- Sync to: `docs/preview/index.html`
- Update: `docs/plans/` and `docs/walkthrough.md`

- [ ] **Step 1: Strict HTML & Accessibility Verification**
- 0 unclosed tags (`StrictHTMLParser`).
- 0 emojis anywhere in the markup or text.
- 0 purple color references (Electric Cyan `#09a6d6` authoritative).
- HTTP 200 on `http://localhost:3000`.

- [ ] **Step 2: Sync Preview to Workspace**
Copy updated files to `/home/jose/Desktop/github-projects/personal-projects/zkingboos.github.io/docs/preview/` and save plan to `docs/plans/`.

- [ ] **Step 3: Update Walkthrough & Evidence**
Document all visual and functional enhancements with screenshots and metrics in `docs/walkthrough.md`.
