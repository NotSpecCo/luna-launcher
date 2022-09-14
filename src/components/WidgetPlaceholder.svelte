<script lang="ts">
  import NavItem from 'onyx-ui/components/nav/NavItem.svelte';
  import Typography from 'onyx-ui/components/Typography.svelte';
  import { Onyx } from 'onyx-ui/services';

  export let id: string;
  export let name: string;
  export let height: number;
  export let display: 'inline-block' | 'block' = 'block';
  export let onRemove: () => void;
  export let onMove: (direction: 'up' | 'down') => void;

  let style = `height: ${height}px;`;
  if (display === 'inline-block') {
    style += `width: ${height}px;`;
  }
</script>

<NavItem
  navi={{ itemId: id }}
  {display}
  contextMenu={{
    title: name,
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
  <div class="root" {style}>
    <Typography>{name}</Typography>
  </div>
</NavItem>

<style>
  .root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--accent-color);
    background-color: rgba(0, 0, 0, 0.5);
    margin: 5px;
    overflow: hidden;
  }
</style>
