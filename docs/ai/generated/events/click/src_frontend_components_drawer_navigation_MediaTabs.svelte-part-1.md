# click/src_frontend_components_drawer_navigation_MediaTabs.svelte (1)

## click — event-14831a417f6f4485d5

[code] [src/frontend/components/drawer/navigation/MediaTabs.svelte:105](../../../../../src/frontend/components/drawer/navigation/MediaTabs.svelte#L105); addFolder. resolved-within-bound.

Conditions: src/frontend/components/drawer/navigation/MediaTabs.svelte:104 !curriculumProviders.length.

Calls: src/frontend/components/drawer/navigation/MediaTabs.svelte:83 addFolder (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/drawer/navigation/MediaTabs.svelte:84 ipc sendMain(Main.OPEN_FOLDER, { channel: PICK_ID }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1f2460755f2da91723

[code] [src/frontend/components/drawer/navigation/MediaTabs.svelte:112](../../../../../src/frontend/components/drawer/navigation/MediaTabs.svelte#L112); addFolder. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/navigation/MediaTabs.svelte:83 addFolder (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/drawer/navigation/MediaTabs.svelte:84 ipc sendMain(Main.OPEN_FOLDER, { channel: PICK_ID }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
