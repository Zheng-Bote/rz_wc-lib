<svelte:options customElement="rz-header" /> 

<script lang="ts">
  import { onMount } from 'svelte';

import RzFontsize from './rz-fontsize.svelte';
import RzTheme from './rz-theme.svelte';
import RzLanguage from './rz-language.svelte';

export let brand_img: string = "img/icons/home-outline.svg";
export let brand_title: string = "Home";

export let login_url: string = "login.html";

  let login_en = "Login";
  let login_de = "Anmeldung";
  let login:string = login_en;

  let goto_main_en = "goto mainpage";
  let goto_main_de = "zur Haupstseite";
  let goto_main:string = goto_main_en;

function goToHome() {
  window.location.href = "./";
}

function goToLogin() {
  window.location.href = login_url;
}

  function setLanguage(){
    let language = localStorage.getItem("language") || "en";
  
    switch(language){
      case "de":{
        login = login_de;
        goto_main = goto_main_de;
        break;
      }
      default:{
        login = login_en;
        goto_main = goto_main_en;
        break;
      }
    }
  }

  onMount(() => {
    setLanguage();
  });
</script>

<span class="rz-header">
<header id="header">
  <nav id="nav">
      <span class="left brand" onclick="{goToHome}" onfocus="{setLanguage}" onmouseover={setLanguage} aria-hidden="true" title="{goto_main}">
        <img src="{brand_img}" alt="{goto_main}" title="{goto_main}"/>
        &nbsp;{brand_title}
      </span>
      <span class="right">
         <button onclick="{goToLogin}" onfocus="{setLanguage}" onmouseover={setLanguage}><img src="img/icons/log-in-outline.svg" alt="{login}" title="{login}"></button>
        <RzLanguage></RzLanguage>
        <RzTheme></RzTheme>
        <RzFontsize></RzFontsize>
      </span>
  </nav>
</header>
</span>

<style>
  @scope(.rz-header){
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
        vertical-align: middle;
      }
    }
  }
}
  }
</style>