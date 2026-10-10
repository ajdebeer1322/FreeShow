# menu/slide_transition (1)

## slide_transition — event-0b111f4b52c7a6ae9e

[code] [src/frontend/components/context/contextMenus.ts:141](../../../../../src/frontend/components/context/contextMenus.ts#L141); slide_transition. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1224 obj.sel?.id !== "slide".

Calls: src/frontend/components/context/menuClick.ts:1223 slide_transition (depth 0).

Effects: src/frontend/components/context/menuClick.ts:1226 store-write src/frontend/stores.ts#popupData ; src/frontend/components/context/menuClick.ts:1227 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: slide src/frontend/components/context/contextMenus.ts:384; slideChild src/frontend/components/context/contextMenus.ts:386. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:154 slide_transition: () => { if ($selected.id === "slide" && $activeShow) { let ref = getLayoutRef() enabled = !!(ref&#91;$selected.data&#91;0&#93;?.index&#93;?.data?.transition \|\| false) } }. Appears: src/server/remote/components/show/ShowSlide.svelte:63.
