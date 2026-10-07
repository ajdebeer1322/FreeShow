import { describe, expect, it } from "vitest"
import { boxToMargins, fitBoxToRatio, getFittedSize, marginsToBox, moveBox, resizeBox } from "./cropMath"

const image = { width: 1000, height: 500 }

describe("crop math", () => {
    it("converts between saved margins and a box", () => {
        const box = marginsToBox({ top: 10, right: 100, bottom: 20, left: 50 }, image)
        expect(box).toEqual({ x0: 50, y0: 10, x1: 900, y1: 480 })
        expect(boxToMargins(box, image)).toEqual({ top: 10, right: 100, bottom: 20, left: 50 })
    })

    it("shows the whole image for an unusable crop", () => {
        expect(marginsToBox({ left: 600, right: 600 }, image)).toEqual({ x0: 0, y0: 0, x1: 1000, y1: 500 })
    })

    it("keeps a moved box inside the image", () => {
        const moved = moveBox({ x0: 100, y0: 100, x1: 300, y1: 200 }, 5000, -5000, image)
        expect(moved).toEqual({ x0: 800, y0: 0, x1: 1000, y1: 100 })
    })

    it("resizes freely from a corner and stops at the edges", () => {
        const start = { x0: 100, y0: 100, x1: 300, y1: 300 }
        expect(resizeBox(start, "se", { x: 500, y: 400 }, image, null)).toEqual({ x0: 100, y0: 100, x1: 500, y1: 400 })
        expect(resizeBox(start, "se", { x: 5000, y: 5000 }, image, null)).toEqual({ x0: 100, y0: 100, x1: 1000, y1: 500 })
        expect(resizeBox(start, "nw", { x: -50, y: -50 }, image, null)).toEqual({ x0: 0, y0: 0, x1: 300, y1: 300 })
    })

    it("keeps the ratio when resizing a corner of a locked box", () => {
        const start = { x0: 100, y0: 100, x1: 260, y1: 190 } // 16:9
        const ratio = 16 / 9
        const resized = resizeBox(start, "se", { x: 420, y: 150 }, image, ratio)
        expect(resized.x0).toBe(100)
        expect(resized.y0).toBe(100)
        expect((resized.x1 - resized.x0) / (resized.y1 - resized.y0)).toBeCloseTo(ratio, 5)
        expect(resized.x1).toBeCloseTo(420, 5)
    })

    it("never lets a locked box leave the image", () => {
        const ratio = 16 / 9
        const resized = resizeBox({ x0: 100, y0: 100, x1: 260, y1: 190 }, "se", { x: 9000, y: 9000 }, image, ratio)
        expect(resized.x1).toBeLessThanOrEqual(1000)
        expect(resized.y1).toBeLessThanOrEqual(500)
        expect((resized.x1 - resized.x0) / (resized.y1 - resized.y0)).toBeCloseTo(ratio, 5)
    })

    it("ignores edge handles while the ratio is locked", () => {
        const start = { x0: 100, y0: 100, x1: 260, y1: 190 }
        expect(resizeBox(start, "e", { x: 400, y: 150 }, image, 16 / 9)).toEqual(start)
    })

    it("fits a ratio box inside another box, centered", () => {
        const box = fitBoxToRatio({ x0: 0, y0: 0, x1: 1000, y1: 500 }, 1, image)
        expect(box).toEqual({ x0: 250, y0: 0, x1: 750, y1: 500 })
    })

    it("works out how content is shown for each fit", () => {
        const frame = { width: 1920, height: 1080 }
        const content = { width: 1000, height: 1000 }
        expect(getFittedSize(frame, content, "contain")).toEqual({ width: 1080, height: 1080 })
        expect(getFittedSize(frame, content, "cover")).toEqual({ width: 1920, height: 1920 })
        expect(getFittedSize(frame, content, "fill")).toEqual({ width: 1920, height: 1080 })
    })
})
