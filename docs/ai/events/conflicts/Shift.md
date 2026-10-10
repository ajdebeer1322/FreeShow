# Shift: potential overlapping handlers

[code] DOM target handlers run before bubble window listeners unless capture. stopPropagation stops propagation; preventDefault alone does not. Global and Preview both register window handlers; source registration/conditional returns determine outcome. Live recordings identify observed wins. Across desktop, output and browser-client files, repeated keys may belong to separate windows rather than a real conflict.

- [code] [src/frontend/components/edit/editbox/Editbox.svelte:238](../../../../src/frontend/components/edit/editbox/Editbox.svelte#L238) — svelte:window: keydown. Guards: e.key === "Shift"; isComposing(e); cropElem?.handleKeydown(e); e.key === "Escape"; $activeEdit.items.length; !$activeEdit.items.includes(index) || document.activeElement?.closest(".item") || document.activeElement?.closest("input").
- [code] [src/frontend/components/edit/editbox/Editbox.svelte:238](../../../../src/frontend/components/edit/editbox/Editbox.svelte#L238) — svelte:window: keyup. Guards: e.key === "Shift".
- [code] [src/frontend/components/stage/Stagebox.svelte:352](../../../../src/frontend/components/stage/Stagebox.svelte#L352) — svelte:window: keydown. Guards: !edit; e.key === "Shift"; (e.key === "Backspace" || e.key === "Delete") && $activeStage.items.includes(id) && !document.activeElement?.closest(".stage_item") && !document.activeElement?.closest(".edit"); document.querySelector(".timeline-track .action-marker.selected").
- [code] [src/frontend/components/stage/Stagebox.svelte:352](../../../../src/frontend/components/stage/Stagebox.svelte#L352) — svelte:window: keyup. Guards: !edit; e.key === "Shift".

[Live key situations](../CONFLICTS.md); [query](../README.md): `npm run ai:ask -- key "Shift"`.
