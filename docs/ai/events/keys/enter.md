# Enter

[code] Startup project, popup submit or editor newline. Rows describe source guards, not runtime verification. Custom keys and mounted local components can add behavior.

| Situation | What happens | Evidence |
| --- | --- | --- |
| Show view, no show, recently used projects displayed | [code] Open first recently used project. | src/frontend/utils/shortcuts.ts:135 |
| Show view, live slide / Focus Mode | [code] No built-in preview Enter advance; global handler only has the startup/recent-project branch. | src/frontend/utils/shortcuts.ts:130 |
| Linked or output-bound slide live | [code] No special Enter presentation route; local component handlers still apply. | src/frontend/utils/shortcuts.ts:130 |
| Popup open | [code] Non-repeated Enter calls triggerPopupSubmit, prevents default if submitted. | src/frontend/utils/shortcuts.ts:252 |
| Editor caret / quick edit | [code] EditboxLines handles Enter splitting/history and Shift+Enter behavior; plain global path defers typing. | src/frontend/components/edit/editbox/EditboxLines.svelte:146 |
| Editor without caret | [code] Component-specific handlers and global recent-project guard; no unconditional presentation. | src/frontend/utils/shortcuts.ts:131 |
| Text input focused | [code] Global plain keys return except Escape. Preview ignores non-function keys in input/.edit. Ctrl/Cmd uses a separate passthrough list; clipboard helpers decide native text handling. | src/frontend/utils/shortcuts.ts:257 |
| Popup open | [code] Enter submits through triggerPopupSubmit. Escape follows protected-popup rules; clearAll refuses while a popup is open. Preview only directly excludes assign_shortcut, so other key families need their own guard. | src/frontend/utils/shortcuts.ts:251 |
| Drawer focused | [code] Selection/clipboard routes use selected.id or focusedArea. Presentation routes still need their own guards; drawer focus alone does not disable Preview. | src/frontend/components/helpers/clipboard.ts:248 |
| Project item selected | [code] Clipboard routes dispatch by selection id; presentation keys route through OutputHelper project/show state. Keyboard clearAll refuses a non-scripture selection. | src/frontend/components/output/clear.ts:16 |
| Outputs locked | [code] OutputHelper.advanceOutput returns; clearAll returns. This does not disable editing/clipboard operations. | src/frontend/components/helpers/OutputHelper.ts:113 |

[Generated handlers](../../generated/events/README.md); [live traces](../../traces/README.md). Query: `npm run ai:ask -- key "Enter"`.
