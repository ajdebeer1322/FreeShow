# click/src_frontend_components_slide_Reference.svelte (1)

## click — event-be7c6f01da98b34d81

[code] [src/frontend/components/slide/Reference.svelte:92](../../../../../src/frontend/components/slide/Reference.svelte#L92); updateCalendar. partial.

Conditions: src/frontend/components/slide/Reference.svelte:82 show?.reference?.type === "calendar".

Calls: src/frontend/components/slide/Reference.svelte:19 updateCalendar (depth 0); src/frontend/components/drawer/calendar/calendar.ts:248 getSelectedEvents (depth 1); src/frontend/components/drawer/calendar/calendar.ts:256 <callback> (depth 2); src/frontend/components/drawer/calendar/calendar.ts:260 <callback> (depth 3); src/frontend/components/drawer/calendar/calendars.ts:93 isCalendarHidden (depth 4); src/frontend/components/drawer/calendar/calendar.ts:18 isSameDay (depth 4); src/frontend/components/drawer/calendar/calendar.ts:17 copyDate (depth 4); src/frontend/components/drawer/calendar/calendar.ts:30 endsMidnightNextDay (depth 4); src/frontend/components/drawer/calendar/calendar.ts:29 endsMidnight (depth 5); src/frontend/components/drawer/calendar/calendar.ts:275 <callback> (depth 2); src/frontend/components/drawer/calendar/calendar.ts:276 sortDayAndOnlyKeepNormalEvents (depth 2); src/frontend/components/drawer/calendar/calendar.ts:277 <callback> (depth 3); src/frontend/components/drawer/calendar/calendar.ts:281 <callback> (depth 2); src/frontend/components/drawer/calendar/calendar.ts:54 createSlides (depth 1); src/frontend/components/drawer/calendar/calendar.ts:67 createEventSlide (depth 2); src/frontend/utils/language.ts:83 translateText (depth 3).

Effects: src/frontend/components/slide/Reference.svelte:25 history history UPDATE; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 48; depth cutoffs: 137. Full edges/effects/conditions in JSON.

## click — event-9ea82e8d144b1d51f1

[code] [src/frontend/components/slide/Reference.svelte:101](../../../../../src/frontend/components/slide/Reference.svelte#L101); openTab. resolved-within-bound.

Conditions: src/frontend/components/slide/Reference.svelte:82 show?.reference?.type === "calendar"; src/frontend/components/slide/Reference.svelte:96 show?.reference?.type === "scripture"; src/frontend/components/slide/Reference.svelte:37 !collection \|\| !show; src/frontend/components/slide/Reference.svelte:40 !scriptureId; src/frontend/components/slide/Reference.svelte:49 $drawer.height <= 40.

Calls: src/frontend/components/slide/Reference.svelte:35 openTab (depth 0); src/frontend/components/slide/Reference.svelte:39 <callback> (depth 1); src/frontend/components/helpers/historyHelpers.ts:764 setDrawerTabData (depth 1); src/frontend/components/helpers/historyHelpers.ts:765 <callback> (depth 2).

Effects: src/frontend/components/slide/Reference.svelte:42 store-write src/frontend/stores.ts#openScripture ; src/frontend/components/slide/Reference.svelte:45 store-write src/frontend/stores.ts#activeDrawerTab ; src/frontend/components/slide/Reference.svelte:49 store-write src/frontend/stores.ts#drawer ; src/frontend/components/helpers/historyHelpers.ts:765 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-70767c6efdc47939fa

[code] [src/frontend/components/slide/Reference.svelte:117](../../../../../src/frontend/components/slide/Reference.svelte#L117); () => openURL("https://lessons.church"). resolved-within-bound.

Conditions: src/frontend/components/slide/Reference.svelte:82 show?.reference?.type === "calendar"; src/frontend/components/slide/Reference.svelte:96 show?.reference?.type === "scripture"; src/frontend/components/slide/Reference.svelte:105 show?.reference?.type === "lessons".

Calls: src/frontend/components/slide/Reference.svelte:62 openURL (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/components/slide/Reference.svelte:63 ipc sendMain(Main.URL, url) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-80b24ded1bf63e9406

[code] [src/frontend/components/slide/Reference.svelte:128](../../../../../src/frontend/components/slide/Reference.svelte#L128); refreshCanva. partial.

Conditions: src/frontend/components/slide/Reference.svelte:82 show?.reference?.type === "calendar"; src/frontend/components/slide/Reference.svelte:96 show?.reference?.type === "scripture"; src/frontend/components/slide/Reference.svelte:105 show?.reference?.type === "lessons"; src/frontend/components/slide/Reference.svelte:121 show?.reference?.type === "canva"; src/frontend/components/slide/Reference.svelte:73 syncingCanva.

Calls: src/frontend/components/slide/Reference.svelte:72 refreshCanva (depth 0); src/frontend/converters/canvaPresentation.ts:37 syncCanvaShow (depth 1); src/frontend/converters/canvaPresentation.ts:185 getCanvaShow (depth 2); src/frontend/components/helpers/setShow.ts:229 loadShows (depth 3); src/frontend/components/helpers/setShow.ts:233 <callback> (depth 4); src/frontend/components/helpers/setShow.ts:235 <callback> (depth 5); src/frontend/components/helpers/setShow.ts:175 loadSingleShow (depth 5); src/frontend/components/helpers/setShow.ts:184 <callback> (depth 6); src/frontend/components/helpers/setShow.ts:247 <callback> (depth 4); src/frontend/utils/common.ts:26 newToast (depth 3); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 4); src/frontend/utils/common.ts:26 newToast (depth 2); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 3); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 3); src/frontend/IPC/main.ts:28 cleanup (depth 3).

Effects: src/frontend/converters/canvaPresentation.ts:82 history history UPDATE; src/frontend/converters/canvaPresentation.ts:45 ipc requestMain(Main.GET_PROVIDER_CONTENT, { providerId: "canva", key: 'presentation:${designId}' }, undefined, CANVA_PREVIEW_TIMEOUT) ; src/frontend/components/helpers/setShow.ts:235 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/setShow.ts:186 ipc requestMain(Main.SHOW, { name: get(shows)&#91;id&#93;?.name, id }) ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 11; depth cutoffs: 123. Full edges/effects/conditions in JSON.

## click — event-da78d6c4ae11529d29

[code] [src/frontend/components/slide/Reference.svelte:138](../../../../../src/frontend/components/slide/Reference.svelte#L138); openInteraction. resolved-within-bound.

Conditions: src/frontend/components/slide/Reference.svelte:82 show?.reference?.type === "calendar"; src/frontend/components/slide/Reference.svelte:96 show?.reference?.type === "scripture"; src/frontend/components/slide/Reference.svelte:105 show?.reference?.type === "lessons"; src/frontend/components/slide/Reference.svelte:121 show?.reference?.type === "canva"; src/frontend/components/slide/Reference.svelte:131 show?.reference?.type === "interaction"; src/frontend/components/slide/Reference.svelte:59 $drawer.height <= 40.

Calls: src/frontend/components/slide/Reference.svelte:52 openInteraction (depth 0); src/frontend/components/helpers/historyHelpers.ts:764 setDrawerTabData (depth 1); src/frontend/components/helpers/historyHelpers.ts:765 <callback> (depth 2).

Effects: src/frontend/components/slide/Reference.svelte:53 store-write src/frontend/stores.ts#openedInteractionId ; src/frontend/components/slide/Reference.svelte:56 store-write src/frontend/stores.ts#activeDrawerTab ; src/frontend/components/slide/Reference.svelte:59 store-write src/frontend/stores.ts#drawer ; src/frontend/components/helpers/historyHelpers.ts:765 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
