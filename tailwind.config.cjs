/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html, ts, js, svelte}",
    "./src/**/*.{html, ts, js, svelte}",
    "./src/**/*.svelte",
  ],
  theme: {
    extend: {
      colors: {
        main: "#151515",
        mainsec: "#252525",
      },
    },
  },
  plugins: [],
};
