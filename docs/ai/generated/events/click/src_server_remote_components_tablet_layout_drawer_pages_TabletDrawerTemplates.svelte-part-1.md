# click/src_server_remote_components_tablet_layout_drawer_pages_TabletDrawerTemplates.svelte (1)

## click — event-900b8e2d21f549f375

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerTemplates.svelte:73](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerTemplates.svelte#L73); () => clickTemplate(template.id). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerTemplates.svelte:68 templatesList.length; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerTemplates.svelte:69 sortedTemplates.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerTemplates.svelte:49 clickTemplate (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerTemplates.svelte:50 ipc send("API:set_template", { id: templateId }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
