# menu/media_tag_filter (1)

## media_tag_filter — event-59fb30c1ace49a4bc1

[code] [src/frontend/components/context/contextMenus.ts:61](../../../../../src/frontend/components/context/contextMenus.ts#L61); media_tag_filter. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:633 media_tag_filter (depth 0); src/frontend/components/helpers/tags.ts:33 toggleTagFilter (depth 1); src/frontend/components/helpers/tags.ts:52 getMenuTagId (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: media src/frontend/components/context/contextMenus.ts:306; media_card src/frontend/components/context/contextMenus.ts:307. Loaders: media_tag_filter src/frontend/components/context/loadItems.ts:47.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:176; src/frontend/components/drawer/media/Media.svelte:595; src/frontend/components/drawer/media/Media.svelte:627; src/frontend/components/drawer/media/MediaCard.svelte:208.
