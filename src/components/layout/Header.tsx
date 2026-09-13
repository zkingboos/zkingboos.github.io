import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language?.startsWith("pt") ? "en" : "pt");
  };

  const langLabel = i18n.language?.startsWith("pt") ? "PT" : "EN";

  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl px-4 py-3 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Identity: José Gabriel + SE Role */}
        <a href="#" className="flex items-center gap-2.5 group select-none">
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/42500187?v=4"
              alt="José Gabriel"
              className="w-8 h-8 rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="text-sm font-bold font-display text-white group-hover:text-blue-400 transition-colors">
              José Gabriel
            </span>
            <span className="text-zinc-600 hidden sm:inline text-xs">/</span>
            <span className="text-[11px] font-mono text-zinc-400">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Clean Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-400">
          <a href="#view-fusion" className="hover:text-white transition-colors">
            Studio
          </a>
          <a href="#section-career" className="hover:text-white transition-colors">
            {t("nav_timeline")}
          </a>
          <a href="#production-artifacts" className="hover:text-white transition-colors">
            {t("nav_topology")}
          </a>
          <a href="#phase4" className="hover:text-white transition-colors">
            {t("nav_origins")}
          </a>
          <a href="#who-worked-with-me" className="hover:text-white transition-colors">
            {t("nav_feedbacks")}
          </a>
        </nav>

        {/* Right Controls: Language Switcher & Contact CTA */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-200 transition-all flex items-center gap-1.5 shadow-sm"
            aria-label="Toggle language"
          >
            <span className="font-bold">{langLabel}</span>
          </button>

          {/* Direct Contact CTA */}
          <a
            href="mailto:josegmelo.dev@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md shadow-blue-600/20"
          >
            <span>{t("nav_contact")}</span>
          </a>
        </div>
      </div>
    </header>
  );
}