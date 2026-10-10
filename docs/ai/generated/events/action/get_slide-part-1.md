# action/get_slide (1)

## get_slide — event-99d864ef4526a82d2d

[code] [src/frontend/components/actions/api.ts:434](../../../../../src/frontend/components/actions/api.ts#L434); (data: API_slide) => getSlide(data). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:434 get_slide (depth 0); src/frontend/components/actions/apiGet.ts:117 getSlide (depth 1); src/frontend/components/helpers/shows.ts:27 get (depth 2); src/frontend/components/helpers/shows.ts:18 _show (depth 2); src/frontend/components/helpers/shows.ts:38 set (depth 3); src/frontend/components/helpers/shows.ts:40 <callback> (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/helpers/shows.ts:10 touchShowModified (depth 5); src/frontend/components/helpers/shows.ts:59 remove (depth 3); src/frontend/components/helpers/shows.ts:61 <callback> (depth 4); src/frontend/components/helpers/shows.ts:74 slides (depth 3); src/frontend/components/helpers/shows.ts:76 get (depth 4); src/frontend/components/helpers/shows.ts:80 <callback> (depth 5); src/frontend/components/helpers/shows.ts:103 set (depth 4); src/frontend/components/helpers/shows.ts:105 <callback> (depth 5); src/frontend/components/helpers/shows.ts:109 <callback> (depth 6).

Effects: src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 21. Full edges/effects/conditions in JSON.

[code] Payload type: API_slide. [External/internal input routes](../inputs.json) retain transport and permission limits.
