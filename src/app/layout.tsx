import type { Metadata } from "next"
import "../styles/globals.css"
import "../styles/reset.css"
import MobileViewLayout from "../components/layout/MobileViewLayout"
import { Pretendard } from "@/fonts"
import { authOptions } from "./api/auth/[...nextauth]/auth"
import { getServerSession } from "next-auth"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={Pretendard.variable}>
        <Providers session={session}>
          <MobileViewLayout>{children}</MobileViewLayout>
        </Providers>
      </body>
    </html>
  )
}
