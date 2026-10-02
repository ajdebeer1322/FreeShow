<script lang="ts">
    import { activeEdit, activeProfile, messageDrafts, outputs, overlays, profiles } from "../../../stores"
    import { history } from "../../helpers/history"
    import { clone } from "../../helpers/array"
    import { createMessageShape, messageFillStyle, messageShapes, shapeStyle, type MessageShape } from "../../helpers/messageShapes"
    import { getStyles } from "../../helpers/style"
    import { getMessageTokens, snapshotMessage } from "../../helpers/messages"
    import { getActiveOutputs } from "../../helpers/output"
    import MaterialButton from "../../inputs/MaterialButton.svelte"
    import MaterialColorInput from "../../inputs/MaterialColorInput.svelte"
    import MessageInstance from "../../output/layers/MessageInstance.svelte"
    import Zoomed from "../../slide/Zoomed.svelte"
    import { rearrangeItems } from "../scripts/itemHelpers"

    $: definition = $overlays[$activeEdit.id || ""]
    $: access = $activeProfile ? $profiles[$activeProfile]?.access.overlays || {} : {}
    $: readOnly = !definition?.message || !!definition.locked || !!definition.isDefault || ["read", "none"].includes(access.global) || ["read", "none"].includes(access[definition?.category || ""])
    $: selectedIndex = $activeEdit.items.at(-1) ?? -1
    $: selectedItem = definition?.items[selectedIndex]
    $: styles = getStyles(selectedItem?.style || "")
    $: fill = styles.background || styles["background-color"] || ""
    let newShape: MessageShape = "rectangle"
    let previewOpen = false
    $: previewValues = definition?.message ? Object.fromEntries(getMessageTokens(definition).map((token) => [token.id, $messageDrafts[$activeEdit.id || ""]?.[token.id] || token.label])) : {}
    $: previewMessage = previewOpen && definition?.message ? snapshotMessage($activeEdit.id || "", definition, previewValues) : null
    $: previewOutputId = getActiveOutputs($outputs, true, true, true)[0] || ""

    function saveItems(items: typeof definition.items) {
        if (readOnly) return
        history({ id: "UPDATE", newData: { data: items, key: "items" }, oldData: { id: $activeEdit.id }, location: { page: "edit", id: "overlay" } })
    }

    function addShape() {
        if (readOnly) return
        const items = clone(definition.items)
        // Behind the message wording, above the starter banner. The editor can reorder normally.
        const index = Math.max(
            0,
            items.findIndex((item) => item.messageText)
        )
        items.splice(index, 0, createMessageShape(newShape))
        saveItems(items)
        activeEdit.update((edit) => ({ ...edit, items: [index] }))
    }

    function setFill(fill: string) {
        if (readOnly || selectedIndex < 0) return
        const items = clone(definition.items)
        for (const index of $activeEdit.items) if (items[index]) items[index].style = messageFillStyle(items[index].style, fill)
        saveItems(items)
    }

    function setShape(value: string) {
        if (readOnly || !selectedItem?.messageShape) return
        if (!(value in messageShapes)) return
        const shape = value as MessageShape
        const items = clone(definition.items)
        items[selectedIndex].messageShape = shape
        items[selectedIndex].style = shapeStyle(items[selectedIndex].style, shape)
        saveItems(items)
    }
</script>

<div class="message-design-tools" data-testid="message-design-tools">
    <div class="heading">
        <div class="title">Message artwork</div>
        <MaterialButton small on:click={() => (previewOpen = !previewOpen)}>{previewOpen ? "Close preview" : "Preview"}</MaterialButton>
    </div>
    {#if previewMessage}
        <div class="design-preview" data-testid="message-design-preview">
            <Zoomed background="transparent" checkered center mirror><MessageInstance message={previewMessage} outputId={previewOutputId} mirror preview /></Zoomed>
        </div>
    {/if}
    <div class="add-row">
        <select class="edit" aria-label="New shape" bind:value={newShape} disabled={readOnly}
            >{#each Object.entries(messageShapes) as [id, name]}<option value={id}>{name}</option>{/each}</select
        >
        <MaterialButton small icon="add" variant="contained" disabled={readOnly} on:click={addShape}>Add shape</MaterialButton>
    </div>
    <select class="edit" aria-label="Artwork layer" value={selectedIndex} on:change={(event) => activeEdit.update((edit) => ({ ...edit, items: [Number(event.currentTarget.value)] }))}>
        <option value="-1" disabled>Select artwork…</option>
        {#each definition?.items || [] as item, index}<option value={index}>{index + 1}. {item.messageText ? "Message wording" : item.messageBackground ? "Banner background" : item.messageShape ? messageShapes[item.messageShape] : item.type || "Text"}</option>{/each}
    </select>
    {#if selectedItem}
        {#if selectedItem.messageShape}<details class="shape-options">
                <summary>Change shape</summary><select class="edit" aria-label="Selected shape" value={selectedItem.messageShape} disabled={readOnly} on:change={(event) => setShape(event.currentTarget.value)}
                    >{#each Object.entries(messageShapes) as [id, name]}<option value={id}>{name}</option>{/each}</select
                >
            </details>{/if}
        <div class="fill" class:empty-fill={!fill || fill === "transparent"}><MaterialColorInput label="Fill" value={fill} allowGradients allowOpacity allowEmpty disabled={readOnly} on:change={(event) => setFill(event.detail)} /></div>
        <div class="layer-order"><MaterialButton small variant="outlined" title="Send backward" disabled={readOnly || selectedIndex === 0} on:click={() => rearrangeItems("backward", selectedIndex)}>Backward</MaterialButton><MaterialButton small variant="outlined" title="Bring forward" disabled={readOnly || selectedIndex === definition.items.length - 1} on:click={() => rearrangeItems("forward", selectedIndex)}>Forward</MaterialButton></div>
    {/if}
    <p>Move and resize on the canvas. Fill supports gradients and transparency.</p>
</div>

<style>
    .message-design-tools {
        flex-shrink: 0;
        min-width: 0;
        padding: 10px;
        border-bottom: 1px solid var(--primary-lighter);
        display: grid;
        gap: 8px;
    }
    .title {
        font-size: 0.85em;
        font-weight: 600;
    }
    .heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
    }
    .heading :global(button) {
        margin: 0;
        padding: 4px 8px;
        font-size: 0.75em;
    }
    .design-preview {
        position: relative;
        height: 150px;
        min-width: 0;
    }
    .add-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        align-items: stretch;
        gap: 6px;
    }
    select {
        display: block;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        padding: 8px;
        color: inherit;
        font: inherit;
        font-size: 0.8em;
        background: var(--primary-darkest);
        border: 1px solid var(--primary-lighter);
        border-radius: 4px;
    }
    .add-row :global(button) {
        flex-shrink: 0;
        margin: 0;
        padding: 6px 10px;
        font-size: 0.8em;
    }
    .shape-options {
        min-width: 0;
        font-size: 0.8em;
    }
    summary {
        cursor: pointer;
        opacity: 0.75;
    }
    .shape-options select {
        margin-top: 6px;
        font-size: inherit;
    }
    .fill {
        min-width: 0;
    }
    .fill :global(.color-display) {
        border: 1px solid var(--primary-lighter);
    }
    .empty-fill :global(.color-display) {
        background-image: conic-gradient(#444 25%, #222 0 50%, #444 0 75%, #222 0) !important;
        background-size: 12px 12px !important;
    }
    .empty-fill :global(.color-display)::after {
        content: "None";
        display: grid;
        height: 100%;
        place-items: center;
        font-size: 0.7em;
        color: #fff;
    }
    .layer-order {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 6px;
    }
    .layer-order :global(button) {
        min-width: 0;
        padding: 6px;
        margin: 0;
        font-size: 0.8em;
    }
    p {
        font-size: 0.7em;
        opacity: 0.6;
        margin: 0;
        white-space: normal;
        overflow: visible;
        line-height: 1.4;
    }
</style>
