// Reads songs from the rendered WorshipTools Music Stand page (DOM only).
// Runs inside the WorshipTools view preload, but is plain DOM code so it can be tested in any browser.
// Only the lyrics and section tags are collected. Chords are skipped on purpose.

import type { WorshipToolsChart, WorshipToolsLine, WorshipToolsSection, WorshipToolsSong } from "../../types/WorshipTools"

export const MENU_SONG_SELECTOR = "ion-menu ion-item.song"

export function cleanText(text: string | null | undefined): string {
    return (text || "").replace(/[\s ]+/g, " ").trim()
}

// compare titles loosely (case, punctuation and spacing don't matter)
export function normalizeTitle(text: string): string {
    return cleanText(text)
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^\p{L}\p{N}]+/gu, "")
}

function normalizeKey(key: string | null | undefined): string {
    return (key || "").replace(/\s+/g, "").toLowerCase()
}

// ---------- service menu ----------

export function readServiceSongs(doc: Document): WorshipToolsSong[] {
    let items: Element[] = []
    try {
        items = Array.from(doc.querySelectorAll(MENU_SONG_SELECTOR))
    } catch {
        return []
    }

    const songs: WorshipToolsSong[] = []
    items.forEach((item, index) => {
        const label = item.querySelector("ion-label") || item
        const keyEl = label.querySelector("strong")
        const keyMatch = /^\[([^\]]+)\]$/.exec(cleanText(keyEl?.textContent))

        const copy = label.cloneNode(true) as Element
        copy.querySelectorAll("strong").forEach((el) => el.remove())
        const title = cleanText(copy.textContent)
        if (!title) return

        songs.push({ index, title, key: keyMatch ? keyMatch[1].trim() : null, active: item.classList.contains("selected") })
    })
    return songs
}

// ---------- chart discovery ----------

export type ChartRef = {
    docs: Document[]
    frames: (Element | null)[]
    title: string
    key: string | null
    keyEl: Element | null
    // more than one song in a single document, can't be split reliably
    ambiguous: boolean
}

function accessibleDocuments(root: Document): { doc: Document; frame: Element | null }[] {
    const docs: { doc: Document; frame: Element | null }[] = [{ doc: root, frame: null }]
    root.querySelectorAll("iframe").forEach((frame) => {
        try {
            const doc = (frame as HTMLIFrameElement).contentDocument
            if (doc && doc.body) docs.push({ doc, frame })
        } catch {
            // cross origin frame, nothing we can read
        }
    })
    return docs
}

// every chart is started by a key element, following "sheetFrame" pages without a key continue the previous chart
export function discoverCharts(root: Document): ChartRef[] {
    const charts: ChartRef[] = []

    accessibleDocuments(root).forEach(({ doc, frame }) => {
        const keys = Array.from(doc.querySelectorAll("code.cproSongKey"))
        if (!keys.length) {
            const isContinuation = frame && String(frame.className).includes("sheetFrame") && doc.querySelector(".cproSongBody")
            if (isContinuation && charts.length) {
                const last = charts[charts.length - 1]
                last.docs.push(doc)
                last.frames.push(frame)
            }
            return
        }

        const keyEl = keys[0]
        const title = cleanText(doc.querySelector(".cproTitle")?.textContent)
        const key = cleanText(keyEl.getAttribute("data-chordname") || keyEl.textContent) || null
        charts.push({ docs: [doc], frames: [frame], title, key, keyEl, ambiguous: keys.length > 1 })
    })

    return charts
}

function visibleArea(chart: ChartRef): number {
    const el = chart.frames[0] || chart.keyEl
    if (!el) return 0
    const rect = el.getBoundingClientRect()
    const view = el.ownerDocument.defaultView
    const width = Math.min(rect.right, view?.innerWidth || 0) - Math.max(rect.left, 0)
    const height = Math.min(rect.bottom, view?.innerHeight || 0) - Math.max(rect.top, 0)
    return width > 0 && height > 0 ? width * height : 0
}

// find the rendered chart that belongs to a menu song
export function findChart(charts: ChartRef[], title: string, key: string | null): ChartRef | null {
    const wanted = normalizeTitle(title)
    if (!wanted) return null

    let matches = charts.filter((a) => {
        const found = normalizeTitle(a.title)
        return found && (found === wanted || found.includes(wanted) || wanted.includes(found))
    })
    if (matches.length > 1 && key) {
        const sameKey = matches.filter((a) => normalizeKey(a.key) === normalizeKey(key))
        if (sameKey.length) matches = sameKey
    }
    const exact = matches.filter((a) => normalizeTitle(a.title) === wanted)
    if (exact.length) matches = exact

    if (!matches.length) return null
    return matches.sort((a, b) => visibleArea(b) - visibleArea(a))[0]
}

// ---------- lyric reading ----------

function isChordElement(el: Element): boolean {
    return el.classList.contains("chord") || (el.tagName === "CODE" && el.classList.contains("cproSongKey"))
}

// the text of an element in reading order, without the chords
function collectText(node: Node): string {
    if (node.nodeType === 3) return node.nodeValue || ""
    if (node.nodeType !== 1) return ""

    const el = node as Element
    if (el.tagName === "BR") return "\n"
    if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return ""
    if (isChordElement(el)) return ""
    if (el.id && /^(worship-practice|nashville)/i.test(el.id)) return ""

    let text = ""
    el.childNodes.forEach((child) => (text += collectText(child)))
    return text
}

// bar lines of chord rows ("||: | | :||") are left over without their chords, they have no words
const HAS_WORDS = /[\p{L}\p{N}]/u

function elementLines(el: Node): string[] {
    return collectText(el)
        .split(/\r?\n/)
        .map((line) => cleanText(line))
        .filter((line) => HAS_WORDS.test(line))
}

const BLOCK_TAGS = new Set(["DIV", "P", "LI", "UL", "OL", "TR", "H1", "H2", "H3", "H4", "H5", "H6", "SECTION", "ARTICLE", "PRE"])

// text with a line break between block elements (a footer is often one div per line)
function textWithBreaks(node: Node): string {
    if (node.nodeType === 3) return node.nodeValue || ""
    if (node.nodeType !== 1) return ""

    const el = node as Element
    if (el.tagName === "BR") return "\n"
    if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return ""

    let text = ""
    el.childNodes.forEach((child) => (text += textWithBreaks(child)))
    return BLOCK_TAGS.has(el.tagName) ? `\n${text}\n` : text
}

function isElement(node: Node): node is Element {
    return node.nodeType === 1
}

function hasSongContent(el: Element): boolean {
    return !!el.querySelector(".cproSongLine, .cproComment, .cproSongSection")
}

// flatten wrapper elements so every comment and song line is visited in order
function walkBlocks(parent: Node, visit: (node: Node) => void) {
    parent.childNodes.forEach((child) => {
        if (isElement(child) && !child.classList.contains("cproSongLine") && !child.classList.contains("cproComment") && hasSongContent(child)) {
            walkBlocks(child, visit)
            return
        }
        visit(child)
    })
}

class SectionBuilder {
    sections: WorshipToolsSection[] = []
    private current: WorshipToolsSection | null = null

    start(heading = "") {
        this.current = { heading, lines: [] }
        this.sections.push(this.current)
        return this.current
    }

    // a heading belongs to a fresh section, otherwise it is a direction inside the section
    comment(text: string, forceNew: boolean) {
        if (forceNew || !this.current) {
            this.start(text.replace(/:$/, "").trim())
            return
        }
        if (!this.current.heading && !this.current.lines.length) this.current.heading = text.replace(/:$/, "").trim()
        else this.current.lines.push({ text, kind: "instruction" })
    }

    lines(texts: string[], kind: WorshipToolsLine["kind"]) {
        if (!this.current) this.start()
        texts.forEach((text) => this.current!.lines.push({ text, kind }))
    }
}

function readSectionElement(section: Element, out: SectionBuilder) {
    out.start()
    walkBlocks(section, (node) => {
        if (isElement(node) && node.classList.contains("cproComment")) {
            const text = cleanText(collectText(node))
            if (text) out.comment(text, false)
        } else if (isElement(node) && node.classList.contains("cproSongLine")) {
            out.lines(elementLines(node), "lyric")
        } else {
            const text = elementLines(node)
            if (text.length) out.lines(text, "instruction")
        }
    })
}

function readLooseColumn(column: Element, out: SectionBuilder) {
    let sawLines = false
    walkBlocks(column, (node) => {
        if (isElement(node) && node.classList.contains("cproComment")) {
            const text = cleanText(collectText(node))
            if (text) {
                out.comment(text, sawLines)
                sawLines = false
            }
        } else if (isElement(node) && node.classList.contains("cproSongLine")) {
            const lines = elementLines(node)
            if (lines.length) sawLines = true
            out.lines(lines, "lyric")
        } else {
            const text = elementLines(node)
            if (text.length) out.lines(text, "instruction")
        }
    })
}

function outermostSections(column: Element): Element[] {
    return Array.from(column.querySelectorAll(".cproSongSection")).filter((el) => !el.parentElement?.closest(".cproSongSection"))
}

function splitMultiline(el: Element): string[] {
    return textWithBreaks(el)
        .split(/\r?\n+/)
        .map((a) => cleanText(a))
        .filter(Boolean)
}

export type ExtractResult = { chart: WorshipToolsChart } | { error: string }

export function extractChart(ref: ChartRef): ExtractResult {
    if (ref.ambiguous) return { error: "Several songs are in one page, can't tell them apart" }

    const builder = new SectionBuilder()
    for (const doc of ref.docs) {
        const body = doc.querySelector("pre.cproSongBody") || doc.querySelector(".cproSongBody")
        if (!body) {
            if (doc === ref.docs[0]) return { error: "The chart has no readable lyrics (it may be an image or PDF)" }
            continue
        }

        const columns = Array.from(body.querySelectorAll(".cproColumn"))
        const parents = columns.length ? columns : [body]
        parents.forEach((column) => {
            const sections = outermostSections(column)
            if (sections.length) sections.forEach((section) => readSectionElement(section, builder))
            else readLooseColumn(column, builder)
        })
    }

    // a section without a heading continues the one before it (for example the next column or page)
    const sections: WorshipToolsSection[] = []
    builder.sections.forEach((section) => {
        if (!section.heading && !section.lines.length) return
        const previous = sections[sections.length - 1]
        if (!section.heading && previous) previous.lines.push(...section.lines)
        else sections.push({ heading: section.heading, lines: [...section.lines] })
    })

    if (!sections.some((section) => section.lines.some((line) => line.kind === "lyric"))) return { error: "No lyrics were found in the chart" }

    const first = ref.docs[0]
    const last = ref.docs[ref.docs.length - 1]

    const attribution: string[] = []
    const addAttribution = (el: Element) => {
        splitMultiline(el).forEach((line) => {
            if (!attribution.includes(line)) attribution.push(line)
        })
    }
    first.querySelectorAll(".cproAuthors, .cproAuthor2").forEach((el) => addAttribution(el))
    const footer = last.querySelector(".copyright-info")
    if (footer) addAttribution(footer)

    return {
        chart: {
            title: ref.title,
            key: ref.key,
            tempoTime: cleanText(first.querySelector(".cproTempoTimeWrapper")?.textContent),
            attribution,
            sections,
            complete: !!footer
        }
    }
}
