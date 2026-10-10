# click/src_frontend_components_main_popups_Initialize.svelte (1)

## click — event-7b4bc3d4dc517a952f

[code] [src/frontend/components/main/popups/Initialize.svelte:53](../../../../../src/frontend/components/main/popups/Initialize.svelte#L53); restore. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/Initialize.svelte:35 restore (depth 0).

Effects: src/frontend/components/main/popups/Initialize.svelte:36 store-write src/frontend/stores.ts#popupData ; src/frontend/components/main/popups/Initialize.svelte:37 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5309445fa29ed80243

[code] [src/frontend/components/main/popups/Initialize.svelte:70](../../../../../src/frontend/components/main/popups/Initialize.svelte#L70); create. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/Initialize.svelte:26 create (depth 0); src/frontend/IPC/main.ts:19 requestMain (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 2); src/frontend/IPC/main.ts:36 <callback> (depth 2); src/frontend/IPC/main.ts:37 <callback> (depth 3); src/frontend/IPC/main.ts:48 <callback> (depth 3); src/frontend/components/main/popups/Initialize.svelte:27 <callback> (depth 1); src/frontend/utils/createData.ts:13 createData (depth 2); src/frontend/utils/createData.ts:1352 createDefaultShow (depth 3); src/frontend/components/helpers/setShow.ts:14 setShow (depth 4); src/frontend/components/helpers/setShow.ts:103 convertOldShowValues (depth 5); src/frontend/components/helpers/setShow.ts:106 <callback> (depth 6); src/frontend/components/helpers/setShow.ts:48 <callback> (depth 5); src/frontend/components/helpers/setShow.ts:49 <callback> (depth 6); src/frontend/components/helpers/setShow.ts:54 <callback> (depth 5).

Effects: src/frontend/components/main/popups/Initialize.svelte:31 store-write src/frontend/stores.ts#guideActive ; src/frontend/components/main/popups/Initialize.svelte:32 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Initialize.svelte:29 ipc sendMain(Main.REFRESH_SHOWS) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/main/popups/Initialize.svelte:27 ipc requestMain(Main.GET_PATHS, undefined, (a) => (a ? createData(a) : null)) ; src/frontend/utils/createData.ts:18 store-write src/frontend/stores.ts#stageShows ; src/frontend/utils/createData.ts:70 store-write src/frontend/stores.ts#remotePassword ; src/frontend/components/helpers/setShow.ts:48 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/setShow.ts:54 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/setShow.ts:66 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/setShow.ts:87 store-write src/frontend/stores.ts#cachedShowsData ; src/frontend/utils/createData.ts:117 store-write src/frontend/stores.ts#effects ; src/frontend/utils/createData.ts:112 store-write src/frontend/stores.ts#deletedDefaults .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 17. Full edges/effects/conditions in JSON.
