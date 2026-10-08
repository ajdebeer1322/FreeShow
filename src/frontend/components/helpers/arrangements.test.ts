import { describe, expect, it } from "vitest"
import type { Layout, Slide } from "../../../types/Show"
import { createBlankSlide, findBlankSlideId, findMasterId, getGroupIds, getImageLabels, getMasterSlides, masterIsUpToDate } from "./arrangements"

const slide = (group: string | null, children?: string[]): Slide => ({ group, color: null, settings: {}, notes: "", items: [], children }) as any

describe("arrangements", () => {
    const slides = { v1: slide("Verse", ["v1b"]), v1b: slide(null), c: slide("Chorus"), x: slide("."), b: slide("Bridge") }
    const layouts: { [id: string]: Layout } = {
        a: { name: "Default", notes: "", slides: [{ id: "v1" }, { id: "c" }, { id: "c" }, { id: "x" }] }
    }

    it("lists every group once, without children or the hidden group", () => {
        expect(getGroupIds(slides)).toEqual(["v1", "c", "b"])
    })

    it("keeps the order when an arrangement changes", () => {
        const before = getGroupIds(slides)
        layouts.a.slides = [{ id: "b" }]
        expect(getGroupIds(slides)).toEqual(before)
    })

    it("does not list blank slides as groups", () => {
        const withBlank = { ...slides, blank: createBlankSlide("Blank") }
        expect(getGroupIds(withBlank)).toEqual(["v1", "c", "b"])
        expect(findBlankSlideId(withBlank)).toBe("blank")
        expect(findBlankSlideId(slides)).toBe("")
    })

    it("names image slides Image, or Image 1, Image 2 when there are several", () => {
        const imageSlides = { ...slides, i1: slide("hill, tree.jpg".replace(".jpg", "")), i2: slide("sky") }
        const media = { a: { name: "hill, tree.jpg", type: "image" }, b: { name: "sky.png", type: "image" }, c: { name: "Chorus.mp4", type: "video" } }
        expect(getImageLabels(imageSlides, media)).toEqual({ i1: "Image 1", i2: "Image 2" })
        expect(getImageLabels(imageSlides, { a: media.a })).toEqual({ i1: "Image" })
    })

    it("builds a master with one of each group", () => {
        expect(getMasterSlides(slides, layouts)).toEqual([{ id: "v1" }, { id: "c" }, { id: "b" }])
    })

    it("only adds missing groups to an existing master", () => {
        const master = [{ id: "c" }, { id: "v1" }]
        expect(getMasterSlides(slides, layouts, master)).toEqual([{ id: "c" }, { id: "v1" }, { id: "b" }])
    })

    it("detects an out of date master", () => {
        const withMaster = { ...layouts, m: { name: "Master", master: true, notes: "", slides: [{ id: "v1" }] } }
        expect(findMasterId(withMaster)).toBe("m")
        expect(masterIsUpToDate(slides, withMaster, "m")).toBe(false)
        withMaster.m.slides = getMasterSlides(slides, withMaster, withMaster.m.slides)
        expect(masterIsUpToDate(slides, withMaster, "m")).toBe(true)
    })
})
