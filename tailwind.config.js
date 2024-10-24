// tailwind.config.js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Main app file
    "./app/**/*.{js,jsx,ts,tsx}", // App folder
    "./components/**/*.{js,jsx,ts,tsx}", // Components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
