<svelte:options customElement="rz-online" /> 

<script lang="ts">
	let online: boolean = true;
  export let with_text: string = "";
</script>


<svelte:window bind:online />


<span class="isonline">
  <span class="online-status online-{online}"></span>
  {#if with_text === "yes"}
    {online ? "online" : "offline"}
  {/if}
</span>


<style>
  .online-status {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .online-true {
    background-color: green;
  }

  .online-false {
    background-color: red;
  }
</style>