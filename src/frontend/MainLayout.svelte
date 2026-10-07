<script lang="ts">
    import { onMount } from "svelte"
    import AiFloating from "./ai/components/floating/AiFloating.svelte"
    import { customActionActivation } from "./components/actions/actions"
    import DrawTabs from "./components/draw/DrawTabs.svelte"
    import Navigation from "./components/edit/Navigation.svelte"
    import LazyLoad from "./components/helpers/LazyLoad.svelte"
    import ProfileChangerMenu from "./components/main/ProfileChangerMenu.svelte"
    import Tipbar from "./components/main/Tipbar.svelte"
    import Top from "./components/main/Top.svelte"
    import Preview from "./components/output/preview/Preview.svelte"
    import MessagesPanel from "./components/output/messages/MessagesPanel.svelte"
    import Icon from "./components/helpers/Icon.svelte"
    import MaterialButton from "./components/inputs/MaterialButton.svelte"
    import { startMessageTimers } from "./components/helpers/messageOutput"
    import SettingsTabs from "./components/settings/SettingsTabs.svelte"
    import Projects from "./components/show/Projects.svelte"
    import Show from "./components/show/Show.svelte"
    import ShowTools from "./components/show/ShowTools.svelte"
    import StageLayouts from "./components/stage/StageLayouts.svelte"
    import Resizeable from "./components/system/Resizeable.svelte"
    import Timeline from "./components/timeline/Timeline.svelte"
    import { activeEdit, activePage, activeProfile, activeProject, activeShow, activeStage, ai, currentWindow, editMode, focusMode, loaded, messagesPanelOpen, os, overlays, projectView, resized, showChangeProfileMenu, showsCache, special } from "./stores"
    import { DEFAULT_WIDTH } from "./utils/common"

    $: page = $activePage
    $: isWindows = !$currentWindow && $os.platform === "win32"
    $: isMessageEditor = $activeEdit.type === "overlay" && !!$overlays[$activeEdit.id || ""]?.message
    onMount(startMessageTimers)

    // Messages and the show tools (groups, metadata, media) share the right panel, switched with icons
    $: hasShowTools = !!$activeShow && ($activeShow.type === "show" || $activeShow.type === undefined) && !$focusMode
    $: panelTab = hasShowTools && $special.rightPanel === "show" ? "show" : "messages"
    function setPanelTab(tab: string) {
        if (tab === "messages") messagesPanelOpen.set(true)
        special.update((a) => {
            a.rightPanel = tab
            return a
        })
    }

    let previousId = ""
    $: if ($activeShow?.id !== previousId) showOpened()
    function showOpened() {
        if (!$activeShow?.id || $activeShow?.type !== "show") return

        // allow show to actually open before triggering
        setTimeout(() => customActionActivation("show_opened"), 50)
        previousId = $activeShow?.id
    }
</script>

<div class="column">
    {#if !$focusMode}
        <Top {isWindows} />
    {/if}
    <div class="row">
        <Resizeable id="leftPanel">
            <div class="left">
                {#if page === "show"}
                    {#key $activeProfile}
                        <Projects />
                    {/key}
                {:else if page === "edit"}
                    <Navigation />
                {:else if page === "stage"}
                    <StageLayouts />
                {:else if page === "draw"}
                    <DrawTabs />
                {:else if page === "settings"}
                    <SettingsTabs />
                {/if}
            </div>
        </Resizeable>

        <div class="center">
            {#if page === "show"}
                {#if $focusMode}
                    <LazyLoad component={() => import("./components/show/focus/FocusMode.svelte")} show={$focusMode} />
                {:else}
                    <Show />
                {/if}
            {:else if page === "edit"}
                <LazyLoad component={() => import("./components/edit/Editor.svelte")} show={page === "edit"} />
                {#if isMessageEditor}<button class="message-back" on:click={() => activePage.set("show")}>Back to Messages</button>{/if}
            {:else if page === "draw"}
                <LazyLoad component={() => import("./components/draw/Slide.svelte")} show={page === "draw"} />
            {:else if page === "settings"}
                <LazyLoad component={() => import("./components/settings/Settings.svelte")} show={page === "settings"} />
            {:else if page === "stage"}
                <LazyLoad component={() => import("./components/stage/StageLayout.svelte")} show={page === "stage"} />
            {/if}
        </div>

        <Resizeable id="rightPanel" let:width side="right">
            <div class="right" class:row={width > DEFAULT_WIDTH * 1.8} class:messages-layout={page === "show"}>
                <Preview />
                {#if page === "show"}
                    <div class="show-controls">
                        {#if hasShowTools}
                            <div class="panel-switch">
                                <MaterialButton isActive={panelTab === "messages"} title="panel.messages" on:click={() => setPanelTab("messages")}>
                                    <Icon id="message" white={panelTab === "messages"} />
                                </MaterialButton>
                                <MaterialButton isActive={panelTab === "show"} title="panel.show_tools" on:click={() => setPanelTab("show")}>
                                    <Icon id="groups" white={panelTab === "show"} />
                                </MaterialButton>
                            </div>
                        {/if}
                        <div class="panel" class:hidden={panelTab !== "messages"}>
                            <MessagesPanel />
                        </div>
                        {#if panelTab === "show"}
                            <div class="show-tools"><ShowTools /></div>
                        {/if}
                    </div>
                {:else if page === "edit"}
                    {#if $activeEdit.type === "media" || $activeEdit.type === "camera"}
                        <LazyLoad component={() => import("./components/edit/MediaTools.svelte")} show={$activeEdit.type === "media" || $activeEdit.type === "camera"} />
                    {:else if $activeEdit.type === "audio"}
                        <LazyLoad component={() => import("./components/edit/AudioTools.svelte")} show={$activeEdit.type === "audio"} />
                    {:else if $activeEdit.type === "effect"}
                        <LazyLoad component={() => import("./components/edit/EffectTools.svelte")} show={$activeEdit.type === "effect"} />
                    {:else if $activeEdit.type === "scene"}
                        <LazyLoad component={() => import("./components/edit/SceneTools.svelte")} show={$activeEdit.type === "scene"} />
                    {:else if $activeEdit.type === "overlay" || $activeEdit.type === "template" || $showsCache[$activeShow?.id || ""]}
                        {#if ($focusMode && !isMessageEditor) || (($activeEdit.type || "show") === "show" && $editMode !== "default")}
                            <!-- show nothing -->
                        {:else}
                            <LazyLoad component={() => import("./components/edit/EditTools.svelte")} show={!$focusMode || isMessageEditor} />
                        {/if}
                    {/if}
                {:else if page === "draw"}
                    <LazyLoad component={() => import("./components/draw/DrawSettings.svelte")} show={page === "draw"} />
                {:else if page === "stage" && $activeStage.id}
                    <LazyLoad component={() => import("./components/stage/StageTools.svelte")} show={page === "stage" && !!$activeStage.id} />
                {:else if page === "settings"}
                    <LazyLoad component={() => import("./components/settings/SettingsTools.svelte")} show={page === "settings"} />
                {/if}
            </div>
        </Resizeable>
    </div>

    {#if page === "show" && $special.projectTimelineActive && $activeProject && !$projectView}
        <Resizeable id="project_timeline" side="bottom" maxWidth={DEFAULT_WIDTH} minWidth={40}>
            {#key $activeProject}
                <Timeline type="project" isClosed={$resized.project_timeline <= 40} />
            {/key}
        </Resizeable>
    {/if}

    {#if $loaded && (page === "show" || page === "edit")}
        <LazyLoad component={() => import("./components/drawer/Drawer.svelte")} show={$loaded && (page === "show" || page === "edit")} />
    {/if}

    {#if $showChangeProfileMenu && $activeProfile !== null}
        <ProfileChangerMenu />
    {/if}

    {#if $ai.enabled}
        <AiFloating />
    {/if}

    <Tipbar />
</div>

<style>
    .column,
    .row {
        display: flex;
        justify-content: space-between;
        /* background: var(--primary-darker); */
    }

    .column {
        flex-direction: column;
        height: 100%;
    }

    .row {
        flex: 1;
        overflow: hidden;
    }

    .center {
        position: relative;

        flex: 1;
        background-color: var(--primary-darker);
        overflow: auto;

        scroll-behavior: smooth;
    }

    .left,
    .right {
        position: relative;

        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: space-between;
        overflow: hidden;
    }
    .right.row {
        flex-direction: row-reverse;
    }

    .right.messages-layout:not(.row) > :global(.main) {
        flex: 0 0 auto;
    }
    .show-controls {
        flex: 1;
        min-height: 0;
        min-width: 0;
        overflow-y: auto;
    }
    .show-tools {
        min-height: 180px;
    }
    .panel.hidden {
        display: none;
    }
    .panel-switch {
        display: flex;
        background-color: var(--primary-darker);
    }
    .panel-switch :global(button) {
        flex: auto;
        padding: 0.3em 0.5em;
        border-radius: 0;
        border-bottom: 2px solid var(--primary-darker);
    }
    .message-back {
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 10;
        background: var(--primary-darkest);
        color: inherit;
        border: 1px solid var(--primary-lighter);
        border-radius: 4px;
        padding: 8px;
        cursor: pointer;
    }

    .right :global(.border) {
        border-top: 2px solid var(--primary-lighter);
    }
    .right.row :global(.border) {
        border: none;
        border-inline-end: 2px solid var(--primary-lighter);
        min-width: 50%;
    }

    .right.row :global(.textfield .picker) {
        left: unset !important;
        right: 0;
    }
</style>
