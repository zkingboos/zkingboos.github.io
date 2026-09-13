import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Background } from '../shared/Background';
import { CrtOverlay } from '../shared/CrtOverlay';
import { AvatarCard } from '../shared/AvatarCard';

const BADGES = [
  { text: '14 ANOS DE EXPERIÊNCIA', color: '#00ff66', icon: '⚡' },
  { text: 'GO & JAVA & KOTLIN', color: '#09a6d6', icon: '🔥' },
  { text: 'KUBERNETES & CLOUD', color: '#326CE5', icon: '☁' },
  { text: 'BAIXA LATÊNCIA & P99', color: '#ffb000', icon: '⏱' },
];

export const Reel3Teaser: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene 1: 0 - 90 (0 - 3s)
  // Scene 2: 90 - 240 (3 - 8s)
  // Scene 3: 240 - 360 (8 - 12s)

  const s1Opacity = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const s2Opacity = interpolate(frame, [90, 105, 225, 240], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const s3Opacity = interpolate(frame, [240, 255], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Rapid pop animations for badges in Scene 2
  return (
    <div className="relative w-[1080px] h-[1920px] bg-[#06070b] text-white flex flex-col justify-between p-16 select-none overflow-hidden">
      <Background accentColor="#00ff66" />
      <CrtOverlay opacity={0.35} />

      {/* Top Tag */}
      <div className="relative z-20 flex items-center justify-between border-b border-zinc-800/80 pb-6">
        <span className="font-mono text-xl font-extrabold text-emerald-400 tracking-wider">
          FAST TEASER
        </span>
        <span className="font-mono text-lg text-zinc-400">
          @zkingboos
        </span>
      </div>

      {/* MAIN STAGE */}
      <div className="relative z-20 flex-1 flex items-center justify-center">
        {/* ================= SCENE 1: EXPLOSIVE HOOK ================= */}
        {frame < 95 && (
          <div
            className="flex flex-col items-center text-center space-y-8 max-w-[900px]"
            style={{ opacity: s1Opacity }}
          >
            <div className="text-xl font-mono text-[#09a6d6] font-bold tracking-widest uppercase">
              // SEARCHING FOR TOP TALENT?
            </div>

            <h1 className="font-archivo text-7xl sm:text-8xl font-black text-white leading-none tracking-tight">
              PRECISA DE UM ENGENHEIRO SÊNIOR?
            </h1>

            <p className="text-3xl text-zinc-300 font-light max-w-[700px]">
              Especialista em resolver gargalos de performance e infraestrutura.
            </p>
          </div>
        )}

        {/* ================= SCENE 2: RAPID PROOF BADGES ================= */}
        {frame >= 85 && frame < 245 && (
          <div
            className="flex flex-col items-center text-center space-y-8 w-full max-w-[880px]"
            style={{ opacity: s2Opacity }}
          >
            <div className="text-xl font-mono text-zinc-400 font-bold tracking-widest uppercase">
              ENTREGA COMPROVADA EM PRODUÇÃO
            </div>

            <div className="flex flex-col gap-5 w-full">
              {BADGES.map((b, idx) => {
                const pop = spring({
                  frame: frame - (95 + idx * 18),
                  fps,
                  config: { mass: 0.4, damping: 9, stiffness: 180 },
                });

                return (
                  <div
                    key={b.text}
                    className="p-6 rounded-2xl bg-[#070c16]/95 border-2 flex items-center justify-between shadow-2xl backdrop-blur-xl"
                    style={{
                      transform: `scale(${Math.max(0, pop)})`,
                      borderColor: b.color,
                      boxShadow: `0 10px 40px rgba(0,0,0,0.8), 0 0 25px ${b.color}30`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{b.icon}</span>
                      <span className="font-archivo font-extrabold text-3xl text-white">
                        {b.text}
                      </span>
                    </div>
                    <span className="font-mono text-sm px-3 py-1 rounded bg-black/60 text-zinc-300">
                      PROD
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= SCENE 3: IMMEDIATE ACTION ================= */}
        {frame >= 235 && (
          <div
            className="flex flex-col items-center text-center space-y-10 w-full"
            style={{ opacity: s3Opacity }}
          >
            <AvatarCard size={340} delay={245} />

            <div className="space-y-3">
              <h2 className="text-6xl font-archivo font-black text-white tracking-tight">
                Vamos Conversar?
              </h2>
              <p className="text-2xl text-emerald-400 font-mono font-bold">
                Disponível para Projetos & Contratações
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="w-full max-w-[820px] p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-[#09a6d6] to-emerald-500 text-white shadow-[0_0_50px_rgba(9,166,214,0.45)]">
              <div className="text-sm font-mono tracking-widest uppercase opacity-80 pb-1">
                Envie um e-mail direto:
              </div>
              <div className="text-3xl font-mono font-extrabold tracking-tight">
                josegmelo.dev@gmail.com
              </div>
            </div>

            <div className="font-mono text-zinc-400 text-xl">
              github.com/zkingboos
            </div>
          </div>
        )}
      </div>

      {/* Persistent Bottom Bar */}
      <div className="relative z-20 flex items-center justify-between border-t border-zinc-800/80 pt-6 text-zinc-400 font-mono text-lg">
        <div>José Gabriel</div>
        <div>Software Engineer</div>
      </div>
    </div>
  );
};
