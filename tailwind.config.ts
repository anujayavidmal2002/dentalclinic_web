import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand blues
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb", // main CTA blue
          700: "#1d4ed8", // hover on primary
          800: "#1e40af",
          900: "#1e3a8a", // dark accents, footer bg
          950: "#172554",
        },
        // Accent — gold/champagne for premium touch
        accent: {
          300: "#fde68a",
          400: "#fbbf24",
          500: "#f59e0b", // star ratings, highlights
          600: "#d97706",
        },
        // Neutrals
        surface: {
          white: "#ffffff",
          50: "#f8fafc", // page background
          100: "#f1f5f9", // card backgrounds
          200: "#e2e8f0", // borders
          700: "#334155", // secondary text
          900: "#0f172a", // primary text
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 2px 16px 0 rgba(30, 64, 175, 0.08)",
        "card-hover": "0 8px 32px 0 rgba(30, 64, 175, 0.16)",
        cta: "0 4px 24px 0 rgba(37, 99, 235, 0.35)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
        "gradient-hero":
          "linear-gradient(to bottom right, rgba(30,64,175,0.85), rgba(37,99,235,0.6))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
export default config;
