# menu/player_tag_set (1)

## player_tag_set — event-95d9d5ad4ad622859a

[code] [src/frontend/components/context/contextMenus.ts:63](../../../../../src/frontend/components/context/contextMenus.ts#L63); player_tag_set. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:641 tagId === "create"; src/frontend/components/context/menuClick.ts:655 a&#91;id&#93;.

Calls: src/frontend/components/context/menuClick.ts:639 player_tag_set (depth 0); src/frontend/components/helpers/tags.ts:52 getMenuTagId (depth 1); src/frontend/components/context/menuClick.ts:636 manage_player_tags (depth 1); src/frontend/components/helpers/tags.ts:20 openTagManager (depth 2); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 3); src/frontend/components/helpers/tags.ts:26 toggleSelectionTags (depth 1); src/frontend/components/helpers/tags.ts:27 <callback> (depth 2); src/frontend/components/helpers/tags.ts:61 getUpdatedTags (depth 3); src/frontend/components/context/menuClick.ts:652 getTags (depth 1); src/frontend/components/context/menuClick.ts:653 applyTags (depth 1); src/frontend/components/context/menuClick.ts:654 <callback> (depth 2).

Effects: src/frontend/components/helpers/tags.ts:22 store-write src/frontend/stores.ts#popupData ; src/frontend/components/helpers/tags.ts:23 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck ; src/frontend/components/context/menuClick.ts:654 store-write src/frontend/stores.ts#playerVideos .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
