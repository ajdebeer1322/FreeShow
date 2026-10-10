# click/src_server_remote_components_pages_Projects.svelte (1)

## click — event-626ab900ff5bccc613

[code] [src/server/remote/components/pages/Projects.svelte:158](../../../../../src/server/remote/components/pages/Projects.svelte#L158); () => toggleFolder(item.id). resolved-within-bound.

Conditions: src/server/remote/components/pages/Projects.svelte:141 tree.length; src/server/remote/components/pages/Projects.svelte:146 item.id === "ROOT"; src/server/remote/components/pages/Projects.svelte:155 shown; src/server/remote/components/pages/Projects.svelte:157 item.type === "folder".

Calls: src/server/remote/components/pages/Projects.svelte:106 toggleFolder (depth 1); src/server/remote/util/stores.ts:202 _set (depth 2); src/server/remote/components/pages/Projects.svelte:110 <callback> (depth 2).

Effects: src/server/remote/components/pages/Projects.svelte:108 store-write src/server/remote/util/stores.ts#openedFolders ; src/server/remote/components/pages/Projects.svelte:113 store-write src/server/remote/util/stores.ts#openedFolders .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-4d712960839eede992

[code] [src/server/remote/components/pages/Projects.svelte:163](../../../../../src/server/remote/components/pages/Projects.svelte#L163); () => openProject(item.id). partial.

Conditions: src/server/remote/components/pages/Projects.svelte:141 tree.length; src/server/remote/components/pages/Projects.svelte:146 item.id === "ROOT"; src/server/remote/components/pages/Projects.svelte:155 shown; src/server/remote/components/pages/Projects.svelte:157 item.type === "folder".

Calls: src/server/remote/components/pages/Projects.svelte:117 openProject (depth 1); src/server/remote/components/pages/Projects.svelte:118 <callback> (depth 2); src/server/remote/util/stores.ts:202 _set (depth 2).

Effects: src/server/remote/components/pages/Projects.svelte:120 store-write src/server/remote/util/stores.ts#activeProject .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ec775e0823209e7e66

[code] [src/server/remote/components/pages/Projects.svelte:181](../../../../../src/server/remote/components/pages/Projects.svelte#L181); createProject. partial.

Conditions: src/server/remote/components/pages/Projects.svelte:127 !name.

Calls: src/server/remote/components/pages/Projects.svelte:125 createProject (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Projects.svelte:132 store-write src/server/remote/util/stores.ts#projectsOpened ; src/server/remote/components/pages/Projects.svelte:133 store-write src/server/remote/util/stores.ts#project ; src/server/remote/components/pages/Projects.svelte:130 ipc send("API:create_project", { name, id: projectId }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
