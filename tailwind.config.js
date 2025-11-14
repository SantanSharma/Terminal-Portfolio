/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#0b0f19',
        'terminal-dark': '#111827',
        'terminal-purple': '#a78bfa',
        'terminal-green': '#4ade80',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
