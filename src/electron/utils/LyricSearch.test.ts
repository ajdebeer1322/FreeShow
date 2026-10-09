import { describe, expect, it, vi } from "vitest"

vi.mock("electron", () => ({ net: {} }))

import { LyricSearch } from "./LyricSearch"

const clean = (lyrics: string): string => (LyricSearch as any).cleanGeniusLyrics(lyrics)

describe("cleanGeniusLyrics", () => {
    it("removes the page header glued to the first section", () => {
        const lyrics = "62 ContributorsTranslationsItalianoO Holy Night Lyrics[Verse 1]\nO Holy night! The stars are brightly shining\n\n[Verse 2]\nLed by the light of Faith serenely beaming"
        expect(clean(lyrics)).toBe("[Verse 1]\nO Holy night! The stars are brightly shining\n\n[Verse 2]\nLed by the light of Faith serenely beaming")
    })

    it("removes the page header and the song description", () => {
        const lyrics = '12 ContributorsAmazing Grace Lyrics"Amazing Grace" is a hymn published in 1779...Read More [Verse 1]\nAmazing grace, how sweet the sound'
        expect(clean(lyrics)).toBe("[Verse 1]\nAmazing grace, how sweet the sound")
    })

    it("leaves lyrics without a page header alone", () => {
        const lyrics = "[Verse 1]\nAmazing grace, how sweet the sound\n\n[Chorus]\nThe word Lyrics[ in a line later on"
        expect(clean(lyrics)).toBe(lyrics)
    })

    it("leaves lyrics without any headers alone", () => {
        expect(clean("Amazing grace\nHow sweet the sound")).toBe("Amazing grace\nHow sweet the sound")
    })
})
