import { GALLERY } from "@/lib/gallery";
import { readTaste, keyOf } from "@/lib/votes";

const TAU = Math.PI * 2;

export function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

export type Shot = {
  aimX: number;
  aimY: number;
  alpha: number;
  filter: string;
  id: string;
};

export type Fold = "mirror" | "fan";

export type Pose = {
  x: number;
  chapter: string;
  segments: number;
  rotation: number;
  lock: number;
  ink: number;
  inkHue: number;
  wash: string;
  photos: Shot[];
  word: string | null;
  credit: string | null;
  reveal: number;
  fold: Fold;
  zoom: number;
};

export type Arrangement = {
  photo: string;
  label: string;
  credit: string;
  segments: number;
  spin: number;
  aimX: number;
  aimY: number;
  zoom: number;
  filter: string;
  hue: number;
  fold: Fold;
};

const SEGS = [4, 5, 6, 7, 8, 9, 10, 12, 14, 16];

const FILTERS = [
  "none",
  "saturate(1.18)",
  "saturate(1.15) sepia(0.4)",
  "hue-rotate(24deg) saturate(1.12)",
  "hue-rotate(200deg) saturate(1.2)",
  "contrast(1.08) saturate(0.9)",
];

export const OPENING: Arrangement = {
  photo: "moonwalk",
  label: "Moonwalk",
  credit: "NASA",
  segments: 8,
  spin: 0.35,
  aimX: 0.48,
  aimY: 0.36,
  zoom: 2.35,
  filter: "none",
  hue: 32,
  fold: "mirror",
};

function pickWeighted<T>(items: T[], weights: number[]) {
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  if (total <= 0) return items[Math.floor(Math.random() * items.length)] ?? items[0];
  let cursor = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    cursor -= weights[i] ?? 0;
    if (cursor <= 0) return items[i];
  }
  return items[items.length - 1];
}

export function rollArrangement(prev?: { photo: string; segments: number }): Arrangement {
  const taste = readTaste();
  const photos = GALLERY.filter((item) => item.id !== prev?.photo);
  const pool = photos.length ? photos : GALLERY;
  const weights = pool.map((item) => {
    if (taste.photoUp.has(item.id)) return 5;
    if (taste.photoDown.has(item.id)) return 0.22;
    return 1;
  });

  let photo = pickWeighted(pool, weights) ?? GALLERY[0];
  const segs = SEGS.filter((n) => n !== prev?.segments);
  const likedSegs = taste.segUp.filter((n) => n !== prev?.segments);
  const segments =
    likedSegs.length && Math.random() < 0.55
      ? (likedSegs[Math.floor(Math.random() * likedSegs.length)] ?? 8)
      : (segs[Math.floor(Math.random() * segs.length)] ?? 8);
  const likedFolds = taste.foldUp.filter((fold) => fold === "mirror" || fold === "fan");
  const fold =
    likedFolds.length && Math.random() < 0.6
      ? (likedFolds[Math.floor(Math.random() * likedFolds.length)] as Fold)
      : Math.random() < 0.72
        ? "mirror"
        : "fan";

  const draft = (): Arrangement => ({
    photo: photo.id,
    label: photo.label,
    credit: photo.credit,
    segments,
    spin: Math.random() * TAU,
    aimX: 0.3 + Math.random() * 0.4,
    aimY: 0.28 + Math.random() * 0.44,
    zoom: 2.05 + Math.random() * 0.85,
    filter: FILTERS[Math.floor(Math.random() * FILTERS.length)] ?? "none",
    hue: Math.floor(Math.random() * 360),
    fold,
  });

  let next = draft();
  for (let attempt = 0; attempt < 6 && taste.blocked.has(keyOf(next)); attempt++) {
    photo = pickWeighted(pool, weights) ?? photo;
    next = draft();
  }
  return next;
}

/** `turn` is radians of scroll. One viewport of scroll is about two-thirds of a turn. */
export function poseFrom(turn: number, arrangement: Arrangement): Pose {
  const orbit = 0.14;
  const wrapped = ((turn % TAU) + TAU) % TAU;
  return {
    x: wrapped / TAU,
    chapter: arrangement.photo,
    segments: arrangement.segments,
    rotation: arrangement.spin + turn,
    lock: 0,
    ink: 0,
    inkHue: arrangement.hue,
    wash: `hsla(${arrangement.hue}, 42%, 46%, 0.16)`,
    photos: [
      {
        id: arrangement.photo,
        alpha: 1,
        filter: arrangement.filter,
        aimX: clamp(arrangement.aimX + Math.sin(turn * 0.55) * orbit, 0.06, 0.94),
        aimY: clamp(arrangement.aimY + Math.cos(turn * 0.42) * orbit, 0.06, 0.94),
      },
    ],
    word: null,
    credit: null,
    reveal: 0,
    fold: arrangement.fold,
    zoom: arrangement.zoom,
  };
}

export type View = { w: number; h: number; dpr: number; cx: number; cy: number; radius: number };

function mirrorAngle(a: number, i: number, segments: number, rotation: number) {
  const sector = TAU / segments;
  let ang = a % TAU;
  if (ang < 0) ang += TAU;
  const k = Math.floor(ang / sector);
  const local = ang - k * sector;
  const folded = k % 2 === 1 ? sector - local : local;
  const placed = i * sector + (i % 2 === 1 ? sector - folded : folded);
  return placed + rotation;
}

function paintRibbon(
  ctx: CanvasRenderingContext2D,
  view: View,
  pose: Pose,
  which: number,
  alpha: number,
  width: number,
) {
  const n = 72;
  const pts: { rn: number; a: number }[] = [];
  const spin = pose.x * 7.4 + which * 1.65;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const rn = clamp(0.05 + Math.sin(Math.PI * t) ** 0.92 * (0.4 + which * 0.16), 0.04, 0.96);
    const a = spin + t * (1.15 + which * 0.48) + Math.sin(t * TAU + which * 1.3) * 0.2;
    pts.push({ rn, a });
  }
  const { cx, cy, radius } = view;
  const hue = pose.inkHue + which * 28 + pose.x * 24;
  ctx.beginPath();
  for (let s = 0; s < pose.segments; s++) {
    let drawing = false;
    let px = 0;
    let py = 0;
    for (const p of pts) {
      const ang = mirrorAngle(p.a, s, pose.segments, pose.rotation);
      const x = cx + Math.cos(ang) * p.rn * radius;
      const y = cy + Math.sin(ang) * p.rn * radius;
      if (!drawing) {
        ctx.moveTo(x, y);
        drawing = true;
      } else if (Math.hypot(x - px, y - py) > radius * 0.55) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      px = x;
      py = y;
    }
  }
  ctx.strokeStyle = `hsla(${hue}, 78%, 70%, ${alpha * 0.22})`;
  ctx.lineWidth = width * 3.2;
  ctx.stroke();
  ctx.strokeStyle = `hsla(${hue}, 84%, 66%, ${alpha})`;
  ctx.lineWidth = width;
  ctx.stroke();
}

function paintShot(
  ctx: CanvasRenderingContext2D,
  view: View,
  pose: Pose,
  shot: Shot,
  img: HTMLImageElement,
) {
  if (!img.complete || img.naturalWidth < 1 || shot.alpha < 0.02) return;
  const { cx, cy, radius } = view;
  const sector = TAU / pose.segments;
  const side = radius * pose.zoom;
  const cover = Math.max(side / img.naturalWidth, side / img.naturalHeight);
  const dw = img.naturalWidth * cover;
  const dh = img.naturalHeight * cover;
  const left = clamp(-shot.aimX * dw, radius - dw, -radius);
  const top = clamp(-shot.aimY * dh, radius - dh, -radius);

  ctx.save();
  ctx.globalAlpha = shot.alpha;
  ctx.filter = shot.filter;
  for (let i = 0; i < pose.segments; i++) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(i * sector + pose.rotation);
    if (pose.fold === "mirror" && i % 2 === 1) ctx.scale(1, -1);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, -sector / 2, sector / 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(img, left, top, dw, dh);
    ctx.restore();
  }
  ctx.restore();
}

function paintWord(ctx: CanvasRenderingContext2D, view: View, pose: Pose) {
  if (!pose.word || pose.reveal < 0.02) return;
  const { cx, cy, radius } = view;
  const letters = [...pose.word];
  const shown = pose.reveal * letters.length;
  ctx.save();
  ctx.font = `520 ${Math.max(16, radius * 0.11)}px Fraunces, Palatino, serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineJoin = "round";
  const spread = Math.min(0.2, 0.72 / letters.length);
  const mid = Math.PI / 2;
  for (let i = 0; i < letters.length; i++) {
    const gain = clamp(shown - i, 0, 1);
    if (gain <= 0) continue;
    const ang = mid + (i - (letters.length - 1) / 2) * spread;
    const r = radius * 0.62;
    const x = cx + Math.cos(ang) * r;
    const y = cy + Math.sin(ang) * r;
    ctx.globalAlpha = gain;
    ctx.strokeStyle = "rgba(12,11,10,0.72)";
    ctx.lineWidth = 5;
    ctx.strokeText(letters[i], x, y);
    ctx.fillStyle = pose.lock > 0.65 ? "#f3ecdf" : "#d7a15e";
    ctx.fillText(letters[i], x, y);
  }
  if (pose.credit && pose.reveal > 0.72) {
    ctx.globalAlpha = clamp((pose.reveal - 0.72) / 0.28, 0, 1) * 0.8;
    ctx.font = `500 ${Math.max(10, radius * 0.045)}px Outfit, sans-serif`;
    ctx.fillStyle = "#f3ecdf";
    ctx.letterSpacing = "0.18em";
    const y = cy + radius * 0.8;
    ctx.strokeStyle = "rgba(12,11,10,0.7)";
    ctx.lineWidth = 3;
    ctx.strokeText(pose.credit, cx, y);
    ctx.fillText(pose.credit, cx, y);
    ctx.letterSpacing = "0px";
  }
  ctx.restore();
}

export function drawSweep(
  ctx: CanvasRenderingContext2D,
  view: View,
  pose: Pose,
  images: Record<string, HTMLImageElement | undefined>,
  energy: number,
) {
  const { w, h, dpr, cx, cy, radius } = view;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
  ctx.filter = "none";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.fillStyle = "#0c0b0a";
  ctx.fillRect(0, 0, w, h);

  if (radius > 4) {
    const wash = ctx.createRadialGradient(cx, cy, radius * 0.02, cx, cy, radius);
    wash.addColorStop(0, pose.wash);
    wash.addColorStop(0.72, "rgba(12,11,10,0)");
    ctx.fillStyle = wash;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, TAU);
    ctx.fill();
  }

  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, Math.max(radius - 0.5, 1), 0, TAU);
  ctx.clip();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  for (const shot of pose.photos) {
    const img = images[shot.id];
    if (img) paintShot(ctx, view, pose, shot, img);
  }

  if (pose.ink > 0.02) {
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    paintRibbon(ctx, view, pose, 0, pose.ink * 0.9, 3.4);
    paintRibbon(ctx, view, pose, 1, pose.ink * 0.55, 1.6);
    paintRibbon(ctx, view, pose, 2, pose.ink * 0.35, 1.05);
  }

  const photoAmp = pose.photos.reduce((sum, shot) => sum + shot.alpha, 0);
  if (pose.ink < 0.15 && photoAmp < 0.12) {
    ctx.globalAlpha = 1 - photoAmp - pose.ink;
    ctx.fillStyle = "#d7a15e";
    ctx.beginPath();
    ctx.arc(cx, cy, 2.4, 0, TAU);
    ctx.fill();
  }

  if (energy > 0.04) {
    ctx.globalAlpha = energy * 0.18;
    ctx.fillStyle = "#f3ecdf";
    ctx.beginPath();
    ctx.arc(cx, cy, radius * (0.05 + energy * 0.22), 0, TAU);
    ctx.fill();
  }

  paintWord(ctx, view, pose);
  ctx.restore();

  ctx.globalAlpha = 1;
  ctx.filter = "none";
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(215,161,94,0.35)";
  const sector = TAU / pose.segments;
  for (let i = 0; i < pose.segments; i++) {
    const ang = i * sector + pose.rotation;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(ang) * (radius - 11), cy + Math.sin(ang) * (radius - 11));
    ctx.lineTo(cx + Math.cos(ang) * radius, cy + Math.sin(ang) * radius);
    ctx.stroke();
  }

  ctx.lineWidth = 1.25;
  ctx.strokeStyle = "rgba(215,161,94,0.85)";
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, TAU);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(215,161,94,0.28)";
  ctx.beginPath();
  ctx.arc(cx, cy, Math.max(radius - 8, 1), 0, TAU);
  ctx.stroke();

  const vignette = ctx.createRadialGradient(cx, cy, radius * 0.92, cx, cy, Math.max(w, h) * 0.72);
  vignette.addColorStop(0, "rgba(12,11,10,0)");
  vignette.addColorStop(1, "rgba(12,11,10,0.78)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, w, h);
}

export function createVoice() {
  let ctx: AudioContext | null = null;
  let master: GainNode | null = null;
  let oscA: OscillatorNode | null = null;
  let oscB: OscillatorNode | null = null;
  let gainB: GainNode | null = null;
  let filter: BiquadFilterNode | null = null;

  function unlock() {
    if (!ctx) {
      const Ctx = window.AudioContext;
      ctx = new Ctx();
      master = ctx.createGain();
      master.gain.value = 0;
      filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 700;
      filter.Q.value = 0.65;
      const gainA = ctx.createGain();
      gainB = ctx.createGain();
      gainA.gain.value = 0.8;
      gainB.gain.value = 0.12;
      oscA = ctx.createOscillator();
      oscB = ctx.createOscillator();
      oscA.type = "sine";
      oscB.type = "sine";
      oscA.frequency.value = 98;
      oscB.frequency.value = 147;
      oscA.connect(gainA);
      oscB.connect(gainB);
      gainA.connect(filter);
      gainB.connect(filter);
      filter.connect(master);
      master.connect(ctx.destination);
      oscA.start();
      oscB.start();
    }
    if (ctx.state === "suspended") void ctx.resume();
  }

  function set(x: number, energy: number, lock: number) {
    if (!ctx || !master || !oscA || !oscB || !gainB || !filter) return;
    const now = ctx.currentTime;
    const freq = 92.5 * 2 ** (clamp(x, 0, 1) * 2);
    oscA.frequency.setTargetAtTime(freq, now, 0.06);
    const ratio = lock > 0.55 ? 1.25 : 1.4983;
    oscB.frequency.setTargetAtTime(freq * ratio, now, 0.08);
    gainB.gain.setTargetAtTime(0.12 + lock * 0.5, now, 0.08);
    filter.frequency.setTargetAtTime(380 + x * 1500 + energy * 2000 + lock * 500, now, 0.05);
    master.gain.setTargetAtTime(0.011 + x * 0.012 + energy * 0.03 + lock * 0.018, now, 0.06);
  }

  function blip(freq: number) {
    if (!ctx || !master) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.045, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.62);
    osc.connect(gain);
    gain.connect(master);
    osc.start(now);
    osc.stop(now + 0.64);
  }

  function close() {
    void ctx?.close();
    ctx = null;
  }

  return { unlock, set, blip, close };
}

export const PHOTO_SRC: Record<string, string> = Object.fromEntries(
  GALLERY.map((item) => [item.id, item.src]),
);
