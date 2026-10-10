# automatic/src_frontend_components_main_Popup.svelte (1)

## setTimeout — event-38f94d46ac27f7a882

[code] [src/frontend/components/main/Popup.svelte:31](../../../../../src/frontend/components/main/Popup.svelte#L31); () => { popupTimeout = null if (popupId !== $activePopup) updatePopup() }. resolved-within-bound.

Conditions: src/frontend/components/main/Popup.svelte:33 popupId !== $activePopup.

Calls: src/frontend/components/main/Popup.svelte:31 <callback> (depth 0); src/frontend/components/main/Popup.svelte:24 updatePopup (depth 1); src/frontend/utils/popup.ts:253 clearPopupSubmit (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
