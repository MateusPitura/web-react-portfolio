/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e95e40'
        },
        onPrimary: {
          light: '#FEFAEC'
        },
        secondary: {
          light: '#24242C'
        },
        onSecondary: {
          light: '#FEFAEC'
        },
        surface: {
          dark: "#121212",
          light: '#FFFFFF'
        },
        onSurface: {
          dark: "#E0E0E0",
          light: '#24232C'
        },
        outline: {
          light: '#969080'
        },
      }
    },
  },
  fontFamily: {
    'caveat': ['Caveat', 'sans-serif']
  },
  plugins: [],
}
