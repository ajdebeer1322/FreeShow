<script lang="ts">
    import { createEventDispatcher, onMount, tick } from "svelte"
    import { messageParts, messageVariableName } from "../../helpers/messages"

    export let value = ""
    export let variables: string[] = []
    let editor: HTMLDivElement
    let selection: Range | null = null
    let variableName = ""
    let error = ""
    let mounted = false
    const dispatch = createEventDispatcher<{ input: string }>()

    function read(node: Node): string {
        if (node.nodeType === Node.TEXT_NODE) return node.textContent || ""
        if (node instanceof HTMLElement && node.dataset.token) return `{${node.dataset.token}}`
        if (node.nodeName === "BR") return "\n"
        return Array.from(node.childNodes)
            .map((child, index) => (index && ["DIV", "P"].includes(child.nodeName) ? "\n" : "") + read(child))
            .join("")
    }

    function render() {
        if (!editor) return
        editor.replaceChildren()
        for (const part of messageParts(value)) {
            if (part.token) {
                const chip = document.createElement("span")
                chip.textContent = part.token
                chip.dataset.token = part.token
                chip.contentEditable = "false"
                chip.className = "variable-chip"
                editor.append(chip)
            } else editor.append(document.createTextNode(part.text))
        }
        selection = null
    }

    onMount(() => {
        render()
        mounted = true
    })
    $: if (mounted && editor && value !== read(editor)) render()

    function remember() {
        const range = window.getSelection()?.rangeCount ? window.getSelection()!.getRangeAt(0) : null
        if (range && editor.contains(range.commonAncestorContainer)) selection = range.cloneRange()
    }

    function input() {
        value = read(editor)
        dispatch("input", value)
        remember()
    }

    async function insert(text: string) {
        editor.focus()
        const range = selection && editor.contains(selection.commonAncestorContainer) ? selection : document.createRange()
        if (range !== selection) {
            range.selectNodeContents(editor)
            range.collapse(false)
        }
        range.deleteContents()
        const fragment = document.createDocumentFragment()
        for (const part of messageParts(text)) {
            if (part.token) {
                const chip = document.createElement("span")
                chip.textContent = part.token
                chip.dataset.token = part.token
                chip.contentEditable = "false"
                chip.className = "variable-chip"
                fragment.append(chip)
            } else fragment.append(document.createTextNode(part.text))
        }
        // A text node after a chip gives the caret a normal typing position.
        fragment.append(document.createTextNode(""))
        const end = fragment.lastChild!
        range.insertNode(fragment)
        range.setStartAfter(end)
        range.collapse(true)
        window.getSelection()?.removeAllRanges()
        window.getSelection()?.addRange(range)
        input()
        await tick()
        remember()
    }

    function addVariable() {
        const name = messageVariableName(variableName)
        if (!name) {
            error = "Enter a variable name without braces or line breaks."
            return
        }
        error = ""
        variableName = ""
        void insert(`{${name}}`)
    }

    function paste(event: ClipboardEvent) {
        event.preventDefault()
        remember()
        void insert(event.clipboardData?.getData("text/plain") || "")
    }

    function copy(event: ClipboardEvent, cut = false) {
        remember()
        if (!selection || selection.collapsed || !editor.contains(selection.commonAncestorContainer)) return
        event.preventDefault()
        // Copying a visual chip must retain its variable identity when pasted back.
        event.clipboardData?.setData("text/plain", read(selection.cloneContents()))
        if (cut) {
            selection.deleteContents()
            input()
        }
    }

    function keydown(event: KeyboardEvent) {
        if (event.key !== "Enter" || event.isComposing) return
        event.preventDefault()
        remember()
        void insert("\n")
    }
</script>

<div class="wording-editor">
    <div class="caption" id="message-wording-label">Wording</div>
    <div class="edit template-input" role="textbox" tabindex="0" aria-labelledby="message-wording-label" aria-multiline="true" contenteditable="true" bind:this={editor} on:input={input} on:mouseup={remember} on:keyup={remember} on:blur={remember} on:paste={paste} on:copy={copy} on:cut={(event) => copy(event, true)} on:keydown={keydown}></div>
    <div class="variable-controls">
        <select
            class="edit"
            aria-label="Insert variable"
            value=""
            on:change={(event) => {
                void insert(`{${event.currentTarget.value}}`)
                event.currentTarget.value = ""
            }}
        >
            <option value="" disabled>Insert variable…</option>
            {#each variables as name}<option value={name}>{name}</option>{/each}
        </select>
        <div class="new-variable">
            <input
                class="edit"
                aria-label="New variable name"
                placeholder="New variable name"
                bind:value={variableName}
                on:keydown={(event) => {
                    if (event.key === "Enter") {
                        event.preventDefault()
                        addVariable()
                    }
                }}
            />
            <button type="button" disabled={!variableName.trim()} on:click={addVariable}>Add variable</button>
        </div>
    </div>
    {#if error}<p role="status">{error}</p>{/if}
    <p class="hint">Click in the wording, then insert a variable. Each name gets its own value field after saving. Delete a chip to remove it from the wording.</p>
</div>

<style>
    .caption {
        font-size: 0.85em;
        margin: 8px 0 4px;
    }
    .template-input {
        min-height: 72px;
        padding: 8px;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        line-height: 1.8;
        background: var(--primary-darkest);
        border: 1px solid var(--primary-lighter);
        border-radius: 4px;
    }
    .template-input:focus {
        outline: 2px solid var(--secondary);
    }
    .template-input :global(.variable-chip) {
        display: inline;
        padding: 2px 7px;
        border-radius: 4px;
        background: #245779;
        color: #fff;
        white-space: pre-wrap;
    }
    .variable-controls {
        display: grid;
        gap: 6px;
        margin-top: 6px;
    }
    .new-variable {
        display: flex;
        gap: 4px;
    }
    input,
    select,
    button {
        min-width: 0;
        padding: 7px;
        color: inherit;
        font: inherit;
        background: var(--primary-darkest);
        border: 1px solid var(--primary-lighter);
        border-radius: 4px;
    }
    input,
    select {
        width: 100%;
        box-sizing: border-box;
    }
    button {
        white-space: nowrap;
        cursor: pointer;
    }
    button:disabled {
        opacity: 0.5;
        cursor: default;
    }
    .hint {
        font-size: 0.75em;
        opacity: 0.7;
        margin: 6px 0;
    }
</style>
