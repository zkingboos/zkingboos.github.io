import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { openSourceContent } from "@/config/site";
import { ExternalLink, Star } from "lucide-react";

const languageColors: Record<string, string> = {
  Java: "bg-[#b07219]",
  Kotlin: "bg-[#A97BFF]",
  TypeScript: "bg-[#3178c6]",
  Python: "bg-[#3572A5]",
  Go: "bg-[#00ADD8]",
  JavaScript: "bg-[#f1e05a]",
  Rust: "bg-[#dea584]",
};

const OpenSourceSection = () => {
  const { l } = useLanguage();

  if (openSourceContent.items.length === 0) return null;

  return (
    <section id="open-source" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            <span className="text-muted-foreground">//</span> {l(openSourceContent.label)}
          </h2>
          <p className="text-3xl font-display font-bold mb-16">{l(openSourceContent.title)}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openSourceContent.items.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
            >
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-lg glass hover:border-primary/30 transition-all hover:glow-primary group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                </div>

                <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">
                  {l(project.description)}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-3 h-3 rounded-full ${languageColors[project.language] ?? "bg-muted-foreground"}`} />
                    <span className="font-mono text-xs text-muted-foreground">{project.language}</span>
                  </div>
                  {project.stars > 0 && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-muted-foreground" />
                      <span className="font-mono text-xs text-muted-foreground">{project.stars}</span>
                    </div>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
