# Home: potential overlapping handlers

[code] DOM target handlers run before bubble window listeners unless capture. stopPropagation stops propagation; preventDefault alone does not. Global and Preview both register window handlers; source registration/conditional returns determine outcome. Live recordings identify observed wins. Across desktop, output and browser-client files, repeated keys may belong to separate windows rather than a real conflict.

- [code] [src/frontend/components/edit/tools/BoxStyle.svelte:783](../../../../src/frontend/components/edit/tools/BoxStyle.svelte#L783) — svelte:window: keyup. Guards: e.key.includes("Arrow") || e.key === "Home" || e.key === "End" || getNormalizedKey(e).toUpperCase() === "A".
- [code] [src/frontend/utils/shortcuts.ts:425](../../../../src/frontend/utils/shortcuts.ts#L425) — previewShortcuts: (e: KeyboardEvent) => { if (isTimelineActive()) { triggerFunction("reset_timeline_view") return } if (presentationControllersKeysDisabled()) return e.preventDefault() OutputHelper.advanceOutputs(e) }. Guards: isTimelineActive(); presentationControllersKeysDisabled().

[Live key situations](../CONFLICTS.md); [query](../README.md): `npm run ai:ask -- key "Home"`.
