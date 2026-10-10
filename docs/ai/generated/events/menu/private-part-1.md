# menu/private (1)

## private — event-83860817adcffe4f3f

[code] [src/frontend/components/context/contextMenus.ts:103](../../../../../src/frontend/components/context/contextMenus.ts#L103); private. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1135 !obj.sel; src/frontend/components/context/menuClick.ts:1139 !a&#91;b.id&#93;; src/frontend/components/context/menuClick.ts:1146 !a&#91;b.id&#93;; src/frontend/components/context/menuClick.ts:1147 a&#91;b.id&#93;.private.

Calls: src/frontend/components/context/menuClick.ts:1134 private (depth 0); src/frontend/components/context/menuClick.ts:1137 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1138 <callback> (depth 2); src/frontend/components/context/menuClick.ts:1144 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1145 <callback> (depth 2).

Effects: src/frontend/components/context/menuClick.ts:1137 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/context/menuClick.ts:1144 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
