# menu/view_simple (1)

## view_simple — event-c5c69e2cdbfafbe853

[code] [src/frontend/components/context/contextMenus.ts:136](../../../../../src/frontend/components/context/contextMenus.ts#L136); view_simple. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:1209 view_simple (depth 0).

Effects: src/frontend/components/context/menuClick.ts:1210 store-write src/frontend/stores.ts#slidesOptions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
