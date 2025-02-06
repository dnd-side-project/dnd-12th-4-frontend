"use client"
import { default as Axios } from "axios"
import { getSession } from "next-auth/react"

export const clientInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
})

clientInstance.interceptors.request.use(
  async (config) => {
    try {
      const session = await getSession()
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

clientInstance.interceptors.response.use(
  (response) => response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (error) => {
    try {
      // Todo implement refreshToken logic
    } catch (refreshError) {
      return Promise.reject(refreshError)
    }
  }
)
