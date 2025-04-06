<svelte:options customElement="rz-fontsize" /> 

<script lang="ts">

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
  <button class="dropbtn"><img src="/img/icons/glasses-outline.svg" alt="fontsize" title="fontsize"></button>
  <div class="dropdown-content">
    <button class="fs_small" onclick={onSmall} title="Small">S</button>
    <button class="fs_medium" onclick={onMedium} title="Medium">M</button>
    <button class="fs_large" onclick={onLarge} title="Large">L</button>
    <button class="fs_xlarge" onclick={onXlarge} title="X-Large">XL</button>
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