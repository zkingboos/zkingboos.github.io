import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const renderP1 = () => {
    const raw = t("about.p1");
    const parts = raw.split(/\{(\w+)\}/g);
    return parts.map((part, i) => {
      if (part === "name") return <span key={i} className="text-foreground font-semibold">José Gabriel</span>;
      if (["skript", "java", "kotlin", "golang"].includes(part))
        return <span key={i} className="text-primary font-mono">{part === "skript" ? "Skript" : part === "java" ? "Java" : part === "kotlin" ? "Kotlin" : "GoLang"}</span>;
      return <span key={i}>{part}</span>;
    });
  };

  const renderP2 = () => {
    const raw = t("about.p2");
    const highlights: Record<string, string> = { microservices: "microservices", security: "system security", devops: "DevOps", compilers: "compilers", interpreters: "interpreters" };
    const ptHighlights: Record<string, string> = { microservices: "microsserviços", security: "segurança de sistemas", devops: "DevOps", compilers: "compiladores", interpreters: "interpretadores" };
    const parts = raw.split(/\{(\w+)\}/g);
    return parts.map((part, i) => {
      if (highlights[part] || ptHighlights[part])
        return <span key={i} className="text-foreground">{highlights[part] ?? ptHighlights[part] ?? part}</span>;
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            <span className="text-muted-foreground">//</span> {t("about.label")}
          </h2>
          <p className="text-3xl font-display font-bold mb-16">{t("about.title")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass rounded-lg p-8 space-y-6"
        >
          <p className="text-secondary-foreground/80 leading-relaxed text-sm">{renderP1()}</p>
          <p className="text-secondary-foreground/80 leading-relaxed text-sm">{renderP2()}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
