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

      return Promise.reject(refreshError)
    } catch (refreshError) {
      return Promise.reject(refreshError)
    }
  }
)
