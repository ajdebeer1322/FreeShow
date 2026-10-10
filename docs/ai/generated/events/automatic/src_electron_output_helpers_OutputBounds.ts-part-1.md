# automatic/src_electron_output_helpers_OutputBounds.ts (1)

## setTimeout — event-064cf3a2da256ca5f6

[code] [src/electron/output/helpers/OutputBounds.ts:17](../../../../../src/electron/output/helpers/OutputBounds.ts#L17); () => { this.updatingBounds = false this.boundsTimeout = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/output/helpers/OutputBounds.ts:17 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-b9acb5d83623bb5128

[code] [src/electron/output/helpers/OutputBounds.ts:37](../../../../../src/electron/output/helpers/OutputBounds.ts#L37); () => { if (!output.window \|\| output.window.isDestroyed()) return output.window.setBounds(bounds) }. partial.

Conditions: src/electron/output/helpers/OutputBounds.ts:38 !output.window \|\| output.window.isDestroyed().

Calls: src/electron/output/helpers/OutputBounds.ts:37 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-c0bca6302ab6ddbf1d

[code] [src/electron/output/helpers/OutputBounds.ts:43](../../../../../src/electron/output/helpers/OutputBounds.ts#L43); () => { if (!output.window \|\| output.window.isDestroyed()) return output.window.setBounds(bounds) OutputHelper.Lifecycle.updateWindowConstraints(data.id) }. partial.

Conditions: src/electron/output/helpers/OutputBounds.ts:44 !output.window \|\| output.window.isDestroyed().

Calls: src/electron/output/helpers/OutputBounds.ts:43 <callback> (depth 0); src/electron/output/helpers/OutputLifecycle.ts:934 updateWindowConstraints (depth 1); src/electron/output/OutputHelper.ts:51 getOutput (depth 2).

Effects: src/electron/output/helpers/OutputBounds.ts:46 presentation OutputHelper.Lifecycle.updateWindowConstraints ; src/electron/output/helpers/OutputLifecycle.ts:935 presentation OutputHelper.getOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 10; depth cutoffs: 0. Full edges/effects/conditions in JSON.
