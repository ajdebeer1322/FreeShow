# automatic/src_frontend_components_inputs_NumberInput.svelte (1)

## setTimeout — event-a828054206732d7fc3

[code] [src/frontend/components/inputs/NumberInput.svelte:45](../../../../../src/frontend/components/inputs/NumberInput.svelte#L45); () => { if (!timeout) return let increase = true if (e.target.closest("button").id === "decrement") increase = false let loopPrevention = 0 interval = setInterval(() => { // stop a. partial.

Conditions: src/frontend/components/inputs/NumberInput.svelte:46 !timeout; src/frontend/components/inputs/NumberInput.svelte:49 e.target.closest("button").id === "decrement"; src/frontend/components/inputs/NumberInput.svelte:54 loopPrevention > 50; src/frontend/components/inputs/NumberInput.svelte:57 increase.

Calls: src/frontend/components/inputs/NumberInput.svelte:45 <callback> (depth 0); src/frontend/components/inputs/NumberInput.svelte:52 <callback> (depth 1); src/frontend/components/inputs/NumberInput.svelte:23 increment (depth 2); src/frontend/components/inputs/NumberInput.svelte:24 decrement (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-a583f70ccf67f13912

[code] [src/frontend/components/inputs/NumberInput.svelte:52](../../../../../src/frontend/components/inputs/NumberInput.svelte#L52); () => { // stop after 50 updates if (loopPrevention > 50) return loopPrevention++ if (increase) increment() else decrement() }. partial.

Conditions: src/frontend/components/inputs/NumberInput.svelte:54 loopPrevention > 50; src/frontend/components/inputs/NumberInput.svelte:57 increase.

Calls: src/frontend/components/inputs/NumberInput.svelte:52 <callback> (depth 0); src/frontend/components/inputs/NumberInput.svelte:23 increment (depth 1); src/frontend/components/inputs/NumberInput.svelte:24 decrement (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-5dc049b8ed95d31b19

[code] [src/frontend/components/inputs/NumberInput.svelte:82](../../../../../src/frontend/components/inputs/NumberInput.svelte#L82); () => { nextScrollTimeout = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/inputs/NumberInput.svelte:82 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
