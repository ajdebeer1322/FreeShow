# Ctrl/Cmd+i: potential overlapping handlers

[code] DOM target handlers run before bubble window listeners unless capture. stopPropagation stops propagation; preventDefault alone does not. Global and Preview both register window handlers; source registration/conditional returns determine outcome. Live recordings identify observed wins. Across desktop, output and browser-client files, repeated keys may belong to separate windows rather than a real conflict.

- [code] [src/frontend/utils/shortcuts.ts:47](../../../../src/frontend/utils/shortcuts.ts#L47) — ctrlKeys: (e: KeyboardEvent) => (e.altKey ? importFromClipboard() : activePopup.set("import")). Guards: none extracted; mounting/focus may gate it.
- [code] [src/frontend/utils/shortcuts.ts:328](../../../../src/frontend/utils/shortcuts.ts#L328) — formattingKeys: isFormattingKey (delegate to editor). Guards: !e.ctrlKey && !e.metaKey.

[Live key situations](../CONFLICTS.md); [query](../README.md): `npm run ai:ask -- key "Ctrl/Cmd+i"`.
