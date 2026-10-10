# automatic/src_frontend_components_main_ProfileSelector.svelte (1)

## checkStartupActions — event-b2279dad815dcb8d13

[code] [src/frontend/components/main/ProfileSelector.svelte:39](../../../../../src/frontend/components/main/ProfileSelector.svelte#L39); checkStartupActions. partial.

Conditions: src/frontend/components/actions/actions.ts:151 startupActionsTriggered.

Calls: src/frontend/components/actions/actions.ts:150 checkStartupActions (depth 0); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 1); src/frontend/components/actions/actions.ts:159 <callback> (depth 2); src/frontend/components/actions/actions.ts:33 runAction (depth 3); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:49 <callback> (depth 4); src/frontend/components/actions/actions.ts:74 runTrigger (depth 4); src/frontend/components/actions/actions.ts:235 getActionTriggerId (depth 5); src/frontend/utils/common.ts:46 wait (depth 5); src/frontend/utils/common.ts:47 <callback> (depth 6); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 5); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 6); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:665 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6).

Effects: src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 34. Full edges/effects/conditions in JSON.
