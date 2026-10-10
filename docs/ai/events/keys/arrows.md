# ArrowLeft / ArrowRight / ArrowUp / ArrowDown

[code] Output navigation, editor navigation or item movement. Rows describe source guards, not runtime verification. Custom keys and mounted local components can add behavior.

| Situation | What happens | Evidence |
| --- | --- | --- |
| Show view, nothing/live output | [code] Left/Right call advanceOutputs; Left chooses playPrevious, Right playNext. Up/Down have component-specific handlers rather than entries in previewShortcuts. | src/frontend/utils/shortcuts.ts:399 |
| Focus Mode / linked / bound outputs | [code] Left/Right use linked-card waiting and binding-aware output traversal; direction determines remaining lines/reveals. | src/frontend/components/helpers/OutputHelper.ts:69 |
| Editor, selected items and no caret | [code] All arrows move selected items by 1 px; Ctrl/Cmd multiplies by 10; the history route records item style changes. | src/frontend/components/edit/EditTools.svelte:323 |
| Editor, no selected items | [code] Up/Down select previous/next editor slide. Left/Right may still navigate presentation outputs. | src/frontend/components/edit/Slides.svelte:34 |
| Editor caret in .edit | [code] EditTools and Preview return; browser/editor caret handling takes over. | src/frontend/components/edit/EditTools.svelte:316 |
| Text input focused | [code] Global plain keys return except Escape. Preview ignores non-function keys in input/.edit. Ctrl/Cmd uses a separate passthrough list; clipboard helpers decide native text handling. | src/frontend/utils/shortcuts.ts:257 |
| Popup open | [code] Enter submits through triggerPopupSubmit. Escape follows protected-popup rules; clearAll refuses while a popup is open. Preview only directly excludes assign_shortcut, so other key families need their own guard. | src/frontend/utils/shortcuts.ts:251 |
| Drawer focused | [code] Selection/clipboard routes use selected.id or focusedArea. Presentation routes still need their own guards; drawer focus alone does not disable Preview. | src/frontend/components/helpers/clipboard.ts:248 |
| Project item selected | [code] Clipboard routes dispatch by selection id; presentation keys route through OutputHelper project/show state. Keyboard clearAll refuses a non-scripture selection. | src/frontend/components/output/clear.ts:16 |
| Outputs locked | [code] OutputHelper.advanceOutput returns; clearAll returns. This does not disable editing/clipboard operations. | src/frontend/components/helpers/OutputHelper.ts:113 |

[Generated handlers](../../generated/events/README.md); [live traces](../../traces/README.md). Query: `npm run ai:ask -- key "ArrowLeft"`.
