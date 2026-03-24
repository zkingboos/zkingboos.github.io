import { motion } from "framer-motion";

const experiences = [
  {
    period: "Dec 2025 — Present",
    role: "Software Engineer",
    company: "Hivemedia / Aventrada",
    description:
      "Development of a high-concurrency concert ticketing platform focused on secure issuance, real-time payment control, and robust anti-fraud mechanisms. Implemented database transactional locks to prevent overbooking during massive traffic spikes.",
    stack: ["Hono", "Bun", "Redis", "PostgreSQL", "Sentry", "Docker Swarm", "Stripe"],
  },
  {
    period: "May 2025 — Dec 2025",
    role: "Software Engineer",
    company: "Hivemedia / Affiliate",
    description:
      "Built a video monitoring platform for YouTube, Instagram, X, and TikTok, processing over 30,000 videos daily. Content authenticity verified through a dedicated Machine Learning microservice.",
    stack: ["Sentry", "Bun", "Redis", "PostgreSQL", "BullMQ", "Docker Swarm", "Label Studio"],
  },
  {
    period: "Aug 2023 — Jul 2024",
    role: "IT Engineer",
    company: "Hivemedia",
    description:
      "Migrated from AWS to bare-metal, significantly reducing cloud costs. Utilized Proxmox cluster and Ceph distributed storage to eliminate single points of failure. Entire infrastructure running behind a VPN for secure access.",
    stack: ["Proxmox", "Ceph", "Terraform", "Ansible", "Tailscale", "CloudInit"],
  },
];

const ExperienceSection = () => {
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
            <span className="text-muted-foreground">//</span> Experience
          </h2>
          <p className="text-3xl font-display font-bold mb-16">Where I've worked</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-8 top-1.5 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />

                <p className="font-mono text-xs text-muted-foreground mb-2">{exp.period}</p>
                <h3 className="font-display text-xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-primary font-mono text-sm mb-3">{exp.company}</p>
                <p className="text-secondary-foreground/70 leading-relaxed mb-4 text-sm">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-sm bg-secondary text-secondary-foreground font-mono text-xs"
                    >
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
