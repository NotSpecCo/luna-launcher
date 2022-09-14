<script lang="ts">
  import { OnyxKeys } from 'onyx-keys';
  import Button from 'onyx-ui/components/buttons/Button.svelte';
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import { onDestroy } from 'svelte';
  import { push, replace } from 'svelte-spa-router';
  import AirplaneModeWidget from '../components/AirplaneModeWidget.svelte';
  import AppIconWidget from '../components/AppIconWidget.svelte';
  import BluetoothWidget from '../components/BluetoothWidget.svelte';
  import CellDataWidget from '../components/CellDataWidget.svelte';
  import ClockWidget from '../components/ClockWidget.svelte';
  import FavAppsWidget from '../components/FavAppsWidget.svelte';
  import SpacerWidget from '../components/SpacerWidget.svelte';
  import Statusbar from '../components/Statusbar.svelte';
  import UsbTetherWidget from '../components/UsbTetherWidget.svelte';
  import WifiTetherWidget from '../components/WifiTetherWidget.svelte';
  import WifiWidget from '../components/WifiWidget.svelte';
  import type { WidgetType } from '../models';
  import { pages } from '../stores/pages';

  export let params: { pageId: 'left' | 'center' | 'right' };

  let page = $pages.find((a) => a.id === params.pageId);
  $: page = $pages.find((a) => a.id === params.pageId);

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
      case 'wifi':
        return WifiWidget;
      case 'cellData':
        return CellDataWidget;
      case 'bluetooth':
        return BluetoothWidget;
      case 'wifiTether':
        return WifiTetherWidget;
      case 'usbTether':
        return UsbTetherWidget;
      case 'airplaneMode':
        return AirplaneModeWidget;
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
    {#each page.widgets as widget}
      <svelte:component
        this={getComponent(widget.type)}
        {widget}
        {editing}
        onRemove={() => pages.removeWidget(page.id, widget.id)}
      />
    {/each}
    {#if editing}
      <Button
        title="Add Widget"
        navi={{ itemId: 'btnAdd', onSelect: () => push(`/page/${params.pageId}/add`) }}
      />
    {/if}
  </ViewContent>
</View>

<style>
</style>
