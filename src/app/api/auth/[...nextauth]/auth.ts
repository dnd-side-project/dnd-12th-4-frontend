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
        try {
          const { data: tokenData } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/kakao/exchange`, {
            headers: {
              Authorization: `Bearer ${account.access_token}`,
              "Content-Type": "application/json"
            }
          })
          token.expiredAccessToken = tokenData.body.expiredAccessToken
          token.accessToken = tokenData.body.accessToken
          token.refreshToken = tokenData.body.refreshToken
          token.userName = tokenData.body.userName
          token.channelCount = tokenData.body.channelCount
          token.channelId = tokenData.body.channelId
        } catch (error) {
          console.error("카카오 또는 DB 요청 실패:", error)
        }
      }

      const nowTime = Math.round(Date.now() / 1000)
      const shouldRefreshTime = (token.expiredAccessToken as number) - 5 * 60 - nowTime
      if (shouldRefreshTime > 0) {
        return token
      }
      return refreshAccessToken(token)
    },

    session: async ({ session, token }: { session: Session; token: JWT }) => {
      session.user.accessToken = token.accessToken
      session.user.refreshToken = token.refreshToken
      session.user.userName = token.userName
      session.user.channelCount = token.channelCount
      session.user.channelId = token.channelId
      session.user.expiredAccessToken = token.expiredAccessToken

      if (token.logout) {
        session.user.logout = true
      } else {
        session.user.logout = false
      }
      return session
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  }
}

async function refreshAccessToken(token: JWT) {
  try {
    const { data: refreshTokenData } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh`, null, {
      headers: {
        Authorization: `Bearer ${token.refreshToken}`,
        "Content-Type": "application/json"
      }
    })
    console.log("refreshTokenData", refreshTokenData)
    if (refreshTokenData.result.resultCode !== 200) {
      throw refreshTokenData
    }
    return {
      ...token,
      accessToken: refreshTokenData.body.accessToken,
      expiredAccessToken: refreshTokenData.body.expiredAccessToken,
      refreshToken: refreshTokenData.body.refreshToken ?? token.refreshToken
    }
  } catch (error) {
    console.error("refreshAccessToken-error", error)
    return { ...token, logout: true }
  }
}

export { authOptions }
