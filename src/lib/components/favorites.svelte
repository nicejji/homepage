<script lang="ts" context="module">
  import IconStar from "~icons/majesticons/star";

  const FAVORITES: [string, string][] = [
    ["Instagram", "https://instagram.com"],
    ["Youtube", "https://youtube.com"],
    ["Reddit", "https://reddit.com"],
    ["SoundCloud", "https://soundcloud.com"],
  ];

  let failed = new Set<number>();
</script>

<script lang="ts">
  const favButtons: HTMLButtonElement[] = [];
</script>

<!-- TODO: refactor this code -->
<div
  style="grid-template-columns: repeat(auto-fit, minmax(12rem, max-content))"
  class="grid overflow-auto gap-3 justify-center p-1"
>
  {#each FAVORITES as [name, href], i}
    {@const domain = new URL(href).hostname}
    <a {href} class="h-fit w-fit">
      <button
        bind:this={favButtons[i]}
        on:keydown={({ key }) => {
          if (key === "Enter") window.location.href = href;
        }}
        tabindex="0"
        class="flex flex-col items-center p-3 h-48 rounded-lg transition-all aspect-square bg-highlightLow outline outline-offset-0 outline-1 outline-highlightMed hover:bg-highlightMed/50 focus:outline-text"
      >
        <div class="flex justify-center items-center h-full">
          {#if !failed.has(i)}
            <img
              alt=""
              class="h-16"
              on:error={() => {
                failed.add(i);
                // HACK: trigger svelte update
                failed = failed;
              }}
              src={`https://www.google.com/s2/favicons/?domain=${domain}&sz=128`}
            />
          {:else}
            <IconStar class="text-7xl text-highlightMed" />
          {/if}
        </div>
        <span class="text-sm text-text/90">{name}</span>
      </button>
    </a>
  {/each}
</div>

<!-- HACK: Dummy item for cycling focus -->
<button
  class="absolute"
  tabindex="0"
  on:focus={() => {
    favButtons[0].focus();
  }}
/>
