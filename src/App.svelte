<script lang="ts">

  import Counter from './lib/Counter.svelte'
  import RzHeader from './lib/rz-header.svelte';
  
</script>

<RzHeader></RzHeader>

<div class="content">

  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>
 
</div>

<style>
.content{
 
  margin: calc(var(--base-padding) * 4);
}
</style>
