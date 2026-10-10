# automatic/src_frontend_ai_manager_AiManager.ts (1)

## setTimeout — event-bea4b685debe08f88e

[code] [src/frontend/ai/manager/AiManager.ts:214](../../../../../src/frontend/ai/manager/AiManager.ts#L214); () => { // reset output updates when not "manually" played this.lastOutputUpdate = 0 }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/ai/manager/AiManager.ts:214 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-7bee0b4ef789fb6fca

[code] [src/frontend/ai/manager/AiManager.ts:233](../../../../../src/frontend/ai/manager/AiManager.ts#L233); () => { this.smartActionTimer = null aiSmartAction.update((a) => (a?.id === content.id ? null : a)) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/ai/manager/AiManager.ts:233 <callback> (depth 0); src/frontend/ai/manager/AiManager.ts:235 <callback> (depth 1).

Effects: src/frontend/ai/manager/AiManager.ts:235 store-write src/frontend/stores.ts#aiSmartAction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-6bcaba4b6962b2c593

[code] [src/frontend/ai/manager/AiManager.ts:265](../../../../../src/frontend/ai/manager/AiManager.ts#L265); () => (initialized = true). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/ai/manager/AiManager.ts:265 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
