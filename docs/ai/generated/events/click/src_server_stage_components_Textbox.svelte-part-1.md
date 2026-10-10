# click/src_server_stage_components_Textbox.svelte (1)

## click — event-cf193bcb6fb1ddda8b

[code] [src/server/stage/components/Textbox.svelte:479](../../../../../src/server/stage/components/Textbox.svelte#L479); closeActions. resolved-within-bound.

Conditions: src/server/stage/components/Textbox.svelte:192 e.target.closest("button") \|\| e.target.closest(".item") === thisElem.

Calls: src/server/stage/components/Textbox.svelte:191 closeActions (depth 0); src/server/stage/components/Textbox.svelte:194 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3dac939c6e62f0c296

[code] [src/server/stage/components/Textbox.svelte:490](../../../../../src/server/stage/components/Textbox.svelte#L490); toggleActions. resolved-within-bound.

Conditions: src/server/stage/components/Textbox.svelte:180 e.target.closest("button"); src/server/stage/components/Textbox.svelte:182 actionButtons.

Calls: src/server/stage/components/Textbox.svelte:179 toggleActions (depth 0); src/server/stage/components/Textbox.svelte:183 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8164cf69b2c4790f83

[code] [src/server/stage/components/Textbox.svelte:508](../../../../../src/server/stage/components/Textbox.svelte#L508); () => transpose("down"). partial.

Conditions: src/server/stage/components/Textbox.svelte:503 actionButtons && (chordLines.length \|\| false); src/server/stage/components/Textbox.svelte:505 chordLines.length.

Calls: src/server/stage/components/Textbox.svelte:217 transpose (depth 1); src/server/stage/components/Textbox.svelte:230 <callback> (depth 2); src/server/stage/components/Textbox.svelte:234 <callback> (depth 3); src/server/stage/components/Textbox.svelte:254 transposeChord (depth 4); src/server/stage/components/Textbox.svelte:261 transposeNote (depth 5); src/server/stage/components/Textbox.svelte:96 createChordLines (depth 2); src/server/stage/components/Textbox.svelte:101 <callback> (depth 3); src/server/stage/components/Textbox.svelte:104 <callback> (depth 4); src/server/stage/components/Textbox.svelte:156 getLineText (depth 4); src/server/stage/components/Textbox.svelte:157 <callback> (depth 5); src/server/stage/components/Textbox.svelte:173 getChordSizeRatio (depth 4); src/server/stage/components/Textbox.svelte:160 getChordOnlyHtml (depth 4); src/server/stage/components/Textbox.svelte:163 <callback> (depth 5); src/server/stage/components/Textbox.svelte:164 <callback> (depth 5); src/server/stage/components/Textbox.svelte:118 <callback> (depth 4); src/server/stage/components/Textbox.svelte:122 <callback> (depth 5).

Effects: src/server/stage/components/Textbox.svelte:223 store-write src/server/stage/util/stores.ts#updateTransposed .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-924c08b0605714f441

[code] [src/server/stage/components/Textbox.svelte:509](../../../../../src/server/stage/components/Textbox.svelte#L509); () => transpose("reset"). partial.

Conditions: src/server/stage/components/Textbox.svelte:503 actionButtons && (chordLines.length \|\| false); src/server/stage/components/Textbox.svelte:505 chordLines.length.

Calls: src/server/stage/components/Textbox.svelte:217 transpose (depth 1); src/server/stage/components/Textbox.svelte:230 <callback> (depth 2); src/server/stage/components/Textbox.svelte:234 <callback> (depth 3); src/server/stage/components/Textbox.svelte:254 transposeChord (depth 4); src/server/stage/components/Textbox.svelte:261 transposeNote (depth 5); src/server/stage/components/Textbox.svelte:96 createChordLines (depth 2); src/server/stage/components/Textbox.svelte:101 <callback> (depth 3); src/server/stage/components/Textbox.svelte:104 <callback> (depth 4); src/server/stage/components/Textbox.svelte:156 getLineText (depth 4); src/server/stage/components/Textbox.svelte:157 <callback> (depth 5); src/server/stage/components/Textbox.svelte:173 getChordSizeRatio (depth 4); src/server/stage/components/Textbox.svelte:160 getChordOnlyHtml (depth 4); src/server/stage/components/Textbox.svelte:163 <callback> (depth 5); src/server/stage/components/Textbox.svelte:164 <callback> (depth 5); src/server/stage/components/Textbox.svelte:118 <callback> (depth 4); src/server/stage/components/Textbox.svelte:122 <callback> (depth 5).

Effects: src/server/stage/components/Textbox.svelte:223 store-write src/server/stage/util/stores.ts#updateTransposed .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-259af807c47fe08bb2

[code] [src/server/stage/components/Textbox.svelte:510](../../../../../src/server/stage/components/Textbox.svelte#L510); () => transpose("up"). partial.

Conditions: src/server/stage/components/Textbox.svelte:503 actionButtons && (chordLines.length \|\| false); src/server/stage/components/Textbox.svelte:505 chordLines.length.

Calls: src/server/stage/components/Textbox.svelte:217 transpose (depth 1); src/server/stage/components/Textbox.svelte:230 <callback> (depth 2); src/server/stage/components/Textbox.svelte:234 <callback> (depth 3); src/server/stage/components/Textbox.svelte:254 transposeChord (depth 4); src/server/stage/components/Textbox.svelte:261 transposeNote (depth 5); src/server/stage/components/Textbox.svelte:96 createChordLines (depth 2); src/server/stage/components/Textbox.svelte:101 <callback> (depth 3); src/server/stage/components/Textbox.svelte:104 <callback> (depth 4); src/server/stage/components/Textbox.svelte:156 getLineText (depth 4); src/server/stage/components/Textbox.svelte:157 <callback> (depth 5); src/server/stage/components/Textbox.svelte:173 getChordSizeRatio (depth 4); src/server/stage/components/Textbox.svelte:160 getChordOnlyHtml (depth 4); src/server/stage/components/Textbox.svelte:163 <callback> (depth 5); src/server/stage/components/Textbox.svelte:164 <callback> (depth 5); src/server/stage/components/Textbox.svelte:118 <callback> (depth 4); src/server/stage/components/Textbox.svelte:122 <callback> (depth 5).

Effects: src/server/stage/components/Textbox.svelte:223 store-write src/server/stage/util/stores.ts#updateTransposed .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
