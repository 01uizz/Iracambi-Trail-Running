/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f0',
          100: '#d9ecd9',
          200: '#b3d9b3',
          300: '#7cba7c',
          400: '#4d9b4d',
          500: '#2d7d2d',
          600: '#1e6b1e',
          700: '#165516',
          800: '#0f3d0f',
          900: '#0a2a0a',
        },
        earth: {
          50: '#faf5f0',
          100: '#f0e4d4',
          200: '#dfc5a0',
          300: '#c9a070',
          400: '#b07d48',
          500: '#8b5e30',
          600: '#6d4624',
          700: '#52331a',
          800: '#3a2412',
          900: '#25170b',
        },
        trail: {
          gold: '#c9a84c',
          amber: '#d4762a',
          moss: '#5a7a3a',
        }
      },
      fontFamily: {
        display: ['"Outfit"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
