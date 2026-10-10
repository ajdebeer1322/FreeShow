# click/src_frontend_components_main_popups_ManageTags.svelte (1)

## click — event-c587833355e5391329

[code] [src/frontend/components/main/popups/ManageTags.svelte:80](../../../../../src/frontend/components/main/popups/ManageTags.svelte#L80); () => deleteTag(tag.id). partial.

Conditions: src/frontend/components/main/popups/ManageTags.svelte:74 tags.length.

Calls: src/frontend/components/main/popups/ManageTags.svelte:49 deleteTag (depth 1); src/frontend/components/main/popups/ManageTags.svelte:50 <callback> (depth 2); src/frontend/components/main/popups/ManageTags.svelte:29 getTags (depth 2); src/frontend/components/helpers/array.ts:137 keysToID (depth 3); src/frontend/components/helpers/array.ts:139 <callback> (depth 4); src/frontend/components/helpers/array.ts:42 sortByName (depth 3); src/frontend/components/helpers/array.ts:45 <callback> (depth 4); src/frontend/components/helpers/array.ts:46 <callback> (depth 4); src/frontend/components/main/popups/ManageTags.svelte:35 <callback> (depth 3).

Effects: src/frontend/components/main/popups/ManageTags.svelte:54 store-write src/frontend/stores.ts#activeTagFilter ; src/frontend/components/main/popups/ManageTags.svelte:55 store-write src/frontend/stores.ts#activeMediaTagFilter ; src/frontend/components/main/popups/ManageTags.svelte:56 store-write src/frontend/stores.ts#activePlayerTagFilter ; src/frontend/components/main/popups/ManageTags.svelte:57 store-write src/frontend/stores.ts#activeActionTagFilter ; src/frontend/components/main/popups/ManageTags.svelte:58 store-write src/frontend/stores.ts#activeTimerTagFilter .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-57cb18ef5fd53b9887

[code] [src/frontend/components/main/popups/ManageTags.svelte:90](../../../../../src/frontend/components/main/popups/ManageTags.svelte#L90); createTag. partial.

Conditions: src/frontend/components/main/popups/ManageTags.svelte:39 emptyTag.

Calls: src/frontend/components/main/popups/ManageTags.svelte:38 createTag (depth 0); src/frontend/components/main/popups/ManageTags.svelte:41 <callback> (depth 1); src/frontend/components/main/popups/ManageTags.svelte:29 getTags (depth 1); src/frontend/components/helpers/array.ts:137 keysToID (depth 2); src/frontend/components/helpers/array.ts:139 <callback> (depth 3); src/frontend/components/helpers/array.ts:42 sortByName (depth 2); src/frontend/components/helpers/array.ts:45 <callback> (depth 3); src/frontend/components/helpers/array.ts:46 <callback> (depth 3); src/frontend/components/main/popups/ManageTags.svelte:35 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.
