# click/src_frontend_components_drawer_info_ShowInfo.svelte (1)

## click — event-894d337dd81bbc9f1a

[code] [src/frontend/components/drawer/info/ShowInfo.svelte:99](../../../../../src/frontend/components/drawer/info/ShowInfo.svelte#L99); () => activeTagFilter.set(&#91;&#93;). resolved-within-bound.

Conditions: src/frontend/components/drawer/info/ShowInfo.svelte:98 $activeTagFilter?.length && !optionsOpen.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/info/ShowInfo.svelte:99 store-write src/frontend/stores.ts#activeTagFilter .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5b3aa95b6583904b4d

[code] [src/frontend/components/drawer/info/ShowInfo.svelte:115](../../../../../src/frontend/components/drawer/info/ShowInfo.svelte#L115); () => (usageLogExported ? resetUsageLog() : exportUsageLog()). partial.

Conditions: src/frontend/components/drawer/info/ShowInfo.svelte:106 optionsOpen; src/frontend/components/drawer/info/ShowInfo.svelte:113 $special.logSongUsage && $usageLog.all?.length.

Calls: src/frontend/components/drawer/info/ShowInfo.svelte:92 resetUsageLog (depth 1); src/frontend/components/drawer/info/ShowInfo.svelte:84 exportUsageLog (depth 1); src/frontend/components/drawer/info/ShowInfo.svelte:86 <callback> (depth 2); src/frontend/utils/request.ts:4 send (depth 2); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 3); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 4); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 4); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 4); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 5); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 6); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 5); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 5); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 3).

Effects: src/frontend/components/drawer/info/ShowInfo.svelte:93 store-write src/frontend/stores.ts#usageLog ; src/frontend/components/drawer/info/ShowInfo.svelte:90 ipc send(EXPORT, &#91;"USAGE"&#93;, { content: $usageLog }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 1. Full edges/effects/conditions in JSON.

## click — event-e7c186806086210c80

[code] [src/frontend/components/drawer/info/ShowInfo.svelte:125](../../../../../src/frontend/components/drawer/info/ShowInfo.svelte#L125); () => { popupData.set({ type: "shows" }) activePopup.set("cleaning_utility") }. resolved-within-bound.

Conditions: src/frontend/components/drawer/info/ShowInfo.svelte:106 optionsOpen.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/info/ShowInfo.svelte:126 store-write src/frontend/stores.ts#popupData ; src/frontend/components/drawer/info/ShowInfo.svelte:127 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
