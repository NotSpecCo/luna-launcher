<script lang="ts">
  import { sub } from 'date-fns';
  import Icon from 'onyx-ui/components/icon/Icon.svelte';
  import NavItem from 'onyx-ui/components/nav/NavItem.svelte';
  import { Onyx } from 'onyx-ui/services';
  import { onMount } from 'svelte';
  import MdSimCard from 'svelte-icons/md/MdSimCard.svelte';
  import MdWifi from 'svelte-icons/md/MdWifi.svelte';
  import { NetworkType } from '../enums';
  import type { Widget } from '../models';
  import { Device } from '../services/device';

  export let widget: Widget<{ days: number }>;
  export let onRemove: () => void;
  export let onMove: (direction: 'up' | 'down') => void;

  let wifiSamples = [];
  let sim1Samples = [];
  let sim2Samples = [];
  let loading = true;

  onMount(async () => {
    const end = new Date();
    const start = sub(end, { days: widget.data.days + 1 });

    const wifi = await Device.getNetworkStats(NetworkType.Wifi, start, end);
    const sim1 = await Device.getNetworkStats(NetworkType.Sim1, start, end);
    const sim2 = await Device.getNetworkStats(NetworkType.Sim2, start, end);

    wifiSamples = wifi.data.reverse();
    sim1Samples = sim1.data.reverse();
    sim2Samples = sim2.data.reverse();

    loading = false;
  });

  function addSamples(samples: any[]): string {
    const bytes = samples.reduce((acc, val) => {
      acc += val.rxBytes;
      return acc;
    }, 0);

    const megabytes = (bytes / 1e6).toFixed(1);
    return `${megabytes} MB`;
  }
</script>

<NavItem
  navi={{
    itemId: widget.id,
    onSelect: () => {},
    onFocus: () => {},
  }}
  contextMenu={{
    title: widget.name,
    items: [
      {
        label: 'Remove',
        onSelect: () => {
          onRemove();
          Onyx.contextMenu.close();
        },
      },
      {
        label: 'Move Up',
        onSelect: () => {
          onMove('up');
          Onyx.contextMenu.close();
        },
      },
      {
        label: 'Move Down',
        onSelect: () => {
          onMove('down');
          Onyx.contextMenu.close();
        },
      },
    ],
  }}
>
  <div class="root">
    <div class="title" />
    <div class="data">
      <div><Icon><MdWifi /></Icon>{addSamples(wifiSamples.slice(0, widget.data.days))}</div>
      <div><Icon><MdSimCard /></Icon>{addSamples(sim1Samples.slice(0, widget.data.days))}</div>
      <div><Icon><MdSimCard /></Icon>{addSamples(sim2Samples.slice(0, widget.data.days))}</div>
    </div>
  </div>
</NavItem>

<style>
  .root {
    padding: 10px 5px;
  }

  .data {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }

  .data > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
