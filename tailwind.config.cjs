/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sunny: "url('./src/assets/image/sunny.jpg')",
        rainy: "url('./src/assets/image/cloud2.jpg')",
        partial: "url('./src/assets/image/partial.jpg')",
        cloudy: "url('./src/assets/image/rain2.jpg')",
      },
    },
  },
  plugins: [],
};
