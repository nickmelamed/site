/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        /* PRIMARY */
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-soft": "rgb(var(--primary-soft) / <alpha-value>)",
        "primary-alt": "rgb(var(--primary-alt) / <alpha-value>)",

        /* BACKGROUND */
        "bg-main": "rgb(var(--bg-main) / <alpha-value>)",
        surface: "rgb(var(--bg-surface) / <alpha-value>)",

        /* TEXT */
        text: "rgb(var(--text-main) / <alpha-value>)",
        muted: "rgb(var(--text-muted) / <alpha-value>)",

        /* GRID */
        grid: "rgb(var(--grid-line) / <alpha-value>)",
      },

      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },

      transitionTimingFunction: {
        fast: "var(--transition-fast)",
        medium: "var(--transition-medium)",
        slow: "var(--transition-slow)",
      },

      backdropBlur: {
        md: "var(--blur-md)",
        lg: "var(--blur-lg)",
      },
    },
  },

  plugins: [],
};