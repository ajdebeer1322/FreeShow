# automatic/src_frontend_utils_updateSettings.ts (1)

## setTimeout — event-7850e9c602a5108ea0

[code] [src/frontend/utils/updateSettings.ts:147](../../../../../src/frontend/utils/updateSettings.ts#L147); () => { restartOutputs() const delay = 1200 if (get(autoOutput)) setTimeout(() => toggleOutputs(null, { autoStartup: true }), get(os).platform === "darwin" ? delay + 300 : delay) s. partial.

Conditions: src/frontend/utils/updateSettings.ts:145 data.outputs; src/frontend/utils/updateSettings.ts:151 get(autoOutput).

Calls: src/frontend/utils/updateSettings.ts:148 <callback> (depth 0); src/frontend/utils/updateSettings.ts:230 restartOutputs (depth 1); src/frontend/components/helpers/array.ts:137 keysToID (depth 2); src/frontend/components/helpers/array.ts:139 <callback> (depth 3); src/frontend/utils/updateSettings.ts:232 <callback> (depth 2); src/frontend/utils/updateSettings.ts:232 <callback> (depth 2); src/frontend/utils/updateSettings.ts:234 <callback> (depth 2); src/frontend/utils/request.ts:4 send (depth 3); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 4); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 5); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 5); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 6); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 6); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 4).

Effects: src/frontend/utils/updateSettings.ts:238 ipc send(OUTPUT, &#91;"CREATE"&#93;, { ...output, id }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/output.ts:146 ipc send(OUTPUT, &#91;"TOGGLE_OUTPUTS"&#93;, { outputs: sortedOutputList, state, autoStartup: options.autoStartup, autoPosition }) ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:958 ipc send(OUTPUT, &#91;"CAPTURE"&#93;, { id: outputId, captures }) ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/audio/audioSender.ts:305 ipc send(AUDIO, &#91;"CLOSE_PORT"&#93;, { id: targetId }) ; src/frontend/audio/audioSender.ts:169 ipc send(AUDIO, &#91;"INIT_PORT"&#93;, { id: targetId }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 32; depth cutoffs: 25. Full edges/effects/conditions in JSON.

## setTimeout — event-d29c96bebb7bc00536

[code] [src/frontend/utils/updateSettings.ts:151](../../../../../src/frontend/utils/updateSettings.ts#L151); () => toggleOutputs(null, { autoStartup: true }). partial.

Conditions: src/frontend/utils/updateSettings.ts:151 get(autoOutput); src/frontend/utils/updateSettings.ts:145 data.outputs.

Calls: src/frontend/utils/updateSettings.ts:151 <callback> (depth 0); src/frontend/components/helpers/output.ts:130 toggleOutputs (depth 1); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 2); src/frontend/components/helpers/array.ts:42 sortByName (depth 3); src/frontend/components/helpers/array.ts:45 <callback> (depth 4); src/frontend/components/helpers/array.ts:46 <callback> (depth 4); src/frontend/components/helpers/array.ts:137 keysToID (depth 3); src/frontend/components/helpers/array.ts:139 <callback> (depth 4); src/frontend/components/helpers/output.ts:677 <callback> (depth 3); src/frontend/components/helpers/output.ts:679 <callback> (depth 3); src/frontend/components/helpers/output.ts:679 <callback> (depth 3); src/frontend/components/helpers/output.ts:681 <callback> (depth 3); src/frontend/utils/common.ts:18 isMainWindow (depth 3); src/frontend/components/helpers/output.ts:1102 addOutput (depth 3); src/frontend/components/helpers/output.ts:1106 <callback> (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5).

Effects: src/frontend/components/helpers/output.ts:146 ipc send(OUTPUT, &#91;"TOGGLE_OUTPUTS"&#93;, { outputs: sortedOutputList, state, autoStartup: options.autoStartup, autoPosition }) ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 4. Full edges/effects/conditions in JSON.

## setTimeout — event-72c0b56cc4d84d499d

[code] [src/frontend/utils/updateSettings.ts:152](../../../../../src/frontend/utils/updateSettings.ts#L152); () => checkWindowCapture(true). partial.

Conditions: src/frontend/utils/updateSettings.ts:145 data.outputs.

Calls: src/frontend/utils/updateSettings.ts:152 <callback> (depth 0); src/frontend/components/helpers/output.ts:936 checkWindowCapture (depth 1); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 2); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/components/helpers/array.ts:53 sortObject (depth 4); src/frontend/components/helpers/array.ts:54 <callback> (depth 5); src/frontend/utils/language.ts:83 translateText (depth 6); src/frontend/components/helpers/array.ts:42 sortByName (depth 4); src/frontend/components/helpers/array.ts:45 <callback> (depth 5); src/frontend/components/helpers/array.ts:46 <callback> (depth 5); src/frontend/components/helpers/array.ts:137 keysToID (depth 4); src/frontend/components/helpers/array.ts:139 <callback> (depth 5); src/frontend/components/helpers/output.ts:616 <callback> (depth 3); src/frontend/utils/common.ts:18 isMainWindow (depth 3); src/frontend/components/helpers/output.ts:618 <callback> (depth 3).

Effects: src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:958 ipc send(OUTPUT, &#91;"CAPTURE"&#93;, { id: outputId, captures }) ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/audio/audioSender.ts:305 ipc send(AUDIO, &#91;"CLOSE_PORT"&#93;, { id: targetId }) ; src/frontend/audio/audioSender.ts:305 ipc send(AUDIO, &#91;"CLOSE_PORT"&#93;, { id: targetId }) ; src/frontend/audio/audioSender.ts:169 ipc send(AUDIO, &#91;"INIT_PORT"&#93;, { id: targetId }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 34; depth cutoffs: 20. Full edges/effects/conditions in JSON.

## setTimeout — event-efda5f5b29828e90d6

[code] [src/frontend/utils/updateSettings.ts:203](../../../../../src/frontend/utils/updateSettings.ts#L203); () => { special.update((a) => { a&#91;"actions_grid" + tagId&#93; = true return a }) }. resolved-within-bound.

Conditions: src/frontend/utils/updateSettings.ts:199 typeof data.actionTags === "object".

Calls: src/frontend/utils/updateSettings.ts:203 <callback> (depth 0); src/frontend/utils/updateSettings.ts:204 <callback> (depth 1).

Effects: src/frontend/utils/updateSettings.ts:204 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-7848dcf81618178265

[code] [src/frontend/utils/updateSettings.ts:280](../../../../../src/frontend/utils/updateSettings.ts#L280); () => { Object.entries(v \|\| {}).forEach((&#91;id, outputIds&#93;: any) => { // only get locked overlays if (!get(overlays)&#91;id&#93;?.locked) return if (outputIds?.length) outputIds.forEach((out. partial.

Conditions: src/frontend/utils/updateSettings.ts:283 !get(overlays)&#91;id&#93;?.locked; src/frontend/utils/updateSettings.ts:285 outputIds?.length.

Calls: src/frontend/utils/updateSettings.ts:280 <callback> (depth 0); src/frontend/utils/updateSettings.ts:281 <callback> (depth 1); src/frontend/utils/updateSettings.ts:285 <callback> (depth 2); src/frontend/components/helpers/output.ts:158 setOutput (depth 3); src/frontend/components/helpers/shows.ts:389 ref (depth 4); src/frontend/components/helpers/shows.ts:394 <callback> (depth 5); src/frontend/components/helpers/shows.ts:397 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 4); src/frontend/components/helpers/shows.ts:375 get (depth 5); src/frontend/components/helpers/shows.ts:379 <callback> (depth 6); src/frontend/components/helpers/shows.ts:476 set (depth 5); src/frontend/components/helpers/shows.ts:478 <callback> (depth 6); src/frontend/components/helpers/shows.ts:494 add (depth 5); src/frontend/components/helpers/shows.ts:495 <callback> (depth 6).

Effects: src/frontend/utils/updateSettings.ts:286 presentation setOutput ; src/frontend/utils/updateSettings.ts:285 presentation setOutput ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/output.ts:454 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/utils/analytics.ts:26 network fetch .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 11; depth cutoffs: 204. Full edges/effects/conditions in JSON.

## setTimeout — event-e0822dbc3095a71bb2

[code] [src/frontend/utils/updateSettings.ts:294](../../../../../src/frontend/utils/updateSettings.ts#L294); () => { Object.entries(v \|\| {}).forEach((&#91;id, outputIds&#93;: any) => startScene(id, outputIds)) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/updateSettings.ts:294 <callback> (depth 0); src/frontend/utils/updateSettings.ts:295 <callback> (depth 1); src/frontend/components/helpers/output.ts:496 startScene (depth 2); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 3); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 4); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 5); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 6); src/frontend/components/helpers/output.ts:647 <callback> (depth 5); src/frontend/utils/common.ts:18 isMainWindow (depth 5); src/frontend/components/helpers/output.ts:649 <callback> (depth 5); src/frontend/components/helpers/output.ts:658 <callback> (depth 4); src/frontend/components/helpers/output.ts:504 <callback> (depth 3); src/frontend/components/helpers/output.ts:93 isOutputBound (depth 4); src/frontend/components/helpers/output.ts:96 <callback> (depth 5); src/frontend/components/helpers/output.ts:76 resolveOutputId (depth 6).

Effects: src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:536 presentation setOutput ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/output.ts:251 presentation clearBackground ; src/frontend/components/helpers/output.ts:225 store-write src/frontend/stores.ts#outputs ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 82. Full edges/effects/conditions in JSON.
