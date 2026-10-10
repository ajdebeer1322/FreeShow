# menu/open_reference (1)

## open_reference — event-19a82693ba72afdfdb

[code] [src/frontend/components/context/contextMenus.ts:215](../../../../../src/frontend/components/context/contextMenus.ts#L215); open_reference. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:987 obj.contextElem?.classList.contains("#scripture_search_result"); src/frontend/components/context/menuClick.ts:992 book && chapter && verse.

Calls: src/frontend/components/context/menuClick.ts:986 open_reference (depth 0).

Effects: src/frontend/components/context/menuClick.ts:992 store-write src/frontend/stores.ts#openScripture .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
