# menu/dynamic_values (1)

## dynamic_values — event-af66574e150080652d

[code] [src/frontend/components/context/contextMenus.ts:161](../../../../../src/frontend/components/context/contextMenus.ts#L161); dynamic_values. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:2063 lineIndex < 0.

Calls: src/frontend/components/context/menuClick.ts:2060 dynamic_values (depth 0); src/frontend/components/edit/scripts/textStyle.ts:137 getSelectionRange (depth 1); src/frontend/components/edit/scripts/textStyle.ts:148 <callback> (depth 2); src/frontend/components/edit/scripts/textStyle.ts:150 lineLength (depth 2); src/frontend/components/edit/scripts/textStyle.ts:155 getBoundary (depth 2); src/frontend/components/edit/scripts/textStyle.ts:156 <callback> (depth 3); src/frontend/components/context/menuClick.ts:2062 <callback> (depth 1).

Effects: src/frontend/components/context/menuClick.ts:2066 store-write src/frontend/stores.ts#popupData ; src/frontend/components/context/menuClick.ts:2067 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.
