<script context="module" lang="ts">
  import IconSearch from "~icons/majesticons/search-line";
  import type { Provider } from "./search.svelte";
  import activeKeys from "../stores/activeKeys";
</script>

<script lang="ts">
  export let providers: Provider[];
  export let providerIndex = 0;

  const selectNext = () => {
    providerIndex = (providerIndex + 1) % providers.length;
  };

  $: if ($activeKeys.has("Meta")) {
    if ($activeKeys.has("'")) selectNext();
  }

  // TODO: Deside key combination for move back
  // const selectPrev = () => {
  // providerIndex =
  // providerIndex - 1 >= 0 ? providerIndex - 1 : providers.length - 1;
  // };
</script>

<div class="flex gap-2 items-center">
  <IconSearch />
  <span>on</span>
  <div class="flex relative gap-1.5 items-center">
    <div
      style={`transform:translateX(${100 * providerIndex}%); margin-left:${
        0.375 * providerIndex
      }rem`}
      class="absolute ml-1.5 w-10 h-7 rounded-lg transition-transform bg-text"
    />
    {#each providers as { icon }, i}
      {@const isSelected = i === providerIndex}
      <button
        on:pointerdown|preventDefault={() => (providerIndex = i)}
        class="z-10 w-10 h-7 rounded-lg transition-colors"
        class:text-basec={isSelected}
        class:hover:bg-highlightMed={!isSelected}
      >
        <svelte:component this={icon} class="inline align-sub" />
      </button>
    {/each}
  </div>
</div>
