# keyboard/src_frontend_components_drawer_pages_Shows.svelte (1)

## dynamic — event-b67c8b6a74c4472e26

[code] [src/frontend/components/drawer/pages/Shows.svelte:241](../../../../../src/frontend/components/drawer/pages/Shows.svelte#L241); keydown. resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Shows.svelte:133 e.target?.closest?.(".drawer_search"); src/frontend/components/drawer/pages/Shows.svelte:135 e.key === "ArrowDown" \|\| e.key === "ArrowUp"; src/frontend/components/drawer/pages/Shows.svelte:140 currentIndex < 0; src/frontend/components/drawer/pages/Shows.svelte:142 newIndex < 0 \|\| newIndex >= filteredShows.length; src/frontend/components/drawer/pages/Shows.svelte:152 e.target?.closest?.("input") \|\| e.target?.closest?.(".edit") \|\| (!e.ctrlKey && !e.metaKey) \|\| !filteredShows?.length; src/frontend/components/drawer/pages/Shows.svelte:153 $activeEdit.items.length; src/frontend/components/drawer/pages/Shows.svelte:156 e.key === "ArrowRight"; src/frontend/components/drawer/pages/Shows.svelte:157 !$activeShow \|\| ($activeShow.type !== undefined && $activeShow.type !== "show"); src/frontend/components/drawer/pages/Shows.svelte:160 currentIndex < filteredShows.length - 1; src/frontend/components/drawer/pages/Shows.svelte:162 e.key === "ArrowLeft"; src/frontend/components/drawer/pages/Shows.svelte:163 !$activeShow \|\| ($activeShow.type !== undefined && $activeShow.type !== "show"); src/frontend/components/drawer/pages/Shows.svelte:166 currentIndex > 0; src/frontend/components/drawer/pages/Shows.svelte:170 id; src/frontend/components/drawer/pages/Shows.svelte:171 $focusMode.

Calls: src/frontend/components/drawer/pages/Shows.svelte:132 keydown (depth 0); src/frontend/components/drawer/pages/Shows.svelte:138 <callback> (depth 1); src/frontend/components/drawer/pages/Shows.svelte:147 <callback> (depth 1); src/frontend/components/drawer/pages/Shows.svelte:159 <callback> (depth 1); src/frontend/components/drawer/pages/Shows.svelte:165 <callback> (depth 1).

Effects: src/frontend/components/drawer/pages/Shows.svelte:144 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/drawer/pages/Shows.svelte:171 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/drawer/pages/Shows.svelte:172 store-write src/frontend/stores.ts#activeShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
