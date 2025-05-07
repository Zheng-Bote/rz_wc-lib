<svelte:options customElement="rz-navmenu" /> 

<script lang="ts">
  import { onMount } from 'svelte';

  export let json_url:string = "http://localhost:5173/rz-navmenu.json";
export let current_id:string = "main";

  let menuData: string[] = [];


  async function getJson(){
    try {
      const response = await fetch(json_url);
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
      } else {
        menuData = await response.json();
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function goTo(link:string = "") {
    console.info("link: ", link);
    window.location.href=`${link}`;
  }

  onMount(() => {
    getJson();
  });
</script>

<div class="rz-navmenu">
  {#each menuData as item}
    {#if current_id === item.id}
      <button id="{item.id}" class="active">
        {#if item.icon !== ""}
          <img src="{item.icon}" alt="{item.name}" />
        {/if}
        {item.name}
      </button> 
    {:else}
      <button id="{item.id}" onclick={() => goTo(`${item.link}`)}>
        {#if item.icon !== ""}
          <img src="{item.icon}" alt="{item.name}" />
        {/if}
        {item.name}
      </button> 
    {/if}
  {/each}
</div>


<style>

@scope (.rz-navmenu){
 button {
    width:100px;
    height:35px;
    background-color: var(--transparency-light);
    border: var(--border-width) var(--border-style) var(--border-color);
    border-radius: var(--border-radius);
    /*display: block;*/
    /*margin: var(--base-padding) 0 var(--base-padding) 0;*/
    margin:var(--base-padding);
  }
  button:not(.active):hover {
    background-color: var(--secondary-color);
    border: var(--border-width) var(--border-style) var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  .active {
    background-color: var(--secondary-color);
    /*text-shadow: 2px 2px rgba(0, 0, 0, 0.3); */
    font-weight: bold;
  }
  img {
    width: 15px;
    height: auto;  
    decoding: auto;
    vertical-align: middle;
  }

  @media screen and (min-width: 1024px) {
  button {
    display: block;
    margin: var(--base-padding) 0 var(--base-padding) 0;
  }
}

}
</style>
