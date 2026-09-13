export interface Project {
  index: string;
  name: string;
  sub: string;
  desc: string;
  stack: string;
  id?: string;
  hasTopology?: boolean;
}

export interface ProjectGroup {
  title: string;
  projects: Project[];
}

export const projectGroups: ProjectGroup[] = [
  {
    title: "Platform & SaaS",
    projects: [
      {
        index: "01",
        name: "BarberGrid SaaS",
        sub: "Multi-Tenant Barbershop Platform · Go & OpenAPI",
        desc: "Arquitetura de backend multi-tenant para plataforma SaaS de agendamento e gestão financeira. Implementação rigorosa do padrão OpenAPI-first com geração automática de contratos de clientes, isolamento de dados por barbearia e observabilidade com tracing distribuído.",
        stack: "Go · OpenAPI · Docker · PostgreSQL · Observability",
        id: "project-barbergrid",
      },
      {
        index: "02",
        name: "Aventrada Ticketing",
        sub: "High-Concurrency Ticketing · PostgreSQL Row Locks & Stripe",
        desc: "Plataforma de venda e emissão segura de ingressos para eventos com altíssimo tráfego simultâneo. Implementação de locks transacionais estritos no PostgreSQL para garantir zero overbooking durante aberturas de vendas em lote, com integração de webhooks Stripe resilientes.",
        stack: "Hono · Bun · PostgreSQL · Redis · Stripe",
        id: "project-aventrada",
      },
      {
        index: "03",
        name: "Launchpaid",
        sub: "Creator & Affiliate Marketing Platform · TikTok",
        desc: "Plataforma multi-serviço focada no ecossistema de criadores de conteúdo e marketing de afiliados do TikTok. Motores analíticos de alto desempenho para cálculo automatizado de comissões com base em GMV, visualizações e engajamento, integrados com roteamento financeiro pelo Stripe.",
        stack: "Bun · Hono · FastAPI · PostgreSQL · Redis",
        id: "project-launchpaid",
      },
    ],
  },
  {
    title: "Infrastructure & bare-metal",
    projects: [
      {
        index: "04",
        name: "Bare-Metal Cloud Infrastructure",
        sub: "AWS to Proxmox VE · Ceph Distributed Storage & IaC",
        desc: "Liderança completa da migração de infraestrutura de nuvem pública (AWS) para servidores físicos bare-metal dedicados. Implementação de cluster Proxmox VE com armazenamento distribuído Ceph (replicação 3x), automação via Terraform e rede privada segura via Tailscale Wireguard mesh.",
        stack: "Proxmox VE · Ceph · Terraform · Tailscale · Linux Kernel",
        id: "project-baremetal",
      },
      {
        index: "05",
        name: "Rede Lord Core & Kafka",
        sub: "High-Performance Game Server · Minestom & Kafka Broker",
        desc: "Servidor de alta performance construído do zero com Java e Minestom para manipulação direta de pacotes de rede em nível de socket, com ViaVersion para suporte multi-protocolo. Microsserviços orientados a eventos com Apache Kafka desacoplados de uma API em Go (Fiber).",
        stack: "Java · Minestom · Kafka · Go (Fiber) · OpenAPI",
        id: "project-redelord",
      },
    ],
  },
  {
    title: "Security, finance & Web3",
    projects: [
      {
        index: "06",
        name: "1Auth Identity Platform",
        sub: "Zero-Knowledge Account Management · Kotlin & RBAC",
        desc: "Plataforma para agências gerenciarem credenciais de celebridades e perfis de alto risco utilizando criptografia de ponta a ponta. Arquitetura zero-knowledge com chave de segurança derivada no dispositivo e isolamento de permissões com RBAC hierárquico.",
        stack: "Kotlin · Ktor · Exposed ORM · Redis · Traefik",
        id: "project-1auth",
      },
      {
        index: "07",
        name: "RobloxMP & Crypto Gateway",
        sub: "Secure RMT Marketplace & Custom Blockchain Gateway",
        desc: "Marketplace seguro de Real-Money Trading (RMT) para negociação de ativos virtuais de Roblox com moedas fiduciárias e criptoativos. Gateway cripto desenvolvido do zero com verificação de confirmações on-chain e proteção contra ataques de gasto duplo (double-spending).",
        stack: "Node.js · TypeScript · Python · PostgreSQL · Blockchain APIs",
        id: "project-robloxmp",
      },
      {
        index: "08",
        name: "Hapaheaven",
        sub: "Web3 Social Media Platform",
        desc: "Plataforma de rede social integrada a Web3 para interações descentralizadas e recursos modernos de social networking. Backend arquitetado com stack TypeScript e validação estrita de dados, com mecanismos de cache eficientes para sustentar recursos sociais em tempo real.",
        stack: "TypeScript · NestJS · Drizzle ORM · Zod · Redis · Docker",
      },
    ],
  },
  {
    title: "Games, streaming & real-time",
    projects: [
      {
        index: "09",
        name: "Affiliate",
        sub: "Video Monitoring & Machine Learning Architecture",
        desc: "Monitoramento de vídeo escalável para YouTube, Instagram, X e TikTok, processando mais de 30.000 vídeos diariamente. Integração de microsserviço de Machine Learning para verificar a autenticidade de conteúdo gerado por usuários, com filas de mensagens e processamento distribuído para manter desempenho confiável.",
        stack: "Bun · Redis · PostgreSQL · BullMQ · Docker Swarm · Label Studio · ML · Sentry",
        hasTopology: true,
      },
      {
        index: "10",
        name: "Twitter Monitoring Dashboard",
        sub: "Real-Time Tweet Tracking System",
        desc: "Pipeline de ingestão de dados em tempo real para captura, deduplicação e processamento assíncrono de postagens e métricas com RabbitMQ para absorver rajadas intensas de tráfego.",
        stack: "TypeScript · Node.js · RabbitMQ · PostgreSQL",
      },
      {
        index: "11",
        name: "Helix Bot Provisioning",
        sub: "Discord Bot Orchestration & Recurring Subscriptions",
        desc: "Painel de gerenciamento e orquestração automatizada de instâncias de bots do Discord. Comunicação direta com a API do Docker socket para isolamento seguro dos processos de cada assinante e cobrança recorrente via Stripe.",
        stack: "Kotlin · Ktor · Docker API · PostgreSQL · Stripe",
      },
      {
        index: "12",
        name: "Refúgio RP Engine",
        sub: "Roleplay Server Infrastructure · Whitelist & Resource Optimization",
        desc: "Desenvolvimento e manutenção da infraestrutura de gameplay e sistemas do Refúgio RP (servidor de FiveM/GTA V de alto tráfego). Engenharia do sistema automatizado de Whitelist integrado com banco relacional MySQL e painéis administrativos in-game para moderação e auditoria. Liderança em profiling e otimização agressiva de recursos para garantir resmon sub-0.02ms, eliminando gargalos de tick loop entre cliente e servidor.",
        stack: "Lua · JavaScript · Node.js · MySQL · FiveM FXServer · Resmon Profiler",
        id: "project-refugiorp",
      },
      {
        index: "13",
        name: "Futuremc Gameplay Core",
        sub: "Futuristic Minecraft Server Engine · Java & Relational MySQL",
        desc: "O ponto de partida na engenharia de software: servidor de Minecraft com temática futurista que operou durante 4 anos consecutivos (2018 a 2022). Desenvolvimento de sistemas centrais em Java utilizando arquitetura orientada a objetos, manipulação de pacotes de rede com Spigot/Bukkit e persistência assíncrona em MySQL para gerenciar dados de centenas de jogadores simultâneos, inventários, economias e mecânicas customizadas.",
        stack: "Java · MySQL · Spigot API · Bukkit · Packet Systems · Relational DB",
        id: "project-futuremc",
      },
    ],
  },
];