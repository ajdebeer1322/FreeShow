# click/src_frontend_components_drawer_media_Canva.svelte (1)

## click — event-0b721d73911fe8851f

[code] [src/frontend/components/drawer/media/Canva.svelte:94](../../../../../src/frontend/components/drawer/media/Canva.svelte#L94); handleConnect. resolved-within-bound.

Conditions: src/frontend/components/drawer/media/Canva.svelte:74 $providerConnections.canva.

Calls: src/frontend/components/drawer/media/Canva.svelte:26 handleConnect (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/drawer/media/Canva.svelte:27 ipc sendMain(Main.PROVIDER_LOAD_SERVICES, { providerId: "canva", data: { canvaClientId, canvaClientSecret } }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
