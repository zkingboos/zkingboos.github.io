import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Background } from '../shared/Background';
import { CrtOverlay } from '../shared/CrtOverlay';
import { AvatarCard } from '../shared/AvatarCard';
import { TechGrid } from '../shared/TechGrid';
import { TerminalBox } from '../shared/TerminalBox';

export const Reel1Authority: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene transitions:
  // Scene 1: 0 - 135 (0 - 4.5s)
  // Scene 2: 135 - 345 (4.5s - 11.5s)
  // Scene 3: 345 - 540 (11.5s - 18s)

  // Scene 1 opacity & translation
  const s1Opacity = interpolate(frame, [0, 20, 120, 135], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const s1TranslateY = interpolate(frame, [0, 25, 120, 135], [40, 0, 0, -50], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Scene 2 opacity & translation
  const s2Opacity = interpolate(frame, [135, 155, 330, 345], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const s2TranslateY = interpolate(frame, [135, 160, 330, 345], [50, 0, 0, -50], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Scene 3 opacity & translation
  const s3Opacity = interpolate(frame, [345, 365, 525, 540], [0, 1, 1, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const s3TranslateY = interpolate(frame, [345, 370], [50, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Pulse for CTA button in Scene 3
  const ctaScale = spring({
    frame: frame - 370,
    fps,
    config: { mass: 0.5, damping: 10, stiffness: 120 },
  });

  return (
    <div className="relative w-[1080px] h-[1920px] bg-[#06070b] text-white flex flex-col justify-between p-16 select-none overflow-hidden">
      <Background accentColor="#09a6d6" />
      <CrtOverlay opacity={0.3} />

      {/* Persistent Top Header / Watermark */}
      <div className="relative z-20 flex items-center justify-between border-b border-zinc-800/80 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xl font-bold tracking-wider text-zinc-300">
            JOSÉ GABRIEL
          </span>
        </div>
        <div className="font-mono text-lg text-[#09a6d6] font-semibold bg-[#070c16] px-4 py-1.5 rounded-full border border-[#09a6d6]/40">
          zkingboos.github.io
        </div>
      </div>

      {/* MAIN DYNAMIC CONTENT CONTAINER */}
      <div className="relative z-20 flex-1 flex items-center justify-center">
        {/* ================= SCENE 1: HOOK & IDENTITY ================= */}
        {frame < 140 && (
          <div
            className="flex flex-col items-center text-center space-y-10 w-full"
            style={{
              opacity: s1Opacity,
              transform: `translateY(${s1TranslateY}px)`,
            }}
          >
            {/* Top Experience Banner */}
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-950/70 border border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
              <span className="text-emerald-400 font-mono text-xl font-bold tracking-wider">
                ⚡ 14 ANOS DE EXPERIÊNCIA
              </span>
            </div>

            {/* Avatar & Roles */}
            <AvatarCard size={360} delay={5} />

            {/* Hook Bio */}
            <p className="max-w-[760px] text-zinc-300 text-2xl leading-relaxed font-sans font-light [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)]">
              Especialista em sistemas de alta performance, otimização de infraestrutura em nuvem e microsserviços resilientes.
            </p>
          </div>
        )}

        {/* ================= SCENE 2: TECH STACK & VALUE ================= */}
        {frame >= 130 && frame < 350 && (
          <div
            className="flex flex-col items-center text-center space-y-10 w-full"
            style={{
              opacity: s2Opacity,
              transform: `translateY(${s2TranslateY}px)`,
            }}
          >
            <div className="space-y-3">
              <div className="text-emerald-400 font-mono text-xl font-bold tracking-widest uppercase">
                // ARQUITETURA & TECNOLOGIA
              </div>
              <h2 className="text-5xl font-archivo font-extrabold text-white">
                Sistemas Robustos em Produção
              </h2>
            </div>

            {/* Grid of technologies */}
            <TechGrid delay={145} />

            {/* Feature Cards */}
            <div className="space-y-4 w-full max-w-[860px] px-6">
              <div className="p-5 rounded-2xl bg-[#070c16]/80 border border-zinc-800 flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#09a6d6]/20 border border-[#09a6d6] flex items-center justify-center font-mono font-bold text-[#09a6d6]">
                  01
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Redução de Custos de Cloud</div>
                  <div className="text-base text-zinc-400">Eficiência de processamento e infraestrutura on-premise/nuvem.</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#070c16]/80 border border-zinc-800 flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500 flex items-center justify-center font-mono font-bold text-emerald-400">
                  02
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Alta Concorrência & Baixa Latência</div>
                  <div className="text-base text-zinc-400">Aplicações críticas em Go, Java e containers Kubernetes.</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SCENE 3: LIVE TERMINAL & CTA ================= */}
        {frame >= 340 && (
          <div
            className="flex flex-col items-center text-center space-y-12 w-full"
            style={{
              opacity: s3Opacity,
              transform: `translateY(${s3TranslateY}px)`,
            }}
          >
            <div className="space-y-2">
              <span className="font-mono text-lg text-[#09a6d6] tracking-widest font-semibold uppercase">
                [ OPEN FOR WORK ]
              </span>
              <h2 className="text-5xl font-archivo font-extrabold text-white">
                Vamos Construir Juntos?
              </h2>
            </div>

            {/* Live Terminal Box */}
            <TerminalBox delay={355} />

            {/* CTA Button */}
            <div
              className="w-full max-w-[800px] pt-4"
              style={{ transform: `scale(${Math.max(0, ctaScale)})` }}
            >
              <div className="group block p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-[#09a6d6] to-emerald-500 text-white font-display font-bold text-3xl shadow-[0_0_50px_rgba(9,166,214,0.4)]">
                Get in Touch ✉
                <div className="text-lg font-mono font-normal opacity-90 pt-1">
                  josegmelo.dev@gmail.com
                </div>
              </div>
            </div>

            <div className="font-mono text-zinc-400 text-lg flex items-center gap-3">
              <span>🇧🇷 Brasil</span>
              <span>·</span>
              <span className="text-emerald-400 font-bold">Disponível Globalmente</span>
            </div>
          </div>
        )}
      </div>

      {/* Persistent Bottom Bar */}
      <div className="relative z-20 flex items-center justify-between border-t border-zinc-800/80 pt-6 text-zinc-400 font-mono text-lg">
        <div>github.com/zkingboos</div>
        <div>Software Engineer</div>
      </div>
    </div>
  );
};
