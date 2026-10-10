# menu/manage_player_tags (1)

## manage_player_tags — event-2cfd8d7e0d70abad05

[code] [src/frontend/components/context/contextMenus.ts:62](../../../../../src/frontend/components/context/contextMenus.ts#L62); manage_player_tags. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:636 manage_player_tags (depth 0); src/frontend/components/helpers/tags.ts:20 openTagManager (depth 1); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 2).

Effects: src/frontend/components/helpers/tags.ts:22 store-write src/frontend/stores.ts#popupData ; src/frontend/components/helpers/tags.ts:23 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
