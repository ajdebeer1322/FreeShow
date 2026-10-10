// Curated source traces; runtime evidence remains separate from static claims.
import path from "node:path"
import { loadModel, read, readJson, write, json, hash, slug, sourceLink } from "./lib.mjs"
const model=loadModel(),history=readJson("docs/ai/history/index.json"),decisions=history.tables.flatMap(file=>readJson(file)),observed=readJson("docs/ai/flows/observations.json",{observations:[]})
const refs=readJson("docs/ai/references.json",[]).filter(ref=>!ref.document.startsWith("docs/ai/flows/"))
const step=(file,needle,text)=>({file,needle,text})
const frontend="src/frontend/",electron="src/electron/",helpers=frontend+"components/helpers/"
const transport=[
    step(frontend+"utils/listeners.ts",'hasNewerUpdate("LISTENER_OUTPUTS", 1)',"The outputs subscription coalesces updates over a 1 ms debounce, then sends OUTPUT/OUTPUTS and related views."),
    step(electron+"output/helpers/OutputSend.ts",'if (msg.channel === "OUTPUTS")',"Electron forwards state to each real output renderer, narrowing OUTPUTS to its matching output ID; shared-render followers are skipped."),
    step(frontend+"utils/receivers.ts",'if (previousOutputs === newOutputs) return',"The output receiver deduplicates the content signature before writing its local outputs store; active is excluded from that signature.")
]
const rendering=[
    step(frontend+"components/output/Output.svelte","function updateSlideData(","Output resolves the show/temp slide and style/template data from its local stores."),
    step(frontend+"components/output/Output.svelte",'const updateLinesTime = $currentWindow === "output" ? 50 : 10',"Output delays line/slide commits by 50 ms in an output renderer, 10 ms elsewhere; clearing uses the separate zero-delay branch."),
    step(frontend+"components/output/layers/SlideContent.svelte","function scheduleAutoSizePrecompute(","SlideContent prepares item state and hidden auto-size probes before its show/transition state changes."),
    step(frontend+"components/slide/Textbox.svelte","const dispatch = createEventDispatcher<", "Textbox renders the item and can signal auto-size readiness to the parent; this does not prove that every item uses auto-size.")
]
const flows=[
 {id:"clicking-slide",title:"Clicking a slide",area:"presentation",findings:["F-008","F-009","F-010"],limits:"One ordinary two-slide show, one output, default style. Linked cards, reveals, project duplicates and rapid transition stress were not exercised.",steps:[
    step(frontend+"components/show/Slides.svelte","function slideClick(","The thumbnail handler remembers the explicit show/layout/index and expands a linked card when applicable."),
    step(frontend+"components/show/Slides.svelte",'setOutput("slide", { id: showId',"activateSlide checks locks/modifiers, custom actions and line/reveal state, then sends explicit presentation coordinates after a timeout."),
    step(helpers+"output.ts","export function setOutput(","setOutput resolves bindings/explicit destinations and updates the active outputs' live content."),
    step(helpers+"showActions.ts","export function updateOut(","updateOut applies slide extras such as background, overlays, actions and timers."),...transport,...rendering
 ]},
 {id:"next-space",title:"Next slide with Space",area:"presentation",findings:["F-008","F-010"],limits:"The second ordinary slide was observed. Linked-output holds, end-of-project behavior and timeline interception remain source-only.",steps:[
    step(frontend+"utils/shortcuts.ts",'" ": (e: KeyboardEvent)',"The Space shortcut rejects active context/timeline cases, prevents default and calls OutputHelper.advanceOutputs."),
    step(helpers+"OutputHelper.ts","static advanceOutputs(","The renderer OutputHelper computes linked waiting outputs, clears left-behind cards and steps each eligible output."),
    step(helpers+"OutputHelper.ts","static advanceOutput(","Per-output advancement resolves the next item/reveal/line and invokes the common playback path."),
    step(helpers+"output.ts","export function setOutput(","The selected destination receives the next live slide through the existing setOutput path."),...transport,...rendering
 ]},
 {id:"clearing-all",title:"Clearing all",area:"overlays-effects-messages",findings:["F-016"],limits:"Escape cleared the live slide and background; old lyric text disappeared. Locked overlays, active microphones, restores and focus-mode cache semantics were not exercised.",steps:[
    step(frontend+"utils/shortcuts.ts","setTimeout(clearAll)","Escape schedules clearAll through preview shortcut routing."),
    step(frontend+"components/output/clear.ts","export function clearAll(","clearAll checks output locks and interaction state, resets slide position cache and detects an already-cleared presentation."),
    step(frontend+"components/output/clear.ts","storeCache()", "Before clearing it retains active output/audio content for restore, then stops the active timeline."),
    step(frontend+"components/output/clear.ts","clearMessages(getAllActiveOutputIds())", "The clear sequence removes background/slide/messages, clears audio/timers and clears overlays except those retained by the locked-overlay rule."),
    step(helpers+"output.ts","export function setOutput(","Each visual clear passes through common output routing rather than removing output windows."),...transport,
    step(frontend+"components/output/Output.svelte","isSlideClearing = !slide || !slideActive", "Output marks the clearing state before committing null so transition conditions can avoid redisplaying old content.")
 ]},
 {id:"video-background",title:"Setting a video background",area:"media-video",findings:[],limits:"A muted local MP4 decoded in the output (readyState 4, not paused). The helper was invoked directly; drawer selection, network media, audible audio, drift across outputs and soft loops were not verified.",steps:[
    step(frontend+"components/show/VideoShow.svelte",'setOutput("background",',"The video preview's play path sends the media path/style to setOutput as a background."),
    step(helpers+"output.ts",'if (type === "background") {',"setOutput reconciles foreground/PDF/PPT content and applies background normalization before writing live state."),...transport,
    step(frontend+"components/output/Output.svelte","<!-- background -->","The background layer is rendered subject to output layers and scene visibility."),
    step(frontend+"components/output/layers/Background.svelte","function createBackground()", "Background manages two fading media slots, load fallback and rapid-change retry timers."),
    step(frontend+"components/output/layers/BackgroundMedia.svelte","<Media {outputId}","BackgroundMedia passes the resolved path/style and fading context to the media layer."),
    step(frontend+"components/media/Video.svelte","syncVideoToAudio(video,", "Video subscribes to playback state and uses videoSync correction against the associated clock."),
    step(frontend+"components/media/Video.svelte",'<video class="media"',"The native video element receives the encoded file source, loop state and loadedmetadata handler.")
 ]},
 {id:"opening-output",title:"Opening an output",area:"startup",findings:["F-014"],limits:"A real output renderer and initial state handshake were observed through toggleOutputs. Physical monitor positioning, fullscreen, multiple displays, capture-only OSR and stage-output switching were not tested.",steps:[
    step(frontend+"components/main/Top.svelte","function toggleOutput(", "The top output button resolves confirmation/force state before calling the shared toggle helper."),
    step(helpers+"output.ts","export function toggleOutputs(","The helper resolves IDs, filters enabled outputs and sends OUTPUT/TOGGLE_OUTPUTS with state and positioning options."),
    step(electron+"index.ts","ipcMain.on(OUTPUT, OutputHelper.receiveOutput)","Electron dispatches the channel to its OutputHelper, distinct from the renderer class of the same name."),
    step(electron+"output/OutputHelper.ts","TOGGLE_OUTPUTS: (data:","The message handler delegates opening/hiding to OutputVisibility."),
    step(electron+"output/helpers/OutputVisibility.ts","static toggleOutput(","Visibility finds or creates the output, resolves bounds and shows/hides the physical window."),
    step(electron+"output/helpers/OutputLifecycle.ts","static async createOutput(","Lifecycle waits for GPU state, creates/registers a BrowserWindow and schedules capture initialization."),
    step(frontend+"utils/listeners.ts",'send(OUTPUT, ["OUTPUTS"], get(outputs))',"The output handshake sends the initial stores and matching output data, separate from later subscriptions."),
    step(frontend+"MainOutput.svelte","}, 2000)","MainOutput gates ordinary Output mounting for 2,000 ms while preloading its font; stage output follows its own branch.")
 ]},
 {id:"editing-textbox",title:"Editing a text box",area:"editing-history",findings:["F-001","F-004"],limits:"Contenteditable input changed showsCache and created history entries. The ordinary text mutation was observed; undo/redo round trips, IME composition, splitting and styled selections remain source-only.",steps:[
    step(frontend+"components/edit/Editor.svelte","<SlideEditor />","The Edit view selects the existing slide editor for an ordinary show."),
    step(frontend+"components/edit/editbox/EditboxLines.svelte","bind:innerHTML={html}","EditboxLines binds contenteditable HTML while retaining explicit item/slide references and composition state."),
    step(frontend+"components/edit/editbox/EditboxLines.svelte","setTimeout(updateLines, 10)","A changed HTML binding schedules line reconstruction after 10 ms outside composition."),
    step(frontend+"components/edit/editbox/EditboxLines.svelte",'history({ id: "SHOW_ITEMS", newData: { key: "lines"',"The text mutation submits SHOW_ITEMS with the explicit show ID, slide IDs, item indexes and line data."),
    step(helpers+"history.ts","export function history(","History captures old/new data, suppresses no-change entries and dispatches reversible mutations."),
    step(helpers+"historyActions.ts","data.remember = { showId: data.showId", "The show-item handler remembers the explicit show destination and updates item values through _show."),
    step(frontend+"utils/save.ts","export function unsavedUpdater()", "Persistent-store subscriptions mark edits unsaved for the later save path.")
 ]},
 {id:"saving",title:"Saving",area:"stores-saving",findings:["F-008"],limits:"Control+S wrote a .show containing the edited text in the isolated data directory. A saved-status acknowledgement is not treated as a durability guarantee; crash recovery, cloud sync, backups and failure reporting were not exercised.",steps:[
    step(frontend+"utils/shortcuts.ts","s: () => save()", "The Ctrl/Cmd+S mapping invokes the shared renderer save function."),
    step(frontend+"utils/save.ts","export function save(","Save refreshes output-name synchronization/autosave state and refuses overlapping saves."),
    step(frontend+"utils/save.ts","showsCache: get(showsCache)","The payload includes named store groups and separate full-show/scripture caches; outputs are sanitized before serialization."),
    step(frontend+"utils/save.ts","sendMain(Main.SAVE, saveData)","Renderer sends MAIN/SAVE after assembling the snapshot."),
    step(electron+"IPC/responsesMain.ts","[Main.SAVE]: (a) => save(a)","The typed main handler dispatches to Electron persistence."),
    step(electron+"data/save.ts","await safeStoreSet(store, newData, key)","Electron compares and writes changed named store files, retaining tracked edit timestamps for cloud comparisons."),
    step(electron+"data/save.ts",'String(value.name || id) + ".show"',"Full shows are written separately as [id, value] JSON under the presentation data directory."),
    step(frontend+"IPC/responsesMain.ts","[ToMain.SAVE2]: (a) => saveComplete(a)","The SAVE2 acknowledgement reaches saveComplete, which updates status and processes custom save triggers.")
 ]},
 {id:"showing-scripture",title:"Showing scripture",area:"scripture",findings:["F-007","F-017"],limits:"A seeded local Bible and playScripture produced id=temp and rendered the verse. The drawer action, external Bible APIs, licensing attribution, multilingual templates and multiple selections were not exercised.",steps:[
    step(frontend+"components/drawer/bible/Scripture.svelte","on:click={playScripture}","The scripture display/update button invokes playScripture with the current selection."),
    step(frontend+"components/drawer/bible/scripture.ts","export async function getActiveScripturesContent(","The active drawer tab, Bible definition and reference determine versions/books/chapters/verses to load."),
    step(frontend+"components/drawer/bible/scripture.ts","export async function loadJsonBible(","Bible loading caches local or API instances; the probe seeded a local cache to avoid an external service."),
    step(frontend+"components/drawer/bible/scripture.ts","export async function playScripture()", "playScripture resolves selected content, builds template items/dynamic values and records usage/history."),
    step(frontend+"components/drawer/bible/scripture.ts",'setOutput("slide", { id: "temp",',"Scripture enters ordinary output routing as a temporary slide with items, neighboring previews, attribution and translation context."),...transport,...rendering
 ]},
 {id:"playing-audio",title:"Playing audio",area:"audio",findings:[],limits:"AudioPlayer.start returned true and the HTMLAudioElement clock advanced beyond 0.1 s for a generated quiet WAV. The UI button and speaker audibility, hardware devices, multichannel routing and playlists were not tested.",steps:[
    step(frontend+"components/show/AudioPreview.svelte","AudioPlayer.start(path, { name }", "The preview play button uses AudioPlayer.start with pause-if-playing and selected start time."),
    step(frontend+"audio/audioPlayer.ts","static async start(","Start resolves a unique playback key/path, guards locks/loading and coordinates existing playback/fades."),
    step(frontend+"audio/audioPlayer.ts","const audio = new Audio(encodeFilePath(path))", "AudioPlayer creates a native HTMLAudioElement and waits for readiness/error."),
    step(frontend+"audio/audioPlayer.ts","a[resolvedKey] = {", "The playingAudio entry records the actual audio element and occurrence/playlist metadata."),
    step(frontend+"audio/audioPlayer.ts","private static initAudio(","Initialization starts playback, emits audio_start and attaches analysis/routing/processing."),
    step(frontend+"audio/audioPlayer.ts","AudioRoutingManager.getInstance().updateRoutingNodes()", "The shared audio routing manager updates processing nodes; clock advancement alone cannot verify audible/device output.")
 ]},
 {id:"starting-ndi",title:"Starting NDI",area:"capture",findings:[],limits:"The backend sender and capture toggle were started directly; worker status reported unconnected with zero connections. No external receiver, delivered frames, NDI UI toggle, GPU OSR, OMT or Blackmagic hardware was verified.",steps:[
    step(frontend+"components/settings/tabs/Outputs.svelte",'const recreateKeys = ["transparent", "invisible", "ndi"',"Changing NDI/output capture properties follows the existing settings update/recreate path."),
    step(electron+"output/helpers/OutputLifecycle.ts","if (output.ndi) {", "Output creation initializes a named NDI sender and applies its configured sender data."),
    step(electron+"ndi/NdiSender.ts","static async createSenderNDI(","The main-process proxy creates/reuses a worker, records provisional sender state and posts a create message."),
    step(electron+"ndi/ndiWorker.ts","const sender = await grandiose.send(","The NDI adapter loads the native library and creates the actual sender inside the shared worker engine."),
    step(electron+"capture/senderWorker.ts",'port.postMessage({ type: "status",',"Worker polling reports actual connection state back to the proxy; create failure removes the provisional sender."),
    step(electron+"capture/helpers/CaptureLifecycle.ts","static startCapture(","Capture validates the window/toggles, starts transmitting and selects paint-driven OSR or the normal capture loop."),
    step(electron+"ndi/NdiSender.ts","static sendVideoBufferNDI(","Captured frames can be transferred with explicit buffer offsets/lengths to worker video delivery."),
    step(electron+"ndi/NdiSender.ts",'toApp("NDI", { channel: "SEND_DATA"', "NDI status propagates back to the operator renderer and can update capture frame rate.")
 ]}
]
const companion="https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md"
for(const flow of flows) {
    const document=`docs/ai/flows/${flow.id}.md`,files=[...new Set(flow.steps.map(s=>s.file))]
    const steps=flow.steps.map((s,index)=>{
        const source=read(s.file),line=source.split(/\r?\n/).findIndex(line=>line.includes(s.needle))+1
        if(!line)throw new Error(`Missing flow anchor ${s.file}: ${s.needle}`)
        const ref={document,file:s.file,line,excerpt:s.needle,fileHash:hash(source)};refs.push(ref)
        return `${index+1}. [code] ${s.text} (${sourceLink(ref,document)})`
    })
    const observation=observed.observations.find(item=>item.id===flow.id),related=decisions.filter(record=>files.includes(record.file))
    const dependencies={sourceRevision:model.manifest.sourceRevision,files,decisions:related.map(record=>({id:record.id,file:record.file,line:record.line,document:record.document}))}
    write(`docs/ai/flows/${flow.id}.dependencies.json`,json(dependencies))
    const verified=observation?.status==="verified"
    write(document,`# ${flow.title}\n\n## Observed result\n\n[${verified?"verified":"guess"}] ${verified?observation.method:"Runtime observation absent or unsuccessful; inspect observations.json"}. Evidence: [observation data](observations.json), action ID \`${flow.id}\`, recorded ${observed.observedAt || "not yet"}.\n\n[code] Verification scope: ${flow.limits}\n\n[code] Source steps below explain the current implementation. Their intermediate calls are not all individually instrumented; an observed end result does not upgrade every step to verified.\n\n## File-by-file sequence\n\n${steps.join("\n\n")}\n\n## State, messages and history\n\n[code] Read [${flow.area}](../subsystems/${flow.area}.md) for invariants and dependency maps. Each traced file has complete import/store/message/timing evidence:\n\n${files.map(file=>`- [${file}](../generated/files/${slug(file)}.md)`).join("\n")}\n\n[code] ${related.length} related decision records: [full IDs and locations](${flow.id}.dependencies.json); representative records:\n\n${related.filter(record=>record.sourcedWhy || record.category==="fork-feature" || record.category==="hotspot").slice(0,5).map(record=>`- [${record.confidence}] [${record.id}](${path.relative(path.dirname(document),record.document)}).`).join("\n")}\n\n[code] ${flow.findings.length?`Companion findings ${flow.findings.map(id=>`[${id}](${companion})`).join(", ")} refer to the later fixed snapshot; use them as context, not runtime evidence for this base.`:"No specific companion finding assigned."} See the [evidence method](README.md) before reusing these observations.\n`)
}
write("docs/ai/references.json",json(refs))
write("docs/ai/flows/index.json",json({sourceRevision:model.manifest.sourceRevision,flows:flows.map(flow=>({id:flow.id,title:flow.title,document:`docs/ai/flows/${flow.id}.md`,verified:observed.observations.find(item=>item.id===flow.id)?.status==="verified"}))}))
write("docs/ai/flows/README.md",`# User-action flow traces\n\nEach trace separates source-derived steps from a bounded observation in Electron.\n\n${flows.map(flow=>`- [${flow.title}](${flow.id}.md)`).join("\n")}\n\n## Evidence method\n\n[verified] [observations.json](observations.json) records the source revision, fixture state, environment and individual results. [debug-observation.json](debug-observation.json) captures the application's real Ctrl/Cmd+Shift+L recorder, including messages forwarded from output renderers. It is diagnostic evidence, not a complete execution trace.\n\n[code] The [runtime build](../../../scripts/ai-map/runtime-build.mjs) writes an instrumented production app only to the ignored cache. Its test entry exposes existing renderer helpers/stores and a cached main wrapper exposes existing backend classes. Product modules are unchanged. This differs from an uninstrumented packaged release.\n\n[verified] The probe used Xvfb at 1920×1080 and software rendering, isolated settings plus presentation data, ports 58510/58511, and a generated quiet WAV. It unset ELECTRON_RUN_AS_NODE and used no port 3000. Five actions used UI/keyboard interaction (slide click, Space, Escape, text editing, saving); five used existing helper/backend entry points. The debug panel's DOM box was hidden to avoid covering targets while the real recorder remained enabled.\n\n[code] These are end-result observations for a single fixture. They do not verify every intermediate source step, precise fade timing, external Bible services, speakers, physical outputs, external NDI receivers, hardware capture or remote clients. Action elapsedMs includes polling/readiness/UI time and is not a performance contract.\n\n## Repeat locally\n\nRequires the repository's installed development dependencies and Linux display/native libraries. No new dependencies were added.\n\n\`\`\`bash\nnode scripts/ai-map/runtime-build.mjs\nNODE_ENV=production env -u ELECTRON_RUN_AS_NODE xvfb-run -a -s '-screen 0 1920x1080x24' node scripts/ai-map/runtime.mjs\nnode scripts/ai-map/flows.mjs\nnpm run ai:check\n\`\`\`\n\n[code] The runtime CLI reports unsuccessful steps and exits nonzero on failed observations. Screenshots/build files live in the ignored cache; temporary presentation data is deleted. Review changed observations before committing them. Use \`node scripts/ai-map/flows.mjs\` to regenerate curated prose/anchors after reviewing source behavior.\n`)
console.log(`Wrote ${flows.length} flow traces; ${refs.length} total source anchors.`)
