import { describe, expect, it } from "vitest"
import { countBackgroundUses, findMediaKeyByPath } from "./mediaInspectorLogic"

const shows = {
    a: {
        media: { m1: { path: "/media/Sunrise.jpg" }, m2: { path: "/media/Sunrise 2.jpg" } },
        layouts: {
            l1: { slides: [{ background: "m1" }, { background: "m2" }, { children: { c1: { background: "m1" } } }, {}] }
        }
    },
    b: {
        media: { x: { path: "/media/Sunrise.jpg" } },
        layouts: { l1: { slides: [{ background: "x" }] } }
    }
}

describe("media inspector helpers", () => {
    it("counts the slides that use a file, including child slides and other shows", () => {
        expect(countBackgroundUses(shows, "/media/Sunrise.jpg")).toBe(3)
        expect(countBackgroundUses(shows, "/media/Sunrise 2.jpg")).toBe(1)
    })

    it("does not count files that are not used on a slide", () => {
        expect(countBackgroundUses(shows, "/media/Other.jpg")).toBe(0)
        expect(countBackgroundUses(shows, "")).toBe(0)
    })

    it("finds the media id a show uses for a file", () => {
        expect(findMediaKeyByPath(shows.a.media, "/media/Sunrise 2.jpg")).toBe("m2")
        expect(findMediaKeyByPath(shows.a.media, "/media/Missing.jpg")).toBeNull()
    })
})
