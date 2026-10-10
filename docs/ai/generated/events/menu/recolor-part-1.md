# menu/recolor (1)

## recolor — event-cc9d06d18abc75be56

[code] [src/frontend/components/context/contextMenus.ts:147](../../../../../src/frontend/components/context/contextMenus.ts#L147); recolor. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:351 obj.contextElem?.classList?.contains("#audio_channel") \|\| obj.contextElem?.classList?.contains("#audio_channel_main"); src/frontend/components/context/menuClick.ts:353 obj.contextElem?.classList?.contains("#calendar_item").

Calls: src/frontend/components/context/menuClick.ts:350 recolor (depth 0); src/frontend/components/context/menuClick.ts:355 <callback> (depth 1).

Effects: src/frontend/components/context/menuClick.ts:352 store-write src/frontend/stores.ts#selected ; src/frontend/components/context/menuClick.ts:356 store-write src/frontend/stores.ts#selected ; src/frontend/components/context/menuClick.ts:360 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
