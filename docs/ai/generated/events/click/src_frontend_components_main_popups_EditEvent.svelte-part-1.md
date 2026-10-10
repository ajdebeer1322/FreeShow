# click/src_frontend_components_main_popups_EditEvent.svelte (1)

## click — event-638c83a341a664130d

[code] [src/frontend/components/main/popups/EditEvent.svelte:334](../../../../../src/frontend/components/main/popups/EditEvent.svelte#L334); () => (showMore = !showMore). resolved-within-bound.

Conditions: src/frontend/components/main/popups/EditEvent.svelte:319 selectedType === "event".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8b713b3beae2d89819

[code] [src/frontend/components/main/popups/EditEvent.svelte:341](../../../../../src/frontend/components/main/popups/EditEvent.svelte#L341); () => (actionSelector = null). resolved-within-bound.

Conditions: src/frontend/components/main/popups/EditEvent.svelte:319 selectedType === "event"; src/frontend/components/main/popups/EditEvent.svelte:339 selectedType === "action"; src/frontend/components/main/popups/EditEvent.svelte:340 actionSelector !== null.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e6a0e586a1413bb96a

[code] [src/frontend/components/main/popups/EditEvent.svelte:405](../../../../../src/frontend/components/main/popups/EditEvent.svelte#L405); save. partial.

Conditions: src/frontend/components/main/popups/EditEvent.svelte:363 !actionSelector; src/frontend/components/main/popups/EditEvent.svelte:148 selectedType === "event" && stored === JSON.stringify(editEvent); src/frontend/components/main/popups/EditEvent.svelte:149 selectedType === "event" && !editEvent.name?.length; src/frontend/components/main/popups/EditEvent.svelte:150 selectedType === "action" && !actionData; src/frontend/components/main/popups/EditEvent.svelte:151 selectedType === "action"; src/frontend/components/main/popups/EditEvent.svelte:154 !data; src/frontend/components/main/popups/EditEvent.svelte:156 data.repeat && !data.group.

Calls: src/frontend/components/main/popups/EditEvent.svelte:147 save (depth 0); src/frontend/components/drawer/calendar/event.ts:164 updateEventData (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/drawer/calendar/event.ts:180 <callback> (depth 2); src/frontend/components/drawer/calendar/event.ts:191 getActionEventData (depth 2); src/frontend/utils/language.ts:83 translateText (depth 3); src/frontend/utils/language.ts:89 <callback> (depth 4); src/frontend/utils/language.ts:96 <callback> (depth 4); src/frontend/components/drawer/calendar/event.ts:27 createRepeatedEvents (depth 1); src/frontend/components/drawer/calendar/event.ts:158 setDate (depth 2); src/frontend/components/drawer/calendar/event.ts:47 day (depth 2); src/frontend/components/drawer/calendar/event.ts:48 week (depth 2); src/frontend/components/drawer/calendar/event.ts:49 month (depth 2); src/frontend/components/drawer/calendar/event.ts:61 year (depth 2); src/frontend/components/drawer/calendar/event.ts:64 advanceDates (depth 2); src/frontend/components/drawer/calendar/event.ts:10 getOrdinalWeekdayOfMonth (depth 3).

Effects: src/frontend/components/main/popups/EditEvent.svelte:160 history history UPDATE; src/frontend/components/main/popups/EditEvent.svelte:148 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/EditEvent.svelte:149 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/EditEvent.svelte:150 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/EditEvent.svelte:164 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/EditEvent.svelte:165 store-write src/frontend/stores.ts#eventEdit ; src/frontend/components/drawer/calendar/event.ts:155 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 46; depth cutoffs: 155. Full edges/effects/conditions in JSON.

## click — event-7b36c4bd7b59bde4df

[code] [src/frontend/components/main/popups/EditEvent.svelte:415](../../../../../src/frontend/components/main/popups/EditEvent.svelte#L415); saveAll. partial.

Conditions: src/frontend/components/main/popups/EditEvent.svelte:363 !actionSelector; src/frontend/components/main/popups/EditEvent.svelte:414 editEvent.group; src/frontend/components/main/popups/EditEvent.svelte:122 !data; src/frontend/components/main/popups/EditEvent.svelte:126 event.group !== editEvent.group; src/frontend/components/main/popups/EditEvent.svelte:139 data.repeat.

Calls: src/frontend/components/main/popups/EditEvent.svelte:120 saveAll (depth 0); src/frontend/components/drawer/calendar/event.ts:164 updateEventData (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/drawer/calendar/event.ts:180 <callback> (depth 2); src/frontend/components/drawer/calendar/event.ts:191 getActionEventData (depth 2); src/frontend/utils/language.ts:83 translateText (depth 3); src/frontend/utils/language.ts:89 <callback> (depth 4); src/frontend/utils/language.ts:96 <callback> (depth 4); src/frontend/components/main/popups/EditEvent.svelte:125 <callback> (depth 1); src/frontend/components/helpers/time.ts:105 changeTime (depth 2); src/frontend/components/helpers/time.ts:95 splitDate (depth 3); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5).

Effects: src/frontend/components/main/popups/EditEvent.svelte:137 history history UPDATE; src/frontend/components/main/popups/EditEvent.svelte:143 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/EditEvent.svelte:144 store-write src/frontend/stores.ts#eventEdit ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 51; depth cutoffs: 121. Full edges/effects/conditions in JSON.
