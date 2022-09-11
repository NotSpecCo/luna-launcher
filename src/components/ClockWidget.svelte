<script lang="ts">
  import { onMount } from 'svelte';
  import WidgetPlaceholder from './WidgetPlaceholder.svelte';

  export let editing = false;

  let now = new Date();

  onMount(async () => {
    setInterval(() => {
      now = new Date();
    }, 1000);
  });
</script>

{#if editing}
  <WidgetPlaceholder id="clock" name="Clock" height={47} />
{:else}
  <div class="root">
    <div class="time">{now.toLocaleTimeString()}</div>
    <div class="date">{now.toLocaleDateString()}</div>
  </div>
{/if}

<style>
  .root {
    text-align: center;
  }

  .time {
    font-weight: 600;
    font-size: 2rem;
  }
</style>
