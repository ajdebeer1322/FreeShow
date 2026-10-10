# click/src_frontend_components_main_popups_createShow_WorshipTools.svelte (2)

## click — event-0b2b9ef6a1c55f3c87

[code] [src/frontend/components/main/popups/createShow/WorshipTools.svelte:222](../../../../../src/frontend/components/main/popups/createShow/WorshipTools.svelte#L222); () => selectAll(true). resolved-within-bound.

Conditions: src/frontend/components/main/popups/createShow/WorshipTools.svelte:193 step === "browser"; src/frontend/components/main/popups/createShow/WorshipTools.svelte:216 step === "pick".

Calls: src/frontend/components/main/popups/createShow/WorshipTools.svelte:105 selectAll (depth 1); src/frontend/components/main/popups/createShow/WorshipTools.svelte:107 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-12a196a153863fa84d

[code] [src/frontend/components/main/popups/createShow/WorshipTools.svelte:223](../../../../../src/frontend/components/main/popups/createShow/WorshipTools.svelte#L223); () => selectAll(false). resolved-within-bound.

Conditions: src/frontend/components/main/popups/createShow/WorshipTools.svelte:193 step === "browser"; src/frontend/components/main/popups/createShow/WorshipTools.svelte:216 step === "pick".

Calls: src/frontend/components/main/popups/createShow/WorshipTools.svelte:105 selectAll (depth 1); src/frontend/components/main/popups/createShow/WorshipTools.svelte:107 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-976fdfcb7ed53938d8

[code] [src/frontend/components/main/popups/createShow/WorshipTools.svelte:249](../../../../../src/frontend/components/main/popups/createShow/WorshipTools.svelte#L249); startImport. resolved-within-bound.

Conditions: src/frontend/components/main/popups/createShow/WorshipTools.svelte:193 step === "browser"; src/frontend/components/main/popups/createShow/WorshipTools.svelte:216 step === "pick"; src/frontend/components/main/popups/createShow/WorshipTools.svelte:131 !chosen.length.

Calls: src/frontend/components/main/popups/createShow/WorshipTools.svelte:130 startImport (depth 0); src/frontend/components/main/popups/createShow/WorshipTools.svelte:135 <callback> (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/main/popups/createShow/WorshipTools.svelte:141 ipc sendMain(Main.WORSHIPTOOLS_IMPORT, { songs: importing }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-812d40d0691152f3f5

[code] [src/frontend/components/main/popups/createShow/WorshipTools.svelte:266](../../../../../src/frontend/components/main/popups/createShow/WorshipTools.svelte#L266); () => activePopup.set(null). resolved-within-bound.

Conditions: src/frontend/components/main/popups/createShow/WorshipTools.svelte:193 step === "browser"; src/frontend/components/main/popups/createShow/WorshipTools.svelte:216 step === "pick"; src/frontend/components/main/popups/createShow/WorshipTools.svelte:265 finished.

Calls: no function target resolved.

Effects: src/frontend/components/main/popups/createShow/WorshipTools.svelte:266 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7a96fb64651ea47f88

[code] [src/frontend/components/main/popups/createShow/WorshipTools.svelte:270](../../../../../src/frontend/components/main/popups/createShow/WorshipTools.svelte#L270); cancelImport. resolved-within-bound.

Conditions: src/frontend/components/main/popups/createShow/WorshipTools.svelte:193 step === "browser"; src/frontend/components/main/popups/createShow/WorshipTools.svelte:216 step === "pick"; src/frontend/components/main/popups/createShow/WorshipTools.svelte:265 finished.

Calls: src/frontend/components/main/popups/createShow/WorshipTools.svelte:179 cancelImport (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/main/popups/createShow/WorshipTools.svelte:181 ipc sendMain(Main.WORSHIPTOOLS_CANCEL) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
