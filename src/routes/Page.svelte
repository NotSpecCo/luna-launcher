<script lang="ts">
  import { OnyxKeys } from 'onyx-keys';
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import { onDestroy } from 'svelte';
  import { replace } from 'svelte-spa-router';
  import ClockWidget from '../components/ClockWidget.svelte';
  import Statusbar from '../components/Statusbar.svelte';

  export let params: { pageId: string };

  let editing = false;

  const keys = OnyxKeys.subscribe({
    onArrowLeftLong: async (ev) => {
      params.pageId === 'right' && replace('/home');
    },
    onArrowRightLong: async (ev) => {
      params.pageId === 'left' && replace('/home');
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
    <ClockWidget {editing} />
  </ViewContent>
</View>

<style>
</style>
