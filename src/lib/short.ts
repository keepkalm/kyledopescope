import { drawSweep, poseFrom, type Arrangement, type View } from "@/lib/sweep";

const TAU = Math.PI * 2;
const WIDTH = 720;
const HEIGHT = 1280;
const SECONDS = 8;
const FPS = 30;
const END_SECONDS = 2;

export const SITE = "https://kyledopescope.grok.me";

const VIEW: View = {
  w: WIDTH,
  h: HEIGHT,
  dpr: 1,
  cx: WIDTH / 2,
  cy: HEIGHT * 0.42,
  radius: 300,
};

function fit(ctx: CanvasRenderingContext2D, text: string, max: number, size: number, weight: string, family: string) {
  let next = size;
  do {
    ctx.font = `${weight} ${next}px ${family}`;
    if (ctx.measureText(text).width <= max || next <= 14) break;
    next -= 2;
  } while (next > 14);
}

function paintCard(ctx: CanvasRenderingContext2D, arrangement: Arrangement) {
  const source = arrangement.page.replace(/^https?:\/\//, "");
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.letterSpacing = "0px";
  fit(ctx, arrangement.label, WIDTH - 80, 42, "520", "Fraunces, Palatino, serif");
  ctx.fillStyle = "#f3ecdf";
  ctx.fillText(arrangement.label, WIDTH / 2, HEIGHT - 168);
  fit(ctx, arrangement.credit.toUpperCase(), WIDTH - 80, 18, "500", "Outfit, sans-serif");
  ctx.fillStyle = "#d7a15e";
  ctx.fillText(arrangement.credit.toUpperCase(), WIDTH / 2, HEIGHT - 118);
  fit(ctx, source, WIDTH - 64, 16, "500", "Outfit, sans-serif");
  ctx.fillStyle = "rgba(243,236,223,0.86)";
  ctx.fillText(source, WIDTH / 2, HEIGHT - 76);
}

function paintEnding(ctx: CanvasRenderingContext2D, arrangement: Arrangement, image: HTMLImageElement) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "#0c0b0a";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.letterSpacing = "0px";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const maxW = WIDTH - 120;
  const maxH = HEIGHT * 0.48;
  const scale = Math.min(maxW / Math.max(1, image.naturalWidth), maxH / Math.max(1, image.naturalHeight));
  const dw = image.naturalWidth * scale;
  const dh = image.naturalHeight * scale;
  const x = (WIDTH - dw) / 2;
  const y = 80;
  ctx.drawImage(image, x, y, dw, dh);

  const source = arrangement.page.replace(/^https?:\/\//, "");
  const top = Math.min(y + dh + 52, HEIGHT - 220);
  fit(ctx, arrangement.label, WIDTH - 80, 40, "520", "Fraunces, Palatino, serif");
  ctx.fillStyle = "#f3ecdf";
  ctx.fillText(arrangement.label, WIDTH / 2, top);
  fit(ctx, arrangement.credit, WIDTH - 80, 20, "500", "Outfit, sans-serif");
  ctx.fillStyle = "#d7a15e";
  ctx.fillText(arrangement.credit, WIDTH / 2, top + 40);
  fit(ctx, source, WIDTH - 64, 16, "500", "Outfit, sans-serif");
  ctx.fillStyle = "rgba(243,236,223,0.86)";
  ctx.fillText(source, WIDTH / 2, top + 74);
  fit(ctx, SITE.replace(/^https?:\/\//, ""), WIDTH - 64, 18, "600", "Outfit, sans-serif");
  ctx.fillStyle = "#f3ecdf";
  ctx.fillText(SITE.replace(/^https?:\/\//, ""), WIDTH / 2, top + 112);
}

function paintAt(
  ctx: CanvasRenderingContext2D,
  arrangement: Arrangement,
  image: HTMLImageElement,
  startTurn: number,
  index: number,
) {
  const frames = FPS * SECONDS;
  const endFrames = FPS * END_SECONDS;
  if (index >= frames - endFrames) {
    paintEnding(ctx, arrangement, image);
    return;
  }
  const t = index / Math.max(1, frames - endFrames - 1);
  const pose = poseFrom(startTurn + t * TAU * 0.85, arrangement);
  drawSweep(ctx, VIEW, pose, { [arrangement.photo]: image }, Math.sin(t * Math.PI) * 0.45);
  paintCard(ctx, arrangement);
}

export function sourceText(arrangement: Arrangement) {
  return `${arrangement.label} — ${arrangement.credit}\n${arrangement.page}\n\n${SITE}`;
}

export function shortFileName(photo: string, type: string) {
  const ext = type.includes("mp4") ? "mp4" : "webm";
  return `KyleDopeScope-${photo}-short.${ext}`;
}

async function recordMp4(arrangement: Arrangement, image: HTMLImageElement, startTurn: number) {
  if (typeof VideoEncoder === "undefined") throw new Error("no encoder");
  const { Output, Mp4OutputFormat, BufferTarget, CanvasSource, Quality } = await import("mediabunny");
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) throw new Error("This browser can't record a video short.");

  const target = new BufferTarget();
  const output = new Output({
    format: new Mp4OutputFormat({ fastStart: "in-memory" }),
    target,
  });
  const video = new CanvasSource(canvas, { codec: "avc", quality: new Quality("high") });
  output.addVideoTrack(video);
  output.setMetadataTags({
    title: `${arrangement.label} — KyleDopeScope`,
    artist: arrangement.credit,
    comment: `${arrangement.page}\n${SITE}`,
    description: SITE,
  });
  await output.start();

  const frames = FPS * SECONDS;
  for (let index = 0; index < frames; index++) {
    paintAt(ctx, arrangement, image, startTurn, index);
    await video.add(index / FPS, 1 / FPS);
  }
  await output.finalize();
  if (!target.buffer) throw new Error("Couldn't finish the video.");
  return new Blob([target.buffer], { type: "video/mp4" });
}

function recorderMime() {
  const types = ["video/mp4", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
  if (typeof MediaRecorder === "undefined") return "";
  return types.find((type) => MediaRecorder.isTypeSupported(type)) ?? "";
}

async function recordStream(arrangement: Arrangement, image: HTMLImageElement, startTurn: number) {
  const type = recorderMime();
  if (!type || typeof HTMLCanvasElement.prototype.captureStream !== "function") {
    throw new Error("This phone can't record a video short.");
  }
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) throw new Error("This phone can't record a video short.");

  const stream = canvas.captureStream(FPS);
  const recorder = new MediaRecorder(stream, { mimeType: type, videoBitsPerSecond: 4_500_000 });
  const chunks: Blob[] = [];
  recorder.ondataavailable = (event) => {
    if (event.data.size) chunks.push(event.data);
  };
  const done = new Promise<Blob>((resolve, reject) => {
    recorder.onerror = () => reject(new Error("Recording failed."));
    recorder.onstop = () => resolve(new Blob(chunks, { type: recorder.mimeType || type }));
  });

  const frames = FPS * SECONDS;
  recorder.start();
  for (let index = 0; index < frames; index++) {
    paintAt(ctx, arrangement, image, startTurn, index);
    await new Promise((resolve) => setTimeout(resolve, 1000 / FPS));
  }
  if (recorder.state !== "inactive") recorder.stop();
  const blob = await done;
  for (const track of stream.getTracks()) track.stop();
  return blob;
}

export async function recordShort(arrangement: Arrangement, image: HTMLImageElement, startTurn: number) {
  await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));
  try {
    return await recordMp4(arrangement, image, startTurn);
  } catch {
    return recordStream(arrangement, image, startTurn);
  }
}

export function downloadShort(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 15000);
}
