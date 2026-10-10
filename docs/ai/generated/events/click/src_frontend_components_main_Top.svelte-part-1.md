# click/src_frontend_components_main_Top.svelte (1)

## click — event-39ba8bd85d2da96dc0

[code] [src/frontend/components/main/Top.svelte:83](../../../../../src/frontend/components/main/Top.svelte#L83); () => goToUser(user). resolved-within-bound.

Conditions: src/frontend/components/main/Top.svelte:77 users.length.

Calls: src/frontend/components/main/Top.svelte:65 goToUser (depth 1).

Effects: src/frontend/components/main/Top.svelte:66 store-write src/frontend/stores.ts#activePage ; src/frontend/components/main/Top.svelte:67 store-write src/frontend/stores.ts#activeProject ; src/frontend/components/main/Top.svelte:69 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/main/Top.svelte:71 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/main/Top.svelte:72 store-write src/frontend/stores.ts#activeEdit .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-2f884de0d88658ed9d

[code] [src/frontend/components/main/Top.svelte:137](../../../../../src/frontend/components/main/Top.svelte#L137); toggleOutput. partial.

Conditions: src/frontend/components/main/Top.svelte:27 cancelConfirmTimeout; src/frontend/components/main/Top.svelte:31 !$outputDisplay \|\| confirm; src/frontend/components/main/Top.svelte:32 confirm; src/frontend/components/main/Top.svelte:43 forceKey.

Calls: src/frontend/components/main/Top.svelte:26 toggleOutput (depth 0); src/frontend/components/main/Top.svelte:35 <callback> (depth 1); src/frontend/components/helpers/output.ts:130 toggleOutputs (depth 1); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 2); src/frontend/components/helpers/array.ts:42 sortByName (depth 3); src/frontend/components/helpers/array.ts:45 <callback> (depth 4); src/frontend/components/helpers/array.ts:46 <callback> (depth 4); src/frontend/components/helpers/array.ts:137 keysToID (depth 3); src/frontend/components/helpers/array.ts:139 <callback> (depth 4); src/frontend/components/helpers/output.ts:677 <callback> (depth 3); src/frontend/components/helpers/output.ts:679 <callback> (depth 3); src/frontend/components/helpers/output.ts:679 <callback> (depth 3); src/frontend/components/helpers/output.ts:681 <callback> (depth 3); src/frontend/utils/common.ts:18 isMainWindow (depth 3); src/frontend/components/helpers/output.ts:1102 addOutput (depth 3); src/frontend/components/helpers/output.ts:1106 <callback> (depth 4).

Effects: src/frontend/components/helpers/output.ts:146 ipc send(OUTPUT, &#91;"TOGGLE_OUTPUTS"&#93;, { outputs: sortedOutputList, state, autoStartup: options.autoStartup, autoPosition }) ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 4. Full edges/effects/conditions in JSON.

## click — event-9eb660eaced5e985e0

[code] [src/frontend/components/main/Top.svelte:155](../../../../../src/frontend/components/main/Top.svelte#L155); openOutputSettings. resolved-within-bound.

Conditions: src/frontend/components/main/Top.svelte:154 !$outputDisplay && !physicalOutputWindows.length.

Calls: src/frontend/components/main/Top.svelte:51 openOutputSettings (depth 0).

Effects: src/frontend/components/main/Top.svelte:52 store-write src/frontend/stores.ts#settingsTab ; src/frontend/components/main/Top.svelte:53 store-write src/frontend/stores.ts#activePage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
