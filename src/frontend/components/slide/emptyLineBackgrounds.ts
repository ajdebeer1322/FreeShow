// Inspect the rendered text so HTML whitespace, editor placeholders and resolved
// dynamic values all behave alike. Keep the line itself (and its spacing) intact.
export function hideEmptyLineBackgrounds(node: HTMLElement) {
    function update() {
        for (const line of Array.from(node.children)) {
            if (!line.classList.contains("break") || line.classList.contains("chords")) continue

            const hasText = !!line.textContent?.replace(/[\s\u200B-\u200D\u2060\uFEFF]/g, "").length
            line.classList.toggle("emptyLineBackground", !hasText)
        }
    }

    update()
    const observer = new MutationObserver(update)
    // Ignore attributes: our class change must not trigger another update, and
    // suppressing the background must never change the saved inline line styles.
    observer.observe(node, { childList: true, characterData: true, subtree: true })

    return {
        destroy() {
            observer.disconnect()
        }
    }
}
