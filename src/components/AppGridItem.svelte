<script lang="ts">
  import NavItem from 'onyx-ui/components/nav/NavItem.svelte';
  import { Onyx } from 'onyx-ui/services';
  import type { App } from '../entities';

  export let app: App;
</script>

<NavItem
  navi={{
    itemId: app.origin,
    onSelect: () => app.launch(),
    onFocus: () => {},
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
>
  <img class="icon" src={app.getIconUrl('largest')} alt="" />
</NavItem>

<style>
  .icon {
    height: 42px;
    width: 42px;
  }
</style>
