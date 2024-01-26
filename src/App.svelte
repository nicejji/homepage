<script lang="ts">
  import "@fontsource-variable/radio-canada";
  import Search from "./lib/components/search.svelte";
  import WelcomeMessage from "./lib/components/welcome-message.svelte";
  import KeysDescription from "./lib/components/keys-description.svelte";
  import Favorites from "./lib/components/favorites.svelte";
</script>

<div class="flex flex-col gap-7 items-center p-5 h-full">
  <WelcomeMessage />
  <div class="w-[32rem]">
    <Search />
  </div>
  <div class="flex flex-col gap-2 items-center w-5/6">
    <h3 class="text-xl font-semibold text-text/80">Favorites</h3>
    <div class="w-full">
      <Favorites />
    </div>
  </div>
  <div class="mt-auto">
    <KeysDescription />
  </div>
</div>
