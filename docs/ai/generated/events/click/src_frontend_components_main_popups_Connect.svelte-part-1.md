# click/src_frontend_components_main_popups_Connect.svelte (1)

## click — event-c8797f8d59bfd77d36

[code] [src/frontend/components/main/popups/Connect.svelte:144](../../../../../src/frontend/components/main/popups/Connect.svelte#L144); () => setRemoteId(). partial.

Conditions: src/frontend/components/main/popups/Connect.svelte:143 remoteController.

Calls: src/frontend/components/main/popups/Connect.svelte:26 setRemoteId (depth 1); src/frontend/utils/remoteController.ts:58 stopRemoteController (depth 2); src/frontend/components/main/popups/Connect.svelte:32 <callback> (depth 2); src/frontend/utils/remoteController.ts:19 startRemoteController (depth 2); src/frontend/utils/remoteController.ts:36 <callback> (depth 3); src/frontend/utils/remoteController.ts:40 <callback> (depth 3); src/frontend/utils/remoteController.ts:48 <callback> (depth 4); src/frontend/utils/remoteController.ts:53 <callback> (depth 4).

Effects: src/frontend/components/main/popups/Connect.svelte:32 store-write src/frontend/stores.ts#special ; src/frontend/utils/remoteController.ts:32 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/remoteController.ts:33 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/remoteController.ts:36 store-write src/frontend/stores.ts#special ; src/frontend/utils/remoteController.ts:53 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 13; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ced714887c4962dcaf

[code] [src/frontend/components/main/popups/Connect.svelte:146](../../../../../src/frontend/components/main/popups/Connect.svelte#L146); () => (options = !options). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Connect.svelte:143 remoteController.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-2eda5ade2adaac6dc3

[code] [src/frontend/components/main/popups/Connect.svelte:148](../../../../../src/frontend/components/main/popups/Connect.svelte#L148); () => sendMain(Main.URL, "https://freeshow.app/docs/connecting"). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Connect.svelte:143 remoteController.

Calls: src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
