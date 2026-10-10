# keyboard/src_frontend_components_show_ppt_ScreenCapture.svelte (1)

## dynamic — event-f9d8fa53af9f719488

[code] [src/frontend/components/show/ppt/ScreenCapture.svelte:104](../../../../../src/frontend/components/show/ppt/ScreenCapture.svelte#L104); triggerClickOnEnterSpace. partial.

Conditions: src/frontend/components/show/ppt/ScreenCapture.svelte:96 chosenWindow; src/frontend/components/show/ppt/ScreenCapture.svelte:99 chooseWindow.length; src/frontend/utils/clickable.ts:2 event.target?.classList.contains("edit") \|\| (event.target as any)?.nodeName === "INPUT" \|\| (event.target as any)?.nodeName === "TEXTAREA"; src/frontend/utils/clickable.ts:4 event.key === "Enter" \|\| event.key === " "; src/frontend/utils/clickable.ts:5 event.key === " " && event.target?.closest(".slide").

Calls: src/frontend/utils/clickable.ts:1 triggerClickOnEnterSpace (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
