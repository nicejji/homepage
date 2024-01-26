<script context="module" lang="ts">
  import IconGoogle from "~icons/bxl/google";
  import IconYoutube from "~icons/bxl/youtube";
  import IconGithub from "~icons/bxl/github";
  import { type ComponentType } from "svelte";

  export type Provider = {
    name: string;
    icon: ComponentType;
    queryUrl: (query: string) => string;
  };

  const DEFAULT_PROVIDERS = [
    {
      name: "google",
      icon: IconGoogle,
      queryUrl: (query: String) => `https://google.com/search?q=${query}`,
    },
    {
      name: "youtube",
      icon: IconYoutube,
      queryUrl: (query: String) =>
        `https://youtube.com/results?search_query=${query}`,
    },
    {
      name: "github",
      icon: IconGithub,
      queryUrl: (query: String) => `https://github.com/search?q=${query}`,
    },
  ];
</script>

<script lang="ts">
  import activeElement from "../stores/activeElement";
  import activeKeys from "../stores/activeKeys";
  import ProvidersSelector from "./providers-selector.svelte";

  export let providers = DEFAULT_PROVIDERS;

  let input: HTMLInputElement;

  let providerIndex = 0;
  let query = "";

  const activateInput = () => {
    input.focus();
    input.select();
  };

  $: combinationPressed = $activeKeys.has("Meta") && $activeKeys.has("k");

  $: if ($activeElement === input) {
    if ($activeKeys.has("Enter"))
      document.location.href = providers[providerIndex].queryUrl(query);
    if (combinationPressed || $activeKeys.has("Escape")) input.blur();
  } else {
    if (combinationPressed) activateInput();
  }
</script>

<div class="flex flex-col gap-2 items-center">
  <ProvidersSelector bind:providerIndex providers={DEFAULT_PROVIDERS} />
  <!-- svelte-ignore a11y-autofocus -->
  <input
    autofocus
    tabindex="-1"
    spellcheck="false"
    placeholder={input === $activeElement ? "" : "/"}
    class={`${
      input !== $activeElement ? "hover:bg-highlightMed/50" : ""
    } py-2 px-3 w-full rounded-lg transition-all placeholder:text-highlightHigh outline outline-offset-0 outline-1 outline-highlightMed bg-highlightLow focus:outline-text`}
    bind:this={input}
    bind:value={query}
  />
</div>
