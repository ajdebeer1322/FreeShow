# menu/action_tag_set (1)

## action_tag_set — event-1ac368d8827a29ee26

[code] [src/frontend/components/context/contextMenus.ts:66](../../../../../src/frontend/components/context/contextMenus.ts#L66); action_tag_set. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:669 tagId === "create"; src/frontend/components/context/menuClick.ts:683 a&#91;id&#93;.

Calls: src/frontend/components/context/menuClick.ts:667 action_tag_set (depth 0); src/frontend/components/helpers/tags.ts:52 getMenuTagId (depth 1); src/frontend/components/context/menuClick.ts:664 manage_action_tags (depth 1); src/frontend/components/helpers/tags.ts:20 openTagManager (depth 2); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 3); src/frontend/components/helpers/tags.ts:26 toggleSelectionTags (depth 1); src/frontend/components/helpers/tags.ts:27 <callback> (depth 2); src/frontend/components/helpers/tags.ts:61 getUpdatedTags (depth 3); src/frontend/components/context/menuClick.ts:680 getTags (depth 1); src/frontend/components/context/menuClick.ts:681 applyTags (depth 1); src/frontend/components/context/menuClick.ts:682 <callback> (depth 2).

Effects: src/frontend/components/helpers/tags.ts:22 store-write src/frontend/stores.ts#popupData ; src/frontend/components/helpers/tags.ts:23 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck ; src/frontend/components/context/menuClick.ts:682 store-write src/frontend/stores.ts#actions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: action src/frontend/components/context/contextMenus.ts:333. Loaders: action_tag_set src/frontend/components/context/loadItems.ts:64.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: src/frontend/components/show/tools/Media.svelte:358.
