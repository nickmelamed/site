/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  safelist: [
    "text-offwhite",
    "text-muted",
    "bg-navy",
    "bg-charcoal",
    "bg-electric",
    "border-electric",
    "text-electric",
  ],

  theme: {
    extend: {
      colors: {
        navy: "rgb(var(--bg-main) / <alpha-value>)",
        charcoal: "rgb(var(--bg-surface) / <alpha-value>)",

        offwhite: "rgb(var(--text-main) / <alpha-value>)",
        muted: "rgb(var(--text-muted) / <alpha-value>)",

        electric: "rgb(var(--primary) / <alpha-value>)",
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(120deg, rgb(var(--bg-main)) 0%, rgb(var(--primary-alt)) 100%)",

        "glow-radial":
          "radial-gradient(circle at 50% 50%, rgba(var(--primary), 0.15), transparent 60%)",
      },

      boxShadow: {
        glow: "0 0 25px rgba(var(--primary), 0.4)",
      },

      animation: {
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },

      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
      },
    },
  },

  plugins: [],
};