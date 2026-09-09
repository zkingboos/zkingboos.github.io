export interface LocalizedText {
        en: string;
        pt: string;
}

// Helper to create localized text
const t = (en: string, pt: string): LocalizedText => ({ en, pt });

export const personalInfo = {
        name: "José Gabriel",
        email: "josegmelo.dev@gmail.com",
        github: "https://github.com/zkingboos",
        linkedin: "https://www.linkedin.com/in/josegabrielma/",
        cvLink:
                "https://drive.google.com/file/d/1GnGjLzJu_3zXgp5P3uJL2GAQewCMrRhG/view?usp=sharing",
        profilePhoto: "https://avatars.githubusercontent.com/u/42500187?v=4",
};

export const heroContent = {
        role: t("Software Engineer", "Engenheiro de Software"),
        description: t(
                "Expert in distributed, secure, and scalable systems. Focused on microservices, DevOps, and leveraging modern technologies to build sustainable solutions.",
                "Especialista em sistemas distribuídos, seguros e escaláveis. Focado em microsserviços, DevOps e tecnologias modernas para construir soluções sustentáveis.",
        ),
};

export const aboutContent = {
        label: t("About", "Sobre"),
        title: t("Who I am", "Quem eu sou"),
        paragraphs: [
                t(
                        "Hi, my name is {name}. I am a Software Engineer driven by a deep curiosity for how systems operate under the hood. My technical foundation started with {java} and {kotlin}, and I am currently expanding my ecosystem with {golang}, keeping a language-agnostic perspective to select the most appropriate tool for each task.",
                        "Olá, meu nome é {name}. Sou um Engenheiro de Software movido por uma profunda curiosidade sobre como os sistemas operam por baixo dos panos. Minha base técnica começou com {java} e {kotlin}, e atualmente estou expandindo meu ecossistema com {golang}, mantendo uma perspectiva agnóstica de linguagem para selecionar a ferramenta mais apropriada para cada tarefa.",
                ),
                t(
                        "Over time, my knowledge has grown to include {microservices}, system {security}, {devops}, {compilers}, and {interpreters}. I now specialize in designing distributed, secure, and scalable systems, thriving in environments where consistency and performance are crucial. I perform well in backend engineering and infrastructure, building solid systems that can handle massive scale.",
                        "Com o tempo, meu conhecimento cresceu para incluir {microservices}, {security} de sistemas, {devops}, {compilers} e {interpreters}. Agora me especializo em projetar sistemas distribuídos, seguros e escaláveis, prosperando em ambientes onde consistência e performance são cruciais. Me saio bem na engenharia de backend e infraestrutura, construindo sistemas sólidos que podem lidar com escala massiva.",
                ),
        ],
};

export const experienceContent = {
        label: t("Experience", "Experiência"),
        title: t("Where I've worked", "Onde trabalhei"),
        items: [
                {
                        period: t("Jun 2026 — Present", "Jun 2026 — Presente"),
                        role: t("Co-Founder", "Co-Fundador"),
                        company: "BarberGrid",
                        description: t(
                                "Led the backend architecture for a multi-tenant barbershop SaaS, establishing engineering standards (OpenAPI-first and observability) and collaborating cross-functionally to ship reliable, compliant features.",
                                "Liderei a arquitetura de backend para um SaaS multi-tenant de barbearias, estabelecendo padrões de engenharia (OpenAPI-first e observabilidade) e colaborando de forma multifuncional para entregar funcionalidades confiáveis.",
                        ),
                        stack: [
                                "Go",
                                "OpenAPI",
                                "Docker",
                                "PostgreSQL",
                                "Observability",
                        ],
                },
                {
                        period: t("Apr 2026 — Present", "Abr 2026 — Presente"),
                        role: t("Software Engineer", "Engenheiro de Software"),
                        company: "Rede Lord",
                        description: t(
                                "Building a custom Minecraft server from scratch using Java and Minestom for packet handling, with ViaVersion for multi-protocol compatibility. Engineered an event-driven microservices ecosystem utilizing Apache Kafka for asynchronous communication, integrated with a backend API written in Go (Fiber) and strictly documented using OpenAPI specifications.",
                                "Construindo um servidor customizado de Minecraft do zero com Java e Minestom para manipulação de pacotes, com ViaVersion para compatibilidade multiprotocolo. Desenvolvi um ecossistema de microsserviços orientados a eventos usando Apache Kafka para comunicação assíncrona, integrado a uma API backend em Go (Fiber) e documentada com OpenAPI.",
                        ),
                        stack: [
                                "Java",
                                "Minestom",
                                "ViaVersion",
                                "Kafka",
                                "Go",
                                "Fiber",
                                "OpenAPI",
                        ],
                },
                {
                        period: t("Apr 2026 — Aug 2026", "Abr 2026 — Ago 2026"),
                        role: t("Full Stack Engineer", "Engenheiro Full Stack"),
                        company: "Self-employed",
                        description: t(
                                "Developing customized AI communication solutions to automate customer service via WhatsApp, utilizing Chatwoot as a management platform. Architecting the backend infrastructure entirely in Go, implementing RAG and MCP to provide context responses, integrating open-source LLMs running on local inference clusters via llama.cpp, and enhancing dynamic web scraping pipelines using Puppeteer.",
                                "Desenvolvendo soluções personalizadas de comunicação com IA para automação de atendimento via WhatsApp, utilizando Chatwoot como plataforma de gestão. Arquitetando a infraestrutura de backend em Go, implementando RAG e MCP para respostas contextuais, integrando LLMs open-source via clusters de inferência local com llama.cpp e aprimorando pipelines de web scraping com Puppeteer.",
                        ),
                        stack: [
                                "Go",
                                "RAG",
                                "MCP",
                                "llama.cpp",
                                "Chatwoot",
                                "Puppeteer",
                                "Docker",
                        ],
                },
                {
                        period: t("Jul 2024 — Present", "Jul 2024 — Presente"),
                        role: t("Project Manager & Infrastructure Lead", "Gerente de Projetos & Líder de Infraestrutura"),
                        company: "Hive-media",
                        description: t(
                                "Led the infrastructure migration from AWS to a bare-metal environment (Proxmox, Ceph, and IaC). Defined backend and infrastructure engineering, focusing on distributed systems and high-availability APIs for platforms including Aventrada and Launchpaid.",
                                "Liderei a migração de infraestrutura da AWS para um ambiente bare-metal (Proxmox, Ceph e IaC). Defini a engenharia de backend e infraestrutura, focando em sistemas distribuídos e APIs de alta disponibilidade para plataformas como Aventrada e Launchpaid.",
                        ),
                        stack: [
                                "Proxmox",
                                "Ceph",
                                "Terraform",
                                "Ansible",
                                "Tailscale",
                                "Hono",
                                "Bun",
                                "Stripe",
                        ],
                },
                {
                        period: t("Mar 2023 — Oct 2024", "Mar 2023 — Out 2024"),
                        role: t("Software Engineer", "Engenheiro de Software"),
                        company: "Hive-media",
                        description: t(
                                "Built scalable microservices, communication channels, and data processing pipelines. Key deliveries include Affiliate (video monitoring processing 30k+ daily videos with ML integration), 1Auth (E2E-encrypted account platform with RBAC), and RobloxMP (secure RMT marketplace with crypto payment gateway built from scratch).",
                                "Construí microsserviços escaláveis, canais de comunicação e pipelines de processamento de dados. As principais entregas incluem Affiliate (monitoramento processando mais de 30k vídeos/dia integrado a ML), 1Auth (plataforma criptografada ponta a ponta com RBAC) e RobloxMP (marketplace RMT seguro com gateway crypto desenvolvido do zero).",
                        ),
                        stack: [
                                "Node.js",
                                "TypeScript",
                                "Python",
                                "BullMQ",
                                "Redis",
                                "PostgreSQL",
                                "Docker Swarm",
                        ],
                },
        ],
};

export const projectsContent = {
        label: t("Projects", "Projetos"),
        title: t("What I've built", "O que construí"),
        items: [
                {
                        title: "Aventrada",
                        subtitle: t("Ticketing Platform", "Plataforma de Tickets"),
                        role: t("Software Engineer", "Engenheiro de Software"),
                        description: t(
                                "A ticketing platform focused on secure issuance, real-time payment control, and robust anti-fraud mechanisms. Implemented rigorous database transactional locks in PostgreSQL to prevent overbooking during massive sales traffic spikes, and integrated real-time state control and financial validation flows via Stripe.",
                                "Plataforma de tickets focada em emissão segura, controle de pagamentos em tempo real e mecanismos robustos antifraude. Implementei locks transacionais rigorosos no PostgreSQL para evitar overbooking durante picos massivos de vendas e integrei controle de estado em tempo real e fluxos de validação financeira via Stripe.",
                        ),
                        stack: [
                                "Hono",
                                "Bun",
                                "Redis",
                                "PostgreSQL",
                                "Sentry",
                                "Docker Swarm",
                                "Stripe",
                        ],
                },
                {
                        title: "Affiliate",
                        subtitle: t(
                                "Video Monitoring & Machine Learning Architecture",
                                "Monitoramento de Vídeo & Arquitetura de ML",
                        ),
                        role: t("Software Engineer", "Engenheiro de Software"),
                        description: t(
                                "Scalable video monitoring software for YouTube, Instagram, X, and TikTok, successfully processing over 30,000 videos daily. Integrated a dedicated Machine Learning microservice to verify the authenticity of user-generated content, handling message queuing and distributed processing to maintain reliable performance.",
                                "Software escalável de monitoramento de vídeos para YouTube, Instagram, X e TikTok, processando mais de 30.000 vídeos diariamente. Integrei um microsserviço dedicado de Machine Learning para verificar a autenticidade do conteúdo gerado pelos usuários, gerenciando filas de mensagens e processamento distribuído para manter a confiabilidade e performance.",
                        ),
                        stack: [
                                "Sentry",
                                "Bun",
                                "Redis",
                                "PostgreSQL",
                                "BullMQ",
                                "Docker Swarm",
                                "Label Studio",
                                "ML",
                        ],
                },
                {
                        title: "Launchpaid",
                        subtitle: t(
                                "Creator & Affiliate Marketing Platform",
                                "Plataforma de Marketing para Criadores & Afiliados",
                        ),
                        role: t("Software Engineer", "Engenheiro de Software"),
                        description: t(
                                "A multi-service platform focused on creator marketing and automated payment processing, specifically tailored for TikTok Shop campaigns. Engineered campaign management systems tracking metrics like GMV, views, and likes to automatically calculate complex creator payouts, and integrated Stripe for comprehensive payment routing.",
                                "Plataforma multi-serviços focada em marketing de influenciadores e processamento automatizado de pagamentos, feita especificamente para campanhas do TikTok Shop. Desenvolvi sistemas de gestão de campanhas que rastreiam métricas como GMV, visualizações e curtidas para calcular automaticamente os repasses aos criadores de conteúdo, integrando o Stripe para o roteamento completo dos pagamentos.",
                        ),
                        stack: [
                                "Bun",
                                "Hono",
                                "Python",
                                "FastAPI",
                                "PostgreSQL",
                                "Redis",
                                "Docker Swarm",
                                "Traefik",
                                "Stripe",
                        ],
                },
                {
                        title: "1Auth",
                        subtitle: t(
                                "Secure Account Management Platform",
                                "Plataforma de Gerenciamento Seguro de Contas",
                        ),
                        role: t("Software Engineer", "Engenheiro de Software"),
                        description: t(
                                "A secure platform enabling agencies to manage and register high-profile accounts utilizing end-to-end encryption between devices. Designed and implemented granular RBAC to strictly isolate team permissions.",
                                "Plataforma segura que permite às agências gerenciar e registrar contas de influenciadores e celebridades utilizando criptografia de ponta a ponta entre os dispositivos. Projetei e implementei controle de acesso (RBAC) granular para isolar rigorosamente as permissões de cada equipe.",
                        ),
                        stack: [
                                "Kotlin",
                                "Ktor",
                                "JetBrains Exposed",
                                "Jedis",
                                "Koin",
                                "Traefik",
                                "Docker Swarm",
                        ],
                },
                {
                        title: "Helix",
                        subtitle: t(
                                "Discord Bot Configuration Dashboard",
                                "Dashboard de Configuração de Bots para Discord",
                        ),
                        role: t("Software Engineer", "Engenheiro de Software"),
                        description: t(
                                "A configuration dashboard and provisioning system for Discord bots, featuring real-time updates and subscription management. Developed an automated provisioning system utilizing the Docker API, and integrated Stripe for recurring subscriptions.",
                                "Dashboard de configuração e sistema de provisionamento para bots do Discord, com atualizações em tempo real e gestão de assinaturas. Desenvolvi um sistema de provisionamento automatizado utilizando a API do Docker e integrei o Stripe para gerenciar assinaturas recorrentes.",
                        ),
                        stack: [
                                "Kotlin",
                                "Ktor",
                                "JetBrains Exposed",
                                "Koin",
                                "JDA",
                                "Jedis",
                                "PostgreSQL",
                                "Docker API",
                                "Stripe",
                        ],
                },
                {
                        title: "RobloxMP",
                        subtitle: t(
                                "Real-Money Trading & Crypto Payment Gateway",
                                "Marketplace RMT & Gateway de Pagamento Crypto",
                        ),
                        role: t("Software Engineer", "Engenheiro de Software"),
                        description: t(
                                "A secure Real-Money Trading (RMT) marketplace platform facilitating the exchange of Roblox in-game items for fiat and digital currencies. Architected a microservices-oriented backend to safely process virtual asset transactions, engineering the crypto payment solution from scratch with wallet encryption and blockchain double-spending prevention.",
                                "Marketplace seguro de Real-Money Trading (RMT) que facilita a troca de itens virtuais do Roblox por dinheiro real e criptomoedas. Estruturei um backend orientado a microsserviços para processar transações de ativos virtuais com segurança e construí do zero a solução de pagamento em crypto, implementando criptografia de carteiras e prevenção contra gasto duplo (double-spending) na blockchain.",
                        ),
                        stack: [
                                "Node.js",
                                "TypeScript",
                                "Python",
                                "PostgreSQL",
                                "RESTful APIs",
                                "Blockchain APIs",
                                "Microservices",
                        ],
                },
                {
                        title: "Hapaheaven",
                        subtitle: t("Web3 Social Media Platform", "Rede Social Web3"),
                        role: t("Software Engineer", "Engenheiro de Software"),
                        description: t(
                                "A Web3-integrated social media platform developed to handle decentralized user interactions and modern social networking features. Designed the backend architecture utilizing a modern TypeScript stack with strict data validation, and implemented efficient caching mechanisms to support real-time social features.",
                                "Rede social integrada com Web3, desenvolvida para lidar com interações descentralizadas e recursos modernos de engajamento. Projetei a arquitetura do backend utilizando uma stack TypeScript moderna com validação rigorosa de dados e implementei mecanismos de cache eficientes para suportar funcionalidades sociais em tempo real.",
                        ),
                        stack: ["TypeScript", "NestJS", "Drizzle ORM", "Zod", "Redis", "Docker"],
                },
                {
                        title: "Twitter Monitoring Dashboard",
                        subtitle: t(
                                "Real-Time Tweet Tracking System",
                                "Sistema de Rastreamento de Tweets em Tempo Real",
                        ),
                        role: t("Software Engineer", "Engenheiro de Software"),
                        description: t(
                                "A real-time monitoring dashboard designed to track, ingest, and record tweets based on specific hashtags, targeted keywords, or specific user profiles. Engineered a highly resilient data ingestion pipeline utilizing RabbitMQ to reliably queue and process high volumes of incoming streams, building the core engine to filter and store relevant data for downstream analytics.",
                                "Dashboard de monitoramento em tempo real projetado para rastrear, ingerir e salvar tweets com base em hashtags específicas, palavras-chave ou perfis de usuários alvo. Desenvolvi um pipeline de ingestão de dados altamente resiliente utilizando RabbitMQ para enfileirar e processar grandes volumes de streams de forma confiável, construindo o motor central que filtra e armazena os dados relevantes para análises futuras.",
                        ),
                        stack: ["TypeScript", "Node.js", "RabbitMQ", "PostgreSQL", "Docker"],
                },
                {
                        title: t("Bare-Metal Infrastructure", "Infraestrutura Bare-Metal"),
                        subtitle: t(
                                "Cloud Migration & Cost Optimization",
                                "Migração Cloud & Otimização de Custos",
                        ),
                        role: t("IT Engineer", "Engenheiro de TI"),
                        description: t(
                                "End-to-end migration of company infrastructure from AWS to a bare-metal environment. Utilized a Proxmox cluster and Ceph distributed storage to eliminate single points of failure, isolating machines using SDN with the entire infrastructure running securely behind a Tailscale VPN.",
                                "Migração de ponta a ponta da infraestrutura da empresa saindo da AWS para um ambiente bare-metal. Utilizei um cluster Proxmox e armazenamento distribuído Ceph para eliminar pontos únicos de falha, isolando as máquinas através de redes definidas por software (SDN), com toda a infraestrutura rodando de forma segura atrás de uma VPN Tailscale.",
                        ),
                        stack: [
                                "Proxmox",
                                "Ceph",
                                "Terraform",
                                "Ansible",
                                "Tailscale",
                                "CloudInit",
                        ],
                },
        ],
};

export const openSourceContent = {
        label: t("Open Source", "Código Aberto"),
        title: t("Open Source contributions", "Contribuições Open Source"),
        items: [
                {
                        name: "spigot-mcp",
                        repo: "https://github.com/zkingboos/spigot-mcp",
                        description: t(
                                "An MCP (Model Context Protocol) server designed for Spigot Minecraft servers with FastAsyncWorldEdit (FAWE) integration, enabling LLM-driven programmatic world editing and server actions.",
                                "Servidor MCP (Model Context Protocol) para servidores Minecraft Spigot com integração ao FastAsyncWorldEdit (FAWE), permitindo edição de mundos e ações no servidor via LLMs.",
                        ),
                        language: "Kotlin",
                        stars: 3,
                },
                {
                        name: "Portainer Action",
                        repo: "https://github.com/zkingboos/portainer-action",
                        description: t(
                                "A powerful GitHub Action designed to manage Portainer environments, allowing for seamless automation of stack deployments and updates directly through CI/CD workflows.",
                                "Uma GitHub Action projetada para gerenciar ambientes Portainer, permitindo a automação contínua de implantações e atualizações de stacks diretamente através de fluxos de CI/CD.",
                        ),
                        language: "JavaScript",
                        stars: 0,
                },
                {
                        name: "UniversalWrapper",
                        repo: "https://github.com/zkingboos/UniversalWrapper",
                        description: t(
                                "UniversalWrapper is a universal JDBC wrapper written in Java that simplifies database queries using functional interfaces, providing abstract MySQL and SQL support with built-in connection pooling through the HikariCP framework.",
                                "O UniversalWrapper é um wrapper JDBC universal escrito em Java que simplifica as consultas ao banco de dados usando interfaces funcionais. Ele fornece suporte abstrato a MySQL e SQL com pool de conexões integrado através do framework HikariCP.",
                        ),
                        language: "Java",
                        stars: 6,
                },
                {
                        name: "Don't ask to ask",
                        repo: "https://github.com/zkingboos/dontasktoask",
                        description: t(
                                "A pedagogical guide and repository that encourages efficient communication in programming communities by explaining why users should ask their questions directly instead of asking for permission to ask.",
                                "Um guia pedagógico que incentiva a comunicação eficiente em comunidades de programação, explicando por que os usuários devem fazer suas perguntas diretamente em vez de pedir permissão para perguntar.",
                        ),
                        language: "Markdown",
                        stars: 1,
                },
                {
                        name: "King Core",
                        repo: "https://github.com/zkingboos/king-core",
                        description: t(
                                "A modular ecosystem and dependency injection framework designed for Java applications, specifically tailored to simplify module management and service bus integration for Bukkit and Spigot servers.",
                                "Um ecossistema modular e framework de injeção de dependência projetado para aplicações Java, feito especificamente para simplificar o gerenciamento de módulos e a integração de barramentos de serviços para servidores Bukkit e Spigot.",
                        ),
                        language: "Java",
                        stars: 3,
                },
        ],
};

export const skillsContent = {
        label: t("Skills", "Habilidades"),
        title: t("Tech stack", "Stack técnica"),
        groups: [
                {
                        title: t("Languages", "Linguagens"),
                        items: ["Kotlin", "Java", "TypeScript", "GoLang", "Python"],
                },
                {
                        title: t("Frameworks", "Frameworks"),
                        items: ["Ktor", "SpringBoot", "Hono", "NestJS", "Drizzle", "Exposed"],
                },
                {
                        title: t("Infrastructure", "Infraestrutura"),
                        items: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions"],
                },
                {
                        title: t("Databases", "Bancos de Dados"),
                        items: ["PostgreSQL", "MySQL", "MariaDB", "Redis", "MongoDB"],
                },
        ],
};

export const contactContent = {
        label: t("Contact", "Contato"),
        title: t("Let's connect", "Vamos nos conectar"),
        description: t(
                "Interested in working together or just want to say hello? Feel free to reach out.",
                "Interessado em trabalhar junto ou apenas quer dizer olá? Fique à vontade para entrar em contato.",
        ),
        footer: t("Built with passion", "Construído com paixão"),
};

export const navLinks = [
        { href: "#about", label: t("about", "sobre") },
        { href: "#experience", label: t("experience", "experiência") },
        { href: "#projects", label: t("projects", "projetos") },
        { href: "#open-source", label: t("open source", "código aberto") },
        { href: "#skills", label: t("skills", "habilidades") },
        { href: "#contact", label: t("contact", "contato") },
];
