/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          base: '#06070b',
          surface: '#070c16',
          glass: 'rgba(7, 12, 22, 0.85)',
          border: 'rgba(9, 166, 214, 0.25)',
        },
        primary: {
          cyan: '#09a6d6',
          glow: 'rgba(9, 166, 214, 0.4)',
        },
        retro: {
          green: '#00ff66',
          amber: '#ffb000',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        archivo: ['"Archivo"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        sora: ['"Sora"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
