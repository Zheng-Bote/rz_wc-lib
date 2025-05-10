<svelte:options customElement="rz-imagecard" /> 

<script lang="ts">
export let img:string ="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KCTx0aXRsZT5IVE1MNSBMb2dvPC90aXRsZT4KCTxwYXRoIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzTTI1OS41IDBoMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjhsLTE2LjEtMjQuOHYzNC4yaC0yMi42TTM0OC43IDBoMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+Cgk8cGF0aCBmaWxsPSIjZTQ0ZDI2IiBkPSJNMTA3LjYgNDcxbC0zMy0zNzAuNGgzNjIuOGwtMzMgMzcwLjJMMjU1LjcgNTEyIi8+Cgk8cGF0aCBmaWxsPSIjZjE2NTI5IiBkPSJNMjU2IDQ4MC41VjEzMUg0MDQuM0wzNzYgNDQ3Ii8+Cgk8cGF0aCBmaWxsPSIjZWJlYmViIiBkPSJNMTQyIDE3Ni4zaDExNHY0NS40aC02NC4ybDQuMiA0Ni41aDYwdjQ1LjNIMTU0LjRNMTU2LjQgMzM2LjNIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+Cgk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNk0zNjEuMyAyNjguMkgyNTUuOHY0NS40aDU2bC01LjMgNTktNTAuNyAxMy42djQ3LjJsOTMtMjUuOCIvPgo8L3N2Zz4=";
export let title:string;
export let desc:string = "";
export let divfigcaption:string = "no";

</script>


<li class="card">
  <figure>
    <img src="{img}" alt="">
    {#if typeof title !== "undefined"}
    {#if divfigcaption == "yes"}
      <div class="figcaption">  
      <h3>{title}</h3>
      {desc}
    </div>
    {:else}
      <figcaption>  
        <h3>{title}</h3>
        {desc}
      </figcaption>
    {/if}
  {/if}
  </figure>
</li>



<style>
 /*
 .imagecards{
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
}
*/
    .card {
      /*background: var(--img-card-background-color);*/
      border: var(--card-border-width) var(--card-border-style) var(--card-border-color);
      border-radius: var(--card-border-radius);
      box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
      padding-bottom: 1rem;

      position: relative;
    }

    .card > :last-child {
      margin-bottom: 0;
    }

    h3 {
      margin-top: 1rem;
    }

    img {
      border-radius: 0.5rem 0.5rem 0 0;
      max-width: 100%;
    }

    img ~ * {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    .figcaption {
       position: absolute;
       bottom: 0px;

       color: var (--card-font-color);
       background-color: var(--card-background-color);
       width: 100%;
       margin: auto;
       border-radius: 0 0 var(--card-border-radius) var(--card-border-radius);
       padding: 0 5px 5px 5px;
    }
    figcaption {
       
       color: var (--card-figcaption-font-color);
       background-color: var(--card-figcaption-background-color);
       width: 100%;
       margin: auto;
       padding: 0 5px 5px 5px;
       
    }

</style>