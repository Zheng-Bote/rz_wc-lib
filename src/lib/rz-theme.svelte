<svelte:options customElement="rz-theme" /> 

<script lang="ts">
import { onMount } from 'svelte';

let currentMode: string = "";
let dark: string = "img/icons/moon-outline.svg";
let light: string = "img/icons/sunny-outline.svg";
let icon: string = "";

let dark_txt_en = "dark";
let dark_txt_de = "dunkel";
let dark_txt:string = dark_txt_en;

let light_txt_en = "light";
let light_txt_de = "hell";
let light_txt:string = light_txt_en;

  function setLanguage(){
    let language = localStorage.getItem("language") || "en";
  
    switch(language){
      case "de":{
        dark_txt = dark_txt_de;
        light_txt = light_txt_de;
        break;
      }
      default:{
        dark_txt = dark_txt_en;
        light_txt = light_txt_en;
        break;
      }
    }
  }

  function  handleToggle() {
    currentMode = localStorage.getItem("theme") || "";

    if (currentMode === "light") {
      currentMode = "dark";
      icon = light;
    } else {
      currentMode = "light";
      icon = dark;
    }

    document.documentElement.setAttribute("data-theme", currentMode);
    localStorage.setItem("theme", currentMode);
    //console.info("handleToggle: ", currentMode);
  }

  function checkMode() {
    currentMode = localStorage.getItem("theme") || "";

    if (currentMode === "light") {
      currentMode = "light";
      icon = dark;
      document.documentElement.setAttribute("data-theme", currentMode);
      return;
    } else if (currentMode === "dark") {
      currentMode = "dark";
      icon = light;
      document.documentElement.setAttribute("data-theme", currentMode);
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
      icon = light;
      currentMode = "dark";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      icon = dark;
      currentMode = "light";
    }
    localStorage.setItem("theme", currentMode);
  }

  onMount(() => {
    //document.cookie = "csrf_cookie=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC";
    setLanguage();
  });
</script>

<div class="rz_theme" id="rz_theme">
  {checkMode()}

<button onclick={handleToggle} onfocus="{setLanguage}" onmouseover={setLanguage}>
      <img
        src={icon}
        alt="{dark_txt}|{light_txt}"
        title="{dark_txt}|{light_txt}"
        width="15px"
        height="auto"
        id="darkM"
        decoding="auto"
      />
</button>
</div>

<style>
  button {
    width:35px;
    height:35px;
    background-color: var(--transparency);
    border: none;
  }
  button:hover {
    border: var(--border-width) var(--border-style) var(--border-color);
    border-radius: var(--border-radius);
    cursor: pointer;
  }
</style>