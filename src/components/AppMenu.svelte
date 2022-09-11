<script lang="ts">
  import ListItem from 'onyx-ui/components/list/ListItem.svelte';
  import NavGroup from 'onyx-ui/components/nav/NavGroup.svelte';
  import { getShortcutFromIndex } from 'onyx-ui/utils';
  import { push } from 'svelte-spa-router';
  import Statusbar from './Statusbar.svelte';

  const items = [
    { title: 'Home', route: '/home' },
    { title: 'Apps', route: '/apps' },
    { title: 'Launcher', route: '/settings' },
    { title: 'Device', route: '/device' },
  ];
</script>

<NavGroup groupId="app-menu">
  <Statusbar />
  {#each items as item, i}
    <ListItem
      primaryText={item.title}
      navi={{
        itemId: item.route,
        shortcutKey: getShortcutFromIndex(i),
        onSelect: () => push(item.route),
      }}
    />
  {/each}
</NavGroup>

<style>
  :global([data-onyx-group-id='app-menu']) {
    border-radius: 0 var(--radius) var(--radius) 0;
    background-color: var(--card-color);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
