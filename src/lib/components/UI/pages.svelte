<script lang="ts">
  let bgs = ["bg-rose", "bg-love", "bg-foam", "bg-gold"];
  let selectedIndex = 0;

  let prevY = 0;
  let newY = 0;
  let leftAt = 0;
  let isLeft = true;

  const moveNext = () => {
    if (selectedIndex < bgs.length - 1) {
      selectedIndex += 1;
    } else {
      selectedIndex = 0;
    }
  };
</script>

<span>wheel left wheeling: {!isLeft}: {prevY}, last end : {leftAt}</span>
<button
  on:wheel={(e) => {
    prevY = newY;
    newY = e.deltaY;
    isLeft = newY <= prevY;
    if (isLeft) leftAt = newY;

    console.log(`y: ${prevY} -> ${newY}, isLeft: ${isLeft}, leftAt: ${leftAt}`);
    if (newY - leftAt > 30 && !isLeft) {
      moveNext();
      console.log(`Move next`);
    }
  }}
  class="flex overflow-hidden flex-col w-full h-full bg-text"
>
  <div
    style="transform: translateY(-{selectedIndex * 100}%);"
    class="flex flex-col w-full h-full transition-transform"
  >
    {#each bgs as bg, i}
      <div class="shrink-0 h-full w-full {bg}">
        <span class="text-7xl text-basec">{i}</span>
      </div>
    {/each}
  </div>
</button>

<svelte:window on:touchstart={() => console.log(`start touch`)} />
