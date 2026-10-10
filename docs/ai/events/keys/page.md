# PageUp / PageDown

[code] Presenter navigation. Rows describe source guards, not runtime verification. Custom keys and mounted local components can add behavior.

| Situation | What happens | Evidence |
| --- | --- | --- |
| Show view, no/live slide; Focus Mode | [code] PageDown advances; PageUp moves backwards via OutputHelper. Prevents browser default when presenter-controller guard permits. | src/frontend/utils/shortcuts.ts:413 |
| Linked and output-bound slides | [code] Same linked waiting/binding route as arrows; PageUp chooses previous direction. | src/frontend/components/helpers/OutputHelper.ts:135 |
| Editor without caret | [code] Can navigate presentation; these handlers lack the selected-item guard used by ArrowLeft/Right. | src/frontend/utils/shortcuts.ts:419 |
| Editor with caret | [code] Preview excludes input/.edit targets for non-function keys. | src/frontend/components/output/preview/Preview.svelte:52 |
| Text input focused | [code] Global plain keys return except Escape. Preview ignores non-function keys in input/.edit. Ctrl/Cmd uses a separate passthrough list; clipboard helpers decide native text handling. | src/frontend/utils/shortcuts.ts:257 |
| Popup open | [code] Enter submits through triggerPopupSubmit. Escape follows protected-popup rules; clearAll refuses while a popup is open. Preview only directly excludes assign_shortcut, so other key families need their own guard. | src/frontend/utils/shortcuts.ts:251 |
| Drawer focused | [code] Selection/clipboard routes use selected.id or focusedArea. Presentation routes still need their own guards; drawer focus alone does not disable Preview. | src/frontend/components/helpers/clipboard.ts:248 |
| Project item selected | [code] Clipboard routes dispatch by selection id; presentation keys route through OutputHelper project/show state. Keyboard clearAll refuses a non-scripture selection. | src/frontend/components/output/clear.ts:16 |
| Outputs locked | [code] OutputHelper.advanceOutput returns; clearAll returns. This does not disable editing/clipboard operations. | src/frontend/components/helpers/OutputHelper.ts:113 |

[Generated handlers](../../generated/events/README.md); [live traces](../../traces/README.md). Query: `npm run ai:ask -- key "PageUp"`.
