import { expect, test } from "@playwright/test"
import { _electron as electron, type ElectronApplication, type Page } from "playwright"
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { compareToGolden, normalize, startProbe, startRecording, stopProbe, stopRecording, summarizeProbe, type ProbeSummary, type ScenarioResult } from "./outputTimeline"

// Output timing regression test.
//
// Steps through slides, backgrounds and auto sized text in the real app and records which layers the output window
// shows over time (outputTimeline.ts). The result is compared with golden/outputTransitions.svelte3.json, which was
// recorded from the Svelte 3 build. It exists so the workarounds around the output transitions
// (OutputTransition.svelte, SlideContent.svelte, SlideItemTransition.svelte, Overlay.svelte) can be removed or
// reworked one at a time while checking that the output still fades out and removes the old content, never stacks
// old slides and keeps its timing.
//
// Run: npx playwright test --config config/testing/playwright.config.ts config/testing/outputTransitions.test.ts
// Needs a production build like the other Electron tests (and public/index.html pointing at it, see AI_README.md).
// FS_RECORD_GOLDEN=1 rewrites the golden file from the current build instead of comparing (do that on a known good build).

const GOLDEN_PATH = join(__dirname, "golden", "outputTransitions.svelte3.json")
const FIXTURES = join(__dirname, "fixtures", "output")
const RECORD = !!process.env.FS_RECORD_GOLDEN
const results: { [scenario: string]: ScenarioResult } = {}
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

type Running = { app: ElectronApplication; main: Page; output: Page; directory: string }

// Optional start state for the auto size timing test: the text transition and an output style with auto size templates.
type Seed = {
    transition?: "fade" | "none"
    // output style whose slide template shrinks text to fit
    styleTemplate?: boolean
    // lyrics view of the show: it has no slide thumbnails, which are what store the measured size in the slides
    lyricsView?: boolean
    // a show where every slide shrinks to fit but has no stored font size
    unmeasuredShow?: string[][]
    // a local Bible and a scripture template that shrinks text to fit, set as the scripture settings template or as the template of the output style
    scripture?: "settings" | "style"
}

const BIBLE_ID = "probebible"
const BIBLE_VERSES = [
    "In the beginning God created the heavens and the earth.",
    "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters, and God said, let there be a firmament in the midst of the waters, and let it divide the waters from the waters, and God made the firmament and divided the waters which were under the firmament from the waters which were above the firmament, and it was so.",
    "And God said, Let there be light: and there was light."
]

// A text box that shrinks its text to fit, in a box small enough that the text length changes the font size.
const AUTO_SIZE_TEXT_ITEM = {
    style: "top: 100px;left: 100px;width: 1720px;height: 300px;padding: 20px;",
    align: "",
    textFit: "shrinkToFit",
    lines: [{ align: "", text: [{ value: "1", style: "font-size: 100px;color: #ffffff;" }] }]
}

// a show with one slide per entry (lines of text) where every text box is set to shrink to fit, but has no stored font size
function writeUnmeasuredShow(directory: string, settings: string, name: string, slideLines: string[][]) {
    const slides: { [id: string]: any } = {}
    const layoutSlides: { id: string }[] = []
    slideLines.forEach((lines, index) => {
        const id = `unmeasured${index}`
        slides[id] = {
            group: "Verse",
            color: "#3b82c4",
            settings: {},
            notes: "",
            globalGroup: "verse",
            items: [{ type: "text", style: "top:88px;left:50px;height:904px;width:1820px;", align: "", auto: true, lines: lines.map((value) => ({ align: "", text: [{ value, style: "font-size: 100px;" }] })) }]
        }
        layoutSlides.push({ id })
    })
    const timestamps = { created: Date.now(), modified: Date.now(), used: null }
    const show = { name, private: false, category: "song", settings: { activeLayout: "default", template: null }, timestamps, quickAccess: {}, meta: {}, slides, layouts: { default: { name: "Default", notes: "", slides: layoutSlides } }, media: {} }
    mkdirSync(join(directory, "Shows"), { recursive: true })
    writeFileSync(join(directory, "Shows", name + ".show"), JSON.stringify([`seed_${name}`, show]))
    writeFileSync(join(settings, "shows.json"), JSON.stringify({ [`seed_${name}`]: { name, category: "song", timestamps, quickAccess: {} } }))
}

async function startApp(seed: Seed = {}): Promise<Running> {
    const directory = mkdtempSync(join(tmpdir(), "freeshow-output-transitions-"))
    const settings = join(directory, "settings")
    mkdirSync(settings)
    writeFileSync(join(settings, "config.json"), JSON.stringify({ dataPath: directory }))
    const settingsData: { [key: string]: any } = { alertUpdates: false }
    if (seed.transition) {
        const text = seed.transition === "none" ? { type: "none", duration: 0, easing: "sine" } : { type: "fade", duration: 500, easing: "sine" }
        settingsData.transitionData = { text, media: { type: "fade", duration: 800, easing: "sine" } }
    }
    // the lyrics view has no slide thumbnails, which are what store the measured size in the show
    if (seed.lyricsView) settingsData.slidesOptions = { columns: 4, mode: "lyrics" }
    if (seed.unmeasuredShow) writeUnmeasuredShow(directory, settings, "Probe", seed.unmeasuredShow)

    const templates: { [id: string]: any } = {}
    const synced: { [key: string]: any } = {}
    if (seed.styleTemplate) {
        templates.autoSize = { name: "Auto size", color: null, category: "song", items: [AUTO_SIZE_TEXT_ITEM] }
        synced.styles = { default: { name: "Default", template: "autoSize" } }
    }
    if (seed.scripture) {
        const item = {
            ...AUTO_SIZE_TEXT_ITEM,
            lines: [
                {
                    align: "text-align: left;",
                    text: [
                        { value: "{scripture_number} ", style: "font-size: 50px;color: #cccccc;" },
                        { value: "{scripture_text}", style: "font-size: 100px;color: #ffffff;" }
                    ]
                }
            ]
        }
        templates.bibleAutoSize = { name: "Scripture auto size", color: null, category: "scripture", settings: { mode: "scripture" }, items: [item] }
        synced.scriptures = { [BIBLE_ID]: { name: "Probe bible", id: BIBLE_ID } }
        synced.scriptureSettings = { template: seed.scripture === "settings" ? "bibleAutoSize" : "scripture", versesPerSlide: 1, verseNumbers: true, showVersion: false, showVerse: false, referenceDivider: ":", splitLongVerses: false, longVersesChars: 100, longVersesTolerance: 0, splitLongVersesSuffix: false, smartSplit: true }
        if (seed.scripture === "style") synced.styles = { default: { name: "Default", templateScripture: "bibleAutoSize" } }
        const verses = BIBLE_VERSES.map((text, index) => ({ number: index + 1, text }))
        const bible = { name: "Probe bible", books: [{ number: 1, name: "Genesis", chapters: [{ number: 1, verses }] }], metadata: {} }
        mkdirSync(join(directory, "Bibles"), { recursive: true })
        writeFileSync(join(directory, "Bibles", "Probe bible.fsb"), JSON.stringify([BIBLE_ID, bible]))
        settingsData.drawerTabsData = { scripture: { activeSubTab: BIBLE_ID } }
    }
    if (Object.keys(templates).length) writeFileSync(join(settings, "templates.json"), JSON.stringify(templates))
    if (Object.keys(synced).length) writeFileSync(join(settings, "settings_synced.json"), JSON.stringify(synced))
    writeFileSync(join(settings, "settings.json"), JSON.stringify(settingsData))
    const env: { [key: string]: string } = { ...(process.env as any), NODE_ENV: process.env.FS_TEST_NODE_ENV || "production", FS_MOCK_STORE_PATH: settings }
    delete env.ELECTRON_RUN_AS_NODE

    const app = await electron.launch({ args: [".", "--no-sandbox"], cwd: process.env.FS_TEST_APP_PATH || process.cwd(), env })
    await app.evaluate(({ dialog }, directory) => {
        dialog.showOpenDialog = async () => ({ canceled: false, filePaths: [directory] })
    }, directory)

    // the main window is the one with the top bar, the output window is the other one
    let main: Page | undefined
    for (let i = 0; i < 60 && !main; i++) {
        for (const page of app.windows()) {
            if (
                (await page
                    .locator(".popup button.start, .top")
                    .count()
                    .catch(() => 0)) > 0
            )
                main = page
        }
        if (!main) await delay(500)
    }
    if (!main) throw new Error("main window not found")

    await main.locator(".popup button.start, .top").first().waitFor()
    const start = main.locator(".popup button.start")
    if (await start.count()) {
        await main.locator(".popup .button-trigger").first().click()
        await start.click()
        await main.locator("#guideButtons").getByText("Skip").click()
    }
    await main.getByText("New project", { exact: true }).first().click()

    let output: Page | undefined
    for (let i = 0; i < 20 && !output; i++) {
        output = app.windows().find((page) => page !== main)
        if (!output) await delay(500)
    }
    if (!output) throw new Error("output window not found")
    // MainOutput.svelte only mounts the output 2 s after its window (the font preload element is shown until then); a
    // first activation before that waits for the rest of it, so scenarios would depend on how fast the test got here
    await output.waitForFunction(() => !document.querySelector(".fontPreload"), undefined, { timeout: 15_000 }).catch(() => {})
    return { app, main, output, directory }
}

async function stopApp({ app }: Running) {
    const child = app.process()
    const forceClose = setTimeout(() => {
        if (!child?.pid) return
        try {
            if (process.platform === "win32") child.kill("SIGKILL")
            else process.kill(-child.pid, "SIGKILL")
        } catch {}
    }, 5_000)
    try {
        await app.close()
    } finally {
        clearTimeout(forceClose)
    }
}

async function createShow({ main }: Running, name: string, lyrics: string) {
    await main.getByText("New show").first().click()
    await main.locator("#name").fill(name)
    await main.getByText("Quick Lyrics").click()
    await main.getByPlaceholder("[Verse]").fill(lyrics)
    await main.getByTestId("create.show.popup.new.show").click()
    await expect(main.locator(".grid > .main .slide").first()).toBeVisible()
    await delay(800)
}

// switches the text box of the slides containing the given texts (or with the given index) to "Shrink to fit" in the editor,
// then returns to the show view
async function shrinkSlidesToFit({ main }: Running, texts: (string | number)[]) {
    await main.getByText("Edit", { exact: true }).first().click()
    await delay(1200)
    for (const text of texts) {
        if (typeof text === "number")
            await main
                .locator(`[data-slide-index="${text}"]`)
                .first()
                .click({ position: { x: 10, y: 10 } })
        else await main.getByText(text, { exact: false }).first().click()
        await delay(500)
        await main
            .locator(".editItem")
            .first()
            .click({ position: { x: 5, y: 5 }, force: true })
        await delay(300)
        await main.locator('.dropdown-trigger[data-title^="Auto size"]').first().click()
        await delay(300)
        await main.locator("li[role=option]").filter({ hasText: "Shrink to fit" }).first().click()
        await delay(500)
    }
    await main.getByText("Show", { exact: true }).first().click()
    await delay(1000)
}

// records the output while `action` runs and the following `wait` ms
async function record(running: Running, name: string, action: () => Promise<unknown>, wait = 1800) {
    await running.output.evaluate(startRecording)
    await action()
    await delay(wait)
    const records = await running.output.evaluate(stopRecording)
    results[name] = normalize(records)
}

async function finish(name: string) {
    const prefix = `${name}/`
    const scenarios = Object.keys(results).filter((key) => key.startsWith(prefix))
    expect(scenarios.length).toBeGreaterThan(0)

    // FS_TIMELINE_OUT=file.json: also write what was recorded (to compare builds), whatever the golden says
    if (process.env.FS_TIMELINE_OUT) {
        let all: { [key: string]: ScenarioResult } = {}
        try {
            all = JSON.parse(readFileSync(process.env.FS_TIMELINE_OUT, "utf8"))
        } catch {}
        for (const key of scenarios) all[key] = results[key]
        writeFileSync(process.env.FS_TIMELINE_OUT, JSON.stringify(all, null, 1) + "\n")
    }

    if (RECORD) {
        const current = JSON.parse(readFileSync(GOLDEN_PATH, "utf8"))
        for (const key of scenarios) current[key] = results[key]
        writeFileSync(GOLDEN_PATH, JSON.stringify(current, null, 1) + "\n")
        return
    }

    const golden = JSON.parse(readFileSync(GOLDEN_PATH, "utf8"))
    const problems: string[] = []
    for (const key of scenarios) {
        if (!golden[key]) problems.push(`${key}: not in the golden file`)
        else for (const problem of compareToGolden(results[key], golden[key])) problems.push(`${key}: ${problem}`)
    }
    expect(problems, problems.join("\n")).toEqual([])
}

test.describe.configure({ mode: "serial" })

test("text slides fade out, are removed and never stack on the output", async () => {
    const running = await startApp()
    try {
        const { main } = running
        await createShow(running, "Show A", "[Verse]\nFirst slide line\n\n[Chorus]\nSecond slide line\n\n[Bridge]\nThird slide line")
        const slides = main.locator(".grid > .main")
        await expect(slides).toHaveCount(3)

        const click = (index: number) => () => slides.nth(index).locator(".slide").first().click()
        const press = (key: string) => () => main.keyboard.press(key)
        await record(running, "text/click-slide-1", click(0))
        await record(running, "text/arrow-right", press("ArrowRight"))
        await record(running, "text/arrow-right-2", press("ArrowRight"))
        await record(running, "text/arrow-left", press("ArrowLeft"))
        await record(running, "text/space", press("Space"))
        await record(
            running,
            "text/rapid-left-x3",
            async () => {
                for (let i = 0; i < 3; i++) {
                    await main.keyboard.press("ArrowLeft")
                    await delay(80)
                }
            },
            2200
        )
        await record(running, "text/click-slide-2", click(1))
        await record(running, "text/click-slide-1-again", click(0))
        await record(running, "text/same-slide-click", click(0))
        await record(running, "text/escape-clear", press("Escape"))
        await record(running, "text/click-slide-1-after-clear", click(0))
        await finish("text")
    } finally {
        await stopApp(running)
    }
})

test("image and video backgrounds cross fade and the old one is removed", async () => {
    const running = await startApp()
    try {
        const { app, main } = running
        // a copy of the fixtures, so the app never touches the repository
        const mediaDirectory = mkdtempSync(join(tmpdir(), "freeshow-output-media-"))
        for (const file of readdirSync(FIXTURES)) copyFileSync(join(FIXTURES, file), join(mediaDirectory, file))

        await createShow(running, "Show B", "[Verse]\nOne\n\n[Chorus]\nTwo\n\n[Bridge]\nThree\n\n[Outro]\nFour")
        const slides = main.locator(".grid > .main")
        await expect(slides).toHaveCount(4)

        await main.locator(".drawer button#media").click()
        await app.evaluate(({ dialog }, directory) => {
            dialog.showOpenDialog = async () => ({ canceled: false, filePaths: [directory] })
        }, mediaDirectory)
        await main.getByRole("button", { name: "Add folder", exact: true }).click()

        async function drop(name: string, slideIndex: number) {
            const source = main.locator('.drawer .selectElem[id="media"][draggable="true"]').filter({ hasText: name }).first()
            await expect(source).toBeVisible()
            const target = slides.nth(slideIndex).locator(".selectElem")
            await delay(300)
            const from = (await source.boundingBox())!
            const to = (await target.boundingBox())!
            await main.mouse.move(from.x + from.width / 2, from.y + 30)
            await main.mouse.down()
            await main.mouse.move(from.x + from.width / 2 + 20, from.y + 30, { steps: 5 })
            await main.mouse.move(to.x + to.width / 2, to.y + 30, { steps: 20 })
            await main.mouse.move(to.x + to.width / 2 + 1, to.y + 30)
            await main.mouse.up()
            await delay(600)
        }
        await drop("red", 0)
        await drop("blue", 1)
        await drop("clipA", 2)
        await drop("clipB", 3)
        await expect(slides).toHaveCount(4)

        const click = (index: number) => () => slides.nth(index).locator(".slide").first().click()
        const press = (key: string) => () => main.keyboard.press(key)
        await record(running, "background/bg-click-1-image", click(0), 2000)
        await record(running, "background/bg-click-2-image-to-image", click(1), 2000)
        await record(running, "background/bg-click-3-image-to-video", click(2), 2500)
        await record(running, "background/bg-click-4-video-to-video", click(3), 2500)
        await record(running, "background/bg-arrow-left-video-to-video", press("ArrowLeft"), 2500)
        await record(running, "background/bg-arrow-left-video-to-image", press("ArrowLeft"), 2000)
        await record(running, "background/bg-escape-clear", press("Escape"), 2000)
        await record(running, "background/bg-after-clear-click-1", click(0), 2000)
        await finish("background")
    } finally {
        await stopApp(running)
    }
})

test("auto sized text changes slide in the same order and time", async () => {
    // Only which layers show up and when is compared; the font size itself is not read back.
    const running = await startApp()
    try {
        const { main } = running
        await createShow(running, "Auto", "[Verse]\nShort\n\n[Chorus]\nThis is a much longer line of text that has to be shrunk or grown to fit the output screen nicely\nand a second fairly long line to make the box fill up quite a lot\n\n[Bridge]\nTiny")

        // switch every slide to "Shrink to fit" in the editor
        await shrinkSlidesToFit(running, ["Short", "This is a much", "Tiny"])

        const slides = main.locator(".grid > .main")
        await expect(slides).toHaveCount(3)
        const click = (index: number) => () => slides.nth(index).locator(".slide").first().click()
        const press = (key: string) => () => main.keyboard.press(key)
        await record(running, "autosize/auto-click-1", click(0), 2500)
        await record(running, "autosize/auto-click-2-long", click(1), 2500)
        await record(running, "autosize/auto-click-3", click(2), 2500)
        await record(running, "autosize/auto-arrow-left", press("ArrowLeft"), 2500)
        await record(running, "autosize/auto-arrow-left-2", press("ArrowLeft"), 2500)
        await record(
            running,
            "autosize/auto-arrow-right-x2-fast",
            async () => {
                await main.keyboard.press("ArrowRight")
                await delay(150)
                await main.keyboard.press("ArrowRight")
            },
            3000
        )
        await finish("autosize")
    } finally {
        await stopApp(running)
    }
})

// ---- Auto size wait timing ----
//
// For a slide change, measures the time from the activation (key press / click in the main window) until the new text
// is fully visible in the output, and reads the font size of the new text in every frame to catch it showing at a size
// it does not keep. Results are printed as a table and written to FS_PROBE_OUT (a JSON file) when that is set, so a run
// before and after a change can be compared. The asserts only check that the text ends up visible and never flashes at
// another size; the timings are what the wait protects and are reported, not asserted, except for the known cases.

type ProbeResult = ProbeSummary & { fromLast: number | null; presses: number }
const probeResults: { [name: string]: ProbeResult } = {}

// remember the time of every key press and click in the main window (the slide activations)
async function trackActivations({ main }: Running) {
    await main.evaluate(() => {
        const w = window as any
        w.__activations = []
        for (const type of ["keydown", "click"]) window.addEventListener(type, () => w.__activations.push(Date.now()), true)
    })
}

async function probe(running: Running, name: string, action: () => Promise<unknown>, target: string, wait = 2500) {
    await running.main.evaluate(() => ((window as any).__activations = []))
    await running.output.evaluate(startProbe)
    await action()
    await delay(wait)
    const frames = await running.output.evaluate(stopProbe)
    const activations: number[] = await running.main.evaluate(() => (window as any).__activations)
    expect(activations.length, `${name}: no activation seen`).toBeGreaterThan(0)
    const first = summarizeProbe(frames, activations[0], target)
    const last = activations.length > 1 ? summarizeProbe(frames, activations[activations.length - 1], target) : first
    probeResults[name] = { ...first, fromLast: last.fullyVisible, presses: activations.length }
}

function reportProbe(title: string) {
    const rows = Object.entries(probeResults).map(([name, r]) => `${name.padEnd(34)} ${String(r.firstVisible ?? "-").padStart(7)} ${String(r.fullyVisible ?? "-").padStart(7)} ${String(r.fromLast ?? "-").padStart(7)}   ${r.flash ? "FLASH " : "ok    "} ${r.sizes.join(" > ")}`)
    console.log(`\n${title}\n${"scenario".padEnd(34)} ${"first".padStart(7)} ${"full".padStart(7)} ${"fromLast".padStart(7)}   size\n${rows.join("\n")}`)
    if (process.env.FS_PROBE_OUT) {
        const path = process.env.FS_PROBE_OUT
        let all: { [key: string]: any } = {}
        try {
            all = JSON.parse(readFileSync(path, "utf8"))
        } catch {}
        all[title] = { ...(all[title] || {}), ...probeResults }
        writeFileSync(path, JSON.stringify(all, null, 1) + "\n")
    }
}

// A slide whose text size is known (it was measured for the same text and box before) changes as fast as a plain slide:
// the fade and its offset, not the fixed 500 ms hold that was applied to every slide of an output style.
function expectKnownSizeIsNotHeld(name: string, transition: "fade" | "none") {
    const result = probeResults[name]
    const limit = transition === "fade" ? 1050 : 450
    expect(result?.fullyVisible ?? Infinity, `${name}: fully visible after ${result?.fullyVisible} ms`).toBeLessThan(limit)
}

function expectNoFlash() {
    const problems = Object.entries(probeResults).flatMap(([name, r]) => {
        if (r.fullyVisible === null) return [`${name}: new text never fully visible`]
        if (r.flash) return [`${name}: new text shown at ${r.sizes.join(" then ")}px`]
        // every slide here has one text box: the old one has to be removed and old slides must not stack
        if (r.finalBoxes !== 1) return [`${name}: ${r.finalBoxes} text boxes are left on the output`]
        if (r.maxBoxes > 2) return [`${name}: ${r.maxBoxes} text boxes at the same time`]
        return []
    })
    expect(problems, problems.join("\n")).toEqual([])
}

const LONG_LINE = "This is a much longer line of text that has to be shrunk or grown to fit the output screen nicely"
const PROBE_SHOW = `[Verse]\nPlain one\n\n[Chorus]\nPlain two\n\n[Bridge]\nShort\n\n[Outro]\n${[LONG_LINE, LONG_LINE, LONG_LINE, LONG_LINE].join("\n")}\n\n[Tag]\nTiny`
const LONG = "This is a much longer"
const PROBE_SLIDES = [["Plain one"], ["Plain two"], ["Short"], [LONG_LINE, LONG_LINE, LONG_LINE, LONG_LINE], ["Tiny"]]

async function probeStart(running: Running, seed: Seed) {
    for (const key of Object.keys(probeResults)) delete probeResults[key]
    const slides = running.main.locator(".grid > .main")
    if (seed.unmeasuredShow) {
        await running.main.getByText("Probe", { exact: true }).first().click()
    } else {
        await createShow(running, "Probe", PROBE_SHOW)
    }
    await expect(slides).toHaveCount(5)
    if (!seed.unmeasuredShow && !seed.styleTemplate) {
        // only the last three are auto sized (the style template does it for all slides): the first two are plain text
        await shrinkSlidesToFit(running, [2, 3, 4])
    }
    await trackActivations(running)

    const { main } = running
    return {
        click: (index: number) => () => slides.nth(index).locator(".slide").first().click(),
        press: (key: string) => () => main.keyboard.press(key),
        rapid: (key: string, count: number) => async () => {
            for (let i = 0; i < count; i++) {
                await main.keyboard.press(key)
                await delay(100)
            }
        }
    }
}

for (const transition of ["fade", "none"] as const) {
    test(`auto size text and ${transition} transition, no output style, stored size from slide thumbnails`, async () => {
        const running = await startApp({ transition })
        try {
            const { click, press, rapid } = await probeStart(running, { transition })
            await probe(running, "a plain: click 1", click(0), "Plain one")
            await probe(running, "a plain: next", press("ArrowRight"), "Plain two")
            await probe(running, "b auto: first showing", press("ArrowRight"), "Short")
            await probe(running, "b auto: next (long)", press("ArrowRight"), LONG)
            await probe(running, "b auto: next (tiny)", press("ArrowRight"), "Tiny")
            await probe(running, "b auto: back (long)", press("ArrowLeft"), LONG)
            await probe(running, "b auto: second showing", press("ArrowLeft"), "Short")
            await probe(running, "a plain: back", press("ArrowLeft"), "Plain two")
            await probe(running, "e rapid: next x3", rapid("ArrowRight", 3), "Tiny", 3000)
            await probe(running, "e rapid: back x3", rapid("ArrowLeft", 3), "Plain two", 3000)

            reportProbe(`no style, ${transition}`)
            expectNoFlash()
        } finally {
            await stopApp(running)
        }
    })

    // Every slide of the seeded show is set to shrink to fit and starts without a stored size, in the lyrics view. The slide
    // cards store a size shortly after the show opens (see HOW_IT_WORKS.md, F-008), so this mostly measures the first
    // activation of a session and jumps between slides, not a missing size.
    test(`auto size text and ${transition} transition, no output style, lyrics view without stored sizes`, async () => {
        const seed: Seed = { transition, lyricsView: true, unmeasuredShow: PROBE_SLIDES }
        const running = await startApp(seed)
        try {
            const { click, rapid } = await probeStart(running, seed)
            await probe(running, "b first click (cold start)", click(0), "Plain one", 4000)
            await probe(running, "b first showing: jump to 4", click(3), LONG)
            await probe(running, "b stored by preview: jump to 1", click(0), "Plain one")
            await probe(running, "b second showing: jump to 4", click(3), LONG)
            await probe(running, "b first showing: jump to 3", click(2), "Short")
            await probe(running, "e rapid: next x2", rapid("ArrowRight", 2), "Tiny", 3000)
            await probe(running, "e rapid: back x4", rapid("ArrowLeft", 4), "Plain one", 3000)

            reportProbe(`no style, ${transition}, size missing`)
            expectNoFlash()
        } finally {
            await stopApp(running)
        }
    })

    test(`auto size text and ${transition} transition, output style with an auto size template`, async () => {
        const seed: Seed = { transition, styleTemplate: true }
        const running = await startApp(seed)
        try {
            const { click, press, rapid } = await probeStart(running, seed)
            await probe(running, "c style: click 1", click(0), "Plain one")
            await probe(running, "c style: next (first)", press("ArrowRight"), "Plain two")
            await probe(running, "c style: next (short)", press("ArrowRight"), "Short")
            await probe(running, "c style: next (long)", press("ArrowRight"), LONG)
            await probe(running, "c style: back (short)", press("ArrowLeft"), "Short")
            await probe(running, "c style: back (second)", press("ArrowLeft"), "Plain two")
            await probe(running, "c style: second showing (long)", click(3), LONG)
            await probe(running, "c style: click 1 again", click(0), "Plain one")
            await probe(running, "e rapid: next x3", rapid("ArrowRight", 3), LONG, 3000)
            await probe(running, "e rapid: back x3", rapid("ArrowLeft", 3), "Plain one", 3000)

            reportProbe(`output style, ${transition}`)
            expectNoFlash()
            expectKnownSizeIsNotHeld("c style: second showing (long)", transition)
        } finally {
            await stopApp(running)
        }
    })

    for (const scripture of ["settings", "style"] as const) {
        const via = scripture === "settings" ? "scripture settings template" : "output style scripture template"
        test(`auto size scripture and ${transition} transition, ${via}`, async () => {
            const running = await startApp({ transition, scripture })
            try {
                const { main } = running
                await trackActivations(running)
                await main.locator(".drawer button#scripture").click()
                await main.locator('.books span[id="1"]').click()
                await main.locator('.chapters span[id="1"]').click()
                const verse = (number: number) => main.locator(`.verses span.verse[id="${number}"]`)
                await expect(verse(3)).toBeVisible()
                const play = (number: number) => () => verse(number).click()
                const rapid = async () => {
                    for (const number of [1, 2, 3]) {
                        await verse(number).click()
                        await delay(100)
                    }
                }
                for (const key of Object.keys(probeResults)) delete probeResults[key]

                await probe(running, "d scripture: verse 1 (cold)", () => verse(1).dblclick(), "In the beginning", 4000)
                await probe(running, "d scripture: verse 2 (long)", play(2), "And the earth was without form")
                await probe(running, "d scripture: verse 3", play(3), "Let there be light")
                await probe(running, "d scripture: verse 2 again", play(2), "And the earth was without form")
                await probe(running, "d scripture: verse 1 again", play(1), "In the beginning")
                await probe(running, "e rapid: verse 1,2,3", rapid, "Let there be light", 3000)

                reportProbe(`scripture ${scripture}, ${transition}`)
                expectNoFlash()
                expectKnownSizeIsNotHeld("d scripture: verse 2 again", transition)
            } finally {
                await stopApp(running)
            }
        })
    }
}
