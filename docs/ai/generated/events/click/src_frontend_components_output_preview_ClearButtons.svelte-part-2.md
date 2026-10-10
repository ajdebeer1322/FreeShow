# click/src_frontend_components_output_preview_ClearButtons.svelte (2)

## click — event-c73701cd1a13f890f3

[code] [src/frontend/components/output/preview/ClearButtons.svelte:165](../../../../../src/frontend/components/output/preview/ClearButtons.svelte#L165); () => openPreview("slide"). partial.

Conditions: src/frontend/components/output/preview/ClearButtons.svelte:157 getMediaLayerType(outBackground.path \|\| "", backgroundData) !== "foreground" \|\| !slideCleared; src/frontend/components/output/preview/ClearButtons.svelte:164 !allCleared.

Calls: src/frontend/components/output/preview/ClearButtons.svelte:56 openPreview (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-163e0174b2a925f3d1

[code] [src/frontend/components/output/preview/ClearButtons.svelte:175](../../../../../src/frontend/components/output/preview/ClearButtons.svelte#L175); () => clear("overlays"). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/preview/ClearButtons.svelte:45 clear (depth 1).

Effects: src/frontend/components/output/preview/ClearButtons.svelte:52 store-write src/frontend/stores.ts#timelineRecordingAction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f197b5498ba61cfe84

[code] [src/frontend/components/output/preview/ClearButtons.svelte:179](../../../../../src/frontend/components/output/preview/ClearButtons.svelte#L179); () => openPreview("overlays"). partial.

Conditions: src/frontend/components/output/preview/ClearButtons.svelte:178 !allCleared.

Calls: src/frontend/components/output/preview/ClearButtons.svelte:56 openPreview (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-142afc74dae0040554

[code] [src/frontend/components/output/preview/ClearButtons.svelte:188](../../../../../src/frontend/components/output/preview/ClearButtons.svelte#L188); () => clear("audio"). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/preview/ClearButtons.svelte:45 clear (depth 1).

Effects: src/frontend/components/output/preview/ClearButtons.svelte:52 store-write src/frontend/stores.ts#timelineRecordingAction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0e71fc9628fe0c2ee8

[code] [src/frontend/components/output/preview/ClearButtons.svelte:192](../../../../../src/frontend/components/output/preview/ClearButtons.svelte#L192); () => openPreview("audio"). partial.

Conditions: src/frontend/components/output/preview/ClearButtons.svelte:191 !allCleared.

Calls: src/frontend/components/output/preview/ClearButtons.svelte:56 openPreview (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7c0cc32ab477eb8f9e

[code] [src/frontend/components/output/preview/ClearButtons.svelte:202](../../../../../src/frontend/components/output/preview/ClearButtons.svelte#L202); () => (isTimer ? activeTimers.set(&#91;&#93;) : clear("nextTimer")). partial.

Conditions: src/frontend/components/output/preview/ClearButtons.svelte:200 outputContent?.type !== "pdf".

Calls: src/frontend/components/output/preview/ClearButtons.svelte:45 clear (depth 1).

Effects: src/frontend/components/output/preview/ClearButtons.svelte:202 store-write src/frontend/stores.ts#activeTimers ; src/frontend/components/output/preview/ClearButtons.svelte:52 store-write src/frontend/stores.ts#timelineRecordingAction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
