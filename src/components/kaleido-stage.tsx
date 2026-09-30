import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Aperture, Crosshair, Download, Image as ImageIcon, Maximize2, RefreshCw, Share2, ThumbsDown, ThumbsUp, X } from "lucide-react";
import {
  PHOTO_SRC,
  aimFromPoint,
  drawSweep,
  liveAim,
  poseFrom,
  rollArrangement,
  rollCenter,
  rollImage,
  rollMirrors,
  OPENING,
  type Arrangement,
  type View,
} from "@/lib/sweep";
import { downloadShort, recordShort, shortFileName, sourceText } from "@/lib/short";
import { toggleVote, voteFor, keyOf, type Vote } from "@/lib/votes";
import { bumpVisit, readVisits } from "@/lib/visits";

const TURN_PER_VIEW = Math.PI * 2 * 0.65;
const HISTORY_KEY = "kaleido-history-v1";
const COUNTED_KEY = "kaleido-counted";

function paintCaption(
  ctx: CanvasRenderingContext2D,
  view: View,
  label: string,
  credit: string,
) {
  const text = `${label}  ·  ${credit}`.toUpperCase();
  ctx.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  ctx.font = "500 12px Outfit, sans-serif";
  const max = Math.max(80, view.w - 168);
  let shown = text;
  if (ctx.measureText(shown).width > max) {
    while (shown.length > 4 && ctx.measureText(`${shown}…`).width > max) shown = shown.slice(0, -1);
    shown = `${shown.trimEnd()}…`;
  }
  const x = view.w - 20;
  const y = view.h - 28;
  ctx.lineWidth = 4;
  ctx.strokeStyle = "rgba(12,11,10,0.78)";
  ctx.strokeText(shown, x, y);
  ctx.fillStyle = "rgba(243,236,223,0.84)";
  ctx.fillText(shown, x, y);
}

function containedRect(img: HTMLImageElement) {
  const scale = Math.min(img.clientWidth / img.naturalWidth, img.clientHeight / img.naturalHeight);
  const width = img.naturalWidth * scale;
  const height = img.naturalHeight * scale;
  return {
    left: (img.clientWidth - width) / 2,
    top: (img.clientHeight - height) / 2,
    width,
    height,
  };
}

function SourceFrame({
  src,
  alt,
  turn,
  arrangement,
  onAim,
}: {
  src: string;
  alt: string;
  turn: { current: number };
  arrangement: Arrangement;
  onAim: (x: number, y: number) => void;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const img = imgRef.current;
      if (img && img.naturalWidth > 0 && img.clientWidth > 0) {
        const aim = liveAim(turn.current, arrangement);
        const box = containedRect(img);
        const x = box.left + aim.aimX * box.width;
        const y = box.top + aim.aimY * box.height;
        setSpot((prev) => (prev && Math.abs(prev.x - x) < 0.4 && Math.abs(prev.y - y) < 0.4 ? prev : { x, y }));
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [arrangement, turn]);

  return (
    <div className="relative">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="max-h-[72dvh] w-full cursor-crosshair bg-bg object-contain"
        onClick={(event) => {
          const img = event.currentTarget;
          if (!img.naturalWidth) return;
          const bounds = img.getBoundingClientRect();
          const box = containedRect(img);
          const x = (event.clientX - bounds.left - box.left) / box.width;
          const y = (event.clientY - bounds.top - box.top) / box.height;
          if (x < 0 || y < 0 || x > 1 || y > 1) return;
          onAim(x, y);
        }}
      />
      {spot ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-accent/35 shadow-[0_0_0_1px_rgba(12,11,10,0.85)]"
          style={{ left: spot.x, top: spot.y }}
        />
      ) : null}
    </div>
  );
}

export function KaleidoStage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [arrangement, setArrangement] = useState<Arrangement>(OPENING);
  const arrangementRef = useRef(arrangement);
  arrangementRef.current = arrangement;
  const burstRef = useRef(0);
  const fadeRef = useRef(1);
  const ensureRef = useRef<(id: string) => HTMLImageElement | undefined>(() => undefined);
  const refreshToken = useRef(0);
  const turnRef = useRef(0);
  const [vote, setVote] = useState<Vote | null>(null);
  const [recording, setRecording] = useState(false);
  const [job, setJob] = useState<"share" | "download" | null>(null);
  const [note, setNote] = useState("");
  const [ready, setReady] = useState<{ url: string; file: File; text: string; name: string; turn: number; key: string } | null>(null);
  const readyRef = useRef(ready);
  readyRef.current = ready;
  const [originalOpen, setOriginalOpen] = useState(false);
  const [history, setHistory] = useState<Arrangement[]>([]);
  const [full, setFull] = useState(false);
  const fullRef = useRef(false);
  fullRef.current = full;
  const [uses, setUses] = useState<number | null>(null);
  const originalOpenRef = useRef(false);
  originalOpenRef.current = originalOpen;

  useLayoutEffect(() => {
    const next = rollArrangement();
    arrangementRef.current = next;
    fadeRef.current = 0;
    setArrangement(next);
  }, []);

  useEffect(() => {
    setVote(voteFor(arrangement));
  }, [arrangement]);

  useEffect(() => {
    return () => {
      if (readyRef.current) URL.revokeObjectURL(readyRef.current.url);
    };
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Arrangement[];
      if (Array.isArray(parsed)) setHistory(parsed.slice(0, 8));
    } catch {
      /* ignore a bad history cache */
    }
  }, []);

  useEffect(() => {
    let os = Boolean(document.fullscreenElement);
    const onChange = () => {
      const now = Boolean(document.fullscreenElement);
      if (os && !now) setFull(false);
      os = now;
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    let ignore = false;
    const seen = sessionStorage.getItem(COUNTED_KEY) === "1";
    if (!seen) sessionStorage.setItem(COUNTED_KEY, "1");
    const run = seen ? readVisits() : bumpVisit();
    run
      .then((result) => {
        if (!ignore) setUses(result.total);
      })
      .catch(() => undefined);
    return () => {
      ignore = true;
    };
  }, []);

  function rate(next: Vote) {
    setVote(toggleVote(arrangementRef.current, next));
  }

  function dropReady() {
    const current = readyRef.current;
    if (!current) return;
    URL.revokeObjectURL(current.url);
    readyRef.current = null;
    setReady(null);
  }

  async function makeClip() {
    const current = arrangementRef.current;
    const key = keyOf(current);
    const turn = turnRef.current;
    const existing = readyRef.current;
    if (existing && existing.key === key && Math.abs(existing.turn - turn) < 0.02) return existing;
    const img = ensureRef.current(current.photo);
    if (!img) return null;
    dropReady();
    if (!img.complete || img.naturalWidth < 1) {
      await new Promise<void>((resolve, reject) => {
        img.addEventListener("load", () => resolve(), { once: true });
        img.addEventListener("error", () => reject(new Error("Picture failed to load.")), { once: true });
      });
    }
    const blob = await recordShort(current, img, turn);
    const name = shortFileName(current.photo, blob.type);
    const file = new File([blob], name, { type: blob.type || "video/mp4" });
    const next = { url: URL.createObjectURL(blob), file, text: sourceText(current), name, turn, key };
    readyRef.current = next;
    setReady(next);
    return next;
  }

  async function onShare() {
    if (recording) return;
    setJob("share");
    setRecording(true);
    setNote("");
    try {
      const clip = await makeClip();
      if (!clip) return;
      const filePayload = { files: [clip.file], title: "KyleDopeScope", text: clip.text };
      if (navigator.canShare?.(filePayload)) {
        await navigator.share(filePayload);
        setNote("");
        return;
      }
      if (typeof navigator.share === "function") {
        await navigator.share({ title: "KyleDopeScope", text: clip.text, url: window.location.href });
        setNote("Shared the tube. Download if you want the video file.");
        return;
      }
      await navigator.clipboard.writeText(`${clip.text}\n${window.location.href}`);
      setNote("Link copied. Download the video to post the file.");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setNote(error instanceof Error ? error.message : "Couldn't share the short.");
    } finally {
      setRecording(false);
      setJob(null);
    }
  }

  async function onDownload() {
    if (recording) return;
    setJob("download");
    setRecording(true);
    setNote("");
    try {
      const clip = await makeClip();
      if (!clip) return;
      downloadShort(clip.file, clip.name);
      const mp4 = clip.file.type.includes("mp4");
      setNote(mp4 ? "MP4 saved. The source and site are on the video." : "Video saved. The source and site are on the video.");
    } catch (error) {
      setNote(error instanceof Error ? error.message : "Couldn't download the short.");
    } finally {
      setRecording(false);
      setJob(null);
    }
  }

  async function goFull() {
    if (fullRef.current || document.fullscreenElement) {
      setFull(false);
      if (document.fullscreenElement) await document.exitFullscreen().catch(() => undefined);
      return;
    }
    setFull(true);
    const node = mainRef.current;
    try {
      if (node?.requestFullscreen && document.fullscreenEnabled) await node.requestFullscreen();
    } catch {
      /* the preview frame often blocks fullscreen; the pattern still fills the viewport */
    }
  }

  function remember(item: Arrangement) {
    setHistory((prev) => {
      const next = [item, ...prev.filter((entry) => keyOf(entry) !== keyOf(item))].slice(0, 8);
      try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      } catch {
        /* the tube still works if storage is full */
      }
      return next;
    });
  }

  function show(next: Arrangement) {
    const current = arrangementRef.current;
    if (keyOf(current) !== keyOf(next)) remember(current);
    dropReady();
    const mine = ++refreshToken.current;
    const img = ensureRef.current(next.photo);
    const apply = () => {
      if (mine !== refreshToken.current) return;
      arrangementRef.current = next;
      setArrangement(next);
      fadeRef.current = 0;
      burstRef.current = 1;
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
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });

    const onWheel = (event: WheelEvent) => {
      if (originalOpenRef.current) return;
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
      const edge = Math.min(w, h);
      view.filled = fullRef.current;
      view.radius = view.filled ? Math.hypot(w, h) / 2 + 2 : Math.max(96, edge * 0.5 - 36);
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
      const edge = Math.min(view.w, view.h);
      view.filled = fullRef.current;
      view.radius = view.filled ? Math.hypot(view.w, view.h) / 2 + 2 : Math.max(96, edge * 0.5 - 36);
      for (const shot of pose.photos) shot.alpha *= fadeRef.current;
      drawSweep(ctx, view, pose, images, energy);
      if (!fullRef.current) {
        const current = arrangementRef.current;
        paintCaption(ctx, view, current.label, current.credit);
      }
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
      if (window.__kaleido === api) delete window.__kaleido;
    };
  }, []);

  return (
    <main ref={mainRef} className="relative h-dvh overflow-hidden bg-bg text-fg select-none">
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
        aria-label="KyleDopeScope. Scroll up or down to turn it."
      />
      <p className="pointer-events-none absolute bottom-4 left-4 z-10 font-display text-sm tracking-wide text-fg/75 sm:bottom-6 sm:left-6">
        KyleDopeScope
      </p>
      {history.length > 0 ? (
        <div className="pointer-events-auto absolute bottom-24 left-4 right-4 z-10 flex gap-2 overflow-x-auto sm:bottom-28 sm:left-6">
          {history.map((item) => (
            <button
              key={keyOf(item)}
              type="button"
              aria-label={item.label}
              onClick={() => show(item)}
              className="size-11 shrink-0 overflow-hidden rounded-full border border-border shadow-lg"
            >
              <img src={PHOTO_SRC[item.photo]} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
      <div className="pointer-events-none absolute top-4 right-4 z-10 flex flex-col items-end gap-2 sm:top-6 sm:right-6">
        <div className="pointer-events-auto flex max-w-[calc(100vw-2rem)] flex-wrap items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => show(rollImage(arrangementRef.current))}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md"
          >
            <RefreshCw className="size-4 text-accent" aria-hidden="true" />
            Image
          </button>
          <button
            type="button"
            onClick={() => show(rollMirrors(arrangementRef.current))}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md"
          >
            <Aperture className="size-4 text-accent" aria-hidden="true" />
            Mirrors
          </button>
          <button
            type="button"
            onClick={() => show(rollCenter(arrangementRef.current))}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md"
          >
            <Crosshair className="size-4 text-accent" aria-hidden="true" />
            Center
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
            onClick={() => void onShare()}
            disabled={recording}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md disabled:opacity-60"
          >
            <Share2 className="size-4 text-accent" aria-hidden="true" />
            {job === "share" ? "Recording…" : "Share"}
          </button>
          <button
            type="button"
            onClick={() => void onDownload()}
            disabled={recording}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md disabled:opacity-60"
          >
            <Download className="size-4 text-accent" aria-hidden="true" />
            {job === "download" ? "Recording…" : "Download"}
          </button>
          <button
            type="button"
            onClick={() => void goFull()}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md"
          >
            <Maximize2 className="size-4 text-accent" aria-hidden="true" />
            {full ? "Exit" : "Full"}
          </button>
          <button
            type="button"
            onClick={() => setOriginalOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md"
          >
            <ImageIcon className="size-4 text-accent" aria-hidden="true" />
            Original
          </button>
        </div>
        {note ? <p className="max-w-72 break-words text-right text-xs text-accent normal-case">{note}</p> : null}
      </div>
      {originalOpen ? (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-bg/80 p-4 backdrop-blur-sm"
          onClick={() => setOriginalOpen(false)}
        >
          <div
            role="dialog"
            aria-label={arrangement.label}
            className="pointer-events-auto flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <SourceFrame
              src={PHOTO_SRC[arrangement.photo]}
              alt={arrangement.label}
              turn={turnRef}
              arrangement={arrangement}
              onAim={(x, y) => show({ ...arrangementRef.current, ...aimFromPoint(turnRef.current, x, y) })}
            />
            <div className="flex items-end justify-between gap-3 p-4">
              <div>
                <p className="font-display text-xl leading-tight">{arrangement.label}</p>
                <a
                  href={arrangement.page}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-sm text-accent underline-offset-2 hover:underline"
                >
                  {arrangement.credit}
                </a>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={arrangement.page}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-3 py-2 text-sm text-fg"
                >
                  Source
                </a>
                <button
                  type="button"
                  aria-label="Close the original"
                  onClick={() => setOriginalOpen(false)}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-fg"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <p className="pointer-events-none absolute bottom-12 left-4 z-10 sm:bottom-14 sm:left-6">
        <span className="sr-only">Times this tube has been opened </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/90 px-3.5 py-2 text-sm text-fg shadow-lg backdrop-blur-md">
          <span className="font-medium tabular-nums text-accent">{uses == null ? "—" : uses.toLocaleString("en-US")}</span>
          {uses === 1 ? "use" : "uses"}
        </span>
      </p>
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
