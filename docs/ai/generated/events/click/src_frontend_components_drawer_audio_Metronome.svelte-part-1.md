# click/src_frontend_components_drawer_audio_Metronome.svelte (1)

## click — event-288defb4f5721a4892

[code] [src/frontend/components/drawer/audio/Metronome.svelte:73](../../../../../src/frontend/components/drawer/audio/Metronome.svelte#L73); playPause. partial.

Conditions: src/frontend/components/drawer/audio/Metronome.svelte:56 options.

Calls: src/frontend/components/drawer/audio/Metronome.svelte:20 playPause (depth 0); src/frontend/components/drawer/audio/metronome.ts:27 toggleMetronome (depth 1); src/frontend/components/drawer/audio/metronome.ts:69 stopMetronome (depth 2); src/frontend/components/drawer/audio/metronome.ts:32 startMetronome (depth 2); src/frontend/components/drawer/audio/metronome.ts:51 getShowBPM (depth 3); src/frontend/components/helpers/shows.ts:27 get (depth 4); src/frontend/components/helpers/shows.ts:18 _show (depth 4); src/frontend/components/helpers/shows.ts:38 set (depth 5); src/frontend/components/helpers/shows.ts:40 <callback> (depth 6); src/frontend/components/helpers/shows.ts:59 remove (depth 5); src/frontend/components/helpers/shows.ts:61 <callback> (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 5); src/frontend/components/helpers/shows.ts:76 get (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:123 add (depth 6); src/frontend/components/helpers/shows.ts:142 remove (depth 6).

Effects: src/frontend/components/drawer/audio/metronome.ts:88 store-write src/frontend/stores.ts#playingMetronome ; src/frontend/components/drawer/audio/metronome.ts:89 store-write src/frontend/stores.ts#metronomeTimer ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/drawer/audio/metronome.ts:66 store-write src/frontend/stores.ts#metronome ; src/frontend/components/drawer/audio/metronome.ts:24 store-write src/frontend/stores.ts#metronome ; src/frontend/components/drawer/audio/metronome.ts:138 store-write src/frontend/stores.ts#playingMetronome ; src/frontend/components/drawer/audio/metronome.ts:111 network fetch ; src/frontend/components/drawer/audio/metronome.ts:185 store-write src/frontend/stores.ts#metronomeTimer .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 17; depth cutoffs: 40. Full edges/effects/conditions in JSON.

## click — event-3e5bde41b8238a0448

[code] [src/frontend/components/drawer/audio/Metronome.svelte:95](../../../../../src/frontend/components/drawer/audio/Metronome.svelte#L95); () => (options = !options). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
