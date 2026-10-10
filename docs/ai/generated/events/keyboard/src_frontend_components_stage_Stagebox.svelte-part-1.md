# keyboard/src_frontend_components_stage_Stagebox.svelte (1)

## dynamic — event-d9db7a9ad48b4c9b59

[code] [src/frontend/components/stage/Stagebox.svelte:352](../../../../../src/frontend/components/stage/Stagebox.svelte#L352); keydown. resolved-within-bound.

Conditions: src/frontend/components/stage/Stagebox.svelte:119 !edit; src/frontend/components/stage/Stagebox.svelte:120 e.key === "Shift"; src/frontend/components/stage/Stagebox.svelte:122 (e.key === "Backspace" \|\| e.key === "Delete") && $activeStage.items.includes(id) && !document.activeElement?.closest(".stage_item") && !document.activeElement?.closest(".edit"); src/frontend/components/stage/Stagebox.svelte:124 document.querySelector(".timeline-track .action-marker.selected").

Calls: src/frontend/components/stage/Stagebox.svelte:118 keydown (depth 0); src/frontend/components/stage/Stagebox.svelte:127 <callback> (depth 1).

Effects: src/frontend/components/stage/Stagebox.svelte:132 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/stage/Stagebox.svelte:127 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/stage/Stagebox.svelte:129 store-write src/frontend/stores.ts#activeStage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-e1f1cd7d3343b7b808

[code] [src/frontend/components/stage/Stagebox.svelte:352](../../../../../src/frontend/components/stage/Stagebox.svelte#L352); keyup. resolved-within-bound.

Conditions: src/frontend/components/stage/Stagebox.svelte:115 !edit; src/frontend/components/stage/Stagebox.svelte:116 e.key === "Shift".

Calls: src/frontend/components/stage/Stagebox.svelte:114 keyup (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
