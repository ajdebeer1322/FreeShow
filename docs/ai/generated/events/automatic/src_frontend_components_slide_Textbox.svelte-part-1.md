# automatic/src_frontend_components_slide_Textbox.svelte (1)

## setTimeout — event-b94896aa6805a87cf5

[code] [src/frontend/components/slide/Textbox.svelte:99](../../../../../src/frontend/components/slide/Textbox.svelte#L99); () => { if (hideUntilAutosized) { hideUntilAutosized = false // markAutoSizeReady() // Ensure state is consistent } }. resolved-within-bound.

Conditions: src/frontend/components/slide/Textbox.svelte:97 hideUntilAutosized; src/frontend/components/slide/Textbox.svelte:100 hideUntilAutosized.

Calls: src/frontend/components/slide/Textbox.svelte:99 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-b5c0ed4cfa456b55a7

[code] [src/frontend/components/slide/Textbox.svelte:116](../../../../../src/frontend/components/slide/Textbox.svelte#L116); () => { loaded = true }. resolved-within-bound.

Conditions: src/frontend/components/slide/Textbox.svelte:113 preview.

Calls: src/frontend/components/slide/Textbox.svelte:116 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-86a36178be43f15606

[code] [src/frontend/components/slide/Textbox.svelte:329](../../../../../src/frontend/components/slide/Textbox.svelte#L329); () => { debounceTimer = null calculateAutosize() }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/slide/Textbox.svelte:329 <callback> (depth 0); src/frontend/components/slide/Textbox.svelte:383 calculateAutosize (depth 1); src/frontend/components/slide/Textbox.svelte:613 markAutoSizeReady (depth 2); src/frontend/components/slide/Textbox.svelte:617 <callback> (depth 3); src/frontend/components/edit/scripts/textStyle.ts:310 getItemText (depth 2); src/frontend/components/slide/Textbox.svelte:550 buildAutoSizeCacheKey (depth 2); src/frontend/components/slide/Textbox.svelte:558 buildAutoSizeSignature (depth 2); src/frontend/components/helpers/style.ts:6 getStyles (depth 3); src/frontend/components/helpers/style.ts:15 <callback> (depth 4); src/frontend/components/helpers/style.ts:22 <callback> (depth 5); src/frontend/components/helpers/style.ts:49 removeText (depth 5); src/frontend/components/helpers/style.ts:37 getFilters (depth 5); src/frontend/components/helpers/style.ts:41 <callback> (depth 6); src/frontend/components/slide/autosizeCache.ts:8 readAutoSizeCache (depth 2); src/frontend/components/slide/Textbox.svelte:636 setItemAutoFontSize (depth 2); src/frontend/components/slide/Textbox.svelte:643 <callback> (depth 3).

Effects: src/frontend/components/slide/Textbox.svelte:643 store-write src/frontend/stores.ts#overlays ; src/frontend/components/slide/Textbox.svelte:651 store-write src/frontend/stores.ts#templates ; src/frontend/components/slide/Textbox.svelte:659 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/slide/Textbox.svelte:673 store-write src/frontend/stores.ts#overlays ; src/frontend/components/slide/Textbox.svelte:681 store-write src/frontend/stores.ts#templates ; src/frontend/components/slide/Textbox.svelte:689 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 9; depth cutoffs: 1. Full edges/effects/conditions in JSON.

## setInterval — event-436f0862c3425caa7d

[code] [src/frontend/components/slide/Textbox.svelte:740](../../../../../src/frontend/components/slide/Textbox.svelte#L740); () => updateTrigger++. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/slide/Textbox.svelte:740 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-ef31e3f71318d46caf

[code] [src/frontend/components/slide/Textbox.svelte:766](../../../../../src/frontend/components/slide/Textbox.svelte#L766); () => { hidden = true }. resolved-within-bound.

Conditions: src/frontend/components/slide/Textbox.svelte:763 displayDuration && clickRevealed.

Calls: src/frontend/components/slide/Textbox.svelte:766 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
