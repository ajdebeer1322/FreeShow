# menu/type_default (1)

## type_default — event-8b634e69acb8225517

[code] [src/frontend/components/context/contextMenus.ts:197](../../../../../src/frontend/components/context/contextMenus.ts#L197); type_default. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1815 !obj.sel; src/frontend/components/context/menuClick.ts:1819 !a&#91;folderId&#93;.

Calls: src/frontend/components/context/menuClick.ts:1814 type_default (depth 0); src/frontend/components/context/menuClick.ts:1817 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1818 <callback> (depth 2).

Effects: src/frontend/components/context/menuClick.ts:1818 store-write src/frontend/stores.ts#mediaFolders .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: none indexed. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:375 type_default: () => { const folderId = $selected.data&#91;0&#93; if (!folderId) return const folder = $mediaFolders&#91;folderId&#93; enabled = !folder?.mediaType }. Appears: no literal appearance indexed; mounting may be dynamic.
