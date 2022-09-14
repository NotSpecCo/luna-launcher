<script lang="ts">
  import Typography from 'onyx-ui/components/Typography.svelte';

  import ListItem from 'onyx-ui/components/list/ListItem.svelte';
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import { pop } from 'svelte-spa-router';
  import ListHeader from '../components/ListHeader.svelte';
  import Statusbar from '../components/Statusbar.svelte';
  import type { Widget, WidgetType } from '../models';
  import { apps } from '../stores/apps';
  import { pages } from '../stores/pages';
  import { generateId } from '../utils';

  export let params: { pageId: 'left' | 'center' | 'right' };

  function add(type: WidgetType) {
    pages.addWidget(params.pageId, createWidget(type));
    pop();
  }

  function addApp(origin: string) {
    const widget = createWidget('appIcon');
    widget.data.appOrigin = origin;
    pages.addWidget(params.pageId, widget);
    pop();
  }

  function createWidget(type: WidgetType): Widget<any> {
    let name = 'Unknown';
    switch (type) {
      case 'clock':
        name = 'Clock';
        break;
      case 'spacer':
        name = 'Spacer';
        break;
      case 'favApps':
        name = 'Favorite Apps';
        break;
      case 'wifi':
        name = 'Wi-Fi';
        break;
      case 'bluetooth':
        name = 'Bluetooth';
        break;
      case 'cellData':
        name = 'Cellular Data';
        break;
      case 'wifiTether':
        name = 'Wi-Fi Tether';
        break;
      case 'usbTether':
        name = 'USB Tether';
        break;
    }

    return {
      id: generateId(),
      name,
      type,
      data: {},
    };
  }
</script>

<View>
  <Statusbar />
  <ViewContent>
    <Typography type="titleLarge" align="center">Add a Widget</Typography>
    <ListHeader title="General" />
    <ListItem
      primaryText="Clock"
      secondaryText="Displays date and time"
      navi={{ itemId: 'clock', onSelect: () => add('clock') }}
    />
    <ListItem
      primaryText="Spacer"
      secondaryText="Empty space"
      navi={{ itemId: 'spacer', onSelect: () => add('spacer') }}
    />
    <ListItem
      primaryText="Favorite Apps"
      secondaryText="Grid of favorited apps"
      navi={{ itemId: 'favApps', onSelect: () => add('favApps') }}
    />
    <ListHeader title="Settings" />
    <ListItem
      primaryText="Bluetooth"
      navi={{ itemId: 'bluetooth', onSelect: () => add('bluetooth') }}
    />
    <ListItem
      primaryText="Cellular Data"
      navi={{ itemId: 'cellData', onSelect: () => add('cellData') }}
    />
    <ListItem primaryText="Wi-Fi" navi={{ itemId: 'wifi', onSelect: () => add('wifi') }} />
    <ListItem
      primaryText="USB Tether"
      navi={{ itemId: 'usbTether', onSelect: () => add('usbTether') }}
    />
    <ListItem
      primaryText="Wi-Fi Tether"
      navi={{ itemId: 'wifiTether', onSelect: () => add('wifiTether') }}
    />
    <ListHeader title="Apps" />
    {#each $apps as app}
      <ListItem
        imageUrl={app.getIconUrl('smallest')}
        primaryText={app.name}
        navi={{ itemId: app.origin, onSelect: () => addApp(app.origin) }}
      />
    {/each}
  </ViewContent>
</View>

<style>
</style>
