/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}", // Scans all files in the app directory
    "./pages/**/*.{js,jsx,mdx}", // Also scans pages if you ever add them
    "./components/**/*.{js,jsx,mdx}", // Scans a components directory if you add one
    "./app/_components/**/*.{js,jsx}", // Specifically scans our component structure
  ],
  theme: {
    extend: {
      // We can add custom theme properties here later if needed
    },
  },
  plugins: [],
};
