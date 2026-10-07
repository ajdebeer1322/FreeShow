<!-- Add show > WorshipTools: sign in on the embedded page, choose songs, import every song as its own show. -->
<script lang="ts">
    import { createEventDispatcher, onDestroy, onMount } from "svelte"
    import { Main } from "../../../../../types/IPC/Main"
    import { ToMain } from "../../../../../types/IPC/ToMain"
    import type { WorshipToolsChart, WorshipToolsProgress, WorshipToolsSong, WorshipToolsState } from "../../../../../types/WorshipTools"
    import { createWorshipToolsShows, getExistingShowNames, isInLibrary } from "../../../../converters/worshipTools"
    import { DEFAULT_MAX_LINE_LENGTH } from "../../../../converters/worshipToolsText"
    import { destroyMain, receiveToMain, sendMain } from "../../../../IPC/main"
    import { activePopup, activeProject, projects, shows, special } from "../../../../stores"
    import { newToast } from "../../../../utils/common"
    import { translateText } from "../../../../utils/language"
    import T from "../../../helpers/T.svelte"
    import List from "../../../input/List.svelte"
    import MaterialButton from "../../../inputs/MaterialButton.svelte"
    import MaterialDropdown from "../../../inputs/MaterialDropdown.svelte"
    import MaterialNumberInput from "../../../inputs/MaterialNumberInput.svelte"
    import LyricsFormatOptions from "./LyricsFormatOptions.svelte"

    export let cats: { id: string; name: string; icon: string; iconColor: string }[] = []
    export let category = ""

    const dispatch = createEventDispatcher()

    type SongResult = { status: "waiting" | "reading" | "done" | "failed" | "cancelled"; reason?: string; chart?: WorshipToolsChart }

    let state: WorshipToolsState = { open: false, loading: false, url: "", serviceDetected: false, songs: [] }
    let step: "browser" | "pick" | "import" = "browser"

    // ---------- embedded page ----------

    let placeholder: HTMLDivElement | undefined
    let opened = false
    let lastBounds = ""

    function syncBounds() {
        if (!opened || step !== "browser" || !placeholder) return
        const rect = placeholder.getBoundingClientRect()
        if (rect.width < 50 || rect.height < 50) return

        const bounds = { x: rect.x, y: rect.y, width: rect.width, height: rect.height }
        const signature = JSON.stringify(bounds)
        if (signature === lastBounds) return

        lastBounds = signature
        sendMain(Main.WORSHIPTOOLS_VIEW, { action: "bounds", bounds })
    }

    // park the page (keeps it loaded, but moves it out of view) while another step is shown
    $: if (opened) {
        if (step === "browser") {
            lastBounds = ""
            setTimeout(syncBounds)
        } else {
            sendMain(Main.WORSHIPTOOLS_VIEW, { action: "park" })
        }
    }

    let boundsInterval: NodeJS.Timeout | null = null
    let openTimeout: NodeJS.Timeout | null = null
    let stateListener = ""
    let progressListener = ""

    onMount(() => {
        stateListener = receiveToMain(ToMain.WORSHIPTOOLS_STATE, (data) => (state = data))
        progressListener = receiveToMain(ToMain.WORSHIPTOOLS_PROGRESS, onProgress)

        // wait for the popup animation, so the page gets its final size
        openTimeout = setTimeout(() => {
            if (!placeholder) return
            const rect = placeholder.getBoundingClientRect()
            sendMain(Main.WORSHIPTOOLS_VIEW, { action: "open", bounds: { x: rect.x, y: rect.y, width: rect.width, height: rect.height } })
            lastBounds = JSON.stringify({ x: rect.x, y: rect.y, width: rect.width, height: rect.height })
            opened = true
        }, 350)

        boundsInterval = setInterval(syncBounds, 150)
    })

    onDestroy(() => {
        if (openTimeout) clearTimeout(openTimeout)
        if (boundsInterval) clearInterval(boundsInterval)
        destroyMain(stateListener)
        destroyMain(progressListener)
        sendMain(Main.WORSHIPTOOLS_VIEW, { action: "close" })
    })

    const navigate = (action: "back" | "forward" | "reload" | "home") => sendMain(Main.WORSHIPTOOLS_VIEW, { action })

    // ---------- song list ----------

    let selected: { [index: number]: boolean } = {}
    $: existingNames = getExistingShowNames($shows)
    $: songs = state.songs
    $: chosen = songs.filter((a) => selected[a.index])

    function goPick() {
        // songs already in the library are skipped unless they are checked
        const names = getExistingShowNames()
        selected = {}
        state.songs.forEach((song) => (selected[song.index] = !isInLibrary(song.title, names)))
        step = "pick"
    }

    function selectAll(value: boolean) {
        selected = {}
        state.songs.forEach((song) => (selected[song.index] = value))
    }

    // ---------- destination ----------

    let destination: "library" | "project" = "library"
    $: projectName = $activeProject ? $projects[$activeProject]?.name || "" : ""
    $: destinationOptions = [{ label: translateText("worshiptools.library_only"), value: "library" }, ...($activeProject && $projects[$activeProject] ? [{ label: `${translateText("worshiptools.library_project")}: ${projectName}`, value: "project" }] : [])]
    $: if (destination === "project" && !($activeProject && $projects[$activeProject])) destination = "library"

    // ---------- line length ----------

    // long chart lines are broken into shorter lines (saved with the other settings)
    $: maxLineLength = Number($special.worshipToolsLineLength ?? DEFAULT_MAX_LINE_LENGTH) || 0

    // ---------- import ----------

    let results: { [index: number]: SongResult } = {}
    let importing: WorshipToolsSong[] = []
    let finished = false
    let cancelled = false
    let summary = ""

    function startImport() {
        if (!chosen.length) return

        importing = [...chosen]
        results = {}
        importing.forEach((song) => (results[song.index] = { status: "waiting" }))
        finished = false
        cancelled = false
        summary = ""
        step = "import"

        sendMain(Main.WORSHIPTOOLS_IMPORT, { songs: importing })
    }

    function onProgress(data: WorshipToolsProgress) {
        if ("finished" in data) {
            if (step === "import" && !finished) finishImport()
            return
        }

        results[data.index] = { status: data.status, reason: data.reason, chart: data.chart }
        results = results
    }

    function finishImport() {
        finished = true
        if (cancelled) return

        const readable = importing.filter((song) => results[song.index]?.chart)
        const charts = readable.map((song) => results[song.index].chart!)
        const { created, empty } = createWorshipToolsShows(charts, { category, addToProject: destination === "project", maxLineLength })

        // songs that had nothing left to show
        readable.forEach((song, i) => {
            if (empty.includes(charts[i].title)) results[song.index] = { status: "failed", reason: translateText("worshiptools.no_lyrics") }
        })
        results = results

        const failed = importing.length - created
        summary = `${translateText("worshiptools.imported")} ${created}`
        if (failed > 0) summary += `, ${translateText("worshiptools.failed")}: ${failed}`

        // everything worked, nothing more to look at
        if (!failed && created) {
            newToast(summary)
            activePopup.set(null)
        }
    }

    function cancelImport() {
        cancelled = true
        sendMain(Main.WORSHIPTOOLS_CANCEL)
        step = "pick"
    }

    function statusText(result: SongResult | undefined): string {
        if (!result) return ""
        if (result.status === "failed") return result.reason || translateText("worshiptools.failed")
        if (result.status === "done" && result.chart && !result.chart.complete) return `${translateText("worshiptools.done")} — ${translateText("worshiptools.incomplete")}`
        return translateText("worshiptools." + result.status)
    }
</script>

{#if step === "browser"}
    <div class="bar">
        <MaterialButton icon="previous" title="worshiptools.back" on:click={() => navigate("back")} />
        <MaterialButton icon="next" title="worshiptools.forward" on:click={() => navigate("forward")} />
        <MaterialButton icon="refresh" title="worshiptools.reload" on:click={() => navigate("reload")} />
        <MaterialButton icon="home" title="WorshipTools" on:click={() => navigate("home")} />

        <span class="status">
            {#if state.serviceDetected}
                <T id="worshiptools.found" />: {state.songs.length}
            {:else if state.loading}
                <T id="worshiptools.loading" />
            {:else}
                <T id="worshiptools.sign_in" />
            {/if}
        </span>

        <MaterialButton variant="contained" icon="check" disabled={!state.serviceDetected} on:click={goPick} data-testid="worshiptools.choose">
            <T id="worshiptools.choose_songs" />
        </MaterialButton>
    </div>

    <div class="browser" bind:this={placeholder} />
{:else if step === "pick"}
    <div class="bar">
        <MaterialButton icon="previous" on:click={() => (step = "browser")}>
            <T id="worshiptools.show_website" />
        </MaterialButton>
        <span class="status" />
        <MaterialButton on:click={() => selectAll(true)}><T id="worshiptools.select_all" /></MaterialButton>
        <MaterialButton on:click={() => selectAll(false)}><T id="worshiptools.select_none" /></MaterialButton>
    </div>

    <div class="songs">
        {#each songs as song (song.index)}
            {@const exists = isInLibrary(song.title, existingNames)}
            <label class="song" class:exists>
                <input type="checkbox" bind:checked={selected[song.index]} />
                <span class="title">{song.title}</span>
                {#if exists}<span class="tag"><T id="worshiptools.in_library" /></span>{/if}
                {#if song.key}<span class="key">{song.key}</span>{/if}
            </label>
        {/each}
    </div>

    <List top={10}>
        <MaterialDropdown label="show.category" value={category} options={cats.map((a) => ({ label: translateText(a.name || "main.unnamed"), value: a.id, icon: a.icon, iconColor: a.iconColor }))} on:change={(e) => dispatch("category", e.detail)} />
        <MaterialDropdown label="worshiptools.destination" value={destination} options={destinationOptions} on:change={(e) => (destination = e.detail)} />
    </List>

    <LyricsFormatOptions />

    <List top={5}>
        <MaterialNumberInput label="worshiptools.max_line" value={maxLineLength} max={120} on:change={(e) => special.set({ ...$special, worshipToolsLineLength: e.detail })} hideWhenZero />
    </List>

    <MaterialButton on:click={startImport} variant="contained" disabled={!chosen.length} icon="import" style="width: 100%;margin-top: 20px;" data-testid="worshiptools.import">
        <T id="worshiptools.import" /> ({chosen.length})
    </MaterialButton>
{:else}
    <div class="songs">
        {#each importing as song (song.index)}
            {@const result = results[song.index]}
            <div class="song progress {result?.status || ''}">
                <span class="title">{song.title}</span>
                <span class="state">{statusText(result)}</span>
            </div>
        {/each}
    </div>

    {#if summary}<p class="summary">{summary}</p>{/if}

    {#if finished}
        <MaterialButton on:click={() => activePopup.set(null)} variant="contained" style="width: 100%;margin-top: 20px;" icon="check">
            <T id="actions.close" />
        </MaterialButton>
    {:else}
        <MaterialButton on:click={cancelImport} variant="outlined" style="width: 100%;margin-top: 20px;" icon="close">
            <T id="worshiptools.cancel" />
        </MaterialButton>
    {/if}
{/if}

<style>
    .bar {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 10px;
    }
    .status {
        flex: 1;
        padding: 0 10px;
        opacity: 0.8;
        font-size: 0.9em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* the native page is placed over this box */
    .browser {
        width: min(78vw, 1100px);
        height: min(62vh, 640px);
        background: var(--primary-darker);
        border: 1px solid var(--primary-lighter);
        border-radius: 4px;
    }

    .songs {
        display: flex;
        flex-direction: column;
        gap: 2px;
        max-height: 40vh;
        overflow-y: auto;
        background: var(--primary-darker);
        border-radius: 4px;
        padding: 4px;
    }
    .song {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 10px;
        border-radius: 4px;
        cursor: pointer;
    }
    .song:hover {
        background: var(--hover);
    }
    .song.exists .title {
        opacity: 0.6;
    }
    .song.progress {
        cursor: default;
    }
    .song.failed .state {
        color: #ff8f8f;
    }
    .song.done .state {
        color: var(--secondary);
    }
    .title {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .key,
    .tag,
    .state {
        font-size: 0.85em;
        opacity: 0.8;
    }
    .tag {
        font-style: italic;
    }
    .summary {
        margin-top: 10px;
        text-align: center;
    }
</style>
