# Ctrl/Cmd+Shift+L

[code] Toggle diagnostic panel. Rows describe source guards, not runtime verification. Custom keys and mounted local components can add behavior.

| Situation | What happens | Evidence |
| --- | --- | --- |
| Show view, no/live output; Focus Mode; linked/bound slides | [code] shiftCtrlKeys.l toggles debugPanelOpen; it does not call setOutput. | src/frontend/utils/shortcuts.ts:81 |
| Editor without caret / drawer / project selection | [code] Same global shift+ctrl route unless earlier guards return. | src/frontend/utils/shortcuts.ts:212 |
| Text box editing / text input focused | [code] L is not a typing passthrough exception, so the global typing-target gate may suppress the debug toggle. | src/frontend/utils/shortcuts.ts:208 |
| Popup open | [code] Ctrl branch precedes plain popup handling; popup alone does not block the command. | src/frontend/utils/shortcuts.ts:182 |
| Potential lock overlap | [code] Preview ctrl shortcut l toggles outLocked, but lookup uses normalized key with original case. Shift-generated uppercase L can avoid that entry; live trace establishes actual state. | src/frontend/components/output/preview/Preview.svelte:45 |

[Generated handlers](../../generated/events/README.md); [live traces](../../traces/README.md). Query: `npm run ai:ask -- key "Ctrl/Cmd+Shift+L"`.
