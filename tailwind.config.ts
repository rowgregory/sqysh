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
        inter: ["var(--font-inter)"],
        changa: ["var(--font-changa)"],
      },
      backgroundImage: {
        "gray-white-gray":
          "radial-gradient(circle, rgba(180,180,180,1) 0%, #05071a 100%)",
        sqysh: `url('/images/sqysh.png')`,
        "neon-chevron": `url('/images/button_small_chevron.png')`,
      },
      screens: {
        1070: "1070px",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
    },
  },
};
export default config;
