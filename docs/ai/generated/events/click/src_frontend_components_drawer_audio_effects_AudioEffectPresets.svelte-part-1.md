# click/src_frontend_components_drawer_audio_effects_AudioEffectPresets.svelte (1)

## click — event-720c1db5f51ae4c73c

[code] [src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:185](../../../../../src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte#L185); saveCustomPreset. partial.

Conditions: src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:183 selectedPreset === "custom"; src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:124 !name \|\| !currentConfig.

Calls: src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:122 saveCustomPreset (depth 0); src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:127 <callback> (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:60 setDefaultCustomName (depth 1); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3); src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:64 <callback> (depth 2); src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:68 <callback> (depth 2).

Effects: src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:127 store-write src/frontend/stores.ts#audioEffectPresets .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b562b8d215e3c9930c

[code] [src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:187](../../../../../src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte#L187); deletePreset. partial.

Conditions: src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:183 selectedPreset === "custom"; src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:186 selectedPreset !== "default"; src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:145 selectedPreset === "default" \|\| selectedPreset === "custom".

Calls: src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:144 deletePreset (depth 0); src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:147 <callback> (depth 1); src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:107 selectPreset (depth 1); src/frontend/audio/effects/audioEffectsHelpers.ts:142 setEffectConfig (depth 2); src/frontend/audio/effects/audioEffectsHelpers.ts:63 updateStack (depth 3); src/frontend/audio/effects/audioEffectsHelpers.ts:55 getActiveChannelId (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:65 <callback> (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:144 <callback> (depth 3); src/frontend/audio/effects/audioEffectsHelpers.ts:59 findStackIndex (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:60 <callback> (depth 5); src/frontend/audio/effects/audioEffectsHelpers.ts:60 <callback> (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 2).

Effects: src/frontend/components/drawer/audio/effects/AudioEffectPresets.svelte:147 store-write src/frontend/stores.ts#audioEffectPresets ; src/frontend/audio/effects/audioEffectsHelpers.ts:65 store-write src/frontend/stores.ts#audioEffects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
