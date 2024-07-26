/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E15638'
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
          light: '#FFFFFF'
        },
        onSurface: {
          light: '#24232C'
        },
        outline: {
          light: '#969080'
        },
        surfaceVariant: {
          light: '#0A0A0A'
        }
      }
    },
  },
  fontFamily: {
    'caveat': ['Caveat', 'sans-serif']
  },
  plugins: [],
}
