/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        erzi: { red: "#E21D2B", dark: "#0B0D12", gray: "#14171f", ice: "#EAF2FB" },
      },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
};