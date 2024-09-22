import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "480": "30rem",
      },
      fontFamily: {
        merriweather_sans: ["var(--font-merriweather-sans)", "sans-serif"],
        madimi_one: ["var(--font-madimi-one)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#f1bc9b",
        grayBlue: "#31374D",
        clear_shell: "#FEECDC",
        panache: "#DEFFC5",
      },
      fontSize: {
        "40px": "3rem",
      },
      content: {
        arrow: 'url("../app/image/icon/icon_arrow.svg")',
        sun: 'url("../app/image/icon/icon_sun.svg")',
        watering: 'url("../app/image/icon/icon_watering.svg")',
        plantsize: 'url("../app/image/icon/icon_plantsize.svg")',
      },
      gridTemplateColumns: {
        aspects: "max-content auto",
      },
      screens: {
        ms: "390px",
        mt: "560px",
      },
    },
  },
  plugins: [],
};
export default config;
