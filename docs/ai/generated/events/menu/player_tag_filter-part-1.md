# menu/player_tag_filter (1)

## player_tag_filter — event-3cbbca4acc2b2127cf

[code] [src/frontend/components/context/contextMenus.ts:64](../../../../../src/frontend/components/context/contextMenus.ts#L64); player_tag_filter. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:661 player_tag_filter (depth 0); src/frontend/components/helpers/tags.ts:33 toggleTagFilter (depth 1); src/frontend/components/helpers/tags.ts:52 getMenuTagId (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: player src/frontend/components/context/contextMenus.ts:322; player_button src/frontend/components/context/contextMenus.ts:323. Loaders: player_tag_filter src/frontend/components/context/loadItems.ts:59.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: src/frontend/components/drawer/media/Media.svelte:573; src/frontend/components/drawer/player/PlayerVideos.svelte:80.
