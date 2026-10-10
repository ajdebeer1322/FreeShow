# menu/template_actions (1)

## template_actions — event-bc0973ad5edf7a39eb

[code] [src/frontend/components/context/contextMenus.ts:213](../../../../../src/frontend/components/context/contextMenus.ts#L213); template_actions. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1591 !template.

Calls: src/frontend/components/context/menuClick.ts:1588 template_actions (depth 0); src/frontend/components/context/menuClick.ts:1595 <callback> (depth 1).

Effects: src/frontend/components/context/menuClick.ts:1596 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/context/menuClick.ts:1595 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: template_card src/frontend/components/context/contextMenus.ts:317. Loaders: none.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: no literal appearance indexed; mounting may be dynamic.
