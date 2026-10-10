# menu/unlink_pco (1)

## unlink_pco — event-586365d76d93c55d94

[code] [src/frontend/components/context/contextMenus.ts:104](../../../../../src/frontend/components/context/contextMenus.ts#L104); unlink_pco. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1154 !obj.sel; src/frontend/components/context/menuClick.ts:1158 !a&#91;b.id&#93;.

Calls: src/frontend/components/context/menuClick.ts:1153 unlink_pco (depth 0); src/frontend/components/context/menuClick.ts:1156 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1157 <callback> (depth 2); src/frontend/components/context/menuClick.ts:1163 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1164 <callback> (depth 2).

Effects: src/frontend/components/context/menuClick.ts:1156 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/context/menuClick.ts:1163 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
