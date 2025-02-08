"use client"
import axios, { default as Axios, AxiosRequestConfig, AxiosResponse } from "axios"
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

export const customInstance = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = axios.CancelToken.source()
  const promise = clientInstance({ ...config, cancelToken: source.token }).then(({ data }: AxiosResponse<T>) => data)
  // @ts-expect-error ...
  promise.cancel = () => {
    source.cancel("Query was cancelled")
  }
  return promise
}

export type ErrorType<Error> = Error
export type BodyType<BodyData> = BodyData
