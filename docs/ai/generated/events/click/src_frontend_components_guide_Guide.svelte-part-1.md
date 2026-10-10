# click/src_frontend_components_guide_Guide.svelte (1)

## click — event-811e376409ca201dbb

[code] [src/frontend/components/guide/Guide.svelte:97](../../../../../src/frontend/components/guide/Guide.svelte#L97); () => guideActive.set(false). resolved-within-bound.

Conditions: src/frontend/components/guide/Guide.svelte:78 active; src/frontend/components/guide/Guide.svelte:79 currentStep && currentStyle; src/frontend/components/guide/Guide.svelte:96 stepIndex === 0.

Calls: no function target resolved.

Effects: src/frontend/components/guide/Guide.svelte:97 store-write src/frontend/stores.ts#guideActive .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0a3d8082178fa91fe7

[code] [src/frontend/components/guide/Guide.svelte:101](../../../../../src/frontend/components/guide/Guide.svelte#L101); () => stepIndex--. resolved-within-bound.

Conditions: src/frontend/components/guide/Guide.svelte:78 active; src/frontend/components/guide/Guide.svelte:79 currentStep && currentStyle; src/frontend/components/guide/Guide.svelte:96 stepIndex === 0; src/frontend/components/guide/Guide.svelte:100 steps&#91;stepIndex + 1&#93;.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f82f575d0813d40f0a

[code] [src/frontend/components/guide/Guide.svelte:105](../../../../../src/frontend/components/guide/Guide.svelte#L105); () => (steps&#91;stepIndex + 1&#93; ? stepIndex++ : guideActive.set(false)). resolved-within-bound.

Conditions: src/frontend/components/guide/Guide.svelte:78 active; src/frontend/components/guide/Guide.svelte:79 currentStep && currentStyle.

Calls: no function target resolved.

Effects: src/frontend/components/guide/Guide.svelte:105 store-write src/frontend/stores.ts#guideActive .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
