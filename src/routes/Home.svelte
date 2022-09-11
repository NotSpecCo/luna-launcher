<script lang="ts">
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import { onMount } from 'svelte';
  import AppGridItem from '../components/AppGridItem.svelte';
  import Statusbar from '../components/Statusbar.svelte';
  import { apps } from '../stores/apps';

  let now = new Date();
  let favApps = [];
  $: favApps = $apps.filter((a) => a.isFavorite);

  onMount(async () => {
    setInterval(() => {
      now = new Date();
    }, 1000);
  });
</script>

<View backgroundImageUrl="images/wallpaper.png">
  <Statusbar />
  <ViewContent>
    <div class="datetime">
      <div class="time">{now.toLocaleTimeString()}</div>
      <div class="date">{now.toLocaleDateString()}</div>
    </div>
    <div class="flex" />
    <div class="apps">
      {#each favApps as app}
        <AppGridItem {app} />
      {/each}
    </div>
  </ViewContent>
</View>

<style>
  :global([data-onyx-scroller]) {
    display: flex;
    flex-direction: column;
  }

  .flex {
    flex: 1;
  }

  .datetime {
    margin-bottom: 5px;
    text-align: center;
  }

  .time {
    font-weight: 600;
    font-size: 1.6rem;
  }

  .apps {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
