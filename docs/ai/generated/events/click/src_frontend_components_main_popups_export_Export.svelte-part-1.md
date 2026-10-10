# click/src_frontend_components_main_popups_export_Export.svelte (1)

## click — event-e773d03f7a0eb379b9

[code] [src/frontend/components/main/popups/export/Export.svelte:174](../../../../../src/frontend/components/main/popups/export/Export.svelte#L174); (e) => (exportType = e.detail). resolved-within-bound.

Conditions: src/frontend/components/main/popups/export/Export.svelte:171 !exportType.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7794d551c60a2d5190

[code] [src/frontend/components/main/popups/export/Export.svelte:176](../../../../../src/frontend/components/main/popups/export/Export.svelte#L176); () => (exportType = ""). resolved-within-bound.

Conditions: src/frontend/components/main/popups/export/Export.svelte:171 !exportType; src/frontend/components/main/popups/export/Export.svelte:175 !exportFormat.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9cd649cc040e047b60

[code] [src/frontend/components/main/popups/export/Export.svelte:180](../../../../../src/frontend/components/main/popups/export/Export.svelte#L180); (e) => (exportFormat = e.detail). resolved-within-bound.

Conditions: src/frontend/components/main/popups/export/Export.svelte:171 !exportType; src/frontend/components/main/popups/export/Export.svelte:175 !exportFormat.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9cc8023a042313ccd1

[code] [src/frontend/components/main/popups/export/Export.svelte:182](../../../../../src/frontend/components/main/popups/export/Export.svelte#L182); () => (exportFormat = ""). resolved-within-bound.

Conditions: src/frontend/components/main/popups/export/Export.svelte:171 !exportType; src/frontend/components/main/popups/export/Export.svelte:175 !exportFormat.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-46d6f63772bc651722

[code] [src/frontend/components/main/popups/export/Export.svelte:205](../../../../../src/frontend/components/main/popups/export/Export.svelte#L205); exportClick. partial.

Conditions: src/frontend/components/main/popups/export/Export.svelte:171 !exportType; src/frontend/components/main/popups/export/Export.svelte:175 !exportFormat; src/frontend/components/main/popups/export/Export.svelte:81 loading; src/frontend/components/main/popups/export/Export.svelte:84 !exportFormat; src/frontend/components/main/popups/export/Export.svelte:86 nothingToExport; src/frontend/components/main/popups/export/Export.svelte:92 exportType === "all_shows"; src/frontend/components/main/popups/export/Export.svelte:98 exportFormat === "project"; src/frontend/components/main/popups/export/Export.svelte:100 !project; src/frontend/components/main/popups/export/Export.svelte:101 !showIds.length \|\| !previewShow; src/frontend/components/main/popups/export/Export.svelte:114 exportFormat === "image"; src/frontend/components/main/popups/export/Export.svelte:120 !base64; src/frontend/components/main/popups/export/Export.svelte:124 exportFormat === "pdf"; src/frontend/components/main/popups/export/Export.svelte:130 project; src/frontend/components/main/popups/export/Export.svelte:137 type === "show".

Calls: src/frontend/components/main/popups/export/Export.svelte:80 exportClick (depth 0); src/frontend/utils/save.ts:124 save (depth 1); src/frontend/components/helpers/output.ts:112 updateSyncedOutputs (depth 2); src/frontend/components/helpers/output.ts:115 <callback> (depth 3); src/frontend/utils/common.ts:117 startAutosave (depth 2); src/frontend/utils/common.ts:18 isMainWindow (depth 3); src/frontend/utils/common.ts:129 <callback> (depth 3); src/frontend/utils/common.ts:33 setStatus (depth 2); src/frontend/utils/common.ts:39 <callback> (depth 3); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 2); src/frontend/components/actions/actions.ts:159 <callback> (depth 3); src/frontend/components/actions/actions.ts:33 runAction (depth 4); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/actions/actions.ts:49 <callback> (depth 5); src/frontend/components/actions/actions.ts:74 runTrigger (depth 5).

Effects: src/frontend/components/main/popups/export/Export.svelte:151 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/export/Export.svelte:94 ipc send(EXPORT, &#91;"ALL_SHOWS"&#93;, { type: exportFormat }) ; src/frontend/components/main/popups/export/Export.svelte:145 ipc send(EXPORT, &#91;"GENERATE"&#93;, { type: exportFormat, showIds: finalShowIds, showNames, options: pdfOptions, projectItems: project?.shows }) ; src/frontend/components/main/popups/export/Export.svelte:148 ipc send(EXPORT, &#91;"GENERATE"&#93;, { type: exportFormat, showIds, showNames }) ; src/frontend/utils/save.ts:138 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/save.ts:139 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/save.ts:249 store-write src/frontend/stores.ts#deletedShows ; src/frontend/utils/save.ts:250 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/output.ts:115 store-write src/frontend/stores.ts#syncedOutputs ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 15; depth cutoffs: 71. Full edges/effects/conditions in JSON.
