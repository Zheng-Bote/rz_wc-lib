<svelte:options customElement="rz-language" /> 

<script lang="ts">
import { onMount,  onDestroy } from 'svelte';

const languages = [
  { code: "en", name: "English", short: "EN" },
  { code: "de", name: "Deutsch", short: "DE" },
];
const shortLanguages = languages.map((lang) => lang.code);

let language: string = languages[0].code;



//const myChannel = new BroadcastChannel("language_channel");
//myChannel.onmessage = function (event) {
//  console.log("myChannel.onmessage = ", event.data);
//};

function sendBroadCast(language: string) {
  const languageChannel = new BroadcastChannel("language_channel");
  languageChannel.postMessage(language);
}

function getBrowserLocales() {
  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language]
      : navigator.languages;

  if (browserLocales) {
    const lang = browserLocales[0].split(/-|_/)[0];
    console.info("browserLocale: ", lang);
    if(shortLanguages.includes(lang)) {
      return lang;
    } else {
          return languages[0].code;
    }
  }
  return languages[0].code;
}

function setLanguage() {
  language = getBrowserLocales();
  language = localStorage.getItem("language") || language;
  localStorage.setItem("language", language);
  return language;
}

function toggleLanguage() {
  language = localStorage.getItem("language") || language;

  if (language === languages[0].code) {
    language = languages[1].code;
  } else {
    language = languages[0].code;
  }
  localStorage.setItem("language", language);
  document.documentElement.setAttribute("lang", language);
  //console.info("toggleLanguage: ", language);
  sendBroadCast(language);
}

onMount(() => {
		//console.log('the component has mounted');
    setLanguage();
});

onDestroy(() => {
	//console.log('the component is being destroyed');
});

</script>


<span class="language">
  <button onclick="{toggleLanguage}"><img src="/img/icons/language-outline.svg" alt="{languages[1].short}|{languages[0].short}" title="{languages[1].short}|{languages[0].short}" ></button>
</span>

<style>
  @scope (.language){
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

    img {
      width: 15px;
      height: auto;  
      decoding: auto;
    }
  }
</style>