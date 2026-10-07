// Preload of the embedded WorshipTools view. It only reads the page, nothing on the page is changed.
// It reports the service song list and, on request, selects a song and reads its lyrics.

import { ipcRenderer } from "electron"
import { WT_CATALOG, WT_READ, WT_RESULT, type WorshipToolsCatalog, type WorshipToolsReadRequest, type WorshipToolsReadResult } from "./channels"
import { discoverCharts, extractChart, findChart, MENU_SONG_SELECTOR, normalizeTitle, readServiceSongs } from "./extract"

// only the top page, the song charts are read from its (same origin) frames
const isTopFrame = window.top === window

const READ_TIMEOUT = 20000
const POLL_MS = 200
// polls with the same result before the song is accepted
const STABLE_POLLS = 3
// polls before a song without the final page marker is accepted anyway
const STABLE_POLLS_INCOMPLETE = 10
// polls with the same problem in a chart that is on the page (for example an image chart) before giving up
const ERROR_POLLS = 15

function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---------- service song list ----------

let lastCatalog = ""
function publishCatalog() {
    const catalog: WorshipToolsCatalog = { href: location.href, songs: readServiceSongs(document) }
    const signature = JSON.stringify(catalog)
    if (signature === lastCatalog) return

    lastCatalog = signature
    ipcRenderer.send(WT_CATALOG, catalog)
}

// ---------- reading one song ----------

function describeCharts(): string {
    const charts = discoverCharts(document)
    if (!charts.length) return "no chart is shown on the page"
    return `charts on the page: ${charts.map((a) => a.title || "untitled").join(", ")}`
}

async function readSong(request: WorshipToolsReadRequest): Promise<Omit<WorshipToolsReadResult, "requestId">> {
    const items = Array.from(document.querySelectorAll<HTMLElement>(MENU_SONG_SELECTOR))
    const item = items[request.index]
    const current = readServiceSongs(document).find((a) => a.index === request.index)
    if (!item || !current || normalizeTitle(current.title) !== normalizeTitle(request.title)) return { error: "The service changed, this song is no longer in the menu" }

    item.click()

    const started = Date.now()
    let lastSignature = ""
    let stable = 0
    let lastGood: ReturnType<typeof extractChart> | null = null
    let lastError = ""
    let errorStreak = 0
    let clickedAgain = false

    while (Date.now() - started < READ_TIMEOUT) {
        await wait(POLL_MS)

        // some menus only react to their inner button
        if (!clickedAgain && Date.now() - started > 2500 && !item.classList.contains("selected")) {
            clickedAgain = true
            item.querySelector<HTMLElement>("button, .item-native")?.click()
        }

        const chart = findChart(discoverCharts(document), request.title, request.key)
        if (!chart) {
            lastError = "The chart did not load. " + describeCharts()
            continue
        }

        const result = extractChart(chart)
        if ("error" in result) {
            lastError = result.error
            stable = 0
            errorStreak++
            if (errorStreak >= ERROR_POLLS) return { error: lastError }
            continue
        }
        errorStreak = 0

        const signature = JSON.stringify(result.chart)
        stable = signature === lastSignature ? stable + 1 : 0
        lastSignature = signature
        lastGood = result

        if (result.chart.complete && stable >= STABLE_POLLS) return { chart: result.chart }
        if (stable >= STABLE_POLLS_INCOMPLETE) return { chart: result.chart }
    }

    if (lastGood && "chart" in lastGood) return { chart: lastGood.chart }
    return { error: lastError || "The song did not load in time" }
}

if (isTopFrame) {
    setInterval(publishCatalog, 1000)
    window.addEventListener("DOMContentLoaded", publishCatalog)

    ipcRenderer.on(WT_READ, async (_e, request: WorshipToolsReadRequest) => {
        let result: Omit<WorshipToolsReadResult, "requestId">
        try {
            result = await readSong(request)
        } catch (err) {
            result = { error: err instanceof Error ? err.message : "Could not read the song" }
        }
        ipcRenderer.send(WT_RESULT, { requestId: request.requestId, ...result } as WorshipToolsReadResult)
    })
}
