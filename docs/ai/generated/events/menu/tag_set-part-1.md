# menu/tag_set (1)

## tag_set — event-0af83024d6c3d9ac5f

[code] [src/frontend/components/context/contextMenus.ts:57](../../../../../src/frontend/components/context/contextMenus.ts#L57); tag_set. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:575 tagId === "create"; src/frontend/components/context/menuClick.ts:595 get(showsCache)&#91;id&#93;.

Calls: src/frontend/components/context/menuClick.ts:573 tag_set (depth 0); src/frontend/components/helpers/tags.ts:52 getMenuTagId (depth 1); src/frontend/components/context/menuClick.ts:570 manage_show_tags (depth 1); src/frontend/components/helpers/tags.ts:20 openTagManager (depth 2); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 3); src/frontend/components/helpers/tags.ts:26 toggleSelectionTags (depth 1); src/frontend/components/helpers/tags.ts:27 <callback> (depth 2); src/frontend/components/helpers/tags.ts:61 getUpdatedTags (depth 3); src/frontend/components/context/menuClick.ts:586 getTags (depth 1); src/frontend/components/context/menuClick.ts:587 applyTags (depth 1); src/frontend/components/context/menuClick.ts:591 <callback> (depth 2); src/frontend/components/context/menuClick.ts:596 <callback> (depth 2).

Effects: src/frontend/components/helpers/tags.ts:22 store-write src/frontend/stores.ts#popupData ; src/frontend/components/helpers/tags.ts:23 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck ; src/frontend/components/context/menuClick.ts:591 store-write src/frontend/stores.ts#shows ; src/frontend/components/context/menuClick.ts:596 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
