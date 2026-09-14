import { useTranslation } from "react-i18next";
import { career } from "@/data/career";
import { useLang } from "@/lib/lang";

export default function CareerSection() {
  const { t, i18n } = useTranslation();
  const lang = useLang(i18n.language);

  return (
    <section className="space-y-6 relative" id="section-career">
      {/* Blob images de fundo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img className="tl-blob tl-blob-tr" src="timeline1.jpg" alt="" />
        <img className="tl-blob tl-blob-bl" src="timeline2.jpg" alt="" />
      </div>

      {/* Section Title & Meta */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            {t("phase2_title")}
          </h2>
        </div>
        <span className="text-xs font-mono text-zinc-400">{t("phase2_period")}</span>
      </div>

      {/* Timeline */}
      <div className="relative z-10 space-y-4">
        <div className="m1">
          {career.map((item) => (
            <div className="m1-item" key={item.name}>
              <span className="m-year">{item.period}</span>
              <div className="m-name">
                {item.name} <span className="m-meta">· {item.meta}</span>
              </div>
              {item.roles
                ? item.roles.map((r) => (
                    <div className="m1-role" key={r.role}>
                      <div className="m1-role-head">
                        <span className="m-role">{r.role}</span>
                        <span className="m-year">{r.period}</span>
                      </div>
                      <div className="m-desc">{r.desc[lang]}</div>
                      <div className="m-stack">{r.stack}</div>
                    </div>
                  ))
                : item.desc && (
                    <>
                      <div className="m-desc">{item.desc[lang]}</div>
                      {item.stack && <div className="m-stack">{item.stack}</div>}
                    </>
                  )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}