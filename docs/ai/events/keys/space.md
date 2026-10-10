# Space / Shift+Space

[code] Presentation advance versus typing/timeline. Rows describe source guards, not runtime verification. Custom keys and mounted local components can add behavior.

| Situation | What happens | Evidence |
| --- | --- | --- |
| Show view, nothing live | [code] Advance active outputs from active show/project; the route chooses cached/current/project content rather than a hardcoded slide index. | src/frontend/components/helpers/OutputHelper.ts:23 |
| Show view, a slide live | [code] Space advances line/reveal/slide through playNext; isSpace differs from ArrowRight/PageDown. | src/frontend/components/helpers/OutputHelper.ts:128 |
| Shift+Space | [code] Built-in Space handler does not test shiftKey. Custom action/group branches exclude shift; the built-in Space route can still run. | src/frontend/utils/shortcuts.ts:390 |
| Focus Mode | [code] OutputHelper reads the focused project item and output position; clear caching differs in Focus Mode. | src/frontend/components/helpers/OutputHelper.ts:23 |
| Linked slides / output-bound slides | [code] Linked card members with lines/reveals left move; other members wait. Outputs left behind clear their slide while keeping background; bindings determine eligible outputs. | src/frontend/components/helpers/OutputHelper.ts:67 |
| Slide editor, no text being edited | [code] Space can still reach Preview and advance outputs, unless context/timeline/other guards stop it. | src/frontend/utils/shortcuts.ts:397 |
| Slide editor, text box edited | [code] Preview returns for a target inside .edit; Space stays text input. | src/frontend/components/output/preview/Preview.svelte:52 |
| Timeline active | [code] Space leaves preview presentation handling to the timeline route. | src/frontend/utils/shortcuts.ts:394 |
| Text input focused | [code] Global plain keys return except Escape. Preview ignores non-function keys in input/.edit. Ctrl/Cmd uses a separate passthrough list; clipboard helpers decide native text handling. | src/frontend/utils/shortcuts.ts:257 |
| Popup open | [code] Enter submits through triggerPopupSubmit. Escape follows protected-popup rules; clearAll refuses while a popup is open. Preview only directly excludes assign_shortcut, so other key families need their own guard. | src/frontend/utils/shortcuts.ts:251 |
| Drawer focused | [code] Selection/clipboard routes use selected.id or focusedArea. Presentation routes still need their own guards; drawer focus alone does not disable Preview. | src/frontend/components/helpers/clipboard.ts:248 |
| Project item selected | [code] Clipboard routes dispatch by selection id; presentation keys route through OutputHelper project/show state. Keyboard clearAll refuses a non-scripture selection. | src/frontend/components/output/clear.ts:16 |
| Outputs locked | [code] OutputHelper.advanceOutput returns; clearAll returns. This does not disable editing/clipboard operations. | src/frontend/components/helpers/OutputHelper.ts:113 |

[Generated handlers](../../generated/events/README.md); [live traces](../../traces/README.md). Query: `npm run ai:ask -- key "Space"`.
