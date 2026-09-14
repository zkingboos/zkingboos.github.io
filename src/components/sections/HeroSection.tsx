import { useTranslation } from "react-i18next";
import { useLiveClock } from "@/hooks/useLiveClock";
import TechSlider from "@/components/TechSlider";

export default function HeroSection() {
  const { t } = useTranslation();
  const clock = useLiveClock();

  return (
    <section className="relative space-y-8 pb-8 sm:pb-10">
      {/* Badge topo: experiência + relógio + disponibilidade */}
      <div className="relative flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-xs font-mono text-zinc-400 border-b border-zinc-800/60 pt-2 pb-3">
        <span className="flex items-center gap-2">
          <span className="text-zinc-200 font-bold tracking-wide">
            {t("hero_experience_tag")}
          </span>
        </span>
        <div className="flex items-center gap-3">
          <span>Brazil</span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="text-emerald-400 font-bold hidden sm:inline">
            {clock}
          </span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="text-zinc-300 hidden sm:inline">Available Globally</span>
        </div>
      </div>

      {/* Hero content 2 colunas */}
      <div className="relative z-10 pt-4 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-14 w-full">
        {/* LEFT: identidade, bio, CTA */}
        <div className="space-y-5 w-full min-w-0 flex-1">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)]">
                José Gabriel
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-700/80 text-xs font-mono text-zinc-300 shadow-sm">
                <span className="text-[#09a6d6] font-semibold">AKA</span>
                <span className="text-zinc-100 font-bold">zkingboos</span>
              </span>
            </div>

            <div className="space-y-1.5 pt-0.5">
              <div className="font-archivo text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)]">
                <span>{t("hero_role_title")}</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="min-h-[80px] flex items-start">
            <p
              className="text-zinc-200 text-sm sm:text-base leading-relaxed [text-shadow:_0_1px_8px_rgba(0,0,0,0.95)]"
              dangerouslySetInnerHTML={{ __html: t("hero_desc") }}
            />
          </div>

          {/* CTA */}
          <div className="pt-2">
            <a
              href="#contact-hub"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#070c16]/90 hover:bg-[#0b1626] border border-[rgba(9,166,214,0.35)] hover:border-[#09a6d6] text-zinc-100 font-mono text-xs font-semibold backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(9,166,214,0.12)] hover:shadow-[0_4px_25px_rgba(9,166,214,0.25)] transition-all duration-300 active:scale-[0.98]"
            >
              <span className="tracking-tight text-white font-medium">
                {t("hero_links_btn")}
              </span>
              <span className="text-zinc-500 group-hover:text-[#09a6d6] group-hover:translate-y-0.5 transition-all text-xs font-mono">
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT: avatar */}
        <div className="shrink-0 relative self-center lg:self-start mt-2 lg:mt-0">
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/42500187?v=4"
              alt="José Gabriel"
              className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-3xl object-cover border-2 border-zinc-800/90 bg-zinc-950/80 backdrop-blur-md shadow-2xl relative"
            />
            {/* Vinheta */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
              }}
            />
            {/* Ruído (grain) */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none mix-blend-overlay opacity-30"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
          </div>
        </div>
      </div>

      {/* Slider de tecnologias */}
      <TechSlider />
    </section>
  );
}