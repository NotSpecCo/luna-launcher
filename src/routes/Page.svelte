<script lang="ts">
  import { OnyxKeys } from 'onyx-keys';
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import { onDestroy } from 'svelte';
  import { replace } from 'svelte-spa-router';
  import AppIconWidget from '../components/AppIconWidget.svelte';
  import ClockWidget from '../components/ClockWidget.svelte';
  import FavAppsWidget from '../components/FavAppsWidget.svelte';
  import SpacerWidget from '../components/SpacerWidget.svelte';
  import Statusbar from '../components/Statusbar.svelte';
  import type { Widget, WidgetType } from '../models';

  export let params: { pageId: 'left' | 'center' | 'right' };

  let widgets: Widget<any>[];

  $: {
    if (params.pageId === 'left') {
      widgets = [
        { id: '1', type: 'clock', name: 'Clock', data: {} },
        // { id: 'spacer1', type: 'spacer', name: 'Spacer', data: { height: 30 } },
        // { id: '2', type: 'appIcon', name: 'App Item', data: { appOrigin: '1' } },
        // { id: '3', type: 'appIcon', name: 'App Item', data: { appOrigin: '2' } },
        // { id: '4', type: 'appIcon', name: 'App Item', data: { appOrigin: '3' } },
        // { id: '5', type: 'appIcon', name: 'App Item', data: { appOrigin: '4' } },
        // { id: '6', type: 'appIcon', name: 'App Item', data: { appOrigin: '5' } },
        // { id: '7', type: 'appIcon', name: 'App Item', data: { appOrigin: '6' } },
        // { id: '8', type: 'appIcon', name: 'App Item', data: { appOrigin: '7' } },
        // { id: '9', type: 'appIcon', name: 'App Item', data: { appOrigin: '8' } },
        // { id: '0', type: 'appIcon', name: 'App Item', data: { appOrigin: '9' } },
      ];
    } else if (params.pageId === 'center') {
      widgets = [
        { id: '1', type: 'clock', name: 'Clock', data: {} },
        { id: '2', type: 'spacer', name: 'Spacer', data: { height: 200 } },
        { id: '3', type: 'favApps', name: 'Favorite Apps', data: {} },
      ];
    } else if (params.pageId === 'right') {
      widgets = [{ id: '1', type: 'clock', name: 'Clock', data: {} }];
    }
  }

  let editing = false;

  function getComponent(widgetType: WidgetType) {
    switch (widgetType) {
      case 'clock':
        return ClockWidget;
      case 'appIcon':
        return AppIconWidget;
      case 'spacer':
        return SpacerWidget;
      case 'favApps':
        return FavAppsWidget;
    }
  }

  const keys = OnyxKeys.subscribe({
    onArrowLeftLong: async (ev) => {
      switch (params.pageId) {
        case 'center':
          replace('/page/left');
          break;
        case 'right':
          replace('/page/center');
          break;
      }
    },
    onArrowRightLong: async (ev) => {
      switch (params.pageId) {
        case 'left':
          replace('/page/center');
          break;
        case 'center':
          replace('/page/right');
          break;
      }
    },
    onSoftRightLong: async (ev) => {
      editing = !editing;
    },
  });

  onDestroy(() => keys.unsubscribe());
</script>

<View backgroundImageUrl="images/wallpaper.png">
  <Statusbar />
  <ViewContent>
    {#each widgets as widget}
      <svelte:component this={getComponent(widget.type)} {widget} {editing} />
    {/each}
  </ViewContent>
</View>

<style>
</style>
