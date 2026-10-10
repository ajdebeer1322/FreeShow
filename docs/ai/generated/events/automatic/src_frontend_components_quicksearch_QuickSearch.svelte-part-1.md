# automatic/src_frontend_components_quicksearch_QuickSearch.svelte (1)

## setTimeout — event-6c4ffcf0d0066d0787

[code] [src/frontend/components/quicksearch/QuickSearch.svelte:46](../../../../../src/frontend/components/quicksearch/QuickSearch.svelte#L46); () => { searchDebounce = null runSearch(value, category) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/quicksearch/QuickSearch.svelte:46 <callback> (depth 0); src/frontend/components/quicksearch/QuickSearch.svelte:26 runSearch (depth 1); src/frontend/components/quicksearch/quicksearch.ts:95 quicksearch (depth 2); src/frontend/utils/search.ts:8 formatSearch (depth 3); src/frontend/components/quicksearch/quicksearch.ts:99 trimValues (depth 3); src/frontend/components/quicksearch/quicksearch.ts:100 sort (depth 3); src/frontend/components/actions/apiHelper.ts:979 sortByClosestMatch (depth 4); src/frontend/components/actions/apiHelper.ts:971 normalize (depth 5); src/frontend/components/actions/apiHelper.ts:985 <callback> (depth 5); src/frontend/components/actions/apiHelper.ts:987 <callback> (depth 6); src/frontend/components/actions/apiHelper.ts:991 getSimilarityScoreAndSource (depth 5); src/frontend/components/actions/apiHelper.ts:1056 normalizedSimilarity (depth 6); src/frontend/components/actions/apiHelper.ts:1020 <callback> (depth 5); src/frontend/components/actions/apiHelper.ts:1030 <callback> (depth 5); src/frontend/components/actions/apiHelper.ts:1030 <callback> (depth 5); src/frontend/components/quicksearch/quicksearch.ts:103 isVisible (depth 3).

Effects: src/frontend/components/quicksearch/quicksearchData.ts:24 ipc requestMain(Main.READ_FOLDER, { path: folderPaths }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 9; depth cutoffs: 16. Full edges/effects/conditions in JSON.

## setTimeout — event-c09187c8b1f8125c3c

[code] [src/frontend/components/quicksearch/QuickSearch.svelte:160](../../../../../src/frontend/components/quicksearch/QuickSearch.svelte#L160); () => (showValues = true). resolved-within-bound.

Conditions: src/frontend/components/quicksearch/QuickSearch.svelte:158 values.length \|\| actualSearchText \|\| activeCategory.

Calls: src/frontend/components/quicksearch/QuickSearch.svelte:160 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-c03794a994732954f5

[code] [src/frontend/components/quicksearch/QuickSearch.svelte:163](../../../../../src/frontend/components/quicksearch/QuickSearch.svelte#L163); () => (centered = true). resolved-within-bound.

Conditions: src/frontend/components/quicksearch/QuickSearch.svelte:158 values.length \|\| actualSearchText \|\| activeCategory.

Calls: src/frontend/components/quicksearch/QuickSearch.svelte:163 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
