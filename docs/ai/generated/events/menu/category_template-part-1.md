# menu/category_template (1)

## category_template — event-ecb8f2d6e1324fc7ae

[code] [src/frontend/components/context/contextMenus.ts:81](../../../../../src/frontend/components/context/contextMenus.ts#L81); category_template. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:847 !id.

Calls: src/frontend/components/context/menuClick.ts:845 category_template (depth 0); src/frontend/components/context/menuClick.ts:851 trigger (depth 1); src/frontend/components/context/menuClick.ts:854 setCategoryTemplate (depth 2); src/frontend/components/context/menuClick.ts:855 <callback> (depth 3); src/frontend/components/context/menuClick.ts:854 setCategoryTemplate (depth 1); src/frontend/components/context/menuClick.ts:855 <callback> (depth 2).

Effects: src/frontend/components/context/menuClick.ts:852 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/context/menuClick.ts:851 store-write src/frontend/stores.ts#popupData ; src/frontend/components/context/menuClick.ts:855 store-write src/frontend/stores.ts#categories ; src/frontend/components/context/menuClick.ts:855 store-write src/frontend/stores.ts#categories .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: category_shows_button src/frontend/components/context/contextMenus.ts:275. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:365 category_template: () => { const categoryId = $selected.data&#91;0&#93; enabled = !!$categories&#91;categoryId&#93;?.template }. Appears: no literal appearance indexed; mounting may be dynamic.
