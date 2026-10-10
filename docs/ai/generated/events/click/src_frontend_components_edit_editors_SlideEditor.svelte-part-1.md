# click/src_frontend_components_edit_editors_SlideEditor.svelte (1)

## click — event-0171347780367b2a13

[code] [src/frontend/components/edit/editors/SlideEditor.svelte:405](../../../../../src/frontend/components/edit/editors/SlideEditor.svelte#L405); () => ($slideNotesActive = false). resolved-within-bound.

Conditions: src/frontend/components/edit/editors/SlideEditor.svelte:399 $slideNotesActive.

Calls: no function target resolved.

Effects: src/frontend/components/edit/editors/SlideEditor.svelte:405 store-write src/frontend/stores.ts#slideNotesActive .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-4a52d521556948e1e0

[code] [src/frontend/components/edit/editors/SlideEditor.svelte:410](../../../../../src/frontend/components/edit/editors/SlideEditor.svelte#L410); () => slideNotesActive.set(true). resolved-within-bound.

Conditions: src/frontend/components/edit/editors/SlideEditor.svelte:399 $slideNotesActive; src/frontend/components/edit/editors/SlideEditor.svelte:409 notesVisible.

Calls: no function target resolved.

Effects: src/frontend/components/edit/editors/SlideEditor.svelte:410 store-write src/frontend/stores.ts#slideNotesActive .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-dc3ffbc9f6d949b060

[code] [src/frontend/components/edit/editors/SlideEditor.svelte:419](../../../../../src/frontend/components/edit/editors/SlideEditor.svelte#L419); transposeUp. partial.

Conditions: src/frontend/components/edit/editors/SlideEditor.svelte:416 !$focusMode && !isLocked && !$slideNotesActive && !$special.slideTimelineActive; src/frontend/components/edit/editors/SlideEditor.svelte:418 $editMode === "chords".

Calls: src/frontend/components/edit/editors/SlideEditor.svelte:244 transposeUp (depth 0); src/frontend/components/show/getTextEditor.ts:8 getPlainEditorText (depth 1); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 5); src/frontend/components/edit/scripts/textStyle.ts:306 <callback> (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 5); src/frontend/components/helpers/shows.ts:373 layouts (depth 3).

Effects: src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:688 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:708 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 109. Full edges/effects/conditions in JSON.

## click — event-8f6d484506a661ee06

[code] [src/frontend/components/edit/editors/SlideEditor.svelte:422](../../../../../src/frontend/components/edit/editors/SlideEditor.svelte#L422); transposeDown. partial.

Conditions: src/frontend/components/edit/editors/SlideEditor.svelte:416 !$focusMode && !isLocked && !$slideNotesActive && !$special.slideTimelineActive; src/frontend/components/edit/editors/SlideEditor.svelte:418 $editMode === "chords".

Calls: src/frontend/components/edit/editors/SlideEditor.svelte:248 transposeDown (depth 0); src/frontend/components/show/getTextEditor.ts:8 getPlainEditorText (depth 1); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 5); src/frontend/components/edit/scripts/textStyle.ts:306 <callback> (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 5); src/frontend/components/helpers/shows.ts:373 layouts (depth 3).

Effects: src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:688 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:708 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 109. Full edges/effects/conditions in JSON.

## click — event-69e820c60681a0c0cf

[code] [src/frontend/components/edit/editors/SlideEditor.svelte:428](../../../../../src/frontend/components/edit/editors/SlideEditor.svelte#L428); setDefaultChordsAction. resolved-within-bound.

Conditions: src/frontend/components/edit/editors/SlideEditor.svelte:416 !$focusMode && !isLocked && !$slideNotesActive && !$special.slideTimelineActive; src/frontend/components/edit/editors/SlideEditor.svelte:418 $editMode === "chords"; src/frontend/components/edit/editors/SlideEditor.svelte:235 chordsAction === "".

Calls: src/frontend/components/edit/editors/SlideEditor.svelte:234 setDefaultChordsAction (depth 0).

Effects: src/frontend/components/edit/editors/SlideEditor.svelte:236 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/edit/editors/SlideEditor.svelte:237 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-886453f981abd624ba

[code] [src/frontend/components/edit/editors/SlideEditor.svelte:433](../../../../../src/frontend/components/edit/editors/SlideEditor.svelte#L433); () => (chordsAction = chord). resolved-within-bound.

Conditions: src/frontend/components/edit/editors/SlideEditor.svelte:416 !$focusMode && !isLocked && !$slideNotesActive && !$special.slideTimelineActive; src/frontend/components/edit/editors/SlideEditor.svelte:418 $editMode === "chords".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
