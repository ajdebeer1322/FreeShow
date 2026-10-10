# click/src_frontend_components_drawer_pages_OBS.svelte (2)

## click — event-9f0f159e0fc1b91a38

[code] [src/frontend/components/drawer/pages/OBS.svelte:370](../../../../../src/frontend/components/drawer/pages/OBS.svelte#L370); () => (showAll = !showAll). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/OBS.svelte:255 connected.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-abc6c2ca34d7f7e25e

[code] [src/frontend/components/drawer/pages/OBS.svelte:387](../../../../../src/frontend/components/drawer/pages/OBS.svelte#L387); connect. partial.

Conditions: src/frontend/components/drawer/pages/OBS.svelte:255 connected; src/frontend/components/drawer/pages/OBS.svelte:45 obs.isConnected; src/frontend/components/drawer/pages/OBS.svelte:50 !isConnected && error; src/frontend/components/drawer/pages/OBS.svelte:53 isConnected; src/frontend/components/drawer/pages/OBS.svelte:62 msg.op === 7 && msg.d; src/frontend/components/drawer/pages/OBS.svelte:93 res && typeof res.outputActive !== "undefined"; src/frontend/components/drawer/pages/OBS.svelte:99 msg.op === 5 && msg.d; src/frontend/components/drawer/pages/OBS.svelte:112 evt.sceneName === currentScene; src/frontend/components/drawer/pages/OBS.svelte:118 evt.sceneName === currentScene; src/frontend/components/drawer/pages/OBS.svelte:127 evt.inputs; src/frontend/components/drawer/pages/OBS.svelte:130 target; src/frontend/components/drawer/pages/OBS.svelte:131 meterData.inputLevelsMul; src/frontend/components/drawer/pages/OBS.svelte:141 db <= -60; src/frontend/components/drawer/pages/OBS.svelte:142 db <= -20.

Calls: src/frontend/components/drawer/pages/OBS.svelte:41 connect (depth 0); src/frontend/utils/obsTalk.ts:164 connectToOBS (depth 1); src/frontend/utils/obsTalk.ts:20 checkData (depth 2); src/frontend/utils/obsTalk.ts:148 disconnect (depth 2); src/frontend/utils/obsTalk.ts:120 setConnected (depth 3); src/frontend/utils/obsTalk.ts:122 <callback> (depth 4); src/frontend/utils/obsTalk.ts:42 connect (depth 2); src/frontend/utils/obsTalk.ts:46 <callback> (depth 3); src/frontend/utils/obsTalk.ts:51 <callback> (depth 4); src/frontend/utils/obsTalk.ts:34 updatePassword (depth 5); src/frontend/utils/obsTalk.ts:36 <callback> (depth 6); src/frontend/utils/obsTalk.ts:66 <callback> (depth 5); src/frontend/utils/obsTalk.ts:74 <callback> (depth 4); src/frontend/utils/popup.ts:225 promptCustom (depth 5); src/frontend/utils/popup.ts:189 waitForPopupData (depth 6); src/frontend/utils/obsTalk.ts:153 generateAuthString (depth 5).

Effects: src/frontend/utils/obsTalk.ts:122 store-write src/frontend/stores.ts#obsData ; src/frontend/utils/obsTalk.ts:36 store-write src/frontend/stores.ts#obsData ; src/frontend/utils/popup.ts:226 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:213 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:214 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 20; depth cutoffs: 1. Full edges/effects/conditions in JSON.
