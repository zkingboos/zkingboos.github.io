import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const TerminalBox: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - delay,
    fps,
    config: { mass: 0.5, damping: 14, stiffness: 110 },
  });

  const opacity = spring({
    frame: frame - delay,
    fps,
    config: { mass: 0.4, damping: 12 },
  });

  // Typing progression based on elapsed frames
  const elapsed = Math.max(0, frame - delay);
  const showLine1 = elapsed > 10;
  const showLine2 = elapsed > 35;
  const showLine3 = elapsed > 65;
  const showLine4 = elapsed > 95;
  const showLine5 = elapsed > 125;

  // Blinking cursor
  const cursorBlink = Math.floor((frame / 12) % 2) === 0;

  return (
    <div
      className="w-full max-w-[880px] rounded-2xl bg-[#070c16]/95 border border-[#09a6d6]/40 shadow-2xl backdrop-blur-2xl overflow-hidden text-left"
      style={{
        transform: `scale(${Math.max(0, scale)})`,
        opacity: Math.max(0, opacity),
        boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(9,166,214,0.15)',
      }}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-black/60 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
          <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="font-mono text-xs text-zinc-400 font-medium">
          zkingboos@production-system:~
        </div>
        <div className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800">
          LIVE
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-base sm:text-lg space-y-3 leading-relaxed">
        {showLine1 && (
          <div className="text-zinc-300">
            <span className="text-[#09a6d6] font-bold">$</span> sys.inspect --engineer
          </div>
        )}

        {showLine2 && (
          <div className="text-emerald-400 pl-4">
            <span className="text-zinc-500">➜</span> 14 ANOS DE EXPERIÊNCIA COMPROVADA
          </div>
        )}

        {showLine3 && (
          <div className="text-zinc-200 pl-4">
            <span className="text-zinc-500">➜</span> Core: Go · Java · Kotlin · Kubernetes · Microsserviços
          </div>
        )}

        {showLine4 && (
          <div className="text-yellow-400 pl-4 font-semibold">
            <span className="text-zinc-500">➜</span> Status: <span className="text-emerald-400">Available Globally (Remote/BRT)</span>
          </div>
        )}

        {showLine5 && (
          <div className="pt-2 text-zinc-100 flex items-center gap-2">
            <span className="text-[#09a6d6] font-bold">$</span> contact --direct
            <span className="text-[#09a6d6] font-semibold underline">josegmelo.dev@gmail.com</span>
            {cursorBlink && <span className="inline-block w-2.5 h-5 bg-[#09a6d6] ml-1" />}
          </div>
        )}
      </div>
    </div>
  );
};
