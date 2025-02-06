import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string
      isNewMember?: boolean
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
  }
}
