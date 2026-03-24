import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const projectKeys = [
  "aventrada", "affiliate", "launchpaid", "1auth", "helix", "robloxmp", "hapaheaven", "twitter", "baremetal",
] as const;

const stacks: Record<string, string[]> = {
  aventrada: ["Hono", "Bun", "Redis", "PostgreSQL", "Sentry", "Docker Swarm", "Stripe"],
  affiliate: ["Sentry", "Bun", "Redis", "PostgreSQL", "BullMQ", "Docker Swarm", "Label Studio", "ML"],
  launchpaid: ["Bun", "Hono", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker Swarm", "Traefik", "Stripe"],
  "1auth": ["Kotlin", "Ktor", "JetBrains Exposed", "Jedis", "Koin", "Traefik", "Docker Swarm"],
  helix: ["Kotlin", "Ktor", "JetBrains Exposed", "Koin", "JDA", "Jedis", "PostgreSQL", "Docker API", "Stripe"],
  robloxmp: ["Node.js", "TypeScript", "Python", "PostgreSQL", "RESTful APIs", "Blockchain APIs", "Microservices"],
  hapaheaven: ["TypeScript", "NestJS", "Drizzle ORM", "Zod", "Redis", "Docker"],
  twitter: ["TypeScript", "Node.js", "RabbitMQ", "PostgreSQL", "Docker"],
  baremetal: ["Proxmox", "Ceph", "Terraform", "Ansible", "Tailscale", "CloudInit"],
};

const ProjectsSection = () => {
  const { t } = useLanguage();

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
            <span className="text-muted-foreground">//</span> {t("proj.label")}
          </h2>
          <p className="text-3xl font-display font-bold mb-16">{t("proj.title")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="group p-6 rounded-lg glass hover:border-primary/30 transition-all hover:glow-primary"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display text-lg font-semibold">{t(`proj.${key}.title`)}</h3>
                  <p className="font-mono text-xs text-primary">{t(`proj.${key}.subtitle`)}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0 ml-2">{t(`proj.${key}.role`)}</span>
              </div>

              <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">{t(`proj.${key}.desc`)}</p>

              <ul className="space-y-1.5 mb-4">
                {[t(`proj.${key}.a1`), t(`proj.${key}.a2`)].map((a, j) => (
                  <li key={j} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">▹</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {stacks[key].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-sm bg-secondary text-secondary-foreground font-mono text-[10px]">
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
