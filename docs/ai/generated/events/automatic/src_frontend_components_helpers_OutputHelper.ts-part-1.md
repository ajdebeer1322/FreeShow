# automatic/src_frontend_components_helpers_OutputHelper.ts (1)

## setTimeout — event-cbb83bdf75393445fc

[code] [src/frontend/components/helpers/OutputHelper.ts:107](../../../../../src/frontend/components/helpers/OutputHelper.ts#L107); unsubscribe. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-e47899346383799816

[code] [src/frontend/components/helpers/OutputHelper.ts:376](../../../../../src/frontend/components/helpers/OutputHelper.ts#L376); () => { const showRef = { id: item.id, layout: item.layout } const newOut = this.getSubsequent(outputId, showRef, next) if (newOut) return this.playSlide(outputId, newOut, options.. partial.

Conditions: src/frontend/components/helpers/OutputHelper.ts:379 newOut; src/frontend/components/helpers/OutputHelper.ts:381 this.getShowLayout(showRef).length.

Calls: src/frontend/components/helpers/OutputHelper.ts:376 <callback> (depth 0); src/frontend/components/helpers/OutputHelper.ts:514 getSubsequent (depth 1); src/frontend/components/helpers/OutputHelper.ts:518 getNextSlide (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/helpers/OutputHelper.ts:645 getShowLayout (depth 3); src/frontend/components/helpers/shows.ts:389 ref (depth 4); src/frontend/components/helpers/shows.ts:394 <callback> (depth 5); src/frontend/components/helpers/shows.ts:397 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 4); src/frontend/components/helpers/shows.ts:375 get (depth 5); src/frontend/components/helpers/shows.ts:379 <callback> (depth 6); src/frontend/components/helpers/shows.ts:476 set (depth 5); src/frontend/components/helpers/shows.ts:478 <callback> (depth 6); src/frontend/components/helpers/shows.ts:494 add (depth 5).

Effects: src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:688 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 35; depth cutoffs: 257. Full edges/effects/conditions in JSON.

## setTimeout — event-90e1d7caa7b4a709e1

[code] [src/frontend/components/helpers/OutputHelper.ts:701](../../../../../src/frontend/components/helpers/OutputHelper.ts#L701); () => { if (this.pendingSlides&#91;outputId&#93; === data) { delete this.pendingSlides&#91;outputId&#93; } setOutput("slide", data, false, outputId) updateOut(data.id, data.index!, layout, slideLa. partial.

Conditions: src/frontend/components/helpers/OutputHelper.ts:702 this.pendingSlides&#91;outputId&#93; === data.

Calls: src/frontend/components/helpers/OutputHelper.ts:701 <callback> (depth 0); src/frontend/components/helpers/output.ts:158 setOutput (depth 1); src/frontend/components/helpers/shows.ts:389 ref (depth 2); src/frontend/components/helpers/shows.ts:394 <callback> (depth 3); src/frontend/components/helpers/shows.ts:397 <callback> (depth 4); src/frontend/components/helpers/shows.ts:402 <callback> (depth 5); src/frontend/components/helpers/shows.ts:415 <callback> (depth 5); src/frontend/components/helpers/shows.ts:103 set (depth 5); src/frontend/components/helpers/shows.ts:105 <callback> (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 5); src/frontend/components/helpers/shows.ts:76 get (depth 6); src/frontend/components/helpers/shows.ts:123 add (depth 6); src/frontend/components/helpers/shows.ts:142 remove (depth 6); src/frontend/components/helpers/shows.ts:162 items (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 5); src/frontend/components/helpers/shows.ts:27 get (depth 6).

Effects: src/frontend/components/helpers/OutputHelper.ts:706 presentation setOutput ; src/frontend/components/helpers/OutputHelper.ts:707 presentation updateOut ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:433 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:647 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 80; depth cutoffs: 249. Full edges/effects/conditions in JSON.

## setTimeout — event-fe098587ce43ec6b04

[code] [src/frontend/components/helpers/OutputHelper.ts:725](../../../../../src/frontend/components/helpers/OutputHelper.ts#L725); () => (this.previousOutputted = clone(this.getOut(outputId))). partial.

Conditions: src/frontend/components/helpers/OutputHelper.ts:724 item.type === "image" \|\| item.type === "video" \|\| item.type === "player" \|\| item.type === "audio".

Calls: src/frontend/components/helpers/OutputHelper.ts:725 <callback> (depth 0); src/frontend/components/helpers/array.ts:181 clone (depth 1); src/frontend/components/helpers/OutputHelper.ts:669 getOut (depth 1); src/frontend/components/helpers/OutputHelper.ts:659 getActiveItem (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
