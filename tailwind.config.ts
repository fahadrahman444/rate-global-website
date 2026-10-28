import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#1A73E8",
          darkblue: "#1557B0",
          charcoal: "#111827",
          slate: "#5F6D7E",
          muted: "#7C8BA0",
          subtle: "#F8FAFC",
        },
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "28px",
      },
      boxShadow: {
        glass: "0 24px 50px -12px rgba(28, 56, 102, 0.08), inset 0 1px 1px #FFFFFF",
        "nav-glass": "0 4px 20px rgba(0, 0, 0, 0.03)",
        "pill-blue": "0 8px 20px -4px rgba(37, 99, 235, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
