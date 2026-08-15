import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F5F0E7",
        bgAlt: "#EDE6D6",
        ink: "#20201D",
        inkDeep: "#15130F",
        muted: "#777066",
        accent: "#9C7A46",
        accentDeep: "#6B4F2A",
        line: "#DED5C0",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
