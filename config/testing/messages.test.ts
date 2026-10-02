import { expect, test } from "@playwright/test"
import { _electron as electron, type ElectronApplication, type Page } from "playwright"
import { mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

test("Messages operate over live slides, render literal fields, animate, and save definitions only", async () => {
    test.setTimeout(180_000)
    const directory = mkdtempSync(join(tmpdir(), "freeshow-messages-"))
    let app: ElectronApplication
    let window: Page | undefined
    const launch = async () => {
        app = await electron.launch({ args: [".", "--no-sandbox"], cwd: process.env.FS_TEST_APP_PATH || process.cwd(), env: { ...process.env, NODE_ENV: process.env.FS_TEST_NODE_ENV || "production", FS_MOCK_STORE_PATH: join(directory, "settings") } })
        await app.evaluate(({ dialog, ipcMain }, dataDirectory) => {
            dialog.showOpenDialog = async () => ({ canceled: false, filePaths: [dataDirectory] })
            ipcMain.on("OUTPUT", (_event, message) => {
                if (message.channel === "OUTPUTS") (globalThis as any).messageTestOutputs = message.data
            })
        }, directory)
        await new Promise((resolve) => setTimeout(resolve, 5_000))
        window = undefined
        await expect
            .poll(async () => {
                for (const page of app.windows()) {
                    if ((await page.locator(".popup button.start, .top, #focus_mode_button").count()) > 0) {
                        window = page
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
    }
    const close = async () => {
        const process = app.process()
        await Promise.race([app.close(), new Promise((resolve) => setTimeout(resolve, 5_000))]).catch(() => {})
        if (process && !process.killed) process.kill("SIGKILL")
    }
    const state = () => app.evaluate(() => (globalThis as any).messageTestOutputs || {})
    const live = async () => Object.values(await state()).flatMap((output: any) => Object.values(output.out?.messages || {})) as any[]

    try {
        await launch()
        await window!.getByText("New project", { exact: true }).first().click()
        await window!.getByText("New show").first().click()
        await window!.locator("#name").fill("Message test lyrics")
        await window!.getByText("Quick Lyrics").click()
        await window!.getByPlaceholder("[Verse]").fill("[Verse]\nFirst lyric\n\n[Chorus]\nSecond lyric")
        await window!.getByTestId("create.show.popup.new.show").click()
        const slides = window!.locator("#showArea .grid > .main")
        await expect(slides).toHaveCount(2)
        await slides.first().click()
        await expect.poll(async () => Object.values(await state()).some((output: any) => output.out?.slide)).toBe(true)
        const original = Object.values(await state()).map((output: any) => ({ slide: output.out?.slide, background: output.out?.background, overlays: output.out?.overlays }))

        const panel = window!.getByTestId("messages-panel")
        await panel.getByRole("button", { name: "+ New", exact: true }).click()
        await panel.getByLabel("Child name", { exact: true }).fill("Emma")
        await panel.getByRole("button", { name: "Show", exact: true }).click()
        await expect.poll(async () => (await live()).length).toBe(1)
        const first = (await live())[0]
        expect(first.values["token:Child name"]).toBe("Emma")
        expect(Object.values(await state()).map((output: any) => ({ slide: output.out?.slide, background: output.out?.background, overlays: output.out?.overlays }))).toEqual(original)

        // Both the preview and a real output window must render the notice through the normal output renderer.
        await expect(window!.locator(".message-design").first()).toContainText("Parents of Emma, please come to the back.")
        let outputWindow: Page | undefined
        await expect
            .poll(async () => {
                for (const page of app.windows()) {
                    if (page !== window && (await page.locator(".message-design").count())) {
                        outputWindow = page
                        return true
                    }
                }
                return false
            })
            .toBe(true)
        await expect(outputWindow!.locator(".message-design")).toContainText("Emma")
        await panel.getByLabel("Child name", { exact: true }).fill("<b>Noah</b> & {time}")
        expect((await live())[0].revision).toBe(first.revision)
        await expect(outputWindow!.locator(".message-design")).toContainText("Emma")
        await panel.getByRole("button", { name: "Update", exact: true }).click()
        await expect.poll(async () => (await live())[0]?.revision).not.toBe(first.revision)
        await expect(outputWindow!.locator(".message-design").last()).toContainText("Parents of <b>Noah</b> & {time}, please come to the back.")
        await expect(outputWindow!.locator(".message-design b")).toHaveCount(0)
        await slides.nth(1).click()
        await expect.poll(async () => Object.values(await state()).some((output: any) => output.out?.slide?.index === 1)).toBe(true)
        expect((await live())[0].values["token:Child name"]).toBe("<b>Noah</b> & {time}")
        await panel.getByRole("button", { name: "Hide", exact: true }).click()
        await expect.poll(async () => (await live()).length).toBe(0)
        await expect(outputWindow!.locator(".message-design")).toHaveCount(0)
        expect(Object.values(await state()).some((output: any) => output.out?.slide?.index === 1)).toBe(true)

        // Save a styled scrolling template, then verify undo and redo use native history.
        await panel.getByRole("button", { name: "Edit message", exact: true }).click()
        await panel.getByLabel("Name", { exact: true }).fill("Pickup ticker")
        await panel.getByLabel("Wording", { exact: true }).fill("Parents of {Child name}, collect your child from {Room}.")
        await panel.getByLabel("Banner background", { exact: true }).fill("#263a58")
        await panel.getByLabel("Scroll direction", { exact: true }).selectOption("right_left")
        await panel.getByLabel("Seconds per pass", { exact: true }).fill("2")
        await panel.getByLabel("Hide after (seconds; 0 = manual)", { exact: true }).fill("3")
        await panel.getByLabel("Repeat fade in and out", { exact: true }).check()
        await panel.getByLabel("Visible hold (seconds)", { exact: true }).fill("1")
        await panel.getByRole("button", { name: "Save message", exact: true }).click()
        await expect(panel.getByLabel("Saved message", { exact: true })).toHaveValue(first.id)
        await expect(panel.getByLabel("Room", { exact: true })).toBeVisible()
        await window!.keyboard.press("Control+z")
        await expect(panel.getByLabel("Room", { exact: true })).toHaveCount(0)
        await window!.keyboard.press("Control+Shift+z")
        await expect(panel.getByLabel("Room", { exact: true })).toBeVisible()
        await panel.getByLabel("Child name", { exact: true }).fill("Emma")
        await panel.getByLabel("Room", { exact: true }).fill("Room 3")
        await panel.getByRole("button", { name: "Show", exact: true }).click()
        await expect.poll(async () => (await live()).length).toBe(1)
        await expect(outputWindow!.locator(".message-design .messageScroll")).toBeVisible()
        const wrapper = outputWindow!.locator(".message-design .scrollWrapper")
        const transform = await wrapper.evaluate((node) => getComputedStyle(node).transform)
        await window!.waitForTimeout(300)
        expect(await wrapper.evaluate((node) => getComputedStyle(node).transform)).not.toBe(transform)
        const animations = await outputWindow!.locator(".message-design").evaluate((node) => node.getAnimations().map((animation) => animation.effect?.getTiming().iterations))
        expect(animations).toContain(Infinity)
        await outputWindow!.locator(".message-design").evaluate((node) => {
            ;(window as any).messageCycleAnimation = node.getAnimations()[0]
        })
        await slides.first().click()
        await expect.poll(async () => Object.values(await state()).some((output: any) => output.out?.slide?.index === 0)).toBe(true)
        expect(await outputWindow!.locator(".message-design").evaluate((node) => node.getAnimations()[0] === (window as any).messageCycleAnimation)).toBe(true)
        await expect.poll(async () => (await live()).length).toBe(0)

        // Every direction, both repeat modes, and both start modes use the native measured text viewport.
        for (const [direction, repeat, offscreen] of [
            ["left_right", false, true],
            ["bottom_top", true, false],
            ["top_bottom", true, true],
            ["right_left", false, false]
        ] as const) {
            await expect(outputWindow!.locator(".message-design")).toHaveCount(0)
            await panel.getByRole("button", { name: "Edit message", exact: true }).click()
            await panel.getByLabel("Scroll direction", { exact: true }).selectOption(direction)
            await panel.getByLabel("Repeat scrolling", { exact: true }).setChecked(repeat)
            await panel.getByLabel("Start outside the text box", { exact: true }).setChecked(offscreen)
            await panel.getByLabel("Repeat fade in and out", { exact: true }).uncheck()
            await panel.getByLabel("Hide after (seconds; 0 = manual)", { exact: true }).fill("0")
            await panel.getByRole("button", { name: "Save message", exact: true }).click()
            await panel.getByRole("button", { name: "Show", exact: true }).click()
            const scroller = outputWindow!.locator(".message-design .scrollWrapper")
            await expect(scroller).toBeVisible()
            const before = await scroller.evaluate((node) => getComputedStyle(node).transform)
            await window!.waitForTimeout(250)
            expect(await scroller.evaluate((node) => getComputedStyle(node).transform)).not.toBe(before)
            expect(await scroller.evaluate((node) => getComputedStyle(node).animationIterationCount)).toBe(repeat ? "infinite" : "1")
            expect(await outputWindow!.locator(".message-design .messageScroll").evaluate((node) => getComputedStyle(node).maskImage)).toContain("linear-gradient")
            await panel.getByRole("button", { name: "Hide", exact: true }).click()
        }

        // Focus Mode keeps the panel and the native artwork editor available.
        await window!.locator("#focus_mode_button").click()
        await panel.getByRole("button", { name: "Edit design", exact: true }).click()
        await expect(window!.locator(".editArea .editItem")).toHaveCount(2)
        await window!.getByRole("button", { name: "Back to Messages", exact: true }).click()
        await expect(window!.locator("#focus_mode_button")).toHaveClass(/isActive/)
        await expect(panel.getByLabel("Room", { exact: true })).toHaveValue("Room 3")
        await window!.screenshot({ path: "test-output/screenshots/messages.png" })
        await window!.locator("#focus_mode_button").click()
        await panel.getByRole("button", { name: "Edit message", exact: true }).click()
        await panel.getByLabel("Hide after (seconds; 0 = manual)", { exact: true }).fill("0")
        await panel.getByRole("button", { name: "Save message", exact: true }).click()
        await panel.getByRole("button", { name: "Show", exact: true }).click()
        await expect.poll(async () => (await live()).length).toBe(1)
        await window!.keyboard.press("Control+s")
        await window!.waitForTimeout(2000)
        await close()
        await launch()
        const restored = window!.getByTestId("messages-panel")
        await restored.getByRole("button", { name: /Messages/ }).click()
        await expect(restored.getByLabel("Saved message", { exact: true }).locator("option:checked")).toHaveText("Pickup ticker")
        await expect(restored.getByLabel("Room", { exact: true })).toBeVisible()
        expect(await live()).toHaveLength(0)
        await expect(restored.getByRole("button", { name: "Hide", exact: true })).toBeDisabled()
    } catch (error) {
        if (window) await window.screenshot({ path: "test-output/screenshots/messages-failed.png" })
        throw error
    } finally {
        if (app!) await close()
        rmSync(directory, { recursive: true, force: true })
    }
})
