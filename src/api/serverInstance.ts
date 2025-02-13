import { authOptions } from "@/app/api/auth/[...nextauth]/auth"
import { default as Axios } from "axios"
import { getServerSession } from "next-auth"

export const serverInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
})

serverInstance.interceptors.request.use(
  async (config) => {
    try {
      const session = await getServerSession(authOptions)
      if (!session) throw new Error("Axios client-auth interceptor error: no session")
      const accessToken = session.user.accessToken
      config.headers.Authorization = `Bearer ${accessToken}`
      return config
    } catch (error) {
      return Promise.reject(error)
    }
  },
  (error) => Promise.reject(error)
)

serverInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    try {
      console.log("error", error)
      // Todo implement refreshToken logic

      if (error.response?.status === 401) {
        console.log("AccessToken 만료")

        const session = await getServerSession(authOptions)
        const refreshToken = session?.user.refreshToken

        const { data: refreshTokenData } = await Axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh`,
          null,
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
              "Content-Type": "application/json"
            }
          }
        )
        error.config.headers.Authorization = `Bearer ${refreshTokenData.body.accessToken}`
        return serverInstance(error.config)
      }
      return Promise.reject(error)
    } catch (refreshError) {
      return Promise.reject(refreshError)
    }
  }
)
