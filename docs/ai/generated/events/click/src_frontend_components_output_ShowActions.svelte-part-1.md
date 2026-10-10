# click/src_frontend_components_output_ShowActions.svelte (1)

## click — event-8d5f9b050f285cca5f

[code] [src/frontend/components/output/ShowActions.svelte:88](../../../../../src/frontend/components/output/ShowActions.svelte#L88); () => OutputHelper.advanceOutputs("previous"). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/OutputHelper.ts:23 advanceOutputs (depth 1); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:649 <callback> (depth 4); src/frontend/components/helpers/output.ts:658 <callback> (depth 3); src/frontend/components/helpers/OutputHelper.ts:67 getLinkedWaiting (depth 2); src/frontend/components/helpers/OutputHelper.ts:43 getCardOutputs (depth 3).

Effects: src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/OutputHelper.ts:96 presentation setOutput ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/output/clear.ts:162 presentation setOutput ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries ; src/frontend/components/helpers/OutputHelper.ts:706 presentation setOutput ; src/frontend/components/helpers/OutputHelper.ts:707 presentation updateOut ; src/frontend/components/helpers/OutputHelper.ts:332 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/helpers/OutputHelper.ts:719 presentation setOutput ; src/frontend/components/helpers/OutputHelper.ts:748 ipc sendMain(Main.PRESENTATION_CONTROL, { action: next ? "next" : "previous" }) ; src/frontend/components/output/ShowActions.svelte:88 presentation OutputHelper.advanceOutputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 116. Full edges/effects/conditions in JSON.

## click — event-68846bba7b7d25eb48

[code] [src/frontend/components/output/ShowActions.svelte:91](../../../../../src/frontend/components/output/ShowActions.svelte#L91); () => OutputHelper.advanceOutputs("next"). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/OutputHelper.ts:23 advanceOutputs (depth 1); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:649 <callback> (depth 4); src/frontend/components/helpers/output.ts:658 <callback> (depth 3); src/frontend/components/helpers/OutputHelper.ts:67 getLinkedWaiting (depth 2); src/frontend/components/helpers/OutputHelper.ts:43 getCardOutputs (depth 3).

Effects: src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/OutputHelper.ts:96 presentation setOutput ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/output/clear.ts:162 presentation setOutput ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries ; src/frontend/components/helpers/OutputHelper.ts:706 presentation setOutput ; src/frontend/components/helpers/OutputHelper.ts:707 presentation updateOut ; src/frontend/components/helpers/OutputHelper.ts:332 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/helpers/OutputHelper.ts:719 presentation setOutput ; src/frontend/components/helpers/OutputHelper.ts:748 ipc sendMain(Main.PRESENTATION_CONTROL, { action: next ? "next" : "previous" }) ; src/frontend/components/output/ShowActions.svelte:91 presentation OutputHelper.advanceOutputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 116. Full edges/effects/conditions in JSON.

## click — event-90d8f109693f182fde

[code] [src/frontend/components/output/ShowActions.svelte:96](../../../../../src/frontend/components/output/ShowActions.svelte#L96); () => refreshOut(). partial.

Conditions: src/frontend/components/output/ShowActions.svelte:95 shouldRefresh.

Calls: src/frontend/components/helpers/output.ts:735 refreshOut (depth 1); src/frontend/components/helpers/output.ts:736 <callback> (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:649 <callback> (depth 4); src/frontend/components/helpers/output.ts:737 <callback> (depth 3); src/frontend/components/helpers/output.ts:744 <callback> (depth 2).

Effects: src/frontend/components/helpers/output.ts:736 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 4. Full edges/effects/conditions in JSON.

## click — event-6b293bf63f5f155924

[code] [src/frontend/components/output/ShowActions.svelte:100](../../../../../src/frontend/components/output/ShowActions.svelte#L100); playCurrent. partial.

Conditions: src/frontend/components/output/ShowActions.svelte:95 shouldRefresh; src/frontend/components/output/ShowActions.svelte:56 currentOverlay; src/frontend/components/output/ShowActions.svelte:74 !currentShow \|\| !$showsCache&#91;currentShow.id&#93;?.settings; src/frontend/components/output/ShowActions.svelte:77 isEdit.

Calls: src/frontend/components/output/ShowActions.svelte:55 playCurrent (depth 0); src/frontend/components/helpers/output.ts:158 setOutput (depth 1); src/frontend/components/helpers/shows.ts:389 ref (depth 2); src/frontend/components/helpers/shows.ts:394 <callback> (depth 3); src/frontend/components/helpers/shows.ts:397 <callback> (depth 4); src/frontend/components/helpers/shows.ts:402 <callback> (depth 5); src/frontend/components/helpers/shows.ts:415 <callback> (depth 5); src/frontend/components/helpers/shows.ts:103 set (depth 5); src/frontend/components/helpers/shows.ts:105 <callback> (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 5); src/frontend/components/helpers/shows.ts:76 get (depth 6); src/frontend/components/helpers/shows.ts:123 add (depth 6); src/frontend/components/helpers/shows.ts:142 remove (depth 6); src/frontend/components/helpers/shows.ts:162 items (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 5); src/frontend/components/helpers/shows.ts:27 get (depth 6).

Effects: src/frontend/components/output/ShowActions.svelte:57 presentation setOutput ; src/frontend/components/output/ShowActions.svelte:77 presentation setOutput ; src/frontend/components/output/ShowActions.svelte:79 presentation setOutput ; src/frontend/components/output/ShowActions.svelte:83 presentation updateOut ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:433 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:647 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 80; depth cutoffs: 249. Full edges/effects/conditions in JSON.

## click — event-c634a97f436957fc22

[code] [src/frontend/components/output/ShowActions.svelte:105](../../../../../src/frontend/components/output/ShowActions.svelte#L105); () => outLocked.set(!$outLocked). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/output/ShowActions.svelte:105 store-write src/frontend/stores.ts#outLocked .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3d72a104ba545422c1

[code] [src/frontend/components/output/ShowActions.svelte:110](../../../../../src/frontend/components/output/ShowActions.svelte#L110); () => { popupData.set({}) activePopup.set("transition") }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/output/ShowActions.svelte:111 store-write src/frontend/stores.ts#popupData ; src/frontend/components/output/ShowActions.svelte:112 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
