# automatic/src_frontend_components_main_popups_createShow_WorshipTools.svelte (1)

## setTimeout — event-c5e3074d0625860705

[code] [src/frontend/components/main/popups/createShow/WorshipTools.svelte:53](../../../../../src/frontend/components/main/popups/createShow/WorshipTools.svelte#L53); syncBounds. partial.

Conditions: src/frontend/components/main/popups/createShow/WorshipTools.svelte:51 step === "browser"; src/frontend/components/main/popups/createShow/WorshipTools.svelte:50 opened; src/frontend/components/main/popups/createShow/WorshipTools.svelte:37 !opened \|\| step !== "browser" \|\| !placeholder; src/frontend/components/main/popups/createShow/WorshipTools.svelte:39 rect.width < 50 \|\| rect.height < 50; src/frontend/components/main/popups/createShow/WorshipTools.svelte:43 signature === lastBounds.

Calls: src/frontend/components/main/popups/createShow/WorshipTools.svelte:36 syncBounds (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/main/popups/createShow/WorshipTools.svelte:46 ipc sendMain(Main.WORSHIPTOOLS_VIEW, { action: "bounds", bounds }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-79f0c5584c6f10ca88

[code] [src/frontend/components/main/popups/createShow/WorshipTools.svelte:69](../../../../../src/frontend/components/main/popups/createShow/WorshipTools.svelte#L69); () => { if (!placeholder) return const rect = placeholder.getBoundingClientRect() sendMain(Main.WORSHIPTOOLS_VIEW, { action: "open", bounds: { x: rect.x, y: rect.y, width: rect.wid. partial.

Conditions: src/frontend/components/main/popups/createShow/WorshipTools.svelte:70 !placeholder.

Calls: src/frontend/components/main/popups/createShow/WorshipTools.svelte:69 <callback> (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/main/popups/createShow/WorshipTools.svelte:72 ipc sendMain(Main.WORSHIPTOOLS_VIEW, { action: "open", bounds: { x: rect.x, y: rect.y, width: rect.width, height: rect.height } }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-7f75575dc3b06ba61c

[code] [src/frontend/components/main/popups/createShow/WorshipTools.svelte:77](../../../../../src/frontend/components/main/popups/createShow/WorshipTools.svelte#L77); syncBounds. partial.

Conditions: src/frontend/components/main/popups/createShow/WorshipTools.svelte:37 !opened \|\| step !== "browser" \|\| !placeholder; src/frontend/components/main/popups/createShow/WorshipTools.svelte:39 rect.width < 50 \|\| rect.height < 50; src/frontend/components/main/popups/createShow/WorshipTools.svelte:43 signature === lastBounds.

Calls: src/frontend/components/main/popups/createShow/WorshipTools.svelte:36 syncBounds (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/main/popups/createShow/WorshipTools.svelte:46 ipc sendMain(Main.WORSHIPTOOLS_VIEW, { action: "bounds", bounds }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
