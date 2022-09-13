<script lang="ts">
  import NavItem from 'onyx-ui/components/nav/NavItem.svelte';
  import { Onyx } from 'onyx-ui/services';

  import type { Widget } from '../models/Widget';
  import { apps } from '../stores/apps';
  import AppGridItem from './AppGridItem.svelte';

  export let widget: Widget<{
    appOrigin: string;
  }>;
  export let editing = false;
  export let onRemove: () => void;

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
  <div class="root">
    <AppGridItem {app} size={64} />
  </div>
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
