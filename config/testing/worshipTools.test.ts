import { expect, test } from "@playwright/test"
import { _electron as electron, type ElectronApplication, type Page } from "playwright"
import { createServer, type Server } from "node:http"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

// "Add show > WorshipTools" against a local mock of the Music Stand page (no real account involved).
// The mock only renders a song's chart after its menu entry is clicked, like the real page. All songs are invented.

const line = (parts: [string | null, string][]) => `<div class="cproSongLine">${parts.map(([chord, words]) => `<span class="chordWrapper">${chord ? `<code class="chord" data-chordname="${chord}">${chord}</code>` : ""}<span class="chordLyrics">${words}</span></span>`).join("")}</div>`

const footer = '<div class="copyright-info">© 2020 Invented Publishing CCLI Song # 1234567</div>'

const lanterns = `<html><body><div class="cproTitle">Synthetic Lanterns</div><div class="cproAuthors">Invented Author</div><code class="cproSongKey" data-chordname="D">D</code><pre class="cproSongBody"><div class="cproColumn">
<div class="cproSongSection"><div class="cproComment">Verse 1</div>${line([
    ["D", "At "],
    ["G", "dawn, we go"]
])}${line([["A", "Carry the light"]])}${line([[null, "Through the night"]])}${line([[null, "Until we are home"]])}</div>
<div class="cproSongSection"><div class="cproComment">Instrumental</div></div>
<div class="cproSongSection"><div class="cproComment">Chorus</div>${line([["D", "Lanterns up high"]])}${line([["G", "Lighting the sky"]])}</div>
<div class="cproSongSection"><div class="cproComment">Verse 2</div>${line([["D", "Morning will come"]])}${line([[null, "Hold on to hope"]])}<div class="cproComment">Repeat Chorus</div></div>
</div></pre>${footer}</body></html>`

const boatsPageOne = `<html><body><div class="cproTitle">Paper Boats</div><code class="cproSongKey" data-chordname="G">G</code><pre class="cproSongBody"><div class="cproColumn"><div class="cproSongSection"><div class="cproComment">Verse</div>${line([["G", "Floating away"]])}${line([[null, "On the river"]])}</div></div></pre></body></html>`
const boatsPageTwo = `<html><body><pre class="cproSongBody"><div class="cproColumn"><div class="cproSongSection"><div class="cproComment">Chorus (2x)</div>${line([["C", "Sail, sail on"]])}</div></div></pre>${footer}</body></html>`

// shaped like a SongSelect chart: upper case headings, variants (1A/1B), chord only rows, jump cues and a footer with one div per line
const bars = `<div class="cproSongLine">||: <span class="chordWrapper"><code class="chord">E</code><span class="chordLyrics"> | </span></span> | :||</div>`
const cue = (text: string) => `<div class="cproSongLine"><i>${text}</i></div>`
const hymn = `<html><body><div class="cproTitle">Lantern Hymn</div><div class="cproAuthors">Invented Writer | Another Writer</div><code class="cproSongKey" data-chordname="E">E</code><pre class="cproSongBody"><div class="cproColumn">
<div class="cproSongSection"><div class="cproComment">INTRO</div>${bars}</div>
<div class="cproSongSection"><div class="cproComment">VERSE 1</div>${line([["E", "Light a lamp for me"]])}${line([[null, "Light it for the night"]])}</div>
<div class="cproSongSection"><div class="cproComment">CHORUS 1A</div>${line([["A", "Hold it high"]])}${line([[null, "Hold it high (To Bridge 1b)"]])}</div>
<div class="cproSongSection"><div class="cproComment">INTERLUDE</div>${bars}</div>
<div class="cproSongSection"><div class="cproComment">VERSE 1 REPEAT</div></div>
<div class="cproSongSection"><div class="cproComment">BRIDGE 1B</div>${line([["B", "Carry it home"]])}${cue("(1.)")}${line([[null, "Sing it out"]])}${cue("(To Bridge 1b)")}${cue("(2.)")}${line([[null, "Sing it out"]])}${cue("(To Instr.2)")}</div>
</div></pre><div class="copyright-info"><div>CCLI Song # 7000001</div><div>© 2019 Invented Publishing | Invented Music</div><div>For use solely with the SongSelect® Terms of Use. All rights reserved. www.ccli.com</div></div></body></html>`

// a chart without readable lyrics (like an image)
const harbor = `<html><body><div class="cproTitle">Quiet Harbor</div><code class="cproSongKey" data-chordname="A">A</code></body></html>`

const charts: { [index: number]: string[] } = { 0: [lanterns], 1: [boatsPageOne, boatsPageTwo], 2: [hymn], 3: [harbor] }

const page = `<!doctype html><html><body style="font-family: sans-serif">
<h3>Mock Music Stand</h3>
<ion-menu>
  <ion-item class="song selected"><ion-label>Synthetic Lanterns <strong>[D]</strong></ion-label></ion-item>
  <ion-item class="song"><ion-label>Paper Boats <strong>[G]</strong></ion-label></ion-item>
  <ion-item class="song"><ion-label>Lantern Hymn <strong>[E]</strong></ion-label></ion-item>
  <ion-item class="song"><ion-label>Quiet Harbor <strong>[A]</strong></ion-label></ion-item>
</ion-menu>
<div id="stack"></div>
<script>
const charts = ${JSON.stringify(charts)}
const items = Array.from(document.querySelectorAll("ion-item.song"))
items.forEach((item, index) => item.addEventListener("click", () => {
    items.forEach((a) => a.classList.remove("selected"))
    item.classList.add("selected")
    setTimeout(() => {
        document.getElementById("stack").innerHTML = ""
        ;(charts[index] || []).forEach((html) => {
            const frame = document.createElement("iframe")
            frame.className = "sheetFrame"
            frame.style.cssText = "width: 600px; height: 300px"
            frame.srcdoc = html
            document.getElementById("stack").appendChild(frame)
        })
    }, 400)
}))
</script></body></html>`

test("Add show > WorshipTools imports the chosen songs as separate shows", async () => {
    test.setTimeout(240_000)

    const server: Server = createServer((_req, res) => {
        res.writeHead(200, { "content-type": "text/html" })
        res.end(page)
    })
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve))
    const mockUrl = `http://127.0.0.1:${(server.address() as any).port}/`

    const directory = mkdtempSync(join(tmpdir(), "freeshow-worshiptools-"))
    const settingsDirectory = join(directory, "settings")
    mkdirSync(settingsDirectory)
    writeFileSync(join(settingsDirectory, "config.json"), JSON.stringify({ dataPath: directory }))
    writeFileSync(join(settingsDirectory, "settings.json"), JSON.stringify({ alertUpdates: false }))

    let app: ElectronApplication | undefined
    let window: Page | undefined
    try {
        app = await electron.launch({
            args: [".", "--no-sandbox"],
            cwd: process.env.FS_TEST_APP_PATH || process.cwd(),
            env: {
                ...process.env,
                NODE_ENV: process.env.FS_TEST_NODE_ENV || "production",
                FS_MOCK_STORE_PATH: join(directory, "settings"),
                FS_WORSHIPTOOLS_URL: mockUrl
            }
        })
        await app.evaluate(({ dialog }, dataDirectory) => {
            dialog.showOpenDialog = async () => ({ canceled: false, filePaths: [dataDirectory] })
        }, directory)
        await new Promise((resolve) => setTimeout(resolve, 5_000))

        await expect
            .poll(async () => {
                for (const candidate of app!.windows()) {
                    if (
                        !candidate.isClosed() &&
                        !/^devtools:|loading\.html/.test(candidate.url()) &&
                        (await candidate
                            .locator(".popup button.start, .top")
                            .count()
                            .catch(() => 0)) > 0
                    ) {
                        window = candidate
                        return true
                    }
                }
                return false
            })
            .toBe(true)
        const start = window!.locator(".popup button.start")
        if (await start.count()) {
            await window!.locator(".popup .button-trigger").first().click()
            await start.click()
            await window!.locator("#guideButtons").getByText("Skip").click()
        }

        // open the WorshipTools step
        await window!.getByText("New project", { exact: true }).first().click()
        await window!.getByText("New show").first().click()
        await window!.getByText("WorshipTools", { exact: true }).click()

        // the embedded page reports the service menu
        await expect(window!.getByText("Songs in service: 4")).toBeVisible({ timeout: 30_000 })

        // the native page sits exactly over the placeholder box of the popup
        const box = await window!.locator(".browser").boundingBox()
        const view = await app.evaluate(async ({ BrowserWindow, webContents }) => {
            const child = BrowserWindow.getAllWindows()
                .flatMap((a) => (a.contentView ? a.contentView.children : []))
                .find((a: any) => a.webContents?.getURL().startsWith("http://127.0.0.1"))
            const contents = webContents.getAllWebContents().find((a) => a.getURL().startsWith("http://127.0.0.1"))
            if (!child || !contents) return null
            const image = await contents.capturePage()
            return { bounds: (child as any).getBounds(), title: await contents.executeJavaScript("document.querySelector('h3')?.textContent"), pixels: image.getSize() }
        })
        expect(view?.title).toBe("Mock Music Stand")
        expect(Math.abs(view!.bounds.x - box!.x)).toBeLessThan(3)
        expect(Math.abs(view!.bounds.y - box!.y)).toBeLessThan(3)
        expect(Math.abs(view!.bounds.width - box!.width)).toBeLessThan(3)
        expect(Math.abs(view!.bounds.height - box!.height)).toBeLessThan(3)

        await window!.getByTestId("worshiptools.choose").click()
        const rows = window!.locator(".songs .song")
        await expect(rows).toHaveCount(4)
        await expect(rows.nth(0)).toContainText("Synthetic Lanterns")
        await expect(rows.nth(0)).toContainText("D")
        await window!.screenshot({ path: join(process.cwd(), "test-output", "worshiptools-pick.png") })

        // add the songs to the open project as well
        await window!.getByText("Library only").click()
        await window!.getByText(/Library and open project/).click()

        // leave the third one (no readable lyrics) checked, to see the failure
        await window!.getByTestId("worshiptools.import").click()

        await expect(window!.locator(".summary")).toBeVisible({ timeout: 90_000 })
        await expect(window!.locator(".summary")).toContainText("Imported songs: 3")
        await window!.screenshot({ path: join(process.cwd(), "test-output", "worshiptools-done.png") })
        const progress = window!.locator(".song.progress")
        await expect(progress.nth(0)).toContainText("Done")
        await expect(progress.nth(1)).toContainText("Done")
        await expect(progress.nth(2)).toContainText("Done")
        await expect(progress.nth(3)).toContainText("no readable lyrics")

        await window!.getByRole("button", { name: "Close" }).last().click()

        // every song is its own show, in the project in service order (the project view lists both)
        const slides = window!.locator("#showArea .grid > .main")
        await window!.getByText("Synthetic Lanterns").first().click()
        await expect(slides).toHaveCount(11)
        const texts = (await slides.allInnerTexts()).map((text) => text.replace(/\s+/g, " ").trim())

        // Synthetic Lanterns: no instrumental slide, "Repeat Chorus" adds the chorus again
        expect(texts[0]).toContain("At dawn, we go Carry the light Through the night Until we are home")
        expect(texts[0]).toContain("Verse 1")
        expect(texts[1]).toContain("Lanterns up high Lighting the sky")
        expect(texts[2]).toContain("Morning will come Hold on to hope")
        expect(texts[3]).toContain("Lanterns up high Lighting the sky")
        expect(texts.join(" ")).not.toMatch(/Instrumental|Repeat|[A-G]m? /)

        // Paper Boats: "Chorus (2x)" on the second page repeats the chorus
        expect(texts[4]).toContain("Floating away On the river")
        expect(texts[5]).toContain("Sail, sail on")
        expect(texts[6]).toContain("Sail, sail on")

        // Lantern Hymn: chord only sections are gone, the variant letter is gone (so the group keeps its colour),
        // "Verse 1 Repeat" repeats the verse, the repeated ending and the jump cues are not in the words
        expect(texts[7]).toMatch(/Light a lamp for me Light it for the night\s+\d\s+Verse/)
        expect(texts[8]).toContain("Hold it high Hold it high")
        expect(texts[8]).toMatch(/Chorus/)
        expect(texts[8]).not.toMatch(/1A|To Bridge/)
        expect(texts[9]).toContain("Light a lamp for me")
        expect(texts[10]).toContain("Carry it home Sing it out")
        expect(texts[10].match(/Sing it out/g)).toHaveLength(1)
        expect(texts[10]).toMatch(/Bridge/)
        expect(texts.slice(7).join(" ")).not.toMatch(/Intro|Interlude|\|\||\(1\.\)|To Instr/i)
        await window!.screenshot({ path: join(process.cwd(), "test-output", "worshiptools-show.png") })
    } finally {
        await app?.close().catch(() => undefined)
        server.close()
        rmSync(directory, { recursive: true, force: true })
    }
})
