# menu/place_under_slide (1)

## place_under_slide — event-1df58921f509f5a83c

[code] [src/frontend/components/context/contextMenus.ts:205](../../../../../src/frontend/components/context/contextMenus.ts#L205); place_under_slide. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1892 obj.sel?.id === "effect"; src/frontend/components/context/menuClick.ts:1903 obj.sel?.id !== "overlay".

Calls: src/frontend/components/context/menuClick.ts:1891 place_under_slide (depth 0); src/frontend/components/context/menuClick.ts:1894 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1895 <callback> (depth 2); src/frontend/components/context/menuClick.ts:1906 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1907 <callback> (depth 2).

Effects: src/frontend/components/context/menuClick.ts:1894 store-write src/frontend/stores.ts#effects ; src/frontend/components/context/menuClick.ts:1906 store-write src/frontend/stores.ts#overlays .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: overlay_card src/frontend/components/context/contextMenus.ts:310; effect_card src/frontend/components/context/contextMenus.ts:320. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:327 place_under_slide: () => { let id = $selected.data&#91;0&#93; if ($overlays&#91;id&#93;?.placeUnderSlide \|\| $effects&#91;id&#93;?.placeUnderSlide) enabled = true }. Appears: no literal appearance indexed; mounting may be dynamic.
