# click/src_server_stage_App.svelte (1)

## click — event-edbc5f6a186b4e388d

[code] [src/server/stage/App.svelte:116](../../../../../src/server/stage/App.svelte#L116); click. resolved-within-bound.

Conditions: src/server/stage/App.svelte:35 e.target.closest(".clicked"); src/server/stage/App.svelte:39 document.querySelector(".actions")?.children?.length.

Calls: src/server/stage/App.svelte:34 click (depth 0); src/server/stage/App.svelte:38 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6a58c0635cf2121ae8

[code] [src/server/stage/App.svelte:153](../../../../../src/server/stage/App.svelte#L153); cancelPassword. resolved-within-bound.

Conditions: src/server/stage/App.svelte:126 $passwordRequiredLayout.

Calls: src/server/stage/App.svelte:26 cancelPassword (depth 0); src/server/stage/util/stores.ts:96 _set (depth 1).

Effects: src/server/stage/App.svelte:27 store-write src/server/stage/util/stores.ts#errors ; src/server/stage/App.svelte:28 store-write src/server/stage/util/stores.ts#passwordRequiredLayout ; src/server/stage/App.svelte:29 store-write src/server/stage/util/stores.ts#selectedLayout .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-fc2fb9735fb8b7f603

[code] [src/server/stage/App.svelte:186](../../../../../src/server/stage/App.svelte#L186); () => openLayout(layout.id). partial.

Conditions: src/server/stage/App.svelte:126 $passwordRequiredLayout; src/server/stage/App.svelte:164 $layouts === null; src/server/stage/App.svelte:174 !$selectedLayout; src/server/stage/App.svelte:175 $layouts.length.

Calls: src/server/stage/util/helpers.ts:27 openLayout (depth 1); src/server/stage/util/stores.ts:91 _get (depth 2); src/server/common/util/helpers.ts:4 clone (depth 3); src/server/stage/util/helpers.ts:33 <callback> (depth 2); src/server/stage/util/stores.ts:96 _set (depth 2); src/server/stage/util/socket.ts:26 send (depth 2).

Effects: src/server/stage/util/helpers.ts:36 store-write src/server/stage/util/stores.ts#passwordRequiredLayout ; src/server/stage/util/helpers.ts:40 store-write src/server/stage/util/stores.ts#selectedLayout ; src/server/stage/util/helpers.ts:41 ipc send("LAYOUT", { id, password: pwd }) ; src/server/stage/util/socket.ts:26 network socket.emit ; src/server/stage/util/socket.ts:26 ipc socket.emit("STAGE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-006ad48b2b20083204

[code] [src/server/stage/App.svelte:221](../../../../../src/server/stage/App.svelte#L221); goHome. partial.

Conditions: src/server/stage/App.svelte:126 $passwordRequiredLayout; src/server/stage/App.svelte:164 $layouts === null; src/server/stage/App.svelte:174 !$selectedLayout; src/server/stage/App.svelte:210 $stageLayout; src/server/stage/App.svelte:217 clicked; src/server/stage/App.svelte:57 ($layouts?.length \|\| 0) < 2; src/server/stage/App.svelte:65 currentId.

Calls: src/server/stage/App.svelte:56 goHome (depth 0); src/server/stage/util/stores.ts:96 _set (depth 1).

Effects: src/server/stage/App.svelte:60 store-write src/server/stage/util/stores.ts#selectedLayout .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-fa86a52790ad31aae6

[code] [src/server/stage/App.svelte:224](../../../../../src/server/stage/App.svelte#L224); toggleTts. resolved-within-bound.

Conditions: src/server/stage/App.svelte:126 $passwordRequiredLayout; src/server/stage/App.svelte:164 $layouts === null; src/server/stage/App.svelte:174 !$selectedLayout; src/server/stage/App.svelte:210 $stageLayout; src/server/stage/App.svelte:217 clicked; src/server/stage/App.svelte:97 !ttsEnabled.

Calls: src/server/stage/App.svelte:96 toggleTts (depth 0); src/server/stage/util/tts.ts:39 stopSpeech (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0e1244842ea10749f4

[code] [src/server/stage/App.svelte:227](../../../../../src/server/stage/App.svelte#L227); toggleFullscreen. partial.

Conditions: src/server/stage/App.svelte:126 $passwordRequiredLayout; src/server/stage/App.svelte:164 $layouts === null; src/server/stage/App.svelte:174 !$selectedLayout; src/server/stage/App.svelte:210 $stageLayout; src/server/stage/App.svelte:217 clicked; src/server/stage/App.svelte:73 !doc.fullscreenElement.

Calls: src/server/stage/App.svelte:69 toggleFullscreen (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
