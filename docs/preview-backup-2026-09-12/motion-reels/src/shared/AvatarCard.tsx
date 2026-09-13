import React from 'react';
import { Img, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const AvatarCard: React.FC<{
  delay?: number;
  size?: number;
  showRole?: boolean;
}> = ({ delay = 0, size = 320, showRole = true }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - delay,
    fps,
    config: { mass: 0.6, damping: 14, stiffness: 120 },
  });

  const opacity = spring({
    frame: frame - delay,
    fps,
    config: { mass: 0.5, damping: 12 },
  });

  // Pulse animation for cyan ring
  const pulse = Math.sin(frame / 15) * 6 + 25;

  return (
    <div
      className="flex flex-col items-center text-center select-none"
      style={{
        transform: `scale(${Math.max(0, scale)})`,
        opacity: Math.max(0, opacity),
      }}
    >
      {/* Avatar with cybernetic frame */}
      <div className="relative mb-6">
        <div
          className="absolute -inset-2 rounded-full blur-xl opacity-70 transition-all"
          style={{
            background: 'radial-gradient(circle, #09a6d6 0%, rgba(9, 166, 214, 0) 70%)',
            boxShadow: `0 0 ${pulse}px rgba(9, 166, 214, 0.6)`,
          }}
        />
        <div className="relative rounded-full p-1.5 bg-gradient-to-b from-[#09a6d6] via-[#070c16] to-emerald-500 shadow-2xl">
          <Img
            src="https://avatars.githubusercontent.com/u/42500187?v=4"
            alt="José Gabriel"
            style={{ width: size, height: size }}
            className="rounded-full object-cover border-4 border-[#06070b] bg-zinc-950"
          />
        </div>

        {/* Online / Active Pulse indicator */}
        <div className="absolute bottom-2 right-4 flex items-center justify-center">
          <span className="relative flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 border-2 border-black" />
          </span>
        </div>
      </div>

      {/* Name and Handle Badge */}
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-5xl font-bold font-display text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          José Gabriel
        </h1>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-700/80 text-sm font-mono text-zinc-300 shadow-md">
          <span className="text-[#09a6d6] font-semibold">AKA</span>
          <span className="text-white font-bold">zkingboos</span>
        </span>
      </div>

      {/* Software Engineer Title */}
      {showRole && (
        <div className="font-archivo text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#09a6d6] drop-shadow-md">
          Software Engineer
        </div>
      )}
    </div>
  );
};
