/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F4F6F3',
          DEFAULT: '#1C1E2D', // This sets the default color
          dark: '#E1E6E0',
        },
      },
    },
  },
}

