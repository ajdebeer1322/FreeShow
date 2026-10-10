# keyboard/src_frontend_utils_shortcuts.ts (3)

## Ctrl/Cmd+s — event-f70f127219f0d29dbc

[code] [src/frontend/utils/shortcuts.ts:57](../../../../../src/frontend/utils/shortcuts.ts#L57); () => save(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:57 s (depth 0); src/frontend/utils/save.ts:124 save (depth 1); src/frontend/components/helpers/output.ts:112 updateSyncedOutputs (depth 2); src/frontend/components/helpers/output.ts:115 <callback> (depth 3); src/frontend/utils/common.ts:117 startAutosave (depth 2); src/frontend/utils/common.ts:18 isMainWindow (depth 3); src/frontend/utils/common.ts:129 <callback> (depth 3); src/frontend/utils/common.ts:33 setStatus (depth 2); src/frontend/utils/common.ts:39 <callback> (depth 3); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 2); src/frontend/components/actions/actions.ts:159 <callback> (depth 3); src/frontend/components/actions/actions.ts:33 runAction (depth 4); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/actions/actions.ts:49 <callback> (depth 5); src/frontend/components/actions/actions.ts:74 runTrigger (depth 5).

Effects: src/frontend/utils/save.ts:138 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/save.ts:139 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/save.ts:249 store-write src/frontend/stores.ts#deletedShows ; src/frontend/utils/save.ts:250 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/output.ts:115 store-write src/frontend/stores.ts#syncedOutputs ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/utils/save.ts:144 store-write src/frontend/stores.ts#special ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/utils/save.ts:254 ipc sendMain(Main.SAVE, saveData) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 23. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+t — event-e298440249c8789bb0

[code] [src/frontend/utils/shortcuts.ts:58](../../../../../src/frontend/utils/shortcuts.ts#L58); () => togglePanels(). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:58 t (depth 0); src/frontend/utils/common.ts:193 togglePanels (depth 1).

Effects: src/frontend/utils/common.ts:200 store-write src/frontend/stores.ts#drawer ; src/frontend/utils/common.ts:201 store-write src/frontend/stores.ts#resized ; src/frontend/utils/common.ts:207 store-write src/frontend/stores.ts#drawer ; src/frontend/utils/common.ts:208 store-write src/frontend/stores.ts#resized .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+y — event-693cb379b26f84b96f

[code] [src/frontend/utils/shortcuts.ts:59](../../../../../src/frontend/utils/shortcuts.ts#L59); () => redo(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:59 y (depth 0); src/frontend/components/helpers/history.ts:325 redo (depth 1); src/frontend/components/helpers/history.ts:330 <callback> (depth 2); src/frontend/components/helpers/historyStores.ts:11 createStore (depth 2); src/frontend/components/helpers/historyStores.ts:48 createStoreHistory (depth 3); src/frontend/components/helpers/historyStores.ts:52 <callback> (depth 4); src/frontend/components/helpers/history.ts:269 historyNew (depth 3); src/frontend/components/helpers/historyStores.ts:61 updateStoreHistory (depth 4); src/frontend/components/helpers/historyStores.ts:64 <callback> (depth 5); src/frontend/components/helpers/historyStores.ts:70 deleteStoreHistory (depth 4); src/frontend/components/helpers/historyStores.ts:73 <callback> (depth 5); src/frontend/components/helpers/history.ts:283 <callback> (depth 4); src/frontend/components/helpers/historyStores.ts:21 updateStore (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/helpers/historyStores.ts:61 updateStoreHistory (depth 3); src/frontend/components/helpers/historyStores.ts:64 <callback> (depth 4).

Effects: src/frontend/components/helpers/history.ts:360 history history dynamic; src/frontend/components/helpers/history.ts:330 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:283 store-write src/frontend/stores.ts#undoHistory ; src/frontend/components/helpers/history.ts:345 store-write src/frontend/stores.ts#undoHistory ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 11; depth cutoffs: 120. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+z — event-1cc75c18adbc3a36d0

[code] [src/frontend/utils/shortcuts.ts:60](../../../../../src/frontend/utils/shortcuts.ts#L60); () => undo(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:60 z (depth 0); src/frontend/components/helpers/history.ts:289 undo (depth 1); src/frontend/components/helpers/history.ts:294 <callback> (depth 2); src/frontend/components/helpers/historyStores.ts:35 deleteStore (depth 2); src/frontend/components/helpers/historyStores.ts:70 deleteStoreHistory (depth 3); src/frontend/components/helpers/historyStores.ts:73 <callback> (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/helpers/history.ts:269 historyNew (depth 3); src/frontend/components/helpers/historyStores.ts:48 createStoreHistory (depth 4); src/frontend/components/helpers/historyStores.ts:52 <callback> (depth 5); src/frontend/components/helpers/historyStores.ts:61 updateStoreHistory (depth 4); src/frontend/components/helpers/historyStores.ts:64 <callback> (depth 5); src/frontend/components/helpers/history.ts:283 <callback> (depth 4); src/frontend/components/helpers/historyStores.ts:21 updateStore (depth 2); src/frontend/components/helpers/historyStores.ts:61 updateStoreHistory (depth 3); src/frontend/components/helpers/historyStores.ts:64 <callback> (depth 4).

Effects: src/frontend/components/helpers/history.ts:322 history history dynamic; src/frontend/components/helpers/history.ts:294 store-write src/frontend/stores.ts#undoHistory ; src/frontend/components/helpers/history.ts:283 store-write src/frontend/stores.ts#undoHistory ; src/frontend/components/helpers/history.ts:309 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 11; depth cutoffs: 120. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+? — event-1e1d4cd65c2d185030

[code] [src/frontend/utils/shortcuts.ts:61](../../../../../src/frontend/utils/shortcuts.ts#L61); () => activePopup.set("shortcuts"). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:61 "?" (depth 0).

Effects: src/frontend/utils/shortcuts.ts:61 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+Shift+d — event-946aded695e17eea7a

[code] [src/frontend/utils/shortcuts.ts:65](../../../../../src/frontend/utils/shortcuts.ts#L65); () => (get(activePage) === "show" && get(activeShow) && (get(activeShow)?.type \|\| "show") === "show" ? activePopup.set("next_timer") : ""). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:65 d (depth 0).

Effects: src/frontend/utils/shortcuts.ts:65 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
