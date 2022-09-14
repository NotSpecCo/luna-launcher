<script lang="ts">
  import NavItem from 'onyx-ui/components/nav/NavItem.svelte';
  import { Onyx } from 'onyx-ui/services';
  import type { Widget } from '../models/Widget';
  import { apps } from '../stores/apps';

  export let widget: Widget<{
    appOrigin: string;
  }>;
  export let onRemove: () => void;
  export let onMove: (direction: 'up' | 'down') => void;

  const app = $apps.find((a) => a.origin === widget.data.appOrigin);
</script>

<NavItem
  display="inline-block"
  navi={{
    itemId: app.origin,
    onSelect: () => app.launch(),
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
  <img
    class="icon"
    style={`height: ${60}px; width: ${60}px;`}
    src={app.getIconUrl('largest')}
    alt=""
  />
</NavItem>

<style>
  .root {
    display: inline-block;
  }
  .root.editing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--accent-color);
    background-color: rgba(0, 0, 0, 0.5);
    margin: 3px;
    overflow: hidden;
  }
</style>
