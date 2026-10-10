import { expect, test } from "@playwright/test"
import { _electron as electron, type ElectronApplication, type Page } from "playwright"
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { compareToGolden, normalize, startRecording, stopRecording, type ScenarioResult } from "./outputTimeline"

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

async function startApp(): Promise<Running> {
    const directory = mkdtempSync(join(tmpdir(), "freeshow-output-transitions-"))
    const settings = join(directory, "settings")
    mkdirSync(settings)
    writeFileSync(join(settings, "config.json"), JSON.stringify({ dataPath: directory }))
    writeFileSync(join(settings, "settings.json"), JSON.stringify({ alertUpdates: false }))
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
        await main.getByText("Edit", { exact: true }).first().click()
        await delay(1200)
        for (const text of ["Short", "This is a much", "Tiny"]) {
            await main.getByText(text, { exact: false }).first().click()
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
