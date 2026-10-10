# number/custom: potential overlapping handlers

[code] DOM target handlers run before bubble window listeners unless capture. stopPropagation stops propagation; preventDefault alone does not. Global and Preview both register window handlers; source registration/conditional returns determine outcome. Live recordings identify observed wins. Across desktop, output and browser-client files, repeated keys may belong to separate windows rather than a real conflict.

- [code] [src/frontend/utils/shortcuts.ts:162](../../../../src/frontend/utils/shortcuts.ts#L162) — plain-key-branch: keydown. Guards: allowThroughWindow.includes(e.key); e.key === "F4" && e.altKey; isOutputWindow(); e.key === "Escape" && !contentDisplayed; isComposing(e); get(guideActive).
- [code] [src/frontend/utils/shortcuts.ts:184](../../../../src/frontend/utils/shortcuts.ts#L184) — plain-key-branch: keydown. Guards: document.activeElement === document.body && Object.keys(drawerMenus).includes((Number(e.key) - 1).toString()); e.key === "F4" && e.altKey; isOutputWindow(); e.key === "Escape" && !contentDisplayed; allowThroughWindow.includes(e.key); isComposing(e).
- [code] [src/frontend/utils/shortcuts.ts:243](../../../../src/frontend/utils/shortcuts.ts#L243) — plain-key-branch: keydown. Guards: altKeys[e.key]; e.key === "F4" && e.altKey; isOutputWindow(); e.key === "Escape" && !contentDisplayed; allowThroughWindow.includes(e.key); isComposing(e).
- [code] [src/frontend/utils/shortcuts.ts:257](../../../../src/frontend/utils/shortcuts.ts#L257) — plain-key-branch: keydown. Guards: isTypingTarget(document.activeElement) && e.key !== "Escape"; e.key === "F4" && e.altKey; isOutputWindow(); e.key === "Escape" && !contentDisplayed; allowThroughWindow.includes(e.key); isComposing(e).
- [code] [src/frontend/utils/shortcuts.ts:270](../../../../src/frontend/utils/shortcuts.ts#L270) — plain-key-branch: keydown. Guards: keys[e.key]; e.key === "F4" && e.altKey; isOutputWindow(); e.key === "Escape" && !contentDisplayed; allowThroughWindow.includes(e.key); isComposing(e).

[Live key situations](../CONFLICTS.md); [query](../README.md): `npm run ai:ask -- key "number/custom"`.
