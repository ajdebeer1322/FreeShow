# automatic/src_frontend_components_show_focus_FocusMode.svelte (1)

## setTimeout — event-475043ccc4e7b29d54

[code] [src/frontend/components/show/focus/FocusMode.svelte:33](../../../../../src/frontend/components/show/focus/FocusMode.svelte#L33); () => { if (isScrolling) clearTimeout(isScrolling) isScrolling = null projectUpdating = null if (normalView) scrollToActive() if (!normalView && $activeFocus.id) { const shows = pr. partial.

Conditions: src/frontend/components/show/focus/FocusMode.svelte:34 isScrolling; src/frontend/components/show/focus/FocusMode.svelte:37 normalView; src/frontend/components/show/focus/FocusMode.svelte:38 !normalView && $activeFocus.id; src/frontend/components/show/focus/FocusMode.svelte:40 active.index !== undefined && shows&#91;active.index&#93;?.id === active.id.

Calls: src/frontend/components/show/focus/FocusMode.svelte:33 <callback> (depth 0); src/frontend/components/show/focus/FocusMode.svelte:64 scrollToActive (depth 1); src/frontend/components/show/project.ts:38 shouldKeepProjectScroll (depth 2); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 2); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 3); src/frontend/utils/request.ts:4 send (depth 3); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 4); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 5); src/frontend/utils/request.ts:6 <callback> (depth 4); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 3); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 4); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 3); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 3); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 4); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 5); src/frontend/utils/common.ts:254 hasNewerUpdate (depth 2).

Effects: src/frontend/components/show/focus/FocusMode.svelte:41 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/show/focus/FocusMode.svelte:43 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-ba1c0c698866c8eb09

[code] [src/frontend/components/show/focus/FocusMode.svelte:109](../../../../../src/frontend/components/show/focus/FocusMode.svelte#L109); () => { scrollingToActive = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/focus/FocusMode.svelte:109 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-78437995e9c93df77c

[code] [src/frontend/components/show/focus/FocusMode.svelte:160](../../../../../src/frontend/components/show/focus/FocusMode.svelte#L160); () => { isScrolling = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/focus/FocusMode.svelte:160 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
