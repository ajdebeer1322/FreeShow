# menu/tag_filter (1)

## tag_filter — event-9c557b8d216b3be33b

[code] [src/frontend/components/context/contextMenus.ts:58](../../../../../src/frontend/components/context/contextMenus.ts#L58); tag_filter. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:604 tag_filter (depth 0); src/frontend/components/helpers/tags.ts:33 toggleTagFilter (depth 1); src/frontend/components/helpers/tags.ts:52 getMenuTagId (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: drawer_show src/frontend/components/context/contextMenus.ts:286; drawer_show_button src/frontend/components/context/contextMenus.ts:290; drawer_show_button_readonly src/frontend/components/context/contextMenus.ts:291. Loaders: tag_filter src/frontend/components/context/loadItems.ts:38.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: src/frontend/components/drawer/pages/Shows.svelte:245; src/frontend/components/drawer/pages/Shows.svelte:275.
