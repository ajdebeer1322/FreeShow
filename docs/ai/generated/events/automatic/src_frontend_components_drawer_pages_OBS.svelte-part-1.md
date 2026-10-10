# automatic/src_frontend_components_drawer_pages_OBS.svelte (1)

## setTimeout — event-6fc5140f699a83d076

[code] [src/frontend/components/drawer/pages/OBS.svelte:217](../../../../../src/frontend/components/drawer/pages/OBS.svelte#L217); () => { if (obs && currentScene) { obs.call("GetSceneItemList", { sceneName: currentScene }) obs.call("GetInputList") } }. partial.

Conditions: src/frontend/components/drawer/pages/OBS.svelte:218 obs && currentScene.

Calls: src/frontend/components/drawer/pages/OBS.svelte:217 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9a57151095e3c91bfa

[code] [src/frontend/components/drawer/pages/OBS.svelte:246](../../../../../src/frontend/components/drawer/pages/OBS.svelte#L246); () => { obs.call("GetStreamStatus") }. partial.

Conditions: src/frontend/components/drawer/pages/OBS.svelte:244 obs.

Calls: src/frontend/components/drawer/pages/OBS.svelte:246 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
