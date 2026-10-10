# keyboard/src_frontend_components_stage_StageLayouts.svelte (1)

## dynamic — event-962a00db0fed712397

[code] [src/frontend/components/stage/StageLayouts.svelte:86](../../../../../src/frontend/components/stage/StageLayouts.svelte#L86); keydown. resolved-within-bound.

Conditions: src/frontend/components/stage/StageLayouts.svelte:53 e.target?.closest?.(".edit") \|\| e.ctrlKey \|\| e.metaKey; src/frontend/components/stage/StageLayouts.svelte:54 $activeStage.items.length; src/frontend/components/stage/StageLayouts.svelte:61 e.key === "ArrowDown"; src/frontend/components/stage/StageLayouts.svelte:63 e.key === "ArrowUp"; src/frontend/components/stage/StageLayouts.svelte:67 nextTab < 0 \|\| !sortedStageSlides&#91;nextTab&#93;.

Calls: src/frontend/components/stage/StageLayouts.svelte:52 keydown (depth 0); src/frontend/components/stage/StageLayouts.svelte:59 <callback> (depth 1).

Effects: src/frontend/components/stage/StageLayouts.svelte:68 store-write src/frontend/stores.ts#activeStage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
