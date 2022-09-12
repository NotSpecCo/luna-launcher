<script lang="ts">
  import { onMount } from 'svelte';
  import type { Widget } from '../models';

  export let widget: Widget<any>;
  export let editing = false;

  let now = new Date();

  onMount(async () => {
    setInterval(() => {
      now = new Date();
    }, 1000);
  });
</script>

{#if editing}
  <div class="root editing">
    <div class="time">{now.toLocaleTimeString()}</div>
    <div class="date">{now.toLocaleDateString()}</div>
  </div>
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
  .root.editing {
    border: 1px solid var(--accent-color);
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  .time {
    font-weight: 600;
    font-size: 2rem;
  }
</style>
