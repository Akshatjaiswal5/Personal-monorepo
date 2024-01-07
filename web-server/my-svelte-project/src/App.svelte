<script>
  let items = [];
  let newItem = "";

  function addNewItem() {
    items = [...items, newItem];
    newItem = "";
  }
</script>

<main>
  <ul>
    {#each items as item (item)}
      <li>
        <button>{item}</button>
      </li>
    {/each}
  </ul>
  <input type="text" bind:value={newItem} />
  <button on:click={addNewItem}>Add new item</button>
</main>

<style>
</style>
