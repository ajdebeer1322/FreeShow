# menu/timer_tag_set (1)

## timer_tag_set — event-e8a6b1b24285e853b5

[code] [src/frontend/components/context/contextMenus.ts:72](../../../../../src/frontend/components/context/contextMenus.ts#L72); timer_tag_set. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:725 tagId === "create"; src/frontend/components/context/menuClick.ts:739 a&#91;id&#93;.

Calls: src/frontend/components/context/menuClick.ts:723 timer_tag_set (depth 0); src/frontend/components/helpers/tags.ts:52 getMenuTagId (depth 1); src/frontend/components/context/menuClick.ts:720 manage_timer_tags (depth 1); src/frontend/components/helpers/tags.ts:20 openTagManager (depth 2); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 3); src/frontend/components/helpers/tags.ts:26 toggleSelectionTags (depth 1); src/frontend/components/helpers/tags.ts:27 <callback> (depth 2); src/frontend/components/helpers/tags.ts:61 getUpdatedTags (depth 3); src/frontend/components/context/menuClick.ts:736 getTags (depth 1); src/frontend/components/context/menuClick.ts:737 applyTags (depth 1); src/frontend/components/context/menuClick.ts:738 <callback> (depth 2).

Effects: src/frontend/components/helpers/tags.ts:22 store-write src/frontend/stores.ts#popupData ; src/frontend/components/helpers/tags.ts:23 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck ; src/frontend/components/context/menuClick.ts:738 store-write src/frontend/stores.ts#timers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: global_timer src/frontend/components/context/contextMenus.ts:373. Loaders: timer_tag_set src/frontend/components/context/loadItems.ts:84.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: no literal appearance indexed; mounting may be dynamic.
