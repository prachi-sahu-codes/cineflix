/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffd62c",
        yellowDark: "#e5b703",
        navBg: "#111827",
        bodyBg: "#030712",
        cardBg: "#0a101c",
        cardBgHover: "#18202b",
        modalBg: "#1f2937",
        grayLight: "#e5e7eb",
        grayMedium: "#6b7280",
        grayDark: "#47515f",
        textLight: "#eff0f1",
        textMedium: "#858c98",
      },
    },
  },
  plugins: [],
};
