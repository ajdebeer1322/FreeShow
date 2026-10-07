# FreeShow: repository reference for AI agents

This is a source-navigation and change-planning reference, not end-user documentation. Paths below are repository-relative. Read the actual implementation before editing; this map describes the checkout at FreeShow `1.6.6-beta.4` (upstream tag commit `1ed8ffa3`) plus the continuous Show view and Messages changes documented below. Keep this file synchronized when architecture or behavior changes.

## Identity and execution boundaries

- Application: FreeShow, GPL-3.0, an Electron presentation application for lyrics, images, videos, scripture, audio, overlays, stage displays, remote control, and external output integrations.
- Upstream: `ChurchApps/FreeShow`. This checkout was cloned from the fork `ajdebeer1322/FreeShow`; verify `git remote -v` before publishing anything.
- Stack in `package.json`: Svelte 3, TypeScript 4.9, Vite 4, Electron 37; use the lockfile rather than assuming latest APIs.
- Four code boundaries: Electron main process (`src/electron`), renderer (`src/frontend`), browser clients served by the app (`src/server`), and shared contracts (`src/types`).
- Electron owns filesystem access, app windows, devices, native modules, servers, and persistence. The renderer owns reactive UI, editing/history, and presentation decisions. Shared IPC contracts connect them. Browser clients have their own entrypoints and are not the desktop renderer.

## Root and directory map

| Path                                               | Contents and when to inspect                                                                                            |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `package.json`, `package-lock.json`                | Runtime/development dependencies, script order, Electron entrypoint (`build/electron/index.js`).                        |
| `vite.config.mjs`                                  | Desktop renderer dev server (127.0.0.1:3000) and production IIFE bundle in `public/build`.                              |
| `src/types/`                                       | Show, project, output, settings, history, stage, audio, input, calendar, draw, scripture, socket, AI and IPC contracts. |
| `src/frontend/main.ts`, `App.svelte`               | Renderer bootstrap, main/output/PDF window selection, global event wiring.                                              |
| `src/frontend/MainLayout.svelte`                   | Desktop pane composition: top/navigation, project sidebar, center, output preview, bottom drawer.                       |
| `src/frontend/MainOutput.svelte`                   | Separate presentation output renderer.                                                                                  |
| `src/frontend/stores.ts`                           | Central Svelte state. Start here to find a feature's state ownership.                                                   |
| `src/frontend/classes/`                            | Model/helper classes including show construction/access.                                                                |
| `src/frontend/utils/`                              | Startup, store listeners, persistence, IPC helpers, keyboard shortcuts, profiles, language, cloud sync.                 |
| `src/frontend/values/`                             | Menu/tab definitions, icons and other declarative UI values.                                                            |
| `src/frontend/components/`                         | Desktop UI and renderer helpers (detailed map below).                                                                   |
| `src/frontend/show/slides.ts`                      | Slide operations shared with editing workflows.                                                                         |
| `src/frontend/converters/`                         | Import/conversion logic, lyrics text conversion and PowerPoint conversion.                                              |
| `src/frontend/audio/`                              | Renderer audio handling, effects and routing.                                                                           |
| `src/frontend/media/`                              | Camera/media managers.                                                                                                  |
| `src/frontend/ai/`                                 | AI manager, LLM/STT UI and orchestration, scripture detection/reference parsing.                                        |
| `src/frontend/IPC/`                                | Typed renderer-to-main requests and renderer-side response dispatch.                                                    |
| `src/electron/index.ts`, `preload.ts`              | Electron bootstrap/lifecycle and exposed `window.api` bridge.                                                           |
| `src/electron/IPC/`                                | Main-process IPC registration and handlers.                                                                             |
| `src/electron/data/`                               | Stores, save/load, backups, import/export, thumbnails, media download and provider persistence.                         |
| `src/electron/utils/`                              | File paths, show files, init, requests, menu/window options, GPU, updater, MIDI/OSC and other system helpers.           |
| `src/electron/output/`                             | Output windows and helpers, including PowerPoint support.                                                               |
| `src/electron/capture/`                            | Capture coordination and shared native sender pipeline.                                                                 |
| `src/electron/ndi/`, `omt/`, `blackmagic/`         | Native video receiving/sending and integration-specific formats/buffers.                                                |
| `src/electron/streaming/`                          | Streaming integrations including RTMP/WebRTC.                                                                           |
| `src/electron/audio/`, `timecode/`                 | Main-process audio/device/timecode facilities.                                                                          |
| `src/electron/cloud/`                              | Cloud/Drive sync, ledgers, tombstones and synchronization managers.                                                     |
| `src/electron/contentProviders/`                   | Provider contracts and Canva, ChurchApps, Planning Center, OnStage, AmazingLife implementations.                        |
| `src/electron/ai/`                                 | Main-process AI providers, model/setup and STT support.                                                                 |
| `src/server/remote/`                               | Remote UI (including tablet layouts), projects/shows/media/scripture/edit controls.                                     |
| `src/server/stage/`                                | Stage display client and item rendering.                                                                                |
| `src/server/controller/`, `output_stream/`, `cam/` | Controller, output-stream viewer and camera client.                                                                     |
| `src/server/common/`                               | Shared browser-client components/utilities.                                                                             |
| `public/`                                          | HTML entrypoint, global styles, languages, themes and static assets.                                                    |
| `scripts/`                                         | Build orchestration, development startup, server compilation, postbuild and release utilities.                          |
| `config/typescript/`, `config/building/`           | TypeScript targets and Electron packaging/build configuration.                                                          |
| `config/testing/`, `linting/`, `formatting/`       | Vitest, Playwright Electron tests, ESLint, stylelint and Prettier configuration.                                        |
| `build/`, `public/build/`, `dist/`                 | Generated output; do not hand-edit as the source of a feature.                                                          |
| `test-output/`, `test-results/`                    | Ignored screenshots/reports; not implementation files.                                                                  |

## Desktop UI location map

| Task                                         | Primary files/directories                                                                                                          |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Change overall panes or which mode renders   | `MainLayout.svelte`; `components/show/Show.svelte`.                                                                                |
| Project sidebar/tree                         | `components/show/Projects.svelte`, `ProjectList.svelte`, `ProjectContentList.svelte`, `project.ts`.                                |
| Show headers, notes, groups and layouts      | `components/show/ShowHeader.svelte`, `ShowNotes.svelte`, `ShowTools.svelte`, `tools/`; locate layout components with `rg --files`. |
| Normal Show project view / slide grids       | `components/show/Show.svelte`, `show/focus/FocusMode.svelte` (`normalView`), `components/show/Slides.svelte`.                                                                                                   |
| Focus Mode continuous project list           | `components/show/focus/FocusMode.svelte`, `FocusItem.svelte`, `focus.ts`.                                                          |
| Thumbnail appearance, badges and selections  | `components/slide/Slide.svelte` and neighbors; `components/system/SelectElem.svelte`.                                              |
| Media/image/video/PDF/audio preview          | `components/show/media/`, `pdf/`, `AudioPreview.svelte`; `components/media/`.                                                      |
| Bottom drawer tabs, open/closed size, search | `components/drawer/Drawer.svelte`, `Content.svelte`, `Navigation.svelte`; `values/tabs.ts`.                                        |
| Media library, folders and thumbnails        | `components/drawer/` and `components/media/`; search `mediaFolders`, `MediaLoader`, `VirtualList`.                                 |
| Show creation popup                          | `components/main/popups/createShow/CreateShow.svelte`; `converters/txt.ts`; `classes/Show.ts`.                                     |
| Editing text/items/slide styles              | `components/edit/`; `show/slides.ts`; history helpers.                                                                             |
| Context menus and action dispatch            | `components/context/menuClick.ts` and context components/definitions.                                                              |
| Presentation preview and rendered output     | `components/output/`; `MainOutput.svelte`; `helpers/output.ts`, `OutputHelper.ts`, `showActions.ts`.                               |
| Actions, timers and scheduled behaviors      | `components/actions/`, `components/timeline/`; shared output/action helpers.                                                       |
| Drawing/stage/settings/export UI             | `components/draw/`, `stage/`, `settings/`, `export/`.                                                                              |
| Search and first-run guide                   | `components/quicksearch/`, `guide/`, `main/popups/`.                                                                               |
| Reusable UI primitives                       | `components/inputs/` (MaterialButton, text inputs, dropdowns etc.), `input/`, `system/`.                                           |
| Translation and icons                        | `components/helpers/T.svelte`, `utils/language.ts`, `public/lang/en.json`, `values/` icon definitions.                             |

## Bootstrap and IPC

1. `src/electron/index.ts` starts Electron, configures switches/protocol/windows/services and IPC. `preload.ts` exposes the permitted bridge in each renderer.
2. `src/frontend/main.ts` mounts `App.svelte`. `App.svelte` calls `utils/startup.ts::startup()`.
3. Startup waits for `window.api` and the `STARTUP`/`TYPE` message. `currentWindow` selects desktop, output or PDF behavior. Main startup registers receivers, loads main/stored data, restores profiles, subscribes stores and initializes remote/cloud/provider behavior. Output startup is distinct.
4. Renderer `IPC/main.ts` provides `sendMain`, `requestMain` and batched variants. Requests use IDs/listener cleanup and timeouts; prefer these helpers over custom unresolved listeners.
5. Contracts live in `src/types/Channels.ts`, `src/types/IPC/Main.ts` and `ToMain.ts`. Renderer and main each have `IPC/responsesMain.ts`; change both sides and payload types when adding a message.
6. Other channel families (including OUTPUT/STARTUP) use `utils/request.ts`/receivers and matching Electron handlers. Follow the existing channel's path rather than assuming every message is a Main request.

For a cross-process feature: search the channel constant, handler name and payload type with `rg`; update the contract, sender and receiver together. Do not use renderer Node access to bypass the preload/IPC boundary.

## State and data model

`src/frontend/stores.ts` is large and mixes transient UI state, persistent data and caches. A store's existence does not imply it is saved; trace `utils/save.ts` and `utils/listeners.ts`.

- `projects`: keyed project records. `activeProject`: current project ID.
- `Project.shows` in `src/types/Projects.ts`: ordered project item references. Items can carry a show ID, type, layout/arrangement, notes, color and data. Sections, media, folders, placeholders and other item types coexist with normal shows.
- The same show ID may appear more than once in a project with different layouts. Project index, show ID and layout ID are separate coordinates; do not use only show ID as identity.
- Project section collapse/lock state belongs to the project structure. Preserve it during list edits.
- `shows`: trimmed show index/metadata, not necessarily full slide content.
- `showsCache`: lazily loaded full shows. `helpers/setShow.ts::loadShows()` deduplicates requests, requests show files through IPC, merges metadata and fills the cache; `setShow()` updates caches/derived text data.
- `src/types/Show.ts`: a show owns slides, media/background definitions, settings and named layouts. A layout orders parent slides; child slides can expand the visible list.
- `helpers/show.ts` handles cached show/layout-derived data. The `_show` access helper offers show/slide/layout accessors; pass an explicit show ID for an operation initiated from a particular thumbnail or project item.
- `_show()` can resolve to `activeFocus` while Focus Mode is enabled. Implicit active selection is unsuitable when a visible drop destination differs from the focused item.
- `activeShow`: opened show/item for the normal workspace. `activeFocus`: selected project item in Focus Mode. Entering Focus Mode clears `activeShow`, so it can legitimately be null while multiple shows are rendered.
- `activeEdit`, `selected`, `activePopup`, `activePage`, `drawerTabsData`, `focusMode`: navigation/selection/UI state, not the live presentation.
- `outputs`: output configurations and live content. `output.out.slide` is the live slide reference. `outputSlideCache` retains previous/cached highlights. `outLocked` controls presentation locking.
- Profiles can restrict editing. A show may be locked in metadata or full cached content; preserve both checks.

### Slide index warning

Displayed grid index is a flattened index, not necessarily a raw layout-array index or a slide ID. `_show(showId).layouts([layoutId]).ref()[0]` expands parent/child references and carries layout/parent indices. Use existing helpers when translating a thumbnail position into an insertion or background mutation. A project item's chosen layout can differ from `show.settings.activeLayout`.

## Presentation engine and browsing

The output engine is shared by normal and Focus Mode views. Reuse it.

- `Slides.svelte::slideClick` is the established thumbnail activation path. It evaluates custom activation/action triggers and line/item reveal/division state, then invokes `setOutput("slide", ...)`, `updateOut` or refreshes the current output as appropriate. It supplies show/layout/project coordinates.
- `helpers/output.ts::setOutput` routes to active/bound outputs, performs related usage/action work and updates live output stores.
- `helpers/OutputHelper.ts` advances/slides through shows/projects and resolves Focus Mode versus live-output state. Next-project and section behaviors belong here.
- `helpers/showActions.ts::updateOut` applies backgrounds, overlays, timers, actions and related slide extras. Other input/navigation helpers select project items.
- `utils/shortcuts.ts` owns keyboard routing. Existing arrow/space/page controls go through the output helper. Do not duplicate shortcuts in a view and accidentally present twice.
- `Slides.svelte` derives active thumbnail markers from the active outputs and caches, matching layout and project occurrence as well as show ID.
- Output renderer components render the content sent to output windows. Electron output helpers own the windows/devices. Editing or loading a preview must not call presentation APIs just to make it visible.

Keep navigation/editing independent from live output unless the existing explicit activation action requires presentation. Test mutations while a different show remains live.

## Continuous Show view, Focus Mode and media drops

Existing behavior:

- `components/context/menuClick.ts` dispatches `focus_mode`. It requires a nonempty project to enter, resets normal selection, selects an initial focus item, changes to Show page and collapses the drawer while preserving its previous height.
- `MainLayout.svelte` renders `focus/FocusMode.svelte` instead of the normal Show component. The usual top toolbar is hidden.
- `FocusMode.svelte` gets all project items through `focus.ts`, displays `.focusId` sections and follows presentation changes with scrolling. Manual scrolling can change `activeFocus`.
- `FocusItem.svelte` delegates to native slide, media, audio, section, overlay, effect, PDF, folder and other item renderers. Normal shows render the existing `Slides.svelte`.
- Drawer tabs can still open the bottom media library.

Added behavior:

- The custom drawer Focus Mode button was removed. Normal `Show.svelte` renders `FocusMode.svelte normalView` for the active nonempty project while browsing one of its items (or no item). Opening a library item outside the project retains the original single-item view. The original View menu / Ctrl+Shift+F Focus Mode remains available.
- `normalView` uses `activeShow`, without enabling the `focusMode` store: top navigation, normal drawer, ShowTools, editing and Messages remain available. Headers/items select with `openProjectItem(projectId, index)` before mouse/focus actions. Browsing never sends content live; clicking a thumbnail uses native `Slides.svelte::slideClick`. Project selection/outputs scroll the shared `.center` container. Manual scroll changes `activeFocus` only in legacy Focus Mode.
- `FocusMode.svelte` refreshes copied project references for order/arrangement/metadata/name changes, avoids mutating stored references in `focus.ts`, and removes scroll listeners/timers on destruction. `.focusId` remains the wrapper class in both views. `FocusItem.svelte` renders existing native item previews, including camera/screen/NDI/PPT/placeholders; layout notes use the occurrence's layout.
- `Slides.svelte continuous` suppresses duplicate show headers, extra bottom padding and inner-grid auto-scroll. The parent project list owns scrolling. The normal Show component retains selected-show layout/timeline controls. Native slide icons and editing remain enabled in normal Show.
- Slide output carries the project occurrence index explicitly. Thumbnail template application and empty-show slide creation carry explicit show/layout history destinations. `historyActions.ts::handleTemplate` and `handleSlides` honor them, preserving their legacy active-show fallback.
- Drop media on the center of an existing slide to replace its background using the existing media action. Drop at the left edge to insert a new media slide before it; drop at the right edge to insert after it. Center replacement preserves the existing slide/text structure, consistent with the original behavior.
- `Slides.svelte` gives its inner DropArea `{showId, layout: activeLayout}`. Existing thumbnail SelectElem metadata supplies the precise index/show; the containing grid supplies its arrangement, including empty-grid drops.
- `system/DropArea.svelte` forwards optional destination metadata on internal, native-file, URL and touch drop paths. `helpers/drop.ts::ondrop` merges the area fallback with precise thumbnail metadata.
- `helpers/dropActions.ts::slide` prioritizes destination show/layout for media drops and checks the destination's lock/profile access. Center media changes likewise use the explicit show/layout.
- `helpers/historyActions.ts::handleSlides` initializes the undo target from `obj.location.show/layout` when present; implicit activeShow remains the fallback for legacy callers. Undo and redo retain that destination.
- No new presentation or continuous-project engine was added.

Regression coverage is in `helpers/drop.test.ts` and `config/testing/focusMedia.test.ts`. When changing this behavior, preserve the explicit destination through the entire pipeline and test arrangements, empty grids, locks, history and output isolation.

## Selection, drag/drop and undo

1. `system/SelectElem.svelte` supplies selected source data and JSON `data-item` destination metadata. Trigger components expose before/after/center positions; global drag state permits destination interactions even where source dragging is disabled.
2. `system/DropArea.svelte` validates and routes internal, filesystem, URL and touch drops.
3. `helpers/drop.ts::ondrop` resolves the target element, index and position (`start`, `end`, `start_center`, `end_center`). An end-edge position advances the insertion index. Do not increment it a second time downstream.
4. `helpers/dropActions.ts` maps source/destination types to operations. The media handler returns `showMedia` for center replacement or `SLIDES` for insertion using existing show/media structures.
5. `helpers/history.ts` dispatches changes and undo/redo. `historyActions.ts` handles operations such as `SLIDES`, `SHOWS` and layouts; `historyHelpers.ts` and `historyStores.ts` provide related update/store machinery.
6. History location, old data, new data and remembered destination are part of the operation's contract. Preserve them so redo edits the original target even after selection changes.

For a mutation, locate an existing history command and reuse it. Directly changing several stores can break undo, cache updates, saving or synchronization. Preserve slide IDs, parent/child references, layout extras/backgrounds and media definitions.

## Persistence, sync and external content

- `utils/save.ts` maps renderer stores to saved payloads. `utils/listeners.ts` subscribes changes and maintains dependent state/caches. Startup loads persisted data into these stores.
- `src/electron/data/store.ts` owns electron-store configuration and grouped store files, including settings, synced settings, themes, projects, stage, overlays, templates, events, history, media, cache and usage. Inspect the current `storeFilesData` definition for exact membership.
- `src/electron/data/save.ts` handles saving; `utils/files.ts` and `utils/shows.ts` own path/show-file mechanics. Full show files are separate from project item references and the trimmed show list.
- `data/backup.ts`, `zip.ts`, `import.ts`, `export.ts` handle backup/archive/data workflows. Existing tests exercise backups and ZIP behavior.
- `FS_MOCK_STORE_PATH` redirects Electron stores in tests. Also mock the first-run data-folder dialog to a temporary directory; store isolation alone is not enough to isolate show/media files.
- `utils/cloudSync.ts` is the renderer side. `electron/cloud/cloud.ts`, `syncManager.ts`, `syncLedger.ts`, `ChurchAppsSyncManager.ts`, `drive.ts` implement remote sync and metadata. Preserve modification/deletion/tombstone bookkeeping.
- `electron/contentProviders/base/` defines provider contracts. Provider-specific directories implement integrations; renderer content-library components and `startup.ts::contentProviderSync` coordinate loading/sync. Trace provider IPC before adding a provider feature.
- Never use a developer's real presentation library as a destructive test fixture.

## Media and rendering performance

- Slides are shared across show grids, Focus Mode and other contexts. Keep destination and rendering props optional/backward-compatible unless all callers are updated.
- `Slides.svelte` progressively loads thumbnail batches; this is not full viewport virtualization.
- Zoom/thumbnail rendering shares resize observation; preserve observer cleanup and scaling.
- Drawer virtual lists and media IntersectionObserver behavior limit work for large libraries. Search the actual media/list components before adding eager rendering.
- `MediaLoader` generally uses previews/thumbnails but can fall back to video/camera handling. Mounting preview components is not necessarily passive or cheap.
- Native media/capture integrations and output windows have separate lifecycle/resource requirements. Avoid instantiating output/capture managers solely for a thumbnail.

## Editing conventions and investigation recipes

- Reuse `MaterialButton`, `T`, existing icons and CSS theme variables. English translation IDs are in `public/lang/en.json`; prefer existing strings for unchanged actions.
- Follow Svelte 3 syntax and existing reactive store patterns; do not introduce Svelte 5 APIs.
- Prettier config: `config/formatting/.prettierrc.yaml` (4 spaces, double quotes, no semicolons, wide print width). Format only changed files to avoid unrelated churn.
- Search with `rg --files` / `rg -n`. Useful starting searches:

```sh
rg -n 'focus_mode|focusMode|activeFocus' src/frontend
rg -n 'slideClick|setOutput|updateOut' src/frontend/components
rg -n 'handleSlides|showMedia|SLIDES' src/frontend/components/helpers
rg -n 'requestMain|sendMain' src/frontend/IPC src/types/IPC
rg -n 'FS_MOCK_STORE_PATH|storeFilesData' src/electron/data
```

Change routing:

- New UI control: component + existing action dispatcher + translation/icon definitions if needed.
- Slide mutation: explicit show/layout target + history command + cache/model handling + output-isolation regression.
- New persistent field: shared type + defaults + load/save/store mapping + migrations/sync impact.
- IPC feature: shared enum/payload + preload permissions if needed + both handlers + listener cleanup.
- Remote/stage feature: `src/server` client + its Electron server/IPC handler; desktop components are not automatically reused.
- Native output feature: Electron integration + lifecycle/formats/buffers + renderer settings/IPC; validate with actual native dependencies/devices.

## Build and test commands

Package scripts are authoritative. The intended installation is `npm ci` with a supported Node release (package engine: >=22.12). Native dependencies may additionally constrain versions/platform toolchains.

| Command                                                                                              | Purpose / prerequisites                                                                                                        |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `npm ci`                                                                                             | Locked dependency install; postinstall runs Electron native dependency setup.                                                  |
| `npm start`                                                                                          | `scripts/start.js` runs prebuild, Vite, server watch and Electron build/watch. It attempts to clear port 3000 first.           |
| `npm run build:frontend:prod`                                                                        | Build renderer only into `public/build`.                                                                                       |
| `npm run build`                                                                                      | npm prebuild hook, sequential frontend/server/Electron compilation, npm postbuild hook copying/minifying native/static assets. |
| `npm run test:unit`                                                                                  | Vitest source-adjacent `src/**/*.test.ts` in Node environment.                                                                 |
| `npm run test:unit -- src/frontend/components/helpers/drop.test.ts`                                  | Normal/Focus drop and template destination/history regressions without Electron.                                                           |
| `npx playwright install chromium`                                                                    | Browser installation needed by Playwright tooling in this checkout.                                                            |
| `npm run test:playwright`                                                                            | Electron UI tests in `config/testing/*.test.ts`; requires runnable built app and production HTML/bundle.                       |
| `npx playwright test --config config/testing/playwright.config.ts config/testing/focusMedia.test.ts` | Default continuous Show, removed button, real drag/drop, undo and live-output isolation.                                               |
| `npm run test:svelte`                                                                                | Svelte/TypeScript diagnostics; can require a larger Node heap.                                                                 |
| `NODE_OPTIONS=--max-old-space-size=8192 npm run test:svelte`                                         | Same check with increased heap.                                                                                                |
| `npm run test:format`                                                                                | Prettier checks `src` and `scripts`; excludes root Markdown and config tests.                                                  |
| `npm run lint`                                                                                       | Includes ESLint scripts with `--fix`; may mutate unrelated files. Prefer scoped lint without `--fix` during focused work.      |
| `npm run pack`                                                                                       | Build unpacked Electron distribution using electron-builder config; requires build/native modules.                             |
| `npm run release`                                                                                    | Builds and publishes (`--publish always`). Treat this as a publication action.                                                 |

The startup, continuous Show and Messages UI tests accept `FS_TEST_APP_PATH` (a separate runnable app checkout/build root) and `FS_TEST_NODE_ENV` (defaults to production). A separate app root avoids build-script conflicts with a concurrently running development session. The renderer's main window and its output window can use the same URL; the test selects the window containing the desktop UI.

### Known validation constraints observed in this checkout

These are environment/baseline observations, not permanent project guarantees:

- In a checkout path containing a space (`free show`), ordinary `npm ci` failed compiling `osr-capture`: node-gyp's generated compiler arguments split the node-addon-api include path. A space-free physical checkout path is the preferred full-build environment.
- For renderer/unit/Electron UI checks, dependencies were installed with `npm ci --ignore-scripts`, then `node node_modules/electron/install.js`. This does not rebuild native integration modules and is not evidence that packaging/device integrations work.
- Frontend/server/Electron compilation succeeded. Full postbuild stopped on absent `node_modules/@discordjs/opus/prebuild` after skipped native scripts. Resolve native install before claiming a packaged app build.
- Build scripts rewrite tracked `public/index.html` between dev and production entrypoints. Inspect/revert incidental generated HTML changes before handing over a feature diff; rebuild for UI tests when needed.
- The merged beta 4 baseline and this fork both report 186 Svelte errors, 60 warnings and 238 hints (8 GB Node heap). No new diagnostic locations; one existing EditValues union overload message can reorder its types. Compare against the same base/dependencies when assessing changes.
- Repository-wide formatting had existing failures (41 files); scoped checks are useful for avoiding unrelated formatting edits.
- Targeted ESLint/stylelint on changed source also reported existing diagnostics. Compare baseline locations, not just global counts.
- All 231 unit checks pass (211 beta 4 checks plus linked-slide grouping, copy naming, media inspector and crop geometry helpers), including both normal and legacy Focus Mode destination cases and Messages tests. All three Electron UI tests pass (startup/group editing, continuous Show drag/drop and Messages). The latter two cover native edge insertion/center background replacement, live-output isolation, arbitrary tokens, gradient shapes, animated scrolling in preview/output, undo/redo and definition-only persistence. Check current output rather than assuming historical test counts.
- Beta 4 added sync result arrays used by `syncData::finish`. Initialize `downloadedShowIds` / `replacedShows` before early upload/empty-cloud/error returns; otherwise those flows throw a temporal-dead-zone error. Existing cloud sync tests cover this.
- Beta 4 imported `addStageItem` into dropActions; the Node-only drop unit harness stubs the stage UI dependency, retaining real drop/history/model code.

A scoped baseline comparison can use a temporary `git archive HEAD` checkout with the same node_modules; keep test stores/data temporary and never overwrite the working tree to obtain a baseline.

## Output targeting and linked slides

Slides, shows and backgrounds can be aimed at specific outputs. Reuse these paths; do not add a second routing mechanism.

- Slide targets are `SlideData.bindings` (output IDs/names, empty = all active outputs). `helpers/output.ts::isOutputBound` tests one output; `resolveOutputId(s)` maps names to IDs.
- Show-level target: `Show.settings.bindings`, set from the show context menu (`bind_to_show` → `LOAD_bind_show` in `context/loadItems.ts` → `menuClick.ts::bind_show`, history `UPDATE`/`show_key`, subkey `bindings`). It is a default, never copied onto slides, so newly added slides follow it. `helpers/output.ts::getSlideBindings(showId, slideBindings)` returns the slide's own bindings, otherwise the show's. `setOutput`, `showActions.ts::updateOut`/`checkActionTrigger` and `OutputHelper.ts::slideCannotBeOutputted` all go through it. `inputs/ShowButton.svelte` shows a bind badge.
- Background look-back: `updateOut` rebuilds the "ghost" background per output by scanning earlier layout slides. Only slides bound to that output (or unbound) count, including `clear_background` actions, so a Centre background never leaks onto the side screens. The thumbnail ghost previews in `Slide.svelte` / `SlideEditor.svelte` still show one preview regardless of output.
- Linked slides: `SlideData.linkNext` joins a slide with the one after it. `helpers/slideLinks.ts` (`getSlideLinkGroups`, `getLinkedPartner`, `getLinkStart`, `getSlideElement`) is the pure grouping logic (`slideLinks.test.ts`). `show/Slides.svelte` renders pairs inside `.linkedCard` (grid views only; single slides stay direct `.grid > .main` children, which UI tests rely on) and `slideClick` activates every slide of the card through the normal `activateSlide` path. Slides keep their own background/bindings. Next/Previous work through each output's own bindings. Link/unlink commands are `helpers/show.ts::linkSlides/unlinkSlides` (history `SHOW_LAYOUT`) wired as `link_slides`/`unlink_slides` in the slide context menu. Scroll code that used `.grid` children by index must use `getSlideElement` (`Slides.svelte`, `focus/FocusMode.svelte`).

## Media inspector (slide backgrounds)

Right-click a slide with a background → **Inspector** (`media_inspector` in `context/contextMenus.ts`, shown by `ContextMenu.svelte` only when `helpers/mediaInspector.ts::getSelectedInspectorTarget` finds a background). It opens the `media_inspector` popup (`main/popups/MediaInspector.svelte`, registered in `utils/popup.ts`).

- The popup composes existing editors for one file: `edit/editors/MediaEditor.svelte` (preview/seek) and `edit/MediaTools.svelte` (fit, flip, crop, colour, volume, speed, soft loop, start/end), both with an `overridePath` prop. Their settings are saved per file in the `media` store (`media[path]`), keyed by the show media entry's `path` (the URL for online media), and applied by `showActions.ts::updateOut` through `getMediaStyle`. Settings belong to the file, so every slide using that file shares them. Online media is not updated live on the output (output background path is the downloaded file); it applies the next time the slide is activated.
- Image crop is a drag editor (`edit/editors/ImageCropEditor.svelte`, geometry in `helpers/cropMath.ts` with tests in `cropMath.test.ts`): a crop box over the full image (drag to position, corners to zoom, optional lock to the chosen output's screen shape, "Fit to screen", "Clear crop") with a live preview of the output screen. It saves `media[path].cropping` as pixels removed per side through `MediaTools::setCropping`; the numeric crop sliders are hidden in the inspector (`hideCropping`). The output frame shape comes from the dropdown (defaults to the slide's specific output).
- Loop on/off is saved on the show's media entry (`show.media[bgId].loop`, off = play once and hold the last frame), not on the file. Trim handles (`inputs/TrimBar.svelte`) write `fromTime`/`toTime` (0 end = play to the end).
- **Duplicate and adjust** (`mediaInspector.ts::duplicateBackground`): downloads online media, asks Electron to copy the file (`Main.DUPLICATE_MEDIA_FILE`, `electron/utils/files.ts::duplicateMediaFile`, name via `electron/utils/copyName.ts`, copy-on-write clone when supported), copies the `media[path]` settings, adds a show media entry with `duplicateOf` (original path) and re-links only that slide through `SHOW_LAYOUT`. **Back to original** (`backToOriginal`) re-links to `duplicateOf`. Copies are never deleted automatically.
- `SHOW_LAYOUT` history now honors an explicit `location.show.id` / `location.layout` (falls back to the active show/layout as before). Pure usage/lookup helpers are in `mediaInspectorLogic.ts` (tests in `mediaInspectorLogic.test.ts`).

## Messages: definitions, drafts and live instances

Implemented in this fork after [ProPresenter research](docs/PROPresenter_MESSAGES_RESEARCH.md). Operator instructions: [MESSAGES.md](docs/MESSAGES.md). These are independent notices above the presentation, available in the right pane on the Show page, including Focus Mode.

| Responsibility                                                                                        | Source                                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared definition/token/live-instance contracts                                                       | `src/types/Message.ts`; `Show.ts::Overlay.message`, `Item.messageText`, `Item.messageBackground`, `Item.messageShape`, `Scrolling`; `Output.ts::OutData.messages`                                               |
| Saved selection, transient operator fields and open-panel state                                       | `stores.ts::activeMessage`, `messageDrafts`, `messagesPanelOpen`                                                                                                                                                |
| Operator panel, configuration, native history and artwork-editor entry                                | `components/output/messages/MessagesPanel.svelte`                                                                                                                                                               |
| Template parsing, stable field keys, wording edits, validation, HTML escaping and immutable snapshots | `components/helpers/messages.ts`                                                                                                                                                                                |
| Show/Update/Hide, destinations, output/profile restrictions, deadline reconciliation                  | `components/helpers/messageOutput.ts`                                                                                                                                                                           |
| Whole-design in/out fades and live revision identity                                                  | `components/output/layers/Messages.svelte` with `transitions/OutputTransition.svelte`                                                                                                                           |
| Repeating whole-design fade/hold/hide/pause animation                                                 | `components/output/layers/MessageInstance.svelte` (Web Animations; cancels on destruction)                                                                                                                      |
| Artwork                                                                                               | Native `edit/editors/OverlayEditor.svelte`, `edit/EditTools.svelte`, `slide/Textbox.svelte`, `output/layers/Overlay.svelte`                                                                                     |
| Measured scrolling, four directions, once/repeat, offscreen start and edge masks                      | `slide/TextboxLines.svelte`, opt-in `Scrolling.duration` branch                                                                                                                                                 |
| Placement and main-window timer lifetime                                                              | `MainLayout.svelte`                                                                                                                                                                                             |
| Output bridge and renderer placement                                                                  | Existing `setOutput` / output store listeners / OUTPUTS IPC; `output/Output.svelte` renders Messages above overlays when the overlays layer is enabled                                                          |
| Persistence and clear behavior                                                                        | Existing overlays file/cloud path; `utils/save.ts` strips `out.messages` from saved settings; `output/clear.ts::clearAll` clears selected-output messages; `helpers/output.ts::isOutCleared` handles empty maps |
| Regressions                                                                                           | `helpers/messages.test.ts` (templates/routing/deadlines); `config/testing/messages.test.ts` (real Electron UI, output window, animation, history, Focus Mode editor, restart)                                   |

The compact operator panel shows one saved-message selector, a token-chip wording preview, inline value rows and Show/Update/Hide controls. Configuration hides operating fields and groups advanced settings in **Appearance, timing and scrolling**. `output/messages/MessageWordingEditor.svelte` edits native text DOM with noneditable token spans; it serializes chips back to brace notation, preserves the caret range when inserting a variable, preserves brace notation through copy/cut, intercepts plain-text paste/Enter, and builds chips with `textContent` rather than HTML. `helpers/messages.ts::messageParts` and `messageVariableName` are the shared parsing/name helpers. The Add variable control inserts arbitrary message-local names; Insert variable reuses names already present. Saved `message.tokens` remain derived from all artwork text, so native editor changes are discovered too.

`edit/tools/MessageDesignTools.svelte` appears at the top of EditTools for Message overlays. It adds rectangle/rounded/ellipse/triangle artwork before the marked wording item, selects layers, updates fills, and delegates stacking to native `rearrangeItems`. `helpers/messageShapes.ts` creates **empty native text Items**, with `messageShape` metadata for the picker; border-radius/clip-path define geometry. This avoids introducing another renderer or ItemType. `EditboxLines.svelte` suppresses empty-text placeholders for message artwork; EditTools opens its Item tab for selected empty artwork. The compact toolbar uses a shrinking shape selector with a fixed-size native Add shape button; selected shape conversion is under Change shape, empty fills show a transparency swatch, and the help text wraps. Fills use the existing `MaterialColorInput.svelte` with gradients, custom gradient popup, opacity and empty fills enabled. `messageFillStyle` clears both background declarations before applying a new solid/gradient fill (otherwise a prior gradient hides the solid). Changes use the ordinary overlay UPDATE history path and snapshots copy artwork unchanged. `messageTextItem` must skip empty artwork when choosing a fallback wording item.

State boundaries:

- **Definition:** an ordinary persisted Overlay with optional `message` metadata and native Items. The marked `messageText` item contains the primary wording; the panel falls back to the first nonempty text item if the marked item was deleted. `messageBackground` marks the starter banner's empty textbox/shape. Native artwork editing retains the text-box and image system. Definitions are hidden from the ordinary overlay drawer to prevent sending unresolved wording through its click handler. Create/configure/delete use an atomic existing `history({id: "UPDATE", location:{id:"overlay",page:"none"}, ...})`, retaining modified timestamps and undo/redo/cloud behavior.
- **Draft:** transient `messageDrafts[definitionId][tokenId]`. It survives page changes, does not restart or sync, and never writes live output. Fields are deduplicated from brace notation across all native text runs/lines. Keys are preserved from saved metadata; newly discovered labels use the deterministic `token:<label>` key (including native editor changes). Changing a label creates a new field; rewriting a message without changing its label keeps its draft value. Identical field labels in different messages are isolated by definition ID.
- **Live:** `output.out.messages[definitionId]` is a self-contained `LiveMessage` snapshot: revision, resolved native Items, copied draft values, fade timings, optional cycle and absolute expiry. Definition edits and draft typing do not touch it. Show snapshots to configured destinations or selected normal outputs; Update snapshots to the destinations where that definition is already live; Hide removes only that definition from all its live destinations. Other slides/backgrounds/audio/overlays/messages survive. Multiple messages can coexist; configure artwork positions to avoid overlap. The panel also exposes other live instances for hiding if their saved definition disappears through history/sync.

Rendering/timing constraints:

- Snapshot resolution handles tokens split across rich-text runs while retaining their styles. Both fixed text and entered values are HTML-escaped before the renderer's `{@html}` path. `Overlay.dynamicValues=false` prevents entered braces from becoming global FreeShow variables/time tokens. Do not turn dynamic replacement back on for these resolved text items. Clock/timer objects can still be added as native design items; named text fields are the implemented operating-token type.
- Per-item lifecycle `actions` are omitted in live snapshots so they cannot hide individual artwork contrary to the message controls. Message-level fades wrap all artwork together; each Show/Update revision is keyed independently, allowing the old revision to fade out and the new revision to fade in.
- `startMessageTimers()` runs for MainLayout's lifetime, rather than the panel's lifetime. It reconciles output-store state, maintains one deadline per `(outputId, definitionId)`, cancels missing/changed entries, and verifies the live revision before dismissal. It also handles restored output-cache instances and output deletion. Automatic expiry continues during an output lock; manual Show/Update/Hide/Clear honor that lock.
- `duration=0` stays live until hidden. Values are bounded on save/snapshot: fade durations 0–30,000 ms, auto-hide 0–86,400 seconds, scroll pass 1–600 seconds, gap 0–2,000 px, feather 0–200 px, repeating fade hold 0.1–600 seconds and pause 0–600 seconds. Blank/invalid numeric controls use defaults.
- `helpers/messages.ts::getMessageScrolling` recovers legacy artwork-only edits by preferring the primary Item's scrolling over stale definition metadata (legacy speed maps to seconds per pass). `setMessageScrolling` writes both metadata and primary Item; `setMessageItemScrolling` synchronizes native edits. The Messages panel saves through this path; `BoxStyle.svelte` uses atomic overlay history for Message scrolling changes and displays seconds per pass instead of legacy speed. Snapshotting chooses the primary Item once before resolving tokens. Other text items retain their own scrolling. `MessageDesignTools.svelte::Preview` uses a local snapshot, native Zoomed and MessageInstance to render motion without sending it live; missing draft values use token labels. `Scrolling.duration` selects the new measured viewport behavior for message text. `edit/scripts/autosize.ts` measures Message scrolling clones with animation/translation disabled, keeps one copy without its gap, and fits only perpendicular to travel (height for horizontal scrolling, width for vertical). This prevents an offscreen animation shrinking text to the minimum and lets long tickers retain their chosen font. `Textbox.svelte` includes scrolling in both recalculation and cache signatures. Ordinary slide scrolling continues to use legacy `speed * 1.5` and repeated-copy keyframes. With repeat enabled, measured copies follow continuously in all four directions, separated by the configured pixel gap, regardless of legacy startOffscreen. Message repeat keyframes move exactly one content-plus-gap distance for a seamless reset; horizontal copies are vertically centered, vertical copies keep the viewport width. One pass uses a single copy, with the optional offscreen start. The panel shows startOffscreen only for one pass. The textbox masks/clips moving text while the banner/image remains static. A one-pass message retains its artwork after the text exits; use auto-hide to dismiss the entire design.
- Saved settings omit live notices so a restart restores definitions without automatically displaying old child names. Generic output-cache restore remains an explicit operating action. No new persistence files or IPC channels were added.
- Overlay profile `read` allows operation while disabling definition/design edits. Profile `none` prevents showing restricted definitions. Configured destination IDs/names reuse normal output resolution; disabled and stage outputs are excluded. Missing destinations report an operator error rather than rerouting to an unrelated screen.

Future extensions from the research (not part of this implementation): clock/countdown tokens as labeled operator fields, remote submission/approval, stage-only message control, and message-specific actions/macros. Do not claim complete ProPresenter feature parity.

## Upstream update procedure for this fork

Keep custom commits on fork `main`. Fetch upstream tags, choose the exact release tag, and make a backup branch at the current custom head. Merge that tag into the custom branch; never replace it with the official downloaded binary or reset it to upstream. Resolve conflicts preserving custom Messages, explicit media destinations and default continuous Show behavior as well as upstream additions. Verify build/version, unit/UI behavior and diagnostic differences before committing/pushing. The beta 4 merge used `v1.6.6-beta.4`; pre-merge recovery branch is `backup/custom-features-before-beta4-20261002` at `be2706a5`. App data is separate from Git; use isolated test config/data folders before startup to avoid touching the operator's real portable stores.
