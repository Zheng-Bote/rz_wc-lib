<svelte:options customElement="rz-button-top" />

<script lang="ts">
  import { onMount } from 'svelte';

  function goToTop() {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }

  onMount(() => {
    const btnGoToTop = document.getElementById("rz_button_top");
    const top = document.getElementById("top");

    // Intersection Observer setup
    const options = { threshold: 1.0 };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target.id === "top") {
          if (btnGoToTop) {
            btnGoToTop.style.display = entry.isIntersecting ? "none" : "block";
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Start observing the body or the header (based on your needs)
    if (top) {
      observer.observe(top);
    }

  });
</script>




<p>
  <button id="btn_gototop" title="goto top" onclick={goToTop}>
    &uArr;&nbsp;top
  </button>
</p>


<style>
#rz_button_top {
  display: none;
}

button {
  position: fixed;
  bottom: 45px;
  right: 0;
  width: 50px;
  background-color: var( --background-color-footer);
  padding: 2px;
  border: none;
  cursor: pointer;
}

</style>