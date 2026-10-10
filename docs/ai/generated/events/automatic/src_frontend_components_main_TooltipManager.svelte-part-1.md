# automatic/src_frontend_components_main_TooltipManager.svelte (1)

## setTimeout — event-48eed85c871ffc1597

[code] [src/frontend/components/main/TooltipManager.svelte:79](../../../../../src/frontend/components/main/TooltipManager.svelte#L79); () => { parsed = extractShortcuts(title) tooltipStyle = "" if (flipX) { tooltipStyle += 'transform: translate(-100%, ${flipY ? "-100%" : "0"});' tooltipStyle += title.length > 35 ?. resolved-within-bound.

Conditions: src/frontend/components/main/TooltipManager.svelte:78 !visible && !timeout; src/frontend/components/main/TooltipManager.svelte:84 flipX; src/frontend/components/main/TooltipManager.svelte:87 flipY; src/frontend/components/main/TooltipManager.svelte:97 !timeout.

Calls: src/frontend/components/main/TooltipManager.svelte:79 <callback> (depth 0); src/frontend/components/main/TooltipManager.svelte:18 extractShortcuts (depth 1); src/frontend/components/main/TooltipManager.svelte:96 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-a22c3cf81c94271de9

[code] [src/frontend/components/main/TooltipManager.svelte:96](../../../../../src/frontend/components/main/TooltipManager.svelte#L96); () => { if (!timeout) visible = false autoHideTimeout = null }. resolved-within-bound.

Conditions: src/frontend/components/main/TooltipManager.svelte:78 !visible && !timeout; src/frontend/components/main/TooltipManager.svelte:97 !timeout.

Calls: src/frontend/components/main/TooltipManager.svelte:96 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
