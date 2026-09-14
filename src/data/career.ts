import type { LocalizedText } from "@/lib/lang";

export interface CareerRole {
  role: string;
  period: string;
  desc: LocalizedText;
  stack: string;
}

export interface CareerItem {
  period: string;
  name: string;
  meta: string;
  desc?: LocalizedText;
  stack?: string;
  roles?: CareerRole[];
}

export const career: CareerItem[] = [
  {
    period: "Jun 2026 — Present",
    name: "BarberGrid",
    meta: "Co-Founder",
    desc: {
      en: "Co-founder of a multi-tenant barbershop SaaS for scheduling and financial management. Led the backend architecture in Go with an OpenAPI-first standard, per-tenant data isolation in PostgreSQL, and distributed tracing observability, establishing the engineering standards that sustain the product from day one, with a focus on reliability and compliance for continuous delivery.",
      pt: "Co-fundador de uma plataforma SaaS multi-tenant para agendamento e gestão financeira de barbearias. Liderei a arquitetura de backend em Go com o padrão OpenAPI-first, isolamento de dados por inquilino em PostgreSQL e observabilidade com tracing distribuído, estabelecendo os padrões de engenharia que sustentam o produto desde o primeiro dia, com foco em confiabilidade e conformidade para entregas contínuas.",
    },
    stack: "Go (Golang) · OpenAPI · Docker · PostgreSQL · Observability",
  },
  {
    period: "Apr 2026 — Present",
    name: "Rede Lord",
    meta: "Software Engineer",
    desc: {
      en: "Building a high-performance Minecraft server from scratch in Java, using Minestom for direct socket-level packet handling and ViaVersion for multi-protocol compatibility. Structured an event-driven microservices ecosystem with Apache Kafka for asynchronous, decoupled communication, integrated with a Go (Fiber) backend API that follows strict, versioned OpenAPI contracts.",
      pt: "Desenvolvimento de um servidor de Minecraft de alto desempenho do zero em Java, utilizando Minestom para manipulação direta de pacotes em nível de socket e ViaVersion para compatibilidade multi-protocolo. Estruturei um ecossistema de microsserviços orientado a eventos com Apache Kafka para comunicação assíncrona e desacoplada, integrado a uma API backend em Go (Fiber) com contratos OpenAPI estritos e versionados.",
    },
    stack: "Java · Minestom · Apache Kafka · Go (Fiber) · OpenAPI",
  },
  {
    period: "Apr 2026 — Aug 2026",
    name: "Self-employed",
    meta: "Full Stack Engineer",
    desc: {
      en: "Developing customized AI solutions to automate customer service via WhatsApp, using Chatwoot as the management platform. Architecting the backend entirely in Go, with RAG and MCP for contextual responses, open-source LLMs running on local inference clusters via llama.cpp for privacy and low latency, and dynamic web scraping pipelines with Puppeteer integrated into production.",
      pt: "Desenvolvimento de soluções de IA personalizadas para automação de atendimento ao cliente via WhatsApp, utilizando Chatwoot como plataforma de gestão. Arquitetura de backend inteiramente em Go, com RAG e MCP para respostas contextuais, LLMs open-source rodando em clusters de inferência local via llama.cpp para garantir privacidade e baixa latência. Implementação de pipelines de web scraping dinâmico com Puppeteer e integração de processos de extração de dados em ambientes de produção.",
    },
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
        desc: {
          en: "Led the complete migration of infrastructure from AWS to a self-hosted bare-metal environment, designing a Proxmox cluster with distributed Ceph storage and IaC automation (Terraform), with a site-to-site VPN tunnel for secure isolation. Defined backend and infrastructure engineering focused on distributed systems and high-availability APIs, combining technical vision with project management to deliver platforms at scale.",
          pt: "Liderança da migração completa de infraestrutura da AWS para um ambiente bare-metal próprio, projetando um cluster Proxmox com armazenamento distribuído Ceph e automação via IaC (Terraform), com túnel VPN site-to-site para isolamento seguro. Defini a engenharia de backend e infraestrutura com foco em sistemas distribuídos e APIs de alta disponibilidade, combinando visão técnica com gestão de projeto para entregar plataformas de escala.",
        },
        stack: "Proxmox VE · Ceph · Terraform · Tailscale · Hono",
      },
      {
        role: "Software Engineer",
        period: "Mar 2023 — Oct 2024",
        desc: {
          en: "Built scalable microservices, communication channels, and data processing pipelines. Worked on video monitoring platforms processing over 30k videos a day with an integrated Machine Learning microservice, an account management system with end-to-end encryption and granular RBAC, and a secure marketplace with a crypto payment gateway built from scratch, including double-spend prevention and wallet encryption.",
          pt: "Construção de microsserviços escaláveis, canais de comunicação e pipelines de processamento de dados. Atuei em plataformas de monitoramento de vídeo processando mais de 30 mil vídeos por dia com integração de um microsserviço de Machine Learning, em um sistema de gestão de contas com criptografia ponta-a-ponta e RBAC granular, e em um marketplace seguro com gateway de pagamento cripto construído do zero, incluindo prevenção de gasto duplo em blockchain e criptografia de wallet.",
        },
        stack: "Node.js · TypeScript · Python · BullMQ · Redis · PostgreSQL",
      },
    ],
  },
  {
    period: "2019 — 2022",
    name: "Refúgio RP",
    meta: "Developer",
    desc: {
      en: "Engineered the core gameplay and server infrastructure of Refúgio RP, a high-traffic FiveM (GTA V) roleplay server. Built an automated whitelist system with database integration, in-game administrative moderation suites, and led aggressive resource profiling, reducing resmon consumption to under 0.02ms per resource and eliminating client-server tick loop bottlenecks.",
      pt: "Engenharia do núcleo de gameplay e da infraestrutura de servidor do Refúgio RP, um servidor de roleplay em FiveM (GTA V) de alto tráfego. Construí um sistema automatizado de whitelist com integração a banco relacional, suítes de moderação administrativa in-game e liderei profiling agressivo de recursos, reduzindo o consumo de resmon a menos de 0.02ms por recurso e eliminando gargalos de tick loop entre cliente e servidor.",
    },
    stack: "Lua · JavaScript · Node.js · MySQL · FiveM FXServer · Resmon Profiler",
  },
  {
    period: "2013 — 2018",
    name: "FutureMC",
    meta: "Developer",
    desc: {
      en: "The origin of my software engineering journey: developing gameplay mechanics and backend systems for FutureMC, a Minecraft server in continuous production. Worked in Java with object-oriented architectures, custom network packet handling, and asynchronous MySQL persistence for player data and economies, forming the low-level foundation I carry to this day.",
      pt: "A origem da minha jornada em engenharia de software: desenvolvimento de mecânicas de gameplay e sistemas de backend para o FutureMC, um servidor de Minecraft em produção contínua. Trabalhei em Java com arquiteturas orientadas a objetos, manipulação customizada de pacotes de rede e persistência assíncrona em MySQL para dados de jogadores e economias, formando a base low-level que carrego até hoje.",
    },
    stack: "Java · MySQL · Spigot/Bukkit API · Packet Systems · Relational DB",
  },
];