import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  integrations: [],
  site: "https://datkumar.github.io",

  vite: {
    plugins: [tailwindcss()],
  },
});
