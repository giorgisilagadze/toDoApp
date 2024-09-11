import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "rgba(84, 88, 113, 1)",
      },
      backgroundColor: {
        body: "rgba(48, 80, 125, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
