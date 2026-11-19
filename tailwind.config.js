/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: '#F4EEE3',
        night: '#0B0A09',
        ink: '#1A1816',
        brass: '#D4A373',
        beam: '#A78BFA',
        brand: {
          DEFAULT: '#2D0891',
          hover: '#3D0CB8',
          light: '#7C3AED',
          bright: '#A78BFA',
          glow: 'rgba(77, 18, 222, 0.45)',
        },
      },
      fontFamily: {
        sans: ['Roboto', '"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
        heading: ['Ubuntu', 'Archivo', 'sans-serif'],
        archivo: ['Ubuntu', 'Archivo', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        marker: ['"Permanent Marker"', 'cursive'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
