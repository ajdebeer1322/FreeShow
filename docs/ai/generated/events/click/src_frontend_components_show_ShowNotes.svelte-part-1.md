# click/src_frontend_components_show_ShowNotes.svelte (1)

## click — event-609470dc9f5638879b

[code] [src/frontend/components/show/ShowNotes.svelte:67](../../../../../src/frontend/components/show/ShowNotes.svelte#L67); () => ($showNotesActive = false). resolved-within-bound.

Conditions: src/frontend/components/show/ShowNotes.svelte:61 $showNotesActive.

Calls: no function target resolved.

Effects: src/frontend/components/show/ShowNotes.svelte:67 store-write src/frontend/stores.ts#showNotesActive .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-31e4e92d970f967cf2

[code] [src/frontend/components/show/ShowNotes.svelte:72](../../../../../src/frontend/components/show/ShowNotes.svelte#L72); (e) => notesClick(e). resolved-within-bound.

Conditions: src/frontend/components/show/ShowNotes.svelte:61 $showNotesActive; src/frontend/components/show/ShowNotes.svelte:71 note.

Calls: src/frontend/components/show/ShowNotes.svelte:46 notesClick (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/components/show/ShowNotes.svelte:54 store-write src/frontend/stores.ts#showNotesActive ; src/frontend/components/show/ShowNotes.svelte:50 ipc sendMain(Main.URL, url) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
