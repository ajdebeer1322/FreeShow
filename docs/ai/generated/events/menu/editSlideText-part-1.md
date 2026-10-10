# menu/editSlideText (1)

## editSlideText — event-b342c5f328092b5d29

[code] [src/frontend/components/context/contextMenus.ts:124](../../../../../src/frontend/components/context/contextMenus.ts#L124); editSlideText. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1305 obj.sel.id === "slide"; src/frontend/components/context/menuClick.ts:1307 !slide.

Calls: src/frontend/components/context/menuClick.ts:1304 editSlideText (depth 0); src/frontend/components/context/menuClick.ts:1310 <callback> (depth 1).

Effects: src/frontend/components/context/menuClick.ts:1308 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/context/menuClick.ts:1309 store-write src/frontend/stores.ts#activePage ; src/frontend/components/context/menuClick.ts:1310 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
