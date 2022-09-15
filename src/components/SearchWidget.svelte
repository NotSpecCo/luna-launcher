<script lang="ts">
  import Icon from 'onyx-ui/components/icon/Icon.svelte';
  import NavItem from 'onyx-ui/components/nav/NavItem.svelte';
  import { IconSize } from 'onyx-ui/enums';
  import { Onyx } from 'onyx-ui/services';
  import MdSearch from 'svelte-icons/md/MdSearch.svelte';
  import { push } from 'svelte-spa-router';
  import type { Widget } from '../models';

  export let widget: Widget<any>;
  export let onRemove: () => void;
  export let onMove: (direction: 'up' | 'down') => void;
</script>

<NavItem
  navi={{
    itemId: widget.id,
    onSelect: () => push('/search'),
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
    <Icon size={IconSize.Small}><MdSearch /></Icon>
    <div class="text">Search...</div>
  </div>
</NavItem>

<style>
  .root {
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 10px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    padding: 5px 10px;
  }

  .text {
    margin-left: 5px;
  }
</style>
