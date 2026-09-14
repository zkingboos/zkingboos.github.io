import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { testimonials } from "@/data/testimonials";

function cardCount(): number {
  const w = window.innerWidth;
  if (w >= 2560) return 5;
  if (w >= 768) return 3;
  return 1;
}

function Card({
  t,
  idx,
  active,
}: {
  t: (typeof testimonials)[number];
  idx: number;
  active: boolean;
}) {
  const avatar = t.img ? (
    <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
  ) : (
    <div className="w-11 h-11 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold text-base">
      {t.name.charAt(0) || "?"}
    </div>
  );

  return (
    <article
      className="t-card-real bg-zinc-900 border border-zinc-700 rounded-2xl p-6 flex flex-col justify-between gap-4 shadow-xl"
      data-idx={idx}
      style={{
        borderColor: active ? "rgba(63,63,70,0.9)" : "rgba(82,82,91,0.7)",
        opacity: active ? 1 : 0.4,
        transform: active ? "scale(1.02)" : "scale(0.99)",
        boxShadow: active ? "0 8px 24px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div>
        <p className="text-[15px] text-zinc-200 leading-relaxed">&ldquo;{t.q}&rdquo;</p>
      </div>
      <div className="flex items-center gap-3 pt-3 border-t border-zinc-700">
        {avatar}
        <div>
          <div className="font-bold text-white text-base">{t.name}</div>
          <div className="text-zinc-400 text-xs font-mono">{t.role}</div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);

  useEffect(() => {
    isMobileRef.current = window.innerWidth < 768;
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || isMobileRef.current) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const [nCols, setNCols] = useState<number>(() =>
    typeof window !== "undefined" ? cardCount() : 3
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        isMobileRef.current = window.innerWidth < 768;
        setNCols(cardCount());
      }, 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Scroll-spy: no mobile, destaca o card mais visível conforme o usuário desliza.
  useEffect(() => {
    if (isMobileRef.current === false) return;
    const grid = gridRef.current;
    if (!grid) return;

    const cards = () =>
      Array.from(grid.querySelectorAll<HTMLElement>(".t-card-real"));

    const onScroll = () => {
      const list = cards();
      if (!list.length) return;
      const viewportMid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      list.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const mid = r.top + r.height / 2;
        const dist = Math.abs(mid - viewportMid);
        if (r.top < window.innerHeight && r.bottom > 0 && dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [nCols]);

  const flatCards = useMemo(() => {
    const n = nCols;
    const cols: (typeof testimonials)[number][][] = Array.from(
      { length: n },
      () => []
    );
    const heights = new Array(n).fill(0);
    testimonials.forEach((d) => {
      let idx = 0;
      for (let c = 1; c < n; c++) {
        if (heights[c] < heights[idx]) idx = c;
      }
      cols[idx].push(d);
      heights[idx] += d.q.length / 55 + 60;
    });
    // Ordem visual (coluna a coluna) com índice global estável
    let g = 0;
    return cols.map((col, ci) => ({
      ci,
      col,
      indices: col.map(() => g++),
    }));
  }, [nCols]);

  return (
    <section id="who-worked-with-me" className="relative pt-10 pb-4">
      {/* Gradiente premium full-bleed */}
      <div
        className="absolute left-0 right-0 h-full top-0 pointer-events-none"
        aria-hidden="true"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          background:
            "linear-gradient(180deg, #000000 0%, #101015 22%, #1c1c22 45%, #18181e 68%, #000000 100%)",
        }}
      ></div>

      <div
        className="relative"
        style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="t-title mb-6">
            <div className="text-center">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-500">
                {t("feedbacks_subbadge")}
              </div>
              <div className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mt-2">
                {t("feedbacks_title")}
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed mt-3 max-w-[540px] mx-auto">
                {t("feedbacks_desc")}
              </p>
            </div>
          </div>

          <div id="mosaic-grid" ref={gridRef}>
            {flatCards.map(({ ci, col, indices }) => (
              <div className="m-col" key={ci}>
                {col.map((d, pos) => {
                  const idx = indices[pos];
                  return <Card key={d.name} t={d} idx={idx} active={idx === active} />;
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
        <p className="text-zinc-400 text-sm text-center">{t("feedbacks_cta")}</p>
        <a
          href="https://www.linkedin.com/in/zkingboos"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#09a6d6] hover:text-white bg-[#09a6d6]/10 hover:bg-[#09a6d6]/25 border border-[#09a6d6]/30 rounded-md px-3 py-1.5 transition-colors"
        >
          {t("feedbacks_link")}
        </a>
      </div>
    </section>
  );
}