# menu/effects_library_add (1)

## effects_library_add — event-ceae2c5067f212e7b9

[code] [src/frontend/components/context/contextMenus.ts:193](../../../../../src/frontend/components/context/contextMenus.ts#L193); effects_library_add. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1772 !obj.sel; src/frontend/components/context/menuClick.ts:1782 existing; src/frontend/components/context/menuClick.ts:1783 index < 0; src/frontend/components/context/menuClick.ts:1788 index < 0.

Calls: src/frontend/components/context/menuClick.ts:1771 effects_library_add (depth 0); src/frontend/components/context/menuClick.ts:1775 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1777 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1778 <callback> (depth 2); src/frontend/components/context/menuClick.ts:1781 <callback> (depth 3); src/frontend/components/helpers/media.ts:26 removeExtension (depth 3); src/frontend/components/helpers/media.ts:46 getFileName (depth 3).

Effects: src/frontend/components/context/menuClick.ts:1777 store-write src/frontend/stores.ts#effectsLibrary .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: audio_button src/frontend/components/context/contextMenus.ts:324. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:250 effects_library_add: () => { let path = $selected.data&#91;0&#93;?.path \|\| $selected.data&#91;0&#93;?.id if (path) { const duration = AudioPlayer.getDurationSync(path) const isEffect = AudioPlayer. Appears: no literal appearance indexed; mounting may be dynamic.
