export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#e0f2ff",
          200: "#b9e0ff",
          300: "#82c8ff",
          400: "#4dafff",
          500: "#1A73E8", // main blue
          600: "#1557b0",
        },
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
        card: "0 6px 16px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "1rem",
        xxl: "1.5rem",
      },
    },
  },
  plugins: [],
};
