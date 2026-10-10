# click/src_frontend_components_drawer_media_MediaCard.svelte (1)

## click — event-088489c39d8cd2c91e

[code] [src/frontend/components/drawer/media/MediaCard.svelte:225](../../../../../src/frontend/components/drawer/media/MediaCard.svelte#L225); click. partial.

Conditions: src/frontend/components/drawer/media/MediaCard.svelte:112 e.ctrlKey \|\| e.metaKey \|\| e.shiftKey \|\| $outLocked \|\| wait \|\| iconClicked; src/frontend/components/drawer/media/MediaCard.svelte:123 isActive; src/frontend/components/drawer/media/MediaCard.svelte:131 videoType === "foreground"; src/frontend/components/drawer/media/MediaCard.svelte:141 credits && credits.type === "unsplash" && credits.trigger_download.

Calls: src/frontend/components/drawer/media/MediaCard.svelte:111 click (depth 0); src/frontend/components/drawer/media/MediaCard.svelte:116 <callback> (depth 1); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 1); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 2); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 3); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/helpers/array.ts:53 sortObject (depth 5); src/frontend/components/helpers/array.ts:54 <callback> (depth 6); src/frontend/components/helpers/array.ts:42 sortByName (depth 5); src/frontend/components/helpers/array.ts:45 <callback> (depth 6); src/frontend/components/helpers/array.ts:46 <callback> (depth 6); src/frontend/components/helpers/array.ts:137 keysToID (depth 5); src/frontend/components/helpers/array.ts:139 <callback> (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4).

Effects: src/frontend/components/drawer/media/MediaCard.svelte:124 presentation clearBackground ; src/frontend/components/drawer/media/MediaCard.svelte:131 presentation clearSlide ; src/frontend/components/drawer/media/MediaCard.svelte:142 network fetch ; src/frontend/components/drawer/media/MediaCard.svelte:143 store-write src/frontend/stores.ts#customMessageCredits ; src/frontend/components/drawer/media/MediaCard.svelte:145 store-write src/frontend/stores.ts#customMessageCredits ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/output/clear.ts:95 store-write src/frontend/stores.ts#customMessageCredits ; src/frontend/components/output/clear.ts:92 presentation setOutput ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 15; depth cutoffs: 192. Full edges/effects/conditions in JSON.

## click — event-eedee4e81bb4354e6f

[code] [src/frontend/components/drawer/media/MediaCard.svelte:236](../../../../../src/frontend/components/drawer/media/MediaCard.svelte#L236); () => removeStyle("favourite"). resolved-within-bound.

Conditions: src/frontend/components/drawer/media/MediaCard.svelte:233 isFavourite && active !== "favourites".

Calls: src/frontend/components/drawer/media/MediaCard.svelte:184 removeStyle (depth 1); src/frontend/components/drawer/media/MediaCard.svelte:185 <callback> (depth 2); src/frontend/components/drawer/media/MediaCard.svelte:187 <callback> (depth 2).

Effects: src/frontend/components/drawer/media/MediaCard.svelte:187 store-write src/frontend/stores.ts#media .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e9a15b6427349ab94c

[code] [src/frontend/components/drawer/media/MediaCard.svelte:245](../../../../../src/frontend/components/drawer/media/MediaCard.svelte#L245); () => removeStyle("videoType"). resolved-within-bound.

Conditions: src/frontend/components/drawer/media/MediaCard.svelte:242 mediaStyle.videoType.

Calls: src/frontend/components/drawer/media/MediaCard.svelte:184 removeStyle (depth 1); src/frontend/components/drawer/media/MediaCard.svelte:185 <callback> (depth 2); src/frontend/components/drawer/media/MediaCard.svelte:187 <callback> (depth 2).

Effects: src/frontend/components/drawer/media/MediaCard.svelte:187 store-write src/frontend/stores.ts#media .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c2627af690dd468f89

[code] [src/frontend/components/drawer/media/MediaCard.svelte:254](../../../../../src/frontend/components/drawer/media/MediaCard.svelte#L254); () => removeStyle("filters"). resolved-within-bound.

Conditions: src/frontend/components/drawer/media/MediaCard.svelte:251 !!mediaStyle.filter?.length \|\| $media&#91;path&#93;?.fit \|\| mediaStyle.flipped \|\| mediaStyle.flippedY \|\| (mediaStyle.blend && mediaStyle.blend !== "normal") \|\| Object.keys(mediaStyle.cropp.

Calls: src/frontend/components/drawer/media/MediaCard.svelte:184 removeStyle (depth 1); src/frontend/components/drawer/media/MediaCard.svelte:185 <callback> (depth 2); src/frontend/components/drawer/media/MediaCard.svelte:187 <callback> (depth 2).

Effects: src/frontend/components/drawer/media/MediaCard.svelte:187 store-write src/frontend/stores.ts#media .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-57050989ef1afc65af

[code] [src/frontend/components/drawer/media/MediaCard.svelte:263](../../../../../src/frontend/components/drawer/media/MediaCard.svelte#L263); () => removeStyle("tags"). resolved-within-bound.

Conditions: src/frontend/components/drawer/media/MediaCard.svelte:260 tags.length.

Calls: src/frontend/components/drawer/media/MediaCard.svelte:184 removeStyle (depth 1); src/frontend/components/drawer/media/MediaCard.svelte:185 <callback> (depth 2); src/frontend/components/drawer/media/MediaCard.svelte:187 <callback> (depth 2).

Effects: src/frontend/components/drawer/media/MediaCard.svelte:187 store-write src/frontend/stores.ts#media .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
