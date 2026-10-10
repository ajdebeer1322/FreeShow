# action/id_start_timer (1)

## id_start_timer — event-ce7fcabbd79fd02f72

[code] [src/frontend/components/actions/api.ts:323](../../../../../src/frontend/components/actions/api.ts#L323); (data: API_id) => startTimerById(data.id). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:323 id_start_timer (depth 0); src/frontend/components/helpers/timerTick.ts:50 startTimerById (depth 1); src/frontend/components/drawer/timers/timers.ts:174 playPauseGlobal (depth 2); src/frontend/components/drawer/timers/timers.ts:176 <callback> (depth 3); src/frontend/components/drawer/timers/timers.ts:178 <callback> (depth 3); src/frontend/components/drawer/timers/timers.ts:125 getTimerDynamicValue (depth 4); src/frontend/components/edit/scripts/itemHelpers.ts:496 getDynamicValue (depth 5); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 6); src/frontend/components/helpers/shows.ts:27 get (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/showActions.ts:936 replaceDynamicValues (depth 6); src/frontend/components/helpers/showActions.ts:780 dynamicValueText (depth 6); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 3); src/frontend/components/actions/actions.ts:159 <callback> (depth 4); src/frontend/components/actions/actions.ts:33 runAction (depth 5); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 6).

Effects: src/frontend/components/drawer/timers/timers.ts:178 store-write src/frontend/stores.ts#activeTimers ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 29. Full edges/effects/conditions in JSON.
