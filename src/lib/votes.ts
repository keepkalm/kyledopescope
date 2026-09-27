const KEY = "kaleido-votes-v1";

export type Vote = "up" | "down";

export type Rateable = {
  photo: string;
  label: string;
  credit: string;
  segments: number;
  fold: string;
  zoom: number;
  filter: string;
  aimX: number;
  aimY: number;
  hue: number;
  spin: number;
};

export type VoteRecord = Rateable & {
  vote: Vote;
  at: number;
};

export function keyOf(item: Rateable) {
  return [
    item.photo,
    item.segments,
    item.fold,
    item.filter,
    Math.round(item.zoom * 100),
    Math.round(item.aimX * 100),
    Math.round(item.aimY * 100),
    item.hue,
  ].join("|");
}

function readAll(): Record<string, VoteRecord> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, VoteRecord>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeAll(votes: Record<string, VoteRecord>) {
  localStorage.setItem(KEY, JSON.stringify(votes));
}

export function voteFor(item: Rateable): Vote | null {
  return readAll()[keyOf(item)]?.vote ?? null;
}

/** Save a vote, or clear it when the same thumb is pressed again. */
export function toggleVote(item: Rateable, vote: Vote): Vote | null {
  const all = readAll();
  const key = keyOf(item);
  if (all[key]?.vote === vote) {
    delete all[key];
    writeAll(all);
    return null;
  }
  all[key] = { ...item, vote, at: Date.now() };
  writeAll(all);
  return vote;
}

export function readTaste() {
  const all = Object.values(readAll());
  const photoUp = new Set<string>();
  const photoDown = new Set<string>();
  const segUp: number[] = [];
  const foldUp: string[] = [];
  const blocked = new Set<string>();
  for (const record of all) {
    if (record.vote === "up") {
      photoUp.add(record.photo);
      segUp.push(record.segments);
      foldUp.push(record.fold);
    } else {
      photoDown.add(record.photo);
      blocked.add(keyOf(record));
    }
  }
  for (const id of photoUp) photoDown.delete(id);
  return { photoUp, photoDown, segUp, foldUp, blocked };
}
