/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      serif: ["Crimson Text", "ui-serif"],
      sans: ["Nunito Sans", "ui-sans-serif", "system-ui"],
      mono: ["IBM Plex Mono", "ui-monospace"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
