<script>
  let count = 1;
  let text = "you are 1 year old";
  const incrementCount = () => {
    count = count * 2;
  };

  $: {
    text = "you are now " + count + " years old.";
  }
</script>

<main>
  <button on:click={incrementCount}>{text}</button>
</main>

<style>
</style>
