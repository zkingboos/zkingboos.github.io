import { useState } from "react";
import { useTranslation } from "react-i18next";

const ACCESS_KEY = "794a7510-8ad0-4392-a861-ae94bdac5a80";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);

    setStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) form.reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg bg-black/40 border border-zinc-800/80 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#09a6d6] transition-colors";

  const options = [
    { value: "proposal", label: t("form_subj_proposal") },
    { value: "hire", label: t("form_subj_hire") },
    { value: "consulting", label: t("form_subj_consulting") },
    { value: "other", label: t("form_subj_other") },
  ];

  return (
    <form onSubmit={onSubmit} className="mt-8 pt-6 border-t border-zinc-800/60 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1.5">
        <label htmlFor="cf-name" className="text-xs font-mono text-zinc-400">
          {t("form_name")}
        </label>
        <input id="cf-name" type="text" name="name" required className={inputClass} placeholder={t("form_name_ph")} />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="cf-email" className="text-xs font-mono text-zinc-400">
          {t("form_email")}
        </label>
        <input id="cf-email" type="email" name="email" required className={inputClass} placeholder={t("form_email_ph")} />
      </div>

      <div className="space-y-1.5 md:col-span-2">
        <label htmlFor="cf-subject" className="text-xs font-mono text-zinc-400">
          {t("form_subject")}
        </label>
        <select id="cf-subject" name="subject" className={inputClass} defaultValue="proposal">
          {options.map((o) => (
            <option key={o.value} value={o.value} className="bg-zinc-900">
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5 md:col-span-2">
        <label htmlFor="cf-message" className="text-xs font-mono text-zinc-400">
          {t("form_message")}
        </label>
        <textarea id="cf-message" name="message" required rows={4} className={`${inputClass} resize-none`} placeholder={t("form_message_ph")} />
      </div>

      <div className="md:col-span-2 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#09a6d6] hover:bg-[#0ca9cf] text-white font-mono text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? t("form_sending") : t("form_send")}
        </button>

        {status === "success" && (
          <span className="text-emerald-400 text-sm font-mono">{t("form_success")}</span>
        )}
        {status === "error" && (
          <span className="text-red-400 text-sm font-mono">{t("form_error")}</span>
        )}
      </div>
    </form>
  );
}