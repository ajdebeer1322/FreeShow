# click/src_frontend_components_drawer_calendar_Day.svelte (1)

## click — event-62f24a616cc1cd3e47

[code] [src/frontend/components/drawer/calendar/Day.svelte:63](../../../../../src/frontend/components/drawer/calendar/Day.svelte#L63); () => { eventEdit.set(event.id) activePopup.set("edit_event") }. resolved-within-bound.

Conditions: src/frontend/components/drawer/calendar/Day.svelte:43 $activeDays.length; src/frontend/components/drawer/calendar/Day.svelte:51 currentEvents.length.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/calendar/Day.svelte:64 store-write src/frontend/stores.ts#eventEdit ; src/frontend/components/drawer/calendar/Day.svelte:65 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
