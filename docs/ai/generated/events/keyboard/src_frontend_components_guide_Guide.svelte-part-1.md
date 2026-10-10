# keyboard/src_frontend_components_guide_Guide.svelte (1)

## dynamic — event-0795921483e551e06d

[code] [src/frontend/components/guide/Guide.svelte:76](../../../../../src/frontend/components/guide/Guide.svelte#L76); keydown. resolved-within-bound.

Conditions: src/frontend/components/guide/Guide.svelte:62 !active; src/frontend/components/guide/Guide.svelte:64 e.key === "Escape"; src/frontend/components/guide/Guide.svelte:66 e.key === "ArrowRight"; src/frontend/components/guide/Guide.svelte:67 steps&#91;stepIndex + 1&#93;; src/frontend/components/guide/Guide.svelte:69 e.key === "ArrowLeft"; src/frontend/components/guide/Guide.svelte:70 stepIndex === 0; src/frontend/components/guide/Guide.svelte:71 steps&#91;stepIndex + 1&#93;.

Calls: src/frontend/components/guide/Guide.svelte:61 keydown (depth 0).

Effects: src/frontend/components/guide/Guide.svelte:65 store-write src/frontend/stores.ts#guideActive ; src/frontend/components/guide/Guide.svelte:68 store-write src/frontend/stores.ts#guideActive ; src/frontend/components/guide/Guide.svelte:70 store-write src/frontend/stores.ts#guideActive .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
