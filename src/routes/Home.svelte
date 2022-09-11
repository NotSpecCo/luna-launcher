<script lang="ts">
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import { onMount } from 'svelte';
  import Statusbar from '../components/Statusbar.svelte';

  let now = new Date();

  onMount(async () => {
    setInterval(() => {
      now = new Date();
    }, 1000);
  });
</script>

<View>
  <Statusbar />
  <ViewContent>
    <div class="datetime">
      <div class="time">{now.toLocaleTimeString()}</div>
      <div class="date">{now.toLocaleDateString()}</div>
    </div>
  </ViewContent>
</View>

<style>
  .datetime {
    margin-bottom: 5px;
    text-align: center;
  }

  .time {
    font-weight: 600;
    font-size: 1.6rem;
  }
</style>
