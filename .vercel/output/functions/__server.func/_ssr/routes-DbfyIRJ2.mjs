import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Film, i as RefreshCw, n as ThumbsUp, r as ThumbsDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DbfyIRJ2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Recognizable public-domain pictures.
* NASA files are US government work. The rest are paintings and photographs
* whose Wikimedia Commons license is public domain.
*/
var GALLERY = [
	{
		id: "moonwalk",
		label: "Moonwalk",
		credit: "NASA",
		src: "/gallery/moonwalk.jpg"
	},
	{
		id: "earthrise",
		label: "Earthrise",
		credit: "NASA",
		src: "/gallery/earthrise.jpg"
	},
	{
		id: "marble",
		label: "Blue Marble",
		credit: "NASA",
		src: "/gallery/marble.jpg"
	},
	{
		id: "pillars",
		label: "Pillars of Creation",
		credit: "NASA / ESA",
		src: "/gallery/pillars.jpg"
	},
	{
		id: "saturn",
		label: "Saturn",
		credit: "NASA / JPL",
		src: "/gallery/saturn.jpg"
	},
	{
		id: "mona-lisa",
		label: "Mona Lisa",
		credit: "Leonardo da Vinci",
		src: "/gallery/mona-lisa.jpg"
	},
	{
		id: "starry-night",
		label: "Starry Night",
		credit: "Vincent van Gogh",
		src: "/gallery/starry-night.jpg"
	},
	{
		id: "sunflowers",
		label: "Sunflowers",
		credit: "Vincent van Gogh",
		src: "/gallery/sunflowers.jpg"
	},
	{
		id: "cafe-terrace",
		label: "Café Terrace at Night",
		credit: "Vincent van Gogh",
		src: "/gallery/cafe-terrace.jpg"
	},
	{
		id: "bedroom",
		label: "The Bedroom",
		credit: "Vincent van Gogh",
		src: "/gallery/bedroom.jpg"
	},
	{
		id: "irises",
		label: "Irises",
		credit: "Vincent van Gogh",
		src: "/gallery/irises.jpg"
	},
	{
		id: "almond-blossom",
		label: "Almond Blossom",
		credit: "Vincent van Gogh",
		src: "/gallery/almond-blossom.jpg"
	},
	{
		id: "great-wave",
		label: "The Great Wave",
		credit: "Katsushika Hokusai",
		src: "/gallery/great-wave.jpg"
	},
	{
		id: "pearl-earring",
		label: "Girl with a Pearl Earring",
		credit: "Johannes Vermeer",
		src: "/gallery/pearl-earring.jpg"
	},
	{
		id: "milkmaid",
		label: "The Milkmaid",
		credit: "Johannes Vermeer",
		src: "/gallery/milkmaid.jpg"
	},
	{
		id: "astronomer",
		label: "The Astronomer",
		credit: "Johannes Vermeer",
		src: "/gallery/astronomer.jpg"
	},
	{
		id: "birth-of-venus",
		label: "Birth of Venus",
		credit: "Sandro Botticelli",
		src: "/gallery/birth-of-venus.jpg"
	},
	{
		id: "primavera",
		label: "Primavera",
		credit: "Sandro Botticelli",
		src: "/gallery/primavera.jpg"
	},
	{
		id: "creation-of-adam",
		label: "Creation of Adam",
		credit: "Michelangelo",
		src: "/gallery/creation-of-adam.jpg"
	},
	{
		id: "school-of-athens",
		label: "The School of Athens",
		credit: "Raphael",
		src: "/gallery/school-of-athens.jpg"
	},
	{
		id: "vitruvian",
		label: "Vitruvian Man",
		credit: "Leonardo da Vinci",
		src: "/gallery/vitruvian.jpg"
	},
	{
		id: "the-scream",
		label: "The Scream",
		credit: "Edvard Munch",
		src: "/gallery/the-scream.jpg"
	},
	{
		id: "the-kiss",
		label: "The Kiss",
		credit: "Gustav Klimt",
		src: "/gallery/the-kiss.jpg"
	},
	{
		id: "wanderer",
		label: "Wanderer above the Sea of Fog",
		credit: "Caspar David Friedrich",
		src: "/gallery/wanderer.jpg"
	},
	{
		id: "water-lilies",
		label: "Water Lilies",
		credit: "Claude Monet",
		src: "/gallery/water-lilies.jpg"
	},
	{
		id: "impression-sunrise",
		label: "Impression, Sunrise",
		credit: "Claude Monet",
		src: "/gallery/impression-sunrise.jpg"
	},
	{
		id: "parasol",
		label: "Woman with a Parasol",
		credit: "Claude Monet",
		src: "/gallery/parasol.jpg"
	},
	{
		id: "grande-jatte",
		label: "A Sunday on La Grande Jatte",
		credit: "Georges Seurat",
		src: "/gallery/grande-jatte.jpg"
	},
	{
		id: "boating-party",
		label: "Luncheon of the Boating Party",
		credit: "Pierre-Auguste Renoir",
		src: "/gallery/boating-party.jpg"
	},
	{
		id: "night-watch",
		label: "The Night Watch",
		credit: "Rembrandt",
		src: "/gallery/night-watch.jpg"
	},
	{
		id: "las-meninas",
		label: "Las Meninas",
		credit: "Diego Velázquez",
		src: "/gallery/las-meninas.jpg"
	},
	{
		id: "arnolfini",
		label: "Arnolfini Portrait",
		credit: "Jan van Eyck",
		src: "/gallery/arnolfini.jpg"
	},
	{
		id: "earthly-delights",
		label: "Garden of Earthly Delights",
		credit: "Hieronymus Bosch",
		src: "/gallery/earthly-delights.jpg"
	},
	{
		id: "babel",
		label: "The Tower of Babel",
		credit: "Pieter Bruegel the Elder",
		src: "/gallery/babel.jpg"
	},
	{
		id: "hunters",
		label: "Hunters in the Snow",
		credit: "Pieter Bruegel the Elder",
		src: "/gallery/hunters.jpg"
	},
	{
		id: "liberty",
		label: "Liberty Leading the People",
		credit: "Eugène Delacroix",
		src: "/gallery/liberty.jpg"
	},
	{
		id: "napoleon",
		label: "Napoleon Crossing the Alps",
		credit: "Jacques-Louis David",
		src: "/gallery/napoleon.jpg"
	},
	{
		id: "washington",
		label: "Washington Crossing the Delaware",
		credit: "Emanuel Leutze",
		src: "/gallery/washington.jpg"
	},
	{
		id: "temeraire",
		label: "The Fighting Temeraire",
		credit: "J. M. W. Turner",
		src: "/gallery/temeraire.jpg"
	},
	{
		id: "ophelia",
		label: "Ophelia",
		credit: "John Everett Millais",
		src: "/gallery/ophelia.jpg"
	},
	{
		id: "shalott",
		label: "The Lady of Shalott",
		credit: "John William Waterhouse",
		src: "/gallery/shalott.jpg"
	},
	{
		id: "the-swing",
		label: "The Swing",
		credit: "Jean-Honoré Fragonard",
		src: "/gallery/the-swing.jpg"
	},
	{
		id: "olympia",
		label: "Olympia",
		credit: "Édouard Manet",
		src: "/gallery/olympia.jpg"
	},
	{
		id: "gleaners",
		label: "The Gleaners",
		credit: "Jean-François Millet",
		src: "/gallery/gleaners.jpg"
	},
	{
		id: "moulin-rouge",
		label: "At the Moulin Rouge",
		credit: "Henri de Toulouse-Lautrec",
		src: "/gallery/moulin-rouge.jpg"
	},
	{
		id: "whistlers-mother",
		label: "Whistler's Mother",
		credit: "James McNeill Whistler",
		src: "/gallery/whistlers-mother.jpg"
	},
	{
		id: "american-gothic",
		label: "American Gothic",
		credit: "Grant Wood",
		src: "/gallery/american-gothic.jpg"
	},
	{
		id: "black-square",
		label: "Black Square",
		credit: "Kazimir Malevich",
		src: "/gallery/black-square.jpg"
	},
	{
		id: "migrant-mother",
		label: "Migrant Mother",
		credit: "Dorothea Lange",
		src: "/gallery/migrant-mother.jpg"
	},
	{
		id: "lincoln",
		label: "Abraham Lincoln",
		credit: "Alexander Gardner",
		src: "/gallery/lincoln.jpg"
	}
];
var KEY = "kaleido-votes-v1";
function keyOf(item) {
	return [
		item.photo,
		item.segments,
		item.fold,
		item.filter,
		Math.round(item.zoom * 100),
		Math.round(item.aimX * 100),
		Math.round(item.aimY * 100),
		item.hue
	].join("|");
}
function readAll() {
	if (typeof window === "undefined") return {};
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" ? parsed : {};
	} catch {
		return {};
	}
}
function writeAll(votes) {
	localStorage.setItem(KEY, JSON.stringify(votes));
}
function voteFor(item) {
	return readAll()[keyOf(item)]?.vote ?? null;
}
/** Save a vote, or clear it when the same thumb is pressed again. */
function toggleVote(item, vote) {
	const all = readAll();
	const key = keyOf(item);
	if (all[key]?.vote === vote) {
		delete all[key];
		writeAll(all);
		return null;
	}
	all[key] = {
		...item,
		vote,
		at: Date.now()
	};
	writeAll(all);
	return vote;
}
function readTaste() {
	const all = Object.values(readAll());
	const photoUp = /* @__PURE__ */ new Set();
	const photoDown = /* @__PURE__ */ new Set();
	const segUp = [];
	const foldUp = [];
	const blocked = /* @__PURE__ */ new Set();
	for (const record of all) if (record.vote === "up") {
		photoUp.add(record.photo);
		segUp.push(record.segments);
		foldUp.push(record.fold);
	} else {
		photoDown.add(record.photo);
		blocked.add(keyOf(record));
	}
	for (const id of photoUp) photoDown.delete(id);
	return {
		photoUp,
		photoDown,
		segUp,
		foldUp,
		blocked
	};
}
var TAU$1 = Math.PI * 2;
function clamp(v, lo, hi) {
	return Math.max(lo, Math.min(hi, v));
}
var SEGS = [
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	12,
	14,
	16
];
var FILTERS = [
	"none",
	"saturate(1.18)",
	"saturate(1.15) sepia(0.4)",
	"hue-rotate(24deg) saturate(1.12)",
	"hue-rotate(200deg) saturate(1.2)",
	"contrast(1.08) saturate(0.9)"
];
var OPENING = {
	photo: "moonwalk",
	label: "Moonwalk",
	credit: "NASA",
	segments: 8,
	spin: .35,
	aimX: .48,
	aimY: .36,
	zoom: 2.35,
	filter: "none",
	hue: 32,
	fold: "mirror"
};
function pickWeighted(items, weights) {
	const total = weights.reduce((sum, weight) => sum + weight, 0);
	if (total <= 0) return items[Math.floor(Math.random() * items.length)] ?? items[0];
	let cursor = Math.random() * total;
	for (let i = 0; i < items.length; i++) {
		cursor -= weights[i] ?? 0;
		if (cursor <= 0) return items[i];
	}
	return items[items.length - 1];
}
function rollArrangement(prev) {
	const taste = readTaste();
	const photos = GALLERY.filter((item) => item.id !== prev?.photo);
	const pool = photos.length ? photos : GALLERY;
	const weights = pool.map((item) => {
		if (taste.photoUp.has(item.id)) return 5;
		if (taste.photoDown.has(item.id)) return .22;
		return 1;
	});
	let photo = pickWeighted(pool, weights) ?? GALLERY[0];
	const segs = SEGS.filter((n) => n !== prev?.segments);
	const likedSegs = taste.segUp.filter((n) => n !== prev?.segments);
	const segments = likedSegs.length && Math.random() < .55 ? likedSegs[Math.floor(Math.random() * likedSegs.length)] ?? 8 : segs[Math.floor(Math.random() * segs.length)] ?? 8;
	const likedFolds = taste.foldUp.filter((fold) => fold === "mirror" || fold === "fan");
	const fold = likedFolds.length && Math.random() < .6 ? likedFolds[Math.floor(Math.random() * likedFolds.length)] : Math.random() < .72 ? "mirror" : "fan";
	const draft = () => ({
		photo: photo.id,
		label: photo.label,
		credit: photo.credit,
		segments,
		spin: Math.random() * TAU$1,
		aimX: .3 + Math.random() * .4,
		aimY: .28 + Math.random() * .44,
		zoom: 2.05 + Math.random() * .85,
		filter: FILTERS[Math.floor(Math.random() * FILTERS.length)] ?? "none",
		hue: Math.floor(Math.random() * 360),
		fold
	});
	let next = draft();
	for (let attempt = 0; attempt < 6 && taste.blocked.has(keyOf(next)); attempt++) {
		photo = pickWeighted(pool, weights) ?? photo;
		next = draft();
	}
	return next;
}
/** `turn` is radians of scroll. One viewport of scroll is about two-thirds of a turn. */
function poseFrom(turn, arrangement) {
	const orbit = .14;
	return {
		x: (turn % TAU$1 + TAU$1) % TAU$1 / TAU$1,
		chapter: arrangement.photo,
		segments: arrangement.segments,
		rotation: arrangement.spin + turn,
		lock: 0,
		ink: 0,
		inkHue: arrangement.hue,
		wash: `hsla(${arrangement.hue}, 42%, 46%, 0.16)`,
		photos: [{
			id: arrangement.photo,
			alpha: 1,
			filter: arrangement.filter,
			aimX: clamp(arrangement.aimX + Math.sin(turn * .55) * orbit, .06, .94),
			aimY: clamp(arrangement.aimY + Math.cos(turn * .42) * orbit, .06, .94)
		}],
		word: null,
		credit: null,
		reveal: 0,
		fold: arrangement.fold,
		zoom: arrangement.zoom
	};
}
function mirrorAngle(a, i, segments, rotation) {
	const sector = TAU$1 / segments;
	let ang = a % TAU$1;
	if (ang < 0) ang += TAU$1;
	const k = Math.floor(ang / sector);
	const local = ang - k * sector;
	const folded = k % 2 === 1 ? sector - local : local;
	return i * sector + (i % 2 === 1 ? sector - folded : folded) + rotation;
}
function paintRibbon(ctx, view, pose, which, alpha, width) {
	const n = 72;
	const pts = [];
	const spin = pose.x * 7.4 + which * 1.65;
	for (let i = 0; i <= n; i++) {
		const t = i / n;
		const rn = clamp(.05 + Math.sin(Math.PI * t) ** .92 * (.4 + which * .16), .04, .96);
		const a = spin + t * (1.15 + which * .48) + Math.sin(t * TAU$1 + which * 1.3) * .2;
		pts.push({
			rn,
			a
		});
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
			} else if (Math.hypot(x - px, y - py) > radius * .55) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
			px = x;
			py = y;
		}
	}
	ctx.strokeStyle = `hsla(${hue}, 78%, 70%, ${alpha * .22})`;
	ctx.lineWidth = width * 3.2;
	ctx.stroke();
	ctx.strokeStyle = `hsla(${hue}, 84%, 66%, ${alpha})`;
	ctx.lineWidth = width;
	ctx.stroke();
}
function paintShot(ctx, view, pose, shot, img) {
	if (!img.complete || img.naturalWidth < 1 || shot.alpha < .02) return;
	const { cx, cy, radius } = view;
	const sector = TAU$1 / pose.segments;
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
function paintWord(ctx, view, pose) {
	if (!pose.word || pose.reveal < .02) return;
	const { cx, cy, radius } = view;
	const letters = [...pose.word];
	const shown = pose.reveal * letters.length;
	ctx.save();
	ctx.font = `520 ${Math.max(16, radius * .11)}px Fraunces, Palatino, serif`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.lineJoin = "round";
	const spread = Math.min(.2, .72 / letters.length);
	const mid = Math.PI / 2;
	for (let i = 0; i < letters.length; i++) {
		const gain = clamp(shown - i, 0, 1);
		if (gain <= 0) continue;
		const ang = mid + (i - (letters.length - 1) / 2) * spread;
		const r = radius * .62;
		const x = cx + Math.cos(ang) * r;
		const y = cy + Math.sin(ang) * r;
		ctx.globalAlpha = gain;
		ctx.strokeStyle = "rgba(12,11,10,0.72)";
		ctx.lineWidth = 5;
		ctx.strokeText(letters[i], x, y);
		ctx.fillStyle = pose.lock > .65 ? "#f3ecdf" : "#d7a15e";
		ctx.fillText(letters[i], x, y);
	}
	if (pose.credit && pose.reveal > .72) {
		ctx.globalAlpha = clamp((pose.reveal - .72) / .28, 0, 1) * .8;
		ctx.font = `500 ${Math.max(10, radius * .045)}px Outfit, sans-serif`;
		ctx.fillStyle = "#f3ecdf";
		ctx.letterSpacing = "0.18em";
		const y = cy + radius * .8;
		ctx.strokeStyle = "rgba(12,11,10,0.7)";
		ctx.lineWidth = 3;
		ctx.strokeText(pose.credit, cx, y);
		ctx.fillText(pose.credit, cx, y);
		ctx.letterSpacing = "0px";
	}
	ctx.restore();
}
function drawSweep(ctx, view, pose, images, energy) {
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
		const wash = ctx.createRadialGradient(cx, cy, radius * .02, cx, cy, radius);
		wash.addColorStop(0, pose.wash);
		wash.addColorStop(.72, "rgba(12,11,10,0)");
		ctx.fillStyle = wash;
		ctx.beginPath();
		ctx.arc(cx, cy, radius, 0, TAU$1);
		ctx.fill();
	}
	ctx.save();
	ctx.beginPath();
	ctx.arc(cx, cy, Math.max(radius - .5, 1), 0, TAU$1);
	ctx.clip();
	ctx.imageSmoothingEnabled = true;
	ctx.imageSmoothingQuality = "high";
	for (const shot of pose.photos) {
		const img = images[shot.id];
		if (img) paintShot(ctx, view, pose, shot, img);
	}
	if (pose.ink > .02) {
		ctx.globalAlpha = 1;
		ctx.filter = "none";
		paintRibbon(ctx, view, pose, 0, pose.ink * .9, 3.4);
		paintRibbon(ctx, view, pose, 1, pose.ink * .55, 1.6);
		paintRibbon(ctx, view, pose, 2, pose.ink * .35, 1.05);
	}
	const photoAmp = pose.photos.reduce((sum, shot) => sum + shot.alpha, 0);
	if (pose.ink < .15 && photoAmp < .12) {
		ctx.globalAlpha = 1 - photoAmp - pose.ink;
		ctx.fillStyle = "#d7a15e";
		ctx.beginPath();
		ctx.arc(cx, cy, 2.4, 0, TAU$1);
		ctx.fill();
	}
	if (energy > .04) {
		ctx.globalAlpha = energy * .18;
		ctx.fillStyle = "#f3ecdf";
		ctx.beginPath();
		ctx.arc(cx, cy, radius * (.05 + energy * .22), 0, TAU$1);
		ctx.fill();
	}
	paintWord(ctx, view, pose);
	ctx.restore();
	ctx.globalAlpha = 1;
	ctx.filter = "none";
	ctx.lineWidth = 1;
	ctx.strokeStyle = "rgba(215,161,94,0.35)";
	const sector = TAU$1 / pose.segments;
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
	ctx.arc(cx, cy, radius, 0, TAU$1);
	ctx.stroke();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "rgba(215,161,94,0.28)";
	ctx.beginPath();
	ctx.arc(cx, cy, Math.max(radius - 8, 1), 0, TAU$1);
	ctx.stroke();
	const vignette = ctx.createRadialGradient(cx, cy, radius * .92, cx, cy, Math.max(w, h) * .72);
	vignette.addColorStop(0, "rgba(12,11,10,0)");
	vignette.addColorStop(1, "rgba(12,11,10,0.78)");
	ctx.fillStyle = vignette;
	ctx.fillRect(0, 0, w, h);
}
function createVoice() {
	let ctx = null;
	let master = null;
	let oscA = null;
	let oscB = null;
	let gainB = null;
	let filter = null;
	function unlock() {
		if (!ctx) {
			const Ctx = window.AudioContext;
			ctx = new Ctx();
			master = ctx.createGain();
			master.gain.value = 0;
			filter = ctx.createBiquadFilter();
			filter.type = "lowpass";
			filter.frequency.value = 700;
			filter.Q.value = .65;
			const gainA = ctx.createGain();
			gainB = ctx.createGain();
			gainA.gain.value = .8;
			gainB.gain.value = .12;
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
		if (ctx.state === "suspended") ctx.resume();
	}
	function set(x, energy, lock) {
		if (!ctx || !master || !oscA || !oscB || !gainB || !filter) return;
		const now = ctx.currentTime;
		const freq = 92.5 * 2 ** (clamp(x, 0, 1) * 2);
		oscA.frequency.setTargetAtTime(freq, now, .06);
		const ratio = lock > .55 ? 1.25 : 1.4983;
		oscB.frequency.setTargetAtTime(freq * ratio, now, .08);
		gainB.gain.setTargetAtTime(.12 + lock * .5, now, .08);
		filter.frequency.setTargetAtTime(380 + x * 1500 + energy * 2e3 + lock * 500, now, .05);
		master.gain.setTargetAtTime(.011 + x * .012 + energy * .03 + lock * .018, now, .06);
	}
	function blip(freq) {
		if (!ctx || !master) return;
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.type = "sine";
		osc.frequency.value = freq;
		const now = ctx.currentTime;
		gain.gain.setValueAtTime(1e-4, now);
		gain.gain.exponentialRampToValueAtTime(.045, now + .012);
		gain.gain.exponentialRampToValueAtTime(1e-4, now + .62);
		osc.connect(gain);
		gain.connect(master);
		osc.start(now);
		osc.stop(now + .64);
	}
	function close() {
		ctx?.close();
		ctx = null;
	}
	return {
		unlock,
		set,
		blip,
		close
	};
}
var PHOTO_SRC = Object.fromEntries(GALLERY.map((item) => [item.id, item.src]));
var TAU = Math.PI * 2;
var WIDTH = 720;
var HEIGHT = 1280;
var SECONDS = 8;
function mimeType() {
	const types = [
		"video/webm;codecs=vp9,opus",
		"video/webm;codecs=vp8,opus",
		"video/webm",
		"video/mp4"
	];
	if (typeof MediaRecorder === "undefined") return "";
	return types.find((type) => MediaRecorder.isTypeSupported(type)) ?? "";
}
function fit(ctx, text, max, size, weight, family) {
	let next = size;
	do {
		ctx.font = `${weight} ${next}px ${family}`;
		if (ctx.measureText(text).width <= max || next <= 18) break;
		next -= 2;
	} while (next > 18);
}
async function recordShort(arrangement, image, startTurn) {
	const type = mimeType();
	if (!type || typeof HTMLCanvasElement.prototype.captureStream !== "function") throw new Error("This browser can't record a video short.");
	const canvas = document.createElement("canvas");
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	const ctx = canvas.getContext("2d", { alpha: false });
	if (!ctx) throw new Error("This browser can't record a video short.");
	const view = {
		w: WIDTH,
		h: HEIGHT,
		dpr: 1,
		cx: WIDTH / 2,
		cy: HEIGHT * .42,
		radius: 300
	};
	const images = { [arrangement.photo]: image };
	const stream = canvas.captureStream(30);
	let audio = null;
	const tones = [];
	try {
		audio = new AudioContext();
		const dest = audio.createMediaStreamDestination();
		const gain = audio.createGain();
		gain.gain.value = .035;
		const fundamental = audio.createOscillator();
		fundamental.type = "sine";
		fundamental.frequency.value = 146.8;
		const fifth = audio.createOscillator();
		fifth.type = "sine";
		fifth.frequency.value = 220;
		const fifthGain = audio.createGain();
		fifthGain.gain.value = .4;
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
	const recorder = new MediaRecorder(stream, {
		mimeType: type,
		videoBitsPerSecond: 45e5
	});
	const chunks = [];
	recorder.ondataavailable = (event) => {
		if (event.data.size) chunks.push(event.data);
	};
	const done = new Promise((resolve, reject) => {
		recorder.onerror = () => reject(/* @__PURE__ */ new Error("Recording failed."));
		recorder.onstop = () => resolve(new Blob(chunks, { type: recorder.mimeType || type }));
	});
	const started = performance.now();
	recorder.start();
	await new Promise((resolve) => {
		const frame = (now) => {
			const t = Math.min(1, (now - started) / (SECONDS * 1e3));
			const pose = poseFrom(startTurn + t * TAU * .85, arrangement);
			drawSweep(ctx, view, pose, images, Math.sin(t * Math.PI) * .45);
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			fit(ctx, arrangement.label, 640, 42, "520", "Fraunces, Palatino, serif");
			ctx.fillStyle = "#f3ecdf";
			ctx.fillText(arrangement.label, WIDTH / 2, 1148);
			ctx.font = "500 16px Outfit, sans-serif";
			ctx.fillStyle = "#d7a15e";
			ctx.fillText(arrangement.credit.toUpperCase(), WIDTH / 2, 1194);
			if (t < 1) requestAnimationFrame(frame);
			else resolve();
		};
		requestAnimationFrame(frame);
	});
	await new Promise((resolve) => setTimeout(resolve, 120));
	if (recorder.state !== "inactive") recorder.stop();
	const blob = await done;
	for (const tone of tones) tone.stop();
	audio?.close();
	for (const track of stream.getTracks()) track.stop();
	return blob;
}
function downloadShort(blob, photo) {
	const ext = blob.type.includes("mp4") ? "mp4" : "webm";
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `kaleido-${photo}-short.${ext}`;
	link.click();
	setTimeout(() => URL.revokeObjectURL(url), 4e3);
}
var TURN_PER_VIEW = Math.PI * 2 * .65;
function KaleidoStage() {
	const canvasRef = (0, import_react.useRef)(null);
	const scrollerRef = (0, import_react.useRef)(null);
	const [arrangement, setArrangement] = (0, import_react.useState)(OPENING);
	const arrangementRef = (0, import_react.useRef)(arrangement);
	arrangementRef.current = arrangement;
	const voiceRef = (0, import_react.useRef)(null);
	const burstRef = (0, import_react.useRef)(0);
	const fadeRef = (0, import_react.useRef)(1);
	const ensureRef = (0, import_react.useRef)(() => void 0);
	const refreshToken = (0, import_react.useRef)(0);
	const turnRef = (0, import_react.useRef)(0);
	const [vote, setVote] = (0, import_react.useState)(null);
	const [recording, setRecording] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setVote(voteFor(arrangement));
	}, [arrangement]);
	function rate(next) {
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
			if (!img.complete || img.naturalWidth < 1) await new Promise((resolve, reject) => {
				img.addEventListener("load", () => resolve(), { once: true });
				img.addEventListener("error", () => reject(/* @__PURE__ */ new Error("Picture failed to load.")), { once: true });
			});
			downloadShort(await recordShort(current, img, turnRef.current), current.photo);
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
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const scroller = scrollerRef.current;
		if (!canvas || !scroller) return;
		const ctx = canvas.getContext("2d", { alpha: false });
		if (!ctx) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const images = {};
		const ensure = (id) => {
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
			if (top < max * .2 || top > max * .8) {
				const jump = max * .4;
				const dir = top < max * .2 ? 1 : -1;
				jumping = true;
				scroller.scrollTop = top + dir * jump;
				base -= dir * jump;
				jumping = false;
				top = scroller.scrollTop;
			}
			const viewH = Math.max(scroller.clientHeight, 1);
			targetTurn = (top + base) / viewH * TURN_PER_VIEW;
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
		const onWheel = (event) => {
			if (scroller.contains(event.target)) return;
			const dy = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaMode === 2 ? event.deltaY * scroller.clientHeight : event.deltaY;
			scroller.scrollTop += dy;
			event.preventDefault();
		};
		window.addEventListener("wheel", onWheel, { passive: false });
		const view = {
			w: 1,
			h: 1,
			dpr: 1,
			cx: 0,
			cy: 0,
			radius: 1
		};
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
			view.radius = Math.max(96, Math.min(w, h) * .5 - 36);
		};
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(canvas);
		let shown = 0;
		let prev = 0;
		let energy = 0;
		let raf = 0;
		let last = performance.now();
		const loop = (now) => {
			const dt = Math.min(.05, (now - last) / 1e3);
			last = now;
			if (reduce) shown = targetTurn;
			else shown += (targetTurn - shown) * (1 - Math.exp(-dt / .08));
			const spike = Math.min(1, Math.abs(shown - prev) / .05);
			prev = shown;
			energy = reduce ? burstRef.current : Math.max(spike, burstRef.current, energy * Math.exp(-dt / .16));
			burstRef.current *= Math.exp(-dt / .12);
			fadeRef.current += (1 - fadeRef.current) * (1 - Math.exp(-dt / .14));
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
			fold: () => arrangementRef.current.fold
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative h-dvh overflow-hidden bg-bg text-fg select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollerRef,
				"data-scroller": true,
				className: "turn-scroll absolute inset-0 overflow-y-auto overscroll-none",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[800vh]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "pointer-events-none absolute inset-0 h-full w-full",
				"aria-label": "Kaleidoscope. Scroll up or down to turn it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute top-4 right-4 z-10 flex flex-col items-end gap-2 sm:top-6 sm:right-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto flex max-w-[calc(100vw-2rem)] flex-wrap items-center justify-end gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: refresh,
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
									className: "size-4 text-accent",
									"aria-hidden": "true"
								}), "Refresh"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Like this picture and mirror arrangement",
								"aria-pressed": vote === "up",
								onClick: () => rate("up"),
								className: `inline-flex size-11 items-center justify-center rounded-full border border-border shadow-lg backdrop-blur-md ${vote === "up" ? "bg-accent text-accent-fg" : "bg-surface/90 text-fg"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, {
									className: "size-4",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Dislike this picture and mirror arrangement",
								"aria-pressed": vote === "down",
								onClick: () => rate("down"),
								className: `inline-flex size-11 items-center justify-center rounded-full border border-border shadow-lg backdrop-blur-md ${vote === "down" ? "bg-accent text-accent-fg" : "bg-surface/90 text-fg"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsDown, {
									className: "size-4",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => void exportShort(),
								disabled: recording,
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md disabled:opacity-60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, {
									className: "size-4 text-accent",
									"aria-hidden": "true"
								}), recording ? "Recording…" : "Short"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[0.7rem] tracking-[0.14em] text-muted uppercase",
						children: [arrangement.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-fg/45",
							children: [" · ", arrangement.credit]
						})]
					}),
					note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-64 text-right text-xs text-accent normal-case",
						children: note
					}) : null
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KaleidoStage, {});
}
//#endregion
export { Home as component };
