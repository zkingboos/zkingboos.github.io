# 📐 Implementation Plan: Topologia Arrastável, Integração Visual do Avatar, 14 Anos de Experiência & FutureMC

Este plano técnico consolida todas as escolhas e definições alinhadas diretamente com o usuário:

1. **Topo da Página (Substituição do "PHASE 01")**:
   - Texto definido: **`14 ANOS DE EXPERIÊNCIA EM ENGENHARIA DE SOFTWARE`** (EN: `14 YEARS OF SOFTWARE ENGINEERING EXPERIENCE`).
   - Homenageia o fato real de programar desde os 8 anos de idade (rumo aos 22 anos em 10 de outubro).

2. **Remoção dos Dots Verdes & Integração Estética da Foto**:
   - Remoção completa dos dots verdes na **navbar**, no **desktop hero** e no **mobile hero**.
   - Integração da foto através de um **frame técnico cyber-industrial**: moldura em obsidiana cósmica (`bg-[#070c16]/95 border border-zinc-700/80 hover:border-[#09a6d6]`), cantoneiras técnicas CAD (`+`), vinheta inferior escura suave e glow sutil em Electric Cyan (`shadow-[0_0_25px_rgba(9,166,214,0.18)]`), fazendo a foto pertencer organicamente ao site.

3. **Carreira, FutureMC & Remoção da Frase Quebrada**:
   - **Remover a frase de introdução**: `"A concise and chronological overview of my core engineering roles in backend systems, infrastructure leadership, and company co-founding:"` para que a transição do título para os cards seja direta e sem quebras visuais.
   - **Renomeação**: `Futuremc` ➔ **`FutureMC`**.
   - **Data do FutureMC**: **`2013 — 2018`** (eliminando a menção `~4 anos`).
   - **Timeline Geral da Carreira**: Atualizar o período global de `2018 — Present` para **`2013 — Present`**.

4. **Topologia de Microsserviços Arrastável (Draggable Canvas)**:
   - Transformar o container da topologia em um canvas arrastável (`cursor-grab` ao passar o mouse, `cursor-grabbing` ao arrastar, suporte completo a mouse e touch).
   - Efeitos técnicos de fundo:
     - Grid de blueprint cibernético (`radial-gradient` de pontos ciano a cada `24px`).
     - Auras energéticas cósmicas azuis/ciano por trás dos blocos de ML, Ingress e Ceph.
     - Indicador discreto `[ ☩ Drag to pan architecture ]` com botão `[ Reset ]` para recentralizar.

5. **Sincronização Completa em `docs/`**:
   - Atualizar a documentação técnica em `docs/` com esses marcos históricos e refinamentos visuais.

---

## 🎯 1. Detalhamento das Alterações de Código

### Componente 1: Topo Hero (Substituição de "PHASE 01" por 14 Anos de Experiência)
Substituir o elemento da linha 274:
```html
<div class="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-zinc-800/60 pb-3">
  <span class="flex items-center gap-2">
    <span class="w-2 h-2 rounded-full bg-[#09a6d6] animate-pulse"></span>
    <span class="text-zinc-200 font-bold tracking-wide" data-i18n="hero_experience_tag">
      14 ANOS DE EXPERIÊNCIA EM ENGENHARIA DE SOFTWARE
    </span>
  </span>
  <div class="flex items-center gap-3">
    <span>Brasil & UK</span>
    <span class="text-zinc-600 hidden sm:inline">·</span>
    <span class="text-emerald-400 font-bold hidden sm:inline" id="live-clock">--:-- BRT</span>
    <span class="text-zinc-600 hidden sm:inline">·</span>
    <span class="text-zinc-300">Available Globally</span>
  </div>
</div>
```
E no dicionário de i18n (`i18nData`):
```javascript
pt: {
  hero_experience_tag: "14 ANOS DE EXPERIÊNCIA EM ENGENHARIA DE SOFTWARE",
  // ...
},
en: {
  hero_experience_tag: "14 YEARS OF SOFTWARE ENGINEERING EXPERIENCE",
  // ...
}
```

---

### Componente 2: Remoção dos Dots Verdes & Integração Estética do Avatar
1. **Navbar (Linha 229):**
   - Remover: `<span class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ..."></span>`

2. **Desktop Avatar (Linha 290):**
   - Remover dot verde.
   - Envolver a imagem no frame técnico obsidian com glow e crosshairs:
```html
<div class="hidden sm:block relative group shrink-0">
  <!-- Glow Ciano Ambiente -->
  <div class="absolute -inset-1 bg-gradient-to-br from-[#09a6d6]/25 to-blue-600/10 rounded-2xl blur-md group-hover:from-[#09a6d6]/40 transition-all duration-500"></div>
  
  <div class="relative p-1.5 rounded-2xl bg-[#070c16]/95 border border-zinc-700/80 group-hover:border-[#09a6d6]/80 transition-all duration-300 shadow-2xl backdrop-blur-xl">
    <!-- Cantoneiras CAD de precisão -->
    <span class="absolute top-1 left-1.5 text-[8px] font-mono text-zinc-500 select-none group-hover:text-[#09a6d6] transition-colors">+</span>
    <span class="absolute top-1 right-1.5 text-[8px] font-mono text-zinc-500 select-none group-hover:text-[#09a6d6] transition-colors">+</span>
    <span class="absolute bottom-1 left-1.5 text-[8px] font-mono text-zinc-500 select-none group-hover:text-[#09a6d6] transition-colors">+</span>
    <span class="absolute bottom-1 right-1.5 text-[8px] font-mono text-zinc-500 select-none group-hover:text-[#09a6d6] transition-colors">+</span>

    <!-- Foto com vinheta inferior -->
    <div class="relative overflow-hidden rounded-xl">
      <img src="https://avatars.githubusercontent.com/u/42500187?v=4" alt="José Gabriel" class="w-28 h-28 sm:w-32 sm:h-32 object-cover transition-transform duration-500 group-hover:scale-105">
      <div class="absolute inset-0 bg-gradient-to-t from-[#06070b]/90 via-transparent to-transparent opacity-65 pointer-events-none"></div>
      <div class="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[9px] font-mono text-zinc-300 select-none pointer-events-none">
        <span class="text-[#09a6d6] font-bold tracking-wider">SYS_ENG</span>
        <span class="text-zinc-400">ONLINE</span>
      </div>
    </div>
  </div>
</div>
```

3. **Mobile Avatar (Linha 329):**
   - Aplicar a mesma moldura e remover o dot verde, adaptado para as dimensões mobile (`w-20 h-20`).

---

### Componente 3: Carreira & FutureMC
1. **Remoção da Frase Quebrada (Linhas 529-531):**
   - Excluir o bloco `<p class="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-3xl" data-i18n="phase2_intro">...</p>`.
   - O fluxo vai direto do título para os cards de milestone.
2. **Atualização da Timeline Global (Linha 526):**
   - Alterar de `2018 — Present` para:
   ```html
   <span class="text-xs font-mono text-zinc-400" data-i18n="phase2_period">2013 — Present</span>
   ```
3. **Card do FutureMC (Linhas 693-705):**
   - Atualizar nome para `FutureMC`.
   - Atualizar período para `2013 — 2018`.
   - Atualizar descrições no HTML e nos dicionários `pt` e `en` removendo `(~4 anos)`.

---

### Componente 4: Topologia Arrastável & Efeitos de Fundo
1. **Fundo Gráfico Técnico:**
   - Adicionar ao container do diagrama:
   ```html
   <div id="topology-viewport" class="relative bg-zinc-950/90 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-8 overflow-hidden cursor-grab select-none transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(9,166,214,0.1)]" style="background-image: radial-gradient(circle, rgba(9, 166, 214, 0.15) 1px, transparent 1px); background-size: 24px 24px;">
     <!-- Auras energéticas no fundo -->
     <div class="absolute top-1/4 left-1/4 w-80 h-80 bg-[#09a6d6]/10 rounded-full blur-3xl pointer-events-none"></div>
     <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
     
     <!-- Barra de controles / dica interativa -->
     <div class="absolute top-3 right-3 flex items-center gap-2 z-20">
       <span class="text-[10px] font-mono text-zinc-400 bg-black/70 border border-zinc-800 px-2 py-1 rounded-md backdrop-blur-md">
         Drag to pan
       </span>
       <button onclick="resetTopologyPan()" class="text-[10px] font-mono text-[#09a6d6] hover:text-white bg-[#09a6d6]/10 hover:bg-[#09a6d6]/20 border border-[#09a6d6]/30 px-2 py-1 rounded-md transition-colors">
         Reset
       </button>
     </div>
     
     <div id="topology-canvas" class="min-w-[760px] space-y-8 transition-transform duration-75">
       <!-- Conteúdo dos nós e fluxos SVG -->
     </div>
   </div>
   ```

2. **Script de Pan/Drag:**
   - Script vanilla que calcula deslocamentos de mouse/touch e atualiza `scrollLeft / scrollTop` do viewport com amortecimento.

---

## 🧪 2. Verificação & Validação

1. **Validação Estrutural:** Executar `StrictHTMLParser` para assegurar 0 tags órfãs.
2. **Scan de 0 Emojis:** Validar via regex a ausência total de emojis.
3. **Ausência de Roxo:** Confirmar ausência de tons roxos (#a855f7, purple).
4. **Verificação no Navegador (`http://localhost:3000`):**
   - Arrastar a topologia e conferir a sensibilidade e fluidez.
   - Conferir o novo frame técnico da foto (sem dot verde).
   - Validar a frase removida e o FutureMC com período `2013 — 2018`.
   - Validar a nova tag `14 ANOS DE EXPERIÊNCIA EM ENGENHARIA DE SOFTWARE`.
