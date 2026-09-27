import { useEffect, useRef, useState } from "react";
import { Film, RefreshCw, ThumbsDown, ThumbsUp } from "lucide-react";
import {
  PHOTO_SRC,
  createVoice,
  drawSweep,
  poseFrom,
  rollArrangement,
  OPENING,
  type Arrangement,
  type View,
} from "@/lib/sweep";
import { downloadShort, recordShort } from "@/lib/short";
import { toggleVote, voteFor, type Vote } from "@/lib/votes";

const TURN_PER_VIEW = Math.PI * 2 * 0.65;

export function KaleidoStage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [arrangement, setArrangement] = useState<Arrangement>(OPENING);
  const arrangementRef = useRef(arrangement);
  arrangementRef.current = arrangement;
  const voiceRef = useRef<ReturnType<typeof createVoice> | null>(null);
  const burstRef = useRef(0);
  const fadeRef = useRef(1);
  const ensureRef = useRef<(id: string) => HTMLImageElement | undefined>(() => undefined);
  const refreshToken = useRef(0);
  const turnRef = useRef(0);
  const [vote, setVote] = useState<Vote | null>(null);
  const [recording, setRecording] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    setVote(voteFor(arrangement));
  }, [arrangement]);

  function rate(next: Vote) {
    setVote(toggleVote(arrangementRef.current, next));
  }

  async function exportShort() {
    if (recording) return;
    const current = arrangementRef.current;
    const img = ensureRef.current(current.photo);
    if (!img) return;
    setRecording(true);
    setNote("");
    try {
      if (!img.complete || img.naturalWidth < 1) {
        await new Promise<void>((resolve, reject) => {
          img.addEventListener("load", () => resolve(), { once: true });
          img.addEventListener("error", () => reject(new Error("Picture failed to load.")), { once: true });
        });
      }
      const blob = await recordShort(current, img, turnRef.current);
      downloadShort(blob, current.photo);
    } catch (error) {
      setNote(error instanceof Error ? error.message : "Couldn't export the short.");
    } finally {
      setRecording(false);
    }
  }

  function refresh() {
    const next = rollArrangement(arrangementRef.current);
    const mine = ++refreshToken.current;
    const img = ensureRef.current(next.photo);
    const apply = () => {
      if (mine !== refreshToken.current) return;
      arrangementRef.current = next;
      setArrangement(next);
      fadeRef.current = 0;
      burstRef.current = 1;
      voiceRef.current?.unlock();
      voiceRef.current?.blip(392);
    };
    if (img && img.complete && img.naturalWidth > 0) apply();
    else img?.addEventListener("load", apply, { once: true });
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const scroller = scrollerRef.current;
    if (!canvas || !scroller) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const images: Record<string, HTMLImageElement | undefined> = {};
    const ensure = (id: string) => {
      const existing = images[id];
      if (existing) return existing;
      const src = PHOTO_SRC[id];
      if (!src) return;
      const img = new Image();
      img.src = src;
      images[id] = img;
      return img;
    };
    ensureRef.current = ensure;
    ensure(arrangementRef.current.photo);

    const voice = createVoice();
    voiceRef.current = voice;

    let base = 0;
    let jumping = false;
    let targetTurn = 0;

    const applyScroll = () => {
      const max = scroller.scrollHeight - scroller.clientHeight;
      if (max < 1) return;
      let top = scroller.scrollTop;
      if (top < max * 0.2 || top > max * 0.8) {
        const jump = max * 0.4;
        const dir = top < max * 0.2 ? 1 : -1;
        jumping = true;
        scroller.scrollTop = top + dir * jump;
        base -= dir * jump;
        jumping = false;
        top = scroller.scrollTop;
      }
      const viewH = Math.max(scroller.clientHeight, 1);
      targetTurn = ((top + base) / viewH) * TURN_PER_VIEW;
    };

    const center = () => {
      const max = scroller.scrollHeight - scroller.clientHeight;
      jumping = true;
      scroller.scrollTop = max / 2;
      jumping = false;
      base = -max / 2;
      targetTurn = 0;
    };
    center();

    const onScroll = () => {
      if (jumping) return;
      applyScroll();
      voice.unlock();
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });

    const onWheel = (event: WheelEvent) => {
      if (scroller.contains(event.target as Node)) return;
      const dy =
        event.deltaMode === 1
          ? event.deltaY * 16
          : event.deltaMode === 2
            ? event.deltaY * scroller.clientHeight
            : event.deltaY;
      scroller.scrollTop += dy;
      event.preventDefault();
    };
    window.addEventListener("wheel", onWheel, { passive: false });

    const view: View = { w: 1, h: 1, dpr: 1, cx: 0, cy: 0, radius: 1 };
    const measure = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w < 2 || h < 2) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const bw = Math.max(1, Math.round(w * dpr));
      const bh = Math.max(1, Math.round(h * dpr));
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }
      view.w = w;
      view.h = h;
      view.dpr = dpr;
      view.cx = w / 2;
      view.cy = h / 2;
      view.radius = Math.max(96, Math.min(w, h) * 0.5 - 36);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(canvas);

    let shown = 0;
    let prev = 0;
    let energy = 0;
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (reduce) shown = targetTurn;
      else shown += (targetTurn - shown) * (1 - Math.exp(-dt / 0.08));
      const spike = Math.min(1, Math.abs(shown - prev) / 0.05);
      prev = shown;
      energy = reduce ? burstRef.current : Math.max(spike, burstRef.current, energy * Math.exp(-dt / 0.16));
      burstRef.current *= Math.exp(-dt / 0.12);
      fadeRef.current += (1 - fadeRef.current) * (1 - Math.exp(-dt / 0.14));
      const pose = poseFrom(shown, arrangementRef.current);
      turnRef.current = shown;
      for (const shot of pose.photos) shot.alpha *= fadeRef.current;
      drawSweep(ctx, view, pose, images, energy);
      voice.set(pose.x, energy, 0);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const api = {
      turn: () => shown,
      photo: () => arrangementRef.current.photo,
      segments: () => arrangementRef.current.segments,
      fold: () => arrangementRef.current.fold,
    };
    window.__kaleido = api;

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      voice.close();
      voiceRef.current = null;
      if (window.__kaleido === api) delete window.__kaleido;
    };
  }, []);

  return (
    <main className="relative h-dvh overflow-hidden bg-bg text-fg select-none">
      <div
        ref={scrollerRef}
        data-scroller
        className="turn-scroll absolute inset-0 overflow-y-auto overscroll-none"
        aria-hidden="true"
      >
        <div className="h-[800vh]" />
      </div>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-label="Kaleidoscope. Scroll up or down to turn it."
      />
      <div className="pointer-events-none absolute top-4 right-4 z-10 flex flex-col items-end gap-2 sm:top-6 sm:right-6">
        <div className="pointer-events-auto flex max-w-[calc(100vw-2rem)] flex-wrap items-center justify-end gap-2">
          <button
            type="button"
            onClick={refresh}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md"
          >
            <RefreshCw className="size-4 text-accent" aria-hidden="true" />
            Refresh
          </button>
          <button
            type="button"
            aria-label="Like this picture and mirror arrangement"
            aria-pressed={vote === "up"}
            onClick={() => rate("up")}
            className={`inline-flex size-11 items-center justify-center rounded-full border border-border shadow-lg backdrop-blur-md ${
              vote === "up" ? "bg-accent text-accent-fg" : "bg-surface/90 text-fg"
            }`}
          >
            <ThumbsUp className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Dislike this picture and mirror arrangement"
            aria-pressed={vote === "down"}
            onClick={() => rate("down")}
            className={`inline-flex size-11 items-center justify-center rounded-full border border-border shadow-lg backdrop-blur-md ${
              vote === "down" ? "bg-accent text-accent-fg" : "bg-surface/90 text-fg"
            }`}
          >
            <ThumbsDown className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => void exportShort()}
            disabled={recording}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md disabled:opacity-60"
          >
            <Film className="size-4 text-accent" aria-hidden="true" />
            {recording ? "Recording…" : "Short"}
          </button>
        </div>
        <p className="text-[0.7rem] tracking-[0.14em] text-muted uppercase">
          {arrangement.label}
          <span className="text-fg/45"> · {arrangement.credit}</span>
        </p>
        {note ? <p className="max-w-64 text-right text-xs text-accent normal-case">{note}</p> : null}
      </div>
    </main>
  );
}

declare global {
  interface Window {
    __kaleido?: {
      turn: () => number;
      photo: () => string;
      segments: () => number;
      fold: () => string;
    };
  }
}
