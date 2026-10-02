<script lang="ts">
    import { uid } from "uid"
    import type { Overlay as OverlayData } from "../../../../types/Show"
    import { activeEdit, activeMessage, activePage, activeProfile, messageDrafts, messagesPanelOpen, outLocked, outputs, overlays, profiles } from "../../../stores"
    import { clone } from "../../helpers/array"
    import { history } from "../../helpers/history"
    import { hideMessage, showMessage } from "../../helpers/messageOutput"
    import { createMessage, getMessageScrolling, getMessageTokens, messageWording, messageParts, normalizeMessage, setMessageScrolling, setMessageWording, snapshotMessage } from "../../helpers/messages"
    import { getActiveOutputs } from "../../helpers/output"
    import { getStyles } from "../../helpers/style"
    import MaterialButton from "../../inputs/MaterialButton.svelte"
    import Zoomed from "../../slide/Zoomed.svelte"
    import Overlay from "../layers/Overlay.svelte"
    import MessageWordingEditor from "./MessageWordingEditor.svelte"

    let editing = false
    let previewOpen = false
    let savedId = ""
    let config: OverlayData | null = null
    let wording = ""
    let background = "#172338"
    let transparent = false
    let savedBannerColor = "#172338"
    let savedTransparent = false
    let repeatFades = false
    let feedback = ""

    $: definitions = Object.entries($overlays).filter(([, overlay]) => overlay.message && profile.global !== "none" && profile[overlay.category || ""] !== "none")
    $: if (!definitions.some(([id]) => id === $activeMessage)) activeMessage.set(definitions[0]?.[0] || "")
    $: current = $overlays[$activeMessage]
    $: if ($activeMessage !== savedId) {
        savedId = $activeMessage
        editing = false
        feedback = ""
    }
    $: if (current && !editing) {
        config = clone(current)
        config.message!.scrolling = getMessageScrolling(current)
        wording = messageWording(current)
        const bg = getStyles(current.items.find((item) => item.messageBackground)?.style || "")["background-color"]
        background = /^#[0-9a-f]{6}$/i.test(bg || "") ? bg : "#172338"
        transparent = bg === "transparent"
        savedBannerColor = background
        savedTransparent = transparent
        repeatFades = !!current.message?.cycle
    }
    $: tokens = current ? getMessageTokens(current) : []
    $: values = $messageDrafts[$activeMessage] || {}
    $: missing = tokens.filter((token) => !values[token.id]?.trim())
    $: draftTokens = config ? getMessageTokens(setMessageWording(config, wording)) : []
    $: liveOutputs = Object.entries($outputs).filter(([, output]) => output.out?.messages?.[$activeMessage])
    $: allLiveMessages = [
        ...new Map(
            Object.values($outputs)
                .flatMap((output) => Object.values(output.out?.messages || {}))
                .map((message) => [message.id, message])
        ).values()
    ]
    $: previewMessage = current ? snapshotMessage($activeMessage, current, values) : null
    $: outputId = getActiveOutputs($outputs, true, true, true)[0] || ""
    $: profile = $activeProfile ? $profiles[$activeProfile]?.access.overlays || {} : {}
    $: readOnly = !!current?.locked || !!current?.isDefault || profile.global === "read" || profile.global === "none" || profile[current?.category || ""] === "read" || profile[current?.category || ""] === "none"

    function create() {
        if (profile.global === "read" || profile.global === "none" || profile[""] === "read" || profile[""] === "none") return
        const id = uid()
        history({ id: "UPDATE", newData: { data: createMessage() }, oldData: { id }, location: { page: "none", id: "overlay" } })
        activeMessage.set(id)
        messagesPanelOpen.set(true)
    }

    function setValue(id: string, value: string) {
        messageDrafts.update((drafts) => ({ ...drafts, [$activeMessage]: { ...drafts[$activeMessage], [id]: value } }))
        feedback = ""
    }

    function present(update = false) {
        const targets = showMessage($activeMessage, values, update)
        feedback = targets.length ? "" : "No available output. Enable an output or change the destination."
    }

    function save() {
        if (!config?.message || readOnly) return
        let updated = setMessageWording(config, wording)
        updated = setMessageScrolling(updated, config.message.scrolling)
        const bg = updated.items.find((item) => item.messageBackground)
        if (bg && (background !== savedBannerColor || transparent !== savedTransparent)) {
            const style: Record<string, string> = { ...getStyles(bg.style), "background-color": transparent ? "transparent" : background }
            delete style.background
            bg.style = Object.entries(style)
                .map(([key, value]) => `${key}:${value};`)
                .join("")
        }
        if (repeatFades) updated.message!.cycle = updated.message!.cycle || { hold: 5, pause: 2 }
        else delete updated.message!.cycle
        updated.message!.tokens = getMessageTokens(updated)
        updated.message = normalizeMessage(updated.message!)
        history({ id: "UPDATE", newData: { data: updated }, oldData: { id: $activeMessage }, location: { page: "none", id: "overlay" } })
        editing = false
    }

    function editDesign() {
        activeEdit.set({ type: "overlay", id: $activeMessage, items: [] })
        activePage.set("edit")
    }

    function remove() {
        if (readOnly || $outLocked) return
        hideMessage($activeMessage)
        history({ id: "UPDATE", newData: { id: $activeMessage }, location: { page: "none", id: "overlay" } })
    }

    function toggleOutput(id: string, enabled: boolean) {
        if (!config?.message) return
        const ids = config.message.outputIds || []
        config.message.outputIds = enabled ? [...ids, id] : ids.filter((value) => value !== id)
        config = config
    }

    function setFade(key: "fadeIn" | "fadeOut", value: string) {
        if (!config?.message) return
        config.message[key] = Math.max(0, Number(value)) * 1000
        config = config
    }

    function enableCycle() {
        if (!config?.message || config.message.cycle) return
        config.message.cycle = { hold: 5, pause: 2 }
        config = config
    }
</script>

<section class="messages-panel border" data-testid="messages-panel">
    <div class="heading">
        <button class="heading-button" aria-expanded={$messagesPanelOpen} on:click={() => messagesPanelOpen.set(!$messagesPanelOpen)}>Messages {$messagesPanelOpen ? "▾" : "▸"}</button>
        {#if allLiveMessages.length}<span class="live">Live</span>{/if}
        <MaterialButton small title="New message" disabled={profile.global === "read" || profile.global === "none" || profile[""] === "read" || profile[""] === "none"} on:click={create}>+ New</MaterialButton>
    </div>
    {#if $messagesPanelOpen}
        <div class="controls">
            {#each allLiveMessages.filter((message) => message.id !== $activeMessage) as message (message.id)}
                <div class="buttons"><span class="hint">Also live: {message.name}</span><MaterialButton small disabled={$outLocked} on:click={() => hideMessage(message.id)}>Hide {message.name}</MaterialButton></div>
            {/each}
            {#if definitions.length}
                <select class="edit message-select" aria-label="Saved message" bind:value={$activeMessage}>
                    {#each definitions as [id, definition]}<option value={id}>{definition.name}</option>{/each}
                </select>
                <div class="detail-heading">
                    <span>Message detail</span>
                    <MaterialButton small disabled={readOnly} on:click={() => (editing = !editing)}>Edit message</MaterialButton>
                </div>
                {#if !editing}
                    <div class="template" aria-label="Message wording">
                        {#each messageParts(messageWording(current)) as part}{#if part.token}<span class="variable-chip">{part.token}</span>{:else}{part.text}{/if}{/each}
                    </div>
                    <div class="design-row">
                        <MaterialButton small title="Preview message" on:click={() => (previewOpen = !previewOpen)}>{previewOpen ? "Close preview" : "Preview"}</MaterialButton>
                        <MaterialButton small disabled={readOnly} on:click={editDesign}>Edit design</MaterialButton>
                        <span class="hint">{current?.message?.duration ? `Hide after ${current.message.duration}s` : "Manual"}</span>
                    </div>
                    {#each tokens as token (token.id)}
                        <label class="value-row"><span>{token.label}</span><input class="edit" value={values[token.id] || ""} on:input={(event) => setValue(token.id, event.currentTarget.value)} /></label>
                    {/each}
                    <div class="buttons operation-buttons">
                        <span class="hint status">{liveOutputs.length ? `Live on ${liveOutputs.map(([, output]) => output.name).join(", ")}` : "Ready"}</span>
                        {#if liveOutputs.length}<MaterialButton small variant="outlined" disabled={$outLocked} on:click={() => hideMessage($activeMessage)}>Hide</MaterialButton>{/if}
                        <MaterialButton small variant="contained" disabled={$outLocked || !!missing.length} on:click={() => present(!!liveOutputs.length)}>{liveOutputs.length ? "Update" : "Show"}</MaterialButton>
                    </div>
                    {#if $outLocked}<p class="hint">Output is locked.</p>{:else if missing.length}<p class="hint">Fill in {missing.map((token) => token.label).join(", ")} before showing.</p>{/if}
                    {#if feedback}<p role="status">{feedback}</p>{/if}
                {/if}
                {#if previewOpen && previewMessage}
                    <div class="message-preview">
                        <Zoomed background="transparent" checkered center mirror>
                            <Overlay overlay={{ items: previewMessage.items }} id={$activeMessage} {outputId} dynamicValues={false} mirror preview transition={{ type: "none", duration: 0, easing: "linear" }} />
                        </Zoomed>
                    </div>
                {/if}
                {#if editing && config?.message}
                    <fieldset disabled={readOnly}>
                        <label>Name<input class="edit" bind:value={config.name} /></label>
                        <MessageWordingEditor bind:value={wording} variables={draftTokens.map((token) => token.label)} />
                        <div class="buttons">
                            <MaterialButton
                                small
                                on:click={() => {
                                    save()
                                    editDesign()
                                }}>Edit design</MaterialButton
                            ><span class="hint">Shapes, gradients, fonts and images</span>
                        </div>
                        <details class="appearance-options">
                            <summary>Appearance, timing and scrolling</summary>
                            {#if config.items.some((item) => item.messageBackground)}
                                <label>Banner background<input type="color" bind:value={background} /></label>
                                <label class="check"><input type="checkbox" bind:checked={transparent} />Transparent banner</label>
                            {/if}
                            <div class="two-columns">
                                <label>Fade in (seconds)<input class="edit" type="number" min="0" max="30" step="0.1" value={config.message.fadeIn / 1000} on:input={(e) => setFade("fadeIn", e.currentTarget.value)} /></label>
                                <label>Fade out (seconds)<input class="edit" type="number" min="0" max="30" step="0.1" value={config.message.fadeOut / 1000} on:input={(e) => setFade("fadeOut", e.currentTarget.value)} /></label>
                            </div>
                            <label>Hide after (seconds; 0 = manual)<input class="edit" type="number" min="0" max="86400" bind:value={config.message.duration} /></label>
                            <label
                                >Scroll direction<select class="edit" aria-label="Scroll direction" bind:value={config.message.scrolling.type}>
                                    <option value="none">No scrolling</option><option value="right_left">Right to left</option><option value="left_right">Left to right</option><option value="bottom_top">Bottom to top</option><option value="top_bottom">Top to bottom</option>
                                </select></label
                            >
                            {#if config.message.scrolling.type !== "none"}
                                <div class="two-columns">
                                    <label>Seconds per pass<input class="edit" type="number" min="1" max="600" bind:value={config.message.scrolling.duration} /></label>
                                    <label>Gap (pixels)<input class="edit" type="number" min="0" max="2000" bind:value={config.message.scrolling.gap} /></label>
                                </div>
                                <label class="check"><input type="checkbox" bind:checked={config.message.scrolling.repeat} />Repeat scrolling</label>
                                {#if config.message.scrolling.repeat}
                                    <p class="hint">The next copy follows after the gap above.</p>
                                {:else}
                                    <label class="check"><input type="checkbox" bind:checked={config.message.scrolling.startOffscreen} />Start outside the text box</label>
                                {/if}
                                <label>Edge feather (pixels)<input class="edit" type="number" min="0" max="200" bind:value={config.message.scrolling.feather} /></label>
                            {/if}
                            <label class="check"><input type="checkbox" bind:checked={repeatFades} on:change={enableCycle} />Repeat fade in and out</label>
                            {#if repeatFades && config.message.cycle}
                                <div class="two-columns">
                                    <label>Visible hold (seconds)<input class="edit" type="number" min="0.1" max="600" bind:value={config.message.cycle.hold} /></label>
                                    <label>Hidden pause (seconds)<input class="edit" type="number" min="0" max="600" bind:value={config.message.cycle.pause} /></label>
                                </div>
                            {/if}
                            <details>
                                <summary>Output destination</summary>
                                <p class="hint">No boxes checked uses the currently selected outputs.</p>
                                {#each Object.entries($outputs).filter(([, output]) => !output.stageOutput) as [id, output]}
                                    <label class="check"><input type="checkbox" checked={config.message.outputIds?.includes(id) || false} on:change={(e) => toggleOutput(id, e.currentTarget.checked)} />{output.name}{output.enabled ? "" : " (disabled)"}</label>
                                {/each}
                                {#each config.message.outputIds?.filter((id) => !$outputs[id]) || [] as id}<p class="hint">Unavailable output: {id}</p>{/each}
                            </details>
                        </details>
                        <div class="buttons"><MaterialButton variant="contained" on:click={save}>Save message</MaterialButton><MaterialButton on:click={() => (editing = false)}>Cancel</MaterialButton><MaterialButton red disabled={$outLocked} on:click={remove}>Delete</MaterialButton></div>
                    </fieldset>
                {/if}
            {:else}
                <p class="hint">Create a reusable notice, fill in its fields, then show it over the presentation.</p>
            {/if}
        </div>
    {/if}
</section>

<style>
    .messages-panel {
        flex-shrink: 0;
        width: 100%;
        background: var(--primary-darker);
    }
    .heading,
    .buttons {
        display: flex;
        align-items: center;
        gap: 4px;
        flex-wrap: wrap;
    }
    .heading {
        padding: 4px 8px;
    }
    .heading-button {
        flex: 1;
        text-align: start;
        color: inherit;
        font: inherit;
        background: transparent;
        border: none;
        padding: 8px 0;
        cursor: pointer;
    }
    .live {
        color: #73dca0;
        font-size: 0.8em;
    }
    .controls {
        padding: 0 10px 10px;
    }
    label {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 8px 0;
        font-size: 0.85em;
    }
    input,
    select {
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        color: inherit;
        background: var(--primary-darkest);
        border: 1px solid var(--primary-lighter);
        border-radius: 4px;
        padding: 6px 8px;
        font: inherit;
    }
    input[type="color"] {
        height: 36px;
    }
    .check {
        flex-direction: row;
        align-items: center;
    }
    input[type="checkbox"] {
        width: auto;
    }
    .hint {
        opacity: 0.7;
        font-size: 0.78em;
        margin: 8px 0;
    }
    .message-select {
        margin: 0 0 6px;
    }
    .detail-heading,
    .design-row {
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .detail-heading {
        justify-content: space-between;
        font-size: 0.8em;
        text-transform: uppercase;
    }
    .template {
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        padding: 8px;
        background: var(--primary-darkest);
        border: 1px solid var(--primary-lighter);
        border-radius: 4px;
        font-size: 0.9em;
        line-height: 1.8;
    }
    .variable-chip {
        padding: 2px 7px;
        border-radius: 4px;
        background: #245779;
        color: #fff;
    }
    .design-row {
        flex-wrap: wrap;
        margin: 4px 0;
    }
    .design-row .hint {
        margin-left: auto;
    }
    .value-row {
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }
    .value-row span {
        width: 30%;
        overflow-wrap: anywhere;
        flex-shrink: 0;
    }
    .operation-buttons {
        border-top: 1px solid var(--primary-lighter);
        padding-top: 6px;
    }
    .status {
        flex: 1;
    }
    .appearance-options {
        margin: 12px 0;
    }
    fieldset {
        border: 1px solid var(--primary-lighter);
        border-radius: 4px;
        padding: 8px;
        min-width: 0;
        margin-top: 10px;
    }
    .two-columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
    }
    .message-preview {
        position: relative;
        height: 180px;
        margin: 8px 0;
    }
    summary {
        cursor: pointer;
        font-size: 0.85em;
    }
</style>
