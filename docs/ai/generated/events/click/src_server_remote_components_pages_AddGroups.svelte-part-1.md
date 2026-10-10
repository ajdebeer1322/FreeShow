# click/src_server_remote_components_pages_AddGroups.svelte (1)

## click — event-1897da0009877a17eb

[code] [src/server/remote/components/pages/AddGroups.svelte:22](../../../../../src/server/remote/components/pages/AddGroups.svelte#L22); () => addGroup(group). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/remote/components/pages/AddGroups.svelte:14 addGroup (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/pages/AddGroups.svelte:15 ipc send("API:add_group", { showId: show.id, groupId: group.id }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
