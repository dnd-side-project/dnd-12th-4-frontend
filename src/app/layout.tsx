import { Pretendard } from "@/fonts"
import { generateColorPalette, generateCSSVariables } from "@/utils/setDocumentColor"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import MobileViewLayout from "../components/layout/MobileViewLayout"
import "../styles/globals.css"
import "../styles/reset.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  //#region palette setting
  const cookieStore = await cookies()
  const primaryColor = cookieStore.get("primary")?.value
  let cssVariables
  if (primaryColor) {
    const palette = generateColorPalette(primaryColor)
    cssVariables = generateCSSVariables(palette, "primary", primaryColor)
  }
  //endregion palette setting

  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            ${cssVariables}
          }
        `}</style>
      </head>
      <body className={Pretendard.variable}>
        <MobileViewLayout>{children}</MobileViewLayout>
      </body>
    </html>
  )
}
