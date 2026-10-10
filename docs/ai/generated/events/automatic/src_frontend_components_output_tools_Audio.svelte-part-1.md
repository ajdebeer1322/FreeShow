# automatic/src_frontend_components_output_tools_Audio.svelte (1)

## setInterval — event-0ef257da38ede3afd5

[code] [src/frontend/components/output/tools/Audio.svelte:47](../../../../../src/frontend/components/output/tools/Audio.svelte#L47); () => { if (paused) { if (updaterInterval) clearInterval(updaterInterval) updaterInterval = null } if (sliderValue === null) currentTime = playing.audio?.currentTime \|\| 0 }. resolved-within-bound.

Conditions: src/frontend/components/output/tools/Audio.svelte:48 paused; src/frontend/components/output/tools/Audio.svelte:49 updaterInterval; src/frontend/components/output/tools/Audio.svelte:52 sliderValue === null.

Calls: src/frontend/components/output/tools/Audio.svelte:47 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-1eb43bf5c06b8b79ca

[code] [src/frontend/components/output/tools/Audio.svelte:72](../../../../../src/frontend/components/output/tools/Audio.svelte#L72); () => a&#91;id&#93;.audio.pause(). resolved-within-bound.

Conditions: src/frontend/components/output/tools/Audio.svelte:72 paused.

Calls: src/frontend/components/output/tools/Audio.svelte:72 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
