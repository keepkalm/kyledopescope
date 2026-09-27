import { drawSweep, poseFrom, type Arrangement, type View } from "@/lib/sweep";

const TAU = Math.PI * 2;
const WIDTH = 720;
const HEIGHT = 1280;
const SECONDS = 8;

function mimeType() {
  const types = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm", "video/mp4"];
  if (typeof MediaRecorder === "undefined") return "";
  return types.find((type) => MediaRecorder.isTypeSupported(type)) ?? "";
}

function fit(ctx: CanvasRenderingContext2D, text: string, max: number, size: number, weight: string, family: string) {
  let next = size;
  do {
    ctx.font = `${weight} ${next}px ${family}`;
    if (ctx.measureText(text).width <= max || next <= 18) break;
    next -= 2;
  } while (next > 18);
}

export async function recordShort(arrangement: Arrangement, image: HTMLImageElement, startTurn: number) {
  const type = mimeType();
  if (!type || typeof HTMLCanvasElement.prototype.captureStream !== "function") {
    throw new Error("This browser can't record a video short.");
  }

  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) throw new Error("This browser can't record a video short.");

  const view: View = {
    w: WIDTH,
    h: HEIGHT,
    dpr: 1,
    cx: WIDTH / 2,
    cy: HEIGHT * 0.42,
    radius: 300,
  };
  const images = { [arrangement.photo]: image };
  const stream = canvas.captureStream(30);

  let audio: AudioContext | null = null;
  const tones: OscillatorNode[] = [];
  try {
    audio = new AudioContext();
    const dest = audio.createMediaStreamDestination();
    const gain = audio.createGain();
    gain.gain.value = 0.035;
    const fundamental = audio.createOscillator();
    fundamental.type = "sine";
    fundamental.frequency.value = 146.8;
    const fifth = audio.createOscillator();
    fifth.type = "sine";
    fifth.frequency.value = 220;
    const fifthGain = audio.createGain();
    fifthGain.gain.value = 0.4;
    fundamental.connect(gain);
    fifth.connect(fifthGain);
    fifthGain.connect(gain);
    gain.connect(dest);
    fundamental.start();
    fifth.start();
    tones.push(fundamental, fifth);
    for (const track of dest.stream.getAudioTracks()) stream.addTrack(track);
  } catch {
    audio = null;
  }

  const recorder = new MediaRecorder(stream, { mimeType: type, videoBitsPerSecond: 4_500_000 });
  const chunks: Blob[] = [];
  recorder.ondataavailable = (event) => {
    if (event.data.size) chunks.push(event.data);
  };

  const done = new Promise<Blob>((resolve, reject) => {
    recorder.onerror = () => reject(new Error("Recording failed."));
    recorder.onstop = () => resolve(new Blob(chunks, { type: recorder.mimeType || type }));
  });

  const started = performance.now();
  recorder.start();

  await new Promise<void>((resolve) => {
    const frame = (now: number) => {
      const t = Math.min(1, (now - started) / (SECONDS * 1000));
      const turn = startTurn + t * TAU * 0.85;
      const pose = poseFrom(turn, arrangement);
      drawSweep(ctx, view, pose, images, Math.sin(t * Math.PI) * 0.45);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      fit(ctx, arrangement.label, WIDTH - 80, 42, "520", "Fraunces, Palatino, serif");
      ctx.fillStyle = "#f3ecdf";
      ctx.fillText(arrangement.label, WIDTH / 2, HEIGHT - 132);
      ctx.font = "500 16px Outfit, sans-serif";
      ctx.fillStyle = "#d7a15e";
      ctx.fillText(arrangement.credit.toUpperCase(), WIDTH / 2, HEIGHT - 86);
      if (t < 1) requestAnimationFrame(frame);
      else resolve();
    };
    requestAnimationFrame(frame);
  });

  await new Promise((resolve) => setTimeout(resolve, 120));
  if (recorder.state !== "inactive") recorder.stop();
  const blob = await done;
  for (const tone of tones) tone.stop();
  void audio?.close();
  for (const track of stream.getTracks()) track.stop();
  return blob;
}

export function downloadShort(blob: Blob, photo: string) {
  const ext = blob.type.includes("mp4") ? "mp4" : "webm";
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `kaleido-${photo}-short.${ext}`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
