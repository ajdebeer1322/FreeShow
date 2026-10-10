# automatic/src_electron_output_ppt_presentation.ts (1)

## setTimeout — event-accf04b0f57921ad4a

[code] [src/electron/output/ppt/presentation.ts:68](../../../../../src/electron/output/ppt/presentation.ts#L68); () => { alwaysOnTopDisabled.forEach((id) => { OutputValues.updateValue({ id, key: "alwaysOnTop", value: true }) }) alwaysOnTopDisabled = &#91;&#93; }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/output/ppt/presentation.ts:68 <callback> (depth 0); src/electron/output/ppt/presentation.ts:69 <callback> (depth 1); src/electron/output/helpers/OutputValues.ts:46 updateValue (depth 2); src/electron/output/OutputHelper.ts:51 getOutput (depth 3).

Effects: src/electron/output/helpers/OutputValues.ts:47 presentation OutputHelper.getOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-12210743cb6aed5ac6

[code] [src/electron/output/ppt/presentation.ts:170](../../../../../src/electron/output/ppt/presentation.ts#L170); () => { navigationTimeout = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/output/ppt/presentation.ts:170 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-8457b974a1ebc1e33b

[code] [src/electron/output/ppt/presentation.ts:179](../../../../../src/electron/output/ppt/presentation.ts#L179); () => { navigationTimeout = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/output/ppt/presentation.ts:179 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-1f7a5a3517bf72f8f3

[code] [src/electron/output/ppt/presentation.ts:206](../../../../../src/electron/output/ppt/presentation.ts#L206); updateState. partial.

Conditions: src/electron/output/ppt/presentation.ts:212 !currentSlideshow; src/electron/output/ppt/presentation.ts:213 stateUpdater; src/electron/output/ppt/presentation.ts:220 currentSlideshow; src/electron/output/ppt/presentation.ts:227 currentSlideshow; src/electron/output/ppt/presentation.ts:235 stateUpdater.

Calls: src/electron/output/ppt/presentation.ts:211 updateState (depth 0); src/electron/IPC/main.ts:9 sendToMain (depth 1).

Effects: src/electron/output/ppt/presentation.ts:232 ipc sendToMain(ToMain.PRESENTATION_STATE, state) ; src/electron/IPC/main.ts:13 ipc mainWindow.webContents.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-598ef27bf140cfca5b

[code] [src/electron/output/ppt/presentation.ts:236](../../../../../src/electron/output/ppt/presentation.ts#L236); updateState. partial.

Conditions: src/electron/output/ppt/presentation.ts:212 !currentSlideshow; src/electron/output/ppt/presentation.ts:213 stateUpdater; src/electron/output/ppt/presentation.ts:220 currentSlideshow; src/electron/output/ppt/presentation.ts:227 currentSlideshow; src/electron/output/ppt/presentation.ts:235 stateUpdater.

Calls: src/electron/output/ppt/presentation.ts:211 updateState (depth 0); src/electron/IPC/main.ts:9 sendToMain (depth 1).

Effects: src/electron/output/ppt/presentation.ts:232 ipc sendToMain(ToMain.PRESENTATION_STATE, state) ; src/electron/IPC/main.ts:13 ipc mainWindow.webContents.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
