# automatic/src_server_stage_components_Slide.svelte (1)

## setTimeout — event-1ceeca443a476fc51a

[code] [src/server/stage/components/Slide.svelte:20](../../../../../src/server/stage/components/Slide.svelte#L20); () => { resizeKey = '${width}-${height}-${Date.now()}' }. resolved-within-bound.

Conditions: src/server/stage/components/Slide.svelte:18 width !== 0 \|\| height !== 0.

Calls: src/server/stage/components/Slide.svelte:20 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-db73410c9814760542

[code] [src/server/stage/components/Slide.svelte:32](../../../../../src/server/stage/components/Slide.svelte#L32); () => { if (Object.values($stageLayout?.items \|\| {}).find((a) => a?.conditions)) conditionsUpdater++ }. resolved-within-bound.

Conditions: src/server/stage/components/Slide.svelte:33 Object.values($stageLayout?.items \|\| {}).find((a) => a?.conditions).

Calls: src/server/stage/components/Slide.svelte:32 <callback> (depth 0); src/server/stage/components/Slide.svelte:33 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-d8fb5773fd9ae4d160

[code] [src/server/stage/components/Slide.svelte:45](../../../../../src/server/stage/components/Slide.svelte#L45); () => { layoutMounted = true }. resolved-within-bound.

Conditions: src/server/stage/components/Slide.svelte:43 $stageLayout \|\| resizeKey.

Calls: src/server/stage/components/Slide.svelte:45 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
