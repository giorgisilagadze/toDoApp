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
        todoBgColor: "#E8F1FD",
        popUpBg: "rgba(144, 138, 138, 0.5)",
      },
      boxShadow: {
        card: "0px 2px 4px 0px rgba(106, 108, 224, 0.15)",
        todo: "1px 1px 4px 0px rgba(48, 80, 125, 0.25) inset",
      },
    },
  },
  plugins: [],
};
export default config;
