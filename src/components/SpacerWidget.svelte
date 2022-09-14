<script lang="ts">
  import NavItem from 'onyx-ui/components/nav/NavItem.svelte';
  import { Onyx } from 'onyx-ui/services';
  import type { Widget } from '../models';

  export let widget: Widget<{ height: number; width: number }>;
  export let onRemove: () => void;
  export let onMove: (direction: 'up' | 'down') => void;

  const height = 60 * widget.data.height;
  const width = 60 * widget.data.width;
</script>

<NavItem
  display="inline-block"
  navi={{
    itemId: widget.id,
    onSelect: () => {},
    onFocus: () => {},
  }}
  contextMenu={{
    title: widget.name,
    items: [
      {
        label: 'Remove',
        onSelect: () => {
          onRemove();
          Onyx.contextMenu.close();
        },
      },
      {
        label: 'Move Up',
        onSelect: () => {
          onMove('up');
          Onyx.contextMenu.close();
        },
      },
      {
        label: 'Move Down',
        onSelect: () => {
          onMove('down');
          Onyx.contextMenu.close();
        },
      },
    ],
  }}
>
  <div class="root" style={`height: ${height}px; width: ${width}px`} />
</NavItem>

<style>
  .root {
  }
</style>
