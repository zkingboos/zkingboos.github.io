import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutContent, personalInfo } from "@/config/site";

const highlightMap: Record<string, { className: string; display: string }> = {
  name: { className: "text-foreground font-semibold", display: "" },
  skript: { className: "text-primary font-mono", display: "Skript" },
  java: { className: "text-primary font-mono", display: "Java" },
  kotlin: { className: "text-primary font-mono", display: "Kotlin" },
  golang: { className: "text-primary font-mono", display: "GoLang" },
  microservices: { className: "text-foreground", display: "" },
  security: { className: "text-foreground", display: "" },
  devops: { className: "text-foreground", display: "" },
  compilers: { className: "text-foreground", display: "" },
  interpreters: { className: "text-foreground", display: "" },
};

const renderParagraph = (text: string) => {
  const parts = text.split(/\{(\w+)\}/g);
  return parts.map((part, i) => {
    const highlight = highlightMap[part];
    if (highlight) {
      const display = highlight.display || (part === "name" ? personalInfo.name : part);
      return <span key={i} className={highlight.className}>{display}</span>;
    }
    return <span key={i}>{part}</span>;
  });
};

const AboutSection = () => {
  const { l } = useLanguage();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            <span className="text-muted-foreground">//</span> {l(aboutContent.label)}
          </h2>
          <p className="text-3xl font-display font-bold mb-16">{l(aboutContent.title)}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="glass rounded-lg p-8 space-y-6">
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i} className="text-secondary-foreground/80 leading-relaxed text-sm">
              {renderParagraph(l(p))}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
