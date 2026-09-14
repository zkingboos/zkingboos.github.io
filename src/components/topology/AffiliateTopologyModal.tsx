import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDragPan } from "@/hooks/useDragPan";
import { stopLenis, startLenis } from "@/lib/lenis";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AffiliateTopologyModal({ open, onClose }: Props) {
  const { t } = useTranslation();
  const viewportRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { onMouseDown, onMouseMove, onMouseUp, onTouchStart, onTouchMove, onTouchEnd, reset } =
    useDragPan(innerRef, viewportRef);

  // global listeners for drag
  useEffect(() => {
    if (!open) return;
    window.addEventListener("mousemove", onMouseMove as EventListener);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove as EventListener, { passive: true } as AddEventListenerOptions);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove as EventListener);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove as EventListener);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [open, onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  // Escape to close + lock body scroll / lenis
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    stopLenis();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      startLenis();
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // Telemetry live values
  const [count, setCount] = useState(31560);

  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 4) + 1);
    }, 1500);
    return () => clearInterval(id);
  }, [open]);

  const [tele, setTele] = useState({
    ingest: 118,
    queue: 1400,
    dedup: 18,
    ml: 2900,
    s3: 340,
    pg: 62,
  });

  useEffect(() => {
    if (!open) return;
    const randInt = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const id = setInterval(() => {
      setTele((t) => ({
        ingest: Math.max(90, Math.min(160, t.ingest + (Math.random() > 0.5 ? randInt(1, 6) : -randInt(1, 6)))),
        queue: Math.max(900, Math.min(2600, t.queue + (Math.random() > 0.5 ? randInt(15, 120) : -randInt(15, 120)))),
        dedup: Math.max(12, Math.min(27, t.dedup + (Math.random() > 0.5 ? 1 : -1))),
        ml: Math.max(2400, Math.min(3600, t.ml + (Math.random() > 0.5 ? randInt(20, 140) : -randInt(20, 140)))),
        s3: Math.max(280, Math.min(420, t.s3 + (Math.random() > 0.5 ? randInt(3, 18) : -randInt(3, 18)))),
        pg: Math.max(48, Math.min(88, t.pg + (Math.random() > 0.5 ? 1 : -1))),
      }));
    }, 2000);
    return () => clearInterval(id);
  }, [open]);

  if (!open) return null;

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[100] items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-sm p-4 md:p-8 flex"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-7xl bg-[#05070a] border border-zinc-800 rounded-2xl shadow-2xl my-4">
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#05070a]/95 backdrop-blur-md">
          <h3 className="font-display font-bold text-white text-lg">
            Topology Affiliate Project
          </h3>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors text-xl leading-none"
            aria-label="Fechar"
          >
            &times;
          </button>
        </div>

        <div className="p-4 md:p-6 overflow-x-auto">
          <div id="topology-viewport" ref={viewportRef} className="relative space-y-6 select-none cursor-grab">
            <div
              id="topology-inner"
              ref={innerRef}
              className="min-w-0 lg:min-w-[820px] space-y-6 will-change-transform transition-transform duration-75 relative z-10"
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
            >
              {/* VOLUME TOTAL */}
              <div className="flex items-center justify-center min-w-0 lg:min-w-[820px]">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl">
                  <span>Volume:</span>
                  <span className="text-emerald-400 font-bold">
                    {count.toLocaleString("pt-BR")}
                  </span>
                  <span className="text-zinc-500">{t("topo_volume_unit")}</span>
                </div>
              </div>

              {/* ORCHESTRATION LAYER */}
              <div className="flex items-center justify-center min-w-0 lg:min-w-[820px]">
                <div className="bg-zinc-950 border-2 border-indigo-600/80 p-4 rounded-2xl w-full max-w-2xl flex items-center justify-between gap-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse"></div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-bold uppercase">
                          COMMAND &amp; CONTROL
                        </span>
                        <span className="font-bold text-sm text-white font-mono">
                          [ Discord Command Bot ]
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-400 font-mono pt-0.5">
                        {t("topo_c2_desc")}
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end text-[10px] font-mono text-indigo-300 border-l border-zinc-800 pl-4 shrink-0">
                    <span className="font-bold text-white">CENTRAL C2</span>
                    <span>All Features Active</span>
                  </div>
                </div>
              </div>

              {/* Vertical Dispatch */}
              <div className="flex justify-center -my-3 min-w-0 lg:min-w-[820px]">
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-mono text-indigo-400 bg-zinc-950 px-2 py-0.5 rounded border border-indigo-900/60 mb-0.5">
                    {t("topo_dispatch")}
                  </span>
                  <svg className="w-4 h-5" viewBox="0 0 16 20" fill="none">
                    <line x1="8" y1="0" x2="8" y2="16" stroke="#818cf8" strokeWidth="2" />
                    <polygon points="8,18 4,12 12,12" fill="#818cf8" />
                  </svg>
                </div>
              </div>

              {/* FLOW ROW 1 */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 min-w-0 lg:min-w-[820px]">
                <div className="bg-zinc-950 border-2 border-cyan-800/80 p-5 rounded-2xl w-60 text-center space-y-2 shadow-lg">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-bold">
                    PROPRIETARY SCRAPER
                  </span>
                  <div className="font-bold text-sm text-white font-mono">[ In-House Scraper ]</div>
                  <div className="text-[11px] text-zinc-300">YouTube · TikTok · Instagram · X</div>
                  <div className="text-[10px] font-mono text-cyan-400 pt-1 border-t border-zinc-900">
                    {t("topo_scraper_rd")}
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center px-2">
                  <div className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800 mb-1 whitespace-nowrap">
                    Raw Media Stream &amp; Metadata →{" "}
                    <span>{tele.ingest.toLocaleString("pt-BR")}</span> vids/min
                  </div>
                  <svg className="w-full h-4" viewBox="0 0 200 16" fill="none">
                    <line x1="10" y1="8" x2="190" y2="8" stroke="#0891b2" strokeWidth="2" className="stream-forward" />
                    <polygon points="190,8 180,4 180,12" fill="#06b6d4" />
                  </svg>
                </div>

                <div className="bg-zinc-950 border-2 border-blue-800/80 p-5 rounded-2xl w-60 text-center space-y-2 shadow-lg">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 font-bold">
                    INGESTION &amp; SPLITTER
                  </span>
                  <div className="font-bold text-sm text-white font-mono">[ svc-video-ingest ]</div>
                  <div className="text-[11px] text-zinc-300">Bun + Hono + FFmpeg</div>
                  <div className="text-[10px] font-mono text-blue-300 pt-1 border-t border-zinc-900">
                    {t("topo_ingest_chunk")}
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center px-2">
                  <div className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 mb-1 whitespace-nowrap">
                    RabbitMQ Async Request →{" "}
                    <span>{(tele.queue / 1000).toFixed(1).replace(".", ",")}k</span> {t("topo_jobs")}
                  </div>
                  <svg className="w-full h-4" viewBox="0 0 200 16" fill="none">
                    <line x1="10" y1="8" x2="190" y2="8" stroke="#10b981" strokeWidth="2" className="stream-forward" />
                    <polygon points="190,8 180,4 180,12" fill="#10b981" />
                  </svg>
                </div>

                <div className="bg-zinc-950 border-2 border-emerald-800/80 p-5 rounded-2xl w-60 text-center space-y-2 shadow-lg">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                    ASYNC MESSAGE BROKER
                  </span>
                  <div className="font-bold text-sm text-white font-mono">[ RabbitMQ Cluster ]</div>
                  <div className="text-[11px] text-zinc-300">AMQP Async Request Queue</div>
                  <div className="text-[10px] font-mono text-emerald-400 pt-1 border-t border-zinc-900">
                    {t("topo_broker_dedup")}
                  </div>
                </div>
              </div>

              {/* VERTICAL CONNECTOR */}
              <div className="flex items-center justify-center py-1 min-w-0 lg:min-w-[820px]">
                <div className="flex flex-col items-center bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl">
                  <div className="text-[10px] font-mono text-cyan-300 flex items-center gap-2">
                    <span>▲ ACK / Worker Heartbeat</span>
                    <span>|</span>
                    <span>
                      ▼ RabbitMQ Async Job Dispatch (<span>16/16</span> workers ·{" "}
                      <span>{tele.dedup}%</span> dedup)
                    </span>
                  </div>
                  <svg className="w-48 h-6" viewBox="0 0 200 24" fill="none">
                    <line x1="80" y1="4" x2="80" y2="20" stroke="#09a6d6" strokeWidth="2" className="stream-forward" />
                    <line x1="120" y1="20" x2="120" y2="4" stroke="#09a6d6" strokeWidth="2" className="stream-backward" />
                    <polygon points="80,22 76,16 84,16" fill="#09a6d6" />
                    <polygon points="120,2 116,8 124,8" fill="#09a6d6" />
                  </svg>
                </div>
              </div>

              {/* FLOW ROW 2 */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 min-w-0 lg:min-w-[820px]">
                <div className="bg-zinc-950 border-2 border-[#09a6d6] p-5 rounded-2xl w-60 text-center space-y-2 shadow-2xl relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-[#09a6d6] text-white font-mono text-[9px] font-bold rounded-full uppercase">
                    CORE MACHINE LEARNING
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {t("topo_workers")}
                  </span>
                  <div className="font-bold text-sm text-white font-mono">[ svc-ml-inference ]</div>
                  <div className="text-[11px] text-zinc-300">Python ML (PyTorch / ONNX)</div>
                  <div className="text-[10px] font-mono text-cyan-300 pt-1 border-t border-zinc-900">
                    {t("topo_ml_auth")}
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center px-2">
                  <div className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800 mb-1 text-center whitespace-nowrap">
                    ⇄ <span>{(tele.ml / 1000).toFixed(1).replace(".", ",")}k</span> frames/s ·{" "}
                    <span>{tele.s3.toLocaleString("pt-BR")}</span> writes/s ⇄
                  </div>
                  <svg className="w-full h-4" viewBox="0 0 200 16" fill="none">
                    <line x1="10" y1="8" x2="190" y2="8" stroke="#09a6d6" strokeWidth="2" className="stream-forward" />
                    <polygon points="190,8 180,4 180,12" fill="#09a6d6" />
                    <polygon points="10,8 20,4 20,12" fill="#09a6d6" />
                  </svg>
                </div>

                <div className="bg-zinc-950 border-2 border-indigo-800/80 p-5 rounded-2xl w-60 text-center space-y-2 shadow-lg">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-bold">
                    MEDIA BLOB STORAGE
                  </span>
                  <div className="font-bold text-sm text-white font-mono">[ S3 Object Storage ]</div>
                  <div className="text-[11px] text-zinc-300">Raw Videos, Chunks &amp; Frames</div>
                  <div className="text-[10px] font-mono text-indigo-300 pt-1 border-t border-zinc-900">
                    svc-label-engine Cache
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center px-2">
                  <div className="text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800 mb-1 text-center whitespace-nowrap">
                    SQL Pool &amp; Block Sync → <span>{tele.pg}/100</span> conn
                  </div>
                  <svg className="w-full h-4" viewBox="0 0 200 16" fill="none">
                    <line x1="10" y1="8" x2="190" y2="8" stroke="#f59e0b" strokeWidth="2" className="stream-forward" />
                    <polygon points="190,8 180,4 180,12" fill="#f59e0b" />
                  </svg>
                </div>

                <div className="bg-zinc-950 border-2 border-amber-800/80 p-5 rounded-2xl w-64 text-center space-y-2 shadow-lg">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">
                    PERSISTENCE CLUSTER
                  </span>
                  <div className="font-bold text-sm text-white font-mono">[ Longhorn + K3s ]</div>
                  <div className="text-[11px] text-zinc-300">Distributed Block Storage (K3s CSI)</div>
                  <div className="text-[10px] font-mono text-amber-300 pt-1 border-t border-zinc-900">
                    PostgreSQL (Connection Pool)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}