import React from 'react';

export const CrtOverlay: React.FC<{ opacity?: number }> = ({ opacity = 0.45 }) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-50"
      style={{
        opacity,
        background: `
          linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%),
          linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))
        `,
        backgroundSize: '100% 4px, 6px 100%',
      }}
    />
  );
};
