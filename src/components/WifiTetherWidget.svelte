<script lang="ts">
  import ToggleRow from 'onyx-ui/components/form/ToggleRow.svelte';
  import { onDestroy, onMount } from 'svelte';
  import type { Widget } from '../models';
  import { Settings } from '../services/settings';
  import WidgetPlaceholder from './WidgetPlaceholder.svelte';

  export let widget: Widget<any>;
  export let editing = false;
  export let onRemove: () => void;

  let status = false;
  let observer;
  onMount(async () => {
    observer = await Settings.wifiTethering.subscribe((val) => (status = val));
  });

  onDestroy(() => Settings.wifiTethering.unsubscribe(observer));

  async function handleChange(val: boolean) {
    if (val) {
      await Settings.wifiTethering.enable();
    } else {
      await Settings.wifiTethering.disable();
    }
    status = val;
  }
</script>

{#if editing}
  <WidgetPlaceholder id={widget.id} name={widget.name} height={36} {onRemove} />
{:else}
  <div class="root">
    <ToggleRow label={widget.name} value={status} onChange={(val) => handleChange(val)} />
  </div>
{/if}

<style>
  .root {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
