# menu/metadata_display (1)

## metadata_display — event-804b9847133df8ed44

[code] [src/frontend/components/context/contextMenus.ts:82](../../../../../src/frontend/components/context/contextMenus.ts#L82); metadata_display. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:862 obj.sel?.id === "category_shows".

Calls: src/frontend/components/context/menuClick.ts:861 metadata_display (depth 0).

Effects: src/frontend/components/context/menuClick.ts:864 store-write src/frontend/stores.ts#popupData ; src/frontend/components/context/menuClick.ts:865 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
