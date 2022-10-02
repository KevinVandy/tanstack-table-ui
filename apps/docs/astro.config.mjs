import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), solidJs(), react(), vue(), mdx(), tailwind()]
});