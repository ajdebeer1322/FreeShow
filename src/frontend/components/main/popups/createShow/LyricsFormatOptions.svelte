<!-- How lyrics are turned into slides, shared by "Quick lyrics" and the WorshipTools import. -->
<script lang="ts">
    import { formatNewShow, special, splitLines } from "../../../../stores"
    import List from "../../../input/List.svelte"
    import MaterialNumberInput from "../../../inputs/MaterialNumberInput.svelte"
    import MaterialToggleSwitch from "../../../inputs/MaterialToggleSwitch.svelte"
</script>

<List top={5}>
    <MaterialToggleSwitch label="create_show.auto_groups" checked={$special.autoGroups !== false} defaultValue={true} on:change={(e) => special.set({ ...$special, autoGroups: e.detail })} />
    <MaterialToggleSwitch label="create_show.format_new_show" checked={$formatNewShow} defaultValue={false} on:change={(e) => formatNewShow.set(e.detail)} />
    <MaterialNumberInput label="create_show.split_lines" value={$splitLines} max={100} on:change={(e) => splitLines.set(e.detail)} hideWhenZero />
</List>
