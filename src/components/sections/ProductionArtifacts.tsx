import { projectGroups } from "@/data/projects";
import FlickerBand from "@/components/FlickerBand";

interface Props {
  onOpenTopology?: () => void;
}

export default function ProductionArtifacts({ onOpenTopology }: Props) {
  return (
    <section id="production-artifacts" className="pt-0">
      {/* FULL-BLEED FLICKER DIVIDER */}
      <div
        className="relative left-1/2 -ml-[50vw] w-screen h-[150px] overflow-hidden border-y border-zinc-800/40 pointer-events-none select-none"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
        }}
      >
        <FlickerBand />
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight mt-24">
        Shipped Systems &amp; Technical Blueprints
      </h2>
      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-3">
        Production systems, platforms, and infrastructure shipped over the years
        — from game engines and marketplaces to bare-metal clusters and
        real-time pipelines.
      </p>

      <div className="mt-10">
        {projectGroups.map((group) => (
          <div className="v-a-group" key={group.title}>
            <div className="v-a-group-title">{group.title}</div>
            {group.projects.map((p) => (
              <div className="v-a-row" key={p.name} id={p.id}>
                <span className="v-a-index">{p.index}</span>
                <div>
                  <div className="v-a-name">{p.name}</div>
                  <div className="v-a-sub">{p.sub}</div>
                  <p className="v-a-desc">{p.desc}</p>
                  {p.hasTopology && (
                    <button
                      onClick={onOpenTopology}
                      className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-mono text-[#09a6d6] hover:text-white bg-[#09a6d6]/10 hover:bg-[#09a6d6]/25 border border-[#09a6d6]/30 rounded-md px-2.5 py-1 transition-colors"
                    >
                      View Topology <span aria-hidden="true">↗</span>
                    </button>
                  )}
                </div>
                <div className="v-a-stack">{p.stack}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}