<script lang="ts">
  import ListItem from 'onyx-ui/components/list/ListItem.svelte';
  import Typography from 'onyx-ui/components/Typography.svelte';
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import MdAccessTime from 'svelte-icons/md/MdAccessTime.svelte';
  import MdAirplanemodeActive from 'svelte-icons/md/MdAirplanemodeActive.svelte';
  import MdAllOut from 'svelte-icons/md/MdAllOut.svelte';
  import MdBluetooth from 'svelte-icons/md/MdBluetooth.svelte';
  import MdDataUsage from 'svelte-icons/md/MdDataUsage.svelte';
  import MdLocationOn from 'svelte-icons/md/MdLocationOn.svelte';
  import MdNetworkCell from 'svelte-icons/md/MdNetworkCell.svelte';
  import MdSearch from 'svelte-icons/md/MdSearch.svelte';
  import MdWifi from 'svelte-icons/md/MdWifi.svelte';
  import MdWifiTethering from 'svelte-icons/md/MdWifiTethering.svelte';
  import { pop } from 'svelte-spa-router';
  import ListHeader from '../components/ListHeader.svelte';
  import Statusbar from '../components/Statusbar.svelte';
  import type { Widget, WidgetType } from '../models';
  import { apps } from '../stores/apps';
  import { pages } from '../stores/pages';
  import { generateId } from '../utils';

  export let params: { pageId: 'left' | 'center' | 'right' };

  function add(type: WidgetType, data: any = {}) {
    pages.addWidget(params.pageId, createWidget(type, data));
    pop();
  }

  function addApp(origin: string) {
    const widget = createWidget('appIcon');
    widget.data.appOrigin = origin;
    pages.addWidget(params.pageId, widget);
    pop();
  }

  function createWidget(type: WidgetType, data: any = {}): Widget<any> {
    let name = 'Unknown';
    switch (type) {
      case 'clock':
        name = 'Clock';
        break;
      case 'search':
        name = 'Search';
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
      case 'airplaneMode':
        name = 'Airplane Mode';
        break;
      case 'geolocation':
        name = 'Geolocation';
        break;
      case 'networkStats':
        name = 'Network Stats';
        break;
    }

    return {
      id: generateId(),
      name,
      type,
      data,
    };
  }
</script>

<View backgroundImageUrl="images/wallpaper2.png">
  <Statusbar />
  <ViewContent>
    <Typography type="titleLarge" align="center">Add a Widget</Typography>
    <ListHeader title="General" />
    <ListItem
      icon={MdAccessTime}
      primaryText="Clock"
      secondaryText="Displays date and time"
      navi={{ itemId: 'clock', onSelect: () => add('clock') }}
    />
    <ListItem
      icon={MdSearch}
      primaryText="Search"
      secondaryText="Open the search view"
      navi={{ itemId: 'search', onSelect: () => add('search') }}
    />
    <ListHeader title="Network" />
    <ListItem
      icon={MdDataUsage}
      primaryText="Network Stats (1 day)"
      secondaryText="Show data used over time"
      navi={{ itemId: 'networkStats1', onSelect: () => add('networkStats', { days: 1 }) }}
    />
    <ListItem
      icon={MdDataUsage}
      primaryText="Network Stats (7 days)"
      secondaryText="Show data used over time"
      navi={{ itemId: 'networkStats7', onSelect: () => add('networkStats', { days: 7 }) }}
    />
    <ListItem
      icon={MdDataUsage}
      primaryText="Network Stats (31 days)"
      secondaryText="Show data used over time"
      navi={{ itemId: 'networkStats31', onSelect: () => add('networkStats', { days: 31 }) }}
    />
    <ListHeader title="Spacers" />
    <ListItem
      icon={MdAllOut}
      primaryText="1x1 Spacer"
      secondaryText="Add some empty space"
      navi={{ itemId: 'spacer1x1', onSelect: () => add('spacer', { height: 1, width: 1 }) }}
    />
    <ListItem
      icon={MdAllOut}
      primaryText="1x4 Spacer"
      secondaryText="Add some empty space"
      navi={{ itemId: 'spacer1x4', onSelect: () => add('spacer', { height: 1, width: 4 }) }}
    />
    <ListItem
      icon={MdAllOut}
      primaryText="2x4 Spacer"
      secondaryText="Add some empty space"
      navi={{ itemId: 'spacer2x4', onSelect: () => add('spacer', { height: 2, width: 4 }) }}
    />
    <ListItem
      icon={MdAllOut}
      primaryText="4x4 Spacer"
      secondaryText="Add some empty space"
      navi={{ itemId: 'spacer4x4', onSelect: () => add('spacer', { height: 4, width: 4 }) }}
    />
    <ListHeader title="Settings" />
    <ListItem
      icon={MdAirplanemodeActive}
      primaryText="Airplane Mode"
      navi={{ itemId: 'airplaneMode', onSelect: () => add('airplaneMode') }}
    />
    <ListItem
      icon={MdBluetooth}
      primaryText="Bluetooth"
      navi={{ itemId: 'bluetooth', onSelect: () => add('bluetooth') }}
    />
    <ListItem
      icon={MdNetworkCell}
      primaryText="Cellular Data"
      navi={{ itemId: 'cellData', onSelect: () => add('cellData') }}
    />
    <ListItem
      icon={MdLocationOn}
      primaryText="Geolocation"
      navi={{ itemId: 'geolocation', onSelect: () => add('geolocation') }}
    />
    <ListItem
      icon={MdWifi}
      primaryText="Wi-Fi"
      navi={{ itemId: 'wifi', onSelect: () => add('wifi') }}
    />
    <ListItem
      icon={MdWifiTethering}
      primaryText="USB Tether"
      navi={{ itemId: 'usbTether', onSelect: () => add('usbTether') }}
    />
    <ListItem
      icon={MdWifiTethering}
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
