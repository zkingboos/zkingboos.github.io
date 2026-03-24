import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    items: ["Kotlin", "Java", "TypeScript", "GoLang", "Python"],
  },
  {
    title: "Frameworks",
    items: ["Ktor", "SpringBoot", "Hono", "NestJS", "Drizzle", "Exposed"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MariaDB", "Redis", "MongoDB"],
  },
];

const SkillsSection = () => {
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
            <span className="text-muted-foreground">//</span> Skills
          </h2>
          <p className="text-3xl font-display font-bold mb-16">Tech stack</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-lg border border-border bg-card"
            >
              <h3 className="font-mono text-sm text-primary mb-4">{`> ${group.title}`}</h3>
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
