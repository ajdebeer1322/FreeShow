# menu/display_duration (1)

## display_duration — event-26fc4dd21ce81cfe32

[code] [src/frontend/components/context/contextMenus.ts:206](../../../../../src/frontend/components/context/contextMenus.ts#L206); display_duration. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:1914 display_duration (depth 0).

Effects: src/frontend/components/context/menuClick.ts:1915 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
