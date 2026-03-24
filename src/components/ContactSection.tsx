import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            <span className="text-muted-foreground">//</span> {t("contact.label")}
          </h2>
          <p className="text-3xl font-display font-bold mb-6">{t("contact.title")}</p>
          <p className="text-secondary-foreground/70 mb-10 max-w-lg mx-auto">
            {t("contact.desc")}
          </p>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a
              href="mailto:josegmelo.dev@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-medium hover:opacity-90 transition-opacity"
            >
              josegmelo.dev@gmail.com
            </a>
            <a
              href="https://github.com/zkingboos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-mono text-sm font-medium hover:border-primary/40 transition-colors"
            >
              github.com/zkingboos
            </a>
            <a
              href="https://linkedin.com/in/zkingboos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-mono text-sm font-medium hover:border-primary/40 transition-colors"
            >
              linkedin.com/in/zkingboos
            </a>
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} José Gabriel — {t("contact.footer")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
