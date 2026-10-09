<script lang="ts">
    import { onDestroy, tick } from "svelte"
    import { activeProject, activeShow, outputs, projects, showsCache, slideTimers } from "../../stores"
    import { buildDebugState } from "../helpers/debugState"
    import { clearDebugLog, DEBUG_AREAS, debugEntries, debugPanelOpen, formatDebugEntries, getAreaEntries } from "../helpers/debugLog"
    import type { DebugAreaId } from "../helpers/debugLog"

    // Live state + event log of the presentation engine, one tab per main part of the program.
    // It never takes keyboard focus, so Space/arrows keep working while it is open.

    type TabId = "state" | DebugAreaId | "all"
    let tab: TabId = "state"

    let state = ""
    let refreshTimeout: ReturnType<typeof setTimeout> | null = null
    // refresh the state when anything it shows changes
    $: scheduleRefresh([$outputs, $activeShow, $activeProject, $projects, $showsCache, $slideTimers])
    function scheduleRefresh(_deps: unknown) {
        if (refreshTimeout) return
        refreshTimeout = setTimeout(() => {
            refreshTimeout = null
            try {
                state = buildDebugState()
            } catch (error) {
                state = "Could not build the state: " + String(error)
            }
        }, 120)
    }

    // entries per tab
    $: counts = Object.fromEntries([...DEBUG_AREAS.map((a) => a.id), "all"].map((id) => [id, getAreaEntries($debugEntries, id as DebugAreaId | "all").length])) as Record<string, number>
    $: tabs = [{ id: "state", label: "State", description: "What every output shows now, what Space would do for each, the project and the slides of the playing show (updates live)" }, ...DEBUG_AREAS.filter((a) => a.id !== "other" || counts.other > 0).map((a) => ({ id: a.id as string, label: a.label, description: a.description })), { id: "all", label: "All", description: "Everything in time order" }] as { id: TabId; label: string; description: string }[]
    $: active = tabs.find((a) => a.id === tab) || tabs[0]
    $: logText = tab === "state" ? state : formatDebugEntries(getAreaEntries($debugEntries, tab as DebugAreaId | "all"))

    let logElem: HTMLElement | undefined
    let stickToBottom = true
    $: if (logText !== undefined && tab !== "state") scrollDown()
    async function scrollDown() {
        await tick()
        if (logElem && stickToBottom) logElem.scrollTop = logElem.scrollHeight
    }
    function logScrolled() {
        if (!logElem) return
        stickToBottom = logElem.scrollHeight - logElem.scrollTop - logElem.clientHeight < 30
    }
    function selectTab(id: TabId) {
        tab = id
        stickToBottom = true
    }

    let status = ""
    let statusTimeout: ReturnType<typeof setTimeout> | null = null
    function setStatus(text: string) {
        status = text
        if (statusTimeout) clearTimeout(statusTimeout)
        statusTimeout = setTimeout(() => (status = ""), 2500)
    }

    async function copyText(text: string, what: string) {
        try {
            await navigator.clipboard.writeText(text)
            setStatus(`Copied ${what} (${text.split("\n").length} lines)`)
        } catch (error) {
            setStatus("Copy failed: " + String(error))
        }
    }

    function copyTab() {
        const header = `FREESHOW DEBUG - ${active.label} - ${new Date().toISOString()}\n`
        if (tab === "state") return copyText(`${header}\n${buildDebugState()}\n`, "state")
        const text = formatDebugEntries(getAreaEntries($debugEntries, tab as DebugAreaId | "all"))
        return copyText(`${header}${active.description}\n\n${text}\n`, active.label)
    }

    function copyAll() {
        return copyText(`FREESHOW DEBUG ${new Date().toISOString()}\n\n${buildDebugState()}\n\nEVENT LOG (oldest first, all parts)\n${formatDebugEntries($debugEntries)}\n`, "everything")
    }

    function clear() {
        clearDebugLog()
        setStatus("Log cleared")
    }

    onDestroy(() => {
        if (refreshTimeout) clearTimeout(refreshTimeout)
        if (statusTimeout) clearTimeout(statusTimeout)
    })

    // buttons must not take focus, otherwise Space would press the focused button instead of going to the presentation
    const keepFocus = (e: MouseEvent) => e.preventDefault()
</script>

<div class="debug" role="none">
    <div class="header">
        <strong>Debug</strong>
        <span class="hint">records while open - <kbd>Ctrl/Cmd+Shift+L</kbd> closes</span>
        <span class="status">{status}</span>
        <button class="primary" tabindex="-1" on:mousedown={keepFocus} on:click={copyAll}>Copy all</button>
        <button tabindex="-1" on:mousedown={keepFocus} on:click={clear}>Clear log</button>
        <button tabindex="-1" on:mousedown={keepFocus} on:click={() => debugPanelOpen.set(false)}>Close</button>
    </div>

    <div class="tabs">
        {#each tabs as item}
            <button class="tab" class:active={tab === item.id} tabindex="-1" on:mousedown={keepFocus} on:click={() => selectTab(item.id)}>
                {item.label}{#if item.id !== "state"}<span class="count">{counts[item.id] || 0}</span>{/if}
            </button>
        {/each}
    </div>

    <div class="tabHeader">
        <span class="description">{active.description}</span>
        <button tabindex="-1" on:mousedown={keepFocus} on:click={copyTab}>Copy {active.label}</button>
    </div>

    <pre class="log" bind:this={logElem} on:scroll={logScrolled}>{logText || (tab === "state" ? "" : "Nothing logged here yet. Do the thing you want to look at.")}</pre>
</div>

<style>
    .debug {
        position: fixed;
        right: 8px;
        bottom: 8px;
        z-index: 9000;

        width: min(820px, 62vw);
        height: min(78vh, 780px);

        display: flex;
        flex-direction: column;

        background: var(--primary-darkest);
        color: var(--text);
        border: 1px solid var(--primary-lighter);
        border-radius: 6px;
        box-shadow: 0 4px 24px rgb(0 0 0 / 0.6);

        font-size: 0.75em;
        user-select: text;
    }

    .header {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
        padding: 6px 8px;
        background: var(--primary-darker);
        border-bottom: 1px solid var(--primary-lighter);
    }
    .hint {
        opacity: 0.6;
    }
    .status {
        flex: 1;
        color: var(--secondary);
    }

    button {
        padding: 2px 8px;
        background: var(--primary);
        color: var(--text);
        border: 1px solid var(--primary-lighter);
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background: var(--hover);
    }
    button.primary {
        background: var(--secondary);
        color: var(--secondary-text, #fff);
        border-color: var(--secondary);
    }

    .tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 2px;
        padding: 4px 8px 0;
        background: var(--primary-darker);
        border-bottom: 1px solid var(--primary-lighter);
    }
    .tab {
        padding: 4px 10px;
        border-bottom: 0;
        border-radius: 4px 4px 0 0;
        background: transparent;
        opacity: 0.7;
    }
    .tab.active {
        background: var(--primary-darkest);
        border-color: var(--secondary);
        opacity: 1;
        font-weight: bold;
    }
    .count {
        margin-left: 6px;
        padding: 0 5px;
        border-radius: 8px;
        background: var(--primary-lighter);
        font-weight: normal;
        font-size: 0.9em;
    }

    .tabHeader {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 8px;
        border-bottom: 1px solid var(--primary-lighter);
    }
    .description {
        flex: 1;
        opacity: 0.65;
    }

    pre {
        margin: 0;
        padding: 6px 8px;
        overflow: auto;
        font-family: ui-monospace, Menlo, Consolas, monospace;
        font-size: 0.95em;
        line-height: 1.35;
        white-space: pre;
        user-select: text;
    }
    .log {
        flex: 1;
        min-height: 80px;
    }
</style>
