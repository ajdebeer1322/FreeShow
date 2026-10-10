import { expect, test, type Locator } from "@playwright/test"
import { createServer, type ViteDevServer } from "vite"
import { mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

// Render the real components in an isolated browser without loading Electron or
// the operator's presentation library. A separate Vite port leaves dev sessions alone.
let server: ViteDevServer
let url: string
let directory: string

test.beforeAll(async () => {
    directory = mkdtempSync(join(tmpdir(), "freeshow-line-backgrounds-"))
    server = await createServer({ cacheDir: join(directory, "vite"), server: { port: 0, strictPort: false, open: false } })
    await server.listen()
    url = server.resolvedUrls!.local[0].replace(/\/$/, "")
})

test.afterAll(async () => {
    await server?.close()
    rmSync(directory, { recursive: true, force: true })
})

test.beforeEach(async ({ page }) => {
    await page.route(`${url}/line-background-test`, (route) =>
        route.fulfill({
            contentType: "text/html",
            body: '<!doctype html><style>body { margin: 0; } #scene { position: relative; width: 800px; height: 600px; } #media { position: absolute; width: 100%; height: 100%; } #fixture { position: relative; height: 100%; } .item { width: 800px; height: 600px; font-size: 100px; line-height: 1.1; }</style><div id="scene"><img id="media" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aO1EAAAAASUVORK5CYII="><div id="fixture"></div></div><div id="shape"></div>'
        })
    )
    await page.goto(`${url}/line-background-test`)
    await page.evaluate((sourceRoot) => ((window as any).sourceRoot = sourceRoot), `/@fs${process.cwd()}/src/frontend`)
})

async function background(line: Locator) {
    return line.evaluate((node) => getComputedStyle(node).backgroundColor)
}

test("empty template lines keep their spacing without bars over media or shape fills", async ({ page }) => {
    await page.evaluate(async () => {
        const textboxPath = (window as any).sourceRoot + "/components/slide/Textbox.svelte"
        const { default: Textbox } = await import(textboxPath)
        const { mountLegacy } = await import((window as any).sourceRoot + "/../../config/testing/legacyMount.ts")
        const item = {
            type: "text",
            style: "width:800px;height:600px;",
            align: "",
            specialStyle: { lineBg: "#ffffff", lineGap: 22, lineRadius: 12 },
            lines: ["", " \t\n&nbsp;&#160;&#x200b;", "<br>", "Lyrics"].map((value) => ({ align: "", text: [{ value, style: "font-size:100px;" }] }))
        }
        ;(window as any).fixture = mountLegacy(Textbox, { target: document.querySelector("#fixture"), props: { item, ref: { id: "fixture" }, dynamicValues: false, originalStyle: true } })
        ;(window as any).fixtureItem = item
        mountLegacy(Textbox, { target: document.querySelector("#shape"), props: { item: { type: "text", style: "width:200px;height:100px;background:#123456;", lines: [{ align: "", text: [{ value: "", style: "" }] }] }, ref: { id: "shape" }, dynamicValues: false, originalStyle: true } })
    })

    const lines = page.locator("#fixture .lines > .break")
    await expect(lines).toHaveCount(4)
    for (let i = 0; i < 3; i++) await expect.poll(() => background(lines.nth(i))).toBe("rgba(0, 0, 0, 0)")
    await expect.poll(() => background(lines.nth(3))).toBe("rgb(255, 255, 255)")
    await expect(lines.nth(3)).toHaveCSS("border-radius", "12px")
    await expect(page.locator("#fixture .lines")).toHaveCSS("gap", "22px")
    const blankHeight = await lines.first().evaluate((node) => node.getBoundingClientRect().height)
    expect(blankHeight).toBeGreaterThan(0)
    expect(await lines.nth(3).evaluate((node) => node.getBoundingClientRect().height)).toBeCloseTo(blankHeight)
    await expect(page.locator("#media")).toBeVisible()
    expect(await page.locator("#media").evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBe(true)
    await expect(page.locator("#shape .item")).toHaveCSS("background-color", "rgb(18, 52, 86)")

    // Filling and clearing the same native textbox restores/suppresses the bar
    // without deleting a line or changing its saved background style.
    await page.evaluate(() => {
        const fixture = (window as any).fixture
        const item = structuredClone((window as any).fixtureItem)
        item.lines[0].text[0].value = "Hello"
        ;(window as any).fixtureItem = item
        fixture.$set({ item })
    })
    await expect.poll(() => background(lines.first())).toBe("rgb(255, 255, 255)")
    await page.evaluate(() => {
        const fixture = (window as any).fixture
        const item = structuredClone((window as any).fixtureItem)
        item.lines[0].text[0].value = ""
        ;(window as any).fixtureItem = item
        fixture.$set({ item })
    })
    await expect.poll(() => background(lines.first())).toBe("rgba(0, 0, 0, 0)")
    expect(await lines.first().evaluate((node) => node.getBoundingClientRect().height)).toBeCloseTo(blankHeight)
    expect(await lines.first().evaluate((node: HTMLElement) => node.style.backgroundColor)).toBe("rgb(255, 255, 255)")
})

test("resolved empty variables suppress solid and gradient bars in every scrolling copy", async ({ page }) => {
    await page.evaluate(async () => {
        const storesPath = (window as any).sourceRoot + "/stores.ts"
        const linesPath = (window as any).sourceRoot + "/components/slide/TextboxLines.svelte"
        const stores = await import(storesPath)
        const { default: TextboxLines } = await import(linesPath)
        const { mountLegacy } = await import((window as any).sourceRoot + "/../../config/testing/legacyMount.ts")
        ;(window as any).variables = stores.variables
        stores.variables.set({ lyric: { name: "Lyric", type: "text", text: "" } })
        ;(window as any).fixture = mountLegacy(TextboxLines, {
            target: document.querySelector("#fixture"),
            props: {
                item: { type: "text", align: "", specialStyle: { lineBg: "linear-gradient(to right, #fff, #eee)", lineGap: 22 }, scrolling: { type: "right_left", repeat: true, duration: 5, gap: 100 }, lines: [{ align: "", text: [{ value: "{variable_lyric}", style: "font-size:100px;" }] }] },
                ref: { id: "fixture" }
            }
        })
    })

    const lines = page.locator("#fixture .lines > .break")
    await expect.poll(() => lines.count()).toBeGreaterThan(1)
    await expect.poll(() => lines.evaluateAll((nodes) => nodes.every((node) => getComputedStyle(node).backgroundImage === "none"))).toBe(true)
    await page.evaluate(() => (window as any).variables.set({ lyric: { name: "Lyric", type: "text", text: "My Redeemer Lives" } }))
    await expect(lines.first()).toContainText("My Redeemer Lives")
    await expect.poll(() => lines.evaluateAll((nodes) => nodes.every((node) => getComputedStyle(node).backgroundImage.includes("linear-gradient")))).toBe(true)
    await page.evaluate(() => (window as any).variables.set({ lyric: { name: "Lyric", type: "text", text: "" } }))
    await expect.poll(() => lines.evaluateAll((nodes) => nodes.every((node) => getComputedStyle(node).backgroundImage === "none"))).toBe(true)
    await expect(page.locator("#media")).toBeVisible()
})

test("typing and clearing template text changes only the bar in the native editor", async ({ page }) => {
    await page.evaluate(async () => {
        const storesPath = (window as any).sourceRoot + "/stores.ts"
        const editorPath = (window as any).sourceRoot + "/components/edit/editbox/EditboxLines.svelte"
        const stores = await import(storesPath)
        const { default: EditboxLines } = await import(editorPath)
        const { mountLegacy } = await import((window as any).sourceRoot + "/../../config/testing/legacyMount.ts")
        const item = {
            type: "text",
            style: "",
            align: "",
            specialStyle: { lineBg: "#ffffff", lineGap: 22 },
            lines: [
                { align: "", text: [{ value: "", style: "font-size:100px;" }] },
                { align: "", text: [{ value: "Second line", style: "font-size:100px;" }] }
            ]
        }
        stores.activeEdit.set({ type: "template", id: "fixture", slide: 0, items: [0] })
        stores.templates.set({ fixture: { name: "Fixture", items: [item], settings: {} } })
        ;(window as any).templates = stores.templates
        mountLegacy(EditboxLines, { target: document.querySelector("#fixture"), props: { item, ref: { type: "template", id: "fixture" }, index: 0 } })
    })

    const lines = page.locator("#fixture .edit > .break")
    await expect(lines).toHaveCount(2)
    await expect.poll(() => background(lines.first())).toBe("rgba(0, 0, 0, 0)")
    await expect.poll(() => background(lines.nth(1))).toBe("rgb(255, 255, 255)")
    const blankHeight = await lines.first().evaluate((node) => node.getBoundingClientRect().height)
    await lines
        .first()
        .locator("span")
        .evaluate((node) => {
            ;(node.closest("[contenteditable]") as HTMLElement).focus()
            const range = document.createRange()
            range.selectNodeContents(node)
            window.getSelection()!.removeAllRanges()
            window.getSelection()!.addRange(range)
        })
    await page.keyboard.insertText("New lyrics")
    await expect(lines.first()).toContainText("New lyrics")
    await expect.poll(() => background(lines.first())).toBe("rgb(255, 255, 255)")
    await lines.first().evaluate((node) => {
        const range = document.createRange()
        range.selectNodeContents(node)
        window.getSelection()!.removeAllRanges()
        window.getSelection()!.addRange(range)
    })
    await page.keyboard.press("Backspace")
    await expect.poll(() => background(lines.first())).toBe("rgba(0, 0, 0, 0)")
    await expect(lines).toHaveCount(2)
    await expect.poll(() => lines.first().evaluate((node) => node.getBoundingClientRect().height)).toBeCloseTo(blankHeight)
    await expect
        .poll(() =>
            page.evaluate(() => {
                let template: any
                const unsubscribe = (window as any).templates.subscribe((value: any) => (template = value.fixture))
                unsubscribe()
                return template.items[0].lines[0].text.map((text: any) => text.value).join("")
            })
        )
        .toBe("")
    expect(
        await page.evaluate(async () => {
            let template: any
            const unsubscribe = (window as any).templates.subscribe((value: any) => (template = value.fixture))
            unsubscribe()
            return { background: template.items[0].specialStyle.lineBg, align: template.items[0].lines[0].align.replaceAll(";", "").trim() }
        })
    ).toEqual({ background: "#ffffff", align: "" })
})
