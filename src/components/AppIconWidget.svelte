<script lang="ts">
  import type { Widget } from '../models/Widget';
  import { apps } from '../stores/apps';
  import AppGridItem from './AppGridItem.svelte';

  export let widget: Widget<{
    appOrigin: string;
  }>;
  export let editing = false;

  const app = $apps.find((a) => a.origin === widget.data.appOrigin);
</script>

{#if editing}
  <div class="root editing">
    <AppGridItem {app} size={64} />
  </div>
{:else}
  <div class="root">
    <AppGridItem {app} size={64} />
  </div>
{/if}

<style>
  .root {
    display: inline-block;
  }
  .root.editing {
    border: 1px solid var(--accent-color);
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
</style>
