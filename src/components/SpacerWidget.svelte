<script lang="ts">
  import type { Widget } from '../models/Widget';
  import WidgetPlaceholder from './WidgetPlaceholder.svelte';

  export let onRemove: () => void;
  export let onMove: (direction: 'up' | 'down') => void;

  export let widget: Widget<{
    height: number;
  }>;
  export let editing = false;
</script>

{#if editing}
  <WidgetPlaceholder
    id={widget.id}
    name={widget.name}
    height={widget.data.height}
    {onRemove}
    {onMove}
  />
{:else}
  <div class="root" style={`height: ${widget.data.height}px`} />
{/if}

<style>
  .root {
    display: block;
  }
</style>
