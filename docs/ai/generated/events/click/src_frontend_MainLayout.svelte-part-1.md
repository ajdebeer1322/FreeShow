# click/src_frontend_MainLayout.svelte (1)

## click — event-5330407a1e6a56e991

[code] [src/frontend/MainLayout.svelte:87](../../../../../src/frontend/MainLayout.svelte#L87); () => activePage.set("show"). resolved-within-bound.

Conditions: src/frontend/MainLayout.svelte:79 page === "show"; src/frontend/MainLayout.svelte:85 page === "edit"; src/frontend/MainLayout.svelte:87 isMessageEditor.

Calls: no function target resolved.

Effects: src/frontend/MainLayout.svelte:87 store-write src/frontend/stores.ts#activePage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-27728b99148fd09127

[code] [src/frontend/MainLayout.svelte:104](../../../../../src/frontend/MainLayout.svelte#L104); () => setPanelTab("messages"). resolved-within-bound.

Conditions: src/frontend/MainLayout.svelte:100 page === "show"; src/frontend/MainLayout.svelte:102 hasShowTools.

Calls: src/frontend/MainLayout.svelte:36 setPanelTab (depth 1); src/frontend/MainLayout.svelte:38 <callback> (depth 2).

Effects: src/frontend/MainLayout.svelte:37 store-write src/frontend/stores.ts#messagesPanelOpen ; src/frontend/MainLayout.svelte:38 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-872708a80f3f81a243

[code] [src/frontend/MainLayout.svelte:107](../../../../../src/frontend/MainLayout.svelte#L107); () => setPanelTab("show"). resolved-within-bound.

Conditions: src/frontend/MainLayout.svelte:100 page === "show"; src/frontend/MainLayout.svelte:102 hasShowTools.

Calls: src/frontend/MainLayout.svelte:36 setPanelTab (depth 1); src/frontend/MainLayout.svelte:38 <callback> (depth 2).

Effects: src/frontend/MainLayout.svelte:37 store-write src/frontend/stores.ts#messagesPanelOpen ; src/frontend/MainLayout.svelte:38 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
