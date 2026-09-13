import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Background } from '../shared/Background';
import { CrtOverlay } from '../shared/CrtOverlay';
import { AvatarCard } from '../shared/AvatarCard';

const SLIDER_TECHS = [
  'Go', 'Java', 'Kotlin', 'TypeScript', 'Kubernetes', 'Docker', 'PostgreSQL', 'Redis', 'Linux'
];

export const Reel2Visual: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene 1: 0 - 120 (0 - 4s)
  // Scene 2: 120 - 300 (4 - 10s)
  // Scene 3: 300 - 480 (10 - 16s)

  const s1Opacity = interpolate(frame, [0, 20, 105, 120], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const s2Opacity = interpolate(frame, [120, 140, 285, 300], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const s3Opacity = interpolate(frame, [300, 320, 465, 480], [0, 1, 1, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Slider animation in Scene 2
  const scrollOffset = interpolate(frame, [120, 300], [0, -400], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 3D tilt spring
  const tilt3D = spring({
    frame: frame - 120,
    fps,
    config: { mass: 0.8, damping: 15, stiffness: 80 },
  });

  return (
    <div className="relative w-[1080px] h-[1920px] bg-[#06070b] text-white flex flex-col justify-between p-16 select-none overflow-hidden">
      <Background accentColor="#09a6d6" />
      <CrtOverlay opacity={0.5} />

      {/* Top Header */}
      <div className="relative z-20 flex items-center justify-between border-b border-zinc-800/80 pb-6 font-mono">
        <div className="flex items-center gap-3">
          <span className="text-[#09a6d6] font-bold text-xl">//</span>
          <span className="text-zinc-200 text-xl font-semibold tracking-wider">
            COSMIC UI SHOWCASE
          </span>
        </div>
        <div className="text-emerald-400 text-sm font-bold bg-emerald-950/60 px-3 py-1 rounded-md border border-emerald-800">
          60 FPS MOTION
        </div>
      </div>

      {/* CENTER STAGE */}
      <div className="relative z-20 flex-1 flex items-center justify-center">
        {/* ================= SCENE 1: SYSTEM BOOT ================= */}
        {frame < 125 && (
          <div
            className="flex flex-col items-center text-center space-y-8 max-w-[880px]"
            style={{ opacity: s1Opacity }}
          >
            <div className="font-mono text-sm text-[#09a6d6] tracking-widest uppercase">
              BOOT SEQUENCE :: INITIALIZED
            </div>

            <div className="font-archivo text-6xl sm:text-7xl font-black text-white leading-tight tracking-tight">
              A Nova Interface do Portfólio
            </div>

            <div className="p-6 rounded-2xl bg-[#070c16]/90 border border-[#09a6d6]/30 text-left font-mono text-lg space-y-2 w-full">
              <div className="text-zinc-400">
                <span className="text-emerald-400">✔</span> Theme: Cosmic Surface (#06070b)
              </div>
              <div className="text-zinc-400">
                <span className="text-emerald-400">✔</span> Optical Blur & Staggered Glide
              </div>
              <div className="text-zinc-400">
                <span className="text-emerald-400">✔</span> Microservices Architecture & Timeline
              </div>
            </div>

            <p className="text-2xl text-zinc-300 font-light">
              Projetado para engenheiros de sistemas e arquitetos de alta performance.
            </p>
          </div>
        )}

        {/* ================= SCENE 2: 3D UI & CYLINDRICAL SLIDER ================= */}
        {frame >= 115 && frame < 305 && (
          <div
            className="flex flex-col items-center text-center space-y-10 w-full"
            style={{
              opacity: s2Opacity,
              transform: `perspective(1000px) rotateX(${interpolate(tilt3D, [0, 1], [15, 0])}deg)`,
            }}
          >
            <div className="space-y-2">
              <div className="text-emerald-400 font-mono text-lg font-bold tracking-widest">
                [ SLIDER & MICROSERVICES ]
              </div>
              <h3 className="text-5xl font-archivo font-extrabold text-white">
                Stack & Ecossistema
              </h3>
            </div>

            {/* Horizontal sliding technology blocks */}
            <div className="w-full overflow-hidden py-6 relative">
              <div
                className="flex items-center gap-5 w-max"
                style={{ transform: `translateX(${scrollOffset}px)` }}
              >
                {SLIDER_TECHS.concat(SLIDER_TECHS).map((item, idx) => (
                  <div
                    key={`${item}-${idx}`}
                    className="w-48 h-32 rounded-2xl bg-[#070c16] border border-[#09a6d6]/40 flex flex-col items-center justify-center shadow-xl backdrop-blur-md"
                  >
                    <span className="text-2xl font-bold font-display text-white">{item}</span>
                    <span className="text-xs font-mono text-[#09a6d6] pt-1">Production Ready</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Streaming data simulation */}
            <div className="w-full max-w-[800px] p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-left font-mono text-base space-y-3">
              <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-2">
                <span>EVENT STREAM BUS</span>
                <span className="text-emerald-400">ACTIVE ⚡</span>
              </div>
              <div className="text-zinc-300">
                &gt;&gt; [Ingest] Kafka &rarr; [Service: Go] &rarr; [Store: Postgres]
              </div>
              <div className="text-zinc-500 text-sm">
                Latency: &lt; 1.2ms · P99 Throughput: 45k req/s
              </div>
            </div>
          </div>
        )}

        {/* ================= SCENE 3: BRAND CLOSING ================= */}
        {frame >= 295 && (
          <div
            className="flex flex-col items-center text-center space-y-10 w-full"
            style={{ opacity: s3Opacity }}
          >
            <AvatarCard size={380} delay={305} />

            <div className="space-y-4 max-w-[800px]">
              <h2 className="text-4xl font-archivo font-bold text-white">
                Engenharia de Software de Alta Performance
              </h2>
              <p className="text-2xl font-sans text-zinc-300 font-light">
                Explore a timeline completa e os artefatos de produção no meu site.
              </p>
            </div>

            <div className="p-5 px-8 rounded-full bg-[#070c16] border-2 border-[#09a6d6] text-white font-mono text-2xl font-bold shadow-[0_0_40px_rgba(9,166,214,0.4)]">
              zkingboos.github.io
            </div>
          </div>
        )}
      </div>

      {/* Persistent Bottom Bar */}
      <div className="relative z-20 flex items-center justify-between border-t border-zinc-800/80 pt-6 text-zinc-400 font-mono text-lg">
        <div>São Paulo, Brasil</div>
        <div>Available Worldwide</div>
      </div>
    </div>
  );
};
