import { beforeEach, describe, expect, it, vi } from "vitest"
import { get } from "svelte/store"
import type { Show } from "../../../types/Show"
import { activePage, activeShow, selected, shows, showsCache, undoHistory } from "../../stores"

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
import { undo } from "./history"
import { historyActions } from "./historyActions"
import { copySlides, getSlidePasteTarget, getClickedSlideSelection, isCrossShowDrop, pasteSlides, rememberClickedSlide } from "./slideTransfer"

function makeShow(name: string, slideIds: string[]): Show {
    const slides = Object.fromEntries(slideIds.map((id) => [id, { group: id.toUpperCase(), color: null, settings: {}, notes: "", items: [] }]))
    return {
        name,
        category: null,
        settings: { activeLayout: "default", template: null },
        timestamps: { created: 0, modified: null, used: null },
        meta: {},
        slides,
        layouts: { default: { name: "Default", notes: "", slides: slideIds.map((id) => ({ id })) } },
        media: {}
    } as Show
}

const groups = () => ({ a: makeShow("Song A", ["a1", "a2"]), b: makeShow("Song B", ["b1", "b2"]) })
const names = (showId: string) => get(showsCache)[showId].layouts.default.slides.map((a) => get(showsCache)[showId].slides[a.id].group)

async function dropOnB(trigger: string, index: number, source = { index: 1, showId: "a" } as any, ctrlKey = false) {
    selected.set({ id: "slide", data: [source] })
    const element = { getAttribute: () => JSON.stringify({ index, showId: "b" }) }
    const event = {
        target: { closest: (selector: string) => (selector === ".selectElem" ? element : { id: trigger }) },
        ctrlKey,
        shiftKey: false,
        altKey: false
    }
    await ondrop(event, "slides", { showId: "b", layout: "default" })
}

beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(getAccess).mockReturnValue({})
    activePage.set("show")
    // the opened show is neither the source nor the destination
    activeShow.set({ id: "c", index: 0, type: "show" })
    showsCache.set({ ...groups(), c: makeShow("Song C", ["c1"]) })
    shows.set({ a: { name: "Song A" }, b: { name: "Song B" }, c: { name: "Song C" } } as any)
    undoHistory.set([])
    selected.set({ id: null, data: [] })
})

describe("dragging slides between shows", () => {
    it.each([
        ["start", 0, ["A2", "B1", "B2"]],
        ["end", 0, ["B1", "A2", "B2"]],
        ["end", 1, ["B1", "B2", "A2"]]
    ])("moves the slide to the %s of thumbnail %i in the destination show", async (trigger, index, expected) => {
        await dropOnB(trigger, index)
        expect(names("b")).toEqual(expected)
        // it is gone from the source show, and the opened show is untouched
        expect(names("a")).toEqual(["A1"])
        expect(Object.values(get(showsCache).a.slides).map((a) => a.group)).toEqual(["A1"])
        expect(names("c")).toEqual(["C1"])
        expect(get(activeShow)).toEqual({ id: "c", index: 0, type: "show" })
    })

    it("moves several slides in order", async () => {
        await dropOnB("start", 0, undefined, false)
        selected.set({
            id: "slide",
            data: [
                { index: 1, showId: "a" },
                { index: 0, showId: "a" }
            ]
        })
        await ondrop({ target: { closest: () => null }, ctrlKey: false, shiftKey: false, altKey: false }, "slides", { showId: "b", layout: "default" })
        expect(names("b")).toEqual(["A2", "B1", "B2", "A1"])
        expect(names("a")).toEqual([])
    })

    it("copies instead when Ctrl/Cmd is held", async () => {
        await dropOnB("start", 0, undefined, true)
        expect(names("b")).toEqual(["A2", "B1", "B2"])
        expect(names("a")).toEqual(["A1", "A2"])
    })

    it("uses a new slide id for the slide in the destination", async () => {
        await dropOnB("end", 1)
        const ids = get(showsCache).b.layouts.default.slides.map((a) => a.id)
        expect(new Set(ids).size).toBe(3)
        expect(ids).not.toContain("a2")
    })

    it("appends when dropped in an empty part of the destination", async () => {
        selected.set({ id: "slide", data: [{ index: 0, showId: "a" }] })
        const event = { target: { closest: () => null }, ctrlKey: false, shiftKey: false, altKey: false }
        await ondrop(event, "slides", { showId: "b", layout: "default" })
        expect(names("b")).toEqual(["B1", "B2", "A1"])
        expect(names("a")).toEqual(["A2"])
    })

    it("keeps the slide in a second arrangement of the source show", async () => {
        showsCache.update((cache) => {
            cache.a.layouts.second = { name: "Second", notes: "", slides: [{ id: "a2" }] }
            return cache
        })
        await dropOnB("start", 0)
        expect(names("b")).toEqual(["A2", "B1", "B2"])
        expect(names("a")).toEqual(["A1"])
        expect(get(showsCache).a.slides.a2).toBeDefined()
        expect(get(showsCache).a.layouts.second.slides).toEqual([{ id: "a2" }])
    })

    it("undoes and redoes both steps", async () => {
        await dropOnB("start", 0)
        const [added, removed] = get(undoHistory)
        expect(added.newData.remember).toEqual({ showId: "b", layout: "default" })
        expect(removed.oldData.remember).toEqual({ showId: "a", layout: "default" })
        historyActions({ obj: { ...removed, newData: removed.oldData, oldData: null }, undo: true }).SLIDES()
        expect(names("a")).toEqual(["A1", "A2"])
        historyActions({ obj: { ...added, oldData: added.newData, newData: null }, undo: true }).SLIDES()
        expect(names("b")).toEqual(["B1", "B2"])
        historyActions({ obj: added, undo: false }).SLIDES()
        expect(names("b")).toEqual(["A2", "B1", "B2"])
    })

    it.each(["show", "profile"])("does not change a destination locked by %s", async (lock) => {
        if (lock === "show") showsCache.update((cache) => ({ ...cache, b: { ...cache.b, locked: true } }))
        else vi.mocked(getAccess).mockReturnValue({ global: "read" })
        await dropOnB("start", 0)
        expect(names("b")).toEqual(["B1", "B2"])
        expect(names("a")).toEqual(["A1", "A2"])
        expect(get(undoHistory)).toHaveLength(0)
    })

    it("does not move a locked slide group", async () => {
        showsCache.update((cache) => {
            cache.a.slides.a2.locked = true
            return cache
        })
        await dropOnB("start", 0)
        expect(names("b")).toEqual(["B1", "B2"])
        expect(names("a")).toEqual(["A1", "A2"])
    })

    it("only treats a different show or arrangement as a cross-show drop", () => {
        const drop = (data: any) => ({ id: "slides", data, center: false })
        expect(isCrossShowDrop({ id: "slide", data: [{ index: 0, showId: "a" }] }, drop({ showId: "a", layout: "default" }))).toBe(false)
        expect(isCrossShowDrop({ id: "slide", data: [{ index: 0, showId: "a" }] }, drop({ showId: "b", layout: "default" }))).toBe(true)
        expect(isCrossShowDrop({ id: "slide", data: [{ index: 0, showId: "a" }] }, drop({ showId: "a", layout: "other" }))).toBe(true)
        expect(isCrossShowDrop({ id: "group", data: [{ index: 0, showId: "a" }] }, drop({ showId: "b" }))).toBe(false)
    })
})

describe("copy and paste between shows", () => {
    it("copies from the selected slide's show, not the opened one", () => {
        const copied = copySlides([{ index: 1, showId: "b" }])
        expect(copied.slides.map((a) => a.group)).toEqual(["B2"])
        expect(copied.layouts).toHaveLength(1)
    })

    it("copies slides selected in several shows", () => {
        const copied = copySlides([
            { index: 0, showId: "a" },
            { index: 1, showId: "b" }
        ])
        expect(copied.slides.map((a) => a.group)).toEqual(["A1", "B2"])
    })

    it("pastes after the selected slide of the show it is in", () => {
        const copied = copySlides([{ index: 0, showId: "a" }])
        selected.set({ id: "slide", data: [{ index: 0, showId: "b" }] })
        expect(getSlidePasteTarget({})).toEqual({ showId: "b", layout: "", index: 1 })

        expect(pasteSlides(copied, getSlidePasteTarget({}))).toBe(true)
        expect(names("b")).toEqual(["B1", "A1", "B2"])
        expect(names("a")).toEqual(["A1", "A2"])
        expect(names("c")).toEqual(["C1"])
    })

    it("pastes in the show of the last selected slide when the selection spans shows", () => {
        selected.set({
            id: "slide",
            data: [
                { index: 0, showId: "a" },
                { index: 1, showId: "b" }
            ]
        })
        expect(getSlidePasteTarget({})).toEqual({ showId: "b", layout: "", index: 2 })
    })

    it("pastes after the last clicked slide when nothing is selected, and keeps going after the pasted slides", () => {
        activeShow.set({ id: "b", type: "show" } as any)
        selected.set({ id: null, data: [] })
        rememberClickedSlide("b", "", 0)
        expect(getSlidePasteTarget({})).toEqual({ showId: "b", layout: "", index: 1 })

        pasteSlides(
            copySlides([
                { index: 0, showId: "a" },
                { index: 1, showId: "a" }
            ]),
            getSlidePasteTarget({})
        )
        pasteSlides(copySlides([{ index: 0, showId: "c" }]), getSlidePasteTarget({}))
        expect(names("b")).toEqual(["B1", "A1", "A2", "C1", "B2"])
    })

    it("copies the slide clicked last when nothing is selected", () => {
        activeShow.set({ id: "a", type: "show" } as any)
        rememberClickedSlide("a", "", 1)
        const clicked = getClickedSlideSelection()
        expect(clicked).toEqual({ id: "slide", data: [{ index: 1, showId: "a" }] })
        expect(copySlides(clicked!.data).slides.map((a) => a.group)).toEqual(["A2"])

        activeShow.set({ id: "b", type: "show" } as any)
        expect(getClickedSlideSelection()).toBeNull()
    })

    it("ignores a clicked slide of a show that is not opened", () => {
        activeShow.set({ id: "c", type: "show" } as any)
        selected.set({ id: null, data: [] })
        rememberClickedSlide("b", "", 0)
        expect(getSlidePasteTarget({})).toEqual({})
    })

    it("pastes last in the opened show when no slide is selected", () => {
        pasteSlides(copySlides([{ index: 0, showId: "a" }]), getSlidePasteTarget({}))
        expect(names("c")).toEqual(["C1", "A1"])
    })

    it("duplicates in the show the slide is in", () => {
        const copied = copySlides([{ index: 0, showId: "b" }])
        pasteSlides(copied, getSlidePasteTarget({ index: 0, showId: "b" }), true)
        expect(names("b")).toEqual(["B1", "B1", "B2"])
        expect(names("c")).toEqual(["C1"])
    })

    describe("pasting back into the show it was copied from", () => {
        const layoutIds = (showId: string) => get(showsCache)[showId].layouts.default.slides.map((a) => a.id)

        it("repeats the group in the arrangement instead of making a copy", () => {
            const slidesBefore = JSON.stringify(get(showsCache).a.slides)
            const copied = copySlides([{ index: 0, showId: "a" }])

            expect(pasteSlides(copied, { showId: "a", index: 1 })).toBe(true)
            expect(layoutIds("a")).toEqual(["a1", "a1", "a2"])
            expect(JSON.stringify(get(showsCache).a.slides)).toBe(slidesBefore)
            expect(names("a")).toEqual(["A1", "A1", "A2"])
        })

        it("adds last when no position is given and keeps the layout data of the copied slide", () => {
            showsCache.update((cache) => {
                cache.a.layouts.default.slides[1] = { id: "a2", background: "bg", nextTimer: 5, end: true } as any
                return cache
            })
            pasteSlides(copySlides([{ index: 1, showId: "a" }]), { showId: "a" })

            const layout = get(showsCache).a.layouts.default.slides
            expect(layout.map((a) => a.id)).toEqual(["a1", "a2", "a2"])
            expect(layout[2]).toEqual({ id: "a2", background: "bg", nextTimer: 5 })
        })

        it("is undone in one step", () => {
            vi.stubGlobal("document", { activeElement: null })
            pasteSlides(copySlides([{ index: 0, showId: "a" }]), { showId: "a", index: 2 })
            expect(layoutIds("a")).toEqual(["a1", "a2", "a1"])

            undo()
            expect(layoutIds("a")).toEqual(["a1", "a2"])
            vi.unstubAllGlobals()
        })

        it("still copies when duplicating, pasting into another show, or when the group is gone", () => {
            const copied = copySlides([{ index: 0, showId: "a" }])

            pasteSlides(copied, { showId: "a", index: 1 }, true)
            expect(Object.keys(get(showsCache).a.slides)).toHaveLength(3)

            pasteSlides(copied, { showId: "b" })
            expect(Object.keys(get(showsCache).b.slides)).toHaveLength(3)

            // cut: the slide no longer exists in the show
            showsCache.update((cache) => {
                delete cache.a.slides.a1
                cache.a.layouts.default.slides = cache.a.layouts.default.slides.filter((a) => a.id !== "a1")
                return cache
            })
            pasteSlides(copied, { showId: "a" })
            expect(layoutIds("a")).toHaveLength(3) // a2, the duplicate and the new copy
            expect(layoutIds("a")).not.toContain("a1")
        })

        it("repeats a whole group with its children, never a child alone or a partial group", () => {
            showsCache.update((cache) => {
                cache.p = {
                    ...makeShow("Song P", ["p1", "p1c", "p2"]),
                    layouts: { default: { name: "Default", notes: "", slides: [{ id: "p1", children: { p1c: {} } }, { id: "p2" }] } }
                } as any
                cache.p.slides.p1.children = ["p1c"]
                cache.p.slides.p1c.group = null
                return cache
            })

            // parent + child selected (indexes 0 and 1), pasted after the first group
            pasteSlides(
                copySlides([
                    { index: 0, showId: "p" },
                    { index: 1, showId: "p" }
                ]),
                { showId: "p", index: 2 }
            )
            expect(get(showsCache).p.layouts.default.slides.map((a) => a.id)).toEqual(["p1", "p1", "p2"])
            expect(get(showsCache).p.layouts.default.slides[1].children).toEqual({ p1c: {} })

            // a pasted position inside a group goes after the whole group
            pasteSlides(copySlides([{ index: 4, showId: "p" }]), { showId: "p", index: 1 })
            expect(get(showsCache).p.layouts.default.slides.map((a) => a.id)).toEqual(["p1", "p2", "p1", "p2"])

            // only the child, or only the parent of a group with a child: real copies
            const before = Object.keys(get(showsCache).p.slides).length
            pasteSlides(copySlides([{ index: 1, showId: "p" }]), { showId: "p" })
            expect(Object.keys(get(showsCache).p.slides).length).toBeGreaterThan(before)
        })
    })

    it("does nothing for an empty clipboard or a locked show", () => {
        expect(pasteSlides({ slides: [], layouts: [], media: {} }, { showId: "b" })).toBe(false)
        showsCache.update((cache) => ({ ...cache, b: { ...cache.b, locked: true } }))
        expect(pasteSlides(copySlides([{ index: 0, showId: "a" }]), { showId: "b" })).toBe(false)
        expect(names("b")).toEqual(["B1", "B2"])
    })
})
