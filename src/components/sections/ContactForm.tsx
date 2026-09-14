import { useState } from "react";

const ACCESS_KEY = "794a7510-8ad0-4392-a861-ae94bdac5a80";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
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

  return (
    <form onSubmit={onSubmit} className="mt-8 pt-6 border-t border-zinc-800/60 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1.5">
        <label htmlFor="cf-name" className="text-xs font-mono text-zinc-400">
          Nome
        </label>
        <input id="cf-name" type="text" name="name" required className={inputClass} placeholder="Como posso te chamar?" />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="cf-email" className="text-xs font-mono text-zinc-400">
          Email
        </label>
        <input id="cf-email" type="email" name="email" required className={inputClass} placeholder="voce@exemplo.com" />
      </div>

      <div className="space-y-1.5 md:col-span-2">
        <label htmlFor="cf-subject" className="text-xs font-mono text-zinc-400">
          Assunto
        </label>
        <select id="cf-subject" name="subject" className={inputClass} defaultValue="Proposta de projeto">
          <option className="bg-zinc-900">Proposta de projeto</option>
          <option className="bg-zinc-900">Quero contratar</option>
          <option className="bg-zinc-900">Consultoria em infraestrutura</option>
          <option className="bg-zinc-900">Outro</option>
        </select>
      </div>

      <div className="space-y-1.5 md:col-span-2">
        <label htmlFor="cf-message" className="text-xs font-mono text-zinc-400">
          Mensagem
        </label>
        <textarea id="cf-message" name="message" required rows={4} className={`${inputClass} resize-none`} placeholder="Conte um pouco sobre o que você precisa..." />
      </div>

      <div className="md:col-span-2 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#09a6d6] hover:bg-[#0ca9cf] text-white font-mono text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Enviando..." : "Enviar mensagem ↗"}
        </button>

        {status === "success" && (
          <span className="text-emerald-400 text-sm font-mono">Mensagem enviada com sucesso!</span>
        )}
        {status === "error" && (
          <span className="text-red-400 text-sm font-mono">
            Erro ao enviar. Tente novamente ou me chame por email.
          </span>
        )}
      </div>
    </form>
  );
}