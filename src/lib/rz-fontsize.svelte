<svelte:options customElement="rz-fontsize" /> 

<script lang="ts">
import { onMount } from "svelte";

  let locale_en:string = "en";
  let locale_de:string = "de";
  let language:string = "";  
  
  let small:string, medium:string, large:string, xlarge:string = "";

  let fontsize_en = "Fontsize";
  let fontsize_de = "Schriftgröße";
  let fontsize:string = fontsize_en;

  let small_en:string = "small font";
  let medium_en:string ="medium font";
  let large_en:string = "large font";
  let xlarge_en:string = "x-large font";

  let small_de:string = "kleine Schrift";
  let medium_de:string ="mittlere Schrift";
  let large_de:string = "große Schrift";
  let xlarge_de:string = "sehr große Schrift";

  function setLanguage(){
    language = localStorage.getItem("language") || locale_en;
  
    switch(language){
      case "de":{
        small = small_de;
        medium = medium_de;
        large = large_de;
        xlarge = xlarge_de;
        fontsize = fontsize_de;
        break;
      }
      default:{
        small = small_en;
        medium = medium_en;
        large = large_en;
        xlarge = xlarge_en;
        fontsize = fontsize_en;
        break;
      }
    }
  }

  function onSmall() {
    let htmlRoot = document.getElementsByTagName("html")[0];
    htmlRoot.style.fontSize = "small";
  }

  function onMedium() {
    let htmlRoot = document.getElementsByTagName("html")[0];
    htmlRoot.style.fontSize = "medium";
  }

  function onLarge() {
    let htmlRoot = document.getElementsByTagName("html")[0];
    htmlRoot.style.fontSize = "large";
  }

  function onXlarge() {
    let htmlRoot = document.getElementsByTagName("html")[0];
    htmlRoot.style.fontSize = "x-large";
  }

  onMount(() => {
    setLanguage();
  });

</script>

<!--
<div class="rz_fontsize" id="rz_fontsize">

  <button class="fs_small" onclick={onSmall}>S</button>
  <button class="fs_medium" onclick={onMedium}>M</button>
  <button class="fs_large" onclick={onLarge}>L</button>
  <button class="fs_xlarge" onclick={onXlarge}>XL</button>
</div>
-->
<div class="dropdown">
  <button class="dropbtn" onclick={setLanguage} onfocus="{setLanguage}" onmouseover={setLanguage}><img src="img/icons/glasses-outline.svg" alt="{fontsize}" title="{fontsize}"></button>
  <div class="dropdown-content">
    <button class="fs_small" onclick={onSmall} title="{small}">S</button>
    <button class="fs_medium" onclick={onMedium} title="{medium}">M</button>
    <button class="fs_large" onclick={onLarge} title="{large}">L</button>
    <button class="fs_xlarge" onclick={onXlarge} title="{xlarge}">XL</button>
  </div>
</div>

  <!--<img src="/img/icons/search-outline.svg" alt=""  class="fs_small fs">-->
<style>
  /*
.rz_fontsize {

  width: fit-content;

  .fs_small {
    font-size: 13px;
  }
  .fs_medium {
    font-size: 16px;
  }
  .fs_large {
    font-size: 18px;
  }
  .fs_xlarge {
    font-size: 24px;
  }
  button {
    width:35px;
    height:35px;
    background-color: var(--transparency);
    border: none;
  }
  button:hover {
    border: var(--border-width) var(--border-style) var(--border-color);
    border-radius: var(--border-radius);
  }
}
*/


.dropdown {
  position: relative;
  display: inline-block;

  button {
    width:35px;
    height:35px;
    background-color: var(--transparency);
    border: none;
    display: block;
  }
  button:hover {
    border: var(--border-width) var(--border-style) var(--border-color);
    border-radius: var(--border-radius);
    cursor: pointer;
  
  }

  .dropbtn {
    border: none;
    img{
      width:25px;
    }
  }

}

.dropdown:hover .dropdown-content {
  display: block;
  
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--background-color-header);
  min-width: 35px;

  z-index: 1;
  & .fs_small {
    font-size: 13px;
  }
  & .fs_medium {
    font-size: 16px;
  }
  & .fs_large {
    font-size: 18px;
  }
  & .fs_xlarge {
    font-size: 24px;
  }
}



</style>