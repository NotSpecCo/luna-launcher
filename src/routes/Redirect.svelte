<script lang="ts">
  import { onMount } from 'svelte';

  import { replace } from 'svelte-spa-router';

  onMount(() => {
    replace(`/home`);
    // replace(`/page/${$pages[0].id}`);
  });
</script>
