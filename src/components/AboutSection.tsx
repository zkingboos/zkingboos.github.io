import { motion } from "framer-motion";

const AboutSection = () => {
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
            <span className="text-muted-foreground">//</span> About
          </h2>
          <p className="text-3xl font-display font-bold mb-16">Who I am</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass rounded-lg p-8 space-y-6"
        >
          <p className="text-secondary-foreground/80 leading-relaxed text-sm">
            Hi, my name is <span className="text-foreground font-semibold">José Gabriel</span>, I'm 21 years old, and a programming enthusiast. I'm very curious and intensely focused on understanding how things work under the hood. I started my journey programming with a sub-language called <span className="text-primary font-mono">Skript</span> (mainly due to Minecraft) and soon moved to <span className="text-primary font-mono">Java</span>. Four years later, I transitioned to <span className="text-primary font-mono">Kotlin</span> and several others. Currently, I'm studying <span className="text-primary font-mono">GoLang</span> and discovering new passions, believing in a language-agnostic approach where the right tool is used for the right job.
          </p>
          <p className="text-secondary-foreground/80 leading-relaxed text-sm">
            Over recent years, my interests have expanded into <span className="text-foreground">microservices</span>, <span className="text-foreground">system security</span>, <span className="text-foreground">DevOps</span>, <span className="text-foreground">compilers</span>, and <span className="text-foreground">interpreters</span>. This curiosity quickly translated into my professional career. Today, I specialize in architecting highly scalable, secure, and distributed systems. I do well in settings where security and performance are crucial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
