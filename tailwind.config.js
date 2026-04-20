/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./pages/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sg-bg": "#0f0f0f",
        "sg-bg-soft": "#10131a",
        "sg-red": "#8f0f1f",
      },
      boxShadow: {
        nav: "0 10px 30px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
