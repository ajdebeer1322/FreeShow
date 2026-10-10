# click/src_frontend_components_show_TextEditor.svelte (1)

## click — event-0fa412a0163fd7b226

[code] [src/frontend/components/show/TextEditor.svelte:67](../../../../../src/frontend/components/show/TextEditor.svelte#L67); transposeUp. partial.

Conditions: src/frontend/components/show/TextEditor.svelte:66 showHasChords && itemIndex === 0.

Calls: src/frontend/components/show/TextEditor.svelte:53 transposeUp (depth 0); src/frontend/components/show/formatTextEditor.ts:14 formatText (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/helpers/shows.ts:27 get (depth 2); src/frontend/components/helpers/shows.ts:18 _show (depth 2); src/frontend/components/helpers/shows.ts:38 set (depth 3); src/frontend/components/helpers/shows.ts:40 <callback> (depth 4); src/frontend/components/helpers/shows.ts:10 touchShowModified (depth 5); src/frontend/components/helpers/shows.ts:59 remove (depth 3); src/frontend/components/helpers/shows.ts:61 <callback> (depth 4); src/frontend/components/helpers/shows.ts:74 slides (depth 3); src/frontend/components/helpers/shows.ts:76 get (depth 4); src/frontend/components/helpers/shows.ts:80 <callback> (depth 5); src/frontend/components/helpers/shows.ts:103 set (depth 4); src/frontend/components/helpers/shows.ts:105 <callback> (depth 5); src/frontend/components/helpers/shows.ts:109 <callback> (depth 6).

Effects: src/frontend/components/show/formatTextEditor.ts:322 history history UPDATE; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 90. Full edges/effects/conditions in JSON.

## click — event-5ecf3045e645dd12c8

[code] [src/frontend/components/show/TextEditor.svelte:70](../../../../../src/frontend/components/show/TextEditor.svelte#L70); transposeDown. partial.

Conditions: src/frontend/components/show/TextEditor.svelte:66 showHasChords && itemIndex === 0.

Calls: src/frontend/components/show/TextEditor.svelte:56 transposeDown (depth 0); src/frontend/components/show/formatTextEditor.ts:14 formatText (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/helpers/shows.ts:27 get (depth 2); src/frontend/components/helpers/shows.ts:18 _show (depth 2); src/frontend/components/helpers/shows.ts:38 set (depth 3); src/frontend/components/helpers/shows.ts:40 <callback> (depth 4); src/frontend/components/helpers/shows.ts:10 touchShowModified (depth 5); src/frontend/components/helpers/shows.ts:59 remove (depth 3); src/frontend/components/helpers/shows.ts:61 <callback> (depth 4); src/frontend/components/helpers/shows.ts:74 slides (depth 3); src/frontend/components/helpers/shows.ts:76 get (depth 4); src/frontend/components/helpers/shows.ts:80 <callback> (depth 5); src/frontend/components/helpers/shows.ts:103 set (depth 4); src/frontend/components/helpers/shows.ts:105 <callback> (depth 5); src/frontend/components/helpers/shows.ts:109 <callback> (depth 6).

Effects: src/frontend/components/show/formatTextEditor.ts:322 history history UPDATE; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 90. Full edges/effects/conditions in JSON.

## click — event-3ab0106a58319008ad

[code] [src/frontend/components/show/TextEditor.svelte:80](../../../../../src/frontend/components/show/TextEditor.svelte#L80); decreaseItemIndex. resolved-within-bound.

Conditions: src/frontend/components/show/TextEditor.svelte:78 maxTextboxes > 1; src/frontend/components/show/TextEditor.svelte:40 itemIndex > 0.

Calls: src/frontend/components/show/TextEditor.svelte:39 decreaseItemIndex (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3bca98c217361d0489

[code] [src/frontend/components/show/TextEditor.svelte:83](../../../../../src/frontend/components/show/TextEditor.svelte#L83); () => (itemIndex = 0). resolved-within-bound.

Conditions: src/frontend/components/show/TextEditor.svelte:78 maxTextboxes > 1.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-cf5b04ca0c273782d7

[code] [src/frontend/components/show/TextEditor.svelte:88](../../../../../src/frontend/components/show/TextEditor.svelte#L88); increaseItemIndex. resolved-within-bound.

Conditions: src/frontend/components/show/TextEditor.svelte:78 maxTextboxes > 1; src/frontend/components/show/TextEditor.svelte:37 itemIndex < maxTextboxes.

Calls: src/frontend/components/show/TextEditor.svelte:36 increaseItemIndex (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
