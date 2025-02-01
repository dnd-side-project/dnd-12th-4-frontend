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
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)",
          10: "var(--primary-color-10)",
          20: "var(--primary-color-20)",
          30: "var(--primary-color-30)",
          40: "var(--primary-color-40)",
          50: "var(--primary-color-50)",
          60: "var(--primary-color-60)",
          70: "var(--primary-color-70)",
          80: "var(--primary-color-80)",
          90: "var(--primary-color-90)"
        },
        secondary: {
          DEFAULT: "var(--secondary-color)",
          10: "var(--secondary-color-10)",
          20: "var(--secondary-color-20)",
          30: "var(--secondary-color-30)",
          40: "var(--secondary-color-40)",
          50: "var(--secondary-color-50)",
          60: "var(--secondary-color-60)",
          70: "var(--secondary-color-70)",
          80: "var(--secondary-color-80)",
          90: "var(--secondary-color-90)"
        }
      }
    }
  },
  plugins: []
} satisfies Config
