import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string
      userName?: string | null
      refreshToken?: string
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    refreshToken?: string
  }
}
