# menu/media_view (1)

## media_view — event-809571cb97bfb68384

[code] [src/frontend/components/context/contextMenus.ts:114](../../../../../src/frontend/components/context/contextMenus.ts#L114); media_view. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:293 media_view (depth 0); src/frontend/components/context/menuClick.ts:294 <callback> (depth 1).

Effects: src/frontend/components/context/menuClick.ts:294 store-write src/frontend/stores.ts#mediaOptions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
