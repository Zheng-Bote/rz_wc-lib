import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "src/lib/Counter.svelte",
        "src/lib/rz-header.svelte",
        "src/lib/rz-fontsize.svelte",
        "src/lib/rz-theme.svelte",
        "src/lib/rz-footer.svelte",
        "src/lib/rz-language.svelte",
        "src/lib/rz-modal.svelte",
        "src/lib/rz-imprint.svelte",
        "src/lib/rz-datetime.svelte",
      ],
      output: {
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
      },
      external: ["svelte"],
    },
  },
  plugins: [svelte()],
  compilerOptions: {
    customElement: true,
  },
});
