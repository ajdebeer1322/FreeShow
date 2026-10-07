import { expect, test, type Page } from "@playwright/test"
import { transformSync } from "esbuild"
import { readFileSync } from "node:fs"
import { join } from "node:path"

// Runs the WorshipTools page reader (src/electron/worshipTools/extract.ts) in a real browser against
// synthetic Music Stand pages. All songs and words below are invented.

const source = readFileSync(join(__dirname, "../../src/electron/worshipTools/extract.ts"), "utf8")
const script = transformSync(source, { loader: "ts", format: "iife", globalName: "WT" }).code

const line = (parts: [string | null, string][]) => `<div class="cproSongLine">${parts.map(([chord, words]) => `<span class="chordWrapper">${chord ? `<code class="chord" data-chordname="${chord}">${chord}</code>` : ""}<span class="chordLyrics">${words}</span></span>`).join("")}</div>`

function chartDocument(title: string, key: string, body: string, footer = true) {
    return `<html><body><div class="cproTitle">${title}</div><div class="cproAuthors">Invented Author</div><div class="cproTempoTimeWrapper">Tempo - 91 | Time - 6/8</div><code class="cproSongKey" data-chordname="${key}">${key}</code><pre class="cproSongBody"><div class="cproColumn">${body}</div></pre>${footer ? '<div class="copyright-info">© 2020 Invented Publishing CCLI Song # 1234567</div>' : ""}</body></html>`
}

function continuationDocument(body: string) {
    return `<html><body><pre class="cproSongBody"><div class="cproColumn">${body}</div></pre><div class="copyright-info">© 2020 Invented Publishing CCLI Song # 1234567</div></body></html>`
}

const frame = (html: string) => `<iframe class="sheetFrame" srcdoc="${html.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}"></iframe>`

const firstSong = chartDocument(
    "Synthetic Lanterns",
    "D",
    `<div class="cproSongSection"><div class="cproComment">Verse 1</div>${line([
        ["D", "At "],
        ["G", "dawn, we go"]
    ])}${line([[null, "Second   line here"]])}</div>` + `<div class="cproSongSection"><div class="cproComment">Chorus</div>${line([["A", "Sing it out"]])}<div class="cproComment">Repeat</div></div>`,
    false
)
const firstSongPageTwo = continuationDocument(`<div class="cproSongSection"><div class="cproComment">Bridge</div>${line([["Em", "Hold on"]])}</div><div class="cproSongSection">${line([[null, "Still holding"]])}</div>`)
const secondSong = chartDocument("Paper Boats", "G", `<div class="cproSongSection"><div class="cproComment">Verse</div>${line([["G", "Floating away"]])}</div>`)

const menu = `<ion-menu><ion-item class="song selected"><ion-label>Synthetic Lanterns <strong>[D]</strong></ion-label></ion-item><ion-item class="song"><ion-label>Paper Boats <strong>[G]</strong></ion-label></ion-item><ion-item class="other"><ion-label>Announcements</ion-label></ion-item></ion-menu>`

async function load(page: Page, html: string) {
    await page.setContent(html)
    await page.waitForFunction(() => Array.from(document.querySelectorAll("iframe")).every((a) => a.contentDocument?.readyState === "complete" && a.contentDocument.body))
    await page.addScriptTag({ content: script })
}

test("reads the service menu in order with titles and keys", async ({ page }) => {
    await load(page, menu)
    const songs = await page.evaluate(() => (window as any).WT.readServiceSongs(document))
    expect(songs).toEqual([
        { index: 0, title: "Synthetic Lanterns", key: "D", active: true },
        { index: 1, title: "Paper Boats", key: "G", active: false }
    ])
})

test("reads lyrics and section tags without chords, across continuation pages", async ({ page }) => {
    await load(page, menu + frame(firstSong) + frame(firstSongPageTwo) + frame(secondSong))

    const result = await page.evaluate(() => {
        const WT = (window as any).WT
        const charts = WT.discoverCharts(document)
        const ref = WT.findChart(charts, "Synthetic Lanterns", "D")
        return { count: charts.length, chart: WT.extractChart(ref) }
    })

    expect(result.count).toBe(2)
    expect(result.chart.chart).toEqual({
        title: "Synthetic Lanterns",
        key: "D",
        tempoTime: "Tempo - 91 | Time - 6/8",
        attribution: ["Invented Author", "© 2020 Invented Publishing CCLI Song # 1234567"],
        complete: true,
        sections: [
            {
                heading: "Verse 1",
                lines: [
                    { text: "At dawn, we go", kind: "lyric" },
                    { text: "Second line here", kind: "lyric" }
                ]
            },
            {
                heading: "Chorus",
                lines: [
                    { text: "Sing it out", kind: "lyric" },
                    { text: "Repeat", kind: "instruction" }
                ]
            },
            {
                heading: "Bridge",
                lines: [
                    { text: "Hold on", kind: "lyric" },
                    { text: "Still holding", kind: "lyric" }
                ]
            }
        ]
    })
})

test("matches the second song and marks a song without the final page marker as incomplete", async ({ page }) => {
    await load(page, menu + frame(secondSong) + frame(chartDocument("Paper Boats Part Two", "G", `<div class="cproSongSection"><div class="cproComment">Verse</div>${line([["G", "Almost there"]])}</div>`, false)))

    const result = await page.evaluate(() => {
        const WT = (window as any).WT
        const charts = WT.discoverCharts(document)
        return [WT.extractChart(WT.findChart(charts, "Paper Boats", "G")).chart, WT.extractChart(WT.findChart(charts, "Paper Boats Part Two", "G")).chart]
    })
    expect(result[0].title).toBe("Paper Boats")
    expect(result[0].complete).toBe(true)
    expect(result[1].title).toBe("Paper Boats Part Two")
    expect(result[1].complete).toBe(false)
})

test("reports a chart that has no readable lyrics", async ({ page }) => {
    await load(page, menu + frame(`<html><body><div class="cproTitle">Image Song</div><code class="cproSongKey">A</code></body></html>`))
    const result = await page.evaluate(() => {
        const WT = (window as any).WT
        return WT.extractChart(WT.findChart(WT.discoverCharts(document), "Image Song", "A"))
    })
    expect(result.error).toContain("no readable lyrics")
})
