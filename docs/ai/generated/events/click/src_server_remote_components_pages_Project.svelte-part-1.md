# click/src_server_remote_components_pages_Project.svelte (1)

## click — event-fe83fc09493a9e6953

[code] [src/server/remote/components/pages/Project.svelte:104](../../../../../src/server/remote/components/pages/Project.svelte#L104); () => (editProject = false). resolved-within-bound.

Conditions: src/server/remote/components/pages/Project.svelte:99 $activeProject && !$projectsOpened; src/server/remote/components/pages/Project.svelte:101 editProject.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8a06b069edb7f7a014

[code] [src/server/remote/components/pages/Project.svelte:110](../../../../../src/server/remote/components/pages/Project.svelte#L110); renameProject. partial.

Conditions: src/server/remote/components/pages/Project.svelte:99 $activeProject && !$projectsOpened; src/server/remote/components/pages/Project.svelte:101 editProject; src/server/remote/components/pages/Project.svelte:74 !name.

Calls: src/server/remote/components/pages/Project.svelte:72 renameProject (depth 0); src/server/remote/util/socket.ts:42 send (depth 1); src/server/remote/components/pages/Project.svelte:77 <callback> (depth 1).

Effects: src/server/remote/components/pages/Project.svelte:76 ipc send("API:rename_project", { id: $activeProject?.id, name }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) ; src/server/remote/components/pages/Project.svelte:77 store-write src/server/remote/util/stores.ts#activeProject .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-fad3870079d5b75521

[code] [src/server/remote/components/pages/Project.svelte:114](../../../../../src/server/remote/components/pages/Project.svelte#L114); deleteProject. partial.

Conditions: src/server/remote/components/pages/Project.svelte:99 $activeProject && !$projectsOpened; src/server/remote/components/pages/Project.svelte:101 editProject; src/server/remote/components/pages/Project.svelte:82 !confirm("Are you sure you want to delete this project?").

Calls: src/server/remote/components/pages/Project.svelte:81 deleteProject (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Project.svelte:85 store-write src/server/remote/util/stores.ts#project ; src/server/remote/components/pages/Project.svelte:86 store-write src/server/remote/util/stores.ts#activeProject ; src/server/remote/components/pages/Project.svelte:84 ipc send("API:delete_project", { id: $activeProject?.id }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8800726f351ca1f838

[code] [src/server/remote/components/pages/Project.svelte:127](../../../../../src/server/remote/components/pages/Project.svelte#L127); () => removeProjectItem(i). resolved-within-bound.

Conditions: src/server/remote/components/pages/Project.svelte:99 $activeProject && !$projectsOpened; src/server/remote/components/pages/Project.svelte:101 editProject.

Calls: src/server/remote/components/pages/Project.svelte:90 removeProjectItem (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/pages/Project.svelte:94 store-write src/server/remote/util/stores.ts#project ; src/server/remote/components/pages/Project.svelte:95 ipc send("API:remove_project_item", { id: projectId, index }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1ddafef6f46229a756

[code] [src/server/remote/components/pages/Project.svelte:136](../../../../../src/server/remote/components/pages/Project.svelte#L136); () => _set("projectsOpened", true). resolved-within-bound.

Conditions: src/server/remote/components/pages/Project.svelte:99 $activeProject && !$projectsOpened; src/server/remote/components/pages/Project.svelte:101 editProject.

Calls: src/server/remote/util/stores.ts:202 _set (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-924cc8deb545c859bb

[code] [src/server/remote/components/pages/Project.svelte:160](../../../../../src/server/remote/components/pages/Project.svelte#L160); () => { _set("active", show) _set("activeTab", "show") if (showId && needsThumbnail(showType) && !$mediaCache&#91;showId&#93;) send("API:get_thumbnail", { path: showId }) }. resolved-within-bound.

Conditions: src/server/remote/components/pages/Project.svelte:99 $activeProject && !$projectsOpened; src/server/remote/components/pages/Project.svelte:101 editProject; src/server/remote/components/pages/Project.svelte:142 projectSections.length; src/server/remote/components/pages/Project.svelte:158 isMediaType(showType).

Calls: src/server/remote/util/stores.ts:202 _set (depth 1); src/server/remote/components/pages/Project.svelte:42 needsThumbnail (depth 1); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
