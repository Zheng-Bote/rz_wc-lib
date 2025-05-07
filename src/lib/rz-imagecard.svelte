<svelte:options customElement="rz-imagecard" /> 

<script lang="ts">
export let img:string ="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KCTx0aXRsZT5IVE1MNSBMb2dvPC90aXRsZT4KCTxwYXRoIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzTTI1OS41IDBoMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjhsLTE2LjEtMjQuOHYzNC4yaC0yMi42TTM0OC43IDBoMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+Cgk8cGF0aCBmaWxsPSIjZTQ0ZDI2IiBkPSJNMTA3LjYgNDcxbC0zMy0zNzAuNGgzNjIuOGwtMzMgMzcwLjJMMjU1LjcgNTEyIi8+Cgk8cGF0aCBmaWxsPSIjZjE2NTI5IiBkPSJNMjU2IDQ4MC41VjEzMUg0MDQuM0wzNzYgNDQ3Ii8+Cgk8cGF0aCBmaWxsPSIjZWJlYmViIiBkPSJNMTQyIDE3Ni4zaDExNHY0NS40aC02NC4ybDQuMiA0Ni41aDYwdjQ1LjNIMTU0LjRNMTU2LjQgMzM2LjNIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+Cgk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNk0zNjEuMyAyNjguMkgyNTUuOHY0NS40aDU2bC01LjMgNTktNTAuNyAxMy42djQ3LjJsOTMtMjUuOCIvPgo8L3N2Zz4=";
export let title:string = "HTML5";
export let desc:string = "HTML5 ist the current version of the Hypertext MArkup Language.";

</script>


<div class="card">
  <img src="{img}" alt="">
  <div class="txt">
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
</div>



<style>
  @scope (.imagecards){
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;

    .card {
      background: var(--img-card-background-color);
      border-radius: 0.5rem;
      box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
      padding-bottom: 1rem;

      width:300px;
      height: 300px;

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
      width: 100%;
    }

    img ~ * {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    .card .txt {
      position: absolute;
      bottom: 0; 
      width:90%;

      color: var (--img-card-font-color);
      text-wrap: pretty;
    }
  }
</style>