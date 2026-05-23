import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#242124",
        muted: "#716872",
        blush: "#F7DCE5",
        rosewood: "#A94C67",
        petal: "#FFF5F7",
        clay: "#E8D8CB",
        sage: "#7A9A87",
        champagne: "#F7E8C8"
      },
      boxShadow: {
        soft: "0 16px 45px rgba(95, 70, 80, 0.12)",
        tight: "0 10px 24px rgba(36, 33, 36, 0.08)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
