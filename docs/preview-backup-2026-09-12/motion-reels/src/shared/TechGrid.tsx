import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const TECHS = [
  { name: 'Go', tag: 'High Performance', color: '#00ADD8' },
  { name: 'Java', tag: 'Enterprise Core', color: '#F89820' },
  { name: 'Kotlin', tag: 'Modern Backend', color: '#7F52FF' },
  { name: 'TypeScript', tag: 'Type-Safe', color: '#3178C6' },
  { name: 'Kubernetes', tag: 'Orchestration', color: '#326CE5' },
  { name: 'Docker', tag: 'Containers', color: '#2496ED' },
];

export const TechGrid: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-[860px] px-6">
      {TECHS.map((tech, index) => {
        const itemDelay = delay + index * 4;
        const scale = spring({
          frame: frame - itemDelay,
          fps,
          config: { mass: 0.4, damping: 11, stiffness: 140 },
        });

        const opacity = spring({
          frame: frame - itemDelay,
          fps,
          config: { mass: 0.4, damping: 12 },
        });

        return (
          <div
            key={tech.name}
            className="flex items-center gap-4 p-4 rounded-2xl bg-[#070c16]/90 border border-zinc-800/90 shadow-xl backdrop-blur-xl"
            style={{
              transform: `scale(${Math.max(0, scale)})`,
              opacity: Math.max(0, opacity),
              boxShadow: `0 8px 30px rgba(0, 0, 0, 0.7), inset 0 0 15px rgba(9, 166, 214, 0.05)`,
            }}
          >
            {/* Tech color dot / badge */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-lg text-white shadow-md shrink-0"
              style={{
                backgroundColor: `${tech.color}25`,
                border: `1.5px solid ${tech.color}80`,
                color: tech.color,
              }}
            >
              {tech.name.substring(0, 2).toUpperCase()}
            </div>

            <div className="text-left overflow-hidden">
              <div className="font-display font-bold text-2xl text-white tracking-tight">
                {tech.name}
              </div>
              <div className="font-mono text-xs text-zinc-400">
                {tech.tag}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
