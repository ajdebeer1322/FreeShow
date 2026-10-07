// Turns the lyrics read from WorshipTools into the text format of "Quick lyrics" (see txt.ts convertText).
// Pure helpers without any store access.
//
//   [Verse 1]
//   line
//   line
//
//   [Chorus]
//   line
//   x2            <- the section is repeated
//
// Directions in the chart are interpreted:
// - "x2", "2x", "(repeat 2x)" repeat the section they are in
// - "Repeat chorus" adds that section again after the current one
// - "Instrumental", "Interlude", "Solo" ... are removed
// - anything else is kept out of the slides and returned as notes

import type { WorshipToolsChart } from "../../types/WorshipTools"

const MAX_REPEAT = 9

export type WorshipToolsSong = {
    name: string
    // text for convertText
    text: string
    notes: string
    meta: { [key: string]: string }
}

type OutSection = { heading: string; lines: string[]; repeat: number }

const SECTION_WORDS = "pre[\\s-]?chorus|chorus|refrain|verse(?:\\s*\\d+)?|bridge(?:\\s*\\d+)?|tag|ending|outro|intro|interlude|coda"
const DROP_WORDS = /^(?:instrumental|instr\.?|interlude|solo|guitar solo|keys? solo|piano solo|turnaround|vamp|tacet|no vocals?|musical break|instrumental break)\b/i
const COUNT_TOKEN = /(?:^|[\s(\[,-])(?:x\s*(\d{1,2})|(\d{1,2})\s*(?:x|×|times)|(twice))(?=$|[\s)\],.])/i

function countOf(text: string): number | null {
    const match = COUNT_TOKEN.exec(text)
    if (!match) return null
    if (match[3]) return 2
    const count = parseInt(match[1] || match[2])
    return count > 0 ? Math.min(count, MAX_REPEAT) : null
}

function stripWrap(text: string): string {
    return text
        .replace(/^[\s([{\-–—]+/, "")
        .replace(/[\s)\]}.:;,]+$/, "")
        .replace(/\s+/g, " ")
        .trim()
}

type Instruction = { type: "drop" } | { type: "repeat"; count: number } | { type: "again"; target: string; count: number } | { type: "note" }

export function parseInstruction(raw: string): Instruction {
    const text = stripWrap(raw)
    if (!text) return { type: "note" }

    if (DROP_WORDS.test(text)) return { type: "drop" }

    const count = countOf(text)

    // "x2", "2x", "repeat 2x", "(x2)"
    const rest = text
        .replace(COUNT_TOKEN, " ")
        .replace(/\b(repeat|again|play|sing|times|total)\b/gi, " ")
        .replace(/[\s()[\],.-]+/g, " ")
        .trim()
    if (!rest && (count || /repeat|again/i.test(text))) return { type: "repeat", count: count ?? 2 }

    // "Repeat chorus", "Chorus again", "Back to chorus", "Chorus x2"
    const targetMatch = new RegExp(`^(?:(?:repeat|again|back to|go to|return to|sing|play)\\s+)?(?:the\\s+)?(?:last\\s+)?(${SECTION_WORDS})(?:\\s+(?:again|x\\s*\\d{1,2}|\\d{1,2}\\s*(?:x|×|times)|twice))*$`, "i").exec(text)
    if (targetMatch && (/^(repeat|again|back to|go to|return to|sing|play)/i.test(text) || /again$/i.test(text) || count)) {
        return { type: "again", target: targetMatch[1], count: count ?? 1 }
    }

    return { type: "note" }
}

function normalizeHeading(text: string): string {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "")
}

// a copy of the latest section that the instruction points to ("chorus" finds "Chorus" or "Chorus 2")
function findTarget(sections: OutSection[], target: string): OutSection | null {
    const wanted = normalizeHeading(target)
    for (let i = sections.length - 1; i >= 0; i--) {
        const heading = normalizeHeading(sections[i].heading)
        if (heading === wanted || heading.startsWith(wanted)) return sections[i]
    }
    return null
}

// instruction looking lines inside the lyrics are only treated as directions when they are clearly one
function looksLikeDirection(text: string): boolean {
    const trimmed = text.trim()
    if (/^[([].*[)\]]$/.test(trimmed)) return parseInstruction(trimmed).type !== "note"
    return /^(?:x\s*\d{1,2}|\d{1,2}\s*[x×])$/i.test(trimmed)
}

function cleanHeading(raw: string): { heading: string; repeat: number } {
    let heading = raw.replace(/[[\]]/g, "").trim()
    let repeat = 1

    const count = countOf(heading)
    if (count) {
        repeat = count
        // "Chorus (2x)" and "Chorus x2"
        heading = heading.replace(/[([]\s*(?:x\s*\d{1,2}|\d{1,2}\s*(?:x|×|times)|twice)\s*[)\]]/i, " ").replace(COUNT_TOKEN, " ")
    }
    heading = heading
        .replace(/\(\s*\)/g, "")
        .replace(/[\s-–—:]+$/g, "")
        .replace(/\s+/g, " ")
        .trim()
    return { heading, repeat }
}

export function buildSections(chart: WorshipToolsChart): { sections: OutSection[]; notes: string[] } {
    const sections: OutSection[] = []
    const notes: string[] = []

    chart.sections.forEach((source) => {
        const { heading, repeat } = cleanHeading(source.heading)
        const section: OutSection = { heading, lines: [], repeat }
        const copies: { target: string; count: number }[] = []
        let drop = false

        source.lines.forEach((line) => {
            const direction = line.kind === "instruction" || looksLikeDirection(line.text)
            if (!direction) {
                section.lines.push(line.text)
                return
            }

            const instruction = parseInstruction(line.text)
            if (instruction.type === "repeat") section.repeat = instruction.count
            else if (instruction.type === "again") copies.push({ target: instruction.target, count: instruction.count })
            else if (instruction.type === "drop") drop = true
            else notes.push(heading ? `${heading}: ${line.text}` : line.text)
        })

        // sections like "Instrumental" or "Interlude" without words are not shown
        const emptyDrop = !section.lines.length
        if (emptyDrop && (drop || DROP_WORDS.test(heading))) return

        if (section.lines.length) sections.push(section)
        else if (heading && !copies.length) notes.push(`${heading}: (no lyrics)`)

        copies.forEach(({ target, count }) => {
            const found = findTarget(sections, target)
            if (!found) {
                notes.push(`${heading || "Section"}: repeat ${target}`)
                return
            }
            sections.push({ heading: found.heading, lines: [...found.lines], repeat: Math.min(count, MAX_REPEAT) })
        })
    })

    return { sections, notes }
}

function metadata(chart: WorshipToolsChart): { [key: string]: string } {
    const meta: { [key: string]: string } = { title: chart.title }
    if (chart.key) meta.key = chart.key

    const authors: string[] = []
    const copyright: string[] = []
    chart.attribution.forEach((line) => {
        const ccli = /CCLI\s*(?:Song)?\s*#\s*(\d+)/i.exec(line)
        if (ccli && !meta.CCLI) meta.CCLI = ccli[1]

        if (/ccli/i.test(line) && !/[©]|\(c\)|copyright/i.test(line)) return
        if (/[©]|\(c\)|copyright/i.test(line)) {
            copyright.push(line.replace(/\s*CCLI\s*(?:Song)?\s*#\s*\d+/i, "").trim())
            return
        }
        authors.push(line)
    })
    if (authors.length) meta.author = authors.join(", ")
    if (copyright.length) meta.copyright = copyright.join(" ")

    // drop empty values
    Object.keys(meta).forEach((key) => {
        if (!meta[key]) delete meta[key]
    })
    return meta
}

export function buildSongText(chart: WorshipToolsChart): WorshipToolsSong | null {
    const { sections, notes } = buildSections(chart)
    if (!sections.length) return null

    const blocks = sections.map((section) => {
        const lines: string[] = []
        if (section.heading) lines.push(`[${section.heading}]`)
        lines.push(...section.lines)
        if (section.repeat > 1) lines.push(`x${section.repeat}`)
        return lines.join("\n")
    })

    return {
        name: chart.title,
        text: blocks.join("\n\n"),
        notes: notes.join("\n"),
        meta: metadata(chart)
    }
}
