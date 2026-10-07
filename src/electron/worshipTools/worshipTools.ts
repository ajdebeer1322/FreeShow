// Embedded WorshipTools (planning.worshiptools.com) browser used by "Add show > WorshipTools".
// The page is shown inside the popup as a native view, the user signs in and opens a service in Music Stand.
// The preload reads the service song list and, one song at a time, the lyrics and section tags.

import { ipcMain, shell, WebContentsView, type IpcMainEvent } from "electron"
import { join } from "path"
import { uid } from "uid"
import { getMainWindow } from ".."
import { sendToMain } from "../IPC/main"
import { ToMain } from "../../types/IPC/ToMain"
import type { WorshipToolsBounds, WorshipToolsChart, WorshipToolsLine, WorshipToolsProgress, WorshipToolsSection, WorshipToolsSong, WorshipToolsState, WorshipToolsViewAction } from "../../types/WorshipTools"
import { WT_CATALOG, WT_READ, WT_RESULT, type WorshipToolsCatalog, type WorshipToolsReadRequest, type WorshipToolsReadResult } from "./channels"

// FS_WORSHIPTOOLS_URL points the page at a local mock in tests
const HOME = process.env.FS_WORSHIPTOOLS_URL || "https://planning.worshiptools.com/"
const PARTITION = "persist:worshiptools"
const PARKED_X = -20000
const READ_RESPONSE_TIMEOUT = 40000

// sign in providers WorshipTools can open in a popup
const AUTH_HOSTS = ["accounts.google.com", "appleid.apple.com", "login.microsoftonline.com", "login.live.com", "www.facebook.com", "m.facebook.com"]

const MAX_SONGS = 300
const MAX_SECTIONS = 200
const MAX_LINES = 500
const MAX_TEXT = 2000

let view: WebContentsView | null = null
let bounds: WorshipToolsBounds | null = null
let parked = false
let listenersAdded = false
let windowListenerAdded = false

const state: WorshipToolsState = { open: false, loading: false, url: "", serviceDetected: false, songs: [] }
let lastPushed = ""

function pushState() {
    const signature = JSON.stringify(state)
    if (signature === lastPushed) return
    lastPushed = signature
    sendToMain(ToMain.WORSHIPTOOLS_STATE, { ...state, songs: [...state.songs] })
}

function sendProgress(progress: WorshipToolsProgress) {
    sendToMain(ToMain.WORSHIPTOOLS_PROGRESS, progress)
}

// ---------- view ----------

function applyBounds() {
    if (!view || !bounds) return
    const { width, height, y } = bounds
    // a parked view stays alive and "visible" (so the page keeps rendering) but is moved out of the window
    view.setBounds(parked ? { x: PARKED_X, y, width, height } : bounds)
}

function sanitizeBounds(value: any): WorshipToolsBounds | null {
    if (!value) return null
    const numbers = [value.x, value.y, value.width, value.height].map((a) => Math.round(Number(a)))
    if (numbers.some((a) => !Number.isFinite(a))) return null
    return { x: numbers[0], y: numbers[1], width: Math.max(50, numbers[2]), height: Math.max(50, numbers[3]) }
}

function createView() {
    const mainWindow = getMainWindow()
    if (!mainWindow) return

    view = new WebContentsView({
        webPreferences: {
            partition: PARTITION,
            preload: join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
            // the preload loads local modules, which a sandboxed preload can't do
            sandbox: false,
            backgroundThrottling: false
        }
    })
    const contents = view.webContents

    // some sign in providers refuse embedded browsers
    contents.setUserAgent(contents.getUserAgent().replace(/\s(Electron|FreeShow)\/\S+/gi, ""))
    contents.setAudioMuted(true)

    contents.on("did-start-loading", () => {
        state.loading = true
        pushState()
    })
    contents.on("did-stop-loading", () => {
        state.loading = false
        state.url = contents.getURL()
        pushState()
    })
    contents.on("did-navigate", (_e, url) => {
        state.url = url
        // a new page, the preload reports its song list again
        state.songs = []
        state.serviceDetected = false
        pushState()
    })
    contents.on("did-navigate-in-page", (_e, url) => {
        state.url = url
        pushState()
    })

    contents.setWindowOpenHandler(({ url }) => {
        try {
            const parsed = new URL(url)
            if (parsed.protocol !== "https:") return { action: "deny" }

            // popups for signing in keep the session of the view
            if (AUTH_HOSTS.includes(parsed.hostname)) return { action: "allow" }

            if (parsed.hostname.endsWith("worshiptools.com")) {
                contents.loadURL(url)
                return { action: "deny" }
            }

            shell.openExternal(url)
        } catch (err) {
            console.error("WorshipTools: invalid link", err)
        }
        return { action: "deny" }
    })

    mainWindow.contentView.addChildView(view)

    // the page is only used while the popup is open, drop it if the window reloads
    if (!windowListenerAdded) {
        windowListenerAdded = true
        mainWindow.webContents.on("did-start-loading", () => closeView())
    }

    contents.loadURL(HOME).catch((err) => console.error("WorshipTools: could not load", err))
}

export function worshipToolsView(data: WorshipToolsViewAction) {
    addListeners()

    if (data.action === "open") {
        bounds = sanitizeBounds(data.bounds)
        parked = false
        if (!view || view.webContents.isDestroyed()) createView()
        state.open = true
        applyBounds()
        pushState()
        return
    }

    if (data.action === "close") return closeView()
    if (!view || view.webContents.isDestroyed()) return

    const contents = view.webContents
    if (data.action === "bounds") {
        const next = sanitizeBounds(data.bounds)
        if (next) bounds = next
        parked = false
        applyBounds()
    } else if (data.action === "park") {
        parked = true
        applyBounds()
    } else if (data.action === "back") {
        if (contents.navigationHistory.canGoBack()) contents.navigationHistory.goBack()
    } else if (data.action === "forward") {
        if (contents.navigationHistory.canGoForward()) contents.navigationHistory.goForward()
    } else if (data.action === "reload") {
        contents.reload()
    } else if (data.action === "home") {
        contents.loadURL(HOME).catch((err) => console.error("WorshipTools: could not load", err))
    }
}

export function closeView() {
    cancelImport()

    if (view) {
        const mainWindow = getMainWindow()
        try {
            mainWindow?.contentView.removeChildView(view)
            if (!view.webContents.isDestroyed()) view.webContents.close()
        } catch (err) {
            console.error("WorshipTools: could not close the view", err)
        }
        view = null
    }

    bounds = null
    parked = false
    state.open = false
    state.loading = false
    state.url = ""
    state.serviceDetected = false
    state.songs = []
    pushState()
}

// ---------- messages from the page preload ----------

function addListeners() {
    if (listenersAdded) return
    listenersAdded = true

    ipcMain.on(WT_CATALOG, (e: IpcMainEvent, catalog: WorshipToolsCatalog) => {
        if (!view || e.sender !== view.webContents) return

        const songs = sanitizeSongs(catalog?.songs)
        state.songs = songs
        state.serviceDetected = songs.length > 0
        if (typeof catalog?.href === "string") state.url = catalog.href
        pushState()
    })

    ipcMain.on(WT_RESULT, (e: IpcMainEvent, result: WorshipToolsReadResult) => {
        if (!view || e.sender !== view.webContents) return
        const resolver = typeof result?.requestId === "string" ? pending.get(result.requestId) : null
        if (resolver) resolver(result)
    })
}

function text(value: unknown, max = MAX_TEXT): string {
    return typeof value === "string" ? value.slice(0, max) : ""
}

function sanitizeSongs(value: unknown): WorshipToolsSong[] {
    if (!Array.isArray(value)) return []
    const songs: WorshipToolsSong[] = []
    value.slice(0, MAX_SONGS).forEach((song: any) => {
        const index = Number(song?.index)
        const title = text(song?.title, 300)
        if (!Number.isInteger(index) || index < 0 || !title) return
        songs.push({ index, title, key: song?.key ? text(song.key, 20) : null, active: !!song?.active })
    })
    return songs
}

function sanitizeChart(value: any): WorshipToolsChart | null {
    if (!value || !Array.isArray(value.sections)) return null

    const sections: WorshipToolsSection[] = []
    value.sections.slice(0, MAX_SECTIONS).forEach((section: any) => {
        const lines: WorshipToolsLine[] = []
        if (Array.isArray(section?.lines)) {
            section.lines.slice(0, MAX_LINES).forEach((line: any) => {
                const lineText = text(line?.text)
                if (lineText) lines.push({ text: lineText, kind: line?.kind === "instruction" ? "instruction" : "lyric" })
            })
        }
        sections.push({ heading: text(section?.heading, 200), lines })
    })

    return {
        title: text(value.title, 300),
        key: value.key ? text(value.key, 20) : null,
        tempoTime: text(value.tempoTime, 200),
        attribution: Array.isArray(value.attribution)
            ? value.attribution
                  .slice(0, 100)
                  .map((a: unknown) => text(a))
                  .filter(Boolean)
            : [],
        sections,
        complete: value.complete === true
    }
}

// ---------- import ----------

const pending = new Map<string, (result: WorshipToolsReadResult) => void>()
let activeRun: { cancelled: boolean } | null = null

function requestRead(song: WorshipToolsSong): Promise<WorshipToolsReadResult> {
    return new Promise((resolve) => {
        if (!view || view.webContents.isDestroyed()) {
            resolve({ requestId: "", error: "The WorshipTools page is closed" })
            return
        }

        const requestId = uid(8)
        const done = (result: WorshipToolsReadResult) => {
            clearTimeout(timeout)
            pending.delete(requestId)
            resolve(result)
        }
        const timeout = setTimeout(() => done({ requestId, error: "The song took too long to load" }), READ_RESPONSE_TIMEOUT)
        pending.set(requestId, done)

        const request: WorshipToolsReadRequest = { requestId, index: song.index, title: song.title, key: song.key }
        view.webContents.send(WT_READ, request)
    })
}

export async function importSongs(songs: WorshipToolsSong[]) {
    if (activeRun) return
    const list = sanitizeSongs(songs)
    if (!list.length) {
        sendProgress({ finished: true })
        return
    }

    const run = { cancelled: false }
    activeRun = run
    list.forEach((song) => sendProgress({ index: song.index, status: "waiting" }))

    for (const song of list) {
        if (run.cancelled) {
            sendProgress({ index: song.index, status: "cancelled" })
            continue
        }

        sendProgress({ index: song.index, status: "reading" })
        const result = await requestRead(song)
        if (run.cancelled) {
            sendProgress({ index: song.index, status: "cancelled" })
            continue
        }

        const chart = result.chart ? sanitizeChart(result.chart) : null
        if (chart) sendProgress({ index: song.index, status: "done", chart })
        else sendProgress({ index: song.index, status: "failed", reason: text(result.error, 300) || "The song could not be read" })
    }

    activeRun = null
    sendProgress({ finished: true })
}

export function cancelImport() {
    if (activeRun) activeRun.cancelled = true
    // stop waiting for the page, the preload result is ignored
    pending.forEach((resolve, requestId) => resolve({ requestId, error: "Cancelled" }))
}
