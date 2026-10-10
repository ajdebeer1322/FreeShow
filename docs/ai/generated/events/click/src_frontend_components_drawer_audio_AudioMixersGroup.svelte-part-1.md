# click/src_frontend_components_drawer_audio_AudioMixersGroup.svelte (1)

## click — event-c000d2d64f47c65d90

[code] [src/frontend/components/drawer/audio/AudioMixersGroup.svelte:34](../../../../../src/frontend/components/drawer/audio/AudioMixersGroup.svelte#L34); () => toggleSection(). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/audio/AudioMixersGroup.svelte:18 toggleSection (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8b7292c4c6637e224a

[code] [src/frontend/components/drawer/audio/AudioMixersGroup.svelte:41](../../../../../src/frontend/components/drawer/audio/AudioMixersGroup.svelte#L41); () => resetSection(). resolved-within-bound.

Conditions: src/frontend/components/drawer/audio/AudioMixersGroup.svelte:40 hasChanged.

Calls: src/frontend/components/drawer/audio/AudioMixersGroup.svelte:22 resetSection (depth 1); src/frontend/components/drawer/audio/AudioMixersGroup.svelte:23 <callback> (depth 2).

Effects: src/frontend/components/drawer/audio/AudioMixersGroup.svelte:23 store-write src/frontend/stores.ts#audioChannelsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
