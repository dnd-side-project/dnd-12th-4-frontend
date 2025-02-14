import axios from "axios"
import { AuthOptions, Session } from "next-auth"
import { JWT } from "next-auth/jwt"
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
        try {
          const { data: tokenData } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/kakao/exchange`, {
            headers: {
              Authorization: `Bearer ${account.access_token}`,
              "Content-Type": "application/json"
            }
          })
          token.accessToken = tokenData.body.accessToken
          token.isNewMember = tokenData.body.newMember
        } catch (error) {
          console.error("카카오 또는 DB 요청 실패:", error)
        }
      }
      return token
    },
    session: async ({ session, token }: { session: Session; token: JWT }) => {
      if (token) {
        session.user.accessToken = token.accessToken
        session.user.isNewMember = token.isNewMember as boolean
      }

      return session
    }
  },

  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30
  }
}

export { authOptions }
