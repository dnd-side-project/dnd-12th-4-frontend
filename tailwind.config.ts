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
        background: "var(--background)",
        foreground: "var(--foreground)"
      }
    }
  },
  plugins: []
} satisfies Config
