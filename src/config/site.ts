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
		"Expert in distributed, secure, and highly scalable systems. Focused on microservices, DevOps, and leveraging cutting-edge technologies to build sustainable solutions.",
		"Especialista em sistemas distribuídos, seguros e altamente escaláveis. Focado em microsserviços, DevOps e tecnologias de ponta para construir soluções sustentáveis.",
	),
};

export const aboutContent = {
	label: t("About", "Sobre"),
	title: t("Who I am", "Quem eu sou"),
	paragraphs: [
		t(
			"Hi, my name is {name}, I'm 21 years old, and a programming enthusiast. I'm very curious and intensely focused on understanding how things work under the hood. I started my journey programming with a sub-language called {skript} (mainly due to Minecraft) and soon moved to {java}. Four years later, I transitioned to {kotlin} and several others. Currently, I'm studying {golang} and discovering new passions, believing in a language-agnostic approach where the right tool is used for the right job.",
			"Olá, meu nome é {name}, tenho 21 anos e sou um entusiasta de programação. Sou muito curioso e intensamente focado em entender como as coisas funcionam por baixo dos panos. Comecei minha jornada programando com uma sub-linguagem chamada {skript} (principalmente por causa do Minecraft) e logo migrei para {java}. Quatro anos depois, fiz a transição para {kotlin} e várias outras. Atualmente, estou estudando {golang} e descobrindo novas paixões, acreditando em uma abordagem agnóstica de linguagem onde a ferramenta certa é usada para o trabalho certo.",
		),
		t(
			"Over recent years, my interests have expanded into {microservices}, {security}, {devops}, {compilers}, and {interpreters}. This curiosity quickly translated into my professional career. Today, I specialize in architecting highly scalable, secure, and distributed systems. I do well in settings where security and performance are crucial.",
			"Nos últimos anos, meus interesses se expandiram para {microservices}, {security}, {devops}, {compilers} e {interpreters}. Essa curiosidade rapidamente se traduziu na minha carreira profissional. Hoje, me especializo em arquitetar sistemas altamente escaláveis, seguros e distribuídos. Me saio bem em ambientes onde segurança e performance são cruciais.",
		),
	],
};

export const experienceContent = {
	label: t("Experience", "Experiência"),
	title: t("Where I've worked", "Onde trabalhei"),
	items: [
		{
			period: t("Dec 2025 — Present", "Dez 2025 — Presente"),
			role: t("Software Engineer", "Engenheiro de Software"),
			company: "Hivemedia / Aventrada",
			description: t(
				"Development of a high-concurrency concert ticketing platform focused on secure issuance, real-time payment control, and robust anti-fraud mechanisms. Implemented database transactional locks to prevent overbooking during massive traffic spikes.",
				"Desenvolvimento de uma plataforma de tickets para shows de alta concorrência, focada em emissão segura, controle de pagamento em tempo real e mecanismos robustos anti-fraude. Implementação de locks transacionais no banco para prevenir overbooking durante picos de tráfego.",
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
			period: t("May 2025 — Dec 2025", "Mai 2025 — Dez 2025"),
			role: t("Software Engineer", "Engenheiro de Software"),
			company: "Hivemedia / Affiliate",
			description: t(
				"Built a video monitoring platform for YouTube, Instagram, X, and TikTok, processing over 30,000 videos daily. Content authenticity verified through a dedicated Machine Learning microservice.",
				"Construção de uma plataforma de monitoramento de vídeos para YouTube, Instagram, X e TikTok, processando mais de 30.000 vídeos diariamente. Autenticidade de conteúdo verificada através de um microsserviço dedicado de Machine Learning.",
			),
			stack: [
				"Sentry",
				"Bun",
				"Redis",
				"PostgreSQL",
				"BullMQ",
				"Docker Swarm",
				"Label Studio",
			],
		},
		{
			period: t("Aug 2023 — Jul 2024", "Ago 2023 — Jul 2024"),
			role: t("IT Engineer", "Engenheiro de TI"),
			company: "Hivemedia",
			description: t(
				"Migrated from AWS to bare-metal, significantly reducing cloud costs. Utilized Proxmox cluster and Ceph distributed storage to eliminate single points of failure. Entire infrastructure running behind a VPN for secure access.",
				"Migração da AWS para bare-metal, reduzindo significativamente os custos de nuvem. Utilização de cluster Proxmox e armazenamento distribuído Ceph para eliminar pontos únicos de falha. Toda a infraestrutura rodando atrás de uma VPN para acesso seguro.",
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

export const projectsContent = {
	label: t("Projects", "Projetos"),
	title: t("What I've built", "O que construí"),
	items: [
		{
			title: "Aventrada",
			subtitle: t(
				"High-Concurrency Ticketing Platform",
				"Plataforma de Tickets de Alta Concorrência",
			),
			role: t("Software Engineer", "Engenheiro de Software"),
			description: t(
				"Development of a high-concurrency concert ticketing platform focused on secure issuance, real-time payment control, and robust anti-fraud mechanisms.",
				"Desenvolvimento de uma plataforma de tickets para shows de alta concorrência, focada em emissão segura, controle de pagamento em tempo real e mecanismos robustos anti-fraude.",
			),
			achievements: [
				t(
					"Implemented rigorous database transactional locks in PostgreSQL to prevent overbooking during massive sales traffic spikes.",
					"Implementação de locks transacionais rigorosos no PostgreSQL para prevenir overbooking durante picos massivos de vendas.",
				),
				t(
					"Integrated real-time state control and financial validation flows via Stripe.",
					"Integração de controle de estado em tempo real e fluxos de validação financeira via Stripe.",
				),
			],
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
				"Implementation of a highly scalable video monitoring software for YouTube, Instagram, X, and TikTok, successfully processing over 30,000 videos daily.",
				"Implementação de um software de monitoramento de vídeos altamente escalável para YouTube, Instagram, X e TikTok, processando com sucesso mais de 30.000 vídeos diariamente.",
			),
			achievements: [
				t(
					"Integrated a dedicated Machine Learning microservice to verify the authenticity of user-generated content.",
					"Integração de um microsserviço dedicado de Machine Learning para verificar a autenticidade de conteúdo gerado por usuários.",
				),
				t(
					"Handled message queuing and distributed processing to maintain reliable performance at scale.",
					"Gerenciamento de filas de mensagens e processamento distribuído para manter performance confiável em escala.",
				),
			],
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
				"Plataforma de Marketing de Criadores & Afiliados",
			),
			role: t("Software Engineer", "Engenheiro de Software"),
			description: t(
				"A multi-service platform focused on creator marketing and automated payment processing, specifically tailored for TikTok Shop campaigns.",
				"Uma plataforma multi-serviço focada em marketing de criadores e processamento automatizado de pagamentos, especificamente para campanhas do TikTok Shop.",
			),
			achievements: [
				t(
					"Engineered campaign management systems tracking metrics like GMV, views, and likes to automatically calculate complex creator payouts.",
					"Engenharia de sistemas de gerenciamento de campanhas rastreando métricas como GMV, visualizações e curtidas para calcular automaticamente pagamentos complexos de criadores.",
				),
				t(
					"Integrated Stripe for comprehensive payment routing and credit management.",
					"Integração do Stripe para roteamento abrangente de pagamentos e gerenciamento de créditos.",
				),
			],
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
			title: "1auth",
			subtitle: t(
				"Secure Account Management Platform",
				"Plataforma de Gerenciamento Seguro de Contas",
			),
			role: t("Software Engineer", "Engenheiro de Software"),
			description: t(
				"A highly secure platform enabling agencies to manage and register high-profile/celebrity accounts utilizing end-to-end encryption between devices.",
				"Uma plataforma altamente segura que permite agências gerenciarem e registrarem contas de alto perfil/celebridades utilizando criptografia de ponta a ponta entre dispositivos.",
			),
			achievements: [
				t(
					"Designed and implemented granular Role-Based Access Control (RBAC) to strictly isolate team permissions.",
					"Design e implementação de Controle de Acesso Baseado em Papéis (RBAC) granular para isolar estritamente permissões de equipes.",
				),
				t(
					"Architected the backend for high availability and load balancing.",
					"Arquitetura do backend para alta disponibilidade e balanceamento de carga.",
				),
			],
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
				"Dashboard de Configuração de Bots Discord",
			),
			role: t("Software Engineer", "Engenheiro de Software"),
			description: t(
				"A configuration dashboard and provisioning system for Discord bots, featuring real-time updates and subscription management.",
				"Um dashboard de configuração e sistema de provisionamento para bots Discord, com atualizações em tempo real e gerenciamento de assinaturas.",
			),
			achievements: [
				t(
					"Developed an automated provisioning system utilizing the Docker API.",
					"Desenvolvimento de um sistema de provisionamento automatizado utilizando a API do Docker.",
				),
				t(
					"Ensured high availability through horizontal scaling via Docker Swarm and integrated Stripe for recurring subscriptions.",
					"Alta disponibilidade através de escalabilidade horizontal via Docker Swarm e integração do Stripe para assinaturas recorrentes.",
				),
			],
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
				"A secure Real-Money Trading (RMT) marketplace platform facilitating the exchange of Roblox in-game items for fiat and digital currencies.",
				"Uma plataforma segura de marketplace de Real-Money Trading (RMT) facilitando a troca de itens in-game do Roblox por moedas fiduciárias e digitais.",
			),
			achievements: [
				t(
					"Architected a microservices-oriented backend to safely process virtual asset transactions.",
					"Arquitetura de um backend orientado a microsserviços para processar transações de ativos virtuais com segurança.",
				),
				t(
					"Engineered the crypto payment solution from scratch with wallet encryption and blockchain double-spending prevention.",
					"Engenharia da solução de pagamento crypto do zero com criptografia de carteira e prevenção de double-spending em blockchain.",
				),
			],
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
			subtitle: t(
				"Web3 Social Media Platform",
				"Plataforma de Mídia Social Web3",
			),
			role: t("Software Engineer", "Engenheiro de Software"),
			description: t(
				"A Web3-integrated social media platform developed to handle decentralized user interactions and modern social networking features.",
				"Uma plataforma de mídia social integrada com Web3, desenvolvida para lidar com interações descentralizadas de usuários e recursos modernos de redes sociais.",
			),
			achievements: [
				t(
					"Designed the backend architecture utilizing a modern TypeScript stack with strict data validation.",
					"Design da arquitetura backend utilizando uma stack moderna TypeScript com validação rigorosa de dados.",
				),
				t(
					"Implemented efficient caching mechanisms to support real-time social features.",
					"Implementação de mecanismos eficientes de cache para suportar funcionalidades sociais em tempo real.",
				),
			],
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
				"A real-time monitoring dashboard designed to track, ingest, and record tweets based on specific hashtags, targeted keywords, or specific user profiles.",
				"Um dashboard de monitoramento em tempo real projetado para rastrear, ingerir e registrar tweets com base em hashtags específicas, palavras-chave ou perfis de usuários.",
			),
			achievements: [
				t(
					"Engineered a highly resilient data ingestion pipeline utilizing RabbitMQ to reliably queue and process high volumes of incoming streams.",
					"Engenharia de um pipeline de ingestão de dados altamente resiliente utilizando RabbitMQ para enfileirar e processar altos volumes de streams de entrada de forma confiável.",
				),
				t(
					"Built the core processing engine to filter and store relevant tweets for downstream analytics.",
					"Construção do motor de processamento central para filtrar e armazenar tweets relevantes para análises downstream.",
				),
			],
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
				"End-to-end migration of company infrastructure from AWS to a bare-metal environment, significantly reducing cloud operational costs.",
				"Migração completa da infraestrutura da empresa da AWS para um ambiente bare-metal, reduzindo significativamente os custos operacionais de nuvem.",
			),
			achievements: [
				t(
					"Utilized a Proxmox cluster and Ceph distributed storage to eliminate single points of failure.",
					"Utilização de cluster Proxmox e armazenamento distribuído Ceph para eliminar pontos únicos de falha.",
				),
				t(
					"Isolated machines using SDN, with the entire infrastructure running behind a VPN (Tailscale) for secure access.",
					"Isolamento de máquinas usando SDN, com toda a infraestrutura rodando atrás de uma VPN (Tailscale) para acesso seguro.",
				),
			],
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
			name: "Portainer Action",
			repo: "https://github.com/zkingboos/portainer-action",
			description: t(
				"A powerful GitHub Action designed to manage Portainer environments, allowing for seamless automation of stack deployments and updates directly through CI/CD workflows.",
				"Uma poderosa GitHub Action projetada para gerenciar ambientes Portainer, permitindo a automação contínua de implantações e atualizações de stacks diretamente através de fluxos de CI/CD.",
			),
			language: "JavaScript",
			stars: 0,
		},
		{
			name: "UniversalWrapper",
			repo: "https://github.com/zkingboos/UniversalWrapper",
			description: t(
				"UniversalWrapper is a universal JDBC wrapper written in Java that simplifies database queries using functional interfaces, providing abstract MySQL and SQL support with built-in connection pooling through the HikariCP framework.",
				"UniversalWrapper é um wrapper JDBC universal escrito em Java que simplifica as consultas ao banco de dados usando interfaces funcionais, fornecendo suporte abstrato a MySQL e SQL com pool de conexões integrado através do framework HikariCP.",
			),
			language: "Java",
			stars: 6,
		},
		{
			name: "Don't ask to ask",
			repo: "https://github.com/zkingboos/dontasktoask",
			description: t(
				"A pedagogical guide and repository that encourages efficient communication in programming communities by explaining why users should ask their questions directly instead of asking for permission to ask.",
				"Um guia pedagógico e repositório que incentiva a comunicação eficiente em comunidades de programação, explicando por que os usuários devem fazer suas perguntas diretamente em vez de pedir permissão para perguntar.",
			),
			language: "Markdown",
			stars: 1,
		},
		{
			name: "King Core",
			repo: "https://github.com/zkingboos/king-core",
			description: t(
				"A modular ecosystem and dependency injection framework designed for Java applications, specifically tailored to simplify module management and service bus integration for Bukkit and Spigot servers.",
				"Um ecossistema modular e framework de injeção de dependência projetado para aplicações Java, especificamente adaptado para simplificar o gerenciamento de módulos e a integração de service bus para servidores Bukkit e Spigot.",
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
