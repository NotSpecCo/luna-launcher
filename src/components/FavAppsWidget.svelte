<script lang="ts">
  import { apps } from '../stores/apps';
  import AppGridItem from './AppGridItem.svelte';
  import WidgetPlaceholder from './WidgetPlaceholder.svelte';

  export let editing = false;
  export let onRemove: () => void;
  export let onMove: (direction: 'up' | 'down') => void;

  let favApps = [];
  $: favApps = $apps.filter((a) => a.isFavorite);
</script>

{#if editing}
  <WidgetPlaceholder id="favApps" name="Favorite Apps" height={46} {onRemove} {onMove} />
{:else}
  <div class="root">
    {#each favApps as app}
      <AppGridItem {app} />
    {/each}
  </div>
{/if}

<style>
  .root {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
