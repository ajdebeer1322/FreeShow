# click/src_frontend_components_main_popups_Alert.svelte (1)

## click — event-a67c1d0786e50b8922

[code] [src/frontend/components/main/popups/Alert.svelte:39](../../../../../src/frontend/components/main/popups/Alert.svelte#L39); click. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Alert.svelte:33 msg === "actions.closing"; src/frontend/components/main/popups/Alert.svelte:23 e.target.closest("a#bible-converter").

Calls: src/frontend/components/main/popups/Alert.svelte:22 click (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/main/popups/Alert.svelte:24 ipc sendMain(Main.URL, "https://github.com/vassbo/bible-converter") ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-da24c75fbb4b65c55c

[code] [src/frontend/components/main/popups/Alert.svelte:56](../../../../../src/frontend/components/main/popups/Alert.svelte#L56); close. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Alert.svelte:33 msg === "actions.closing".

Calls: src/frontend/components/main/popups/Alert.svelte:28 close (depth 0).

Effects: src/frontend/components/main/popups/Alert.svelte:29 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
