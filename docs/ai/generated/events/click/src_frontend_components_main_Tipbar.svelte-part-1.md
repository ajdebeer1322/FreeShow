# click/src_frontend_components_main_Tipbar.svelte (1)

## click — event-5aff4307e7974f44de

[code] [src/frontend/components/main/Tipbar.svelte:66](../../../../../src/frontend/components/main/Tipbar.svelte#L66); donate. resolved-within-bound.

Conditions: src/frontend/components/main/Tipbar.svelte:56 !isClosed && !$isDev; src/frontend/components/main/Tipbar.svelte:65 activeMessage === "donate".

Calls: src/frontend/components/main/Tipbar.svelte:48 donate (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1); src/frontend/components/main/Tipbar.svelte:39 interact (depth 1); src/frontend/components/main/Tipbar.svelte:42 <callback> (depth 2).

Effects: src/frontend/components/main/Tipbar.svelte:49 ipc sendMain(Main.URL, "https://churchapps.org/partner#give") ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/main/Tipbar.svelte:42 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-68ed5fd36e9eddbc02

[code] [src/frontend/components/main/Tipbar.svelte:74](../../../../../src/frontend/components/main/Tipbar.svelte#L74); close. resolved-within-bound.

Conditions: src/frontend/components/main/Tipbar.svelte:56 !isClosed && !$isDev.

Calls: src/frontend/components/main/Tipbar.svelte:30 close (depth 0); src/frontend/components/main/Tipbar.svelte:33 <callback> (depth 1).

Effects: src/frontend/components/main/Tipbar.svelte:33 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
