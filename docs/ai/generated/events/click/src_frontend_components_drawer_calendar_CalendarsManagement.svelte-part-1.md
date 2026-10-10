# click/src_frontend_components_drawer_calendar_CalendarsManagement.svelte (1)

## click — event-aa9489d25ee86a461a

[code] [src/frontend/components/drawer/calendar/CalendarsManagement.svelte:55](../../../../../src/frontend/components/drawer/calendar/CalendarsManagement.svelte#L55); () => syncCalendar(cal). partial.

Conditions: src/frontend/components/drawer/calendar/CalendarsManagement.svelte:32 icsCalendars.length > 0; src/frontend/components/drawer/calendar/CalendarsManagement.svelte:54 cal.url.

Calls: src/frontend/components/drawer/calendar/CalendarsManagement.svelte:14 syncCalendar (depth 1); src/frontend/components/drawer/calendar/calendars.ts:183 fetchAndImportIcs (depth 2); src/frontend/components/drawer/calendar/calendars.ts:200 <callback> (depth 3); src/frontend/components/drawer/calendar/calendars.ts:167 parseCalendarName (depth 3); src/frontend/components/helpers/media.ts:74 encodeFilePath (depth 4); src/frontend/components/helpers/media.ts:67 isLocalFile (depth 5); src/frontend/components/helpers/media.ts:54 splitPath (depth 5); src/frontend/components/helpers/media.ts:87 <callback> (depth 5); src/frontend/components/helpers/media.ts:62 joinPath (depth 5); src/frontend/components/drawer/calendar/calendars.ts:62 getAvailableColor (depth 3); src/frontend/components/drawer/calendar/calendars.ts:68 <callback> (depth 4); src/frontend/components/drawer/calendar/calendars.ts:79 <callback> (depth 4); src/frontend/components/drawer/calendar/calendars.ts:82 <callback> (depth 4); src/frontend/components/drawer/calendar/calendars.ts:87 <callback> (depth 4); src/frontend/components/drawer/calendar/calendars.ts:206 <callback> (depth 3); src/frontend/converters/calendar.ts:103 convertCalendar (depth 3).

Effects: src/frontend/components/drawer/calendar/calendars.ts:188 network fetch ; src/frontend/components/drawer/calendar/calendars.ts:206 store-write src/frontend/stores.ts#calendars ; src/frontend/converters/calendar.ts:133 store-write src/frontend/stores.ts#calendars ; src/frontend/converters/calendar.ts:328 store-write src/frontend/stores.ts#events ; src/frontend/components/drawer/calendar/event.ts:155 history history UPDATE; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 30; depth cutoffs: 14. Full edges/effects/conditions in JSON.

## click — event-81c3e487e92a44bb41

[code] [src/frontend/components/drawer/calendar/CalendarsManagement.svelte:60](../../../../../src/frontend/components/drawer/calendar/CalendarsManagement.svelte#L60); () => toggleCalendarHidden(cal.id). resolved-within-bound.

Conditions: src/frontend/components/drawer/calendar/CalendarsManagement.svelte:32 icsCalendars.length > 0.

Calls: src/frontend/components/drawer/calendar/calendars.ts:97 toggleCalendarHidden (depth 1); src/frontend/components/drawer/calendar/calendars.ts:99 <callback> (depth 2); src/frontend/components/drawer/calendar/calendars.ts:104 <callback> (depth 2).

Effects: src/frontend/components/drawer/calendar/calendars.ts:99 store-write src/frontend/stores.ts#special ; src/frontend/components/drawer/calendar/calendars.ts:104 store-write src/frontend/stores.ts#calendars .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
