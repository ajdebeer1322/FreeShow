# click/src_server_remote_components_tablet_layout_drawer_pages_TabletDrawerFunctions.svelte (1)

## click — event-76116a5a8a5bc56de4

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:101](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte#L101); () => runAction(action). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:95 $functionsSubTab === "actions"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:97 filteredActionsTags.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:14 runAction (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:15 ipc send("API:run_action", { id: action.id }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6fcad42f1d64ea3e95

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:151](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte#L151); () => playPauseTimer(timer.id). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:95 $functionsSubTab === "actions"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:136 $functionsSubTab === "timer"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:138 filteredTimersTags.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:45 playPauseTimer (depth 1); src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:46 <callback> (depth 2); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:48 ipc send("API:id_pause_timer", { id: timerId }) ; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:50 ipc send("API:id_start_timer", { id: timerId }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7b8a9c3752d2889380

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:183](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte#L183); () => resetTimer(timer.id). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:95 $functionsSubTab === "actions"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:136 $functionsSubTab === "timer"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:138 filteredTimersTags.length; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:182 timer.type === "counter".

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:54 resetTimer (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:55 ipc send("API:id_stop_timer", { id: timerId }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-cfcf16dd004360e984

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:210](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte#L210); () => resetVariable(variable). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:95 $functionsSubTab === "actions"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:136 $functionsSubTab === "timer"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:196 $functionsSubTab === "variables"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:198 filteredVariablesTags.length; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:201 numberVariables.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:88 resetVariable (depth 1); src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:68 updateVariable (depth 2); src/server/remote/util/socket.ts:42 send (depth 3).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:69 ipc send("API:change_variable", { id, key, value }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3742fe3f709c6d3c08

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:225](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte#L225); () => decrementVariable(variable). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:95 $functionsSubTab === "actions"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:136 $functionsSubTab === "timer"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:196 $functionsSubTab === "variables"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:198 filteredVariablesTags.length; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:201 numberVariables.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:80 decrementVariable (depth 1); src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:68 updateVariable (depth 2); src/server/remote/util/socket.ts:42 send (depth 3).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:69 ipc send("API:change_variable", { id, key, value }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8e6d834554c2c35fad

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:228](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte#L228); () => incrementVariable(variable). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:95 $functionsSubTab === "actions"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:136 $functionsSubTab === "timer"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:196 $functionsSubTab === "variables"; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:198 filteredVariablesTags.length; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:201 numberVariables.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:72 incrementVariable (depth 1); src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:68 updateVariable (depth 2); src/server/remote/util/socket.ts:42 send (depth 3).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerFunctions.svelte:69 ipc send("API:change_variable", { id, key, value }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
