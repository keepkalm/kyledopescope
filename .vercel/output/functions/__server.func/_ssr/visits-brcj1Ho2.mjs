import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/visits-brcj1Ho2.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
async function total() {
	const { getSql } = await import("./db-3urGqaDp.mjs");
	const rows = await (await getSql())`select total from visits where id = 1`;
	return Number(rows[0]?.total ?? 0);
}
var readVisits_createServerFn_handler = createServerRpc({
	id: "cd3ff626e66cca7397b910b50364087d3133293c46c5d6cd436d2bd73b21a00c",
	name: "readVisits",
	filename: "src/lib/visits.ts"
}, (opts) => readVisits.__executeServer(opts));
var readVisits = createServerFn({ method: "GET" }).handler(readVisits_createServerFn_handler, async () => {
	return { total: await total() };
});
var bumpVisit_createServerFn_handler = createServerRpc({
	id: "584756e4b1e80c4dd7dcf026daa2011a0e80cf974dd5f87983efe3a91cb11e19",
	name: "bumpVisit",
	filename: "src/lib/visits.ts"
}, (opts) => bumpVisit.__executeServer(opts));
var bumpVisit = createServerFn({ method: "POST" }).handler(bumpVisit_createServerFn_handler, async () => {
	const { getSql } = await import("./db-3urGqaDp.mjs");
	const rows = await (await getSql())`
    insert into visits (id, total) values (1, 1)
    on conflict (id) do update set total = visits.total + 1
    returning total
  `;
	return { total: Number(rows[0]?.total ?? 0) };
});
//#endregion
export { bumpVisit_createServerFn_handler, readVisits_createServerFn_handler };
