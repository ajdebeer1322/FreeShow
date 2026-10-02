import { expect, test } from "@playwright/test"
import { _electron as electron, type Locator, type Page } from "playwright"
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

test("Focus Mode button and media insertion/replacement use the destination show", async () => {
    const directory = mkdtempSync(join(tmpdir(), "freeshow-focus-media-"))
    const mediaDirectory = join(directory, "media")
    mkdirSync(mediaDirectory)
    writeFileSync(join(mediaDirectory, "new-media.png"), Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aO1EAAAAASUVORK5CYII=", "base64"))
    const app = await electron.launch({ args: [".", "--no-sandbox"], cwd: process.env.FS_TEST_APP_PATH || process.cwd(), env: { ...process.env, NODE_ENV: process.env.FS_TEST_NODE_ENV || "production", FS_MOCK_STORE_PATH: join(directory, "settings") } })
    let window: Page | undefined

    try {
        await app.evaluate(({ dialog, ipcMain }, directory) => {
            dialog.showOpenDialog = async () => ({ canceled: false, filePaths: [directory] })
            ipcMain.on("OUTPUT", (_event, message) => {
                if (message.channel === "OUTPUTS") (globalThis as any).focusTestOutputs = message.data
            })
        }, directory)
        await new Promise((resolve) => setTimeout(resolve, 5_000))
        await expect
            .poll(async () => {
                for (const page of app.windows()) {
                    if (/index\.html|https?:\/\/(localhost|127\.0\.0\.1):3000/.test(page.url()) && (await page.locator(".popup button.start, .top").count()) > 0) {
                        window = page
                        return true
                    }
                }
                return false
            })
            .toBe(true)
        await window!.locator(".popup button.start, .top").first().waitFor()
        const start = window.locator(".popup button.start")
        if (await start.count()) {
            await window.locator(".popup .button-trigger").first().click()
            await start.click()
            await window.locator("#guideButtons").getByText("Skip").click()
        }

        await window.getByText("New project", { exact: true }).first().click()
        async function createShow(name: string) {
            await window!.getByText("New show").first().click()
            await window!.locator("#name").fill(name)
            await window!.getByText("Quick Lyrics").click()
            await window!.getByPlaceholder("[Verse]").fill("[Verse]\nFirst slide\n\n[Chorus]\nSecond slide")
            await window!.getByTestId("create.show.popup.new.show").click()
            await expect(window!.locator("#showArea .grid > .main")).toHaveCount(2)
        }
        await createShow("Focus A")
        await createShow("Focus B")

        const toggle = window.locator("#focus_mode_button")
        await toggle.click()
        await expect(toggle).toHaveClass(/isActive/)
        const first = window.locator(".focusId").filter({ has: window.locator(".name p").filter({ hasText: /^Focus A$/ }) })
        const second = window.locator(".focusId").filter({ has: window.locator(".name p").filter({ hasText: /^Focus B$/ }) })
        await expect(first.locator(".grid > .main")).toHaveCount(2)
        await expect(second.locator(".grid > .main")).toHaveCount(2)

        // Keep another show live while editing Focus B.
        await first.locator(".grid > .main .slide").first().click()
        await expect.poll(() => app.evaluate(() => Object.values((globalThis as any).focusTestOutputs || {}).some((output: any) => output.out?.slide))).toBe(true)
        const previousOutputs = await app.evaluate(() => JSON.stringify((globalThis as any).focusTestOutputs))

        await window.locator(".drawer button#media").click()
        await app.evaluate(({ dialog }, mediaDirectory) => {
            dialog.showOpenDialog = async () => ({ canceled: false, filePaths: [mediaDirectory] })
        }, mediaDirectory)
        await window.getByRole("button", { name: "Add folder", exact: true }).click()
        const source = window.locator('.drawer .selectElem[id="media"][draggable="true"]').filter({ hasText: "new-media" }).first()
        await expect(source).toBeVisible()

        async function dragMedia(target: Locator, x: number) {
            // Focus Mode refreshes asynchronously after history changes. Let its grid settle before starting the native drag.
            await window!.waitForTimeout(300)
            await expect(source).toBeVisible()
            await expect(target).toBeVisible()
            const from = await source.boundingBox()
            const to = await target.boundingBox()
            await window!.mouse.move(from!.x + from!.width / 2, from!.y + 30)
            await window!.mouse.down()
            await window!.mouse.move(from!.x + from!.width / 2 + 20, from!.y + 30, { steps: 5 })
            await window!.mouse.move(to!.x + x, to!.y + 30, { steps: 20 })
            await window!.mouse.move(to!.x + x + 1, to!.y + 30)
            await window!.mouse.up()
        }

        const slides = second.locator(".grid > .main")
        await dragMedia(slides.nth(1).locator(".selectElem"), 5)
        await expect(slides).toHaveCount(3)
        await expect(slides.nth(1)).toContainText("new-media")
        await expect(first.locator(".grid > .main")).toHaveCount(2)
        expect(await app.evaluate(() => JSON.stringify((globalThis as any).focusTestOutputs))).toBe(previousOutputs)

        // Undo restores the destination show, then right-edge drop adds after the last slide.
        await window.keyboard.press("Control+z")
        await expect(slides).toHaveCount(2)
        const lastSlide = slides.nth(1).locator(".selectElem")
        const box = await lastSlide.boundingBox()
        await dragMedia(lastSlide, box!.width - 5)
        await expect(slides).toHaveCount(3)
        await expect(slides.nth(2)).toContainText("new-media")
        expect(await app.evaluate(() => JSON.stringify((globalThis as any).focusTestOutputs))).toBe(previousOutputs)

        // Centre drop changes the existing slide's background without adding another slide.
        const centreSlide = slides.nth(0).locator(".selectElem")
        const centreBox = await centreSlide.boundingBox()
        await dragMedia(centreSlide, centreBox!.width / 2)
        await expect(slides).toHaveCount(3)
        await expect(slides.nth(0).locator(".background")).toBeVisible()
        expect(await app.evaluate(() => JSON.stringify((globalThis as any).focusTestOutputs))).toBe(previousOutputs)

        await window.screenshot({ path: "test-output/screenshots/focus-media.png" })
        await toggle.click()
        await expect(window.locator(".focusId")).toHaveCount(0)
        await expect(toggle).not.toHaveClass(/isActive/)
    } catch (error) {
        if (window) await window.screenshot({ path: "test-output/screenshots/focus-media-failed.png" })
        throw error
    } finally {
        const process = app.process()
        await Promise.race([app.close(), new Promise((resolve) => setTimeout(resolve, 5_000))]).catch(() => {})
        if (process && !process.killed) process.kill("SIGKILL")
        rmSync(directory, { recursive: true, force: true })
    }
})
