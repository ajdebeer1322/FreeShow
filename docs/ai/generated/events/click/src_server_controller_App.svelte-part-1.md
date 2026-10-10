# click/src_server_controller_App.svelte (1)

## click — event-88a8b9938a465436a6

[code] [src/server/controller/App.svelte:139](../../../../../src/server/controller/App.svelte#L139); () => sendAction("clear_painting"). resolved-within-bound.

Conditions: src/server/controller/App.svelte:121 draw; src/server/controller/App.svelte:138 tool === "Paint".

Calls: src/server/controller/App.svelte:47 sendAction (depth 1); src/server/controller/App.svelte:54 <callback> (depth 2).

Effects: src/server/controller/App.svelte:48 network socket.emit ; src/server/controller/App.svelte:48 ipc socket.emit("CONTROLLER", { channel: "ACTION", data: { id } }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-bf559022a85514d97c

[code] [src/server/controller/App.svelte:146](../../../../../src/server/controller/App.svelte#L146); () => sendAction("previous"). resolved-within-bound.

Conditions: src/server/controller/App.svelte:121 draw.

Calls: src/server/controller/App.svelte:47 sendAction (depth 1); src/server/controller/App.svelte:54 <callback> (depth 2).

Effects: src/server/controller/App.svelte:48 network socket.emit ; src/server/controller/App.svelte:48 ipc socket.emit("CONTROLLER", { channel: "ACTION", data: { id } }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0836aedf05b679f469

[code] [src/server/controller/App.svelte:149](../../../../../src/server/controller/App.svelte#L149); () => sendAction("next"). resolved-within-bound.

Conditions: src/server/controller/App.svelte:121 draw.

Calls: src/server/controller/App.svelte:47 sendAction (depth 1); src/server/controller/App.svelte:54 <callback> (depth 2).

Effects: src/server/controller/App.svelte:48 network socket.emit ; src/server/controller/App.svelte:48 ipc socket.emit("CONTROLLER", { channel: "ACTION", data: { id } }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-921e6d8e02cdee1f70

[code] [src/server/controller/App.svelte:154](../../../../../src/server/controller/App.svelte#L154); () => sendAction("clear"). resolved-within-bound.

Conditions: src/server/controller/App.svelte:121 draw.

Calls: src/server/controller/App.svelte:47 sendAction (depth 1); src/server/controller/App.svelte:54 <callback> (depth 2).

Effects: src/server/controller/App.svelte:48 network socket.emit ; src/server/controller/App.svelte:48 ipc socket.emit("CONTROLLER", { channel: "ACTION", data: { id } }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1dd350b1dec1567a06

[code] [src/server/controller/App.svelte:163](../../../../../src/server/controller/App.svelte#L163); () => (draw = !draw). resolved-within-bound.

Conditions: src/server/controller/App.svelte:161 windowHeight < 300.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a3ef548fb3a08919ac

[code] [src/server/controller/App.svelte:169](../../../../../src/server/controller/App.svelte#L169); () => (draw = false). resolved-within-bound.

Conditions: src/server/controller/App.svelte:161 windowHeight < 300.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
