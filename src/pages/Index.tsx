import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-mono text-sm text-primary font-semibold">jg<span className="animate-blink">_</span></span>
          <div className="flex gap-6">
            <a href="#experience" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">experience</a>
            <a href="#projects" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">projects</a>
            <a href="#skills" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">skills</a>
            <a href="#contact" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">contact</a>
          </div>
        </div>
      </nav>

      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
