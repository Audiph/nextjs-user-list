/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nav-border': '#EBEAEA',
      },
      screens: {
        xs: '400px',
      },
      maxWidth: {
        '10xl': '1680px',
      },
    },
  },
  plugins: [],
};
