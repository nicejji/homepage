<script lang="ts" context="module">
  const KEY_DESC: [string[], string][] = [
    [["⌘", "K"], "Toggle search"],
    [["⏎"], "Perfom search / go favorite"],
    [["⌘", "'"], "Cycle engine"],
    [["⇥"], "Cycle favorites"],
  ];
</script>

<div class="flex flex-wrap gap-3 justify-center">
  {#each KEY_DESC as [keys, description]}
    <div class="flex gap-3 items-center text-xs text-subtle">
      <div class="flex gap-1 items-center">
        {#each keys as key}
          <div
            class="flex justify-center items-center w-7 rounded-lg border-2 border-solid bg-highlightLow border-highlightMed"
          >
            <span>{key}</span>
          </div>
        {/each}
      </div>
      <span>-</span>
      <span>{description}</span>
    </div>
  {/each}
</div>
