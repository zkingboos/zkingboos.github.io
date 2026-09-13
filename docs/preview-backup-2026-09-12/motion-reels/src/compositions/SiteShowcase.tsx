import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { CrtOverlay } from '../shared/CrtOverlay';

export const SiteShowcase: React.FC = () => {
  const frame = useCurrentFrame();

  // Motion curve with cinematic optical blur on acceleration
  const framePoints = [0, 80, 110, 140, 220, 250, 280, 370, 400, 430, 510, 540, 570, 600];
  const yPoints =      [0,  0, -320, -640, -640, -1080, -1520, -1520, -2000, -2480, -2480, -2850, -3220, -3220];
  const blurPoints =   [0,  0,  6.5,    0,    0,   7.5,     0,     0,   7.5,     0,     0,   5.5,     0,     0];

  const translateY = interpolate(frame, framePoints, yPoints, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const blur = interpolate(frame, framePoints, blurPoints, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div className="relative w-[1080px] h-[1920px] bg-[#06070b] text-white flex flex-col justify-between overflow-hidden select-none">
      {/* Dynamic Ambient Cosmic Backlight */}
      <div className="absolute inset-0 bg-[#06070b] pointer-events-none" />
      <div
        className="absolute w-[900px] h-[900px] rounded-full blur-[160px] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle, #09a6d6 0%, transparent 70%)',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #00ff66 0%, transparent 70%)',
          bottom: '15%',
          right: '5%',
        }}
      />

      <CrtOverlay opacity={0.25} />

      {/* Floating Header HUD / Showcase Pill */}
      <div className="relative z-30 flex items-center justify-between p-8 border-b border-zinc-800/80 bg-[#06070b]/90 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xl font-bold tracking-wider text-zinc-200">
            PREVIEW SHOWCASE
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-zinc-500 font-mono text-sm">PORTFOLIO V2.0</span>
          <span className="font-mono text-base text-[#09a6d6] font-semibold bg-[#070c16] px-4 py-1 rounded-full border border-[#09a6d6]/40">
            zkingboos.github.io
          </span>
        </div>
      </div>

      {/* VIEWPORT SCROLL STAGE */}
      <div className="relative z-20 flex-1 overflow-hidden w-full px-12">
        <div
          className="w-full transition-transform"
          style={{
            transform: `translateY(${translateY}px)`,
            filter: `blur(${blur}px)`,
            willChange: 'transform, filter',
          }}
        >
          {/* ================= SECTION 1: HERO & BIO ================= */}
          <div className="py-12 border-b border-zinc-800/60 space-y-10">
            <div className="flex items-center justify-between font-mono text-sm text-zinc-400 border-b border-zinc-800/80 pb-4">
              <span className="text-zinc-200 font-bold tracking-wide">
                14 ANOS DE EXPERIÊNCIA EM ENGENHARIA DE SOFTWARE
              </span>
              <span className="text-emerald-400 font-bold">● Available Globally</span>
            </div>

            <div className="flex items-start justify-between gap-8">
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-4">
                  <h1 className="text-6xl font-bold font-display text-white tracking-tight">
                    José Gabriel
                  </h1>
                  <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-sm font-mono text-zinc-300">
                    <span className="text-[#09a6d6] font-semibold">AKA</span> zkingboos
                  </span>
                </div>

                <div className="font-archivo text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#09a6d6]">
                  Software Engineer
                </div>

                <p className="text-zinc-300 text-xl leading-relaxed font-light">
                  Self-taught software engineer and systems enthusiast driven by deep curiosity about how things work under the hood. Focused on low-level performance optimization, infrastructure cost reduction, and structuring resilient on-premise cloud environments.
                </p>

                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#070c16] border border-[#09a6d6]/50 text-white font-mono text-sm font-semibold shadow-[0_0_25px_rgba(9,166,214,0.25)]">
                  <span>Get in Touch</span>
                  <span className="text-[#09a6d6]">&darr;</span>
                </div>
              </div>

              {/* Avatar Photo */}
              <div className="shrink-0 w-64 h-64 rounded-3xl overflow-hidden border-2 border-zinc-700 bg-zinc-950 shadow-2xl">
                <img
                  src="https://avatars.githubusercontent.com/u/42500187?v=4"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= SECTION 2: 3D CYLINDRICAL TECH SLIDER ================= */}
          <div className="py-14 border-b border-zinc-800/60 space-y-6">
            <div className="flex items-center justify-between font-mono text-sm">
              <span className="text-[#09a6d6] font-bold uppercase tracking-widest">// STACK ARQUITETURAL</span>
              <span className="text-zinc-500">39 TECNOLOGIAS EM PRODUÇÃO</span>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {['Go (Golang)', 'Java 21', 'Kotlin', 'TypeScript', 'Kubernetes', 'Docker', 'Ceph Storage', 'Proxmox VE', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Tailscale'].map((tech) => (
                <div
                  key={tech}
                  className="p-5 rounded-2xl bg-[#070c16]/90 border border-[#09a6d6]/30 shadow-lg text-center font-mono text-base font-bold text-zinc-100 hover:border-[#09a6d6]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* ================= SECTION 3: CAREER & TIMELINE ================= */}
          <div className="py-14 border-b border-zinc-800/60 space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-sm text-emerald-400 font-bold uppercase tracking-widest">
                [ PRODUCTION MILESTONES ]
              </span>
              <h2 className="text-4xl font-display font-bold text-white">
                Career &amp; Timeline (2013 — 2026)
              </h2>
            </div>

            <div className="space-y-5">
              {[
                { title: 'BarberGrid', role: 'Co-Founder', period: 'Jun 2026 — Present', stack: 'Go · OpenAPI · Docker · PostgreSQL · Observability', desc: 'Plataforma SaaS multi-tenant em Go com OpenAPI-first e tracing distribuído.' },
                { title: 'Rede Lord', role: 'Software Engineer', period: 'Apr 2026 — Present', stack: 'Java · Minestom · Apache Kafka · Go (Fiber)', desc: 'Servidor de alta performance em Java/Minestom com microsserviços orientados a eventos via Kafka.' },
                { title: 'Hive-media', role: 'Infrastructure Lead', period: 'Mar 2023 — Present', stack: 'Proxmox VE · Ceph · Terraform · Tailscale', desc: 'Migração completa de AWS para bare-metal com cluster Proxmox e Ceph (replicação 3x).' },
                { title: 'Refúgio RP', role: 'Lead Developer', period: '2019 — 2022', stack: 'Lua · Node.js · MySQL · Resmon Profiler', desc: 'Engenharia de núcleo de gameplay com profiling de resmon < 0.02ms.' },
              ].map((job) => (
                <div key={job.title} className="p-6 rounded-2xl bg-[#070c16]/80 border border-zinc-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-display text-white">
                      {job.title} <span className="text-zinc-400 text-lg font-normal">· {job.role}</span>
                    </span>
                    <span className="font-mono text-sm text-zinc-500">{job.period}</span>
                  </div>
                  <p className="text-zinc-300 text-base font-light">{job.desc}</p>
                  <div className="font-mono text-xs text-[#09a6d6] pt-1">{job.stack}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= SECTION 4: SHIPPED SYSTEMS & BLUEPRINTS ================= */}
          <div className="py-14 border-b border-zinc-800/60 space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-sm text-[#09a6d6] font-bold uppercase tracking-widest">
                // ARQUITETURA & SISTEMAS
              </span>
              <h2 className="text-4xl font-display font-bold text-white">
                Shipped Systems &amp; Technical Blueprints
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { name: 'BarberGrid SaaS', cat: 'Platform & SaaS', stack: 'Go · OpenAPI · Docker · PostgreSQL' },
                { name: 'Aventrada Ticketing', cat: 'High-Concurrency Ticketing', stack: 'Hono · Bun · PostgreSQL Row Locks · Stripe' },
                { name: 'Bare-Metal Cloud', cat: 'Infrastructure & IaC', stack: 'Proxmox VE · Ceph · Terraform · Wireguard' },
                { name: 'RobloxMP Crypto Gateway', cat: 'Web3 & Real-Money Trading', stack: 'Node.js · TypeScript · Double-Spend Shield' },
              ].map((sys) => (
                <div key={sys.name} className="p-6 rounded-2xl bg-[#070c16]/90 border border-zinc-800 space-y-2">
                  <span className="text-xs font-mono text-zinc-500 uppercase">{sys.cat}</span>
                  <div className="text-xl font-bold text-white font-display">{sys.name}</div>
                  <div className="text-xs font-mono text-emerald-400">{sys.stack}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= SECTION 5: CONTACT HUB ================= */}
          <div className="py-16 space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-sm text-emerald-400 font-bold uppercase tracking-widest">
                [ DIRECT REACH ]
              </span>
              <h2 className="text-4xl font-display font-bold text-white">
                Contact &amp; Hub
              </h2>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-[#070c16] to-emerald-950/60 border border-[#09a6d6]/50 shadow-2xl space-y-4">
              <div className="text-2xl font-display font-bold text-white">
                Vamos estruturar seu próximo sistema de alta performance?
              </div>
              <div className="font-mono text-xl text-[#09a6d6] font-bold">
                josegmelo.dev@gmail.com
              </div>
              <div className="font-mono text-sm text-zinc-400 flex items-center gap-4 pt-2">
                <span>github.com/zkingboos</span>
                <span>·</span>
                <span>linkedin.com/in/jose-gabriel-melo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom HUD */}
      <div className="relative z-30 flex items-center justify-between p-6 border-t border-zinc-800/80 bg-[#06070b]/90 backdrop-blur-xl font-mono text-sm text-zinc-400">
        <div>SMOOTH OPTICAL BLUR CAM</div>
        <div className="text-emerald-400 font-bold">1080 × 1920 (9:16)</div>
      </div>
    </div>
  );
};
