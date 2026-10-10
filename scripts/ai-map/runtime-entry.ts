// Test-only production entry. All imported product modules are unchanged.
// Exports make existing state/functions observable without editing src/.
import "../../src/frontend/main"
export * as stores from "../../src/frontend/stores"
export { get } from "svelte/store"
export { setOutput, toggleOutputs } from "../../src/frontend/components/helpers/output"
export { updateOut } from "../../src/frontend/components/helpers/showActions"
export { save } from "../../src/frontend/utils/save"
export { getDebugBuffer } from "../../src/frontend/components/helpers/debugLog"
export { AudioPlayer } from "../../src/frontend/audio/audioPlayer"
export * as scripture from "../../src/frontend/components/drawer/bible/scripture"
