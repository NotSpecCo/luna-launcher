<script lang="ts">
  import ToggleRow from 'onyx-ui/components/form/ToggleRow.svelte';
  import { onMount } from 'svelte';
  import type { Widget } from '../models';
  import { Settings } from '../services/settings';
  import WidgetPlaceholder from './WidgetPlaceholder.svelte';

  export let widget: Widget<any>;
  export let editing = false;
  export let onRemove: () => void;

  let status = false;
  onMount(async () => {
    status = await Settings.bluetooth.status();
  });

  async function handleChange(val: boolean) {
    if (val) {
      await Settings.bluetooth.enable();
    } else {
      await Settings.bluetooth.disable();
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
