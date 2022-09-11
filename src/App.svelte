<script lang="ts">
  import { OnyxKeys } from 'onyx-keys';
  import { OnyxNavigation } from 'onyx-navigation';
  import OnyxApp from 'onyx-ui/components/app/OnyxApp.svelte';
  import { Onyx } from 'onyx-ui/services';
  import { onDestroy, onMount } from 'svelte';
  import Router, { pop } from 'svelte-spa-router';
  import AppMenu from './components/AppMenu.svelte';
  import AppList from './routes/AppList.svelte';
  import AppSettings from './routes/AppSettings.svelte';
  import Home from './routes/Home.svelte';
  import Redirect from './routes/Redirect.svelte';
  import { apps } from './stores/apps';
  import { settings } from './stores/settings';

  console.log(`Env: ${process.env.NODE_ENV}`);

  OnyxNavigation.startListening();

  const routes = {
    '/home': Home,
    '/apps': AppList,
    '/settings': AppSettings,
    '*': Redirect,
  };

  const keys = OnyxKeys.subscribe(
    {
      onBackspace: async (ev) => !ev.detail.targetIsInput && pop(),
    },
    { priority: 3 }
  );

  onMount(async () => {
    await apps.refresh();
    console.log('Apps:', $apps);
  });

  onDestroy(() => keys.unsubscribe());

  $: Onyx.settings.update($settings);
</script>

<OnyxApp>
  <AppMenu slot="app-menu" />
  <Router {routes} />
</OnyxApp>
