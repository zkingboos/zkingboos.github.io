import { useEffect, useRef } from "react";

export default function FlickerBand() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const squareSize = 4,
      gridGap = 6,
      flickerChance = 0.3,
      maxOpacity = 0.3;
    const rgb = [9, 166, 214];

    let cols = 0,
      rows = 0,
      dpr = 1;
    let squares: Float32Array = new Float32Array(0);

    const setup = (w: number, h: number) => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      cols = Math.max(1, Math.floor(w / (squareSize + gridGap)));
      rows = Math.max(1, Math.floor(h / (squareSize + gridGap)));
      squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++)
        squares[i] = Math.random() * maxOpacity;
    };

    let last = performance.now();
    const frame = (now: number) => {
      const delta = Math.min(0.1, (now - last) / 1000);
      last = now;
      for (let i = 0; i < squares.length; i++)
        if (Math.random() < flickerChance * delta)
          squares[i] = Math.random() * maxOpacity;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let c = 0; c < cols; c++)
        for (let r = 0; r < rows; r++) {
          const o = squares[c * rows + r];
          ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${o})`;
          ctx.fillRect(
            c * (squareSize + gridGap) * dpr,
            r * (squareSize + gridGap) * dpr,
            squareSize * dpr,
            squareSize * dpr
          );
        }
      raf = requestAnimationFrame(frame);
    };
    let raf = requestAnimationFrame(frame);

    const resize = () => {
      const w = canvas.clientWidth || canvas.parentElement?.clientWidth || 0;
      const h = canvas.clientHeight || canvas.parentElement?.clientHeight || 0;
      if (w > 0 && h > 0) setup(w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}