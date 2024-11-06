/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // This includes the HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
