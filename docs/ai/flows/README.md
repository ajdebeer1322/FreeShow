# User-action flow traces

Each trace separates source-derived steps from a bounded observation in Electron.

- [Clicking a slide](clicking-slide.md)
- [Next slide with Space](next-space.md)
- [Clearing all](clearing-all.md)
- [Setting a video background](video-background.md)
- [Opening an output](opening-output.md)
- [Editing a text box](editing-textbox.md)
- [Saving](saving.md)
- [Showing scripture](showing-scripture.md)
- [Playing audio](playing-audio.md)
- [Starting NDI](starting-ndi.md)

## Evidence method

[verified] [observations.json](observations.json) records the source revision, fixture state, environment and individual results. [debug-observation.json](debug-observation.json) captures the application's real Ctrl/Cmd+Shift+L recorder, including messages forwarded from output renderers. It is diagnostic evidence, not a complete execution trace.

[code] The [runtime build](../../../scripts/ai-map/runtime-build.mjs) writes an instrumented production app only to the ignored cache. Its test entry exposes existing renderer helpers/stores and a cached main wrapper exposes existing backend classes. Product modules are unchanged. This differs from an uninstrumented packaged release.

[verified] The probe used Xvfb at 1920×1080 and software rendering, isolated settings plus presentation data, ports 58510/58511, and a generated quiet WAV. It unset ELECTRON_RUN_AS_NODE and used no port 3000. Five actions used UI/keyboard interaction (slide click, Space, Escape, text editing, saving); five used existing helper/backend entry points. The debug panel's DOM box was hidden to avoid covering targets while the real recorder remained enabled.

[code] These are end-result observations for a single fixture. They do not verify every intermediate source step, precise fade timing, external Bible services, speakers, physical outputs, external NDI receivers, hardware capture or remote clients. Action elapsedMs includes polling/readiness/UI time and is not a performance contract.

## Repeat locally

Requires the repository's installed development dependencies and Linux display/native libraries. No new dependencies were added.

```bash
node scripts/ai-map/runtime-build.mjs
NODE_ENV=production env -u ELECTRON_RUN_AS_NODE xvfb-run -a -s '-screen 0 1920x1080x24' node scripts/ai-map/runtime.mjs
node scripts/ai-map/flows.mjs
npm run ai:check
```

[code] The runtime CLI reports unsuccessful steps and exits nonzero on failed observations. Screenshots/build files live in the ignored cache; temporary presentation data is deleted. Review changed observations before committing them. Use `node scripts/ai-map/flows.mjs` to regenerate curated prose/anchors after reviewing source behavior.
