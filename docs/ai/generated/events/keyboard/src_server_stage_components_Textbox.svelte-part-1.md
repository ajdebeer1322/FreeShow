# keyboard/src_server_stage_components_Textbox.svelte (1)

## dynamic — event-1da586a40c589ade62

[code] [src/server/stage/components/Textbox.svelte:491](../../../../../src/server/stage/components/Textbox.svelte#L491); handleKeyDown. resolved-within-bound.

Conditions: src/server/stage/components/Textbox.svelte:443 e.key === "Enter" \|\| e.key === " ".

Calls: src/server/stage/components/Textbox.svelte:442 handleKeyDown (depth 0); src/server/stage/components/Textbox.svelte:307 press (depth 1); src/server/stage/util/socket.ts:26 send (depth 2).

Effects: src/server/stage/components/Textbox.svelte:309 ipc send("RUN_ACTION", { id: item.button.press }) ; src/server/stage/util/socket.ts:26 network socket.emit ; src/server/stage/util/socket.ts:26 ipc socket.emit("STAGE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-6a80ea0935418feaa6

[code] [src/server/stage/components/Textbox.svelte:492](../../../../../src/server/stage/components/Textbox.svelte#L492); handleKeyUp. resolved-within-bound.

Conditions: src/server/stage/components/Textbox.svelte:450 e.key === "Enter" \|\| e.key === " ".

Calls: src/server/stage/components/Textbox.svelte:449 handleKeyUp (depth 0); src/server/stage/components/Textbox.svelte:312 release (depth 1); src/server/stage/util/socket.ts:26 send (depth 2).

Effects: src/server/stage/components/Textbox.svelte:314 ipc send("RUN_ACTION", { id: item.button.release }) ; src/server/stage/util/socket.ts:26 network socket.emit ; src/server/stage/util/socket.ts:26 ipc socket.emit("STAGE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
