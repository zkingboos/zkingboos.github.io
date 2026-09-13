# 🚀 Walkthrough — Arquitetura Real do Affiliate & Eliminação de Vazamentos

### 1. Eliminação do Vazamento de Gradiente & Corte Estranho
- **Remoção de Gradientes com Margem Negativa**: Removido o elemento flutuante `absolute -top-10` que projetava um brilho para cima, criando a falsa impressão de que a seção de cima estava "vazando" ou cortada.
- **Transição Limpa e Unificada**:
  - Removido o feixe flutuante com a pílula solta no meio do espaço escuro.
  - A seção `PRODUCTION ARTIFACTS` agora possui uma linha de topo limpa e padrão (`border-t border-zinc-800/80 pt-8`), sem cortes artificiais, sem halos e sem vazamentos.

---

### 2. Atualização Completa da Arquitetura do Affiliate (Dados Reais do Autor)
O diagrama e os fluxos de dados foram reescritos para refletir fielmente a engenharia real:

1. **Bot do Discord (Command & Control)**:
   - Adicionado no topo da topologia como o orquestrador master de operações (`[ Discord Command Bot ]`).
   - Controla todas as funcionalidades: triggers de scraping, status dos workers, queries de dados, reprocessamento e alertas.
2. **Scraper Próprio (Engenharia Reversa)**:
   - Substituídas as "Platform APIs" por `[ In-House Scraper ]` fruto de semanas de pesquisa de engenharia reversa para bypass de rate limits e anti-bot.
   - Plataformas-alvo: **YouTube, TikTok, Instagram e X** (removida a menção a "TikTok Shop", padronizado para "TikTok").
3. **RabbitMQ Cluster (Async Request)**:
   - Substituídos Redis/BullMQ por `[ RabbitMQ Cluster ]` operando via protocolo AMQP com requisições assíncronas e filas deduplicadas.
4. **Armazenamento de Mídia em S3**:
   - `[ S3 Object Storage ]` para armazenamento de vídeos brutos, chunks e frames processados pelo FFmpeg.
5. **SQL Pool com PostgreSQL**:
   - `PostgreSQL` com Connection Pool para dados relacionais, estados de tarefas e dados de usuários.
6. **Persistence Cluster: Longhorn com K3s**:
   - Persistência cloud-native em blocos distribuídos com volumes CSI do K3s.
