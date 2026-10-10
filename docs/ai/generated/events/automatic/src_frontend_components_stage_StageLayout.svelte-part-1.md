# automatic/src_frontend_components_stage_StageLayout.svelte (1)

## setTimeout — event-66a46ae61b1091486b

[code] [src/frontend/components/stage/StageLayout.svelte:38](../../../../../src/frontend/components/stage/StageLayout.svelte#L38); () => { layoutMounted = true }. resolved-within-bound.

Conditions: src/frontend/components/stage/StageLayout.svelte:36 stageLayoutId.

Calls: src/frontend/components/stage/StageLayout.svelte:38 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-c4c4d26f5477d76aa4

[code] [src/frontend/components/stage/StageLayout.svelte:82](../../../../../src/frontend/components/stage/StageLayout.svelte#L82); () => { updateStageShow() timeout = null }. resolved-within-bound.

Conditions: src/frontend/components/stage/StageLayout.svelte:80 !timeout.

Calls: src/frontend/components/stage/StageLayout.svelte:82 <callback> (depth 0); src/frontend/components/stage/stage.ts:72 updateStageShow (depth 1); src/frontend/components/stage/stage.ts:73 <callback> (depth 2); src/frontend/utils/sendData.ts:21 arrayToObject (depth 3); src/frontend/utils/sendData.ts:22 <callback> (depth 4); src/frontend/utils/sendData.ts:12 filterObjectArray (depth 3); src/frontend/utils/sendData.ts:16 <callback> (depth 4); src/frontend/utils/sendData.ts:17 <callback> (depth 4); src/frontend/utils/sendData.ts:17 <callback> (depth 5); src/frontend/utils/sendData.ts:18 <callback> (depth 4).

Effects: src/frontend/components/stage/stage.ts:76 ipc window.api.send(STAGE, { channel: "LAYOUT", id, data: show }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-6e37dad58bc42dced0

[code] [src/frontend/components/stage/StageLayout.svelte:120](../../../../../src/frontend/components/stage/StageLayout.svelte#L120); () => { if (!Array.isArray(stageItems)) return if (stageItems.some((a) => a?.conditions)) conditionsUpdater++ }. resolved-within-bound.

Conditions: src/frontend/components/stage/StageLayout.svelte:121 !Array.isArray(stageItems); src/frontend/components/stage/StageLayout.svelte:122 stageItems.some((a) => a?.conditions).

Calls: src/frontend/components/stage/StageLayout.svelte:120 <callback> (depth 0); src/frontend/components/stage/StageLayout.svelte:122 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-83a0e95aa96b5743ee

[code] [src/frontend/components/stage/StageLayout.svelte:138](../../../../../src/frontend/components/stage/StageLayout.svelte#L138); () => { let id = enableStageOutput({ stageOutput: stageLayoutId, name: layout?.name \|\| "" }) currentOutputSettings.set(id) settingsTab.set("display_settings") activePage.set("setti. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/stage/StageLayout.svelte:138 <callback> (depth 0); src/frontend/components/helpers/output.ts:1156 enableStageOutput (depth 1); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:649 <callback> (depth 4); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4).

Effects: src/frontend/components/stage/StageLayout.svelte:140 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/stage/StageLayout.svelte:141 store-write src/frontend/stores.ts#settingsTab ; src/frontend/components/stage/StageLayout.svelte:142 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/output.ts:146 ipc send(OUTPUT, &#91;"TOGGLE_OUTPUTS"&#93;, { outputs: sortedOutputList, state, autoStartup: options.autoStartup, autoPosition }) ; src/frontend/components/helpers/output.ts:1160 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1175 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1177 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1172 ipc send(OUTPUT, &#91;"CREATE"&#93;, { ...a&#91;id&#93;, id }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 17. Full edges/effects/conditions in JSON.
