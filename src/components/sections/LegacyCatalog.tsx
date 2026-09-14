// Código morto de desenvolvimento — migrado fielmente para remoção posterior (Task 17).
// "Catálogo das 10 Opções Anteriores" (view-all): área de dev oculta por padrão.
export default function LegacyCatalog() {
  const options = [
    { n: "01", label: "Studio", color: "text-amber-400", border: "hover:border-zinc-600", desc: "Hive Media style" },
    { n: "04", label: "Architect", color: "text-blue-400", border: "hover:border-blue-600", desc: "Síntese equilibrada" },
    { n: "06", label: "Whitepaper", color: "text-stone-300", border: "hover:border-zinc-600", desc: "Monografia técnica" },
    { n: "07", label: "Bento Grid", color: "text-[#09a6d6]", border: "hover:border-zinc-600", desc: "Cartões modernos" },
    { n: "08", label: "Terminal", color: "text-teal-400", border: "hover:border-zinc-600", desc: "CLI split view" },
  ];

  return (
    <div id="view-all" className="preview-panel hidden space-y-8">
      <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">Catálogo das 10 Opções Anteriores</h2>
          <p className="text-xs text-zinc-400">
            Você pode rever qualquer uma das 10 opções individuais:
          </p>
        </div>
        <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold font-mono">
          Voltar para a Nova Fusão Retro ⇄ Modern
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-mono">
        {options.map((o) => (
          <button
            key={o.n}
            className={`p-3 bg-zinc-950 border border-zinc-800 rounded-xl ${o.border} text-left`}
          >
            <div className={`${o.color} font-bold`}>
              {o.n}. {o.label}
            </div>
            <div className="text-zinc-500 text-[10px]">{o.desc}</div>
          </button>
        ))}
      </div>

      <div id="sub-content" className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
        <div className="text-zinc-400 text-xs font-mono">
          Clique em um dos botões acima para carregar o preview daquela opção específica.
        </div>
      </div>
    </div>
  );
}