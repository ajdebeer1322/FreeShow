# automatic/src_frontend_components_helpers_output.ts (1)

## setTimeout — event-137a6a255b80751f85

[code] [src/frontend/components/helpers/output.ts:198](../../../../../src/frontend/components/helpers/output.ts#L198); () => customActionActivation("pdf_start"). partial.

Conditions: src/frontend/components/helpers/output.ts:198 out?.type !== "pdf"; src/frontend/components/helpers/output.ts:195 data.type === "pdf"; src/frontend/components/helpers/output.ts:176 type === "slide" && data?.id.

Calls: src/frontend/components/helpers/output.ts:198 <callback> (depth 0); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 1); src/frontend/components/actions/actions.ts:159 <callback> (depth 2); src/frontend/components/actions/actions.ts:33 runAction (depth 3); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:49 <callback> (depth 4); src/frontend/components/actions/actions.ts:74 runTrigger (depth 4); src/frontend/components/actions/actions.ts:235 getActionTriggerId (depth 5); src/frontend/utils/common.ts:46 wait (depth 5); src/frontend/utils/common.ts:47 <callback> (depth 6); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 5); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 6); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:665 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6).

Effects: src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 34. Full edges/effects/conditions in JSON.

## setTimeout — event-1e5c51c000e69aee67

[code] [src/frontend/components/helpers/output.ts:202](../../../../../src/frontend/components/helpers/output.ts#L202); () => customActionActivation("group_start", groupId). partial.

Conditions: src/frontend/components/helpers/output.ts:202 groupId; src/frontend/components/helpers/output.ts:195 data.type === "pdf"; src/frontend/components/helpers/output.ts:176 type === "slide" && data?.id.

Calls: src/frontend/components/helpers/output.ts:202 <callback> (depth 0); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 1); src/frontend/components/actions/actions.ts:159 <callback> (depth 2); src/frontend/components/actions/actions.ts:33 runAction (depth 3); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:49 <callback> (depth 4); src/frontend/components/actions/actions.ts:74 runTrigger (depth 4); src/frontend/components/actions/actions.ts:235 getActionTriggerId (depth 5); src/frontend/utils/common.ts:46 wait (depth 5); src/frontend/utils/common.ts:47 <callback> (depth 6); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 5); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 6); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:665 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6).

Effects: src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 34. Full edges/effects/conditions in JSON.

## setTimeout — event-e9aa3a9cf8faa6b32b

[code] [src/frontend/components/helpers/output.ts:228](../../../../../src/frontend/components/helpers/output.ts#L228); () => outputSlideCache.set({}). resolved-within-bound.

Conditions: src/frontend/components/helpers/output.ts:226 type === "slide" && data?.id.

Calls: src/frontend/components/helpers/output.ts:228 <callback> (depth 0).

Effects: src/frontend/components/helpers/output.ts:228 store-write src/frontend/stores.ts#outputSlideCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-7312672d55735fa22f

[code] [src/frontend/components/helpers/output.ts:465](../../../../../src/frontend/components/helpers/output.ts#L465); () => { // update stage background if any sendBackgroundToStage(id) // send thumbnail to controller // sendBackgroundToController(id) }. partial.

Conditions: src/frontend/components/helpers/output.ts:464 isMainWindow().

Calls: src/frontend/components/helpers/output.ts:465 <callback> (depth 0); src/frontend/utils/stageTalk.ts:19 sendBackgroundToStage (depth 1); src/frontend/utils/stageTalk.ts:46 getNextBackground (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 5); src/frontend/components/edit/scripts/textStyle.ts:306 <callback> (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 5); src/frontend/components/helpers/shows.ts:373 layouts (depth 3).

Effects: src/frontend/utils/stageTalk.ts:31 ipc send(STAGE, &#91;"BACKGROUND"&#93;, { path: "" }) ; src/frontend/utils/stageTalk.ts:42 ipc send(STAGE, &#91;"BACKGROUND"&#93;, bg) ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 9; depth cutoffs: 41. Full edges/effects/conditions in JSON.

## setTimeout — event-045c1c39ebd70278c7

[code] [src/frontend/components/helpers/output.ts:579](../../../../../src/frontend/components/helpers/output.ts#L579); () => { clearOverlayTimer(outputId, overlayId) if (!get(outputs)&#91;outputId&#93;?.out?.&#91;type&#93;?.includes(overlayId)) return setOutput(type, overlayId, true, outputId) }. partial.

Conditions: src/frontend/components/helpers/output.ts:581 !get(outputs)&#91;outputId&#93;?.out?.&#91;type&#93;?.includes(overlayId).

Calls: src/frontend/components/helpers/output.ts:579 <callback> (depth 0); src/frontend/components/helpers/output.ts:595 clearOverlayTimer (depth 1); src/frontend/components/helpers/output.ts:596 <callback> (depth 2); src/frontend/components/helpers/output.ts:158 setOutput (depth 1); src/frontend/components/helpers/shows.ts:389 ref (depth 2); src/frontend/components/helpers/shows.ts:394 <callback> (depth 3); src/frontend/components/helpers/shows.ts:397 <callback> (depth 4); src/frontend/components/helpers/shows.ts:402 <callback> (depth 5); src/frontend/components/helpers/shows.ts:415 <callback> (depth 5); src/frontend/components/helpers/shows.ts:103 set (depth 5); src/frontend/components/helpers/shows.ts:105 <callback> (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 5); src/frontend/components/helpers/shows.ts:76 get (depth 6); src/frontend/components/helpers/shows.ts:123 add (depth 6); src/frontend/components/helpers/shows.ts:142 remove (depth 6); src/frontend/components/helpers/shows.ts:162 items (depth 6).

Effects: src/frontend/components/helpers/output.ts:583 presentation setOutput ; src/frontend/components/helpers/output.ts:596 store-write src/frontend/stores.ts#overlayTimers ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:433 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:647 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 32; depth cutoffs: 132. Full edges/effects/conditions in JSON.

## setTimeout — event-c6e3bfab426aec2b76

[code] [src/frontend/components/helpers/output.ts:744](../../../../../src/frontend/components/helpers/output.ts#L744); () => { refreshOut(false) }. partial.

Conditions: src/frontend/components/helpers/output.ts:743 refresh.

Calls: src/frontend/components/helpers/output.ts:744 <callback> (depth 0); src/frontend/components/helpers/output.ts:735 refreshOut (depth 1); src/frontend/components/helpers/output.ts:736 <callback> (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:649 <callback> (depth 4); src/frontend/components/helpers/output.ts:737 <callback> (depth 3).

Effects: src/frontend/components/helpers/output.ts:736 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 4. Full edges/effects/conditions in JSON.
