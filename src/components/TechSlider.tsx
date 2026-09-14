import { techIcons } from "@/data/techIcons";

function Icon({ name, svg }: { name: string; svg: string }) {
  return (
    <div
      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-[#09a6d6] hover:bg-zinc-900/90 flex items-center justify-center shrink-0 shadow-lg hover:shadow-[0_0_20px_rgba(9,166,214,0.3)] transition-all duration-300 group cursor-pointer"
      title={name}
      aria-label={name}
    >
      <span
        className="w-7 h-7 text-zinc-400 group-hover:text-[#09a6d6] group-hover:scale-110 transition-all duration-300"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}

export default function TechSlider() {
  return (
    <div
      className="relative py-4 select-none my-6 overflow-hidden"
      style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
    >
      <div className="cylinder-mask relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

        <div className="flex items-center gap-4 animate-cylinder-scroll hover:[animation-play-state:paused] w-max py-2">
          {/* Block 1 */}
          <div className="flex items-center gap-4 shrink-0">
            {techIcons.map((icon) => (
              <Icon key={icon.name} name={icon.name} svg={icon.svg} />
            ))}
          </div>
          {/* Block 2 (Seamless Infinite Marquee Duplicate) */}
          <div className="flex items-center gap-4 shrink-0" aria-hidden="true">
            {techIcons.map((icon) => (
              <Icon key={`dup-${icon.name}`} name={icon.name} svg={icon.svg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}