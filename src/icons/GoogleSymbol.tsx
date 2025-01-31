import React from "react"

interface GoogleSymbolProps {
  size?: number | string
}

export const GoogleSymbol: React.FC<GoogleSymbolProps> = ({ size = "24px" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 48 48">
    <path
      fill="#4285F4"
      d="M46.06 24.62c0-1.6-.14-3.13-.41-4.62H24v9.15h12.67c-.57 2.9-2.19 5.36-4.67 7.02v5.86h7.5c4.39-4.05 6.91-10.02 6.91-17.41z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.3 0 11.55-2.1 15.4-5.69l-7.5-5.86c-2.1 1.42-4.8 2.26-7.9 2.26-6.08 0-11.24-4.11-13.1-9.64H3.2v6.03C7.09 42.12 14.94 48 24 48z"
    />
    <path
      fill="#FBBC05"
      d="M10.9 28.07c-.48-1.42-.74-2.92-.74-4.47s.26-3.05.74-4.47V13.1H3.2C1.17 17.1 0 20.9 0 24c0 3.11 1.17 6.9 3.2 10.9l7.7-6.03z"
    />
    <path
      fill="#EA4335"
      d="M24 9.54c3.43 0 6.51 1.18 8.93 3.49l6.64-6.64C34.98 2.05 30.3 0 24 0 14.94 0 7.09 5.88 3.2 13.1l7.7 6.03c1.86-5.53 7.02-9.64 13.1-9.64z"
    />
  </svg>
)
