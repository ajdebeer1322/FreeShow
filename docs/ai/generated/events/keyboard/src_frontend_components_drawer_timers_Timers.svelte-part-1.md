# keyboard/src_frontend_components_drawer_timers_Timers.svelte (1)

## dynamic — event-a748f5a8c75eb50479

[code] [src/frontend/components/drawer/timers/Timers.svelte:105](../../../../../src/frontend/components/drawer/timers/Timers.svelte#L105); keydown. partial.

Conditions: src/frontend/components/drawer/timers/Timers.svelte:90 e.key === "Enter" && searchValue.length > 1 && e.target?.closest(".search"); src/frontend/components/drawer/timers/Timers.svelte:92 !timer; src/frontend/components/drawer/timers/Timers.svelte:95 e.ctrlKey \|\| e.metaKey.

Calls: src/frontend/components/drawer/timers/Timers.svelte:89 keydown (depth 0); src/frontend/components/drawer/timers/timers.ts:174 playPauseGlobal (depth 1); src/frontend/components/drawer/timers/timers.ts:176 <callback> (depth 2); src/frontend/components/drawer/timers/timers.ts:178 <callback> (depth 2); src/frontend/components/drawer/timers/timers.ts:125 getTimerDynamicValue (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:496 getDynamicValue (depth 4); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 5); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 6); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:665 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:1102 addOutput (depth 6); src/frontend/components/helpers/array.ts:137 keysToID (depth 6); src/frontend/components/helpers/output.ts:668 <callback> (depth 6); src/frontend/components/helpers/shows.ts:27 get (depth 5); src/frontend/components/helpers/shows.ts:18 _show (depth 5).

Effects: src/frontend/components/drawer/timers/timers.ts:178 store-write src/frontend/stores.ts#activeTimers ; src/frontend/components/helpers/showActions.ts:1149 ipc send(OUTPUT, &#91;"DYNAMIC_VALUE_DATA"&#93;, { audioTime, audioDuration }) ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 69. Full edges/effects/conditions in JSON.
