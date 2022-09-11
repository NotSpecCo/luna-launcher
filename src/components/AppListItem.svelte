<script lang="ts">
  import ListItem from 'onyx-ui/components/list/ListItem.svelte';
  import { Onyx } from 'onyx-ui/services';
  import type { App } from '../entities';

  export let app: App;
</script>

<ListItem
  imageUrl={app.getIconUrl('smallest')}
  primaryText={app.name}
  navi={{
    itemId: app.origin,
    onSelect: () => app.launch(),
  }}
  contextMenu={{
    title: app.name,
    items: [
      app.isFavorite
        ? {
            label: 'Remove Favorite',
            onSelect: () => {
              app.removeFavorite();
              Onyx.contextMenu.close();
            },
          }
        : {
            label: 'Add Favorite',
            onSelect: () => {
              app.addFavorite();
              Onyx.contextMenu.close();
            },
          },
    ],
  }}
/>
