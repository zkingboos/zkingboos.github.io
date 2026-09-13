import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const Background: React.FC<{
  showGrid?: boolean;
  accentColor?: string;
}> = ({ showGrid = true, accentColor = '#09a6d6' }) => {
  const frame = useCurrentFrame();

  const glowScale = interpolate(
    Math.sin(frame / 20),
    [-1, 1],
    [0.9, 1.15]
  );

  const glowOpacity = interpolate(
    Math.sin(frame / 25),
    [-1, 1],
    [0.18, 0.32]
  );

  return (
    <div className="absolute inset-0 bg-[#06070b] overflow-hidden">
      {/* Radial ambient glow orbs */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          top: '15%',
          left: '50%',
          transform: `translateX(-50%) scale(${glowScale})`,
          opacity: glowOpacity,
        }}
      />

      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00ff66 0%, transparent 70%)',
          bottom: '10%',
          right: '-10%',
          opacity: glowOpacity * 0.4,
        }}
      />

      {/* Cybernetic Tech Grid */}
      {showGrid && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            opacity: 0.6,
          }}
        />
      )}

      {/* Top subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
    </div>
  );
};
