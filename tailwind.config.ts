import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        "Paytone-One": ['"Paytone One"', "sans-serif"],
        Raleway: ['"Raleway"', "sans-serif"],
        Oswald: ['"Oswald"', "sans-serif"],
        Cabin: ['"Cabin"', "sans-serif"],
      },
      backgroundImage: {
        "gray-white-gray":
          "radial-gradient(circle, rgba(180,180,180,1) 0%, #05071a 100%)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
