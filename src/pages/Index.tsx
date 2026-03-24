import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import NebulaBg from "@/components/NebulaBg";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { navLinks } from "@/config/site";

const LanguageToggle = () => {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      className="font-mono text-xs px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
      aria-label="Toggle language"
    >
      {lang === "en" ? "PT 🇧🇷" : "EN 🇺🇸"}
    </button>
  );
};

const IndexContent = () => {
  const { l } = useLanguage();
  return (
    <div className="min-h-screen bg-background relative">
      <NebulaBg />
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-mono text-sm text-primary font-semibold">jg<span className="animate-blink">_</span></span>
          <div className="flex items-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors hidden md:inline"
              >
                {l(link.label)}
              </a>
            ))}
            {/* Show only key links on mobile */}
            <a href="#projects" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors md:hidden">{l(navLinks[2].label)}</a>
            <a href="#contact" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors md:hidden">{l(navLinks[5].label)}</a>
            <LanguageToggle />
          </div>
        </div>
      </nav>

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <OpenSourceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

const Index = () => (
  <LanguageProvider>
    <IndexContent />
  </LanguageProvider>
);

export default Index;
