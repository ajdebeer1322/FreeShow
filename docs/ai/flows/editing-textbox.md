# Editing a text box

## Observed result

[verified] Real Edit view and contenteditable input; show cache/history observed. Evidence: [observation data](observations.json), action ID `editing-textbox`, recorded 2026-10-10T17:27:25.437Z.

[code] Verification scope: Contenteditable input changed showsCache and created history entries. The ordinary text mutation was observed; undo/redo round trips, IME composition, splitting and styled selections remain source-only.

[code] Source steps below explain the current implementation. Their intermediate calls are not all individually instrumented; an observed end result does not upgrade every step to verified.

## File-by-file sequence

1. [code] The Edit view selects the existing slide editor for an ordinary show. ([src/frontend/components/edit/Editor.svelte:125](../../../src/frontend/components/edit/Editor.svelte#L125))

2. [code] EditboxLines binds contenteditable HTML while retaining explicit item/slide references and composition state. ([src/frontend/components/edit/editbox/EditboxLines.svelte:777](../../../src/frontend/components/edit/editbox/EditboxLines.svelte#L777))

3. [code] A changed HTML binding schedules line reconstruction after 10 ms outside composition. ([src/frontend/components/edit/editbox/EditboxLines.svelte:128](../../../src/frontend/components/edit/editbox/EditboxLines.svelte#L128))

4. [code] The text mutation submits SHOW_ITEMS with the explicit show ID, slide IDs, item indexes and line data. ([src/frontend/components/edit/editbox/EditboxLines.svelte:359](../../../src/frontend/components/edit/editbox/EditboxLines.svelte#L359))

5. [code] History captures old/new data, suppresses no-change entries and dispatches reversible mutations. ([src/frontend/components/helpers/history.ts:39](../../../src/frontend/components/helpers/history.ts#L39))

6. [code] The show-item handler remembers the explicit show destination and updates item values through _show. ([src/frontend/components/helpers/historyActions.ts:888](../../../src/frontend/components/helpers/historyActions.ts#L888))

7. [code] Persistent-store subscriptions mark edits unsaved for the later save path. ([src/frontend/utils/save.ts:368](../../../src/frontend/utils/save.ts#L368))

## State, messages and history

[code] Read [editing-history](../subsystems/editing-history.md) for invariants and dependency maps. Each traced file has complete import/store/message/timing evidence:

- [src/frontend/components/edit/Editor.svelte](../generated/files/src_frontend_components_edit_Editor.svelte.md)
- [src/frontend/components/edit/editbox/EditboxLines.svelte](../generated/files/src_frontend_components_edit_editbox_EditboxLines.svelte.md)
- [src/frontend/components/helpers/history.ts](../generated/files/src_frontend_components_helpers_history.ts.md)
- [src/frontend/components/helpers/historyActions.ts](../generated/files/src_frontend_components_helpers_historyActions.ts.md)
- [src/frontend/utils/save.ts](../generated/files/src_frontend_utils_save.ts.md)

[code] 25 related decision records: [full IDs and locations](editing-textbox.dependencies.json); representative records:

- [code] [D-timer-3c5f02e61d5904e6](../history/records/src_frontend_components_edit_editbox_EditboxLines.svelte-1.md).
- [code] [D-timer-ac889c0760866c37](../history/records/src_frontend_components_edit_editbox_EditboxLines.svelte-1.md).
- [guess] [D-hotspot-518617204fed88c8](../history/records/src_frontend_components_edit_editbox_EditboxLines.svelte-1.md).
- [guess] [D-hotspot-613d3d6405b1c316](../history/records/src_frontend_utils_save.ts-1.md).
- [code] [D-fork-174674236734d953](../history/records/src_frontend_components_helpers_historyActions.ts-1.md).

[code] Companion findings [F-001](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-004](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md) refer to the later fixed snapshot; use them as context, not runtime evidence for this base. See the [evidence method](README.md) before reusing these observations.
