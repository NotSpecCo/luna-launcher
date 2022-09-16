<script lang="ts">
  import { OnyxKeys } from 'onyx-keys';
  import Button from 'onyx-ui/components/buttons/Button.svelte';
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import { onDestroy } from 'svelte';
  import { push, replace } from 'svelte-spa-router';
  import AppIconWidget from '../components/AppIconWidget.svelte';
  import ClockWidget from '../components/ClockWidget.svelte';
  import NetworkStatsWidget from '../components/NetworkStatsWidget.svelte';
  import SearchWidget from '../components/SearchWidget.svelte';
  import SettingsWidgetRow from '../components/SettingsWidgetRow.svelte';
  import SpacerWidget from '../components/SpacerWidget.svelte';
  import Statusbar from '../components/Statusbar.svelte';
  import type { WidgetType } from '../models';
  import { pages } from '../stores/pages';

  export let params: { pageId: 'left' | 'center' | 'right' };

  let page = $pages.find((a) => a.id === params.pageId);
  $: page = $pages.find((a) => a.id === params.pageId);

  function getComponent(widgetType: WidgetType) {
    switch (widgetType) {
      case 'clock':
        return ClockWidget;
      case 'spacer':
        return SpacerWidget;
      case 'search':
        return SearchWidget;
      case 'networkStats':
        return NetworkStatsWidget;
      case 'appIcon':
        return AppIconWidget;
      case 'wifi':
        return SettingsWidgetRow;
      case 'cellData':
        return SettingsWidgetRow;
      case 'bluetooth':
        return SettingsWidgetRow;
      case 'wifiTether':
        return SettingsWidgetRow;
      case 'usbTether':
        return SettingsWidgetRow;
      case 'airplaneMode':
        return SettingsWidgetRow;
      case 'geolocation':
        return SettingsWidgetRow;
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
    on1: async () => {
      push('/dialer?number=1');
    },
    on2: async () => {
      push('/dialer?number=2');
    },
    on3: async () => {
      push('/dialer?number=3');
    },
    on4: async () => {
      push('/dialer?number=4');
    },
    on5: async () => {
      push('/dialer?number=5');
    },
    on6: async () => {
      push('/dialer?number=6');
    },
    on7: async () => {
      push('/dialer?number=7');
    },
    on8: async () => {
      push('/dialer?number=8');
    },
    on9: async () => {
      push('/dialer?number=9');
    },
    on0: async () => {
      push('/dialer?number=0');
    },
  });

  onDestroy(() => keys.unsubscribe());
</script>

<View backgroundImageUrl="images/wallpaper2.png">
  <Statusbar />
  <ViewContent>
    {#each page.widgets as widget (widget.id)}
      <svelte:component
        this={getComponent(widget.type)}
        {widget}
        onRemove={() => pages.removeWidget(page.id, widget.id)}
        onMove={(dir) => pages.moveWidget(page.id, widget.id, dir)}
      />
    {/each}
    <Button
      title="Add Widget"
      navi={{ itemId: 'btnAdd', onSelect: () => push(`/page/${params.pageId}/add`) }}
    />
  </ViewContent>
</View>

<style>
</style>
