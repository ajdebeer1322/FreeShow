# menu/lock_to_output (1)

## lock_to_output — event-8ab178aa5c6cf74c74

[code] [src/frontend/components/context/contextMenus.ts:204](../../../../../src/frontend/components/context/contextMenus.ts#L204); lock_to_output. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1880 obj.sel?.id !== "overlay".

Calls: src/frontend/components/context/menuClick.ts:1879 lock_to_output (depth 0); src/frontend/components/context/menuClick.ts:1883 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1884 <callback> (depth 2).

Effects: src/frontend/components/context/menuClick.ts:1883 store-write src/frontend/stores.ts#overlays .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
