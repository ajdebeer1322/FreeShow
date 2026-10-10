# click/src_frontend_components_main_popups_ImportCalendar.svelte (1)

## click — event-fdb5a908852cfdf128

[code] [src/frontend/components/main/popups/ImportCalendar.svelte:47](../../../../../src/frontend/components/main/popups/ImportCalendar.svelte#L47); () => (importType = ""). resolved-within-bound.

Conditions: src/frontend/components/main/popups/ImportCalendar.svelte:46 importType.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-12f82df0d8646e68c0

[code] [src/frontend/components/main/popups/ImportCalendar.svelte:53](../../../../../src/frontend/components/main/popups/ImportCalendar.svelte#L53); handleUrlImport. partial.

Conditions: src/frontend/components/main/popups/ImportCalendar.svelte:50 importType === "url"; src/frontend/components/main/popups/ImportCalendar.svelte:23 !url.trim() \|\| isSubmitting; src/frontend/components/main/popups/ImportCalendar.svelte:29 success !== true; src/frontend/components/main/popups/ImportCalendar.svelte:31 typeof success === "string".

Calls: src/frontend/components/main/popups/ImportCalendar.svelte:22 handleUrlImport (depth 0); src/frontend/components/drawer/calendar/calendars.ts:183 fetchAndImportIcs (depth 1); src/frontend/components/drawer/calendar/calendars.ts:200 <callback> (depth 2); src/frontend/components/drawer/calendar/calendars.ts:167 parseCalendarName (depth 2); src/frontend/components/helpers/media.ts:74 encodeFilePath (depth 3); src/frontend/components/helpers/media.ts:67 isLocalFile (depth 4); src/frontend/components/helpers/media.ts:54 splitPath (depth 4); src/frontend/components/helpers/media.ts:87 <callback> (depth 4); src/frontend/components/helpers/media.ts:62 joinPath (depth 4); src/frontend/components/drawer/calendar/calendars.ts:62 getAvailableColor (depth 2); src/frontend/components/drawer/calendar/calendars.ts:68 <callback> (depth 3); src/frontend/components/drawer/calendar/calendars.ts:79 <callback> (depth 3); src/frontend/components/drawer/calendar/calendars.ts:82 <callback> (depth 3); src/frontend/components/drawer/calendar/calendars.ts:87 <callback> (depth 3); src/frontend/components/drawer/calendar/calendars.ts:206 <callback> (depth 2); src/frontend/converters/calendar.ts:103 convertCalendar (depth 2).

Effects: src/frontend/components/main/popups/ImportCalendar.svelte:36 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/main/popups/ImportCalendar.svelte:37 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/drawer/calendar/calendars.ts:188 network fetch ; src/frontend/components/drawer/calendar/calendars.ts:206 store-write src/frontend/stores.ts#calendars ; src/frontend/converters/calendar.ts:133 store-write src/frontend/stores.ts#calendars ; src/frontend/converters/calendar.ts:328 store-write src/frontend/stores.ts#events ; src/frontend/components/drawer/calendar/event.ts:155 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 60; depth cutoffs: 47. Full edges/effects/conditions in JSON.

## click — event-b76f19a367930b7e66

[code] [src/frontend/components/main/popups/ImportCalendar.svelte:66](../../../../../src/frontend/components/main/popups/ImportCalendar.svelte#L66); handleLocalImport. resolved-within-bound.

Conditions: src/frontend/components/main/popups/ImportCalendar.svelte:50 importType === "url"; src/frontend/components/main/popups/ImportCalendar.svelte:57 importType === "local".

Calls: src/frontend/components/main/popups/ImportCalendar.svelte:40 handleLocalImport (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/main/popups/ImportCalendar.svelte:42 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/ImportCalendar.svelte:41 ipc sendMain(Main.IMPORT, { channel: "calendar", format: { name: "Calendar", extensions: &#91;"ics"&#93; } }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e24d6485b76921c4af

[code] [src/frontend/components/main/popups/ImportCalendar.svelte:70](../../../../../src/frontend/components/main/popups/ImportCalendar.svelte#L70); (e) => (importType = e.detail). resolved-within-bound.

Conditions: src/frontend/components/main/popups/ImportCalendar.svelte:50 importType === "url"; src/frontend/components/main/popups/ImportCalendar.svelte:57 importType === "local".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
