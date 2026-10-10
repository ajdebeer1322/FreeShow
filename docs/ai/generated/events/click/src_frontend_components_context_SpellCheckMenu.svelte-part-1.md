# click/src_frontend_components_context_SpellCheckMenu.svelte (1)

## click — event-08ce4cad6e10826256

[code] [src/frontend/components/context/SpellCheckMenu.svelte:27](../../../../../src/frontend/components/context/SpellCheckMenu.svelte#L27); () => fixSpelling(suggestion). resolved-within-bound.

Conditions: src/frontend/components/context/SpellCheckMenu.svelte:25 misspelled && suggestions.length.

Calls: src/frontend/components/context/SpellCheckMenu.svelte:19 fixSpelling (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 2).

Effects: src/frontend/components/context/SpellCheckMenu.svelte:20 ipc sendMain(Main.SPELLCHECK, { fixSpelling: word }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5e449bbd2a26c55503

[code] [src/frontend/components/context/SpellCheckMenu.svelte:39](../../../../../src/frontend/components/context/SpellCheckMenu.svelte#L39); addToDictionary. resolved-within-bound.

Conditions: src/frontend/components/context/SpellCheckMenu.svelte:25 misspelled && suggestions.length.

Calls: src/frontend/components/context/SpellCheckMenu.svelte:14 addToDictionary (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 1).

Effects: src/frontend/components/context/SpellCheckMenu.svelte:15 ipc sendMain(Main.SPELLCHECK, { addToDictionary: misspelled }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
