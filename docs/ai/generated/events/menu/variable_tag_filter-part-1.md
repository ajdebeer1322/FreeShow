# menu/variable_tag_filter (1)

## variable_tag_filter — event-2bc0571f686d965d4c

[code] [src/frontend/components/context/contextMenus.ts:70](../../../../../src/frontend/components/context/contextMenus.ts#L70); variable_tag_filter. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:717 variable_tag_filter (depth 0); src/frontend/components/helpers/tags.ts:33 toggleTagFilter (depth 1); src/frontend/components/helpers/tags.ts:52 getMenuTagId (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
