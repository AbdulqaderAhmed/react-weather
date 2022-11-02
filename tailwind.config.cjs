/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sunny: "url('./src/image/sunny.jpg')",
        rainy: "url('./src/image/cloud2.jpg')",
        partial: "url('./src/image/partial.jpg')",
        cloudy: "url('./src/image/rain2.jpg')",
      },
    },
  },
  plugins: [],
};
