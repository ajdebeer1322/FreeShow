# automatic/src_server_remote_components_tablet_layout_drawer_Resizeable.svelte (1)

## setTimeout — event-63ad9685a940ec9d2d

[code] [src/server/remote/components/tablet/layout/drawer/Resizeable.svelte:23](../../../../../src/server/remote/components/tablet/layout/drawer/Resizeable.svelte#L23); () => { width = $resized&#91;id&#93; ?? DEFAULT_WIDTH // reset to default if closed on startup if ((id === "leftPanel" \|\| id === "rightPanel") && width <= handleWidth) width = DEFAULT_WIDT. resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/Resizeable.svelte:26 (id === "leftPanel" \|\| id === "rightPanel") && width <= handleWidth.

Calls: src/server/remote/components/tablet/layout/drawer/Resizeable.svelte:23 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
