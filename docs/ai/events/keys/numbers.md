# 0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9

[code] Tab navigation, slide numbers or custom keys. Rows describe source guards, not runtime verification. Custom keys and mounted local components can add behavior.

| Situation | What happens | Evidence |
| --- | --- | --- |
| Show view, body focus, special.numberKeys false | [code] 1–5 select Show/Edit/Stage/Draw/Settings via menus; edit may initialize activeEdit. | src/frontend/utils/shortcuts.ts:260 |
| Show view, slide live, special.numberKeys true | [code] Preview accumulates digits for 300 ms then plays index Number(digits)-1. | src/frontend/components/output/preview/Preview.svelte:81 |
| Nothing live / Focus Mode | [code] Numeric slide path needs outSlide.id or activeShow. Focus Mode often clears activeShow, so inspect focused/live state. | src/frontend/components/output/preview/Preview.svelte:62 |
| Linked / output-bound slides | [code] playSlideAtIndex invokes current show/output routing; a number is not a global output id. | src/frontend/components/output/preview/Preview.svelte:86 |
| Editor without caret | [code] Plain body numbers can change top tabs unless special.numberKeys is enabled. | src/frontend/utils/shortcuts.ts:261 |
| Editor caret / text input | [code] Plain global and Preview gates defer numeric typing. | src/frontend/utils/shortcuts.ts:257 |
| Ctrl/Cmd held | [code] Numbers switch drawer tabs with profile access checks, potentially opening the drawer. | src/frontend/utils/shortcuts.ts:185 |
| Custom action/group key matches | [code] Preview tries custom action, slide shortcut and group shortcut before numeric built-ins; early return wins within this listener. | src/frontend/components/output/preview/Preview.svelte:74 |
| Text input focused | [code] Global plain keys return except Escape. Preview ignores non-function keys in input/.edit. Ctrl/Cmd uses a separate passthrough list; clipboard helpers decide native text handling. | src/frontend/utils/shortcuts.ts:257 |
| Popup open | [code] Enter submits through triggerPopupSubmit. Escape follows protected-popup rules; clearAll refuses while a popup is open. Preview only directly excludes assign_shortcut, so other key families need their own guard. | src/frontend/utils/shortcuts.ts:251 |
| Drawer focused | [code] Selection/clipboard routes use selected.id or focusedArea. Presentation routes still need their own guards; drawer focus alone does not disable Preview. | src/frontend/components/helpers/clipboard.ts:248 |
| Project item selected | [code] Clipboard routes dispatch by selection id; presentation keys route through OutputHelper project/show state. Keyboard clearAll refuses a non-scripture selection. | src/frontend/components/output/clear.ts:16 |
| Outputs locked | [code] OutputHelper.advanceOutput returns; clearAll returns. This does not disable editing/clipboard operations. | src/frontend/components/helpers/OutputHelper.ts:113 |

[Generated handlers](../../generated/events/README.md); [live traces](../../traces/README.md). Query: `npm run ai:ask -- key "0"`.
