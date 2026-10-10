# click/src_frontend_components_main_popups_AspectRatio.svelte (1)

## click — event-ad5597e0b9a41b0652

[code] [src/frontend/components/main/popups/AspectRatio.svelte:58](../../../../../src/frontend/components/main/popups/AspectRatio.svelte#L58); () => (showMore = !showMore). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6964e469f01be99cdd

[code] [src/frontend/components/main/popups/AspectRatio.svelte:63](../../../../../src/frontend/components/main/popups/AspectRatio.svelte#L63); () => setAspectRatio({ ...active, width, height }). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/AspectRatio.svelte:38 setAspectRatio (depth 1).

Effects: src/frontend/components/main/popups/AspectRatio.svelte:48 store-write src/frontend/stores.ts#popupData ; src/frontend/components/main/popups/AspectRatio.svelte:49 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-bd21fd9dfe5c0d218a

[code] [src/frontend/components/main/popups/AspectRatio.svelte:82](../../../../../src/frontend/components/main/popups/AspectRatio.svelte#L82); () => activePopup.set(null). resolved-within-bound.

Conditions: src/frontend/components/main/popups/AspectRatio.svelte:71 showMore \|\| (!active.outputResolutionAsRatio && !ratios.find((&#91;width, height&#93;) => active.width === width && active.height === height)); src/frontend/components/main/popups/AspectRatio.svelte:80 !active.outputResolutionAsRatio && !ratios.find((&#91;width, height&#93;) => active.width === width && active.height === height).

Calls: no function target resolved.

Effects: src/frontend/components/main/popups/AspectRatio.svelte:82 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
