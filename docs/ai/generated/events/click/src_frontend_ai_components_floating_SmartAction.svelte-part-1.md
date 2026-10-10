# click/src_frontend_ai_components_floating_SmartAction.svelte (1)

## click — event-8ffe07e392790db54c

[code] [src/frontend/ai/components/floating/SmartAction.svelte:30](../../../../../src/frontend/ai/components/floating/SmartAction.svelte#L30); () => { if (smartAction?.trigger) { smartAction.trigger() setTimeout(() => aiSmartAction.set(null), 500) } else { aiSmartAction.set(null) } }. partial.

Conditions: src/frontend/ai/components/floating/SmartAction.svelte:25 smartAction.

Calls: no function target resolved.

Effects: src/frontend/ai/components/floating/SmartAction.svelte:35 store-write src/frontend/stores.ts#aiSmartAction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
