<script lang="ts">
  import NavItem from 'onyx-ui/components/nav/NavItem.svelte';
  import Typography from 'onyx-ui/components/Typography.svelte';

  export let editing = false;
</script>

{#if editing}
  <div class="root editing">
    <NavItem navi={{ itemId: 'flex' }}>
      <Typography>Flex</Typography>
    </NavItem>
  </div>
{:else}
  <div class="root" />
{/if}

<style>
  :global([data-onyx-scroller]) {
    display: flex;
    flex-direction: column;
  }

  .root {
    flex: 1;
  }
  .root.editing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--accent-color);
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
