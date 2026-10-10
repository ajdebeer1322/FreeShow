# menu/type_background (1)

## type_background — event-80d0a73c3c9de0af48

[code] [src/frontend/components/context/contextMenus.ts:198](../../../../../src/frontend/components/context/contextMenus.ts#L198); type_background. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1826 !obj.sel; src/frontend/components/context/menuClick.ts:1830 !a&#91;folderId&#93;.

Calls: src/frontend/components/context/menuClick.ts:1825 type_background (depth 0); src/frontend/components/context/menuClick.ts:1828 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1829 <callback> (depth 2).

Effects: src/frontend/components/context/menuClick.ts:1829 store-write src/frontend/stores.ts#mediaFolders .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
