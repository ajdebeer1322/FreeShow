# menu/display_tags (1)

## display_tags — event-00f185d082bfee12a1

[code] [src/frontend/components/context/contextMenus.ts:56](../../../../../src/frontend/components/context/contextMenus.ts#L56); display_tags. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:752 display_tags (depth 0); src/frontend/components/context/menuClick.ts:753 <callback> (depth 1).

Effects: src/frontend/components/context/menuClick.ts:753 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: drawer_show src/frontend/components/context/contextMenus.ts:286. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:147 display_tags: () => { enabled = $special.displayTags hide = !Object.keys($globalTags).length }. Appears: src/frontend/components/drawer/pages/Shows.svelte:245.
