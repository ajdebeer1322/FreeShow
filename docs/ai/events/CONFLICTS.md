# Key conflicts and observed outcomes

[code] 16 key names have multiple handler candidates. These are potential overlaps, not 16 reproduced defects. DOM propagation, component mounting, key case, selection and early returns decide which path runs. preventDefault does not itself stop propagation.

| Situation | Observed outcome in fixture | Recording |
| --- | --- | --- |
| Space: input / caret | [verified] No output advance in the injected input; Space remains typing. | [space-input](../traces/space-input.md) |
| Space: editor without caret | [verified] Both outputs advance in this editor fixture when no textbox caret is active. | [space-editor](../traces/space-editor.md) |
| Shift+Space: live show | [verified] Both outputs advance; the built-in presentation route does not exclude shift. | [shift-space-live](../traces/shift-space-live.md) |
| F2: selected slide | [verified] Rename popup opens and the live slide remains visible. | [f2-selected](../traces/f2-selected.md) |
| F2: no selection | [verified] The slide is cleared in both outputs. | [f2-live](../traces/f2-live.md) |
| Escape: popup | [verified] Popup closes and the live slide stays visible. | [escape-popup](../traces/escape-popup.md) |
| Escape: input | [verified] The input loses focus and live output stays visible. | [escape-input](../traces/escape-input.md) |
| Escape: ordinary live show | [verified] The audience content clears. | [escape-live](../traces/escape-live.md) |
| Ctrl+Z: textbox | [verified] The seeded application history entry moves to redo. | [ctrl-z-textbox](../traces/ctrl-z-textbox.md) |
| Ctrl+Shift+L: body focus | [verified] The debug panel toggles; no output-lock store write was observed. Other keyboard layouts/case mappings remain conditional. | [debug-toggle](../traces/debug-toggle.md) |

[code] The recordings establish resulting state; they do not instrument every function invocation. For source conditions and handlers, see the [situation tables](README.md) and candidates below.

- [F4: 3 candidates](conflicts/F4.md)
- [Escape: 20 candidates](conflicts/Escape.md)
- [Enter: 79 candidates](conflicts/Enter.md)
- [Space: 44 candidates](conflicts/Space.md)
- [Backspace: 9 candidates](conflicts/Backspace.md)
- [ArrowDown: 11 candidates](conflicts/ArrowDown.md)
- [ArrowUp: 11 candidates](conflicts/ArrowUp.md)
- [ArrowRight: 5 candidates](conflicts/ArrowRight.md)
- [ArrowLeft: 5 candidates](conflicts/ArrowLeft.md)
- [Shift: 4 candidates](conflicts/Shift.md)
- [Delete: 5 candidates](conflicts/Delete.md)
- [Home: 2 candidates](conflicts/Home.md)
- [End: 2 candidates](conflicts/End.md)
- [Tab: 5 candidates](conflicts/Tab.md)
- [Ctrl/Cmd+i: 2 candidates](conflicts/Ctrl_Cmd_i.md)
- [F2: 2 candidates](conflicts/F2.md)
