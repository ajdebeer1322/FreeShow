# keyboard/src_frontend_components_main_popups_AspectRatio.svelte (1)

## dynamic — event-58b1d2aed0001c6d46

[code] [src/frontend/components/main/popups/AspectRatio.svelte:82](../../../../../src/frontend/components/main/popups/AspectRatio.svelte#L82); triggerClickOnEnterSpace. partial.

Conditions: src/frontend/components/main/popups/AspectRatio.svelte:71 showMore \|\| (!active.outputResolutionAsRatio && !ratios.find((&#91;width, height&#93;) => active.width === width && active.height === height)); src/frontend/components/main/popups/AspectRatio.svelte:80 !active.outputResolutionAsRatio && !ratios.find((&#91;width, height&#93;) => active.width === width && active.height === height); src/frontend/utils/clickable.ts:2 event.target?.classList.contains("edit") \|\| (event.target as any)?.nodeName === "INPUT" \|\| (event.target as any)?.nodeName === "TEXTAREA"; src/frontend/utils/clickable.ts:4 event.key === "Enter" \|\| event.key === " "; src/frontend/utils/clickable.ts:5 event.key === " " && event.target?.closest(".slide").

Calls: src/frontend/utils/clickable.ts:1 triggerClickOnEnterSpace (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
