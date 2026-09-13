export interface CareerRole {
  role: string;
  period: string;
  desc: string;
  stack: string;
}

export interface CareerItem {
  period: string;
  name: string;
  meta: string;
  desc?: string;
  stack?: string;
  roles?: CareerRole[];
}

export const career: CareerItem[] = [
  {
    period: "Jun 2026 — Present",
    name: "BarberGrid",
    meta: "Co-Founder",
    desc: "Co-fundador de uma plataforma SaaS multi-tenant para agendamento e gestão financeira de barbearias. Liderei a arquitetura de backend em Go com o padrão OpenAPI-first, isolamento de dados por inquilino em PostgreSQL e observabilidade com tracing distribuído, estabelecendo os padrões de engenharia que sustentam o produto desde o primeiro dia, com foco em confiabilidade e conformidade para entregas contínuas.",
    stack: "Go (Golang) · OpenAPI · Docker · PostgreSQL · Observability",
  },
  {
    period: "Apr 2026 — Present",
    name: "Rede Lord",
    meta: "Software Engineer",
    desc: "Desenvolvimento de um servidor de Minecraft de alto desempenho do zero em Java, utilizando Minestom para manipulação direta de pacotes em nível de socket e ViaVersion para compatibilidade multi-protocolo. Estruturei um ecossistema de microsserviços orientado a eventos com Apache Kafka para comunicação assíncrona e desacoplada, integrado a uma API backend em Go (Fiber) com contratos OpenAPI estritos e versionados.",
    stack: "Java · Minestom · Apache Kafka · Go (Fiber) · OpenAPI",
  },
  {
    period: "Apr 2026 — Aug 2026",
    name: "Self-employed",
    meta: "Full Stack Engineer",
    desc: "Desenvolvimento de soluções de IA personalizadas para automação de atendimento ao cliente via WhatsApp, utilizando Chatwoot como plataforma de gestão. Arquitetura de backend inteiramente em Go, com RAG e MCP para respostas contextuais, LLMs open-source rodando em clusters de inferência local via llama.cpp para garantir privacidade e baixa latência. Implementação de pipelines de web scraping dinâmico com Puppeteer e integração de processos de extração de dados em ambientes de produção.",
    stack: "Go (Golang) · RAG · MCP · llama.cpp · Chatwoot · Puppeteer",
  },
  {
    period: "Mar 2023 — Present",
    name: "Hive-media",
    meta: "Software Engineer",
    roles: [
      {
        role: "Project Manager & Infrastructure Lead",
        period: "Jul 2024 — Present",
        desc: "Liderança da migração completa de infraestrutura da AWS para um ambiente bare-metal próprio, projetando um cluster Proxmox com armazenamento distribuído Ceph e automação via IaC (Terraform), com túnel VPN site-to-site para isolamento seguro. Defini a engenharia de backend e infraestrutura com foco em sistemas distribuídos e APIs de alta disponibilidade, combinando visão técnica com gestão de projeto para entregar plataformas de escala.",
        stack: "Proxmox VE · Ceph · Terraform · Tailscale · Hono",
      },
      {
        role: "Software Engineer",
        period: "Mar 2023 — Oct 2024",
        desc: "Construção de microsserviços escaláveis, canais de comunicação e pipelines de processamento de dados. Atuei em plataformas de monitoramento de vídeo processando mais de 30 mil vídeos por dia com integração de um microsserviço de Machine Learning, em um sistema de gestão de contas com criptografia ponta-a-ponta e RBAC granular, e em um marketplace seguro com gateway de pagamento cripto construído do zero, incluindo prevenção de gasto duplo em blockchain e criptografia de wallet.",
        stack: "Node.js · TypeScript · Python · BullMQ · Redis · PostgreSQL",
      },
    ],
  },
  {
    period: "2019 — 2022",
    name: "Refúgio RP",
    meta: "Developer",
    desc: "Engenharia do núcleo de gameplay e da infraestrutura de servidor do Refúgio RP, um servidor de roleplay em FiveM (GTA V) de alto tráfego. Construí um sistema automatizado de whitelist com integração a banco relacional, suítes de moderação administrativa in-game e liderei profiling agressivo de recursos, reduzindo o consumo de resmon a menos de 0.02ms por recurso e eliminando gargalos de tick loop entre cliente e servidor.",
    stack: "Lua · JavaScript · Node.js · MySQL · FiveM FXServer · Resmon Profiler",
  },
  {
    period: "2013 — 2018",
    name: "FutureMC",
    meta: "Developer",
    desc: "A origem da minha jornada em engenharia de software: desenvolvimento de mecânicas de gameplay e sistemas de backend para o FutureMC, um servidor de Minecraft em produção contínua. Trabalhei em Java com arquiteturas orientadas a objetos, manipulação customizada de pacotes de rede e persistência assíncrona em MySQL para dados de jogadores e economias, formando a base low-level que carrego até hoje.",
    stack: "Java · MySQL · Spigot/Bukkit API · Packet Systems · Relational DB",
  },
];