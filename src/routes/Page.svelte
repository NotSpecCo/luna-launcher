<script lang="ts">
  import { OnyxKeys } from 'onyx-keys';
  import Button from 'onyx-ui/components/buttons/Button.svelte';
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import { onDestroy } from 'svelte';
  import { push, replace } from 'svelte-spa-router';
  import AppIconWidget from '../components/AppIconWidget.svelte';
  import ClockWidget from '../components/ClockWidget.svelte';
  import SettingsWidget from '../components/SettingsWidget.svelte';
  import SpacerWidget from '../components/SpacerWidget.svelte';
  import Statusbar from '../components/Statusbar.svelte';
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
      case 'wifi':
        return SettingsWidget;
      case 'cellData':
        return SettingsWidget;
      case 'bluetooth':
        return SettingsWidget;
      case 'wifiTether':
        return SettingsWidget;
      case 'usbTether':
        return SettingsWidget;
      case 'airplaneMode':
        return SettingsWidget;
      case 'geolocation':
        return SettingsWidget;
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
    {#each page.widgets as widget (widget.id)}
      <svelte:component
        this={getComponent(widget.type)}
        {widget}
        {editing}
        onRemove={() => pages.removeWidget(page.id, widget.id)}
        onMove={(dir) => pages.moveWidget(page.id, widget.id, dir)}
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
