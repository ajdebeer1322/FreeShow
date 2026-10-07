import { describe, expect, it } from "vitest"
import { getNextCopyPath } from "./copyName"

describe("getNextCopyPath", () => {
    it("adds the number 2 to the first copy", () => {
        expect(getNextCopyPath("/media/Sunrise.jpg", () => false)).toBe("/media/Sunrise 2.jpg")
    })

    it("skips names that are already taken", () => {
        const taken = new Set(["/media/Sunrise 2.jpg", "/media/Sunrise 3.jpg"])
        expect(getNextCopyPath("/media/Sunrise.jpg", (file) => taken.has(file))).toBe("/media/Sunrise 4.jpg")
    })

    it("continues the number when duplicating a copy", () => {
        const taken = new Set(["/media/Sunrise 2.jpg"])
        expect(getNextCopyPath("/media/Sunrise 2.jpg", (file) => taken.has(file))).toBe("/media/Sunrise 3.jpg")
    })

    it("keeps names that only end in a number as part of the name", () => {
        expect(getNextCopyPath("/media/2024.mp4", () => false)).toBe("/media/2024 2.mp4")
    })
})
