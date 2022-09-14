<script lang="ts">
  import NavItem from 'onyx-ui/components/nav/NavItem.svelte';
  import { Onyx } from 'onyx-ui/services';

  import { onMount } from 'svelte';
  import type { Widget } from '../models';
  import WidgetPlaceholder from './WidgetPlaceholder.svelte';

  export let widget: Widget<any>;
  export let editing = false;
  export let onRemove: () => void;
  export let onMove: (direction: 'up' | 'down') => void;

  let now = new Date();

  onMount(async () => {
    setInterval(() => {
      now = new Date();
    }, 1000);
  });
</script>

{#if editing}
  <WidgetPlaceholder id={widget.id} name={widget.name} height={36} {onRemove} {onMove} />
{:else}
  <NavItem
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
    <div class="root">
      <div class="time">{now.toLocaleTimeString()}</div>
      <div class="date">{now.toLocaleDateString()}</div>
    </div>
  </NavItem>
{/if}

<style>
  .root {
    text-align: center;
    padding: 7px;
  }

  .time {
    font-weight: 600;
    font-size: 2rem;
  }
</style>
