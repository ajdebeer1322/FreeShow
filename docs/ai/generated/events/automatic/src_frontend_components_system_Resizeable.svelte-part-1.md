# automatic/src_frontend_components_system_Resizeable.svelte (1)

## setTimeout — event-ed4ea4034e47f36f42

[code] [src/frontend/components/system/Resizeable.svelte:28](../../../../../src/frontend/components/system/Resizeable.svelte#L28); () => { width = $resized&#91;id&#93; ?? defaultWidth // reset to default if closed on startup if ((id === "leftPanel" \|\| id === "rightPanel") && width <= handleWidth) width = defaultWidth. resolved-within-bound.

Conditions: src/frontend/components/system/Resizeable.svelte:31 (id === "leftPanel" \|\| id === "rightPanel") && width <= handleWidth.

Calls: src/frontend/components/system/Resizeable.svelte:28 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
