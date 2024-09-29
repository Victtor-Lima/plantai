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
        "400": "25rem",
        "420": "26.25rem",
        "480": "30rem",
        "600": "37.5rem",
      },
      height: {
        "500": "32.18rem",
      },
      maxWidth: {
        sec: "93.75rem",
      },
      margin: {
        "m-centro": "0 auto",
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
        "34px": [
          "1.875rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        "36px": ["2.25rem", { lineHeight: "3rem" }],
        "48px": [
          "3.2rem",
          {
            lineHeight: "4rem",
          },
        ],
      },
      content: {
        arrow: 'url("../app/image/icon/icon_arrow.svg")',
        sun: 'url("../app/image/icon/icon_sun.svg")',
        watering: 'url("../app/image/icon/icon_watering.svg")',
        plantsize: 'url("../app/image/icon/icon_plantsize.svg")',
        arrowSpiral1: 'url("../app/image/icon/arrow_spiral1.svg")',
        arrowSpiral2: 'url("../app/image/icon/arrow_spiral2.svg")',
        imglink1: 'url("../app/image/img_link1.svg")',
        imglink2: 'url("../app/image/img_link2.svg")',
        imglink3: 'url("../app/image/img_link3.svg")',
        imglink4: 'url("../app/image/img_link4.svg")',
      },
      gridTemplateColumns: {
        col2: "max-content auto",
        col2a: "2fr 1fr",
        col2b: "1.5fr 1fr",
      },
      gridTemplateRows: {
        row2: "max-content auto",
      },
      screens: {
        ms: "390px",
        mt: "450px",
        msto: "1220px",
        mst: "1400px",
      },
      inset: {
        full2: "150%",
      },
    },
  },
  plugins: [],
  autoprefixer: [],
};
export default config;
