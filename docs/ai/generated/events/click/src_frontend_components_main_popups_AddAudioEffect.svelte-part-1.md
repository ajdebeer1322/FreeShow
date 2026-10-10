# click/src_frontend_components_main_popups_AddAudioEffect.svelte (1)

## click — event-8dbb495281a42d5d93

[code] [src/frontend/components/main/popups/AddAudioEffect.svelte:19](../../../../../src/frontend/components/main/popups/AddAudioEffect.svelte#L19); () => selectEffect(eff.id). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/AddAudioEffect.svelte:10 selectEffect (depth 1); src/frontend/audio/effects/audioEffectsHelpers.ts:236 addEffectToStack (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/audio/effects/audioEffectsHelpers.ts:63 updateStack (depth 3); src/frontend/audio/effects/audioEffectsHelpers.ts:55 getActiveChannelId (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:65 <callback> (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:243 <callback> (depth 3).

Effects: src/frontend/components/main/popups/AddAudioEffect.svelte:12 store-write src/frontend/stores.ts#popupData ; src/frontend/components/main/popups/AddAudioEffect.svelte:13 store-write src/frontend/stores.ts#activePopup ; src/frontend/audio/effects/audioEffectsHelpers.ts:65 store-write src/frontend/stores.ts#audioEffects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
