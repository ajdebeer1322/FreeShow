# keyboard/src_frontend_utils_shortcuts.ts (5)

## Alt+Enter — event-3422081123a310bbe6

[code] [src/frontend/utils/shortcuts.ts:89](../../../../../src/frontend/utils/shortcuts.ts#L89); () => (get(activePage) === "show" && !document.activeElement?.closest(".quickEdit") ? menuClick("cut_in_half", true, null, null, null, get(selected)) : null). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:89 Enter (depth 0); src/frontend/components/context/menuClick.ts:136 menuClick (depth 1); src/frontend/components/context/menuClick.ts:2088 cut_in_half (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 3); src/frontend/components/helpers/shows.ts:389 ref (depth 4); src/frontend/components/helpers/shows.ts:394 <callback> (depth 5); src/frontend/components/helpers/shows.ts:397 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 4); src/frontend/components/helpers/shows.ts:375 get (depth 5); src/frontend/components/helpers/shows.ts:379 <callback> (depth 6); src/frontend/components/helpers/shows.ts:476 set (depth 5); src/frontend/components/helpers/shows.ts:478 <callback> (depth 6); src/frontend/components/helpers/shows.ts:494 add (depth 5).

Effects: src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/show/slides.ts:680 history history UPDATE; src/frontend/show/slides.ts:682 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/show.ts:391 history history UPDATE.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 5; depth cutoffs: 76. Full edges/effects/conditions in JSON.

## Escape — event-291ba23b2128386b47

[code] [src/frontend/utils/shortcuts.ts:94](../../../../../src/frontend/utils/shortcuts.ts#L94); () => { // hide quick search if (get(quickSearchActive)) { quickSearchActive.set(false) return } // hide context menu if (get(contextActive) \|\| get(topContextActive)) { // timeout. resolved-within-bound.

Conditions: src/frontend/utils/shortcuts.ts:96 get(quickSearchActive); src/frontend/utils/shortcuts.ts:102 get(contextActive) \|\| get(topContextActive); src/frontend/utils/shortcuts.ts:114 document.activeElement !== document.body; src/frontend/utils/shortcuts.ts:117 !popupId && get(selected).id; src/frontend/utils/shortcuts.ts:121 popupId && disablePopupClose.includes(popupId); src/frontend/utils/shortcuts.ts:122 popupId === "alert" && get(alertMessage) === "actions.closing"; src/frontend/utils/shortcuts.ts:126 popupId; src/frontend/utils/shortcuts.ts:127 get(selected).id.

Calls: src/frontend/utils/shortcuts.ts:94 Escape (depth 0); src/frontend/utils/shortcuts.ts:104 <callback> (depth 1); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 2); src/frontend/utils/shortcuts.ts:117 <callback> (depth 1); src/frontend/utils/shortcuts.ts:125 <callback> (depth 1).

Effects: src/frontend/utils/shortcuts.ts:97 store-write src/frontend/stores.ts#quickSearchActive ; src/frontend/utils/shortcuts.ts:106 store-write src/frontend/stores.ts#topContextActive ; src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck ; src/frontend/utils/shortcuts.ts:117 store-write src/frontend/stores.ts#selected ; src/frontend/utils/shortcuts.ts:126 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/shortcuts.ts:127 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Enter — event-8ee275658c4a89b547

[code] [src/frontend/utils/shortcuts.ts:130](../../../../../src/frontend/utils/shortcuts.ts#L130); () => { if (get(activePopup)) return // open last used project if Enter pressed "first" on startup if (get(showRecentlyUsedProjects) && !get(activeShow) && get(activePage) === "sho. partial.

Conditions: src/frontend/utils/shortcuts.ts:131 get(activePopup); src/frontend/utils/shortcuts.ts:134 get(showRecentlyUsedProjects) && !get(activeShow) && get(activePage) === "show"; src/frontend/utils/shortcuts.ts:136 lastUsedProject.

Calls: src/frontend/utils/shortcuts.ts:130 Enter (depth 0); src/frontend/components/show/project.ts:79 getRecentlyUsedProjects (depth 1); src/frontend/components/helpers/array.ts:137 keysToID (depth 2); src/frontend/components/helpers/array.ts:139 <callback> (depth 3); src/frontend/components/show/project.ts:81 <callback> (depth 2); src/frontend/components/helpers/array.ts:22 sortByTimeNew (depth 2); src/frontend/components/helpers/array.ts:24 <callback> (depth 3); src/frontend/components/show/project.ts:11 openProject (depth 1); src/frontend/components/show/project.ts:24 markProjectAsUsed (depth 2); src/frontend/components/show/project.ts:26 <callback> (depth 3); src/frontend/components/show/project.ts:29 <callback> (depth 3); src/frontend/components/show/project.ts:42 openProjectItem (depth 2); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 3); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 4); src/frontend/utils/request.ts:4 send (depth 4); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 5).

Effects: src/frontend/components/show/project.ts:12 store-write src/frontend/stores.ts#projectView ; src/frontend/components/show/project.ts:17 store-write src/frontend/stores.ts#showRecentlyUsedProjects ; src/frontend/components/show/project.ts:18 store-write src/frontend/stores.ts#activeProject ; src/frontend/components/show/project.ts:26 store-write src/frontend/stores.ts#saved ; src/frontend/components/show/project.ts:29 store-write src/frontend/stores.ts#projects ; src/frontend/components/show/project.ts:52 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/show/project.ts:74 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/show/project.ts:75 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries ; src/frontend/components/show/project.ts:65 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Delete — event-7bed223423975b99d9

[code] [src/frontend/utils/shortcuts.ts:139](../../../../../src/frontend/utils/shortcuts.ts#L139); () => (get(contextActive) ? null : deleteAction(get(selected), "remove")). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:139 Delete (depth 0); src/frontend/components/helpers/clipboard.ts:200 deleteAction (depth 1).

Effects: src/frontend/components/helpers/clipboard.ts:211 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Backspace — event-0e79702f0838f7d789

[code] [src/frontend/utils/shortcuts.ts:140](../../../../../src/frontend/utils/shortcuts.ts#L140); () => keys.Delete(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:140 Backspace (depth 0); src/frontend/utils/shortcuts.ts:139 Delete (depth 1); src/frontend/components/helpers/clipboard.ts:200 deleteAction (depth 2).

Effects: src/frontend/components/helpers/clipboard.ts:211 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## F2 — event-b25f914ff5fc6d3624

[code] [src/frontend/utils/shortcuts.ts:142](../../../../../src/frontend/utils/shortcuts.ts#L142); () => (get(focusMode) ? null : setTimeout(() => menuClick("rename", true, null, null, null, get(selected)))). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:142 F2 (depth 0); src/frontend/utils/shortcuts.ts:142 <callback> (depth 1); src/frontend/components/context/menuClick.ts:136 menuClick (depth 2); src/frontend/components/context/menuClick.ts:263 rename (depth 3).

Effects: src/frontend/components/context/menuClick.ts:271 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/context/menuClick.ts:272 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/context/menuClick.ts:273 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/context/menuClick.ts:275 store-write src/frontend/stores.ts#selected ; src/frontend/components/context/menuClick.ts:276 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/context/menuClick.ts:278 store-write src/frontend/stores.ts#selected ; src/frontend/components/context/menuClick.ts:279 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/context/menuClick.ts:281 store-write src/frontend/stores.ts#selected ; src/frontend/components/context/menuClick.ts:282 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/context/menuClick.ts:283 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/context/menuClick.ts:284 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/context/menuClick.ts:285 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/context/menuClick.ts:286 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/context/menuClick.ts:287 store-write src/frontend/stores.ts#activeRename .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
