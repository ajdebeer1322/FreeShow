# automatic/src_frontend_components_show_Projects.svelte (1)

## setTimeout — event-7084485b5e29f829dc

[code] [src/frontend/components/show/Projects.svelte:117](../../../../../src/frontend/components/show/Projects.svelte#L117); () => { if (!listScrollElem) return const projectElements = &#91;...(listScrollElem.querySelector(".fullTree")?.querySelectorAll("button") \|\| &#91;&#93;)&#93; const activeProject = projectElements. partial.

Conditions: src/frontend/components/show/Projects.svelte:115 listScrollElem; src/frontend/components/show/Projects.svelte:118 !listScrollElem; src/frontend/components/show/Projects.svelte:121 !activeProject.

Calls: src/frontend/components/show/Projects.svelte:117 <callback> (depth 0); src/frontend/components/show/Projects.svelte:120 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-e33293f7bbc06cce63

[code] [src/frontend/components/show/Projects.svelte:180](../../../../../src/frontend/components/show/Projects.svelte#L180); () => activeRename.set("project_" + projectId). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/Projects.svelte:180 <callback> (depth 0).

Effects: src/frontend/components/show/Projects.svelte:180 store-write src/frontend/stores.ts#activeRename .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
