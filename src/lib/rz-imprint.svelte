<svelte:options customElement="rz-imprint" /> 

<script lang="ts">

export let language:string = "de";



const languages = [
  { code: "en", name: "English", short: "EN" },
  { code: "de", name: "Deutsch", short: "DE" },
];
const shortLanguages = languages.map((lang) => lang.code);

let content:string = "";

function getBrowserLocales() {
  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language]
      : navigator.languages;

  if (browserLocales) {
    const lang = browserLocales[0].split(/-|_/)[0];
    //console.info("browserLocale: ", lang);
    if(shortLanguages.includes(lang)) {
      return lang;
    } else {
          return languages[0].code;
    }
  }
  return languages[0].code;
}

function locateLanguage() {
  language = getBrowserLocales();
  language = localStorage.getItem("language") || language;
  if(!shortLanguages.includes(language)) {
    language = languages[0].code;
  }
}

function doIt(tmp:any){
  locateLanguage();
  getImprint();
}

async function getImprint(){
  const url = "imprint_" + language + ".htm";
  //console.info("getImprint: ", url);

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


<button onclick="{getImprint}">Get Imprint</button><br/>

<div class="rz-imprint">
  <div class="rz-imprint-content" use:doIt>
    {@html content}
  </div>
</div>


<style>
</style>