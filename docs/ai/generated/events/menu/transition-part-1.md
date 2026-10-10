# menu/transition (1)

## transition — event-bc0c0763498e972b18

[code] [src/frontend/components/context/contextMenus.ts:160](../../../../../src/frontend/components/context/contextMenus.ts#L160); transition. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:1516 transition (depth 0).

Effects: src/frontend/components/context/menuClick.ts:1518 store-write src/frontend/stores.ts#popupData ; src/frontend/components/context/menuClick.ts:1519 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: edit_box src/frontend/components/context/contextMenus.ts:418. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:160 transition: () => { if ($activeShow && $showsCache&#91;$activeShow.id&#93; && $activeEdit.items.length) { let ref = getLayoutRef() let slideId = ref&#91;$activeEdit.slide \|\| 0&#93;?.id let item =. Appears: src/frontend/components/edit/editbox/Editbox.svelte:242.
