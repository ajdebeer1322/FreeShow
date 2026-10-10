# menu/mark_played (1)

## mark_played — event-2098264982bceb3a54

[code] [src/frontend/components/context/contextMenus.ts:107](../../../../../src/frontend/components/context/contextMenus.ts#L107); mark_played. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:1182 mark_played (depth 0); src/frontend/components/context/menuClick.ts:1183 <callback> (depth 1); src/frontend/converters/project.ts:237 markItemsAsPlayed (depth 1); src/frontend/converters/project.ts:247 <callback> (depth 2); src/frontend/converters/project.ts:252 <callback> (depth 3).

Effects: src/frontend/converters/project.ts:247 store-write src/frontend/stores.ts#projects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: project_media src/frontend/components/context/contextMenus.ts:350; project_audio src/frontend/components/context/contextMenus.ts:351; project_show src/frontend/components/context/contextMenus.ts:355; project_pdf src/frontend/components/context/contextMenus.ts:362; project_ppt src/frontend/components/context/contextMenus.ts:363. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:344 mark_played: () => { const projectId = $activeProject const index = $selected.data&#91;0&#93;?.index if (!projectId \|\| index === undefined) return const show = $projects&#91;projectId&#93;?.shows?. Appears: no literal appearance indexed; mounting may be dynamic.
