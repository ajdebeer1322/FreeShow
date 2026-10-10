# automatic/src_frontend_components_edit_editbox_EditboxLines.svelte (2)

## setTimeout — event-c8f5c4d81c1abc245f

[code] [src/frontend/components/edit/editbox/EditboxLines.svelte:412](../../../../../src/frontend/components/edit/editbox/EditboxLines.svelte#L412); () => { autosizeTimeout = null runAutoSize() }. partial.

Conditions: src/frontend/components/edit/editbox/EditboxLines.svelte:410 chordsMode \|\| lastMeasureDuration > SLOW_MEASURE_MS \|\| $special.optimizedMode.

Calls: src/frontend/components/edit/editbox/EditboxLines.svelte:412 <callback> (depth 0); src/frontend/components/edit/editbox/EditboxLines.svelte:433 runAutoSize (depth 1); src/frontend/components/helpers/style.ts:6 getStyles (depth 2); src/frontend/components/helpers/style.ts:15 <callback> (depth 3); src/frontend/components/helpers/style.ts:22 <callback> (depth 4); src/frontend/components/helpers/style.ts:49 removeText (depth 4); src/frontend/components/helpers/style.ts:37 getFilters (depth 4); src/frontend/components/helpers/style.ts:41 <callback> (depth 5); src/frontend/components/edit/scripts/autosize.ts:19 autosize (depth 2); src/frontend/components/edit/scripts/autosize.ts:119 virtualElem (depth 3); src/frontend/components/edit/scripts/autosize.ts:132 <callback> (depth 4); src/frontend/components/edit/scripts/autosize.ts:151 <callback> (depth 4); src/frontend/components/edit/scripts/autosize.ts:152 <callback> (depth 4); src/frontend/components/edit/scripts/autosize.ts:166 <callback> (depth 4); src/frontend/components/edit/scripts/autosize.ts:176 <callback> (depth 4); src/frontend/components/edit/scripts/autosize.ts:49 <callback> (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-b5fca0ac6d37d74642

[code] [src/frontend/components/edit/editbox/EditboxLines.svelte:637](../../../../../src/frontend/components/edit/editbox/EditboxLines.svelte#L637); () => setCaret(textElem, lastCaretPos). partial.

Conditions: src/frontend/components/edit/editbox/EditboxLines.svelte:636 ref.type !== "show" && (item.lines \|\| &#91;&#93;).length < newLines.length; src/frontend/components/edit/editbox/EditboxLines.svelte:627 caret.

Calls: src/frontend/components/edit/editbox/EditboxLines.svelte:637 <callback> (depth 0); src/frontend/components/edit/scripts/textStyle.ts:353 setCaret (depth 1); src/frontend/components/edit/scripts/textStyle.ts:362 nodeTextLength (depth 2); src/frontend/components/edit/scripts/textStyle.ts:367 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 11; depth cutoffs: 0. Full edges/effects/conditions in JSON.
