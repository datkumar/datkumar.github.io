/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", "ui-sans-serif", "system-ui"],
      serif: ["Lora", "ui-serif"],
      mono: ["Space Mono", "ui-monospace"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    // Only had prose-pre, prose-code before
    plugin(function ({ addVariant }) {
      addVariant(
        "prose-inline-code",
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))',
      );
    }),
  ],
};
