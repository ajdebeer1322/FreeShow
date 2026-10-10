# automatic/src_server_stage_components_Textbox.svelte (1)

## setTimeout — event-b4f77b56ce46228fab

[code] [src/server/stage/components/Textbox.svelte:58](../../../../../src/server/stage/components/Textbox.svelte#L58); calculateAutosize. partial.

Conditions: src/server/stage/components/Textbox.svelte:67 loopStop \|\| !alignElem \|\| !autoSize; src/server/stage/components/Textbox.svelte:74 stageItem?.type !== "text"; src/server/stage/components/Textbox.svelte:77 type === "growToFit" && itemFontSize !== 100; src/server/stage/components/Textbox.svelte:80 (item.type \|\| "text") === "text"; src/server/stage/components/Textbox.svelte:85 item.type === "slide_tracker".

Calls: src/server/stage/components/Textbox.svelte:66 calculateAutosize (depth 0); src/server/stage/components/Textbox.svelte:68 <callback> (depth 1); src/server/common/util/style.ts:3 getStyles (depth 1); src/server/common/util/style.ts:7 <callback> (depth 2); src/server/common/util/style.ts:44 removeText (depth 3); src/server/common/util/style.ts:28 getFilters (depth 3); src/server/common/util/style.ts:32 <callback> (depth 4); src/server/common/util/autosize.ts:18 autosize (depth 1); src/server/common/util/autosize.ts:113 virtualElem (depth 2); src/server/common/util/autosize.ts:131 <callback> (depth 3); src/server/common/util/autosize.ts:132 <callback> (depth 3); src/server/common/util/autosize.ts:45 <callback> (depth 2); src/server/common/util/autosize.ts:50 <callback> (depth 2); src/server/common/util/autosize.ts:92 addStyleToElemText (depth 2); src/server/common/util/autosize.ts:88 textIsBiggerThanBox (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-d8e044167b71daada1

[code] [src/server/stage/components/Textbox.svelte:64](../../../../../src/server/stage/components/Textbox.svelte#L64); calculateAutosize. partial.

Conditions: src/server/stage/components/Textbox.svelte:64 $variables; src/server/stage/components/Textbox.svelte:67 loopStop \|\| !alignElem \|\| !autoSize; src/server/stage/components/Textbox.svelte:74 stageItem?.type !== "text"; src/server/stage/components/Textbox.svelte:77 type === "growToFit" && itemFontSize !== 100; src/server/stage/components/Textbox.svelte:80 (item.type \|\| "text") === "text"; src/server/stage/components/Textbox.svelte:85 item.type === "slide_tracker".

Calls: src/server/stage/components/Textbox.svelte:66 calculateAutosize (depth 0); src/server/stage/components/Textbox.svelte:68 <callback> (depth 1); src/server/common/util/style.ts:3 getStyles (depth 1); src/server/common/util/style.ts:7 <callback> (depth 2); src/server/common/util/style.ts:44 removeText (depth 3); src/server/common/util/style.ts:28 getFilters (depth 3); src/server/common/util/style.ts:32 <callback> (depth 4); src/server/common/util/autosize.ts:18 autosize (depth 1); src/server/common/util/autosize.ts:113 virtualElem (depth 2); src/server/common/util/autosize.ts:131 <callback> (depth 3); src/server/common/util/autosize.ts:132 <callback> (depth 3); src/server/common/util/autosize.ts:45 <callback> (depth 2); src/server/common/util/autosize.ts:50 <callback> (depth 2); src/server/common/util/autosize.ts:92 addStyleToElemText (depth 2); src/server/common/util/autosize.ts:88 textIsBiggerThanBox (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9ff8578ecc2a185604

[code] [src/server/stage/components/Textbox.svelte:68](../../../../../src/server/stage/components/Textbox.svelte#L68); () => (loopStop = null). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/stage/components/Textbox.svelte:68 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-2125a46a0180d06f03

[code] [src/server/stage/components/Textbox.svelte:95](../../../../../src/server/stage/components/Textbox.svelte#L95); createChordLines. partial.

Conditions: src/server/stage/components/Textbox.svelte:95 chords && (item?.lines \|\| fontSize); src/server/stage/components/Textbox.svelte:99 !Array.isArray(item?.lines); src/server/stage/components/Textbox.svelte:102 !line.chords?.length \|\| !line.text; src/server/stage/components/Textbox.svelte:108 !lineText.trim().length; src/server/stage/components/Textbox.svelte:123 chordIndex >= 0; src/server/stage/components/Textbox.svelte:139 chords.length > 0; src/server/stage/components/Textbox.svelte:150 !html.

Calls: src/server/stage/components/Textbox.svelte:96 createChordLines (depth 0); src/server/stage/components/Textbox.svelte:101 <callback> (depth 1); src/server/stage/components/Textbox.svelte:104 <callback> (depth 2); src/server/stage/components/Textbox.svelte:156 getLineText (depth 2); src/server/stage/components/Textbox.svelte:157 <callback> (depth 3); src/server/stage/components/Textbox.svelte:173 getChordSizeRatio (depth 2); src/server/stage/components/Textbox.svelte:160 getChordOnlyHtml (depth 2); src/server/stage/components/Textbox.svelte:163 <callback> (depth 3); src/server/stage/components/Textbox.svelte:164 <callback> (depth 3); src/server/stage/components/Textbox.svelte:118 <callback> (depth 2); src/server/stage/components/Textbox.svelte:122 <callback> (depth 3); src/server/stage/components/Textbox.svelte:143 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-09420e0856128e2da1

[code] [src/server/stage/components/Textbox.svelte:183](../../../../../src/server/stage/components/Textbox.svelte#L183); () => { actionButtons = false }. resolved-within-bound.

Conditions: src/server/stage/components/Textbox.svelte:182 actionButtons.

Calls: src/server/stage/components/Textbox.svelte:183 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-d92669e3babb5db16e

[code] [src/server/stage/components/Textbox.svelte:194](../../../../../src/server/stage/components/Textbox.svelte#L194); () => { actionButtons = false }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/stage/components/Textbox.svelte:194 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
