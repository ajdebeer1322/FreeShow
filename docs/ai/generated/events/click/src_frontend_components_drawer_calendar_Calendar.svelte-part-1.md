# click/src_frontend_components_drawer_calendar_Calendar.svelte (1)

## click — event-f23a6193d9771fd0cc

[code] [src/frontend/components/drawer/calendar/Calendar.svelte:256](../../../../../src/frontend/components/drawer/calendar/Calendar.svelte#L256); () => previousMonth(). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/calendar/Calendar.svelte:119 previousMonth (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9e82c2dd4e110d56c7

[code] [src/frontend/components/drawer/calendar/Calendar.svelte:259](../../../../../src/frontend/components/drawer/calendar/Calendar.svelte#L259); () => nextMonth(). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/calendar/Calendar.svelte:111 nextMonth (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a68e699c07ba774637

[code] [src/frontend/components/drawer/calendar/Calendar.svelte:265](../../../../../src/frontend/components/drawer/calendar/Calendar.svelte#L265); setToPresentDay. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/calendar/Calendar.svelte:202 setToPresentDay (depth 0); src/frontend/components/drawer/calendar/calendar.ts:17 copyDate (depth 1).

Effects: src/frontend/components/drawer/calendar/Calendar.svelte:204 store-write src/frontend/stores.ts#activeDays .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-261338e8cab7b95097

[code] [src/frontend/components/drawer/calendar/Calendar.svelte:279](../../../../../src/frontend/components/drawer/calendar/Calendar.svelte#L279); () => { eventEdit.set(null) popupData.set({}) activePopup.set("edit_event") }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/calendar/Calendar.svelte:280 store-write src/frontend/stores.ts#eventEdit ; src/frontend/components/drawer/calendar/Calendar.svelte:281 store-write src/frontend/stores.ts#popupData ; src/frontend/components/drawer/calendar/Calendar.svelte:282 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
