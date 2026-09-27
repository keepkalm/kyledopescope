export const TAU = Math.PI * 2;
export const TTL = 14000;
export const MIN_SEG = 3;
export const MAX_SEG = 16;

export type ModeId = "iris" | "ember" | "tide" | "prism" | "chalk";

export const MODES: { id: ModeId; label: string }[] = [
  { id: "iris", label: "Iris" },
  { id: "ember", label: "Ember" },
  { id: "tide", label: "Tide" },
  { id: "prism", label: "Prism" },
  { id: "chalk", label: "Chalk" },
];

const WASH: Record<ModeId, string> = {
  iris: "rgba(96, 52, 168, 0.42)",
  ember: "rgba(168, 58, 18, 0.4)",
  tide: "rgba(10, 118, 124, 0.38)",
  prism: "rgba(92, 42, 130, 0.36)",
  chalk: "rgba(92, 74, 48, 0.28)",
};

export type Pt = { rn: number; a: number };

export type Stroke = {
  pts: Pt[];
  w: number;
  phase: number;
  born: number;
};

export type Spark = {
  rn: number;
  a: number;
  vr: number;
  va: number;
  w: number;
  phase: number;
  born: number;
  life: number;
};

export type Ghost = {
  u: number;
  dur: number;
  seed: number;
  loop: boolean;
  stroke: Stroke | null;
};

export type Engine = {
  strokes: Stroke[];
  open: Stroke | null;
  sparks: Spark[];
  ghosts: Ghost[];
  segments: number;
  mode: ModeId;
  frozen: boolean;
  freezeStarted: number | null;
  frozenTotal: number;
  reduce: boolean;
  engaged: boolean;
  w: number;
  h: number;
  dpr: number;
  cx: number;
  cy: number;
  radius: number;
  down: boolean;
  coast: { x: number; y: number; vx: number; vy: number; left: number } | null;
  keys: Set<string>;
  keyPolar: Pt | null;
  hiddenAt: number | null;
  photo: HTMLImageElement | null;
  aim: { x: number; y: number };
  aiming: boolean;
  aimed: boolean;
  sourceLabel: string;
};

export function createEngine(): Engine {
  return {
    strokes: [],
    open: null,
    sparks: [],
    ghosts: [],
    segments: 8,
    mode: "iris",
    frozen: false,
    freezeStarted: null,
    frozenTotal: 0,
    reduce: false,
    engaged: false,
    w: 300,
    h: 300,
    dpr: 1,
    cx: 150,
    cy: 150,
    radius: 120,
    down: false,
    coast: null,
    keys: new Set(),
    keyPolar: null,
    hiddenAt: null,
    photo: null,
    aim: { x: 0.5, y: 0.45 },
    aiming: false,
    aimed: false,
    sourceLabel: "Ink",
  };
}

export function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

export function isMode(value: string): value is ModeId {
  return MODES.some((mode) => mode.id === value);
}

export function effectiveNow(engine: Engine, now: number) {
  if (engine.freezeStarted != null) return engine.freezeStarted - engine.frozenTotal;
  return now - engine.frozenTotal;
}

/** Fold any angle into the first mirror sector. Continuous across every mirror. */
export function foldAngle(angle: number, segments: number) {
  const sector = TAU / segments;
  let a = angle % TAU;
  if (a < 0) a += TAU;
  const i = Math.floor(a / sector);
  const local = a - i * sector;
  return i % 2 === 1 ? sector - local : local;
}

export function placeAngle(folded: number, i: number, segments: number) {
  const sector = TAU / segments;
  const local = i % 2 === 0 ? folded : sector - folded;
  return i * sector + local;
}

function unwrap(prev: number, next: number) {
  let a = next;
  while (a - prev > Math.PI) a -= TAU;
  while (prev - a > Math.PI) a += TAU;
  return a;
}

function lifeFade(age: number) {
  if (age < 0) return 1;
  const u = age / TTL;
  if (u >= 1) return 0;
  if (u < 0.62) return 1;
  const t = (u - 0.62) / 0.38;
  return 1 - t * t;
}

function phaseAt(now: number, angle: number) {
  const p = (now / 6200 + angle / TAU) % 1;
  return p < 0 ? p + 1 : p;
}

function mix(mode: ModeId, phase: number) {
  const p = ((phase % 1) + 1) % 1;
  switch (mode) {
    case "iris":
      return { h: 250 + p * 86, s: 84, l: 67 };
    case "ember":
      return { h: 4 + p * 40, s: 90, l: 60 };
    case "tide":
      return { h: 162 + p * 48, s: 74, l: 58 };
    case "prism":
      return { h: p * 360, s: 86, l: 62 };
    case "chalk":
      return { h: 34 + p * 14, s: 24, l: 88 };
  }
}

function hsla(mode: ModeId, phase: number, alpha: number) {
  const c = mix(mode, phase);
  return `hsla(${c.h}, ${c.s}%, ${c.l}%, ${alpha})`;
}

function pushStroke(engine: Engine, stroke: Stroke | null) {
  if (!stroke || stroke.pts.length < 1) return;
  engine.strokes.push(stroke);
  if (engine.strokes.length > 420) {
    engine.strokes.splice(0, engine.strokes.length - 420);
  }
}

function append(
  engine: Engine,
  current: Stroke | null,
  rn: number,
  angle: number,
  dt: number,
  now: number,
  sparkle: boolean,
): Stroke | null {
  if (engine.frozen || engine.radius < 8) return current;
  const born = effectiveNow(engine, now);
  rn = clamp(rn, 0.025, 0.98);

  const prev = current && current.pts.length ? current.pts[current.pts.length - 1] : null;
  const ang = prev ? unwrap(prev.a, angle) : angle;

  let dist = 10;
  if (prev) {
    const dx = (rn * Math.cos(ang) - prev.rn * Math.cos(prev.a)) * engine.radius;
    const dy = (rn * Math.sin(ang) - prev.rn * Math.sin(prev.a)) * engine.radius;
    dist = Math.hypot(dx, dy);
    if (dist < 1.2) return current;
  }

  const w = clamp(7.6 - Math.min(dist / Math.max(dt, 0.008), 1750) / 250, 1.15, 7.6);

  if (!current || current.pts.length >= 18) {
    const carry = prev ? { rn: prev.rn, a: prev.a } : null;
    if (current && current.pts.length >= 2) pushStroke(engine, current);
    current = {
      pts: carry ? [{ ...carry }] : [],
      w,
      phase: phaseAt(born, ang),
      born,
    };
  }

  current.pts.push({ rn, a: ang });

  if (sparkle && engine.sparks.length < 72 && Math.random() < 0.28) {
    engine.sparks.push({
      rn,
      a: ang,
      vr: 0.02 + Math.random() * 0.055,
      va: (Math.random() - 0.5) * 0.4,
      w: 1.1 + Math.random() * 1.7,
      phase: current.phase,
      born,
      life: 0.45 + Math.random() * 0.5,
    });
  }

  return current;
}

export function toPolar(engine: Engine, x: number, y: number): Pt {
  const dx = x - engine.cx;
  const dy = y - engine.cy;
  const r = Math.hypot(dx, dy);
  if (r < 1) return { rn: 0.04, a: -Math.PI / 2 };
  return { rn: clamp(r / engine.radius, 0.03, 0.98), a: Math.atan2(dy, dx) };
}

export function engage(engine: Engine) {
  if (engine.engaged) return;
  engine.engaged = true;
  for (const ghost of engine.ghosts) pushStroke(engine, ghost.stroke);
  engine.ghosts = [];
}

export function pointerDown(engine: Engine, x: number, y: number, now: number) {
  if (engine.frozen) return;
  engage(engine);
  engine.down = true;
  engine.coast = null;
  const p = toPolar(engine, x, y);
  const born = effectiveNow(engine, now);
  pushStroke(engine, engine.open);
  engine.open = {
    pts: [p],
    w: 4.4,
    phase: phaseAt(born, p.a),
    born,
  };
  engine.keyPolar = p;
}

export function pointerMove(engine: Engine, x: number, y: number, now: number) {
  if (!engine.down || engine.frozen) return;
  const last = engine.keyPolar;
  const p = toPolar(engine, x, y);
  let dt = 0.016;
  if (last) {
    const dx = (Math.cos(p.a) * p.rn - Math.cos(last.a) * last.rn) * engine.radius;
    const dy = (Math.sin(p.a) * p.rn - Math.sin(last.a) * last.rn) * engine.radius;
    const dist = Math.hypot(dx, dy);
    dt = clamp(dist / 900, 0.008, 0.04);
    engine.coast = {
      x: engine.cx + Math.cos(p.a) * p.rn * engine.radius,
      y: engine.cy + Math.sin(p.a) * p.rn * engine.radius,
      vx: dx / dt,
      vy: dy / dt,
      left: 0.42,
    };
  }
  engine.open = append(engine, engine.open, p.rn, p.a, dt, now, true);
  engine.keyPolar = engine.open?.pts[engine.open.pts.length - 1] ?? p;
}

export function pointerUp(engine: Engine) {
  engine.down = false;
  if (engine.open) {
    pushStroke(engine, engine.open);
    engine.open = null;
  }
  if (engine.reduce) engine.coast = null;
}

function stepGhost(engine: Engine, ghost: Ghost, dt: number, now: number) {
  const before = ghost.u;
  ghost.u += dt / ghost.dur;
  if (ghost.u >= 1) {
    if (!ghost.loop) {
      pushStroke(engine, ghost.stroke);
      ghost.stroke = null;
      return false;
    }
    ghost.u %= 1;
    pushStroke(engine, ghost.stroke);
    ghost.stroke = null;
    if (before > 0.98) return true;
  }
  const p = ghostSample(ghost.u, ghost.seed);
  ghost.stroke = append(engine, ghost.stroke, p.rn, p.a, dt, now, false);
  return true;
}

export function ghostSample(u: number, seed: number): Pt {
  const t = (u % 1) * TAU * 1.55 + seed;
  const rn = 0.18 + 0.64 * (0.5 + 0.5 * Math.sin(t * 0.86));
  const a = seed * 0.25 + (u % 1) * 3.6 + Math.sin(t * 1.55) * 0.5;
  return { rn: clamp(rn, 0.05, 0.96), a };
}

function stepKeys(engine: Engine, dt: number, now: number) {
  let dx = 0;
  let dy = 0;
  if (engine.keys.has("ArrowLeft")) dx -= 1;
  if (engine.keys.has("ArrowRight")) dx += 1;
  if (engine.keys.has("ArrowUp")) dy -= 1;
  if (engine.keys.has("ArrowDown")) dy += 1;
  if (!dx && !dy) return;
  engage(engine);
  const len = Math.hypot(dx, dy);
  if (!engine.keyPolar) engine.keyPolar = { rn: 0.38, a: -Math.PI / 2 };
  let x = engine.cx + Math.cos(engine.keyPolar.a) * engine.keyPolar.rn * engine.radius;
  let y = engine.cy + Math.sin(engine.keyPolar.a) * engine.keyPolar.rn * engine.radius;
  x += (dx / len) * 260 * dt;
  y += (dy / len) * 260 * dt;
  const p = toPolar(engine, x, y);
  engine.open = append(engine, engine.open, p.rn, p.a, dt, now, true);
  engine.keyPolar = engine.open?.pts[engine.open.pts.length - 1] ?? p;
}

export function step(engine: Engine, dt: number, now: number) {
  const capped = Math.min(Math.max(dt, 0), 0.05);
  if (engine.photo) {
    if (!engine.frozen) engine.frozenTotal += capped * 1000;
    if (!engine.frozen && !engine.aimed && !engine.aiming && !engine.reduce) {
      engine.aim.x = clamp(0.5 + Math.sin(now / 2600) * 0.18, 0.08, 0.92);
      engine.aim.y = clamp(0.45 + Math.cos(now / 3400) * 0.14, 0.08, 0.92);
    }
    return;
  }
  if (engine.frozen) return;
  const eff = effectiveNow(engine, now);
  if (engine.strokes.length) {
    engine.strokes = engine.strokes.filter((stroke) => eff - stroke.born < TTL);
  }
  if (engine.sparks.length) {
    engine.sparks = engine.sparks.filter((spark) => (eff - spark.born) / 1000 < spark.life);
  }
  if (engine.ghosts.length) {
    engine.ghosts = engine.ghosts.filter((ghost) => stepGhost(engine, ghost, capped, now));
  }
  if (engine.coast && !engine.down && !engine.reduce) {
    const coast = engine.coast;
    coast.left -= capped;
    if (coast.left <= 0) {
      engine.coast = null;
      pushStroke(engine, engine.open);
      engine.open = null;
    } else {
      const k = coast.left / 0.42;
      coast.x += coast.vx * capped * k;
      coast.y += coast.vy * capped * k;
      coast.vx *= Math.exp(-3.2 * capped);
      coast.vy *= Math.exp(-3.2 * capped);
      const p = toPolar(engine, coast.x, coast.y);
      engine.open = append(engine, engine.open, p.rn, p.a, capped, now, true);
      engine.keyPolar = p;
    }
  }
  stepKeys(engine, capped, now);
}

export function setFrozen(engine: Engine, frozen: boolean, now: number) {
  if (frozen === engine.frozen) return;
  if (frozen) {
    pushStroke(engine, engine.open);
    engine.open = null;
    for (const ghost of engine.ghosts) {
      pushStroke(engine, ghost.stroke);
      ghost.stroke = null;
    }
    engine.down = false;
    engine.coast = null;
    engine.keys.clear();
    engine.aiming = false;
    engine.frozen = true;
    engine.freezeStarted = now;
    return;
  }
  if (engine.freezeStarted != null) engine.frozenTotal += now - engine.freezeStarted;
  engine.freezeStarted = null;
  engine.frozen = false;
}

export function noteVisibility(engine: Engine, hidden: boolean, now: number) {
  if (hidden) {
    engine.hiddenAt = now;
    engine.keys.clear();
    return;
  }
  if (engine.hiddenAt != null && !engine.frozen) {
    engine.frozenTotal += now - engine.hiddenAt;
  }
  engine.hiddenAt = null;
}

export function setPhoto(engine: Engine, photo: HTMLImageElement | null, label = "Ink") {
  engine.photo = photo;
  engine.aiming = false;
  engine.aimed = false;
  engine.aim.x = 0.5;
  engine.aim.y = 0.45;
  engine.sourceLabel = label;
  engine.down = false;
  engine.coast = null;
  if (photo) engine.ghosts = [];
}

export function aimAt(engine: Engine, x: number, y: number) {
  if (!engine.photo || engine.frozen) return;
  const span = Math.max(engine.radius * 2, 1);
  engine.aim.x = clamp((x - (engine.cx - engine.radius)) / span, 0, 1);
  engine.aim.y = clamp((y - (engine.cy - engine.radius)) / span, 0, 1);
  engine.aiming = true;
  engine.aimed = true;
}

export function aimRelease(engine: Engine) {
  engine.aiming = false;
}

export function nudgeAim(engine: Engine, dx: number, dy: number) {
  if (!engine.photo || engine.frozen) return;
  engine.aim.x = clamp(engine.aim.x + dx, 0, 1);
  engine.aim.y = clamp(engine.aim.y + dy, 0, 1);
  engine.aimed = true;
  engine.aiming = false;
}

function addSweep(
  strokes: Stroke[],
  now: number,
  spec: {
    points: number;
    width: number;
    phase: number;
    ageMs: number;
    sample: (t: number) => Pt;
  },
) {
  const pts: Pt[] = [];
  for (let i = 0; i <= spec.points; i++) {
    const t = i / spec.points;
    const p = spec.sample(t);
    pts.push({ rn: clamp(p.rn, 0.03, 0.97), a: p.a });
  }
  const chunk = 16;
  for (let i = 0; i < pts.length - 1; i += chunk - 1) {
    const slice = pts.slice(i, Math.min(pts.length, i + chunk));
    if (slice.length < 2) continue;
    const u = i / pts.length;
    strokes.push({
      pts: slice,
      w: spec.width * (0.62 + Math.sin(u * Math.PI) * 0.55),
      phase: (spec.phase + u * 0.38) % 1,
      born: now - spec.ageMs * (1 - u),
    });
  }
}

export function garden(now: number, spin: number): Stroke[] {
  const strokes: Stroke[] = [];
  addSweep(strokes, now, {
    points: 160,
    width: 4.6,
    phase: 0.06,
    ageMs: 2600,
    sample: (t) => ({
      a: spin - 0.4 + t * 1.42,
      rn: 0.08 + Math.sin(t * Math.PI) ** 1.05 * 0.8,
    }),
  });
  addSweep(strokes, now, {
    points: 130,
    width: 2.15,
    phase: 0.44,
    ageMs: 1900,
    sample: (t) => ({
      a: spin + 0.62 + t * 2.55,
      rn: 0.06 + t * 0.5 + Math.sin(t * Math.PI * 3) * 0.028,
    }),
  });
  addSweep(strokes, now, {
    points: 110,
    width: 1.45,
    phase: 0.74,
    ageMs: 1400,
    sample: (t) => ({
      a: spin + 2.35 + t * 1.15,
      rn: 0.56 + Math.sin(t * Math.PI * 5) * 0.075,
    }),
  });
  return strokes;
}

export function plant(engine: Engine, now: number, spin: number) {
  engine.strokes = garden(effectiveNow(engine, now), spin);
  engine.open = null;
  engine.sparks = [];
}

export function clearInk(engine: Engine, now: number) {
  engine.strokes = [];
  engine.open = null;
  engine.sparks = [];
  engine.coast = null;
  engine.down = false;
  engine.engaged = false;
  engine.ghosts = engine.reduce
    ? []
    : [
        {
          u: 0,
          dur: 22,
          seed: (now % 1000) / 70,
          loop: true,
          stroke: null,
        },
      ];
}

export function playShow(engine: Engine, now: number) {
  const spin = Math.random() * TAU;
  if (engine.frozen) setFrozen(engine, false, now);
  plant(engine, now, spin);
  engine.engaged = true;
  engine.coast = null;
  engine.down = false;
  engine.ghosts = [0, 1].map((i) => ({
    u: 0,
    dur: 2.4 + i * 0.85,
    seed: spin + i * 2.15 + Math.random(),
    loop: false,
    stroke: null,
  }));
}

function trace(ctx: CanvasRenderingContext2D, engine: Engine, stroke: Stroke) {
  const { cx, cy, radius, segments } = engine;
  const limit = radius * 0.55;
  ctx.beginPath();
  for (let i = 0; i < segments; i++) {
    let drawing = false;
    let prevX = 0;
    let prevY = 0;
    for (const p of stroke.pts) {
      const ang = placeAngle(foldAngle(p.a, segments), i, segments);
      const x = cx + Math.cos(ang) * p.rn * radius;
      const y = cy + Math.sin(ang) * p.rn * radius;
      if (!drawing) {
        ctx.moveTo(x, y);
        drawing = true;
      } else if (Math.hypot(x - prevX, y - prevY) > limit) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      prevX = x;
      prevY = y;
    }
  }
}

function paintDot(
  ctx: CanvasRenderingContext2D,
  engine: Engine,
  p: Pt,
  width: number,
  glow: string,
  core: string,
  lighter: boolean,
) {
  const folded = foldAngle(p.a, engine.segments);
  for (let i = 0; i < engine.segments; i++) {
    const ang = placeAngle(folded, i, engine.segments);
    const x = engine.cx + Math.cos(ang) * p.rn * engine.radius;
    const y = engine.cy + Math.sin(ang) * p.rn * engine.radius;
    if (lighter) {
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, width * 1.8, 0, TAU);
      ctx.fill();
    }
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(x, y, width * 0.55, 0, TAU);
    ctx.fill();
  }
}

function photoFilter(mode: ModeId, now: number, reduce: boolean) {
  switch (mode) {
    case "iris":
      return "none";
    case "ember":
      return "saturate(1.15) sepia(0.45)";
    case "tide":
      return "saturate(1.1) hue-rotate(150deg)";
    case "prism":
      return reduce
        ? "saturate(1.25) hue-rotate(70deg)"
        : `saturate(1.25) hue-rotate(${(now / 48) % 360}deg)`;
    case "chalk":
      return "grayscale(1) contrast(1.12)";
  }
}

function paintPhoto(engine: Engine, ctx: CanvasRenderingContext2D, now: number) {
  const img = engine.photo;
  if (!img || !img.complete || img.naturalWidth < 1) return;
  const { cx, cy, radius, segments } = engine;
  const sector = TAU / segments;
  const side = radius * 2.5;
  const cover = Math.max(side / img.naturalWidth, side / img.naturalHeight);
  const dw = img.naturalWidth * cover;
  const dh = img.naturalHeight * cover;
  const left = clamp(-engine.aim.x * dw, radius - dw, -radius);
  const top = clamp(-engine.aim.y * dh, radius - dh, -radius);

  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, Math.max(radius - 0.5, 1), 0, TAU);
  ctx.clip();
  ctx.filter = photoFilter(engine.mode, now, engine.reduce);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  for (let i = 0; i < segments; i++) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(i * sector);
    if (i % 2 === 1) ctx.scale(1, -1);
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

export function draw(engine: Engine, ctx: CanvasRenderingContext2D, now: number) {
  const { w, h, dpr, cx, cy, radius, segments, mode } = engine;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
  ctx.filter = "none";
  ctx.fillStyle = "#0c0b0a";
  ctx.fillRect(0, 0, w, h);

  const showing = Boolean(engine.photo && engine.photo.complete && engine.photo.naturalWidth > 0);

  if (!showing && radius > 4) {
    const wash = ctx.createRadialGradient(cx, cy, radius * 0.04, cx, cy, radius);
    wash.addColorStop(0, WASH[mode]);
    wash.addColorStop(0.7, "rgba(12,11,10,0)");
    ctx.fillStyle = wash;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, TAU);
    ctx.fill();
  }

  if (showing) {
    paintPhoto(engine, ctx, now);
  } else {
    const eff = effectiveNow(engine, now);
    const extras: Stroke[] = [];
    if (engine.open && engine.open.pts.length) extras.push(engine.open);
    for (const ghost of engine.ghosts) {
      if (ghost.stroke && ghost.stroke.pts.length) extras.push(ghost.stroke);
    }
    const list = extras.length ? engine.strokes.concat(extras) : engine.strokes;
    const lighter = mode !== "chalk";

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, Math.max(radius - 0.5, 1), 0, TAU);
    ctx.clip();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalCompositeOperation = "source-over";

    for (const stroke of list) {
      const fade = lifeFade(eff - stroke.born);
      if (fade <= 0.004) continue;
      const core = hsla(mode, stroke.phase, fade * (lighter ? 0.72 : 0.9));
      const glow = hsla(mode, stroke.phase, fade * (lighter ? 0.16 : 0.08));
      if (stroke.pts.length === 1) {
        paintDot(ctx, engine, stroke.pts[0], stroke.w, glow, core, lighter);
        continue;
      }
      trace(ctx, engine, stroke);
      if (lighter) {
        ctx.strokeStyle = glow;
        ctx.lineWidth = stroke.w * 3.6;
        ctx.stroke();
      }
      ctx.strokeStyle = core;
      ctx.lineWidth = stroke.w;
      ctx.stroke();
    }

    for (const spark of engine.sparks) {
      const age = (eff - spark.born) / 1000;
      if (age < 0 || age > spark.life) continue;
      const k = 1 - age / spark.life;
      const rn = clamp(spark.rn + spark.vr * age, 0.02, 0.98);
      const ang0 = spark.a + spark.va * age;
      const folded = foldAngle(ang0, segments);
      ctx.fillStyle = hsla(mode, spark.phase, k * (lighter ? 0.9 : 0.75));
      const size = Math.max(0.4, spark.w * k);
      for (let i = 0; i < segments; i++) {
        const ang = placeAngle(folded, i, segments);
        ctx.beginPath();
        ctx.arc(cx + Math.cos(ang) * rn * radius, cy + Math.sin(ang) * rn * radius, size, 0, TAU);
        ctx.fill();
      }
    }

    ctx.restore();
  }

  ctx.filter = "none";
  ctx.globalCompositeOperation = "source-over";
  ctx.globalAlpha = 1;
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(215,161,94,0.28)";
  ctx.beginPath();
  ctx.arc(cx, cy, Math.max(radius - 7, 1), 0, TAU);
  ctx.stroke();
  ctx.strokeStyle = "rgba(215,161,94,0.82)";
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, TAU);
  ctx.stroke();

  ctx.strokeStyle = "rgba(215,161,94,0.5)";
  const sector = TAU / segments;
  for (let i = 0; i < segments; i++) {
    const ang = i * sector;
    const c = Math.cos(ang);
    const s = Math.sin(ang);
    ctx.beginPath();
    ctx.moveTo(cx + c * (radius - 12), cy + s * (radius - 12));
    ctx.lineTo(cx + c * radius, cy + s * radius);
    ctx.stroke();
  }

  const vignette = ctx.createRadialGradient(cx, cy, radius * 0.9, cx, cy, Math.max(w, h) * 0.68);
  vignette.addColorStop(0, "rgba(12,11,10,0)");
  vignette.addColorStop(1, "rgba(12,11,10,0.82)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, w, h);
}
