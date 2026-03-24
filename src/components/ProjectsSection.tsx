import { motion } from "framer-motion";

const projects = [
  {
    title: "Aventrada",
    subtitle: "High-Concurrency Ticketing Platform",
    role: "Software Engineer",
    description: "Development of a high-concurrency concert ticketing platform focused on secure issuance, real-time payment control, and robust anti-fraud mechanisms.",
    achievements: [
      "Implemented rigorous database transactional locks in PostgreSQL to prevent overbooking during massive sales traffic spikes.",
      "Integrated real-time state control and financial validation flows via Stripe.",
    ],
    stack: ["Hono", "Bun", "Redis", "PostgreSQL", "Sentry", "Docker Swarm", "Stripe"],
  },
  {
    title: "Affiliate",
    subtitle: "Video Monitoring & Machine Learning Architecture",
    role: "Software Engineer",
    description: "Implementation of a highly scalable video monitoring software for YouTube, Instagram, X, and TikTok, successfully processing over 30,000 videos daily.",
    achievements: [
      "Integrated a dedicated Machine Learning microservice to verify the authenticity of user-generated content.",
      "Handled message queuing and distributed processing to maintain reliable performance at scale.",
    ],
    stack: ["Sentry", "Bun", "Redis", "PostgreSQL", "BullMQ", "Docker Swarm", "Label Studio", "ML"],
  },
  {
    title: "Launchpaid",
    subtitle: "Creator & Affiliate Marketing Platform",
    role: "Software Engineer",
    description: "A multi-service platform focused on creator marketing and automated payment processing, specifically tailored for TikTok Shop campaigns.",
    achievements: [
      "Engineered campaign management systems tracking metrics like GMV, views, and likes to automatically calculate complex creator payouts.",
      "Integrated Stripe for comprehensive payment routing and credit management.",
    ],
    stack: ["Bun", "Hono", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker Swarm", "Traefik", "Stripe"],
  },
  {
    title: "1auth",
    subtitle: "Secure Account Management Platform",
    role: "Software Engineer",
    description: "A highly secure platform enabling agencies to manage and register high-profile/celebrity accounts utilizing end-to-end encryption between devices.",
    achievements: [
      "Designed and implemented granular Role-Based Access Control (RBAC) to strictly isolate team permissions.",
      "Architected the backend for high availability and load balancing.",
    ],
    stack: ["Kotlin", "Ktor", "JetBrains Exposed", "Jedis", "Koin", "Traefik", "Docker Swarm"],
  },
  {
    title: "Helix",
    subtitle: "Discord Bot Configuration Dashboard",
    role: "Software Engineer",
    description: "A configuration dashboard and provisioning system for Discord bots, featuring real-time updates and subscription management.",
    achievements: [
      "Developed an automated provisioning system utilizing the Docker API.",
      "Ensured high availability through horizontal scaling via Docker Swarm and integrated Stripe for recurring subscriptions.",
    ],
    stack: ["Kotlin", "Ktor", "JetBrains Exposed", "Koin", "JDA", "Jedis", "PostgreSQL", "Docker API", "Stripe"],
  },
  {
    title: "RobloxMP",
    subtitle: "Real-Money Trading & Crypto Payment Gateway",
    role: "Software Engineer",
    description: "A secure Real-Money Trading (RMT) marketplace platform facilitating the exchange of Roblox in-game items for fiat and digital currencies.",
    achievements: [
      "Architected a microservices-oriented backend to safely process virtual asset transactions.",
      "Engineered the crypto payment solution from scratch with wallet encryption and blockchain double-spending prevention.",
    ],
    stack: ["Node.js", "TypeScript", "Python", "PostgreSQL", "RESTful APIs", "Blockchain APIs", "Microservices"],
  },
  {
    title: "Hapaheaven",
    subtitle: "Web3 Social Media Platform",
    role: "Software Engineer",
    description: "A Web3-integrated social media platform developed to handle decentralized user interactions and modern social networking features.",
    achievements: [
      "Designed the backend architecture utilizing a modern TypeScript stack with strict data validation.",
      "Implemented efficient caching mechanisms to support real-time social features.",
    ],
    stack: ["TypeScript", "NestJS", "Drizzle ORM", "Zod", "Redis", "Docker"],
  },
  {
    title: "Twitter Monitoring Dashboard",
    subtitle: "Real-Time Tweet Tracking System",
    role: "Software Engineer",
    description: "A real-time monitoring dashboard designed to track, ingest, and record tweets based on specific hashtags, targeted keywords, or specific user profiles.",
    achievements: [
      "Engineered a highly resilient data ingestion pipeline utilizing RabbitMQ to reliably queue and process high volumes of incoming streams.",
      "Built the core processing engine to filter and store relevant tweets for downstream analytics.",
    ],
    stack: ["TypeScript", "Node.js", "RabbitMQ", "PostgreSQL", "Docker"],
  },
  {
    title: "Bare-Metal Infrastructure",
    subtitle: "Cloud Migration & Cost Optimization",
    role: "IT Engineer",
    description: "End-to-end migration of company infrastructure from AWS to a bare-metal environment, significantly reducing cloud operational costs.",
    achievements: [
      "Utilized a Proxmox cluster and Ceph distributed storage to eliminate single points of failure.",
      "Isolated machines using SDN, with the entire infrastructure running behind a VPN (Tailscale) for secure access.",
    ],
    stack: ["Proxmox", "Ceph", "Terraform", "Ansible", "Tailscale", "CloudInit"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            <span className="text-muted-foreground">//</span> Projects
          </h2>
          <p className="text-3xl font-display font-bold mb-16">What I've built</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                  <p className="font-mono text-xs text-primary">{project.subtitle}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0 ml-2">{project.role}</span>
              </div>

              <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">{project.description}</p>

              <ul className="space-y-1.5 mb-4">
                {project.achievements.map((a, j) => (
                  <li key={j} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">▹</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-sm bg-secondary text-secondary-foreground font-mono text-[10px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
