/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-red-400',
    'hover:bg-red-500',
    'bg-green-400',
    'hover:bg-green-500',
    'bg-yellow-400',
    'hover:bg-yellow-500',
    'bg-zinc-400',
    'hover:bg-zinc-500',
  ]
}