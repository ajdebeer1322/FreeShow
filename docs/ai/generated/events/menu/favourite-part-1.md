# menu/favourite (1)

## favourite — event-097275d478a9f9675c

[code] [src/frontend/components/context/contextMenus.ts:192](../../../../../src/frontend/components/context/contextMenus.ts#L192); favourite. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1747 !obj.sel; src/frontend/components/context/menuClick.ts:1749 obj.sel.id === "category_scripture"; src/frontend/components/context/menuClick.ts:1764 !a&#91;path&#93;; src/frontend/components/context/menuClick.ts:1765 obj.sel!.id === "audio".

Calls: src/frontend/components/context/menuClick.ts:1746 favourite (depth 0); src/frontend/components/context/menuClick.ts:1751 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1752 <callback> (depth 2); src/frontend/components/context/menuClick.ts:1761 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1762 <callback> (depth 2).

Effects: src/frontend/components/context/menuClick.ts:1751 store-write src/frontend/stores.ts#scriptures ; src/frontend/components/context/menuClick.ts:1761 store-write src/frontend/stores.ts#media .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: category_scripture_button src/frontend/components/context/contextMenus.ts:281; media_card src/frontend/components/context/contextMenus.ts:307; audio_button src/frontend/components/context/contextMenus.ts:324. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:241 favourite: () => { if ($selected.id?.includes("category_scripture")) { let id = $selected.data&#91;0&#93; enabled = !!$scriptures&#91;id&#93;?.favorite } else { let path = $selected.data&#91;0&#93;?.path. Appears: src/frontend/components/drawer/media/MediaCard.svelte:208.
