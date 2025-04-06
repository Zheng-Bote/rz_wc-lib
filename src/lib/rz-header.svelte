<svelte:options customElement="rz-header" /> 

<script lang="ts">
import RzFontsize from './rz-fontsize.svelte';
import RzTheme from './rz-theme.svelte';
import RzLanguage from './rz-language.svelte';

export let brand_img: string = "/img/icons/home-outline.svg";
export let brand_title: string = "Home";

export let login_url: string = "/login.html";

function goToHome() {
  window.location.href = "/";
}

function goToLogin() {
  window.location.href = login_url;
}
</script>

<header id="header">
  <nav id="nav">
      <span class="left brand" onclick="{goToHome}" aria-hidden="true">
        <img src="{brand_img}" alt="Home" title="Home"/>
        &nbsp;{brand_title}
      </span>
      <span class="right">
         <button onclick="{goToLogin}"><img src="/img/icons/log-in-outline.svg" alt="login" title="login"></button>
        <RzLanguage></RzLanguage>
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

  background-color: var(--background-color-header);
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
      cursor: pointer;
      & img {
        vertical-align: middle;
        width: 25px;
        height: auto;
      }
    }
    .right {
      grid-area: right;
      justify-content: end;
      opacity: 0.5;

      & button {
        width:35px;
        height:35px;
        background-color: var(--transparency);
        border: none;
      }
      & button:hover {
        border: var(--border-width) var(--border-style) var(--border-color);
        border-radius: var(--border-radius);
        cursor: pointer;
      }

      & img {
        width: 15px;
        height: auto;  
        decoding: auto;
      }
    }
  }
}
</style>