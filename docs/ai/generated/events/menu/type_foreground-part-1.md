# menu/type_foreground (1)

## type_foreground — event-9854686f026c214225

[code] [src/frontend/components/context/contextMenus.ts:199](../../../../../src/frontend/components/context/contextMenus.ts#L199); type_foreground. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1837 !obj.sel; src/frontend/components/context/menuClick.ts:1841 !a&#91;folderId&#93;.

Calls: src/frontend/components/context/menuClick.ts:1836 type_foreground (depth 0); src/frontend/components/context/menuClick.ts:1839 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1840 <callback> (depth 2).

Effects: src/frontend/components/context/menuClick.ts:1840 store-write src/frontend/stores.ts#mediaFolders .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: none indexed. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:387 type_foreground: () => { const folderId = $selected.data&#91;0&#93; if (!folderId) return const folder = $mediaFolders&#91;folderId&#93; enabled = folder?.mediaType === "foreground" }. Appears: no literal appearance indexed; mounting may be dynamic.
