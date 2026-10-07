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

export type BuildOptions = {
    // lines longer than this many characters are broken in two (0 = never)
    maxLineLength?: number
}

export const DEFAULT_MAX_LINE_LENGTH = 40

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
// sections that are only chords (no words), they are not shown
const DROP_HEADING = /^(?:intro|interlude|instr\.?(?:umental)?|turnaround|outro|ending|solo|vamp|tacet|break|musical break)\b/i
// jump instructions of the chart ("To Bridge 1b", "Last x", "D.S.") are not lyrics and not worth a note
const NAVIGATION = /^(?:to\b|go to\b|d\.?\s?[cs]\b|fine\b|last x\b|\d+(?:st|nd|rd|th)? x\b|(?:1st|2nd|3rd|last|first|second) time\b)/i
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

type Instruction = { type: "drop" } | { type: "skip" } | { type: "ending"; n: number } | { type: "repeat"; count: number } | { type: "again"; target: string; count: number } | { type: "note" }

export function parseInstruction(raw: string): Instruction {
    const text = stripWrap(raw)
    if (!text) return { type: "note" }

    if (DROP_WORDS.test(text)) return { type: "drop" }
    if (NAVIGATION.test(text)) return { type: "skip" }

    // first / second ending "(1.)"
    const ending = /^(\d{1,2})\.?$/.exec(text)
    if (ending) return { type: "ending", n: parseInt(ending[1]) }

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

// text fixes for the slides: straight quotes (the curly apostrophe leaves a gap in many fonts),
// and the " - " the charts print between the parts of a word that has a chord in the middle ("a - gain")
export function normalizeLyric(text: string): string {
    return text
        .replace(/[\u2018\u2019\u201B\u02BC]/g, "'")
        .replace(/[\u201C\u201D]/g, '"')
        .replace(/(\p{L})'\s+(s|t|d|m|ll|re|ve)\b/giu, "$1'$2")
        .replace(/(\p{L})\s+-\s+(?=\p{Ll})/gu, "$1")
        .replace(/\s+/g, " ")
        .trim()
}

// breaks a long line at the best place near the middle, a comma or similar is preferred
export function splitLongLine(text: string, max: number): string[] {
    if (!max || max < 12 || text.length <= max) return [text]

    const minPart = Math.min(8, Math.floor(max / 3))
    const middle = text.length / 2
    let best = -1
    let bestScore = Infinity

    for (let i = 1; i < text.length - 1; i++) {
        if (text[i] !== " ") continue

        const left = text.slice(0, i).trimEnd()
        const right = text.slice(i + 1).trimStart()
        if (left.length < minPart || right.length < minPart) continue

        const punctuation = /[,;:!?.]$/.test(left)
        const score = Math.abs(left.length - middle) - (punctuation ? text.length * 0.15 : 0)
        if (score < bestScore) {
            bestScore = score
            best = i
        }
    }
    if (best < 0) return [text]

    return [...splitLongLine(text.slice(0, best).trimEnd(), max), ...splitLongLine(text.slice(best + 1).trimStart(), max)]
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

function titleCase(text: string): string {
    return text.toLowerCase().replace(/(^|[\s-])(\p{L})/gu, (_m, space, letter) => space + letter.toUpperCase())
}

// "CHORUS 1A" -> "Chorus 1": the variant letter keeps Free Show from finding the group (and its colour)
function cleanHeading(raw: string): { heading: string; repeat: number; again: string } {
    let heading = raw.replace(/[[\]]/g, "").replace(/\s+/g, " ").trim()
    let repeat = 1

    const count = countOf(heading)
    if (count) {
        repeat = count
        // "Chorus (2x)" and "Chorus x2"
        heading = heading.replace(/[([]\s*(?:x\s*\d{1,2}|\d{1,2}\s*(?:x|×|times)|twice)\s*[)\]]/i, " ").replace(COUNT_TOKEN, " ")
    }

    // "Verse 1 Repeat" points to a section that was already sung
    let again = ""
    const repeated = /^(.*?)[\s-–:]*\brepeat(?:ed)?\b$/i.exec(heading.trim())
    if (repeated && repeated[1].trim()) {
        again = repeated[1].trim()
        heading = again
    }

    heading = heading
        .replace(/\(\s*\)/g, "")
        .replace(/[\s-–—:]+$/g, "")
        .replace(/\s+/g, " ")
        .trim()

    if (heading && heading === heading.toUpperCase()) heading = titleCase(heading)
    heading = heading.replace(/(\d+)\s*[A-Za-z]$/, "$1")
    if (again) again = heading
    return { heading, repeat, again }
}

// a trailing jump cue on a lyric line: "words (To Turnaround)", "words (Last x)"
const TRAILING_CUE = /\s*[([]\s*(?:to\b[^)\]]*|last x|\d+(?:st|nd|rd|th)? x|(?:1st|2nd|3rd|last) time)\s*[)\]]\s*$/i
const LEADING_ENDING = /^[([]\s*(\d{1,2})\.?\s*[)\]]\s*(.*)$/

export function buildSections(chart: WorshipToolsChart): { sections: OutSection[]; notes: string[] } {
    const sections: OutSection[] = []
    const notes: string[] = []

    chart.sections.forEach((source) => {
        const { heading, repeat, again } = cleanHeading(source.heading)
        const section: OutSection = { heading, lines: [], repeat }
        const copies: { target: string; count: number }[] = []
        let drop = false

        // first / second endings repeat the same words, only the first one is kept
        let ending = 0
        let endingIndex = 0
        const firstEnding: string[] = []

        const addLyric = (raw: string) => {
            const text = normalizeLyric(raw.replace(TRAILING_CUE, ""))
            if (!text) return
            if (ending === 1) firstEnding.push(text)
            if (ending > 1) {
                const same = firstEnding[endingIndex]
                endingIndex++
                if (same !== undefined && same.toLowerCase() === text.toLowerCase()) return
            }
            section.lines.push(text)
        }

        source.lines.forEach((line) => {
            let text = line.text
            // "(2.) Words" starts an ending on the same line, a lone "(2.)" is handled as a direction below
            const lead = LEADING_ENDING.exec(text)?.[2] ? LEADING_ENDING.exec(text) : null
            if (lead) {
                ending = parseInt(lead[1])
                endingIndex = 0
                text = lead[2]
            }

            const direction = !lead && (line.kind === "instruction" || looksLikeDirection(text))
            if (!direction) {
                addLyric(text)
                return
            }

            const instruction = parseInstruction(text)
            if (instruction.type === "ending") {
                ending = instruction.n
                endingIndex = 0
            } else if (instruction.type === "repeat") section.repeat = instruction.count
            else if (instruction.type === "again") copies.push({ target: instruction.target, count: instruction.count })
            else if (instruction.type === "drop") drop = true
            else if (instruction.type === "skip") return
            else notes.push(heading ? `${heading}: ${text}` : text)
        })

        if (section.lines.length) sections.push(section)
        // "Verse 1 Repeat": the section itself is the repeat
        else if (again) copies.unshift({ target: again, count: 1 })
        // sections with only chords (intro, interlude, turnaround...) are not shown
        else if (heading && !drop && !DROP_HEADING.test(heading) && !DROP_WORDS.test(heading) && !copies.length) notes.push(`${heading}: (no lyrics)`)

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

        // pipes separate the names in the chart
        const clean = line.replace(/\s*\|\s*/g, ", ").trim()
        if (/ccli/i.test(line) && !/[©]|\(c\)|copyright/i.test(line)) return
        if (/[©]|\(c\)|copyright/i.test(line)) {
            copyright.push(clean.replace(/\s*CCLI\s*(?:Song)?\s*#\s*\d+/i, "").trim())
            return
        }
        if (/terms of use|reproduction|all rights|www\.|^\(?\s*based on/i.test(line)) return
        authors.push(clean)
    })
    if (authors.length) meta.author = authors.join(", ")
    if (copyright.length) meta.copyright = copyright.join(" ")

    // drop empty values
    Object.keys(meta).forEach((key) => {
        if (!meta[key]) delete meta[key]
    })
    return meta
}

export function buildSongText(chart: WorshipToolsChart, options: BuildOptions = {}): WorshipToolsSong | null {
    const { sections, notes } = buildSections(chart)
    if (!sections.length) return null

    const blocks = sections.map((section) => {
        const lines: string[] = []
        if (section.heading) lines.push(`[${section.heading}]`)
        section.lines.forEach((line) => lines.push(...splitLongLine(line, options.maxLineLength || 0)))
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
