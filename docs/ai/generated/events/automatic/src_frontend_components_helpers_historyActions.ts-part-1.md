# automatic/src_frontend_components_helpers_historyActions.ts (1)

## setTimeout — event-416a5f1ab9b4d1edb9

[code] [src/frontend/components/helpers/historyActions.ts:350](../../../../../src/frontend/components/helpers/historyActions.ts#L350); () => { alertMessage.set(text + ":<br>- " + duplicates.join("<br>- ")) activePopup.set("alert") }. resolved-within-bound.

Conditions: src/frontend/components/helpers/historyActions.ts:347 initializing && duplicates.length.

Calls: src/frontend/components/helpers/historyActions.ts:350 <callback> (depth 0).

Effects: src/frontend/components/helpers/historyActions.ts:351 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/helpers/historyActions.ts:352 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-743835437abc8b3ec9

[code] [src/frontend/components/helpers/historyActions.ts:358](../../../../../src/frontend/components/helpers/historyActions.ts#L358); () => { showsCache.set({}) activeShow.set(null) }. resolved-within-bound.

Conditions: src/frontend/components/helpers/historyActions.ts:356 !deleting && Object.keys(get(showsCache)).length >= 100.

Calls: src/frontend/components/helpers/historyActions.ts:358 <callback> (depth 0).

Effects: src/frontend/components/helpers/historyActions.ts:359 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:360 store-write src/frontend/stores.ts#activeShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-e65785405b9808a83b

[code] [src/frontend/components/helpers/historyActions.ts:432](../../../../../src/frontend/components/helpers/historyActions.ts#L432); () => activeEdit.update((a) => { a.slide = index return a }). resolved-within-bound.

Conditions: src/frontend/components/helpers/historyActions.ts:425 deleting.

Calls: src/frontend/components/helpers/historyActions.ts:433 <callback> (depth 0); src/frontend/components/helpers/historyActions.ts:434 <callback> (depth 1).

Effects: src/frontend/components/helpers/historyActions.ts:434 store-write src/frontend/stores.ts#activeEdit .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-a4e438d3af17a53178

[code] [src/frontend/components/helpers/historyActions.ts:582](../../../../../src/frontend/components/helpers/historyActions.ts#L582); () => _show(showId).slides(&#91;parent.id&#93;).set({ key: "children", value }). partial.

Conditions: src/frontend/components/helpers/historyActions.ts:577 parent; src/frontend/components/helpers/historyActions.ts:575 !isParent.

Calls: src/frontend/components/helpers/historyActions.ts:582 <callback> (depth 0); src/frontend/components/helpers/shows.ts:103 set (depth 1); src/frontend/components/helpers/shows.ts:105 <callback> (depth 2); src/frontend/components/helpers/shows.ts:109 <callback> (depth 3); src/frontend/components/helpers/shows.ts:10 touchShowModified (depth 3); src/frontend/components/helpers/shows.ts:74 slides (depth 1); src/frontend/components/helpers/shows.ts:76 get (depth 2); src/frontend/components/helpers/shows.ts:80 <callback> (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/components/helpers/shows.ts:123 add (depth 2); src/frontend/components/helpers/shows.ts:128 <callback> (depth 3); src/frontend/components/helpers/shows.ts:132 <callback> (depth 4); src/frontend/components/helpers/shows.ts:142 remove (depth 2); src/frontend/components/helpers/shows.ts:144 <callback> (depth 3); src/frontend/components/helpers/shows.ts:148 <callback> (depth 4); src/frontend/components/helpers/shows.ts:162 items (depth 2).

Effects: src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:290 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:326 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:346 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 17. Full edges/effects/conditions in JSON.
