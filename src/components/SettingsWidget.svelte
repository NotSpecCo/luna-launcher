<script lang="ts">
  import FormRow from 'onyx-ui/components/form/FormRow.svelte';
  import Toggle from 'onyx-ui/components/form/Toggle.svelte';
  import { Onyx } from 'onyx-ui/services';
  import { onDestroy, onMount } from 'svelte';
  import type { Widget, WidgetType } from '../models';
  import { Settings } from '../services/settings';
  import WidgetPlaceholder from './WidgetPlaceholder.svelte';

  export let widget: Widget<any>;
  export let editing = false;
  export let onRemove: () => void;
  export let onMove: (direction: 'up' | 'down') => void;

  let status = false;
  let observer;
  let setting = getSettingsMethods(widget.type);

  onMount(async () => {
    observer = await setting.subscribe((val) => (status = val));
  });

  onDestroy(() => setting.unsubscribe(observer));

  function getSettingsMethods(type: WidgetType) {
    switch (type) {
      case 'airplaneMode':
        return Settings.airplaneMode;
      case 'bluetooth':
        return Settings.bluetooth;
      case 'cellData':
        return Settings.cellularData;
      case 'geolocation':
        return Settings.geolocation;
      case 'usbTether':
        return Settings.usbTether;
      case 'wifi':
        return Settings.wifi;
      case 'wifiTether':
        return Settings.wifiTether;
      default:
        throw new Error(`No methods found for type ${type}`);
    }
  }

  async function handleChange(val: boolean) {
    if (val) {
      await setting.enable();
    } else {
      await setting.disable();
    }
    status = val;
  }
</script>

{#if editing}
  <WidgetPlaceholder id={widget.id} name={widget.name} height={36} {onRemove} {onMove} />
{:else}
  <div class="root">
    <FormRow
      label={widget.name}
      navi={{ itemId: widget.id, onSelect: () => handleChange(!status) }}
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
      <Toggle value={status} />
    </FormRow>
  </div>
{/if}

<style>
  .root {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
