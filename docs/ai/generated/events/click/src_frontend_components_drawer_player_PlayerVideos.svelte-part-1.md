# click/src_frontend_components_drawer_player_PlayerVideos.svelte (1)

## click — event-6424f399d4e8ed8d88

[code] [src/frontend/components/drawer/player/PlayerVideos.svelte:88](../../../../../src/frontend/components/drawer/player/PlayerVideos.svelte#L88); (e) => { if ($outLocked \|\| e.ctrlKey \|\| e.metaKey \|\| iconClicked) return if (e.target?.closest?.(".edit")) return if (findMatchingOut(video.rid, $outputs)) { clearBackground() retu. partial.

Conditions: src/frontend/components/drawer/player/PlayerVideos.svelte:74 fullFilteredVideos.length.

Calls: src/frontend/components/helpers/output.ts:691 findMatchingOut (depth 1); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 2); src/frontend/components/helpers/array.ts:42 sortByName (depth 3); src/frontend/components/helpers/array.ts:45 <callback> (depth 4); src/frontend/components/helpers/array.ts:46 <callback> (depth 4); src/frontend/components/helpers/array.ts:137 keysToID (depth 3); src/frontend/components/helpers/array.ts:139 <callback> (depth 4); src/frontend/components/helpers/output.ts:677 <callback> (depth 3); src/frontend/components/helpers/output.ts:679 <callback> (depth 3); src/frontend/components/helpers/output.ts:679 <callback> (depth 3); src/frontend/components/helpers/output.ts:681 <callback> (depth 3); src/frontend/utils/common.ts:18 isMainWindow (depth 3); src/frontend/components/helpers/output.ts:1102 addOutput (depth 3); src/frontend/components/helpers/output.ts:1106 <callback> (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/helpers/output.ts:1116 <callback> (depth 5).

Effects: src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/output.ts:146 ipc send(OUTPUT, &#91;"TOGGLE_OUTPUTS"&#93;, { outputs: sortedOutputList, state, autoStartup: options.autoStartup, autoPosition }) ; src/frontend/components/output/clear.ts:95 store-write src/frontend/stores.ts#customMessageCredits ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/output/clear.ts:92 presentation setOutput ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 32; depth cutoffs: 257. Full edges/effects/conditions in JSON.

## click — event-3597cd90f68fcabb48

[code] [src/frontend/components/drawer/player/PlayerVideos.svelte:112](../../../../../src/frontend/components/drawer/player/PlayerVideos.svelte#L112); () => removeStyle("tags", video.rid). resolved-within-bound.

Conditions: src/frontend/components/drawer/player/PlayerVideos.svelte:74 fullFilteredVideos.length; src/frontend/components/drawer/player/PlayerVideos.svelte:109 tags.length.

Calls: src/frontend/components/drawer/player/PlayerVideos.svelte:58 removeStyle (depth 1); src/frontend/components/drawer/player/PlayerVideos.svelte:60 <callback> (depth 2); src/frontend/components/drawer/player/PlayerVideos.svelte:62 <callback> (depth 2).

Effects: src/frontend/components/drawer/player/PlayerVideos.svelte:62 store-write src/frontend/stores.ts#playerVideos .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
