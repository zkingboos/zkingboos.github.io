import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.about": "about",
    "nav.experience": "experience",
    "nav.projects": "projects",
    "nav.skills": "skills",
    "nav.contact": "contact",

    // Hero
    "hero.whoami": "whoami",
    "hero.role": "Software Engineer",
    "hero.description": "Expert in distributed, secure, and highly scalable systems. Focused on microservices, DevOps, and leveraging cutting-edge technologies to build sustainable solutions.",
    "hero.github": "GitHub",
    "hero.linkedin": "LinkedIn",
    "hero.downloadCv": "Download CV",
    "hero.contact": "Contact",

    // About
    "about.label": "About",
    "about.title": "Who I am",
    "about.p1": "Hi, my name is {name}, I'm 21 years old, and a programming enthusiast. I'm very curious and intensely focused on understanding how things work under the hood. I started my journey programming with a sub-language called {skript} (mainly due to Minecraft) and soon moved to {java}. Four years later, I transitioned to {kotlin} and several others. Currently, I'm studying {golang} and discovering new passions, believing in a language-agnostic approach where the right tool is used for the right job.",
    "about.p2": "Over recent years, my interests have expanded into {microservices}, {security}, {devops}, {compilers}, and {interpreters}. This curiosity quickly translated into my professional career. Today, I specialize in architecting highly scalable, secure, and distributed systems. I do well in settings where security and performance are crucial.",

    // Experience
    "exp.label": "Experience",
    "exp.title": "Where I've worked",
    "exp.hivemedia_aventrada.period": "Dec 2025 — Present",
    "exp.hivemedia_aventrada.role": "Software Engineer",
    "exp.hivemedia_aventrada.company": "Hivemedia / Aventrada",
    "exp.hivemedia_aventrada.desc": "Development of a high-concurrency concert ticketing platform focused on secure issuance, real-time payment control, and robust anti-fraud mechanisms. Implemented database transactional locks to prevent overbooking during massive traffic spikes.",
    "exp.hivemedia_affiliate.period": "May 2025 — Dec 2025",
    "exp.hivemedia_affiliate.role": "Software Engineer",
    "exp.hivemedia_affiliate.company": "Hivemedia / Affiliate",
    "exp.hivemedia_affiliate.desc": "Built a video monitoring platform for YouTube, Instagram, X, and TikTok, processing over 30,000 videos daily. Content authenticity verified through a dedicated Machine Learning microservice.",
    "exp.hivemedia_infra.period": "Aug 2023 — Jul 2024",
    "exp.hivemedia_infra.role": "IT Engineer",
    "exp.hivemedia_infra.company": "Hivemedia",
    "exp.hivemedia_infra.desc": "Migrated from AWS to bare-metal, significantly reducing cloud costs. Utilized Proxmox cluster and Ceph distributed storage to eliminate single points of failure. Entire infrastructure running behind a VPN for secure access.",

    // Projects
    "proj.label": "Projects",
    "proj.title": "What I've built",
    "proj.aventrada.title": "Aventrada",
    "proj.aventrada.subtitle": "High-Concurrency Ticketing Platform",
    "proj.aventrada.role": "Software Engineer",
    "proj.aventrada.desc": "Development of a high-concurrency concert ticketing platform focused on secure issuance, real-time payment control, and robust anti-fraud mechanisms.",
    "proj.aventrada.a1": "Implemented rigorous database transactional locks in PostgreSQL to prevent overbooking during massive sales traffic spikes.",
    "proj.aventrada.a2": "Integrated real-time state control and financial validation flows via Stripe.",
    "proj.affiliate.title": "Affiliate",
    "proj.affiliate.subtitle": "Video Monitoring & Machine Learning Architecture",
    "proj.affiliate.role": "Software Engineer",
    "proj.affiliate.desc": "Implementation of a highly scalable video monitoring software for YouTube, Instagram, X, and TikTok, successfully processing over 30,000 videos daily.",
    "proj.affiliate.a1": "Integrated a dedicated Machine Learning microservice to verify the authenticity of user-generated content.",
    "proj.affiliate.a2": "Handled message queuing and distributed processing to maintain reliable performance at scale.",
    "proj.launchpaid.title": "Launchpaid",
    "proj.launchpaid.subtitle": "Creator & Affiliate Marketing Platform",
    "proj.launchpaid.role": "Software Engineer",
    "proj.launchpaid.desc": "A multi-service platform focused on creator marketing and automated payment processing, specifically tailored for TikTok Shop campaigns.",
    "proj.launchpaid.a1": "Engineered campaign management systems tracking metrics like GMV, views, and likes to automatically calculate complex creator payouts.",
    "proj.launchpaid.a2": "Integrated Stripe for comprehensive payment routing and credit management.",
    "proj.1auth.title": "1auth",
    "proj.1auth.subtitle": "Secure Account Management Platform",
    "proj.1auth.role": "Software Engineer",
    "proj.1auth.desc": "A highly secure platform enabling agencies to manage and register high-profile/celebrity accounts utilizing end-to-end encryption between devices.",
    "proj.1auth.a1": "Designed and implemented granular Role-Based Access Control (RBAC) to strictly isolate team permissions.",
    "proj.1auth.a2": "Architected the backend for high availability and load balancing.",
    "proj.helix.title": "Helix",
    "proj.helix.subtitle": "Discord Bot Configuration Dashboard",
    "proj.helix.role": "Software Engineer",
    "proj.helix.desc": "A configuration dashboard and provisioning system for Discord bots, featuring real-time updates and subscription management.",
    "proj.helix.a1": "Developed an automated provisioning system utilizing the Docker API.",
    "proj.helix.a2": "Ensured high availability through horizontal scaling via Docker Swarm and integrated Stripe for recurring subscriptions.",
    "proj.robloxmp.title": "RobloxMP",
    "proj.robloxmp.subtitle": "Real-Money Trading & Crypto Payment Gateway",
    "proj.robloxmp.role": "Software Engineer",
    "proj.robloxmp.desc": "A secure Real-Money Trading (RMT) marketplace platform facilitating the exchange of Roblox in-game items for fiat and digital currencies.",
    "proj.robloxmp.a1": "Architected a microservices-oriented backend to safely process virtual asset transactions.",
    "proj.robloxmp.a2": "Engineered the crypto payment solution from scratch with wallet encryption and blockchain double-spending prevention.",
    "proj.hapaheaven.title": "Hapaheaven",
    "proj.hapaheaven.subtitle": "Web3 Social Media Platform",
    "proj.hapaheaven.role": "Software Engineer",
    "proj.hapaheaven.desc": "A Web3-integrated social media platform developed to handle decentralized user interactions and modern social networking features.",
    "proj.hapaheaven.a1": "Designed the backend architecture utilizing a modern TypeScript stack with strict data validation.",
    "proj.hapaheaven.a2": "Implemented efficient caching mechanisms to support real-time social features.",
    "proj.twitter.title": "Twitter Monitoring Dashboard",
    "proj.twitter.subtitle": "Real-Time Tweet Tracking System",
    "proj.twitter.role": "Software Engineer",
    "proj.twitter.desc": "A real-time monitoring dashboard designed to track, ingest, and record tweets based on specific hashtags, targeted keywords, or specific user profiles.",
    "proj.twitter.a1": "Engineered a highly resilient data ingestion pipeline utilizing RabbitMQ to reliably queue and process high volumes of incoming streams.",
    "proj.twitter.a2": "Built the core processing engine to filter and store relevant tweets for downstream analytics.",
    "proj.baremetal.title": "Bare-Metal Infrastructure",
    "proj.baremetal.subtitle": "Cloud Migration & Cost Optimization",
    "proj.baremetal.role": "IT Engineer",
    "proj.baremetal.desc": "End-to-end migration of company infrastructure from AWS to a bare-metal environment, significantly reducing cloud operational costs.",
    "proj.baremetal.a1": "Utilized a Proxmox cluster and Ceph distributed storage to eliminate single points of failure.",
    "proj.baremetal.a2": "Isolated machines using SDN, with the entire infrastructure running behind a VPN (Tailscale) for secure access.",

    // Skills
    "skills.label": "Skills",
    "skills.title": "Tech stack",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks",
    "skills.infrastructure": "Infrastructure",
    "skills.databases": "Databases",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Let's connect",
    "contact.desc": "Interested in working together or just want to say hello? Feel free to reach out.",
    "contact.footer": "Built with passion",
  },
  pt: {
    // Nav
    "nav.about": "sobre",
    "nav.experience": "experiência",
    "nav.projects": "projetos",
    "nav.skills": "habilidades",
    "nav.contact": "contato",

    // Hero
    "hero.whoami": "whoami",
    "hero.role": "Engenheiro de Software",
    "hero.description": "Especialista em sistemas distribuídos, seguros e altamente escaláveis. Focado em microsserviços, DevOps e tecnologias de ponta para construir soluções sustentáveis.",
    "hero.github": "GitHub",
    "hero.linkedin": "LinkedIn",
    "hero.downloadCv": "Baixar CV",
    "hero.contact": "Contato",

    // About
    "about.label": "Sobre",
    "about.title": "Quem eu sou",
    "about.p1": "Olá, meu nome é {name}, tenho 21 anos e sou um entusiasta de programação. Sou muito curioso e intensamente focado em entender como as coisas funcionam por baixo dos panos. Comecei minha jornada programando com uma sub-linguagem chamada {skript} (principalmente por causa do Minecraft) e logo migrei para {java}. Quatro anos depois, fiz a transição para {kotlin} e várias outras. Atualmente, estou estudando {golang} e descobrindo novas paixões, acreditando em uma abordagem agnóstica de linguagem onde a ferramenta certa é usada para o trabalho certo.",
    "about.p2": "Nos últimos anos, meus interesses se expandiram para {microservices}, {security}, {devops}, {compilers} e {interpreters}. Essa curiosidade rapidamente se traduziu na minha carreira profissional. Hoje, me especializo em arquitetar sistemas altamente escaláveis, seguros e distribuídos. Me saio bem em ambientes onde segurança e performance são cruciais.",

    // Experience
    "exp.label": "Experiência",
    "exp.title": "Onde trabalhei",
    "exp.hivemedia_aventrada.period": "Dez 2025 — Presente",
    "exp.hivemedia_aventrada.role": "Engenheiro de Software",
    "exp.hivemedia_aventrada.company": "Hivemedia / Aventrada",
    "exp.hivemedia_aventrada.desc": "Desenvolvimento de uma plataforma de tickets para shows de alta concorrência, focada em emissão segura, controle de pagamento em tempo real e mecanismos robustos anti-fraude. Implementação de locks transacionais no banco para prevenir overbooking durante picos de tráfego.",
    "exp.hivemedia_affiliate.period": "Mai 2025 — Dez 2025",
    "exp.hivemedia_affiliate.role": "Engenheiro de Software",
    "exp.hivemedia_affiliate.company": "Hivemedia / Affiliate",
    "exp.hivemedia_affiliate.desc": "Construção de uma plataforma de monitoramento de vídeos para YouTube, Instagram, X e TikTok, processando mais de 30.000 vídeos diariamente. Autenticidade de conteúdo verificada através de um microsserviço dedicado de Machine Learning.",
    "exp.hivemedia_infra.period": "Ago 2023 — Jul 2024",
    "exp.hivemedia_infra.role": "Engenheiro de TI",
    "exp.hivemedia_infra.company": "Hivemedia",
    "exp.hivemedia_infra.desc": "Migração da AWS para bare-metal, reduzindo significativamente os custos de nuvem. Utilização de cluster Proxmox e armazenamento distribuído Ceph para eliminar pontos únicos de falha. Toda a infraestrutura rodando atrás de uma VPN para acesso seguro.",

    // Projects
    "proj.label": "Projetos",
    "proj.title": "O que construí",
    "proj.aventrada.title": "Aventrada",
    "proj.aventrada.subtitle": "Plataforma de Tickets de Alta Concorrência",
    "proj.aventrada.role": "Engenheiro de Software",
    "proj.aventrada.desc": "Desenvolvimento de uma plataforma de tickets para shows de alta concorrência, focada em emissão segura, controle de pagamento em tempo real e mecanismos robustos anti-fraude.",
    "proj.aventrada.a1": "Implementação de locks transacionais rigorosos no PostgreSQL para prevenir overbooking durante picos massivos de vendas.",
    "proj.aventrada.a2": "Integração de controle de estado em tempo real e fluxos de validação financeira via Stripe.",
    "proj.affiliate.title": "Affiliate",
    "proj.affiliate.subtitle": "Monitoramento de Vídeo & Arquitetura de ML",
    "proj.affiliate.role": "Engenheiro de Software",
    "proj.affiliate.desc": "Implementação de um software de monitoramento de vídeos altamente escalável para YouTube, Instagram, X e TikTok, processando com sucesso mais de 30.000 vídeos diariamente.",
    "proj.affiliate.a1": "Integração de um microsserviço dedicado de Machine Learning para verificar a autenticidade de conteúdo gerado por usuários.",
    "proj.affiliate.a2": "Gerenciamento de filas de mensagens e processamento distribuído para manter performance confiável em escala.",
    "proj.launchpaid.title": "Launchpaid",
    "proj.launchpaid.subtitle": "Plataforma de Marketing de Criadores & Afiliados",
    "proj.launchpaid.role": "Engenheiro de Software",
    "proj.launchpaid.desc": "Uma plataforma multi-serviço focada em marketing de criadores e processamento automatizado de pagamentos, especificamente para campanhas do TikTok Shop.",
    "proj.launchpaid.a1": "Engenharia de sistemas de gerenciamento de campanhas rastreando métricas como GMV, visualizações e curtidas para calcular automaticamente pagamentos complexos de criadores.",
    "proj.launchpaid.a2": "Integração do Stripe para roteamento abrangente de pagamentos e gerenciamento de créditos.",
    "proj.1auth.title": "1auth",
    "proj.1auth.subtitle": "Plataforma de Gerenciamento Seguro de Contas",
    "proj.1auth.role": "Engenheiro de Software",
    "proj.1auth.desc": "Uma plataforma altamente segura que permite agências gerenciarem e registrarem contas de alto perfil/celebridades utilizando criptografia de ponta a ponta entre dispositivos.",
    "proj.1auth.a1": "Design e implementação de Controle de Acesso Baseado em Papéis (RBAC) granular para isolar estritamente permissões de equipes.",
    "proj.1auth.a2": "Arquitetura do backend para alta disponibilidade e balanceamento de carga.",
    "proj.helix.title": "Helix",
    "proj.helix.subtitle": "Dashboard de Configuração de Bots Discord",
    "proj.helix.role": "Engenheiro de Software",
    "proj.helix.desc": "Um dashboard de configuração e sistema de provisionamento para bots Discord, com atualizações em tempo real e gerenciamento de assinaturas.",
    "proj.helix.a1": "Desenvolvimento de um sistema de provisionamento automatizado utilizando a API do Docker.",
    "proj.helix.a2": "Alta disponibilidade através de escalabilidade horizontal via Docker Swarm e integração do Stripe para assinaturas recorrentes.",
    "proj.robloxmp.title": "RobloxMP",
    "proj.robloxmp.subtitle": "Marketplace RMT & Gateway de Pagamento Crypto",
    "proj.robloxmp.role": "Engenheiro de Software",
    "proj.robloxmp.desc": "Uma plataforma segura de marketplace de Real-Money Trading (RMT) facilitando a troca de itens in-game do Roblox por moedas fiduciárias e digitais.",
    "proj.robloxmp.a1": "Arquitetura de um backend orientado a microsserviços para processar transações de ativos virtuais com segurança.",
    "proj.robloxmp.a2": "Engenharia da solução de pagamento crypto do zero com criptografia de carteira e prevenção de double-spending em blockchain.",
    "proj.hapaheaven.title": "Hapaheaven",
    "proj.hapaheaven.subtitle": "Plataforma de Mídia Social Web3",
    "proj.hapaheaven.role": "Engenheiro de Software",
    "proj.hapaheaven.desc": "Uma plataforma de mídia social integrada com Web3, desenvolvida para lidar com interações descentralizadas de usuários e recursos modernos de redes sociais.",
    "proj.hapaheaven.a1": "Design da arquitetura backend utilizando uma stack moderna TypeScript com validação rigorosa de dados.",
    "proj.hapaheaven.a2": "Implementação de mecanismos eficientes de cache para suportar funcionalidades sociais em tempo real.",
    "proj.twitter.title": "Twitter Monitoring Dashboard",
    "proj.twitter.subtitle": "Sistema de Rastreamento de Tweets em Tempo Real",
    "proj.twitter.role": "Engenheiro de Software",
    "proj.twitter.desc": "Um dashboard de monitoramento em tempo real projetado para rastrear, ingerir e registrar tweets com base em hashtags específicas, palavras-chave ou perfis de usuários.",
    "proj.twitter.a1": "Engenharia de um pipeline de ingestão de dados altamente resiliente utilizando RabbitMQ para enfileirar e processar altos volumes de streams de entrada de forma confiável.",
    "proj.twitter.a2": "Construção do motor de processamento central para filtrar e armazenar tweets relevantes para análises downstream.",
    "proj.baremetal.title": "Infraestrutura Bare-Metal",
    "proj.baremetal.subtitle": "Migração Cloud & Otimização de Custos",
    "proj.baremetal.role": "Engenheiro de TI",
    "proj.baremetal.desc": "Migração completa da infraestrutura da empresa da AWS para um ambiente bare-metal, reduzindo significativamente os custos operacionais de nuvem.",
    "proj.baremetal.a1": "Utilização de cluster Proxmox e armazenamento distribuído Ceph para eliminar pontos únicos de falha.",
    "proj.baremetal.a2": "Isolamento de máquinas usando SDN, com toda a infraestrutura rodando atrás de uma VPN (Tailscale) para acesso seguro.",

    // Skills
    "skills.label": "Habilidades",
    "skills.title": "Stack técnica",
    "skills.languages": "Linguagens",
    "skills.frameworks": "Frameworks",
    "skills.infrastructure": "Infraestrutura",
    "skills.databases": "Bancos de Dados",

    // Contact
    "contact.label": "Contato",
    "contact.title": "Vamos nos conectar",
    "contact.desc": "Interessado em trabalhar junto ou apenas quer dizer olá? Fique à vontade para entrar em contato.",
    "contact.footer": "Feito com paixão",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "pt" : "en"));

  const t = (key: string) => translations[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
