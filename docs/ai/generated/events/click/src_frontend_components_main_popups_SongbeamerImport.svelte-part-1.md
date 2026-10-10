# click/src_frontend_components_main_popups_SongbeamerImport.svelte (1)

## click — event-293608ad7fb56f88aa

[code] [src/frontend/components/main/popups/SongbeamerImport.svelte:47](../../../../../src/frontend/components/main/popups/SongbeamerImport.svelte#L47); () => (selectedTranslationMethod = method). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5ce0757fbc012e3fbb

[code] [src/frontend/components/main/popups/SongbeamerImport.svelte:59](../../../../../src/frontend/components/main/popups/SongbeamerImport.svelte#L59); importListener. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/SongbeamerImport.svelte:31 importListener (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/main/popups/SongbeamerImport.svelte:37 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/SongbeamerImport.svelte:32 ipc sendMain(Main.IMPORT, { channel: "songbeamer", format: { name: "Songbeamer", extensions: &#91;"sng"&#93; }, settings: { encoding: selectedEncoding, category: showCategory, translation: sel ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
