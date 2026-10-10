# keyboard/src_frontend_components_drawer_audio_AudioEffects.svelte (1)

## dynamic — event-56b79b1c5c8a9e05c3

[code] [src/frontend/components/drawer/audio/AudioEffects.svelte:66](../../../../../src/frontend/components/drawer/audio/AudioEffects.svelte#L66); (e) => { if (e.key === "Enter" \|\| e.key === " ") openEffectPopup(effectItem) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/audio/AudioEffects.svelte:14 openEffectPopup (depth 1).

Effects: src/frontend/components/drawer/audio/AudioEffects.svelte:15 store-write src/frontend/stores.ts#popupData ; src/frontend/components/drawer/audio/AudioEffects.svelte:20 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
