import { useEffect, useRef } from "react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import { personalInfo, languages, skillGroups } from "@/data/personal";
import { career } from "@/data/career";
import { projectGroups } from "@/data/projects";
import { openSourceRepos } from "@/data/openSource";
import { useLang } from "@/lib/lang";

const CvContent = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const { t, i18n } = useTranslation();
  const lang = useLang(i18n.language);

  const sectionTitle = (text: string) => (
    <h2 className="text-sm font-bold uppercase tracking-wide text-zinc-700 border-b border-zinc-200 pb-2 mb-3">
      {text}
    </h2>
  );

  return (
    <div ref={ref} className="bg-white text-zinc-900 text-[13px] leading-relaxed">
      {/* Header */}
      <div className="flex items-start gap-4 border-b border-zinc-200 pb-5">
        <img
          src={personalInfo.profilePhoto}
          alt={personalInfo.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-xl font-bold">{personalInfo.name}</h1>
          <div className="text-sm text-zinc-600">{t("hero_role_title")}</div>
          <div className="text-xs text-zinc-500 mt-1">
            {personalInfo.email} · {personalInfo.githubHandle} · {personalInfo.linkedinHandle}
          </div>
        </div>
      </div>

      {/* Summary */}
      <section className="py-4 border-b border-zinc-200">
        {sectionTitle(t("section_summary"))}
        <p className="text-zinc-700">{t("about_bio")}</p>
      </section>

      {/* Experience */}
      <section className="py-4 border-b border-zinc-200">
        {sectionTitle(t("section_experience"))}
        <div className="space-y-4">
          {career.map((item) => (
            <div key={item.name}>
              <div className="flex items-baseline justify-between">
                <span className="font-semibold">{item.name}</span>
                <span className="text-xs text-zinc-500">{item.period}</span>
              </div>
              <div className="text-xs font-medium text-zinc-600">{item.meta}</div>
              {item.roles ? (
                item.roles.map((r) => (
                  <div key={r.role} className="mt-2">
                    <div className="flex items-baseline justify-between">
                      <span className="font-semibold">{r.role}</span>
                      <span className="text-xs text-zinc-500">{r.period}</span>
                    </div>
                    <p className="text-zinc-700 mt-0.5">{r.desc[lang]}</p>
                    <div className="text-xs text-zinc-500 mt-0.5">{r.stack}</div>
                  </div>
                ))
              ) : (
                <>
                  <p className="text-zinc-700 mt-0.5">{item.desc && item.desc[lang]}</p>
                  {item.stack && <div className="text-xs text-zinc-500 mt-0.5">{item.stack}</div>}
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-4 border-b border-zinc-200">
        {sectionTitle(t("section_projects"))}
        <div className="space-y-3">
          {projectGroups
            .flatMap((g) => g.projects)
            .slice(0, 6)
            .map((p) => (
              <div key={p.name}>
                <div className="font-semibold">{p.name}</div>
                <p className="text-zinc-700 mt-0.5">{p.desc[lang]}</p>
                <div className="text-xs text-zinc-500 mt-0.5">{p.stack}</div>
              </div>
            ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-4 border-b border-zinc-200">
        {sectionTitle(t("section_skills"))}
        <div className="grid grid-cols-2 gap-4">
          {skillGroups.map((g) => (
            <div key={g.title.en}>
              <div className="font-semibold text-xs uppercase tracking-wide text-zinc-600 mb-1">
                {g.title[lang]}
              </div>
              <div className="text-zinc-700">{g.items.join(", ")}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Open Source */}
      <section className="py-4 border-b border-zinc-200">
        {sectionTitle(t("section_open_source"))}
        <ul className="space-y-1.5">
          {openSourceRepos.map((r) => (
            <li key={r.name}>
              <span className="font-medium">{r.name}</span>
              <span className="text-zinc-500"> — {r.desc[lang]}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Languages */}
      <section className="py-4">
        {sectionTitle(t("section_languages"))}
        <div className="space-y-0.5">
          {languages.map((l) => (
            <div key={l.en} className="text-zinc-700">
              {l[lang]}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

export default function CvPage() {
  const { t, i18n } = useTranslation();
  const printRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "curriculo-jose-gabriel",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    if (lang === "pt" || lang === "en") {
      i18n.changeLanguage(lang);
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language?.startsWith("pt") ? "en" : "pt");
  };
  const langLabel = i18n.language?.startsWith("pt") ? "PT" : "EN";

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900" data-lenis-prevent>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex justify-end items-center gap-3 mb-4 print:hidden">
          <button
            onClick={toggleLang}
            className="px-3 py-2 rounded-lg bg-white border border-zinc-300 hover:border-zinc-500 text-zinc-700 font-mono text-sm font-semibold transition-colors"
            aria-label="Toggle language"
          >
            {langLabel}
          </button>
          <button
            onClick={() => handlePrint()}
            className="px-4 py-2 rounded-lg bg-[#09a6d6] hover:bg-[#0ca9cf] text-white font-mono text-sm font-semibold transition-colors"
          >
            {t("cv_download")}
          </button>
        </div>
        <div className="bg-white border border-zinc-200 rounded-lg shadow-sm p-8">
          <CvContent ref={printRef} />
        </div>
      </div>
    </div>
  );
}