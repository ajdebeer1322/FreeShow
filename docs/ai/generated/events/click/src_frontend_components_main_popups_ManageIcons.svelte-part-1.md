# click/src_frontend_components_main_popups_ManageIcons.svelte (1)

## click — event-1ea3356c916acc6109

[code] [src/frontend/components/main/popups/ManageIcons.svelte:58](../../../../../src/frontend/components/main/popups/ManageIcons.svelte#L58); () => activePopup.set(back). resolved-within-bound.

Conditions: src/frontend/components/main/popups/ManageIcons.svelte:57 back.

Calls: no function target resolved.

Effects: src/frontend/components/main/popups/ManageIcons.svelte:58 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1ab632a6b4742a66a4

[code] [src/frontend/components/main/popups/ManageIcons.svelte:67](../../../../../src/frontend/components/main/popups/ManageIcons.svelte#L67); () => click(icon). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/ManageIcons.svelte:13 click (depth 1); src/frontend/components/main/popups/ManageIcons.svelte:16 <callback> (depth 2).

Effects: src/frontend/components/main/popups/ManageIcons.svelte:16 store-write src/frontend/stores.ts#customizedIcons .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f74965cc7e2eea2b43

[code] [src/frontend/components/main/popups/ManageIcons.svelte:72](../../../../../src/frontend/components/main/popups/ManageIcons.svelte#L72); importSVG. resolved-within-bound.

Conditions: src/frontend/components/main/popups/ManageIcons.svelte:36 !text \|\| !text.includes("<svg").

Calls: src/frontend/components/main/popups/ManageIcons.svelte:29 importSVG (depth 0); src/frontend/components/main/popups/ManageIcons.svelte:38 <callback> (depth 1).

Effects: src/frontend/components/main/popups/ManageIcons.svelte:38 store-write src/frontend/stores.ts#customizedIcons .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-eee3917910cbe4f4bb

[code] [src/frontend/components/main/popups/ManageIcons.svelte:80](../../../../../src/frontend/components/main/popups/ManageIcons.svelte#L80); () => deleteCustom(icon.id). resolved-within-bound.

Conditions: src/frontend/components/main/popups/ManageIcons.svelte:77 $customizedIcons.svg.length.

Calls: src/frontend/components/main/popups/ManageIcons.svelte:44 deleteCustom (depth 1); src/frontend/components/main/popups/ManageIcons.svelte:45 <callback> (depth 2); src/frontend/components/main/popups/ManageIcons.svelte:46 <callback> (depth 3).

Effects: src/frontend/components/main/popups/ManageIcons.svelte:45 store-write src/frontend/stores.ts#customizedIcons .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
