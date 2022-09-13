<script lang="ts">
  import { onMount } from 'svelte';
  import type { Widget } from '../models';
  import WidgetPlaceholder from './WidgetPlaceholder.svelte';

  export let widget: Widget<any>;
  export let editing = false;
  export let onRemove: () => void;

  let now = new Date();

  onMount(async () => {
    setInterval(() => {
      now = new Date();
    }, 1000);
  });
</script>

{#if editing}
  <WidgetPlaceholder id={widget.id} name={widget.name} height={36} {onRemove} />
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
