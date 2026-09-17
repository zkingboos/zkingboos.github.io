import { useTranslation } from "react-i18next";
import GitHubHeatmap from "@/components/GitHubHeatmap";
import { openSourceRepos, stackBars } from "@/data/openSource";
import { personalInfo } from "@/data/personal";
import { useLang } from "@/lib/lang";

export default function LowLevelRoots() {
  const { t, i18n } = useTranslation();
  const lang = useLang(i18n.language);

  return (
    <section className="pt-0 pb-0" id="phase4">
      {/* DATA STREAM DIVIDER */}
      <div
        className="relative h-16 overflow-hidden border-y border-zinc-800 pointer-events-none select-none"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
        }}
      >
        <div
          className="d-stream-a absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(9,166,214,.8) 1.5px, transparent 1.5px)",
            backgroundSize: "16px 10px",
          }}
        ></div>
        <div
          className="d-stream-b absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(16,185,129,.8) 1.5px, transparent 1.5px)",
            backgroundSize: "16px 10px",
            backgroundPosition: "0 5px",
          }}
        ></div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-24">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
            {t("phase4_title")}
          </h2>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl mt-3">
        {t("phase4_desc")}
      </p>

      {/* BENTO GRID */}
      <div className="fbento-grid mt-12">
        {/* Card 1: About Me */}
        <div className="fbento-card lg:col-span-4 lg:row-start-1">
          <div className="fbento-visual">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://avatars.githubusercontent.com/u/42500187?v=4"
                alt="José Gabriel"
                className="w-11 h-11 rounded-full object-cover border border-white/10"
              />
              <div>
                <div className="text-white font-semibold text-sm">José Gabriel</div>
                <div className="text-zinc-500 text-[11px] font-mono">
                  Software Engineer
                </div>
              </div>
            </div>
            <p className="text-zinc-300 text-xs leading-relaxed">
              {t("about_bio")}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="fbento-chip">Go</span>
              <span className="fbento-chip">Rust</span>
              <span className="fbento-chip">Java</span>
              <span className="fbento-chip">Kotlin</span>
              <span className="fbento-chip">TypeScript</span>
              <span className="fbento-chip">JavaScript</span>
              <span className="fbento-chip">Python</span>
              <span className="fbento-chip">C</span>
              <span className="fbento-chip">Lua</span>
              <span className="fbento-chip">SQL</span>
            </div>
            <div className="space-y-3 mt-5 pt-4 border-t border-white/10">
              <div className="lang-row">
                <span className="lang-name">{t("lang_portuguese")}</span>
                <span className="lang-dots"></span>
                <span className="lang-level">{t("lang_fluent")}</span>
              </div>
              <div className="lang-row">
                <span className="lang-name">{t("lang_english")}</span>
                <span className="lang-dots"></span>
                <span className="lang-level">{t("lang_level_b1b2")}</span>
              </div>
            </div>
          </div>
          <a href="#contact-hub" className="fbento-footer">
            <h3>{t("bento_perf_title")}</h3>
            <span className="text-zinc-500">&#8599;</span>
          </a>
          <div className="about-wave" aria-hidden="true"></div>
        </div>

        {/* Card 2: Open Source CMS */}
        <div className="fbento-card lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:row-span-2">
          <div className="fbento-visual">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] text-zinc-400 font-semibold">
                {t("os_label")}
              </span>
              <span className="fbento-chip">{t("projects_count")}</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {openSourceRepos.map((repo) => (
                <div className="border border-white/5 rounded-lg px-3 py-2" key={repo.name}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#09a6d6] shrink-0"></span>
                      <span className="text-white text-xs font-semibold truncate">
                        {repo.name}
                      </span>
                      <span className="text-zinc-500 text-[10px] font-mono">
                        {repo.lang}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener"
                        className="text-zinc-500 hover:text-[#09a6d6] text-[10px] font-mono"
                      >
                        {t("open_link")}
                      </a>
                      <span className="text-zinc-600">&#8599;</span>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-[11px] leading-relaxed mt-1">
                    {repo.desc[lang]}
                  </p>
                </div>
              ))}
            </div>

            {/* GitHub Heatmap */}
            <div className="mt-5 pt-4 border-t border-white/5">
              <GitHubHeatmap />
            </div>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener"
            className="fbento-footer"
          >
            <h3>{t("bento_cms_title")}</h3>
            <span className="text-zinc-500">&#8599;</span>
          </a>
        </div>

        {/* Card 6: Hosting */}
        <div className="fbento-card lg:col-span-4 lg:col-start-1 lg:row-start-2">
          <div
            className="fbento-visual flex flex-col items-center justify-center text-center py-6"
            style={{
              background:
                "radial-gradient(120% 120% at 50% 0%, rgba(9,166,214,0.14) 0%, rgba(16,185,129,0.06) 45%, transparent 70%)",
            }}
          >
            <div
              className="text-4xl lg:text-5xl font-display font-bold tracking-tight bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(180deg, #ffffff 0%, #09a6d6 100%)" }}
            >
              {t("host_14")}
            </div>
            <div className="text-zinc-400 text-xs font-mono mt-2 uppercase tracking-wider">
              {t("host_5")}
            </div>
            <div className="text-zinc-500 text-[11px] mt-3 max-w-[240px]">
              {t("host_desc")}
            </div>
          </div>
          <a href="#section-career" className="fbento-footer">
            <h3>{t("bento_hosting_title")}</h3>
            <span className="text-zinc-500">&#8599;</span>
          </a>
        </div>

        {/* Card 3: Origins Manifest (image only) */}
        <div className="fbento-card lg:col-span-8 relative">
          <img
            src="background_fill2.webp"
            alt="Origins"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)",
            }}
          ></div>
        </div>

        {/* Card 5: Stacks */}
        <div className="fbento-card lg:col-span-4">
          <div className="fbento-visual">
            <div className="space-y-3">
              {stackBars.map((bar) => (
                <div key={bar.code}>
                  <div className="flex justify-between text-[11px] font-mono mb-1">
                    <span className="text-zinc-300">
                      {bar.code}{" "}
                      <span className="text-zinc-500">{bar.label}</span>
                    </span>
                    <span className="text-zinc-500">{bar.desc[lang]}</span>
                  </div>
                  <div className="fbento-bar-bg">
                    <div className="fbento-bar-fill" style={{ width: bar.width }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a href="#section-career" className="fbento-footer">
            <h3>{t("bento_stacks_title")}</h3>
            <span className="text-zinc-500">&#8599;</span>
          </a>
        </div>
      </div>
    </section>
  );
}