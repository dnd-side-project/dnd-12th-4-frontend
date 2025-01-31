import { AuthOptions } from "next-auth"
import Kakao from "next-auth/providers/kakao"

const authOptions: AuthOptions = {
  providers: [
    Kakao({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account) {
        token.accessToken = account.access_token
        token.provider = account.provider
      }
      return token
    }
  },

  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30
  }
}

export { authOptions }
