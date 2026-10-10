# action/send_midi (1)

## send_midi — event-f31254cbde0b319175

[code] [src/frontend/components/actions/api.ts:352](../../../../../src/frontend/components/actions/api.ts#L352); (data: API_midi) => sendMidi(data). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:352 send_midi (depth 0); src/frontend/components/helpers/showActions.ts:759 sendMidi (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/components/helpers/showActions.ts:760 ipc sendMain(Main.SEND_MIDI, data) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
