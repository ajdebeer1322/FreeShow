# click/src_frontend_components_quicksearch_QuickSearch.svelte (1)

## click — event-f46fc1d8e9ae15abda

[code] [src/frontend/components/quicksearch/QuickSearch.svelte:181](../../../../../src/frontend/components/quicksearch/QuickSearch.svelte#L181); () => removeCategoryTag(). partial.

Conditions: src/frontend/components/quicksearch/QuickSearch.svelte:170 $quickSearchActive; src/frontend/components/quicksearch/QuickSearch.svelte:178 activeCategory.

Calls: src/frontend/components/quicksearch/QuickSearch.svelte:98 removeCategoryTag (depth 1); src/frontend/components/quicksearch/QuickSearch.svelte:52 search (depth 2); src/frontend/components/quicksearch/QuickSearch.svelte:35 scheduleSearch (depth 3); src/frontend/components/quicksearch/QuickSearch.svelte:26 runSearch (depth 4); src/frontend/components/quicksearch/quicksearch.ts:95 quicksearch (depth 5); src/frontend/utils/search.ts:8 formatSearch (depth 6); src/frontend/components/quicksearch/quicksearch.ts:99 trimValues (depth 6); src/frontend/components/quicksearch/quicksearch.ts:100 sort (depth 6); src/frontend/components/quicksearch/quicksearch.ts:103 isVisible (depth 6); src/frontend/components/quicksearch/quicksearch.ts:255 addValues (depth 6); src/frontend/components/quicksearch/quicksearch.ts:857 getShowActions (depth 6); src/frontend/components/quicksearch/quicksearch.ts:878 getEditActions (depth 6); src/frontend/components/quicksearch/quicksearch.ts:124 <callback> (depth 6); src/frontend/components/quicksearch/quicksearch.ts:125 <callback> (depth 6); src/frontend/components/quicksearch/quicksearch.ts:126 <callback> (depth 6); src/frontend/components/quicksearch/quicksearch.ts:137 <callback> (depth 6).

Effects: src/frontend/components/quicksearch/quicksearchData.ts:24 ipc requestMain(Main.READ_FOLDER, { path: folderPaths }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 13. Full edges/effects/conditions in JSON.

## click — event-b0d6e3090fcc318be5

[code] [src/frontend/components/quicksearch/QuickSearch.svelte:195](../../../../../src/frontend/components/quicksearch/QuickSearch.svelte#L195); () => openCategory(value.category). partial.

Conditions: src/frontend/components/quicksearch/QuickSearch.svelte:170 $quickSearchActive; src/frontend/components/quicksearch/QuickSearch.svelte:190 showValues && actualSearchText.length; src/frontend/components/quicksearch/QuickSearch.svelte:191 values.length; src/frontend/components/quicksearch/QuickSearch.svelte:194 i === 0 \|\| values&#91;i - 1&#93;.category !== value.category.

Calls: src/frontend/components/quicksearch/QuickSearch.svelte:92 openCategory (depth 1); src/frontend/components/quicksearch/QuickSearch.svelte:52 search (depth 2); src/frontend/components/quicksearch/QuickSearch.svelte:35 scheduleSearch (depth 3); src/frontend/components/quicksearch/QuickSearch.svelte:26 runSearch (depth 4); src/frontend/components/quicksearch/quicksearch.ts:95 quicksearch (depth 5); src/frontend/utils/search.ts:8 formatSearch (depth 6); src/frontend/components/quicksearch/quicksearch.ts:99 trimValues (depth 6); src/frontend/components/quicksearch/quicksearch.ts:100 sort (depth 6); src/frontend/components/quicksearch/quicksearch.ts:103 isVisible (depth 6); src/frontend/components/quicksearch/quicksearch.ts:255 addValues (depth 6); src/frontend/components/quicksearch/quicksearch.ts:857 getShowActions (depth 6); src/frontend/components/quicksearch/quicksearch.ts:878 getEditActions (depth 6); src/frontend/components/quicksearch/quicksearch.ts:124 <callback> (depth 6); src/frontend/components/quicksearch/quicksearch.ts:125 <callback> (depth 6); src/frontend/components/quicksearch/quicksearch.ts:126 <callback> (depth 6); src/frontend/components/quicksearch/quicksearch.ts:137 <callback> (depth 6).

Effects: src/frontend/components/quicksearch/quicksearchData.ts:24 ipc requestMain(Main.READ_FOLDER, { path: folderPaths }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 13. Full edges/effects/conditions in JSON.

## click — event-696b9d5e05b43d1aac

[code] [src/frontend/components/quicksearch/QuickSearch.svelte:201](../../../../../src/frontend/components/quicksearch/QuickSearch.svelte#L201); (e) => selectQuicksearchValue(value, e.detail.ctrl). partial.

Conditions: src/frontend/components/quicksearch/QuickSearch.svelte:170 $quickSearchActive; src/frontend/components/quicksearch/QuickSearch.svelte:190 showValues && actualSearchText.length; src/frontend/components/quicksearch/QuickSearch.svelte:191 values.length.

Calls: src/frontend/components/quicksearch/quicksearch.ts:519 selectQuicksearchValue (depth 1).

Effects: src/frontend/components/quicksearch/quicksearch.ts:527 store-write src/frontend/stores.ts#focusMode ; src/frontend/components/quicksearch/quicksearch.ts:528 store-write src/frontend/stores.ts#quickSearchActive .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
