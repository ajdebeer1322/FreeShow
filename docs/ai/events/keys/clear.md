# F1 / F2 / F3 / F4 / F5

[code] Function keys and rename overlap. Rows describe source guards, not runtime verification. Custom keys and mounted local components can add behavior.

| Situation | What happens | Evidence |
| --- | --- | --- |
| F1, show/live/Focus Mode | [code] Clear background unless output locked; records clear_background timeline action. | src/frontend/utils/shortcuts.ts:360 |
| F2, no non-scripture selection or Focus Mode | [code] Clear slide unless output locked; records clear_slide. Outside Focus Mode a non-scripture selection suppresses presentation clear. | src/frontend/utils/shortcuts.ts:366 |
| F2, selected slide/show/project outside Focus Mode | [code] Global handler schedules menuClick(rename); preview returns when a non-scripture selection exists. | src/frontend/utils/shortcuts.ts:142 |
| F3 | [code] Clear overlays and effects, recording clear_overlays. | src/frontend/utils/shortcuts.ts:374 |
| F4 | [code] Clear audio, playlist and microphones unless locked; Alt+F4 returns from the global handler but Preview function handling needs separate assessment. | src/frontend/utils/shortcuts.ts:380 |
| F5 | [code] Advance outputs because presentationControllersKeysDisabled currently returns false; the transition-reset else branch is unreachable under that function. | src/frontend/utils/shortcuts.ts:451 |
| Input/editor caret | [code] Preview allows function keys through its input/.edit guard, unlike ordinary keys. | src/frontend/components/output/preview/Preview.svelte:51 |
| Linked/output-bound slides | [code] Clear helpers act on active output ids. F5 advances through linked-card waiting. | src/frontend/components/helpers/OutputHelper.ts:23 |
| Text input focused | [code] Global plain keys return except Escape. Preview ignores non-function keys in input/.edit. Ctrl/Cmd uses a separate passthrough list; clipboard helpers decide native text handling. | src/frontend/utils/shortcuts.ts:257 |
| Popup open | [code] Enter submits through triggerPopupSubmit. Escape follows protected-popup rules; clearAll refuses while a popup is open. Preview only directly excludes assign_shortcut, so other key families need their own guard. | src/frontend/utils/shortcuts.ts:251 |
| Drawer focused | [code] Selection/clipboard routes use selected.id or focusedArea. Presentation routes still need their own guards; drawer focus alone does not disable Preview. | src/frontend/components/helpers/clipboard.ts:248 |
| Project item selected | [code] Clipboard routes dispatch by selection id; presentation keys route through OutputHelper project/show state. Keyboard clearAll refuses a non-scripture selection. | src/frontend/components/output/clear.ts:16 |
| Outputs locked | [code] OutputHelper.advanceOutput returns; clearAll returns. This does not disable editing/clipboard operations. | src/frontend/components/helpers/OutputHelper.ts:113 |

[Generated handlers](../../generated/events/README.md); [live traces](../../traces/README.md). Query: `npm run ai:ask -- key "F1"`.
