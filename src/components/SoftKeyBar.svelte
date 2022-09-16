<script lang="ts">
  export let left: string = '';
  export let center: string = '';
  export let right: string = '';
</script>

<div class="root">
  <div>{left}</div>
  <div class="center">{center}</div>
  <div class="right">{right}</div>
</div>

<style>
  .root {
    display: flex;
    font-weight: 600;
    padding: 5px;
  }
  .root > div {
    flex: 1;
  }

  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }
</style>
