<script lang="ts">
  import Counter from "./lib/Counter.svelte";
</script>

<div class="w-full min-h-screen flex justify-center pt-8 bg-main">
  <div class="w-3/4 h-full flex flex-col items-center gap-4 ">
    <Counter />
  </div>
</div>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
