/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette
        navy: "#0B1F3A",
        slate: "#2F3E4E",
        charcoal: "#1A1D23",
        offwhite: "#F5F7FA",

        // Accents
        electric: "#2D9CDB",
        cyan: "#00D1FF",
        indigo: "#5A6CFF",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0B1F3A 0%, #1A1D23 50%, #2D9CDB 100%)",
        "text-gradient":
          "linear-gradient(90deg, #2D9CDB, #5A6CFF)",
        "glow-radial":
          "radial-gradient(circle at center, rgba(0,209,255,0.15), transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 209, 255, 0.35)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

