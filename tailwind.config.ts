import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3E5C4B",
        secondary: "#D4A5A5",
        accent: "#B7C2B1",
        background: "#FAF9F6",
        foreground: "#A89F91",
      },
    },
  },
  plugins: [],
};
export default config;
