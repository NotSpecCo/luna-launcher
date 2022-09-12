<script lang="ts">
  import NavItem from 'onyx-ui/components/nav/NavItem.svelte';
  import Typography from 'onyx-ui/components/Typography.svelte';

  export let id: string;
  export let name: string;
  export let height: number;
</script>

<NavItem navi={{ itemId: id }}>
  <div class="root" style={`height: ${height}px;`}>
    <Typography>{name}</Typography>
  </div>
</NavItem>

<style>
  .root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--accent-color);
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
</style>
