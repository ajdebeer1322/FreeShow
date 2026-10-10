# keyboard/src_frontend_components_show_Projects.svelte (1)

## dynamic — event-81daf662269e68a836

[code] [src/frontend/components/show/Projects.svelte:354](../../../../../src/frontend/components/show/Projects.svelte#L354); checkInput. partial.

Conditions: src/frontend/components/helpers/showActions.ts:91 e.target?.closest?.(".edit") \|\| e.ctrlKey \|\| e.metaKey; src/frontend/components/helpers/showActions.ts:94 !&#91;"ArrowDown", "ArrowUp"&#93;.includes(e.key); src/frontend/components/helpers/showActions.ts:95 get(activeProject) === null.

Calls: src/frontend/components/helpers/showActions.ts:90 checkInput (depth 0); src/frontend/components/helpers/showActions.ts:103 selectProjectShow (depth 1); src/frontend/components/helpers/showActions.ts:113 <callback> (depth 2); src/frontend/components/helpers/setShow.ts:229 loadShows (depth 3); src/frontend/components/helpers/setShow.ts:233 <callback> (depth 4); src/frontend/components/helpers/setShow.ts:235 <callback> (depth 5); src/frontend/components/helpers/setShow.ts:175 loadSingleShow (depth 5); src/frontend/components/helpers/setShow.ts:184 <callback> (depth 6); src/frontend/components/helpers/setShow.ts:247 <callback> (depth 4); src/frontend/components/helpers/showActions.ts:125 swichProjectItem (depth 3); src/frontend/components/helpers/showActions.ts:136 <callback> (depth 4); src/frontend/components/helpers/showActions.ts:145 <callback> (depth 4).

Effects: src/frontend/components/helpers/showActions.ts:121 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/helpers/showActions.ts:122 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/setShow.ts:235 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/setShow.ts:186 ipc requestMain(Main.SHOW, { name: get(shows)&#91;id&#93;?.name, id }) ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/showActions.ts:136 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 5. Full edges/effects/conditions in JSON.

## dynamic — event-5b9e11cb19e431a3f3

[code] [src/frontend/components/show/Projects.svelte:354](../../../../../src/frontend/components/show/Projects.svelte#L354); handleKeydown. resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:346 addMenuOpen && e.key === "Escape".

Calls: src/frontend/components/show/Projects.svelte:345 handleKeydown (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
