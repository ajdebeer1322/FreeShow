import { createClassComponent } from "svelte/legacy"

// Svelte 5 components are no longer classes. The line background tests mount single components
// and update their props with $set, so they use the Svelte 4 class API from svelte/legacy.
export function mountLegacy(component: any, options: { target: Element; props?: Record<string, any> }) {
    return createClassComponent({ component, ...options })
}
