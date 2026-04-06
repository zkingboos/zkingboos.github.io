import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import NebulaBg from "@/components/NebulaBg";
import OpenSourceSection from "@/components/OpenSourceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { navLinks } from "@/config/site";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
	const { lang, toggleLang } = useLanguage();
	return (
		<button
			onClick={toggleLang}
			className="language-toggle font-mono text-xs px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
			aria-label="Toggle language"
		>
			{lang === "en" ? "PT 🇧🇷" : "EN 🇺🇸"}
		</button>
	);
};

const IndexContent = () => {
	const { l } = useLanguage();
	return (
		<div className="min-h-screen print:min-h-0 bg-background relative">
			<div className="print:hidden">
				<NebulaBg />
			</div>
			{/* Link visível apenas no PRINT/PDF */}
			<div className="hidden print:block print:mb-8">
				<a
					href="https://zkingboos.github.io"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black text-black font-mono text-sm"
				>
					🌐 {l({ en: "Visit Portfolio: zkingboos.github.io", pt: "Visitar Portfólio: zkingboos.github.io" })}
				</a>
			</div>

			<nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border print:hidden">
				<div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
					<span className="font-mono text-sm text-primary font-semibold">
						joseg<span className="animate-blink">_</span>
					</span>
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
						<a
							href="#projects"
							className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors md:hidden"
						>
							{l(navLinks[2].label)}
						</a>
						<a
							href="#contact"
							className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors md:hidden"
						>
							{l(navLinks[5].label)}
						</a>
						<button
							onClick={() => window.print()}
							className="font-mono text-xs px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
						>
							{l({ en: "Download CV", pt: "Baixar CV" })}
						</button>
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
