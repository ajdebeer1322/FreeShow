# menu/selectAll (1)

## selectAll — event-019fc81992c35e0f5a

[code] [src/frontend/components/context/contextMenus.ts:125](../../../../../src/frontend/components/context/contextMenus.ts#L125); selectAll. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:1927 selectAll (depth 0); src/frontend/components/helpers/clipboard.ts:236 selectAll (depth 1); src/frontend/components/edit/scripts/textStyle.ts:353 setCaret (depth 2); src/frontend/components/edit/scripts/textStyle.ts:362 nodeTextLength (depth 3); src/frontend/components/edit/scripts/textStyle.ts:367 <callback> (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 13; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: edit src/frontend/components/context/contextMenus.ts:246; drawer_show src/frontend/components/context/contextMenus.ts:286; scripture_verse src/frontend/components/context/contextMenus.ts:335; shows src/frontend/components/context/contextMenus.ts:368; group src/frontend/components/context/contextMenus.ts:389. Loaders: none.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: src/frontend/components/drawer/bible/Scripture.svelte:1124; src/frontend/components/drawer/pages/Shows.svelte:245; src/frontend/components/show/tools/SlideGroups.svelte:83; src/server/remote/components/pages/ScriptureContent.svelte:663.
