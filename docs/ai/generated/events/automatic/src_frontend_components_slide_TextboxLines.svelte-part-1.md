# automatic/src_frontend_components_slide_TextboxLines.svelte (1)

## setTimeout — event-8cdb54d9b024644a21

[code] [src/frontend/components/slide/TextboxLines.svelte:75](../../../../../src/frontend/components/slide/TextboxLines.svelte#L75); () => (shapeOffsetTop = calculateShapeVerticalOffset(linesElem, item?.align)). partial.

Conditions: src/frontend/components/slide/TextboxLines.svelte:74 shapeOutside && linesElem && (renderedLines \|\| item?.align).

Calls: src/frontend/components/slide/TextboxLines.svelte:75 <callback> (depth 0); src/frontend/components/edit/scripts/shapeOutside.ts:81 calculateShapeVerticalOffset (depth 1); src/frontend/components/helpers/style.ts:6 getStyles (depth 2); src/frontend/components/helpers/style.ts:15 <callback> (depth 3); src/frontend/components/helpers/style.ts:22 <callback> (depth 4); src/frontend/components/helpers/style.ts:49 removeText (depth 4); src/frontend/components/helpers/style.ts:37 getFilters (depth 4); src/frontend/components/helpers/style.ts:41 <callback> (depth 5); src/frontend/components/edit/scripts/shapeOutside.ts:87 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-f9ca4527913226cc47

[code] [src/frontend/components/slide/TextboxLines.svelte:223](../../../../../src/frontend/components/slide/TextboxLines.svelte#L223); createChordLines. partial.

Conditions: src/frontend/components/slide/TextboxLines.svelte:223 chords && (item?.lines \|\| fontSize); src/frontend/components/slide/TextboxLines.svelte:227 !Array.isArray(item?.lines); src/frontend/components/slide/TextboxLines.svelte:230 !line.chords?.length \|\| !line.text; src/frontend/components/slide/TextboxLines.svelte:236 !lineText.trim().length; src/frontend/components/slide/TextboxLines.svelte:251 chordIndex >= 0; src/frontend/components/slide/TextboxLines.svelte:267 chords.length > 0; src/frontend/components/slide/TextboxLines.svelte:278 !html.

Calls: src/frontend/components/slide/TextboxLines.svelte:224 createChordLines (depth 0); src/frontend/components/slide/TextboxLines.svelte:229 <callback> (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/slide/TextboxLines.svelte:232 <callback> (depth 2); src/frontend/components/slide/TextboxLines.svelte:284 getLineText (depth 2); src/frontend/components/slide/TextboxLines.svelte:285 <callback> (depth 3); src/frontend/components/slide/TextboxLines.svelte:301 getChordSizeRatio (depth 2); src/frontend/components/slide/TextboxLines.svelte:288 getChordOnlyHtml (depth 2); src/frontend/components/slide/TextboxLines.svelte:291 <callback> (depth 3); src/frontend/components/slide/TextboxLines.svelte:292 <callback> (depth 3); src/frontend/components/slide/TextboxLines.svelte:246 <callback> (depth 2); src/frontend/components/slide/TextboxLines.svelte:250 <callback> (depth 3); src/frontend/components/slide/TextboxLines.svelte:78 getCustomStyle (depth 3); src/frontend/components/helpers/style.ts:6 getStyles (depth 4); src/frontend/components/helpers/style.ts:15 <callback> (depth 5); src/frontend/components/helpers/style.ts:22 <callback> (depth 6).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 1. Full edges/effects/conditions in JSON.

## setInterval — event-3da0139ba20829db24

[code] [src/frontend/components/slide/TextboxLines.svelte:356](../../../../../src/frontend/components/slide/TextboxLines.svelte#L356); update. resolved-within-bound.

Conditions: src/frontend/components/slide/TextboxLines.svelte:367 !hasDynamicValues \|\| !hasMounted \|\| !updateDynamicValues.

Calls: src/frontend/components/slide/TextboxLines.svelte:366 update (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-3f6d91fa170b662c2e

[code] [src/frontend/components/slide/TextboxLines.svelte:364](../../../../../src/frontend/components/slide/TextboxLines.svelte#L364); update. resolved-within-bound.

Conditions: src/frontend/components/slide/TextboxLines.svelte:364 $variables; src/frontend/components/slide/TextboxLines.svelte:367 !hasDynamicValues \|\| !hasMounted \|\| !updateDynamicValues.

Calls: src/frontend/components/slide/TextboxLines.svelte:366 update (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-ded3cc6c248afe925b

[code] [src/frontend/components/slide/TextboxLines.svelte:365](../../../../../src/frontend/components/slide/TextboxLines.svelte#L365); update. resolved-within-bound.

Conditions: src/frontend/components/slide/TextboxLines.svelte:365 $outputs; src/frontend/components/slide/TextboxLines.svelte:367 !hasDynamicValues \|\| !hasMounted \|\| !updateDynamicValues.

Calls: src/frontend/components/slide/TextboxLines.svelte:366 update (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-bcc2e551df22159ff5

[code] [src/frontend/components/slide/TextboxLines.svelte:373](../../../../../src/frontend/components/slide/TextboxLines.svelte#L373); () => (hasMounted = true). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/slide/TextboxLines.svelte:373 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
