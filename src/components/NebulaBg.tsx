import { useEffect, useRef } from "react";

const NebulaBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    let stars: { x: number; y: number; r: number; a: number; speed: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        a: Math.random(),
        speed: Math.random() * 0.005 + 0.002,
      }));
    };

    let t = 0;
    const draw = () => {
      t += 0.002;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Nebula layers
      const drawNebula = (
        cx: number, cy: number,
        rx: number, ry: number,
        hue: number, alpha: number
      ) => {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry));
        g.addColorStop(0, `hsla(${hue}, 70%, 40%, ${alpha})`);
        g.addColorStop(0.4, `hsla(${hue}, 60%, 25%, ${alpha * 0.5})`);
        g.addColorStop(1, `hsla(${hue}, 50%, 10%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();
      };

      // Animated nebula clouds
      const s1 = Math.sin(t) * 0.15 + 1;
      const s2 = Math.cos(t * 0.7) * 0.1 + 1;
      const s3 = Math.sin(t * 0.5 + 1) * 0.12 + 1;

      drawNebula(w * 0.3, h * 0.25, w * 0.45 * s1, h * 0.35 * s1, 270, 0.12);
      drawNebula(w * 0.7, h * 0.6, w * 0.4 * s2, h * 0.4 * s2, 290, 0.1);
      drawNebula(w * 0.5, h * 0.8, w * 0.5 * s3, h * 0.3 * s3, 250, 0.08);
      drawNebula(w * 0.15, h * 0.7, w * 0.3 * s2, h * 0.25 * s2, 310, 0.06);
      drawNebula(w * 0.85, h * 0.2, w * 0.25 * s3, h * 0.2 * s3, 260, 0.07);

      // Stars
      for (const star of stars) {
        const flicker = Math.sin(t * 300 * star.speed + star.x) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 210, 255, ${star.a * flicker})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default NebulaBg;
