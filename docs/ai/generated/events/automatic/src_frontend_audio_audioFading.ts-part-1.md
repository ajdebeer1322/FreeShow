# automatic/src_frontend_audio_audioFading.ts (1)

## setTimeout — event-8c32667c2c3be0c47f

[code] [src/frontend/audio/audioFading.ts:33](../../../../../src/frontend/audio/audioFading.ts#L33); () => (forceClear = false). resolved-within-bound.

Conditions: src/frontend/audio/audioFading.ts:29 clearing.includes(audioPath).

Calls: src/frontend/audio/audioFading.ts:33 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-abc7a628077caf769b

[code] [src/frontend/audio/audioFading.ts:119](../../../../../src/frontend/audio/audioFading.ts#L119); async () => { const playing = AudioPlayer.getPlaying(id)?.audio if (!playing \|\| clearing.includes(id)) { const index = currentlyCrossfadingIn.indexOf(id) if (index !== -1) currentl. partial.

Conditions: src/frontend/audio/audioFading.ts:121 !playing \|\| clearing.includes(id); src/frontend/audio/audioFading.ts:123 index !== -1; src/frontend/audio/audioFading.ts:129 index !== -1.

Calls: src/frontend/audio/audioFading.ts:119 <callback> (depth 0); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 1); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 2); src/frontend/audio/audioPlayer.ts:53 getPath (depth 3); src/frontend/audio/audioFading.ts:138 fadeAudio (depth 1); src/frontend/audio/audioFading.ts:240 stopFade (depth 2); src/frontend/audio/audioFading.ts:252 <callback> (depth 3); src/frontend/audio/audioFading.ts:255 <callback> (depth 3); src/frontend/audio/audioFading.ts:168 <callback> (depth 2); src/frontend/audio/audioFading.ts:171 <callback> (depth 3); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 4); src/frontend/audio/audioAnalyser.ts:159 <callback> (depth 5); src/frontend/audio/audioFading.ts:185 <callback> (depth 3).

Effects: src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-806f06eb83a43001b2

[code] [src/frontend/audio/audioFading.ts:171](../../../../../src/frontend/audio/audioFading.ts#L171); () => { if (forceClear \|\| (increment && currentlyCrossfadingOut.includes(id))) return stopFade(fadeId, true) if (increment) { audio.volume = Math.min(fadeToVolume, Number((audio.vo. partial.

Conditions: src/frontend/audio/audioFading.ts:172 forceClear \|\| (increment && currentlyCrossfadingOut.includes(id)); src/frontend/audio/audioFading.ts:174 increment; src/frontend/audio/audioFading.ts:177 audio.volume >= fadeToVolume; src/frontend/audio/audioFading.ts:181 audio.volume <= 0.

Calls: src/frontend/audio/audioFading.ts:171 <callback> (depth 0); src/frontend/audio/audioFading.ts:240 stopFade (depth 1); src/frontend/audio/audioFading.ts:252 <callback> (depth 2); src/frontend/audio/audioFading.ts:255 <callback> (depth 2); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 1); src/frontend/audio/audioAnalyser.ts:159 <callback> (depth 2).

Effects: src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9d827530e1f7f5aba2

[code] [src/frontend/audio/audioFading.ts:185](../../../../../src/frontend/audio/audioFading.ts#L185); () => { stopFade(fadeId, true) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/audio/audioFading.ts:185 <callback> (depth 0); src/frontend/audio/audioFading.ts:240 stopFade (depth 1); src/frontend/audio/audioFading.ts:252 <callback> (depth 2); src/frontend/audio/audioFading.ts:255 <callback> (depth 2).

Effects: src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-c6d5d7d352ba36fede

[code] [src/frontend/audio/audioFading.ts:252](../../../../../src/frontend/audio/audioFading.ts#L252); () => resolve(result). partial.

Conditions: src/frontend/audio/audioFading.ts:249 currentlyFadingResolvers&#91;fadeId&#93;.

Calls: src/frontend/audio/audioFading.ts:252 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
