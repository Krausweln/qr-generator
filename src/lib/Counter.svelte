<script lang="ts">
  import axios from "axios";

  let data = "";
  let size = undefined;
  let render = null;
  let isOnline = navigator.onLine;
  $: link = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURI(
    data
  )}&size=${size}x${size}&format=png`;

  const checkOnline = async () => {
    try {
      const xhr = await axios.get("https://dummyjson.com/products/1");
      if (xhr.statusText === "OK") {
        isOnline = true;
        return;
      }
    } catch (error) {
      isOnline = false;
      console.log(error);
      return;
    }
  };

  setInterval(() => {
    checkOnline();
  }, 3000);

  const handleSubmit = () => {
    data = "";
    size = undefined;
    render = link;
  };

  console.log(navigator.onLine);
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class=" w-full flex flex-col items-center gap-4"
>
  <input
    type="text"
    disabled={!isOnline}
    name="data"
    placeholder="data"
    class={`rounded-lg  px-4 py-2  `}
    bind:value={data}
    minlength="1"
    required
    maxlength="100"
  />

  <input
    type="number"
    placeholder="size"
    name="size"
    bind:value={size}
    class="rounded-lg px-4 py-2"
    maxlength="1000"
    max="1000"
  />
  <div class="flex justify-evenly items-center gap-8">
    <button type="submit" class=" px-4 py-2 bg-white rounded-lg text-black"
      >generate</button
    >
    <!-- {#if render}
      <a
        href={render}
        download="qr"
        target="_blank"
        rel="noreferrer"
        class="px-4 py-2 bg-white rounded-lg text-black">download</a
      >
    {/if} -->
  </div>
</form>

<img src={render} alt="" />
