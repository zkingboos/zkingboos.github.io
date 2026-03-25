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

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="shrink-0 mx-auto md:mx-0"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden glass border border-border relative group">
              {personalInfo.profilePhoto ? (
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/50 gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="font-mono text-xs">foto</span>
                </div>
              )}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }} className="glass rounded-lg p-8 space-y-6 flex-1">
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i} className="text-secondary-foreground/80 leading-relaxed text-sm">
                {renderParagraph(l(p))}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
