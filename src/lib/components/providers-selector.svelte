<script context="module" lang="ts">
  import IconSearch from "~icons/majesticons/search-line";
  import type { Provider } from "./search.svelte";
  import activeKeys from "../stores/activeKeys";
</script>

<script lang="ts">
  export let providers: Provider[];
  export let providerIndex = 0;

  $: selectionWidth = Math.floor(100 / providers.length);

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

<div class="flex gap-2.5 items-center">
  <IconSearch />
  <span>on</span>
  <div class="flex relative items-center">
    <div
      style={`width:${selectionWidth}%;transform:translateX(${
        100 * providerIndex
      }%)`}
      class="absolute h-full rounded-lg transition-transform bg-text"
    />
    {#each providers as { icon }, i}
      {@const isSelected = i === providerIndex}
      <button
        on:pointerdown|preventDefault={() => (providerIndex = i)}
        class="z-10 px-2.5 transition-colors"
        class:text-basec={isSelected}
      >
        <svelte:component this={icon} class="inline align-sub" />
      </button>
    {/each}
  </div>
</div>
