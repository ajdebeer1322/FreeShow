# menu/use_as_archive (1)

## use_as_archive — event-248b8a79b02dab0623

[code] [src/frontend/components/context/contextMenus.ts:83](../../../../../src/frontend/components/context/contextMenus.ts#L83); use_as_archive. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:875 !categoryStores&#91;obj.sel?.id \|\| ""&#93;.

Calls: src/frontend/components/context/menuClick.ts:868 use_as_archive (depth 0); src/frontend/components/context/menuClick.ts:870 category_shows (depth 1); src/frontend/components/context/menuClick.ts:871 category_overlays (depth 1); src/frontend/components/context/menuClick.ts:872 category_templates (depth 1); src/frontend/components/context/menuClick.ts:878 toggleArchive (depth 1); src/frontend/components/context/menuClick.ts:879 <callback> (depth 2).

Effects: src/frontend/components/context/menuClick.ts:870 store-write src/frontend/stores.ts#categories ; src/frontend/components/context/menuClick.ts:871 store-write src/frontend/stores.ts#overlayCategories ; src/frontend/components/context/menuClick.ts:872 store-write src/frontend/stores.ts#templateCategories .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
