/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'thresh-blue': '#3B36C9',  // Main brand color: rgb(59, 54, 201)
        'thresh-light': '#D7D7F5',  // Lighter accent color
        'thresh-dark': '#1a1a1a',
      },
    },
  },
  plugins: [],
}