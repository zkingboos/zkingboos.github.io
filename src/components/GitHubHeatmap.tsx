import { useCallback, useEffect, useState } from "react";

const colorScale = ["#161b22", "#083344", "#0e7490", "#06b6d4", "#22d3ee"];

interface Day {
  date: string;
  count: number;
  level: number;
}

interface GitHubData {
  total?: Record<string, number> & { lastYear?: number };
  contributions?: Day[];
}

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export default function GitHubHeatmap() {
  const [year, setYear] = useState<string>("last");
  const [svgMarkup, setSvgMarkup] = useState<string>("");
  const [total, setTotal] = useState<string>("1,395 contributions");
  const [periodLabel, setPeriodLabel] = useState<string>("in the last year");

  const load = useCallback(async (y: string) => {
    setYear(y);
    setPeriodLabel(y === "last" ? "in the last year" : `in ${y}`);
    try {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/zkingboos?y=${y}`
      );
      if (!res.ok) throw new Error("Network response not ok");
      const data: GitHubData = await res.json();

      let totalCount = 0;
      if (data.total) {
        if (y === "last" && data.total.lastYear !== undefined) {
          totalCount = data.total.lastYear;
        } else if (data.total[y] !== undefined) {
          totalCount = data.total[y];
        } else {
          totalCount = Object.values(data.total)[0] || 0;
        }
      }
      if (totalCount === 0 && Array.isArray(data.contributions)) {
        totalCount = data.contributions.reduce(
          (acc, c) => acc + (c.count || 0),
          0
        );
      }
      setTotal(`${totalCount.toLocaleString()} contributions`);

      if (!Array.isArray(data.contributions) || data.contributions.length === 0)
        return;

      const days = data.contributions;
      const numCols = Math.ceil(days.length / 7);
      const cellSide = 7.2;
      const cellGap = 2.4;
      const colWidth = cellSide + cellGap;
      const startX = 24.0;
      const startY = 16.0;
      const totalSvgWidth = Math.max(445, startX + numCols * colWidth + 12);

      let monthLabels = "";
      let lastMonth = -1;
      let rects = "";
      for (let i = 0; i < days.length; i++) {
        const col = Math.floor(i / 7);
        const row = i % 7;
        const x = (startX + col * colWidth).toFixed(1);
        const y = (startY + row * colWidth).toFixed(1);
        const day = days[i];
        const color = colorScale[Math.min(4, Math.max(0, day.level || 0))];

        if (row === 0 && day.date) {
          const mIdx = new Date(day.date + "T00:00:00Z").getUTCMonth();
          if (mIdx !== lastMonth && col < numCols - 2) {
            monthLabels += `<text x="${x}" y="10" fill="#71717a" font-size="8.5" font-family="monospace">${months[mIdx]}</text>`;
            lastMonth = mIdx;
          }
        }

        rects += `<rect x="${x}" y="${y}" width="${cellSide}" height="${cellSide}" rx="1.5" fill="${color}" class="hover:opacity-80 transition-opacity cursor-pointer"><title>${day.count || 0} contributions on ${day.date}</title></rect>`;
      }

      setSvgMarkup(`
        <svg viewBox="0 0 ${totalSvgWidth} 92" class="w-full h-auto select-none">
          <text x="0" y="29" fill="#71717a" font-size="8.5" font-family="monospace">Mon</text>
          <text x="0" y="49" fill="#71717a" font-size="8.5" font-family="monospace">Wed</text>
          <text x="0" y="69" fill="#71717a" font-size="8.5" font-family="monospace">Fri</text>
          ${monthLabels}
          ${rects}
        </svg>
      `);
    } catch (err) {
      console.warn("Real-time GitHub fetch fallback to cached state:", err);
    }
  }, []);

  useEffect(() => {
    load("last");
  }, [load]);

  const years = ["last", "2026", "2025", "2024"];

  return (
    <div className="w-full border border-white/5 rounded-lg p-4 sm:p-5 space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
        <div>
          <a
            href="https://github.com/zkingboos"
            target="_blank"
            className="flex items-center gap-2 text-white hover:text-[#09a6d6] font-bold font-mono text-sm transition-colors"
          >
            <svg className="w-4 h-4 text-[#09a6d6]" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>{total}</span>
          </a>
          <div className="text-[11px] font-mono text-zinc-400 pt-0.5">
            <span>{periodLabel}</span> ·{" "}
            <a href="https://github.com/zkingboos" target="_blank" className="hover:underline text-[#09a6d6]">
              @zkingboos
            </a>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => load(y)}
              className={
                y === year
                  ? "gh-year-btn px-2.5 py-0.5 rounded-md bg-[#09a6d6] text-white font-bold shadow-sm transition-all"
                  : "gh-year-btn px-2 py-0.5 rounded text-zinc-500 hover:text-zinc-300 transition-all"
              }
            >
              {y === "last" ? "Last Year" : y}
            </button>
          ))}
        </div>
      </div>

      <div
        className="overflow-x-auto pt-2 pb-1 transition-opacity duration-300"
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />
    </div>
  );
}