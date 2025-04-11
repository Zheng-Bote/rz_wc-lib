const defaultLocale = "en";
const secondLocale = "de";
let locale = "";
let translations = "";

async function setLocale(newLocale) {
  if (newLocale === locale) {
    return;
  }
  const newTranslations = await fetchTranslationsFor(newLocale);
  locale = newLocale;
  translations = newTranslations;
  translatePage();
}

async function fetchTranslationsFor(newLocale) {
  const response = await fetch(`/i18n/${newLocale}.json`);
  return await response.json();
}

function translatePage() {
  document.querySelectorAll("[data-i18n-key]").forEach((item) => {
    translateItem(item);
  });
}

function translateItem(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[key];
  element.innerText = translation;
}
