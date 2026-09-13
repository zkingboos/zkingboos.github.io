# 👥 Testimonials Section — Especificação & Opções de Design (01 & 02)

> **Ambiente Ativo**: `docs/preview/index.html` (Single-Page Application Vanilla ES6+ servida em `http://localhost:3000`).  
> **Diretriz de Design**: Cyber-Industrial Cosmic Obsidian (`#06070b`, `#070c16`, Ciano Elétrico `#09a6d6`, Zero Emojis, Zero Roxo).

---

## 1. Visão Geral

A seção **"Who Worked With Me"** (Feedbacks & Recomendações) apresenta validação técnica e testemunho de fundadores, líderes de tecnologia e colegas de equipe que trabalharam diretamente com José Gabriel em produção.

Para permitir a avaliação prática e escolha do melhor paradigma visual em tempo real no navegador, são disponibilizadas **duas opções interativas** comutáveis por uma barra de controle no topo da seção:

- **Opção 01 — Grade Mosaico Descentralizada (Inspirada no Frame.io)**
- **Opção 02 — Editorial Assimétrico Disperso (Inspirada no Bucket.co)**

---

## 2. Regra dos Espaços Não Preenchidos ("Empty Cards")

> [!IMPORTANT]
> **Cards Vazios Visíveis (Empty Slots)**  
> Quando não houver depoimentos suficientes para completar todas as posições da grade ou do layout editorial, essas posições **não devem ficar em branco nem serem removidas**. Elas são renderizadas como **cards vazios visíveis** com estética de vidro fumê e linha tracejada, preservando a harmonia geométrica e convidando ativamente novas recomendações:
> 
> ```
> + - - - - - - - - - - - - - - - - - - - - - - - +
> | [ ESPAÇO DISPONÍVEL // SLOT_05 ]               |
> |                                               |
> |  (○)  Trabalhou com José Gabriel?              |
> |       Deixe sua recomendação no LinkedIn ↗    |
> + - - - - - - - - - - - - - - - - - - - - - - - +
> ```

---

## 3. Opção 01 — Grade Mosaico Descentralizada (Estilo Frame.io)

### 3.1. Conceito Visual
Inspirada na galeria de mídias do Frame.io (*"Collaborate and conquer"*), onde os blocos visuais cercam o título principal posicionado exatamente no **vazio central da composição**:

```
+---------------+  +-------------------+  +-------------------+  +---------------+
| [Empty Card]  |  |  Gustavo Arantes  |  |   Paulo Victor    |  |  Ian Libânio  |
| (Tracejado)   |  |   (Snake Labs)    |  | (CEO BarberGrid)  |  | (Colaborador) |
+---------------+  +-------------------+  +-------------------+  +---------------+

+---------------+                                                +---------------+
| [Empty Card]  |               Who Worked                       | [Empty Card]  |
| (Tracejado)   |                With Me                         | (Tracejado)   |
+---------------+       Feedbacks de fundadores e líderes        +---------------+

+---------------+  +-------------------+  +-------------------+  +---------------+
| [Empty Card]  |  | [Empty Card]      |  |     Yan Spatt     |  | [Empty Card]  |
| (Tracejado)   |  | (Tracejado)       |  |   (Colaborador)   |  | (Tracejado)   |
+---------------+  +-------------------+  +-------------------+  +---------------+
```

### 3.2. Características Principais
1. **Título Central**: O texto *"Who Worked With Me"* fica no centro da grade (`grid-column: 2 / 5; grid-row: 2 / 3`), ocupando o ponto focal da tela.
2. **Rotação Automática com Brilho**:
   - A cada 5 segundos, o foco avança automaticamente para o próximo depoimento.
   - O card ativo ganha opacidade total (`opacity: 1`), borda em Ciano Elétrico (`border-color: rgba(9, 166, 214, 0.5)`) e aura luminosa (`box-shadow: 0 0 28px rgba(9, 166, 214, 0.16)`).
   - Os demais cards ficam com opacidade reduzida (`opacity: 0.35`).
   - Ao passar o mouse (`mouseenter`), o carrossel pausa e o card focado ilumina suavemente (`opacity: 0.75`).
3. **Cards Vazios Estruturais**: Slots sem depoimento real exibem o card tracejado estilizado, garantindo que a moldura completa do mosaico esteja sempre visível.
4. **Responsividade**: Em telas menores (`< 1024px` e mobile), a grade se ajusta graciosamente em 2 colunas ou coluna única com o título centralizado no topo.

---

## 4. Opção 02 — Editorial Assimétrico Disperso (Estilo Bucket.co)

### 4.1. Conceito Visual
Inspirada no layout editorial de alta autoridade da Bucket.co, combinando citações de destaque tipográfico, logos de ecossistemas atendidos e distribuição assimétrica orgânica com offsets verticais (`translate-y`):

```
[ BarberGrid ]    [ Snake Labs ]    [ Hive-media ]    [ Rede Lord ]    [ Refúgio RP ]    [ FutureMC ]
Sistemas & Arquiteturas em Produção Entregues Para Fundadores e Líderes Técnicos

  +-- Paulo Victor (CEO BarberGrid SaaS) [52% largura, y+4] -------+   +-- Yan Spatt [38% largura, y-2] -+
  | "Trabalhar com o José foi uma experiência extremamente        |   | "Fala aí que tu é um ótimo      |
  |  positiva. Ele combina profundidade técnica, visão de        |   |  engenheiro. Entende bastante   |
  |  negócio e uma comunicação muito clara..."                   |   |  de arquitetura e resolve..."   |
  +---------------------------------------------------------------+   +---------------------------------+

                                     Who Worked With Me
                            O que dizem fundadores e líderes técnicos

  +-- Gustavo Arantes (Snake Labs) [40% largura, y+6] ------------+   +-- Ian Libânio [48% largura, y-1] +
  | "Trabalhar com o José foi excelente. Ele é proativo e rápido,  |   | "Entregas rápidas e de alta     |
  |  faz as perguntas certas no início do projeto..."              |   |  qualidade, comunicação fácil.."|
  +---------------------------------------------------------------+   +---------------------------------+
  
  + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
  | [ ESPAÇO RESERVADO // NOVO DEPOIMENTO ]                                                              |
  | Trabalhou com José Gabriel e deseja recomendar? -> Recomendar no LinkedIn ↗                          |
  + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
```

### 4.2. Características Principais
1. **Barra de Ecossistemas**: Linha de chips refinados com nomes das empresas e ecossistemas chave onde José construiu soluções críticas de infraestrutura e engenharia.
2. **Tipografia Editorial**: Aspas proeminentes, peso visual refinado e citações em destaque com forte legibilidade.
3. **Offsets Assimétricos**: Variação controlada de alinhamento vertical e larguras para quebrar a monotonia de grids convencionais.
4. **Cards Vazios Visíveis**: Preservam o equilíbrio visual inferior com o convite para conexão e recomendação.
5. **Auto-Alternância Suave**: Mesma sincronia de foco iluminando o depoimento ativo com Ciano Elétrico (`#09a6d6`) a cada 5 segundos.

---

## 5. Seletor de Pré-Visualização Interativo (Preview Live)

No arquivo `docs/preview/index.html`, a barra seletora fica posicionada imediatamente no topo da seção:

```html
<div class="flex items-center justify-center gap-2 mb-6" id="testimonials-view-switcher">
  <button type="button" id="btn-t-opt1" class="px-4 py-1.5 rounded-lg font-mono text-xs font-bold border transition-all ...">
    [ 01. MOSAIC GRID (FRAME.IO) ]
  </button>
  <button type="button" id="btn-t-opt2" class="px-4 py-1.5 rounded-lg font-mono text-xs font-bold border transition-all ...">
    [ 02. EDITORIAL SCATTERED (BUCKET.CO) ]
  </button>
</div>
```

- **Persistência**: Ao alternar, o estado é gravado no `localStorage.getItem('testimonials_pref_option')`, mantendo a escolha ativa mesmo após recarregar a página.
- **Transição Limpa**: A troca entre as visões ocorre sem recarregar a página e sem quebrar o scroll Lenis.

---

## 6. Dados Reais dos Depoimentos

| Nome | Cargo / Empresa | Foco Técnico do Depoimento |
| :--- | :--- | :--- |
| **Paulo Victor** | CEO · BarberGrid SaaS | Profundidade técnica, visão de negócio, arquitetura Go/OpenAPI e infraestrutura com impacto financeiro real. |
| **Gustavo Arantes** | Snake Labs | Proatividade, velocidade de entrega, levantamento antecipado de dúvidas e resolução direta de desafios técnicos. |
| **Yan Spatt** | Colaborador | Domínio em arquitetura de sistemas e foco em execução pragmática ("resolve de verdade, não fica só na teoria"). |
| **Ian Libânio** | Colaborador | Comunicação ágil, excelência técnica e entregas rápidas com alto padrão de qualidade. |
