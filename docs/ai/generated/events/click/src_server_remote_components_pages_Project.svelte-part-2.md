# click/src_server_remote_components_pages_Project.svelte (2)

## click — event-6bfb3425e9f818b564

[code] [src/server/remote/components/pages/Project.svelte:184](../../../../../src/server/remote/components/pages/Project.svelte#L184); (e) => { _set("active", show) _set("activeTab", "show") send("SHOW", e.detail) }. resolved-within-bound.

Conditions: src/server/remote/components/pages/Project.svelte:99 $activeProject && !$projectsOpened; src/server/remote/components/pages/Project.svelte:101 editProject; src/server/remote/components/pages/Project.svelte:142 projectSections.length; src/server/remote/components/pages/Project.svelte:158 isMediaType(showType); src/server/remote/components/pages/Project.svelte:175 showType && showType !== "show"; src/server/remote/components/pages/Project.svelte:180 showData.

Calls: src/server/remote/util/stores.ts:202 _set (depth 1); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-fe64ce4810029796f8

[code] [src/server/remote/components/pages/Project.svelte:203](../../../../../src/server/remote/components/pages/Project.svelte#L203); () => { project.set($activeProject.id \|\| "") send("API:add_to_project", { projectId: $activeProject.id, id: $activeShow?.id }) }. resolved-within-bound.

Conditions: src/server/remote/components/pages/Project.svelte:99 $activeProject && !$projectsOpened; src/server/remote/components/pages/Project.svelte:101 editProject; src/server/remote/components/pages/Project.svelte:142 projectSections.length; src/server/remote/components/pages/Project.svelte:201 canAddActiveShow.

Calls: src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Project.svelte:204 store-write src/server/remote/util/stores.ts#project ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a8a8076dfeda0d28c7

[code] [src/server/remote/components/pages/Project.svelte:221](../../../../../src/server/remote/components/pages/Project.svelte#L221); () => { project.set($activeProject.id \|\| "") send("API:add_to_project", { projectId: $activeProject.id, id: $activeShow?.id }) }. resolved-within-bound.

Conditions: src/server/remote/components/pages/Project.svelte:99 $activeProject && !$projectsOpened; src/server/remote/components/pages/Project.svelte:101 editProject; src/server/remote/components/pages/Project.svelte:142 projectSections.length; src/server/remote/components/pages/Project.svelte:219 canAddActiveShow.

Calls: src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Project.svelte:222 store-write src/server/remote/util/stores.ts#project ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-85a32edc3f28bc1629

[code] [src/server/remote/components/pages/Project.svelte:237](../../../../../src/server/remote/components/pages/Project.svelte#L237); () => (editProject = !editProject). resolved-within-bound.

Conditions: src/server/remote/components/pages/Project.svelte:99 $activeProject && !$projectsOpened.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
