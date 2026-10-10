# click/src_frontend_components_show_ShowHeader.svelte (1)

## click — event-49f9d5675c8b6cc046

[code] [src/frontend/components/show/ShowHeader.svelte:102](../../../../../src/frontend/components/show/ShowHeader.svelte#L102); (e) => openTab(e, notes?.tab \|\| ""). resolved-within-bound.

Conditions: src/frontend/components/show/ShowHeader.svelte:101 notes.

Calls: src/frontend/components/show/ShowHeader.svelte:42 openTab (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/components/show/ShowHeader.svelte:50 store-write src/frontend/stores.ts#openToolsTab ; src/frontend/components/show/ShowHeader.svelte:46 ipc sendMain(Main.URL, url) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8870e8da243ec55c3d

[code] [src/frontend/components/show/ShowHeader.svelte:118](../../../../../src/frontend/components/show/ShowHeader.svelte#L118); () => activePopup.set("template_info"). resolved-within-bound.

Conditions: src/frontend/components/show/ShowHeader.svelte:117 enableStylePreview.

Calls: no function target resolved.

Effects: src/frontend/components/show/ShowHeader.svelte:118 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-599882c3b9c6e135a3

[code] [src/frontend/components/show/ShowHeader.svelte:122](../../../../../src/frontend/components/show/ShowHeader.svelte#L122); () => activePopup.set("template_info"). resolved-within-bound.

Conditions: src/frontend/components/show/ShowHeader.svelte:117 enableStylePreview; src/frontend/components/show/ShowHeader.svelte:121 enableShowTemplate.

Calls: no function target resolved.

Effects: src/frontend/components/show/ShowHeader.svelte:122 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-333f519b9a694dab78

[code] [src/frontend/components/show/ShowHeader.svelte:134](../../../../../src/frontend/components/show/ShowHeader.svelte#L134); () => (showDropdown = !showDropdown). resolved-within-bound.

Conditions: src/frontend/components/show/ShowHeader.svelte:132 !hideOptions.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-72f9ae7a60e10a8df0

[code] [src/frontend/components/show/ShowHeader.svelte:141](../../../../../src/frontend/components/show/ShowHeader.svelte#L141); () => (showDropdown = false). resolved-within-bound.

Conditions: src/frontend/components/show/ShowHeader.svelte:140 showDropdown && currentShow.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c351f7e6d0a122c83e

[code] [src/frontend/components/show/ShowHeader.svelte:142](../../../../../src/frontend/components/show/ShowHeader.svelte#L142); () => showNotesActive.set(!$showNotesActive). resolved-within-bound.

Conditions: src/frontend/components/show/ShowHeader.svelte:140 showDropdown && currentShow.

Calls: no function target resolved.

Effects: src/frontend/components/show/ShowHeader.svelte:142 store-write src/frontend/stores.ts#showNotesActive .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
