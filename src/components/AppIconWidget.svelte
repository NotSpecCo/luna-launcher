<script lang="ts">
  import NavItem from 'onyx-ui/components/nav/NavItem.svelte';
  import { Onyx } from 'onyx-ui/services';

  import type { Widget } from '../models/Widget';
  import { apps } from '../stores/apps';

  export let widget: Widget<{
    appOrigin: string;
  }>;
  export let editing = false;
  export let onRemove: () => void;
  export let onMove: (direction: 'up' | 'down') => void;

  const app = $apps.find((a) => a.origin === widget.data.appOrigin);
</script>

{#if editing}
  <NavItem
    navi={{ itemId: widget.id }}
    display="inline-block"
    contextMenu={{
      title: app.name,
      items: [
        {
          label: 'Remove',
          onSelect: () => {
            onRemove();
            Onyx.contextMenu.close();
          },
        },
      ],
    }}
  >
    <div class="root editing">
      <img
        class="icon"
        style={`height: ${58}px; width: ${58}px;`}
        src={app.getIconUrl('largest')}
        alt=""
      />
    </div>
  </NavItem>
{:else}
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
      style={`height: ${64}px; width: ${64}px;`}
      src={app.getIconUrl('largest')}
      alt=""
    />
  </NavItem>
{/if}

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
