# automatic/src_frontend_components_stage_StageLayouts.svelte (1)

## setTimeout — event-13e1598ad0cf649258

[code] [src/frontend/components/stage/StageLayouts.svelte:38](../../../../../src/frontend/components/stage/StageLayouts.svelte#L38); () => { const batch = lazyLoader === 0 ? 2 : Math.min(16, lazyLoader * 2) lazyLoader += batch }. resolved-within-bound.

Conditions: src/frontend/components/stage/StageLayouts.svelte:34 lazyLoader >= sortedStageSlides.length; src/frontend/components/stage/StageLayouts.svelte:33 !loaded && sortedStageSlides?.length.

Calls: src/frontend/components/stage/StageLayouts.svelte:38 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-1e6eb133440c0e43b2

[code] [src/frontend/components/stage/StageLayouts.svelte:75](../../../../../src/frontend/components/stage/StageLayouts.svelte#L75); () => { if (!scrollElem) return const index = Math.max( 0, &#91;...(scrollElem.querySelector(".grid")?.children \|\| &#91;&#93;)&#93;.findIndex((a) => a?.classList.contains("active")) ) offset = ((s. resolved-within-bound.

Conditions: src/frontend/components/stage/StageLayouts.svelte:74 $activeStage.id; src/frontend/components/stage/StageLayouts.svelte:76 !scrollElem.

Calls: src/frontend/components/stage/StageLayouts.svelte:75 <callback> (depth 0); src/frontend/components/stage/StageLayouts.svelte:79 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
