# click/src_frontend_components_main_popups_ImportScripture.svelte (1)

## click — event-a2872bc920169a2bee

[code] [src/frontend/components/main/popups/ImportScripture.svelte:116](../../../../../src/frontend/components/main/popups/ImportScripture.svelte#L116); () => (importType = ""). resolved-within-bound.

Conditions: src/frontend/components/main/popups/ImportScripture.svelte:115 importType.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6a988a6aaed5956cc0

[code] [src/frontend/components/main/popups/ImportScripture.svelte:161](../../../../../src/frontend/components/main/popups/ImportScripture.svelte#L161); () => importBible(localBible.path). resolved-within-bound.

Conditions: src/frontend/components/main/popups/ImportScripture.svelte:119 importType === "api"; src/frontend/components/main/popups/ImportScripture.svelte:157 importType === "local"; src/frontend/components/main/popups/ImportScripture.svelte:158 localBibles.length.

Calls: src/frontend/components/main/popups/ImportScripture.svelte:110 importBible (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/components/main/popups/ImportScripture.svelte:111 ipc sendMain(Main.IMPORT_FILES, { id: "BIBLE", paths: &#91;path&#93; }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-42c1e5ffaa3078ab22

[code] [src/frontend/components/main/popups/ImportScripture.svelte:184](../../../../../src/frontend/components/main/popups/ImportScripture.svelte#L184); () => sendMain(Main.IMPORT, { channel: "BIBLE", format: { name: "Bible", extensions: &#91;"xml", "xmm", "json", "fsb"&#93; } }). resolved-within-bound.

Conditions: src/frontend/components/main/popups/ImportScripture.svelte:119 importType === "api"; src/frontend/components/main/popups/ImportScripture.svelte:157 importType === "local".

Calls: src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f25c5bb615cc557fb4

[code] [src/frontend/components/main/popups/ImportScripture.svelte:188](../../../../../src/frontend/components/main/popups/ImportScripture.svelte#L188); (e) => (importType = e.detail). resolved-within-bound.

Conditions: src/frontend/components/main/popups/ImportScripture.svelte:119 importType === "api"; src/frontend/components/main/popups/ImportScripture.svelte:157 importType === "local".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
