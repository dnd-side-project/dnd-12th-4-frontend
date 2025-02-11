import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      sm: "280px",
      md: "375px",
      lg: "460px"
    },
    fontFamily: {
      pretendard: ["var(--font-pretendard)"]
    },
    fontSize: {
      "headline-01": ["24px", { fontWeight: 700, lineHeight: "1.5", letterSpacing: "-2" }],
      "headline-02": ["20px", { fontWeight: 700, lineHeight: "1.5", letterSpacing: "-2" }],
      "subtitle-01": ["20px", { fontWeight: 600, lineHeight: "1.5", letterSpacing: "-0.2" }],
      "subtitle-02": ["18px", { fontWeight: 600, lineHeight: "1.5", letterSpacing: "-0.2" }],
      "subtitle-03": ["16px", { fontWeight: 600, lineHeight: "1.5", letterSpacing: "-0.2" }],
      "subtitle-04": ["14px", { fontWeight: 600, lineHeight: "1.5", letterSpacing: "-0.2" }],
      "body-01": ["16px", { fontWeight: 500, lineHeight: "1.6", letterSpacing: "-0.2" }],
      "body-02": ["16px", { fontWeight: 400, lineHeight: "1.6", letterSpacing: "-0.2" }],
      "body-03": ["14px", { fontWeight: 500, lineHeight: "1.4", letterSpacing: "-0.2" }],
      "body-04": ["14px", { fontWeight: 400, lineHeight: "1.4", letterSpacing: "-0.2" }],
      "caption-01": ["12px", { fontWeight: 500, lineHeight: "1.4", letterSpacing: "-0.2" }],
      "caption-02": ["12px", { fontWeight: 400, lineHeight: "1.4", letterSpacing: "-0.2" }]
    },
    borderRadius: {
      xsm: "8px",
      sm: "12px",
      md: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "28px"
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FDD835",
          100: "#FDD83526",
          200: "#FFF1BF",
          300: "#FFE057",
          400: "#FDD835",
          500: "#FFD000"
        },
        secondary: {
          DEFAULT: "#1263C9",
          100: "#358FFF26",
          200: "#A2CBFF",
          300: "#358FFF",
          400: "#1263C9"
        },
        "gray-scale": {
          DEFAULT: "#292D30",
          100: "#F4F7F9",
          200: "#ECF0F3",
          300: "#D7DFE7",
          400: "#B4C0CD",
          500: "#9CAAB9",
          600: "#637180",
          700: "#3C4754",
          800: "#2F363E",
          900: "#292D30",
          1000: "#1A1E21"
        }
      }
    }
  },
  plugins: []
} satisfies Config
