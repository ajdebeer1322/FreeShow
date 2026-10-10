# click/src_frontend_components_drawer_timers_Timers.svelte (1)

## click — event-d22d60eab39956b659

[code] [src/frontend/components/drawer/timers/Timers.svelte:126](../../../../../src/frontend/components/drawer/timers/Timers.svelte#L126); () => playPauseGlobal(timer.id, timer). partial.

Conditions: src/frontend/components/drawer/timers/Timers.svelte:107 filteredTimers.length.

Calls: src/frontend/components/drawer/timers/timers.ts:174 playPauseGlobal (depth 1); src/frontend/components/drawer/timers/timers.ts:176 <callback> (depth 2); src/frontend/components/drawer/timers/timers.ts:178 <callback> (depth 2); src/frontend/components/drawer/timers/timers.ts:125 getTimerDynamicValue (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:496 getDynamicValue (depth 4); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 5); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 6); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:665 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:1102 addOutput (depth 6); src/frontend/components/helpers/array.ts:137 keysToID (depth 6); src/frontend/components/helpers/output.ts:668 <callback> (depth 6); src/frontend/components/helpers/shows.ts:27 get (depth 5); src/frontend/components/helpers/shows.ts:18 _show (depth 5); src/frontend/components/helpers/shows.ts:38 set (depth 6).

Effects: src/frontend/components/drawer/timers/timers.ts:178 store-write src/frontend/stores.ts#activeTimers ; src/frontend/components/helpers/showActions.ts:1149 ipc send(OUTPUT, &#91;"DYNAMIC_VALUE_DATA"&#93;, { audioTime, audioDuration }) ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 69. Full edges/effects/conditions in JSON.

## click — event-14168501f52d597f9a

[code] [src/frontend/components/drawer/timers/Timers.svelte:147](../../../../../src/frontend/components/drawer/timers/Timers.svelte#L147); openTimers. resolved-within-bound.

Conditions: src/frontend/components/drawer/timers/Timers.svelte:107 filteredTimers.length; src/frontend/components/drawer/timers/Timers.svelte:79 onlyPlaying.

Calls: src/frontend/components/drawer/timers/Timers.svelte:78 openTimers (depth 0); src/frontend/components/edit/scripts/edit.ts:86 openDrawer (depth 1); src/frontend/components/edit/scripts/edit.ts:102 <callback> (depth 2).

Effects: src/frontend/components/edit/scripts/edit.ts:87 store-write src/frontend/stores.ts#activePage ; src/frontend/components/edit/scripts/edit.ts:110 store-write src/frontend/stores.ts#activeDrawerTab ; src/frontend/components/edit/scripts/edit.ts:114 store-write src/frontend/stores.ts#drawer ; src/frontend/components/edit/scripts/edit.ts:122 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/edit/scripts/edit.ts:102 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3c069838ba8697e2c6

[code] [src/frontend/components/drawer/timers/Timers.svelte:165](../../../../../src/frontend/components/drawer/timers/Timers.svelte#L165); () => adjustTimer(delta, { id: timer.id }, minVal, maxVal). resolved-within-bound.

Conditions: src/frontend/components/drawer/timers/Timers.svelte:107 filteredTimers.length; src/frontend/components/drawer/timers/Timers.svelte:158 timer.type === "counter" && isActive; src/frontend/components/drawer/timers/Timers.svelte:164 !onlyPlaying.

Calls: src/frontend/components/drawer/timers/Timers.svelte:53 adjustTimer (depth 1); src/frontend/components/drawer/timers/Timers.svelte:54 <callback> (depth 2); src/frontend/components/drawer/timers/Timers.svelte:55 <callback> (depth 3).

Effects: src/frontend/components/drawer/timers/Timers.svelte:54 store-write src/frontend/stores.ts#activeTimers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-514e9b81f4cc14dbb2

[code] [src/frontend/components/drawer/timers/Timers.svelte:166](../../../../../src/frontend/components/drawer/timers/Timers.svelte#L166); () => adjustTimer(-delta, { id: timer.id }, minVal, maxVal). resolved-within-bound.

Conditions: src/frontend/components/drawer/timers/Timers.svelte:107 filteredTimers.length; src/frontend/components/drawer/timers/Timers.svelte:158 timer.type === "counter" && isActive; src/frontend/components/drawer/timers/Timers.svelte:164 !onlyPlaying.

Calls: src/frontend/components/drawer/timers/Timers.svelte:53 adjustTimer (depth 1); src/frontend/components/drawer/timers/Timers.svelte:54 <callback> (depth 2); src/frontend/components/drawer/timers/Timers.svelte:55 <callback> (depth 3).

Effects: src/frontend/components/drawer/timers/Timers.svelte:54 store-write src/frontend/stores.ts#activeTimers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e7735888ba1b21541a

[code] [src/frontend/components/drawer/timers/Timers.svelte:169](../../../../../src/frontend/components/drawer/timers/Timers.svelte#L169); () => resetTimer(timer.id). resolved-within-bound.

Conditions: src/frontend/components/drawer/timers/Timers.svelte:107 filteredTimers.length; src/frontend/components/drawer/timers/Timers.svelte:158 timer.type === "counter" && isActive.

Calls: src/frontend/components/drawer/timers/timers.ts:208 resetTimer (depth 1); src/frontend/components/drawer/timers/timers.ts:209 <callback> (depth 2).

Effects: src/frontend/components/drawer/timers/timers.ts:209 store-write src/frontend/stores.ts#activeTimers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-863067f7534730a232

[code] [src/frontend/components/drawer/timers/Timers.svelte:186](../../../../../src/frontend/components/drawer/timers/Timers.svelte#L186); () => activePopup.set("timer"). resolved-within-bound.

Conditions: src/frontend/components/drawer/timers/Timers.svelte:184 !onlyPlaying.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/timers/Timers.svelte:186 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
