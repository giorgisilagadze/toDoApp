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
        placeholder: "rgba(176, 176, 176, 1)",
        mainColor: "rgba(48, 80, 125, 1)",
        todoColor: "rgba(108, 134, 168, 1)",
        purple: "rgba(106, 108, 224, 1)",
      },
      backgroundColor: {
        body: "rgba(48, 80, 125, 0.25)",
        mainbgColor: "rgba(106, 108, 224, 1)",
        todoBgColor: "rgba(246, 250, 255, 1)",
        todoChildBgColor: "rgba(232, 241, 253, 1)",
        popUpBg: "rgba(144, 138, 138, 0.5)",
        hrBg: "rgba(106, 108, 224, 0.3)",
      },
      boxShadow: {
        card: "0px 2px 4px 0px rgba(106, 108, 224, 0.15)",
        todo: "1px 1px 4px 0px rgba(48, 80, 125, 0.25) inset",
        button: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      borderColor: {
        mainBorder: "rgba(106, 108, 224, 1)",
      },
    },
    screens: {
      md: { min: "375px" },
      md600: { min: "600px" },
      sm: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1440px" },
    },
  },
  plugins: [],
};
export default config;
