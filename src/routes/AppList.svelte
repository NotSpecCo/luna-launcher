<script lang="ts">
  import { OnyxKeys } from 'onyx-keys';

  import NavItem from 'onyx-ui/components/nav/NavItem.svelte';
  import Typography from 'onyx-ui/components/Typography.svelte';
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import ViewHeader from 'onyx-ui/components/view/ViewHeader.svelte';
  import { onDestroy } from 'svelte';
  import AppListItem from '../components/AppListItem.svelte';
  import Statusbar from '../components/Statusbar.svelte';
  import type { App } from '../entities/App';
  import { apps } from '../stores/apps';
  import { settings } from '../stores/settings';

  let query = '';
  let results: App[] = [];
  let focusedApp: App | null;

  function jump(number: number) {
    focusedApp = null;

    let letters = [];
    switch (number) {
      case 2:
        letters = ['a', 'b', 'c'];
        break;
      case 3:
        letters = ['d', 'e', 'f'];
        break;
      case 4:
        letters = ['g', 'h', 'i'];
        break;
      case 5:
        letters = ['j', 'k', 'l'];
        break;
      case 6:
        letters = ['m', 'n', 'o'];
        break;
      case 7:
        letters = ['p', 'q', 'r', 's'];
        break;
      case 8:
        letters = ['t', 'u', 'v'];
        break;
      case 9:
        letters = ['w', 'x', 'y', 'z'];
        break;
    }

    let index = letters.findIndex((a) => a === query) + 1;
    if (index > letters.length - 1) {
      index = 0;
    }

    query = letters[index];
  }

  const keys = OnyxKeys.subscribe(
    {
      on2: async () => jump(2),
      on3: async () => jump(3),
      on4: async () => jump(4),
      on5: async () => jump(5),
      on6: async () => jump(6),
      on7: async () => jump(7),
      on8: async () => jump(8),
      on9: async () => jump(9),
    },
    { priority: 4 }
  );

  onDestroy(() => keys.unsubscribe());

  $: {
    results = query
      ? $apps.filter((a) => a.name.toLowerCase().startsWith(query.toLowerCase()))
      : $apps;
  }
</script>

<View>
  <Statusbar />
  <ViewHeader>
    {#if $settings.appListDisplay === 'grid' && focusedApp}
      <div class="app-info">
        <div class="name">{focusedApp?.name}</div>
        <div class="detail">
          v{focusedApp?.version}
        </div>
      </div>
    {/if}
  </ViewHeader>

  <ViewContent>
    {#if results.length === 0}
      <Typography align="center">No apps found for "{query}"</Typography>
    {/if}
    {#if $settings.appListDisplay === 'list'}
      {#each results as app}
        <AppListItem {app} />
      {/each}
    {:else}
      <div class="grid">
        {#each results as app}
          <NavItem
            navi={{
              itemId: app.origin,
              onSelect: () => app.launch(),
              onFocus: () => (focusedApp = app),
            }}
          >
            <img class="icon" src={app.getIconUrl('largest')} alt="" />
          </NavItem>
        {/each}
      </div>
    {/if}
  </ViewContent>
</View>

<style>
  .grid {
    display: grid;
    grid-template-columns: 41px 41px 41px 41px 41px;
    grid-auto-rows: 41px;
    grid-gap: 6px;
  }

  .icon {
    height: 41px;
  }

  .app-info {
    margin-bottom: 5px;
    text-align: center;
  }

  .app-info .name {
    font-weight: 600;
    font-size: 1.6rem;
  }
</style>
