<svelte:options customElement="rz-imprint" /> 

<script lang="ts">

export let language:string = "de";

let content:string = "Inhalt";

async function getImprint(){
const url = "/imprint_" + language + ".htm";
console.info("getImprint: ", url);

try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Response status: ${response.status}`);
    } else {
      const text = await response.text();
      content = text;
    }

  } catch (error) {
    console.error("Error fetching imprint:", error);
  }

}

</script>


<button onclick="{getImprint}">Get Imprint</button>

<div class="rz-imprint">
  <div class="rz-imprint-content">{@html content}</div>
</div>


<style>
</style>