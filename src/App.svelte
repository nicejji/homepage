<script lang="ts">
  import "@fontsource-variable/radio-canada";
  import Search from "./lib/components/search.svelte";
  import WelcomeMessage from "./lib/components/welcome-message.svelte";
  import KeysDescription from "./lib/components/keys-description.svelte";
  // import Favorites from "./lib/components/favorites.svelte";
  import Waves from "./lib/components/waves.svelte";
  // import AddFavorite from "./lib/components/add-favorite.svelte";
  import Pages from "./lib/components/UI/pages.svelte";
</script>

<div class="w-full h-full">
  <div class="flex relative z-10 flex-col gap-7 items-center p-5 h-full">
    <WelcomeMessage />
    <div class="w-[32rem]">
      <Search />
    </div>
    <div class="overflow-auto w-5/6 h-full">
      <!-- <AddFavorite /> -->
      <div class="flex flex-col justify-center w-full h-full">
        <!-- <Favorites /> -->
        <Pages />
      </div>
    </div>
    <div class="mt-auto">
      <KeysDescription />
    </div>
  </div>
  <div class="absolute bottom-0 w-full">
    <Waves />
  </div>
</div>
