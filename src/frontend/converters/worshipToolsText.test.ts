import { describe, expect, it } from "vitest"
import type { WorshipToolsChart } from "../../types/WorshipTools"
import { buildSections, buildSongText, parseInstruction } from "./worshipToolsText"

const lyric = (text: string) => ({ text, kind: "lyric" as const })
const instruction = (text: string) => ({ text, kind: "instruction" as const })

function chart(sections: WorshipToolsChart["sections"], extra: Partial<WorshipToolsChart> = {}): WorshipToolsChart {
    return { title: "Synthetic Lanterns", key: "D", tempoTime: "", attribution: [], sections, complete: true, ...extra }
}

describe("parseInstruction", () => {
    it("reads repeat counts", () => {
        expect(parseInstruction("x2")).toEqual({ type: "repeat", count: 2 })
        expect(parseInstruction("(2x)")).toEqual({ type: "repeat", count: 2 })
        expect(parseInstruction("Repeat 3x")).toEqual({ type: "repeat", count: 3 })
        expect(parseInstruction("(Repeat)")).toEqual({ type: "repeat", count: 2 })
    })

    it("reads repeating another section", () => {
        expect(parseInstruction("Repeat Chorus")).toEqual({ type: "again", target: "Chorus", count: 1 })
        expect(parseInstruction("(Chorus again)")).toEqual({ type: "again", target: "Chorus", count: 1 })
        expect(parseInstruction("Back to Chorus")).toEqual({ type: "again", target: "Chorus", count: 1 })
        expect(parseInstruction("Chorus x2")).toEqual({ type: "again", target: "Chorus", count: 2 })
    })

    it("recognizes instrumental parts", () => {
        expect(parseInstruction("Instrumental")).toEqual({ type: "drop" })
        expect(parseInstruction("[Interlude]")).toEqual({ type: "drop" })
        expect(parseInstruction("Guitar solo")).toEqual({ type: "drop" })
    })

    it("keeps unknown directions as notes", () => {
        expect(parseInstruction("Softly, build slowly").type).toBe("note")
        expect(parseInstruction("Chorus").type).toBe("note")
    })
})

describe("buildSections", () => {
    it("repeats the section a direction is in", () => {
        const { sections } = buildSections(chart([{ heading: "Chorus", lines: [lyric("Line one"), lyric("Line two"), instruction("x2")] }]))
        expect(sections).toEqual([{ heading: "Chorus", lines: ["Line one", "Line two"], repeat: 2 }])
    })

    it("reads a repeat count in the heading", () => {
        const { sections } = buildSections(chart([{ heading: "Chorus (2x)", lines: [lyric("Line one")] }]))
        expect(sections[0]).toEqual({ heading: "Chorus", lines: ["Line one"], repeat: 2 })
    })

    it("adds the chorus again after a repeat chorus direction", () => {
        const { sections } = buildSections(
            chart([
                { heading: "Verse 1", lines: [lyric("Verse words")] },
                { heading: "Chorus", lines: [lyric("Chorus words")] },
                { heading: "Verse 2", lines: [lyric("More verse"), instruction("Repeat Chorus")] }
            ])
        )
        expect(sections.map((a) => a.heading)).toEqual(["Verse 1", "Chorus", "Verse 2", "Chorus"])
        expect(sections[3].lines).toEqual(["Chorus words"])
    })

    it("removes instrumental sections", () => {
        const { sections, notes } = buildSections(
            chart([
                { heading: "Verse 1", lines: [lyric("Words")] },
                { heading: "Instrumental", lines: [] },
                { heading: "Interlude", lines: [instruction("Instrumental")] },
                { heading: "Bridge", lines: [lyric("Bridge words")] }
            ])
        )
        expect(sections.map((a) => a.heading)).toEqual(["Verse 1", "Bridge"])
        expect(notes).toEqual([])
    })

    it("puts other directions in the notes", () => {
        const { sections, notes } = buildSections(chart([{ heading: "Verse 1", lines: [lyric("Words"), instruction("Softly, band drops out")] }]))
        expect(sections[0].lines).toEqual(["Words"])
        expect(notes).toEqual(["Verse 1: Softly, band drops out"])
    })

    it("only treats bracketed lyric lines as directions when they clearly are", () => {
        const { sections } = buildSections(chart([{ heading: "Verse", lines: [lyric("(Oh, oh, oh)"), lyric("Break the chains"), lyric("(x2)")] }]))
        expect(sections[0].lines).toEqual(["(Oh, oh, oh)", "Break the chains"])
        expect(sections[0].repeat).toBe(2)
    })

    it("notes a repeat of a section that does not exist", () => {
        const { sections, notes } = buildSections(chart([{ heading: "Verse 1", lines: [lyric("Words"), instruction("Repeat Bridge")] }]))
        expect(sections).toHaveLength(1)
        expect(notes).toEqual(["Verse 1: repeat Bridge"])
    })
})

describe("charts with variants, repeats and cues", () => {
    it("drops the variant letter so the group (and its colour) is found", () => {
        const { sections } = buildSections(
            chart([
                { heading: "CHORUS 1A", lines: [lyric("First time words")] },
                { heading: "CHORUS 1B", lines: [lyric("Last time words")] },
                { heading: "BRIDGE 2", lines: [lyric("Bridge words")] }
            ])
        )
        expect(sections.map((a) => a.heading)).toEqual(["Chorus 1", "Chorus 1", "Bridge 2"])
        expect(sections.map((a) => a.lines[0])).toEqual(["First time words", "Last time words", "Bridge words"])
    })

    it("treats a section without words that says repeat as the earlier section again", () => {
        const { sections, notes } = buildSections(
            chart([
                { heading: "VERSE 1", lines: [lyric("Verse words")] },
                { heading: "CHORUS 1", lines: [lyric("Chorus words")] },
                { heading: "INTERLUDE", lines: [] },
                { heading: "VERSE 1 REPEAT", lines: [] },
                { heading: "CHORUS 1 REPEAT", lines: [] }
            ])
        )
        expect(sections.map((a) => a.heading)).toEqual(["Verse 1", "Chorus 1", "Verse 1", "Chorus 1"])
        expect(sections[2].lines).toEqual(["Verse words"])
        expect(notes).toEqual([])
    })

    it("reads a repeat count in an upper case heading", () => {
        const { sections } = buildSections(chart([{ heading: "BRIDGE X4", lines: [lyric("Bridge words")] }]))
        expect(sections[0]).toEqual({ heading: "Bridge", lines: ["Bridge words"], repeat: 4 })
    })

    it("keeps only the first ending when the endings repeat the same words", () => {
        const { sections, notes } = buildSections(
            chart([
                {
                    heading: "BRIDGE 1B",
                    lines: [lyric("Come on"), lyric("Lift up"), instruction("(1.)"), lyric("Get up and praise"), instruction("(To Bridge 1b)"), instruction("(2.)"), lyric("Get up and praise"), instruction("(To Instr.2)")]
                }
            ])
        )
        expect(sections[0].lines).toEqual(["Come on", "Lift up", "Get up and praise"])
        expect(notes).toEqual([])
    })

    it("keeps a second ending that has different words", () => {
        const { sections } = buildSections(chart([{ heading: "Bridge", lines: [lyric("Come on"), instruction("(1.)"), lyric("Go back"), instruction("(2.)"), lyric("Go on to the end")] }]))
        expect(sections[0].lines).toEqual(["Come on", "Go back", "Go on to the end"])
    })

    it("removes jump cues from the lyrics", () => {
        const { sections, notes } = buildSections(chart([{ heading: "Chorus 1A", lines: [lyric("Sing it aloud (To Turnaround)"), lyric("Last words (Last x)"), instruction("(To Bridge 1b)")] }]))
        expect(sections[0].lines).toEqual(["Sing it aloud", "Last words"])
        expect(notes).toEqual([])
    })

    it("does not show chord only sections", () => {
        const { sections, notes } = buildSections(
            chart([
                { heading: "INTRO", lines: [] },
                { heading: "TURNAROUND", lines: [] },
                { heading: "INSTRUMENTAL 1", lines: [] },
                { heading: "VERSE 1", lines: [lyric("Words")] }
            ])
        )
        expect(sections.map((a) => a.heading)).toEqual(["Verse 1"])
        expect(notes).toEqual([])
    })
})

describe("buildSongText", () => {
    it("builds the text for convertText with headers and repeat markers", () => {
        const song = buildSongText(
            chart([
                { heading: "Verse 1", lines: [lyric("First line"), lyric("Second line")] },
                { heading: "Chorus", lines: [lyric("Sing it"), instruction("2x")] }
            ])
        )
        expect(song?.text).toBe("[Verse 1]\nFirst line\nSecond line\n\n[Chorus]\nSing it\nx2")
    })

    it("has no heading line for a section without a heading", () => {
        const song = buildSongText(chart([{ heading: "", lines: [lyric("Only words")] }]))
        expect(song?.text).toBe("Only words")
    })

    it("returns nothing when no lyrics are left", () => {
        expect(buildSongText(chart([{ heading: "Instrumental", lines: [] }]))).toBeNull()
    })

    it("reads the metadata of a SongSelect footer", () => {
        const song = buildSongText(
            chart([{ heading: "Verse", lines: [lyric("Words")] }], {
                attribution: ["Invented Writer | Another Writer | Third Writer", "(based on the recording by Invented Band | original key: B)", "CCLI Song # 7158417", "© 2019 Invented Worship Publishing | Invented Music | Another Publishing", "For use solely with the SongSelect® Terms of Use. All rights reserved. www.ccli.com", "Note: Reproduction of this sheet music requires a CCLI Music Reproduction License. Please report all copies.", "CCLI License # 433932"]
            })
        )
        expect(song?.meta).toEqual({
            title: "Synthetic Lanterns",
            key: "D",
            author: "Invented Writer, Another Writer, Third Writer",
            copyright: "© 2019 Invented Worship Publishing, Invented Music, Another Publishing",
            CCLI: "7158417"
        })
    })

    it("reads the metadata from the attribution", () => {
        const song = buildSongText(
            chart([{ heading: "Verse", lines: [lyric("Words")] }], {
                attribution: ["Invented Author, Another Author", "© 2020 Invented Publishing CCLI Song # 1234567", "For use solely with the SongSelect Terms of Use. www.ccli.com"]
            })
        )
        expect(song?.meta).toEqual({ title: "Synthetic Lanterns", key: "D", author: "Invented Author, Another Author", copyright: "© 2020 Invented Publishing", CCLI: "1234567" })
    })
})
