# action/play_media (1)

## play_media — event-9f6598399e61d5ea33

[code] [src/frontend/components/actions/api.ts:264](../../../../../src/frontend/components/actions/api.ts#L264); (data: API_media) => playMedia(data). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:264 play_media (depth 0); src/frontend/components/actions/apiHelper.ts:734 playMedia (depth 1); src/frontend/components/helpers/media.ts:38 getMediaType (depth 2); src/frontend/components/helpers/media.ts:19 getExtension (depth 2); src/frontend/components/helpers/media.ts:26 removeExtension (depth 2); src/frontend/components/helpers/media.ts:46 getFileName (depth 2); src/frontend/components/helpers/output.ts:158 setOutput (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6).

Effects: src/frontend/components/actions/apiHelper.ts:742 presentation setOutput ; src/frontend/components/actions/apiHelper.ts:743 presentation clearBackground ; src/frontend/components/actions/apiHelper.ts:758 presentation setOutput ; src/frontend/components/actions/apiHelper.ts:761 presentation setOutput ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 134. Full edges/effects/conditions in JSON.

[code] Payload type: API_media. [External/internal input routes](../inputs.json) retain transport and permission limits.
