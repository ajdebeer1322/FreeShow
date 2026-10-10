# automatic/src_frontend_components_show_ProjectContentList.svelte (1)

## setTimeout — event-eb18a0c517203feab6

[code] [src/frontend/components/show/ProjectContentList.svelte:41](../../../../../src/frontend/components/show/ProjectContentList.svelte#L41); () => { if (!scrollElem) return const projectElements = &#91;...(scrollElem.querySelectorAll(".listSection") \|\| &#91;&#93;)&#93;.map((a) => a?.querySelectorAll("button") \|\| &#91;&#93;) const flattened = p. partial.

Conditions: src/frontend/components/show/ProjectContentList.svelte:39 scrollElem; src/frontend/components/show/ProjectContentList.svelte:42 !scrollElem; src/frontend/components/show/ProjectContentList.svelte:46 !activeProjectItem.

Calls: src/frontend/components/show/ProjectContentList.svelte:41 <callback> (depth 0); src/frontend/components/show/ProjectContentList.svelte:43 <callback> (depth 1); src/frontend/components/show/ProjectContentList.svelte:44 <callback> (depth 1); src/frontend/components/show/ProjectContentList.svelte:45 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-4feeac6a4f6751ed9b

[code] [src/frontend/components/show/ProjectContentList.svelte:190](../../../../../src/frontend/components/show/ProjectContentList.svelte#L190); () => { today = new Date() }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/ProjectContentList.svelte:190 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
