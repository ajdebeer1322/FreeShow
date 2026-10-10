# click/src_frontend_components_main_popups_MediaInspector.svelte (2)

## click — event-b3bc3e26123f569cf3

[code] [src/frontend/components/main/popups/MediaInspector.svelte:207](../../../../../src/frontend/components/main/popups/MediaInspector.svelte#L207); () => resetMediaSettings(path). partial.

Conditions: src/frontend/components/main/popups/MediaInspector.svelte:127 bg.

Calls: src/frontend/components/helpers/mediaInspector.ts:165 resetMediaSettings (depth 1); src/frontend/components/helpers/mediaInspector.ts:168 <callback> (depth 2); src/frontend/components/helpers/update.ts:26 removeStore (depth 3); src/frontend/components/helpers/update.ts:10 updateStore (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/helpers/update.ts:14 <callback> (depth 5); src/frontend/components/helpers/update.ts:30 splitKeys (depth 6); src/frontend/components/media/video/videoPlayer.ts:191 updateProperties (depth 2); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 3); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:638 getGlobalOptions (depth 3); src/frontend/components/media/video/videoPlayer.ts:197 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:198 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:221 updateVolume (depth 3); src/frontend/components/media/video/videoPlayer.ts:222 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:222 <callback> (depth 4).

Effects: src/frontend/components/media/video/videoPlayer.ts:197 store-write src/frontend/stores.ts#playingVideos ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:216 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/mediaInspector.ts:149 presentation setOutput ; src/frontend/components/helpers/output.ts:454 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/output.ts:251 presentation clearBackground ; src/frontend/components/helpers/output.ts:225 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 13; depth cutoffs: 100. Full edges/effects/conditions in JSON.

## click — event-7086bc24f765408fda

[code] [src/frontend/components/main/popups/MediaInspector.svelte:210](../../../../../src/frontend/components/main/popups/MediaInspector.svelte#L210); () => activePopup.set(null). resolved-within-bound.

Conditions: src/frontend/components/main/popups/MediaInspector.svelte:127 bg.

Calls: no function target resolved.

Effects: src/frontend/components/main/popups/MediaInspector.svelte:210 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
