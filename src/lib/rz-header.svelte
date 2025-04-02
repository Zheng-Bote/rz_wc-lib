<svelte:options customElement="rz-header" /> 

<script lang="ts">
import RzFontsize from './rz-fontsize.svelte';
import RzTheme from './rz-theme.svelte';
</script>

<header id="header">
  <nav id="nav">
      <span class="left">
        <img src="/img/icons/home-outline.svg" alt="Home" title="Home"/>
        &nbsp;Home
      </span>
      <span class="right">
        <RzTheme></RzTheme>
        <RzFontsize></RzFontsize>
      </span>
  </nav>
</header>


<style>
header{
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 50px;

  color: var(--font-color-header);

  nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "left right";
    height: 100%;

    .left,
    .right {
      display: flex;
      align-items: center;
      padding: 0 10px 0 10px;
    }
    .left {
      grid-area: left;
      /*opacity: 0.5;*/
      img {
        vertical-align: middle;
        width: 25px;
        height: auto;
      }
    }
    .right {
      grid-area: right;
      justify-content: end;
    }
  }

}
</style>