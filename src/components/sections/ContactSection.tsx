import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useContactClock } from "@/hooks/useLiveClock";
import ContactForm from "./ContactForm";

function prettyTimezone(zone: string): string {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      timeZoneName: "long",
    })
      .formatToParts(new Date())
      .find((p) => p.type === "timeZoneName");
    if (parts && parts.value) return parts.value;
  } catch {
    /* fallback below */
  }
  const last = zone.split("/").pop() || zone;
  return last.replace(/_/g, " ");
}

function visitorInfo() {
  let timezone = "America/Sao_Paulo";
  let pretty = "São Paulo";
  let diff = 0; // horas em relação ao BRT (UTC-3)
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Sao_Paulo";
    pretty = prettyTimezone(timezone);
    const visitorOffsetMin = -new Date().getTimezoneOffset(); // offset UTC em minutos
    const brtOffsetMin = -180; // BRT = UTC-3
    diff = Math.round((visitorOffsetMin - brtOffsetMin) / 60);
  } catch {
    /* keep defaults */
  }
  return { timezone, pretty, diff };
}

export default function ContactSection() {
  const { t } = useTranslation();
  const clock = useContactClock();
  const [copied, setCopied] = useState(false);
  const { timezone, pretty, diff } = visitorInfo();

  const copyEmail = () => {
    const email = "josegmelo.dev@gmail.com";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
    }
  };

  return (
    <section id="contact-hub" className="space-y-6 pt-8 border-t border-zinc-800">
      {/* Main Banner */}
      <div className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-950 border border-zinc-800/80 p-8 sm:p-10 rounded-2xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
            {t("phase5_title")}
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {t("contact_intro")}
          </p>
        </div>

        <ContactForm />

        {/* 4 Informational Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-zinc-800/60 text-xs font-mono">
          <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/80 space-y-1.5">
            <span className="text-zinc-500 text-[11px] uppercase tracking-wider block">
              {t("contact_location_card")}
            </span>
            <div className="text-white font-bold text-sm">{t("contact_remote")}</div>
            <div className="text-emerald-400 text-[11px] flex items-center gap-1.5 pt-1">
              <span>{clock}</span>
            </div>
            <div className="text-zinc-400 text-[11px] pt-1 leading-relaxed">
              {diff !== 0 && (
                <span className="block">
                  {t("timezone_you")}: <span className="text-cyan-300">{pretty}</span>
                  <span className="block">
                    {diff > 0
                      ? t("timezone_ahead", { n: diff })
                      : t("timezone_behind", { n: Math.abs(diff) })}
                  </span>
                </span>
              )}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/80 space-y-1.5">
            <span className="text-zinc-500 text-[11px] uppercase tracking-wider block">
              {t("contact_email_card")}
            </span>
            <a
              href="mailto:josegmelo.dev@gmail.com"
              className="text-white hover:text-blue-400 font-bold text-sm block truncate transition-colors"
            >
              josegmelo.dev@gmail.com
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="text-blue-400 hover:text-blue-300 text-[11px] flex items-center gap-1 pt-1 transition-colors"
            >
              <span>{copied ? t("contact_copied") : t("contact_copy")}</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/80 space-y-1.5">
            <span className="text-zinc-500 text-[11px] uppercase tracking-wider block">
              {t("contact_cv_card")}
            </span>
            <div className="text-white font-bold text-sm">{t("contact_cv_value")}</div>
            <a
              href="https://drive.google.com/file/d/1GnGjLzJu_3zXgp5P3uJL2GAQewCMrRhG/view?usp=sharing"
              target="_blank"
              className="text-emerald-400 hover:underline text-[11px] flex items-center gap-1 pt-1"
            >
              <span>{t("contact_cv_link")}</span>
            </a>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/80 space-y-1.5">
            <span className="text-zinc-500 text-[11px] uppercase tracking-wider block">
              {t("contact_time_card")}
            </span>
            <div className="text-white font-bold text-sm">{t("contact_time_value")}</div>
            <div className="text-zinc-400 text-[11px] pt-1">
              {t("contact_time_note")}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
      <div>{t("footer_text")}</div>
      <div className="flex items-center gap-5">
        <a href="https://github.com/zkingboos" target="_blank" className="hover:text-white transition-colors">
          GitHub @zkingboos
        </a>
        <a href="https://www.linkedin.com/in/josegabrielma/" target="_blank" className="hover:text-white transition-colors">
          LinkedIn
        </a>
        <a href="mailto:josegmelo.dev@gmail.com" className="hover:text-white transition-colors">
          Email
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#09a6d6] text-zinc-300 hover:text-white transition-all font-mono"
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
}