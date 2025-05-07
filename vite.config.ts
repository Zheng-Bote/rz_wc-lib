import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "src/lib/rz-breadcrumbs.js",
        "src/lib/rz-cookie-alert.js",
        "src/lib/rz-clock.js",
        "src/lib/Counter.svelte",
        "src/lib/rz-header.svelte",
        "src/lib/rz-fontsize.svelte",
        "src/lib/rz-theme.svelte",
        "src/lib/rz-footer.svelte",
        "src/lib/rz-language.svelte",
        "src/lib/rz-modal.svelte",
        "src/lib/rz-imprint.svelte",
        "src/lib/rz-datetime.svelte",
        "src/lib/rz-online.svelte",
        "src/lib/rz-button-top.svelte",
        "src/lib/rz-loginform.svelte",
        "src/lib/rz-navmenu.svelte",
        "src/lib/rz-imagecard.svelte",
      ],
      output: {
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
      },
      external: [svelte()],
    },
  },
  plugins: [svelte()],
});
