import { createServerFn } from "@tanstack/react-start";

async function total() {
  const { getSql } = await import("@/lib/db");
  const sql = await getSql();
  const rows = await sql<{ total: number }>`select total from visits where id = 1`;
  return Number(rows[0]?.total ?? 0);
}

export const readVisits = createServerFn({ method: "GET" }).handler(async () => {
  return { total: await total() };
});

export const bumpVisit = createServerFn({ method: "POST" }).handler(async () => {
  const { getSql } = await import("@/lib/db");
  const sql = await getSql();
  const rows = await sql<{ total: number }>`
    insert into visits (id, total) values (1, 1)
    on conflict (id) do update set total = visits.total + 1
    returning total
  `;
  return { total: Number(rows[0]?.total ?? 0) };
});
