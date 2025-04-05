<svelte:options customElement="rz-theme" /> 

<script lang="ts">

let currentMode: string = "";
let dark: string = "/img/icons/moon-outline.svg";
let light: string = "/img/icons/sunny-outline.svg";
let icon: string = "";

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
    console.info("handleToggle: ", currentMode);


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
</script>

<div class="rz_theme" id="rz_theme">
  {checkMode()}

<button onclick={handleToggle}>
      <img
        src={icon}
        alt="toogle light Mode"
        title="toogle light Mode"
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