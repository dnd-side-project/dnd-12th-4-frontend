import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { PROTECTED_ROUTES } from "@/constants/app-routes"

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const { pathname } = request.nextUrl
  const isNumericPath = pathname.match(/^\/\d+($|\/.*)/)

  if ((!token && PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) || isNumericPath) {
    return NextResponse.redirect(new URL("/auth", request.url))
  }
  return NextResponse.next()
}
export const config = {
  matcher: ["/channels/:path+", "/auth/initial/:path*", "/my-page/:path*", "/(\\d+)(.*)?"]
}
