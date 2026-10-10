# menu/manage_media_tags (1)

## manage_media_tags — event-5b4ea47ede68d795d3

[code] [src/frontend/components/context/contextMenus.ts:59](../../../../../src/frontend/components/context/contextMenus.ts#L59); manage_media_tags. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:607 manage_media_tags (depth 0); src/frontend/components/helpers/tags.ts:20 openTagManager (depth 1); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 2).

Effects: src/frontend/components/helpers/tags.ts:22 store-write src/frontend/stores.ts#popupData ; src/frontend/components/helpers/tags.ts:23 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: media src/frontend/components/context/contextMenus.ts:306. Loaders: none.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:176; src/frontend/components/drawer/media/Media.svelte:595; src/frontend/components/drawer/media/Media.svelte:627.
