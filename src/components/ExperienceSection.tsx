import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const experienceKeys = ["hivemedia_aventrada", "hivemedia_affiliate", "hivemedia_infra"] as const;
const stacks: Record<string, string[]> = {
  hivemedia_aventrada: ["Hono", "Bun", "Redis", "PostgreSQL", "Sentry", "Docker Swarm", "Stripe"],
  hivemedia_affiliate: ["Sentry", "Bun", "Redis", "PostgreSQL", "BullMQ", "Docker Swarm", "Label Studio"],
  hivemedia_infra: ["Proxmox", "Ceph", "Terraform", "Ansible", "Tailscale", "CloudInit"],
};

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            <span className="text-muted-foreground">//</span> {t("exp.label")}
          </h2>
          <p className="text-3xl font-display font-bold mb-16">{t("exp.title")}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-16">
            {experienceKeys.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                <div className="absolute left-0 md:left-8 top-1.5 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />
                <p className="font-mono text-xs text-muted-foreground mb-2">{t(`exp.${key}.period`)}</p>
                <h3 className="font-display text-xl font-semibold mb-1">{t(`exp.${key}.role`)}</h3>
                <p className="text-primary font-mono text-sm mb-3">{t(`exp.${key}.company`)}</p>
                <p className="text-secondary-foreground/70 leading-relaxed mb-4 text-sm">{t(`exp.${key}.desc`)}</p>
                <div className="flex flex-wrap gap-2">
                  {stacks[key].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-sm bg-secondary text-secondary-foreground font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
