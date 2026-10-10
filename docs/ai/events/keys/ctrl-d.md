# Ctrl/Cmd+D

[code] Deferred duplicate of selected data. Rows describe source guards, not runtime verification. Custom keys and mounted local components can add behavior.

| Situation | What happens | Evidence |
| --- | --- | --- |
| Show view, no/live output | [code] Dispatch duplicate through ctrlKeys; audience changes depend on reached effects, not whether a slide is live. | src/frontend/utils/shortcuts.ts:38 |
| Focus Mode / linked / output-bound slides | [code] Same command family; explicit selection/show/layout destinations and bindings remain in downstream helpers. | src/frontend/components/helpers/clipboard.ts:215 |
| Slide editor without caret | [code] duplicate uses editor selection/history/save routing. | src/frontend/utils/shortcuts.ts:38 |
| Slide editor caret / text input | [code] Typing-target guard excludes this key from passthrough, so the app command is suppressed. | src/frontend/utils/shortcuts.ts:203 |
| Drawer / project selection | [code] duplicate dispatches through current selected data/focused area when applicable; clipboard lookup keys remain runtime data. | src/frontend/components/helpers/clipboard.ts:248 |
| Popup open | [code] Ctrl branch runs before plain-key popup handling; popup openness alone does not block ctrlKeys. | src/frontend/utils/shortcuts.ts:182 |
| Shift also held | [code] shiftCtrlKeys take precedence when present: Shift+Z redo, Shift+D next_timer, Shift+F focus_mode; otherwise ctrlKeys may still run. | src/frontend/utils/shortcuts.ts:212 |

[Generated handlers](../../generated/events/README.md); [live traces](../../traces/README.md). Query: `npm run ai:ask -- key "Ctrl/Cmd+D"`.
