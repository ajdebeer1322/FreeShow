# click/src_frontend_components_output_preview_PreviewOutputs.svelte (1)

## click — event-ae756ed1105823a37f

[code] [src/frontend/components/output/preview/PreviewOutputs.svelte:63](../../../../../src/frontend/components/output/preview/PreviewOutputs.svelte#L63); (e) => toggleOutput(e, output.id). resolved-within-bound.

Conditions: src/frontend/components/output/preview/PreviewOutputs.svelte:60 outs.length > 1.

Calls: src/frontend/components/output/preview/PreviewOutputs.svelte:17 toggleOutput (depth 1); src/frontend/components/output/preview/PreviewOutputs.svelte:20 <callback> (depth 2); src/frontend/components/output/preview/PreviewOutputs.svelte:23 <callback> (depth 3); src/frontend/components/output/preview/PreviewOutputs.svelte:26 <callback> (depth 3); src/frontend/components/output/preview/PreviewOutputs.svelte:33 <callback> (depth 3); src/frontend/utils/common.ts:26 newToast (depth 3); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 4).

Effects: src/frontend/components/output/preview/PreviewOutputs.svelte:20 store-write src/frontend/stores.ts#outputs ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
