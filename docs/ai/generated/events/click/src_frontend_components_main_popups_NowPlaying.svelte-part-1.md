# click/src_frontend_components_main_popups_NowPlaying.svelte (1)

## click — event-5ef5316bd02abcfaa9

[code] [src/frontend/components/main/popups/NowPlaying.svelte:73](../../../../../src/frontend/components/main/popups/NowPlaying.svelte#L73); openFile. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/NowPlaying.svelte:10 openFile (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/main/popups/NowPlaying.svelte:11 ipc sendMain(Main.OPEN_NOW_PLAYING) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d5b2add6bb43e04c85

[code] [src/frontend/components/main/popups/NowPlaying.svelte:85](../../../../../src/frontend/components/main/popups/NowPlaying.svelte#L85); () => addValueAtCaret('{${key}}'). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/NowPlaying.svelte:54 addValueAtCaret (depth 1); src/frontend/components/main/popups/NowPlaying.svelte:14 updateSpecial (depth 2); src/frontend/components/main/popups/NowPlaying.svelte:15 <callback> (depth 3).

Effects: src/frontend/components/main/popups/NowPlaying.svelte:15 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
