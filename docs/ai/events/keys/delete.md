# Delete / Backspace

[code] Selection removal or native text deletion. Rows describe source guards, not runtime verification. Custom keys and mounted local components can add behavior.

| Situation | What happens | Evidence |
| --- | --- | --- |
| Show view / drawer / project item selected | [code] Delete dispatches deleteAction(selected,"remove"); Backspace delegates to Delete; contextActive suppresses this global route. | src/frontend/utils/shortcuts.ts:139 |
| Focus Mode / linked / output-bound slides | [code] Selected-data removal follows existing clipboard/history routing; being live or bound does not itself establish deletion permission. | src/frontend/components/helpers/clipboard.ts:200 |
| Nothing selected | [code] deleteAction returns false for no selection id. | src/frontend/components/helpers/clipboard.ts:205 |
| Editor caret | [code] Plain global shortcuts defer typing; EditboxLines handles empty-text/line removal using its own guards and history. | src/frontend/components/edit/editbox/EditboxLines.svelte:667 |
| Editor selected text box, no caret | [code] Selection kind determines deletion handler; check generated effects/history records for item versus slide. | src/frontend/components/helpers/clipboard.ts:206 |
| Text input focused | [code] Global plain keys return except Escape. Preview ignores non-function keys in input/.edit. Ctrl/Cmd uses a separate passthrough list; clipboard helpers decide native text handling. | src/frontend/utils/shortcuts.ts:257 |
| Popup open | [code] Enter submits through triggerPopupSubmit. Escape follows protected-popup rules; clearAll refuses while a popup is open. Preview only directly excludes assign_shortcut, so other key families need their own guard. | src/frontend/utils/shortcuts.ts:251 |
| Drawer focused | [code] Selection/clipboard routes use selected.id or focusedArea. Presentation routes still need their own guards; drawer focus alone does not disable Preview. | src/frontend/components/helpers/clipboard.ts:248 |
| Project item selected | [code] Clipboard routes dispatch by selection id; presentation keys route through OutputHelper project/show state. Keyboard clearAll refuses a non-scripture selection. | src/frontend/components/output/clear.ts:16 |
| Outputs locked | [code] OutputHelper.advanceOutput returns; clearAll returns. This does not disable editing/clipboard operations. | src/frontend/components/helpers/OutputHelper.ts:113 |

[Generated handlers](../../generated/events/README.md); [live traces](../../traces/README.md). Query: `npm run ai:ask -- key "Delete"`.
