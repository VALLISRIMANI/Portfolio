/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        // Page background
        page: {
          DEFAULT: '#FAFBFC',    // light: clean neutral white with subtle blue tint
          dark: '#0D1F1A',       // dark: deep teal-black
        },
        // Card / surface
        card: {
          DEFAULT: '#FFFFFF',    // light: pure white cards
          dark: '#142920',       // dark: slightly lighter than page
        },
        // Subtle fill (inputs, tags, muted surfaces)
        subtle: {
          DEFAULT: '#F0F4F8',    // light: light neutral surface
          dark: '#1A3A30',       // dark: muted teal
        },
        // Border
        border: {
          DEFAULT: '#D4DDE5',    // light: neutral gray-teal border
          dark: '#1E3D32',       // dark: dim teal border
        },
        // Text colors for light mode
        text: {
          primary: '#0F172A',    // light: dark slate for main text
          secondary: '#334155',  // light: medium slate for secondary text
          tertiary: '#64748B',   // light: light slate for tertiary text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        5: '5px',
      },
    },
  },
  plugins: [],
}