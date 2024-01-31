<script lang="ts">
  import appDB from "../stores/appDB";

  let name = "";
  let rawHref = "";

  const getHref = (rawHref: string) => {
    try {
      return new URL(rawHref).href;
    } catch {
      const url = new URL("https://example.com");
      url.host = rawHref;
      return url.href;
    }
  };
</script>

<input bind:value={name} placeholder="name" type="text" />
<input bind:value={rawHref} placeholder="href" type="text" />
<button
  on:click={() => {
    $appDB.favorites.push({ name, href: getHref(rawHref) });
    $appDB = $appDB;
  }}>Add</button
>
