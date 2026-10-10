# keyboard/src_frontend_utils_shortcuts.ts (6)

## F11 — event-3131245f210cc874c0

[code] [src/frontend/utils/shortcuts.ts:144](../../../../../src/frontend/utils/shortcuts.ts#L144); () => (get(os).platform !== "darwin" ? sendMain(Main.FULLSCREEN) : null). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:144 F11 (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/utils/shortcuts.ts:144 ipc sendMain(Main.FULLSCREEN) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+l — event-844cd4a8827327bd9e

[code] [src/frontend/utils/shortcuts.ts:344](../../../../../src/frontend/utils/shortcuts.ts#L344); () => outLocked.set(!get(outLocked)). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:344 l (depth 0).

Effects: src/frontend/utils/shortcuts.ts:344 store-write src/frontend/stores.ts#outLocked .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+r — event-12489d63c2abb6638f

[code] [src/frontend/utils/shortcuts.ts:345](../../../../../src/frontend/utils/shortcuts.ts#L345); () => { if (!get(outLocked)) refreshOut() }. partial.

Conditions: src/frontend/utils/shortcuts.ts:346 !get(outLocked).

Calls: src/frontend/utils/shortcuts.ts:345 r (depth 0); src/frontend/components/helpers/output.ts:735 refreshOut (depth 1); src/frontend/components/helpers/output.ts:736 <callback> (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:649 <callback> (depth 4); src/frontend/components/helpers/output.ts:737 <callback> (depth 3); src/frontend/components/helpers/output.ts:744 <callback> (depth 2).

Effects: src/frontend/components/helpers/output.ts:736 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 4. Full edges/effects/conditions in JSON.

## Escape — event-d92f9d09e4ac0f51e4

[code] [src/frontend/utils/shortcuts.ts:352](../../../../../src/frontend/utils/shortcuts.ts#L352); () => { // WIP if (allCleared) fullscreen = false setTimeout(clearAll) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:352 Escape (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## . — event-8b4b608db8a1fe36c8

[code] [src/frontend/utils/shortcuts.ts:357](../../../../../src/frontend/utils/shortcuts.ts#L357); () => { if (!presentationControllersKeysDisabled()) clearAll() }. partial.

Conditions: src/frontend/utils/shortcuts.ts:358 !presentationControllersKeysDisabled().

Calls: src/frontend/utils/shortcuts.ts:357 "." (depth 0); src/frontend/utils/shortcuts.ts:450 presentationControllersKeysDisabled (depth 1); src/frontend/components/output/clear.ts:14 clearAll (depth 1); src/frontend/components/helpers/output.ts:751 isOutCleared (depth 2); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 3); src/frontend/components/helpers/array.ts:42 sortByName (depth 4); src/frontend/components/helpers/array.ts:45 <callback> (depth 5); src/frontend/components/helpers/array.ts:46 <callback> (depth 5); src/frontend/components/helpers/array.ts:137 keysToID (depth 4); src/frontend/components/helpers/array.ts:139 <callback> (depth 5); src/frontend/components/helpers/output.ts:677 <callback> (depth 4); src/frontend/components/helpers/output.ts:679 <callback> (depth 4); src/frontend/components/helpers/output.ts:679 <callback> (depth 4); src/frontend/components/helpers/output.ts:681 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:1102 addOutput (depth 4).

Effects: src/frontend/utils/shortcuts.ts:358 presentation clearAll ; src/frontend/components/output/clear.ts:30 presentation clearBackground ; src/frontend/components/output/clear.ts:31 presentation clearSlide ; src/frontend/components/output/clear.ts:32 presentation clearOverlays ; src/frontend/components/output/clear.ts:19 store-write src/frontend/stores.ts#outputSlideCache ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/output/clear.ts:39 store-write src/frontend/stores.ts#outputCache ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/output/clear.ts:43 store-write src/frontend/stores.ts#outputCache ; src/frontend/components/timeline/TimelinePlayback.ts:154 store-write src/frontend/stores.ts#isTimelinePlaying .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 34; depth cutoffs: 343. Full edges/effects/conditions in JSON.

## F1 — event-f3e8cf2751d6b43a83

[code] [src/frontend/utils/shortcuts.ts:360](../../../../../src/frontend/utils/shortcuts.ts#L360); () => { if (get(outLocked)) return clearBackground() timelineRecordingAction.set({ id: "clear_background" }) }. partial.

Conditions: src/frontend/utils/shortcuts.ts:361 get(outLocked).

Calls: src/frontend/utils/shortcuts.ts:360 F1 (depth 0); src/frontend/components/output/clear.ts:88 clearBackground (depth 1); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:649 <callback> (depth 4); src/frontend/components/helpers/output.ts:658 <callback> (depth 3); src/frontend/components/output/clear.ts:91 <callback> (depth 2).

Effects: src/frontend/utils/shortcuts.ts:362 presentation clearBackground ; src/frontend/utils/shortcuts.ts:363 store-write src/frontend/stores.ts#timelineRecordingAction ; src/frontend/components/output/clear.ts:95 store-write src/frontend/stores.ts#customMessageCredits ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/output/clear.ts:92 presentation setOutput ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/output.ts:454 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 121. Full edges/effects/conditions in JSON.
