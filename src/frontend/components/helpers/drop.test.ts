import { beforeEach, describe, expect, it, vi } from "vitest"
import { get } from "svelte/store"
import type { Show } from "../../../types/Show"
import { activeFocus, activePage, activeShow, focusMode, outputs, selected, shows, showsCache, undoHistory } from "../../stores"

// Keep the real drop, history and show-store code; stub unrelated services and native IPC.
vi.mock("../../IPC/main", () => ({ requestMain: vi.fn(), sendMain: vi.fn() }))
vi.mock("../../show/slides", () => ({ changeLayout: vi.fn(), changeSlideGroups: vi.fn(), breakLongLines: vi.fn(), removeItemValues: vi.fn() }))
vi.mock("../../utils/common", () => ({ newToast: vi.fn() }))
vi.mock("../../utils/profile", () => ({ getAccess: vi.fn(() => ({})) }))
vi.mock("../../utils/save", () => ({ save: vi.fn() }))
vi.mock("../actions/actionData", () => ({ actionData: {} }))
vi.mock("../actions/actions", () => ({ addSlideAction: vi.fn(), getActionTriggerId: vi.fn(), isMatchingSlideAction: vi.fn(), customActionActivation: vi.fn() }))
vi.mock("../drawer/bible/scripture", () => ({ getActiveScripturesContent: vi.fn(), getReferenceText: vi.fn(), getScriptureShow: vi.fn(), getScriptureSlidesNew: vi.fn() }))
vi.mock("../drawer/player/playerHelper", () => ({ getVimeoData: vi.fn(), getYouTubeData: vi.fn(), trimPlayerId: vi.fn() }))
vi.mock("../stage/stage", () => ({ addStageItem: vi.fn() }))
vi.mock("../edit/scripts/itemHelpers", () => ({ addItem: vi.fn(), DEFAULT_ITEM_STYLE: "" }))
vi.mock("../edit/scripts/textStyle", () => ({ getItemText: vi.fn() }))
vi.mock("./array", () => ({ clone: (value: unknown) => (value === undefined ? undefined : JSON.parse(JSON.stringify(value))), removeDuplicates: (values: unknown[]) => [...new Set(values)], areObjectsEqual: vi.fn(() => false), keysToID: vi.fn() }))
vi.mock("./historyHelpers", () => ({ _updaters: {} }))
vi.mock("./historyStores", () => ({ createStore: vi.fn(), createStoreHistory: vi.fn(), deleteStore: vi.fn(), deleteStoreHistory: vi.fn(), updateStore: vi.fn(), updateStoreHistory: vi.fn() }))
vi.mock("./media", () => ({
    downloadOnlineMedia: vi.fn(),
    getExtension: (name = "") => name.split(".").at(-1),
    getFileName: (path: string) => path.split("/").at(-1),
    getMediaLayerType: () => "background",
    getMediaStyle: () => ({}),
    getMediaType: (extension: string) => (extension === "mp4" ? "video" : "image"),
    removeExtension: (name = "") => name.replace(/\.[^.]+$/, "")
}))
vi.mock("./output", () => ({ getItemsCountByType: vi.fn(), isEmptyOrSpecial: vi.fn(), mergeWithTemplate: vi.fn(), updateActiveSceneOutputs: vi.fn(), updateLayoutsFromTemplate: vi.fn(), updateSlideFromTemplate: vi.fn() }))
vi.mock("./select", () => ({ deselect: vi.fn() }))
vi.mock("./setShow", () => ({ loadShows: vi.fn(), saveTextCache: vi.fn() }))
vi.mock("./show", () => ({ getLayoutRef: vi.fn(), getShowCacheId: vi.fn(), removeTemplatesFromShow: vi.fn() }))
vi.mock("./showActions", () => ({ getVariableNameId: vi.fn(), getItemWithMostLines: vi.fn() }))

import { getAccess } from "../../utils/profile"
import { ondrop } from "./drop"
import { history } from "./history"
import { historyActions } from "./historyActions"

function makeShow(): Show {
    return {
        name: "Target show",
        category: null,
        settings: { activeLayout: "default", template: null },
        timestamps: { created: 0, modified: null, used: null },
        meta: {},
        slides: {
            first: { group: "First", color: null, settings: {}, notes: "", items: [] },
            second: { group: "Second", color: null, settings: {}, notes: "", items: [] }
        },
        layouts: {
            default: { name: "Default", notes: "", slides: [{ id: "first" }] },
            project: { name: "Project arrangement", notes: "", slides: [{ id: "first" }, { id: "second" }] }
        },
        media: {}
    }
}

async function dropMedia(trigger?: string, thumbnail = true, target = { showId: "target", layout: "project" }) {
    selected.set({ id: "media", data: [{ path: "/new.mp4", name: "New video.mp4", type: "video" }] })
    const element = { getAttribute: () => JSON.stringify({ index: 1, showId: "target" }) }
    const event = {
        target: { closest: (selector: string) => (selector === ".selectElem" ? (thumbnail ? element : null) : trigger ? { id: trigger } : null) },
        ctrlKey: false,
        shiftKey: false,
        altKey: false
    }
    await ondrop(event, "slides", target)
}

function paths() {
    const show = get(showsCache).target
    return show.layouts.project.slides.map((slide) => (slide.background ? show.media[slide.background]?.path : slide.id))
}

describe.each([false, true])("media drops with focusMode=%s", (isFocusMode) => {
    beforeEach(() => {
        vi.clearAllMocks()
        vi.mocked(getAccess).mockReturnValue({})
        activePage.set("show")
        activeShow.set(isFocusMode ? null : { id: "other", index: 0, type: "show" })
        focusMode.set(isFocusMode)
        activeFocus.set({ id: "other", index: 0, type: "show" })
        showsCache.set({ target: makeShow(), other: { ...makeShow(), name: "Other show" } })
        shows.set({ target: { name: "Target show", category: null, timestamps: { created: 0, modified: null, used: null } }, other: { name: "Other show", category: null, timestamps: { created: 0, modified: null, used: null } } })
        undoHistory.set([])
        outputs.set({ live: { enabled: true, out: { slide: { id: "other", layout: "default", index: 0 } } } } as any)
    })

    it.each([
        ["start", ["first", "/new.mp4", "second"]],
        ["end", ["first", "second", "/new.mp4"]]
    ])("inserts on the %s edge into the destination arrangement without changing live or browsing state", async (trigger, expected) => {
        const previousOutputs = JSON.stringify(get(outputs))
        const other = JSON.stringify(get(showsCache).other)
        await dropMedia(trigger)
        expect(paths()).toEqual(expected)
        expect(get(showsCache).target.layouts.default.slides).toEqual([{ id: "first" }])
        expect(JSON.stringify(get(showsCache).other)).toBe(other)
        expect(JSON.stringify(get(outputs))).toBe(previousOutputs)
        expect(get(activeShow)).toEqual(isFocusMode ? null : { id: "other", index: 0, type: "show" })
        expect(get(activeFocus).id).toBe("other")
    })

    it.each(["start_center", "end_center"])("replaces the destination background for %s instead of adding a slide", async (trigger) => {
        await dropMedia(trigger)
        expect(paths()).toEqual(["first", "/new.mp4"])
        expect(Object.keys(get(showsCache).target.slides)).toEqual(["first", "second"])
        expect(get(showsCache).target.layouts.default.slides).toEqual([{ id: "first" }])
    })

    it("appends to the destination show when dropped in its empty workspace", async () => {
        await dropMedia(undefined, false)
        expect(paths()).toEqual(["first", "second", "/new.mp4"])
    })

    it("undoes and redoes an insertion in the same destination arrangement", async () => {
        await dropMedia("start")
        const entry = get(undoHistory)[0]
        expect(entry.newData.remember).toEqual({ showId: "target", layout: "project" })
        historyActions({ obj: { ...entry, oldData: entry.newData, newData: null }, undo: true }).SLIDES()
        expect(paths()).toEqual(["first", "second"])
        historyActions({ obj: entry, undo: false }).SLIDES()
        expect(paths()).toEqual(["first", "/new.mp4", "second"])
    })

    it.each(["show", "profile"])("does not modify a destination locked by %s", async (lock) => {
        if (lock === "show") showsCache.update((cache) => ({ ...cache, target: { ...cache.target, locked: true } }))
        else vi.mocked(getAccess).mockReturnValue({ global: "read" })
        await dropMedia("start")
        expect(paths()).toEqual(["first", "second"])
        expect(get(undoHistory)).toHaveLength(0)
    })

    it("applies thumbnail templates to the explicit show and arrangement", () => {
        activeShow.set({ id: "other", type: "show" })
        history({ id: "TEMPLATE", newData: { id: "target-template" }, location: { page: "show", show: { id: "target" }, layout: "project" } })
        expect(get(showsCache).target.settings.template).toBe("target-template")
        expect(get(showsCache).other.settings.template).toBeNull()
        expect(get(undoHistory)[0].newData.remember).toEqual({ showId: "target", layout: "project" })
    })

    it("preserves the opened-show fallback for normal/API slide creation", () => {
        focusMode.set(false)
        activeShow.set({ id: "target", type: "show" })
        history({ id: "SLIDES", newData: { data: [{ group: "Added", color: null, settings: {}, notes: "", items: [] }] }, location: { page: "show" } })
        expect(get(showsCache).target.layouts.default.slides).toHaveLength(2)
        expect(get(showsCache).target.layouts.project.slides).toHaveLength(2)
    })
})
