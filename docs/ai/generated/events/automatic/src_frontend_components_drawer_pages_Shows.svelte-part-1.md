# automatic/src_frontend_components_drawer_pages_Shows.svelte (1)

## setTimeout — event-62fd70716e64a176bd

[code] [src/frontend/components/drawer/pages/Shows.svelte:65](../../../../../src/frontend/components/drawer/pages/Shows.svelte#L65); () => { isTyping = null search() }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/pages/Shows.svelte:65 <callback> (depth 0); src/frontend/components/drawer/pages/Shows.svelte:75 search (depth 1); src/frontend/utils/search.ts:87 showSearch (depth 2); src/frontend/utils/search.ts:80 createSearchContext (depth 3); src/frontend/utils/search.ts:65 parseQuery (depth 4); src/frontend/utils/search.ts:48 tokenize (depth 5); src/frontend/utils/search.ts:8 formatSearch (depth 5); src/frontend/utils/search.ts:332 removeShortWords (depth 5); src/frontend/utils/search.ts:335 <callback> (depth 6); src/frontend/utils/search.ts:93 <callback> (depth 3); src/frontend/utils/search.ts:114 showSearchFilter (depth 4); src/frontend/utils/search.ts:35 getFormattedTitle (depth 5); src/frontend/utils/search.ts:286 findBoundaryPhrase (depth 5); src/frontend/utils/search.ts:23 getFormattedContent (depth 5); src/frontend/utils/search.ts:274 hasWordPrefix (depth 5); src/frontend/utils/search.ts:227 strictScore (depth 5).

Effects: src/frontend/components/drawer/pages/Shows.svelte:117 store-write src/frontend/stores.ts#activeShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 2. Full edges/effects/conditions in JSON.

## setTimeout — event-284bb8017cc7e9afdd

[code] [src/frontend/components/drawer/pages/Shows.svelte:106](../../../../../src/frontend/components/drawer/pages/Shows.svelte#L106); () => document.querySelector(".drawer svelte-virtual-list-viewport")?.scrollTo(0, 0). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Shows.svelte:106 queryChanged; src/frontend/components/drawer/pages/Shows.svelte:88 isSearching.

Calls: src/frontend/components/drawer/pages/Shows.svelte:106 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-41cee01a013935e534

[code] [src/frontend/components/drawer/pages/Shows.svelte:147](../../../../../src/frontend/components/drawer/pages/Shows.svelte#L147); () => (showLoading = false). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Shows.svelte:135 e.key === "ArrowDown" \|\| e.key === "ArrowUp"; src/frontend/components/drawer/pages/Shows.svelte:133 e.target?.closest?.(".drawer_search").

Calls: src/frontend/components/drawer/pages/Shows.svelte:147 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
