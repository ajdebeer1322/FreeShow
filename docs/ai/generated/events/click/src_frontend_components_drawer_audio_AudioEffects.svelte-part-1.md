# click/src_frontend_components_drawer_audio_AudioEffects.svelte (1)

## click — event-1333a80e3212ab7347

[code] [src/frontend/components/drawer/audio/AudioEffects.svelte:46](../../../../../src/frontend/components/drawer/audio/AudioEffects.svelte#L46); () => activeAudioEffects.set(""). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/audio/AudioEffects.svelte:46 store-write src/frontend/stores.ts#activeAudioEffects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-514208adf8942579b5

[code] [src/frontend/components/drawer/audio/AudioEffects.svelte:63](../../../../../src/frontend/components/drawer/audio/AudioEffects.svelte#L63); () => openEffectPopup(effectItem). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/audio/AudioEffects.svelte:14 openEffectPopup (depth 1).

Effects: src/frontend/components/drawer/audio/AudioEffects.svelte:15 store-write src/frontend/stores.ts#popupData ; src/frontend/components/drawer/audio/AudioEffects.svelte:20 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9faa48b027ba392bbb

[code] [src/frontend/components/drawer/audio/AudioEffects.svelte:76](../../../../../src/frontend/components/drawer/audio/AudioEffects.svelte#L76); () => {}. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-bddf12b57893c5f8d7

[code] [src/frontend/components/drawer/audio/AudioEffects.svelte:78](../../../../../src/frontend/components/drawer/audio/AudioEffects.svelte#L78); () => handleDown(i). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/audio/AudioEffects.svelte:38 handleDown (depth 1); src/frontend/audio/effects/audioEffectsHelpers.ts:274 moveEffectInStack (depth 2); src/frontend/audio/effects/audioEffectsHelpers.ts:63 updateStack (depth 3); src/frontend/audio/effects/audioEffectsHelpers.ts:55 getActiveChannelId (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:65 <callback> (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:275 <callback> (depth 3).

Effects: src/frontend/audio/effects/audioEffectsHelpers.ts:65 store-write src/frontend/stores.ts#audioEffects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ebfb525e40116fabd4

[code] [src/frontend/components/drawer/audio/AudioEffects.svelte:81](../../../../../src/frontend/components/drawer/audio/AudioEffects.svelte#L81); () => handleUp(i). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/audio/AudioEffects.svelte:32 handleUp (depth 1); src/frontend/audio/effects/audioEffectsHelpers.ts:274 moveEffectInStack (depth 2); src/frontend/audio/effects/audioEffectsHelpers.ts:63 updateStack (depth 3); src/frontend/audio/effects/audioEffectsHelpers.ts:55 getActiveChannelId (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:65 <callback> (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:275 <callback> (depth 3).

Effects: src/frontend/audio/effects/audioEffectsHelpers.ts:65 store-write src/frontend/stores.ts#audioEffects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-084f6a043ddfd7a6d2

[code] [src/frontend/components/drawer/audio/AudioEffects.svelte:86](../../../../../src/frontend/components/drawer/audio/AudioEffects.svelte#L86); () => handleToggle(effectItem). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/audio/AudioEffects.svelte:28 handleToggle (depth 1); src/frontend/audio/effects/audioEffectsHelpers.ts:283 toggleEffectInStack (depth 2); src/frontend/audio/effects/audioEffectsHelpers.ts:63 updateStack (depth 3); src/frontend/audio/effects/audioEffectsHelpers.ts:55 getActiveChannelId (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:65 <callback> (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:284 <callback> (depth 3); src/frontend/audio/effects/audioEffectsHelpers.ts:285 <callback> (depth 4).

Effects: src/frontend/audio/effects/audioEffectsHelpers.ts:65 store-write src/frontend/stores.ts#audioEffects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
