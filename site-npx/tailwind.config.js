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
        "bg-surface": "rgb(var(--bg-surface) / <alpha-value>)",

        /* TEXT */
        "text-main": "rgb(var(--text-main) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted) / <alpha-value>)",

        /* GRID */
        "grid-line": "rgb(var(--grid-line) / <alpha-value>)",
      },

      backgroundImage: {
        "glow-radial":
          "radial-gradient(circle at 50% 50%, rgba(var(--primary), 0.15), transparent 60%)",
      },

      boxShadow: {
        glow: "0 0 30px rgba(var(--primary), 0.3)",
      },

      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.8 },
        },
      },

      animation: {
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};