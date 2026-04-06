import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsContent } from "@/config/site";

const ProjectsSection = () => {
  const { l } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            <span className="text-muted-foreground">//</span> {l(projectsContent.label)}
          </h2>
          <p className="text-3xl font-display font-bold mb-16">{l(projectsContent.title)}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsContent.items.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.1 }} className="group p-6 rounded-lg glass hover:border-primary/30 transition-all hover:glow-primary">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display text-lg font-semibold">{typeof project.title === "string" ? project.title : l(project.title)}</h3>
                  <p className="font-mono text-xs text-primary">{l(project.subtitle)}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0 ml-2">{l(project.role)}</span>
              </div>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">{l(project.description)}</p>
              <ul className="space-y-1.5 mb-4">
                {project.achievements?.map((a, j) => (
                  <li key={j} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">▹</span>
                    <span>{l(a)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-sm bg-secondary text-secondary-foreground font-mono text-[10px]">{tech}</span>
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
