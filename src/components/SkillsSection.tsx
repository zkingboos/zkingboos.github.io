import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const skillGroups = [
  { key: "languages", items: ["Kotlin", "Java", "TypeScript", "GoLang", "Python"] },
  { key: "frameworks", items: ["Ktor", "SpringBoot", "Hono", "NestJS", "Drizzle", "Exposed"] },
  { key: "infrastructure", items: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions"] },
  { key: "databases", items: ["PostgreSQL", "MySQL", "MariaDB", "Redis", "MongoDB"] },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            <span className="text-muted-foreground">//</span> {t("skills.label")}
          </h2>
          <p className="text-3xl font-display font-bold mb-16">{t("skills.title")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-lg glass"
            >
              <h3 className="font-mono text-sm text-primary mb-4">{`> ${t(`skills.${group.key}`)}`}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-sm bg-muted text-foreground font-mono text-sm hover:glow-border hover:border-primary/30 border border-transparent transition-colors cursor-default"
                  >
                    {item}
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

export default SkillsSection;
