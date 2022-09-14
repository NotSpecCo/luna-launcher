<script lang="ts">
  import type { Widget } from '../models/Widget';

  export let onRemove: () => void;
  export let onMove: (direction: 'up' | 'down') => void;

  export let widget: Widget<{
    height: number;
  }>;
</script>

<div class="root" style={`height: ${widget.data.height}px`} />

<style>
  .root {
    display: block;
  }
</style>
