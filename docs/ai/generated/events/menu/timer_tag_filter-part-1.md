# menu/timer_tag_filter (1)

## timer_tag_filter — event-51571a75ee5ba62c6c

[code] [src/frontend/components/context/contextMenus.ts:73](../../../../../src/frontend/components/context/contextMenus.ts#L73); timer_tag_filter. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:745 timer_tag_filter (depth 0); src/frontend/components/helpers/tags.ts:33 toggleTagFilter (depth 1); src/frontend/components/helpers/tags.ts:52 getMenuTagId (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: timers src/frontend/components/context/contextMenus.ts:371; timers_readonly src/frontend/components/context/contextMenus.ts:372; global_timer src/frontend/components/context/contextMenus.ts:373; global_timer_readonly src/frontend/components/context/contextMenus.ts:374. Loaders: timer_tag_filter src/frontend/components/context/loadItems.ts:88.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: no literal appearance indexed; mounting may be dynamic.
