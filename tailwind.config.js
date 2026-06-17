/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        brand: {
          ocean: "#0ea5e9",
          oceanDark: "#0284c7",
          lagoon: "#059669",
          lagoonDark: "#047857",
          sand: "#f59e0b",
          sandDark: "#d97706",
          sky: "#e0f2fe",
          cream: "#fefce8",
          ink: "#0f172a",
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans SC"',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(15, 23, 42, 0.06), 0 8px 24px -8px rgba(14, 165, 233, 0.12)",
        card: "0 4px 20px -4px rgba(15, 23, 42, 0.08)",
        cardHover: "0 12px 40px -10px rgba(14, 165, 233, 0.25)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(2deg)" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out both",
        fadeIn: "fadeIn 0.4s ease-out both",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        wave: "wave 18s linear infinite",
      },
    },
  },
  plugins: [],
};
