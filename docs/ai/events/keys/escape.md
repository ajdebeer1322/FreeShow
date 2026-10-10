# Escape

[code] Close/blur/deselect before audience clearing. Rows describe source guards, not runtime verification. Custom keys and mounted local components can add behavior.

| Situation | What happens | Evidence |
| --- | --- | --- |
| Show view, live output, body focus and no selection/popup | [code] Preview schedules clearAll; slide/background/overlays/messages/audio/timers clear after guards. | src/frontend/components/output/clear.ts:14 |
| Nothing live | [code] clearAll returns when audio and output are already clear. Output-window Escape hides the display when no content is displayed. | src/frontend/utils/shortcuts.ts:158 |
| Focus Mode / linked / bound outputs | [code] Clear active outputs; Focus Mode keeps last-slide cache semantics while clearing the current slide. | src/frontend/components/output/clear.ts:29 |
| Editor with selected items | [code] clearAll refuses; global Escape blurs or deselects. Additional component handlers are indexed. | src/frontend/components/output/clear.ts:16 |
| Text input / text box edited | [code] Global Escape blurs the active element; the output clear guard and other listeners must also be considered. | src/frontend/utils/shortcuts.ts:113 |
| Popup open | [code] Protected initialize/cloud_method and closing alert cannot close. Otherwise popup closes after 20 ms; clearAll sees the popup first and refuses. | src/frontend/utils/shortcuts.ts:121 |
| Context menu / quick search open | [code] Escape closes those first; clearAll refuses context menus; quick-search route returns. | src/frontend/utils/shortcuts.ts:95 |
| Project add-menu open | [code] Projects capture-phase Escape stops propagation, so bubble window listeners do not receive the event. | src/frontend/components/show/Projects.svelte:346 |
| Text input focused | [code] Global plain keys return except Escape. Preview ignores non-function keys in input/.edit. Ctrl/Cmd uses a separate passthrough list; clipboard helpers decide native text handling. | src/frontend/utils/shortcuts.ts:257 |
| Popup open | [code] Enter submits through triggerPopupSubmit. Escape follows protected-popup rules; clearAll refuses while a popup is open. Preview only directly excludes assign_shortcut, so other key families need their own guard. | src/frontend/utils/shortcuts.ts:251 |
| Drawer focused | [code] Selection/clipboard routes use selected.id or focusedArea. Presentation routes still need their own guards; drawer focus alone does not disable Preview. | src/frontend/components/helpers/clipboard.ts:248 |
| Project item selected | [code] Clipboard routes dispatch by selection id; presentation keys route through OutputHelper project/show state. Keyboard clearAll refuses a non-scripture selection. | src/frontend/components/output/clear.ts:16 |
| Outputs locked | [code] OutputHelper.advanceOutput returns; clearAll returns. This does not disable editing/clipboard operations. | src/frontend/components/helpers/OutputHelper.ts:113 |

[Generated handlers](../../generated/events/README.md); [live traces](../../traces/README.md). Query: `npm run ai:ask -- key "Escape"`.
